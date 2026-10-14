/**
 * Logic unit tests for ZenKnot engine
 * Node.js built-in test runner (node --test)
 */

const test = require('node:test');
const assert = require('node:assert');
const ZenKnot = require('../src/knot.js');
const Levels = require('../src/levels.js');

test('Segment-crossing detection: strictly crossing vs non-crossing', () => {
  // Classic X crossing
  const p1 = { x: 0, y: 0 };
  const p2 = { x: 100, y: 100 };
  const p3 = { x: 0, y: 100 };
  const p4 = { x: 100, y: 0 };
  assert.equal(ZenKnot.doSegmentsIntersect(p1, p2, p3, p4), true, 'Diagonal cross should intersect');

  // Parallel segments
  const p5 = { x: 0, y: 0 };
  const p6 = { x: 100, y: 0 };
  const p7 = { x: 0, y: 50 };
  const p8 = { x: 100, y: 50 };
  assert.equal(ZenKnot.doSegmentsIntersect(p5, p6, p7, p8), false, 'Parallel segments should not intersect');

  // Non-intersecting disjoint segments
  const p9 = { x: 0, y: 0 };
  const p10 = { x: 50, y: 50 };
  const p11 = { x: 60, y: 60 };
  const p12 = { x: 100, y: 100 };
  assert.equal(ZenKnot.doSegmentsIntersect(p9, p10, p11, p12), false, 'Collinear disjoint segments should not intersect');
});

test('Shared endpoints: edges that share an endpoint are not counted as crossing', () => {
  // L-shape sharing point (100, 0)
  const a = { x: 0, y: 0 };
  const shared = { x: 100, y: 0 };
  const b = { x: 100, y: 100 };
  assert.equal(ZenKnot.doSegmentsIntersect(a, shared, shared, b), false, 'Segments sharing an endpoint must not cross');

  // V-shape sharing vertex (50, 50)
  const root = { x: 50, y: 50 };
  const left = { x: 0, y: 100 };
  const right = { x: 100, y: 100 };
  assert.equal(ZenKnot.doSegmentsIntersect(root, left, root, right), false, 'Segments sharing root vertex must not cross');
});

test('Intersection coordinates calculation', () => {
  const p1 = { x: 0, y: 0 };
  const p2 = { x: 10, y: 10 };
  const p3 = { x: 0, y: 10 };
  const p4 = { x: 10, y: 0 };

  const pt = ZenKnot.computeIntersectionPoint(p1, p2, p3, p4);
  assert.ok(Math.abs(pt.x - 5) < 1e-5);
  assert.ok(Math.abs(pt.y - 5) < 1e-5);
});

test('evaluateGraph: 4-node planar square vs crossed diagonals', () => {
  const squareNodes = [
    { id: 0, x: 0, y: 0 },
    { id: 1, x: 100, y: 0 },
    { id: 2, x: 100, y: 100 },
    { id: 3, x: 0, y: 100 }
  ];

  // Perimeter edges only: 0 crossings
  const perimeterEdges = [[0, 1], [1, 2], [2, 3], [3, 0]];
  const evalSquare = ZenKnot.evaluateGraph(squareNodes, perimeterEdges);
  assert.equal(evalSquare.crossings, 0);
  assert.equal(evalSquare.isSolved, true);

  // Add 2 diagonal chords: (0, 2) and (1, 3) -> 1 crossing!
  const crossedEdges = [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2], [1, 3]];
  const evalCrossed = ZenKnot.evaluateGraph(squareNodes, crossedEdges);
  assert.equal(evalCrossed.crossings, 1);
  assert.equal(evalCrossed.isSolved, false);
  assert.equal(evalCrossed.intersectionPoints.length, 1);
  assert.ok(evalCrossed.crossingNodes.has(0));
  assert.ok(evalCrossed.crossingNodes.has(1));
  assert.ok(evalCrossed.crossingNodes.has(2));
  assert.ok(evalCrossed.crossingNodes.has(3));
});

test('Triangle with shared endpoints has 0 crossings', () => {
  const triNodes = [
    { id: 0, x: 50, y: 0 },
    { id: 1, x: 0, y: 100 },
    { id: 2, x: 100, y: 100 }
  ];
  const triEdges = [[0, 1], [1, 2], [2, 0]];
  const evalTri = ZenKnot.evaluateGraph(triNodes, triEdges);
  assert.equal(evalTri.crossings, 0);
  assert.equal(evalTri.isSolved, true);
});

test('Move and Undo behavior accurately updates and restores crossing count', () => {
  // Start with crossed diagonals
  const nodes = [
    { id: 0, x: 0, y: 0 },
    { id: 1, x: 100, y: 0 },
    { id: 2, x: 100, y: 100 },
    { id: 3, x: 0, y: 100 }
  ];
  const edges = [[0, 2], [1, 3]]; // 2 crossing diagonals

  let evalCurrent = ZenKnot.evaluateGraph(nodes, edges);
  assert.equal(evalCurrent.crossings, 1);

  // Undo stack simulation
  const undoStack = [];

  // Move node 1 from (100, 0) to (-50, -50) to untangle the diagonals
  const origX = nodes[1].x;
  const origY = nodes[1].y;
  nodes[1].x = -50;
  nodes[1].y = -50;
  undoStack.push({ nodeId: 1, prevX: origX, prevY: origY });

  evalCurrent = ZenKnot.evaluateGraph(nodes, edges);
  assert.equal(evalCurrent.crossings, 0, 'Move should untangle the crossed edges');
  assert.equal(evalCurrent.isSolved, true);

  // Perform Undo
  const lastAction = undoStack.pop();
  const targetNode = nodes.find(n => n.id === lastAction.nodeId);
  targetNode.x = lastAction.prevX;
  targetNode.y = lastAction.prevY;

  evalCurrent = ZenKnot.evaluateGraph(nodes, edges);
  assert.equal(evalCurrent.crossings, 1, 'Undo must restore original crossing state');
  assert.equal(evalCurrent.isSolved, false);
});

test('Hint Assistant recommends highest-crossing node and target position', () => {
  const nodes = [
    { id: 0, x: 0, y: 0, targetX: 10, targetY: 10 },
    { id: 1, x: 100, y: 0, targetX: 90, targetY: 10 },
    { id: 2, x: 100, y: 100, targetX: 90, targetY: 90 },
    { id: 3, x: 0, y: 100, targetX: 10, targetY: 90 }
  ];
  const edges = [[0, 2], [1, 3]];

  const hint = ZenKnot.getHint(nodes, edges);
  assert.ok(hint);
  assert.ok([0, 1, 2, 3].includes(hint.nodeId));
  assert.equal(hint.crossings, 1);
  assert.ok(hint.targetX !== undefined);
  assert.ok(hint.targetY !== undefined);

  // Solved graph returns null hint
  const solvedNodes = [
    { id: 0, x: 0, y: 0 },
    { id: 1, x: 100, y: 0 }
  ];
  const solvedEdges = [[0, 1]];
  assert.equal(ZenKnot.getHint(solvedNodes, solvedEdges), null);
});

test('All 50 handcrafted levels in src/levels.js solve cleanly and are non-trivial', () => {
  assert.equal(Levels.PACKS.length, 5);
  assert.equal(Levels.LEVELS.length, 50);

  for (const lvl of Levels.LEVELS) {
    assert.ok(lvl.id >= 1 && lvl.id <= 50);
    assert.ok(lvl.name && lvl.name.length > 0);
    assert.ok(lvl.nodeCount >= 6);
    assert.ok(lvl.edgeCount >= 8);
    assert.ok(lvl.parMoves >= 3);

    // Test A: Target embedding is strictly planar (0 crossings)
    const targetNodes = lvl.nodes.map(n => ({ id: n.id, x: n.targetX, y: n.targetY }));
    const targetEval = ZenKnot.evaluateGraph(targetNodes, lvl.edges);
    assert.equal(targetEval.crossings, 0, `Level ${lvl.id} (${lvl.name}) target state must have 0 crossings`);
    assert.equal(targetEval.isSolved, true);

    // Test B: Scrambled state has crossings (>0)
    const scrambleEval = ZenKnot.evaluateGraph(lvl.nodes, lvl.edges);
    assert.ok(scrambleEval.crossings > 0, `Level ${lvl.id} (${lvl.name}) should have crossings initially`);
    assert.equal(scrambleEval.isSolved, false);
  }
});
