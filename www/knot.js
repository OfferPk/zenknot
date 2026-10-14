/**
 * ZenKnot Core Geometric & Graph Engine
 * Planar graph untangling, line segment intersection detection,
 * crossing count evaluation, and hint guidance.
 * Zero external dependencies.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ZenKnot = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const EPSILON = 1e-7;

  /**
   * Determine orientation of ordered triplet (p, q, r).
   * 0 -> Collinear
   * 1 -> Clockwise
   * 2 -> Counterclockwise
   */
  function orientation(p, q, r) {
    const val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    if (Math.abs(val) < EPSILON) return 0;
    return val > 0 ? 1 : 2;
  }

  /**
   * Check if point q lies on segment pr (assuming p, q, r are collinear)
   */
  function onSegment(p, q, r) {
    return q.x <= Math.max(p.x, r.x) + EPSILON &&
           q.x >= Math.min(p.x, r.x) - EPSILON &&
           q.y <= Math.max(p.y, r.y) + EPSILON &&
           q.y >= Math.min(p.y, r.y) - EPSILON;
  }

  /**
   * Calculate exact intersection point of two lines AB and CD
   */
  function computeIntersectionPoint(p1, p2, p3, p4) {
    const denom = (p1.x - p2.x) * (p3.y - p4.y) - (p1.y - p2.y) * (p3.x - p4.x);
    if (Math.abs(denom) < EPSILON) {
      // Parallel / collinear midpoint
      return {
        x: (Math.max(Math.min(p1.x, p2.x), Math.min(p3.x, p4.x)) + Math.min(Math.max(p1.x, p2.x), Math.max(p3.x, p4.x))) / 2,
        y: (Math.max(Math.min(p1.y, p2.y), Math.min(p3.y, p4.y)) + Math.min(Math.max(p1.y, p2.y), Math.max(p3.y, p4.x))) / 2
      };
    }
    const t = ((p1.x - p3.x) * (p3.y - p4.y) - (p1.y - p3.y) * (p3.x - p4.x)) / denom;
    return {
      x: p1.x + t * (p2.x - p1.x),
      y: p1.y + t * (p2.y - p1.y)
    };
  }

  /**
   * Check if two line segments AB and CD intersect.
   * If they share an endpoint, they do NOT count as crossing.
   */
  function doSegmentsIntersect(p1, p2, p3, p4) {
    // Shared endpoint check
    if ((Math.abs(p1.x - p3.x) < EPSILON && Math.abs(p1.y - p3.y) < EPSILON) ||
        (Math.abs(p1.x - p4.x) < EPSILON && Math.abs(p1.y - p4.y) < EPSILON) ||
        (Math.abs(p2.x - p3.x) < EPSILON && Math.abs(p2.y - p3.y) < EPSILON) ||
        (Math.abs(p2.x - p4.x) < EPSILON && Math.abs(p2.y - p4.y) < EPSILON)) {
      return false;
    }

    const o1 = orientation(p1, p2, p3);
    const o2 = orientation(p1, p2, p4);
    const o3 = orientation(p3, p4, p1);
    const o4 = orientation(p3, p4, p2);

    // General case: strict crossing
    if (o1 !== o2 && o3 !== o4) {
      return true;
    }

    // Special Collinear Cases (overlapping collinear segments)
    if (o1 === 0 && onSegment(p1, p3, p2)) return true;
    if (o2 === 0 && onSegment(p1, p4, p2)) return true;
    if (o3 === 0 && onSegment(p3, p1, p4)) return true;
    if (o4 === 0 && onSegment(p3, p2, p4)) return true;

    return false;
  }

  /**
   * Clone a list of nodes
   */
  function cloneNodes(nodes) {
    return nodes.map(n => ({
      id: n.id,
      x: n.x,
      y: n.y,
      label: n.label || String(n.id + 1),
      targetX: n.targetX !== undefined ? n.targetX : n.x,
      targetY: n.targetY !== undefined ? n.targetY : n.y
    }));
  }

  /**
   * Build lookup map of nodes by id
   */
  function buildNodeMap(nodes) {
    const map = new Map();
    for (const n of nodes) {
      map.set(n.id, n);
    }
    return map;
  }

  /**
   * Evaluate graph state:
   * Returns crossing count, set of crossing edge indices,
   * node crossing counts, intersection coordinates, and isSolved flag.
   */
  function evaluateGraph(nodes, edges) {
    const nodeMap = buildNodeMap(nodes);
    let crossings = 0;
    const crossingEdges = new Set();
    const crossingNodes = new Set();
    const nodeCrossingCounts = new Map();
    const intersectionPoints = [];

    for (const n of nodes) {
      nodeCrossingCounts.set(n.id, 0);
    }

    const numEdges = edges.length;

    for (let i = 0; i < numEdges; i++) {
      const [u1, v1] = edges[i];
      const p1 = nodeMap.get(u1);
      const p2 = nodeMap.get(v1);
      if (!p1 || !p2) continue;

      for (let j = i + 1; j < numEdges; j++) {
        const [u2, v2] = edges[j];

        // Shared endpoints do not cross
        if (u1 === u2 || u1 === v2 || v1 === u2 || v1 === v2) {
          continue;
        }

        const p3 = nodeMap.get(u2);
        const p4 = nodeMap.get(v2);
        if (!p3 || !p4) continue;

        if (doSegmentsIntersect(p1, p2, p3, p4)) {
          crossings++;
          crossingEdges.add(i);
          crossingEdges.add(j);
          crossingNodes.add(u1);
          crossingNodes.add(v1);
          crossingNodes.add(u2);
          crossingNodes.add(v2);

          nodeCrossingCounts.set(u1, (nodeCrossingCounts.get(u1) || 0) + 1);
          nodeCrossingCounts.set(v1, (nodeCrossingCounts.get(v1) || 0) + 1);
          nodeCrossingCounts.set(u2, (nodeCrossingCounts.get(u2) || 0) + 1);
          nodeCrossingCounts.set(v2, (nodeCrossingCounts.get(v2) || 0) + 1);

          const pt = computeIntersectionPoint(p1, p2, p3, p4);
          intersectionPoints.push({
            x: pt.x,
            y: pt.y,
            edge1: i,
            edge2: j
          });
        }
      }
    }

    return {
      crossings,
      isSolved: crossings === 0,
      crossingEdges,
      crossingNodes,
      nodeCrossingCounts,
      intersectionPoints
    };
  }

  /**
   * Hint Assistant:
   * Selects the node that contributes the most to current crossings.
   * Also provides the node's target coordinates in the verified planar layout.
   */
  function getHint(nodes, edges) {
    const evalResult = evaluateGraph(nodes, edges);
    if (evalResult.isSolved) return null;

    let maxCrossings = -1;
    let bestNode = null;

    for (const n of nodes) {
      const c = evalResult.nodeCrossingCounts.get(n.id) || 0;
      if (c > maxCrossings) {
        maxCrossings = c;
        bestNode = n;
      }
    }

    if (!bestNode) {
      bestNode = nodes[0];
    }

    return {
      nodeId: bestNode.id,
      crossings: maxCrossings,
      targetX: bestNode.targetX,
      targetY: bestNode.targetY
    };
  }

  /**
   * Clamp a coordinate within rectangular bounds with padding
   */
  function clamp(val, min, max) {
    return Math.max(min, Math.min(val, max));
  }

  return {
    EPSILON,
    orientation,
    onSegment,
    doSegmentsIntersect,
    computeIntersectionPoint,
    cloneNodes,
    buildNodeMap,
    evaluateGraph,
    getHint,
    clamp
  };
}));
