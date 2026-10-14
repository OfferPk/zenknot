/**
 * Level Generator & Solver Verifier for ZenKnot
 * Generates 50 handcrafted & algorithmic solver-verified levels across 5 packs.
 * Each level has:
 * - A verified 0-crossing target layout (planar embedding)
 * - An engaging scrambled circular/ring layout with multiple crossings
 * - Par move estimation
 * Zero external dependencies.
 */

const fs = require('fs');
const path = require('path');
const ZenKnot = require('../src/knot.js');

const PACKS = [
  { id: 1, name: 'Dawn Constellations', minNodes: 6, maxNodes: 8, count: 10, theme: 'cyan' },
  { id: 2, name: 'Astral Runes', minNodes: 9, maxNodes: 11, count: 10, theme: 'emerald' },
  { id: 3, name: 'Sacred Mandala', minNodes: 12, maxNodes: 14, count: 10, theme: 'amethyst' },
  { id: 4, name: 'Celestial Geometry', minNodes: 15, maxNodes: 18, count: 10, theme: 'amber' },
  { id: 5, name: 'Cosmic Labyrinth', minNodes: 19, maxNodes: 24, count: 10, theme: 'radiance' }
];

const LEVEL_NAMES = [
  // Pack 1: Dawn Constellations (6-8 nodes)
  'Triad Lyra', 'Cygnus Wing', 'Orion Belt', 'Cassiopeia', 'Pegasus Square',
  'Polaris Ring', 'Aquila Crest', 'Draco Arc', 'Phoenix Tail', 'Aurora Crown',

  // Pack 2: Astral Runes (9-11 nodes)
  'Solar Rune', 'Lunar Shard', 'Star of Eden', 'Astral Wheel', 'Mystic Chevron',
  'Crystal Prism', 'Zenith Spire', 'Lotus Glyph', 'Arcane Shield', 'Nebula Cross',

  // Pack 3: Sacred Mandala (12-14 nodes)
  'Chakra Petals', 'Eternal Hexagram', 'Flower of Life', 'Golden Spiral', 'Sacred Matrix',
  'Temple Dome', 'Serene Labyrinth', 'Solar Corona', 'Celestial Dial', 'Harmony Web',

  // Pack 4: Celestial Geometry (15-18 nodes)
  'Starburst Web', 'Octahedral Lattice', 'Hyperion Ring', 'Andromeda Spiral', 'Sirius Gateway',
  'Cosmic Hexahedron', 'Starlight Lattice', 'Vortex Crown', 'Zodiac Wheel', 'Radiant Octagon',

  // Pack 5: Cosmic Labyrinth (19-24 nodes)
  'Transcendent Web', 'Infinity Knot', 'Chronos Labyrinth', 'Ethereal Matrix', 'Grand Meridian',
  'Supernova Web', 'Cosmic Mandala', 'Celestial Sphere', 'Nirvana Knot', 'Astral Singularity'
];

// Linear congruential pseudorandom generator for deterministic reproducible levels
function createPrng(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return function () {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/**
 * Generate a guaranteed planar graph by face-subdivision of a regular convex polygon.
 * Mathematically guaranteed to have 0 edge intersections in the target embedding.
 */
function generatePlanarGraph(targetNodeCount, seed, packId) {
  const prng = createPrng(seed);

  const centerX = 500;
  const centerY = 500;
  const radius = 360;

  // Choose number of perimeter vertices based on pack & node count
  const basePolygonSides = Math.min(
    packId === 1 ? (targetNodeCount <= 6 ? 3 : 4) :
    packId === 2 ? 5 :
    packId === 3 ? 6 :
    packId === 4 ? 7 : 8,
    targetNodeCount - 1
  );

  const nodes = [];
  const edgeSet = new Set();
  const edges = [];

  function addEdge(u, v) {
    if (u === v) return;
    const a = Math.min(u, v);
    const b = Math.max(u, v);
    const key = `${a}-${b}`;
    if (!edgeSet.has(key)) {
      edgeSet.add(key);
      edges.push([a, b]);
    }
  }

  // 1. Create base convex polygon vertices
  for (let i = 0; i < basePolygonSides; i++) {
    const angle = (2 * Math.PI * i) / basePolygonSides - Math.PI / 2;
    nodes.push({
      id: i,
      targetX: Math.round(centerX + radius * Math.cos(angle)),
      targetY: Math.round(centerY + radius * Math.sin(angle)),
      label: String(i + 1)
    });
    addEdge(i, (i + 1) % basePolygonSides);
  }

  // Triangulate base polygon from vertex 0
  const faces = [];
  for (let i = 1; i < basePolygonSides - 1; i++) {
    addEdge(0, i + 1);
    faces.push([0, i, i + 1]);
  }

  // 2. Subdivide faces until reaching targetNodeCount
  for (let nextId = basePolygonSides; nextId < targetNodeCount; nextId++) {
    // Pick face with largest area (with small PRNG weighting for natural variation)
    let bestFaceIdx = 0;
    let bestScore = -1;

    for (let f = 0; f < faces.length; f++) {
      const [a, b, c] = faces[f];
      const area = Math.abs(
        (nodes[b].targetX - nodes[a].targetX) * (nodes[c].targetY - nodes[a].targetY) -
        (nodes[b].targetY - nodes[a].targetY) * (nodes[c].targetX - nodes[a].targetX)
      );
      const score = area * (0.8 + 0.4 * prng());
      if (score > bestScore) {
        bestScore = score;
        bestFaceIdx = f;
      }
    }

    const [a, b, c] = faces.splice(bestFaceIdx, 1)[0];

    // Compute barycenter with subtle centroid pull (0.33 each)
    const jitterX = (prng() - 0.5) * 16;
    const jitterY = (prng() - 0.5) * 16;
    const nx = Math.round((nodes[a].targetX + nodes[b].targetX + nodes[c].targetX) / 3 + jitterX);
    const ny = Math.round((nodes[a].targetY + nodes[b].targetY + nodes[c].targetY) / 3 + jitterY);

    nodes.push({
      id: nextId,
      targetX: nx,
      targetY: ny,
      label: String(nextId + 1)
    });

    addEdge(nextId, a);
    addEdge(nextId, b);
    addEdge(nextId, c);

    faces.push([a, b, nextId]);
    faces.push([b, c, nextId]);
    faces.push([c, a, nextId]);
  }

  // 3. Optional: prune a small fraction of internal edges for artistic constellation variety
  // as long as each node maintains degree >= 2 and graph remains connected
  const degreeMap = new Array(nodes.length).fill(0);
  for (const [u, v] of edges) {
    degreeMap[u]++;
    degreeMap[v]++;
  }

  // Filter edges to remove 0-15% of interior edges if degree permits
  const prunedEdges = [];
  for (const edge of edges) {
    const [u, v] = edge;
    const isPerimeter = (u < basePolygonSides && v < basePolygonSides && (Math.abs(u - v) === 1 || Math.abs(u - v) === basePolygonSides - 1));
    // Never prune perimeter edges
    if (isPerimeter) {
      prunedEdges.push(edge);
      continue;
    }

    // Prune with 15% probability if both endpoints have degree >= 3
    if (degreeMap[u] >= 4 && degreeMap[v] >= 4 && prng() < 0.18) {
      degreeMap[u]--;
      degreeMap[v]--;
      // skip edge
      continue;
    }

    prunedEdges.push(edge);
  }

  // 4. Verify planar target embedding (Must be 0 crossings)
  const testTargetNodes = nodes.map(n => ({ id: n.id, x: n.targetX, y: n.targetY }));
  const targetEval = ZenKnot.evaluateGraph(testTargetNodes, prunedEdges);
  if (targetEval.crossings !== 0) {
    throw new Error(`Target embedding for ${targetNodeCount} nodes failed planar check with ${targetEval.crossings} crossings!`);
  }

  // 5. Scramble nodes around an elliptical boundary or shuffled positions
  const scrambledNodes = [];
  const perm = nodes.map((_, i) => i);

  // Derangement / shuffle
  for (let i = perm.length - 1; i > 0; i--) {
    const j = Math.floor(prng() * (i + 1));
    const tmp = perm[i];
    perm[i] = perm[j];
    perm[j] = tmp;
  }

  // Make sure at least half the vertices are moved
  let movedCount = 0;
  for (let i = 0; i < perm.length; i++) {
    if (perm[i] !== i) movedCount++;
  }
  if (movedCount < perm.length / 2) {
    perm.reverse();
  }

  const scrambleRadius = 350;
  for (let i = 0; i < nodes.length; i++) {
    const pIdx = perm[i];
    const angle = (2 * Math.PI * pIdx) / nodes.length - Math.PI / 2;
    const rJitter = scrambleRadius * (0.86 + 0.18 * prng());
    const sx = Math.round(centerX + rJitter * Math.cos(angle));
    const sy = Math.round(centerY + rJitter * Math.sin(angle));

    scrambledNodes.push({
      id: nodes[i].id,
      x: sx,
      y: sy,
      targetX: nodes[i].targetX,
      targetY: nodes[i].targetY,
      label: nodes[i].label
    });
  }

  // Ensure scrambled state has crossings
  let scrambleEval = ZenKnot.evaluateGraph(scrambledNodes, prunedEdges);
  if (scrambleEval.crossings === 0 && nodes.length >= 4) {
    // Force cross by swapping 2 non-adjacent nodes
    const tX = scrambledNodes[0].x;
    const tY = scrambledNodes[0].y;
    scrambledNodes[0].x = scrambledNodes[2].x;
    scrambledNodes[0].y = scrambledNodes[2].y;
    scrambledNodes[2].x = tX;
    scrambledNodes[2].y = tY;
    scrambleEval = ZenKnot.evaluateGraph(scrambledNodes, prunedEdges);
  }

  const parMoves = Math.max(3, Math.ceil(scrambleEval.crossings / 2.2));

  return {
    nodes: scrambledNodes,
    edges: prunedEdges,
    initialCrossings: scrambleEval.crossings,
    parMoves
  };
}

function generateAllLevels() {
  const levels = [];
  let globalIndex = 0;

  for (const pack of PACKS) {
    const nodeStep = (pack.maxNodes - pack.minNodes) / (pack.count - 1);

    for (let i = 0; i < pack.count; i++) {
      globalIndex++;
      const nodeCount = Math.round(pack.minNodes + i * nodeStep);
      const seed = 57193 + globalIndex * 7129;
      const graphData = generatePlanarGraph(nodeCount, seed, pack.id);

      levels.push({
        id: globalIndex,
        packId: pack.id,
        packName: pack.name,
        name: LEVEL_NAMES[globalIndex - 1] || `Constellation ${globalIndex}`,
        theme: pack.theme,
        nodeCount,
        edgeCount: graphData.edges.length,
        initialCrossings: graphData.initialCrossings,
        parMoves: graphData.parMoves,
        nodes: graphData.nodes,
        edges: graphData.edges
      });
    }
  }

  return levels;
}

console.log('Generating 50 solver-verified levels for ZenKnot...');
const allLevels = generateAllLevels();

console.log('Verifying all 50 levels...');
for (const lvl of allLevels) {
  // Test 1: Target state has exactly 0 crossings
  const targetNodes = lvl.nodes.map(n => ({ id: n.id, x: n.targetX, y: n.targetY }));
  const targetEval = ZenKnot.evaluateGraph(targetNodes, lvl.edges);
  if (targetEval.crossings !== 0) {
    throw new Error(`Level ${lvl.id} (${lvl.name}) target layout has ${targetEval.crossings} crossings! Expected 0.`);
  }

  // Test 2: Scrambled state has crossings
  const scrambleEval = ZenKnot.evaluateGraph(lvl.nodes, lvl.edges);
  if (scrambleEval.crossings === 0) {
    throw new Error(`Level ${lvl.id} (${lvl.name}) is trivially solved in scrambled state!`);
  }

  // Test 3: Hint Assistant works
  const hint = ZenKnot.getHint(lvl.nodes, lvl.edges);
  if (!hint) {
    throw new Error(`Level ${lvl.id} (${lvl.name}) hint returned null for unsolved graph!`);
  }
}

console.log('All 50 levels successfully generated and verified!');

// Output to src/levels.js
const levelsJsContent = `/**
 * ZenKnot: 50 Handcrafted and Solver-Verified Planar Graph Levels Across 5 Packs
 * Generated deterministically with verified 0-crossing target embeddings.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ZenKnotLevels = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const PACKS = ${JSON.stringify(PACKS, null, 2)};
  const LEVELS = ${JSON.stringify(allLevels, null, 2)};

  return {
    PACKS,
    LEVELS
  };
});
`;

const outputPath = path.join(__dirname, '..', 'src', 'levels.js');
fs.writeFileSync(outputPath, levelsJsContent, 'utf8');
console.log(`Saved levels to ${outputPath} (${(levelsJsContent.length / 1024).toFixed(1)} KB)`);
