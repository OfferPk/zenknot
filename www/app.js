/**
 * ZenKnot Game Application Controller & Canvas Renderer
 * Pure Vanilla JavaScript. Offline-first, responsive, and accessible.
 */

(function () {
  'use strict';

  // Game state
  let currentLevelIndex = 0;
  let currentLevel = null;
  let boardNodes = [];
  let boardEvaluation = null;
  let movesCount = 0;
  let undoStack = [];
  let hintData = null;
  let hintTimeout = null;
  let isLevelCompleted = false;
  let unlockedLevelIndex = 0;
  let levelStarsMap = {};
  let currentPackIndex = 0;
  let animFrameId = null;
  let pulsePhase = 0;

  // Interaction state
  let draggedNode = null;
  let dragStartPos = null;
  let focusedNodeId = 0;
  let isKeyboardFocused = false;

  // Canvas & layout
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  let canvasWidth = 0;
  let canvasHeight = 0;
  let boardSize = 500;
  let offsetX = 0;
  let offsetY = 0;
  let nodeRadius = 18;

  // DOM elements
  const srAnnouncer = document.getElementById('sr-announcer');
  const displayLevelName = document.getElementById('display-level-name');
  const displayCrossings = document.getElementById('display-crossings');
  const crossingText = document.getElementById('crossing-text');
  const crossingDot = document.getElementById('crossing-dot');
  const displayMoves = document.getElementById('display-moves');
  const btnSound = document.getElementById('btn-sound');
  const iconSoundOn = document.getElementById('icon-sound-on');
  const iconSoundOff = document.getElementById('icon-sound-off');
  const btnRestart = document.getElementById('btn-restart');
  const btnLevels = document.getElementById('btn-levels');
  const btnHome = document.getElementById('btn-home');
  const btnUndo = document.getElementById('btn-undo');
  const btnHint = document.getElementById('btn-hint');
  const btnHelp = document.getElementById('btn-help');

  // Start Screen Modal
  const modalStart = document.getElementById('modal-start');
  const btnStartPlay = document.getElementById('btn-start-play');
  const btnStartLevels = document.getElementById('btn-start-levels');
  const startContinueLevel = document.getElementById('start-continue-level');

  // Victory Modal
  const modalVictory = document.getElementById('modal-victory');
  const victoryStats = document.getElementById('victory-stats');
  const btnNextLevel = document.getElementById('btn-next-level');
  const btnVictoryReplay = document.getElementById('btn-victory-replay');
  const vStar1 = document.getElementById('v-star-1');
  const vStar2 = document.getElementById('v-star-2');
  const vStar3 = document.getElementById('v-star-3');

  // Level Selector Modal
  const modalLevels = document.getElementById('modal-levels');
  const packTabsContainer = document.getElementById('pack-tabs-container');
  const levelGridContainer = document.getElementById('level-grid-container');
  const btnCloseLevels = document.getElementById('btn-close-levels');

  // Help Modal
  const modalHelp = document.getElementById('modal-help');
  const btnCloseHelp = document.getElementById('btn-close-help');

  // Screen Reader Announcer
  function announce(text) {
    if (srAnnouncer) {
      srAnnouncer.textContent = '';
      setTimeout(() => {
        srAnnouncer.textContent = text;
      }, 50);
    }
  }

  // Persistence
  function loadProgress() {
    try {
      const u = localStorage.getItem('zenknot_unlocked');
      if (u !== null) unlockedLevelIndex = parseInt(u, 10) || 0;
      const s = localStorage.getItem('zenknot_stars');
      if (s !== null) levelStarsMap = JSON.parse(s) || {};
    } catch (e) {
      unlockedLevelIndex = 0;
      levelStarsMap = {};
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem('zenknot_unlocked', String(unlockedLevelIndex));
      localStorage.setItem('zenknot_stars', JSON.stringify(levelStarsMap));
    } catch (e) {
      // Storage unavailable
    }
  }

  function updateSoundIcon() {
    if (ZenKnotAudio.enabled) {
      iconSoundOn.style.display = 'block';
      iconSoundOff.style.display = 'none';
    } else {
      iconSoundOn.style.display = 'none';
      iconSoundOff.style.display = 'block';
    }
  }

  // Coordinate Mapping
  // Normalized arena [0, 1000] x [0, 1000] to Canvas pixels
  function normToScreen(nx, ny) {
    return {
      x: offsetX + (nx / 1000) * boardSize,
      y: offsetY + (ny / 1000) * boardSize
    };
  }

  function screenToNorm(sx, sy) {
    const rawX = ((sx - offsetX) / boardSize) * 1000;
    const rawY = ((sy - offsetY) / boardSize) * 1000;
    return {
      x: ZenKnot.clamp(rawX, 60, 940),
      y: ZenKnot.clamp(rawY, 60, 940)
    };
  }

  // Resize canvas to fill viewport with high-DPI scaling
  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvasWidth = rect.width;
    canvasHeight = rect.height;

    canvas.width = Math.round(canvasWidth * dpr);
    canvas.height = Math.round(canvasHeight * dpr);

    ctx.resetTransform();
    ctx.scale(dpr, dpr);

    boardSize = Math.min(canvasWidth, canvasHeight) * 0.88;
    offsetX = (canvasWidth - boardSize) / 2;
    offsetY = (canvasHeight - boardSize) / 2;

    // Node radius scales nicely with screen size and node count
    const baseR = boardSize * 0.038;
    const nodeCount = currentLevel ? currentLevel.nodeCount : 10;
    nodeRadius = Math.max(14, Math.min(26, baseR * (12 / Math.sqrt(nodeCount + 5))));
  }

  // Load level by index
  function loadLevel(index) {
    if (index < 0 || index >= ZenKnotLevels.LEVELS.length) {
      index = 0;
    }

    currentLevelIndex = index;
    currentLevel = ZenKnotLevels.LEVELS[index];
    currentPackIndex = currentLevel.packId - 1;

    boardNodes = ZenKnot.cloneNodes(currentLevel.nodes);
    focusedNodeId = boardNodes.length > 0 ? boardNodes[0].id : 0;
    draggedNode = null;
    dragStartPos = null;
    movesCount = 0;
    undoStack = [];
    hintData = null;
    if (hintTimeout) clearTimeout(hintTimeout);
    isLevelCompleted = false;

    displayLevelName.textContent = `Pack ${currentLevel.packId} • ${currentLevel.name}`;
    displayMoves.textContent = `Moves: 0 / Par: ${currentLevel.parMoves}`;
    if (startContinueLevel) {
      startContinueLevel.textContent = `${currentLevel.id}`;
    }

    boardEvaluation = ZenKnot.evaluateGraph(boardNodes, currentLevel.edges);
    updateCrossingBadge();

    announce(`Loaded Level ${currentLevel.id}: ${currentLevel.name}. ${boardEvaluation.crossings} crossings remaining.`);

    resizeCanvas();
  }

  function updateCrossingBadge() {
    if (!boardEvaluation) return;
    const c = boardEvaluation.crossings;
    if (c === 0) {
      displayCrossings.className = 'crossing-badge solved';
      crossingDot.textContent = '✦';
      crossingText.textContent = 'Untangled!';
    } else {
      displayCrossings.className = 'crossing-badge';
      crossingDot.textContent = '●';
      crossingText.textContent = `Crossings: ${c}`;
    }
  }

  function onLevelCompleted() {
    isLevelCompleted = true;
    ZenKnotAudio.playVictory();

    // Calculate stars
    let earnedStars = 1;
    if (movesCount <= currentLevel.parMoves) {
      earnedStars = 3;
    } else if (movesCount <= Math.round(currentLevel.parMoves * 1.5)) {
      earnedStars = 2;
    }

    const prevStars = levelStarsMap[currentLevel.id] || 0;
    if (earnedStars > prevStars) {
      levelStarsMap[currentLevel.id] = earnedStars;
    }

    if (currentLevelIndex + 1 > unlockedLevelIndex && currentLevelIndex + 1 < ZenKnotLevels.LEVELS.length) {
      unlockedLevelIndex = currentLevelIndex + 1;
    }

    saveProgress();

    // Update Victory Modal
    victoryStats.textContent = `Completed in ${movesCount} moves (Par: ${currentLevel.parMoves}) • ${earnedStars} Stars Earned`;

    [vStar1, vStar2, vStar3].forEach((starEl, idx) => {
      if (idx < earnedStars) {
        starEl.classList.add('active');
      } else {
        starEl.classList.remove('active');
      }
    });

    announce(`Harmony Restored! Completed Level ${currentLevel.id} with zero crossings in ${movesCount} moves.`);

    setTimeout(() => {
      modalVictory.classList.add('active');
    }, 600);
  }

  function handleUndo() {
    if (isLevelCompleted || undoStack.length === 0) return;

    const action = undoStack.pop();
    const node = boardNodes.find(n => n.id === action.nodeId);
    if (node) {
      node.x = action.prevX;
      node.y = action.prevY;

      if (movesCount > 0) movesCount--;
      displayMoves.textContent = `Moves: ${movesCount} / Par: ${currentLevel.parMoves}`;

      hintData = null;
      boardEvaluation = ZenKnot.evaluateGraph(boardNodes, currentLevel.edges);
      updateCrossingBadge();
      ZenKnotAudio.playUndo();
      announce(`Undid move for node ${node.label}. Crossings: ${boardEvaluation.crossings}`);
    }
  }

  function handleHint() {
    if (isLevelCompleted) return;

    hintData = ZenKnot.getHint(boardNodes, currentLevel.edges);
    if (hintData) {
      focusedNodeId = hintData.nodeId;
      ZenKnotAudio.playHint();
      const node = boardNodes.find(n => n.id === hintData.nodeId);
      announce(`Hint: try moving node ${node ? node.label : hintData.nodeId + 1} to reduce crossings.`);
      if (hintTimeout) clearTimeout(hintTimeout);
      hintTimeout = setTimeout(() => {
        hintData = null;
      }, 4500);
    }
  }

  // Hit testing for nodes
  function getNodeAtPoint(px, py) {
    const hitRadius = Math.max(26, nodeRadius * 1.4);
    for (const node of boardNodes) {
      const pos = normToScreen(node.x, node.y);
      const dx = px - pos.x;
      const dy = py - pos.y;
      if (dx * dx + dy * dy <= hitRadius * hitRadius) {
        return node;
      }
    }
    return null;
  }

  // Keyboard navigation & movement
  function cycleFocus(direction = 1) {
    if (boardNodes.length === 0) return;
    const currIdx = boardNodes.findIndex(n => n.id === focusedNodeId);
    const nextIdx = (currIdx + direction + boardNodes.length) % boardNodes.length;
    focusedNodeId = boardNodes[nextIdx].id;
    isKeyboardFocused = true;
    announce(`Selected node ${boardNodes[nextIdx].label}`);
  }

  function nudgeFocusedNode(dx, dy) {
    if (isLevelCompleted) return;
    const node = boardNodes.find(n => n.id === focusedNodeId);
    if (!node) return;

    const prevCrossings = boardEvaluation ? boardEvaluation.crossings : 0;
    const origX = node.x;
    const origY = node.y;

    node.x = ZenKnot.clamp(node.x + dx, 60, 940);
    node.y = ZenKnot.clamp(node.y + dy, 60, 940);

    movesCount++;
    displayMoves.textContent = `Moves: ${movesCount} / Par: ${currentLevel.parMoves}`;
    undoStack.push({
      nodeId: node.id,
      prevX: origX,
      prevY: origY,
      newX: node.x,
      newY: node.y
    });

    boardEvaluation = ZenKnot.evaluateGraph(boardNodes, currentLevel.edges);
    updateCrossingBadge();

    if (boardEvaluation.crossings < prevCrossings) {
      ZenKnotAudio.playProgress();
    } else {
      ZenKnotAudio.playGrab();
    }

    announce(`Nudged node ${node.label}. Crossings: ${boardEvaluation.crossings}`);

    if (boardEvaluation.isSolved && !isLevelCompleted) {
      onLevelCompleted();
    }
  }

  // Render Loop
  function render() {
    pulsePhase += 0.04;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    if (!currentLevel || boardNodes.length === 0) {
      animFrameId = requestAnimationFrame(render);
      return;
    }

    const evalResult = boardEvaluation || {
      crossings: 0,
      crossingEdges: new Set(),
      crossingNodes: new Set(),
      nodeCrossingCounts: new Map(),
      intersectionPoints: []
    };

    // 1. Draw Sacred Geometry Constellation Boundary Ring
    const center = normToScreen(500, 500);
    const outerRingRadius = boardSize * 0.46;

    ctx.save();
    ctx.beginPath();
    ctx.arc(center.x, center.y, outerRingRadius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(center.x, center.y, outerRingRadius * 0.65, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.03)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);
    ctx.stroke();
    ctx.restore();

    // 2. Draw Hint Guide Target (if hint active)
    if (hintData && hintData.targetX !== undefined) {
      const hintPos = normToScreen(hintData.targetX, hintData.targetY);
      const hPulse = Math.sin(pulsePhase * 2) * 4;

      ctx.save();
      // Target ghost circle
      ctx.beginPath();
      ctx.arc(hintPos.x, hintPos.y, nodeRadius * 1.1 + hPulse, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.7)';
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 4]);
      ctx.stroke();

      // Guide ray from hint node to target
      const currHintNode = boardNodes.find(n => n.id === hintData.nodeId);
      if (currHintNode) {
        const currPos = normToScreen(currHintNode.x, currHintNode.y);
        ctx.beginPath();
        ctx.moveTo(currPos.x, currPos.y);
        ctx.lineTo(hintPos.x, hintPos.y);
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
      }
      ctx.restore();
    }

    // 3. Draw Threads / Edges
    const nodeMap = ZenKnot.buildNodeMap(boardNodes);

    for (let eIdx = 0; eIdx < currentLevel.edges.length; eIdx++) {
      const [u, v] = currentLevel.edges[eIdx];
      const p1 = nodeMap.get(u);
      const p2 = nodeMap.get(v);
      if (!p1 || !p2) continue;

      const s1 = normToScreen(p1.x, p1.y);
      const s2 = normToScreen(p2.x, p2.y);

      const isCrossing = evalResult.crossingEdges.has(eIdx);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(s1.x, s1.y);
      ctx.lineTo(s2.x, s2.y);

      if (isCrossing) {
        // Intersecting strand: coral / amber warning with dashed styling
        ctx.strokeStyle = '#f87171';
        ctx.lineWidth = 2.2;
        ctx.setLineDash([6, 4]);
        ctx.stroke();

        // Subtle glow
        ctx.strokeStyle = 'rgba(248, 113, 113, 0.3)';
        ctx.lineWidth = 5;
        ctx.setLineDash([]);
        ctx.stroke();
      } else {
        // Untangled strand: serene cyan laser glow
        ctx.strokeStyle = '#00f2fe';
        ctx.lineWidth = 2.6;
        ctx.shadowColor = '#00f2fe';
        ctx.shadowBlur = 10;
        ctx.stroke();

        // Inner high-intensity filament
        ctx.beginPath();
        ctx.moveTo(s1.x, s1.y);
        ctx.lineTo(s2.x, s2.y);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 0.9;
        ctx.shadowBlur = 0;
        ctx.stroke();
      }
      ctx.restore();
    }

    // 4. Draw Intersection Points (Visual feedback beyond color alone)
    for (const pt of evalResult.intersectionPoints) {
      const sPt = normToScreen(pt.x, pt.y);
      const iPulse = Math.sin(pulsePhase * 3) * 2;

      ctx.save();
      // Outer warning ring
      ctx.beginPath();
      ctx.arc(sPt.x, sPt.y, 6 + iPulse, 0, Math.PI * 2);
      ctx.strokeStyle = '#f87171';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Diamond intersection spark
      ctx.beginPath();
      ctx.moveTo(sPt.x, sPt.y - 4);
      ctx.lineTo(sPt.x + 4, sPt.y);
      ctx.lineTo(sPt.x, sPt.y + 4);
      ctx.lineTo(sPt.x - 4, sPt.y);
      ctx.closePath();
      ctx.fillStyle = '#fef08a';
      ctx.fill();
      ctx.restore();
    }

    // 5. Draw Nodes
    for (const node of boardNodes) {
      const pos = normToScreen(node.x, node.y);
      const isDragging = draggedNode && draggedNode.id === node.id;
      const isFocused = isKeyboardFocused && focusedNodeId === node.id;
      const isHint = hintData && hintData.nodeId === node.id;
      const crossingsCount = evalResult.nodeCrossingCounts.get(node.id) || 0;
      const isUntangled = crossingsCount === 0;

      ctx.save();

      // Outer aura
      if (isDragging) {
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, nodeRadius * 1.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 242, 254, 0.2)';
        ctx.fill();
      } else if (isHint) {
        const hPulse = Math.sin(pulsePhase * 2) * 5;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, nodeRadius * 1.5 + hPulse, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.8)';
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      // Keyboard Focus Ring
      if (isFocused) {
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, nodeRadius + 5, 0, Math.PI * 2);
        ctx.strokeStyle = '#00f2fe';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, nodeRadius + 7, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Base Node Orb
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, nodeRadius, 0, Math.PI * 2);

      let nodeFill = '#0f172a';
      let nodeStroke = '#475569';
      let nodeStrokeW = 2;

      if (isUntangled) {
        nodeFill = '#064e3b';
        nodeStroke = '#10b981';
        nodeStrokeW = 2.5;
      } else {
        nodeFill = '#3b1212';
        nodeStroke = '#f87171';
        nodeStrokeW = 2;
      }

      if (isDragging) {
        nodeStroke = '#ffffff';
        nodeStrokeW = 3;
      }

      ctx.fillStyle = nodeFill;
      ctx.fill();
      ctx.strokeStyle = nodeStroke;
      ctx.lineWidth = nodeStrokeW;
      ctx.stroke();

      // Center crystal core
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, nodeRadius * 0.45, 0, Math.PI * 2);
      ctx.fillStyle = isUntangled ? '#34d399' : '#fca5a5';
      if (isDragging) ctx.fillStyle = '#ffffff';
      ctx.fill();

      // Label number
      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${Math.max(10, Math.round(nodeRadius * 0.72))}px -apple-system, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.label, pos.x, pos.y);

      ctx.restore();
    }

    // 6. Victory Cosmic Aura
    if (evalResult.isSolved) {
      ctx.save();
      const vPulse = Math.sin(pulsePhase * 1.5) * 8;
      ctx.beginPath();
      ctx.arc(center.x, center.y, outerRingRadius + 10 + vPulse, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
      ctx.lineWidth = 3.5;
      ctx.shadowColor = '#10b981';
      ctx.shadowBlur = 18;
      ctx.stroke();
      ctx.restore();
    }

    animFrameId = requestAnimationFrame(render);
  }

  // Event Listeners
  function attachEvents() {
    window.addEventListener('resize', resizeCanvas);

    // Pointer events for Dragging
    function onPointerDown(e) {
      if (isLevelCompleted) return;
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      if (typeof clientX !== 'number') return;

      const px = clientX - rect.left;
      const py = clientY - rect.top;

      const node = getNodeAtPoint(px, py);
      if (node) {
        e.preventDefault();
        draggedNode = node;
        focusedNodeId = node.id;
        isKeyboardFocused = false;
        dragStartPos = { x: node.x, y: node.y };
        canvas.classList.add('grabbing');
        ZenKnotAudio.playGrab();
      }
    }

    function onPointerMove(e) {
      if (!draggedNode) return;
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      if (typeof clientX !== 'number') return;

      const px = clientX - rect.left;
      const py = clientY - rect.top;

      const norm = screenToNorm(px, py);
      draggedNode.x = norm.x;
      draggedNode.y = norm.y;

      boardEvaluation = ZenKnot.evaluateGraph(boardNodes, currentLevel.edges);
      updateCrossingBadge();
    }

    function onPointerUp(e) {
      if (!draggedNode) return;
      canvas.classList.remove('grabbing');

      const dx = draggedNode.x - dragStartPos.x;
      const dy = draggedNode.y - dragStartPos.y;
      const distMoved = Math.sqrt(dx * dx + dy * dy);

      if (distMoved > 8) {
        movesCount++;
        displayMoves.textContent = `Moves: ${movesCount} / Par: ${currentLevel.parMoves}`;
        undoStack.push({
          nodeId: draggedNode.id,
          prevX: dragStartPos.x,
          prevY: dragStartPos.y,
          newX: draggedNode.x,
          newY: draggedNode.y
        });

        hintData = null;

        const prevCrossings = boardEvaluation ? boardEvaluation.crossings : 0;
        boardEvaluation = ZenKnot.evaluateGraph(boardNodes, currentLevel.edges);
        updateCrossingBadge();

        if (boardEvaluation.crossings < prevCrossings) {
          ZenKnotAudio.playProgress();
        } else if (boardEvaluation.crossings > prevCrossings) {
          ZenKnotAudio.playWarning();
        }

        announce(`Placed node ${draggedNode.label}. Crossings: ${boardEvaluation.crossings}`);

        if (boardEvaluation.isSolved && !isLevelCompleted) {
          onLevelCompleted();
        }
      }

      draggedNode = null;
      dragStartPos = null;
    }

    canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    canvas.addEventListener('touchstart', onPointerDown, { passive: false });
    window.addEventListener('touchmove', onPointerMove, { passive: false });
    window.addEventListener('touchend', onPointerUp);
    window.addEventListener('touchcancel', onPointerUp);

    // Keyboard controls
    window.addEventListener('keydown', (e) => {
      // Modal escape key
      const activeModal = document.querySelector('.modal-overlay.active');
      if (activeModal) {
        if (e.key === 'Escape') {
          activeModal.classList.remove('active');
        }
        return;
      }

      const nudgeStep = e.shiftKey ? 60 : 25;

      if (e.key === 'Tab') {
        e.preventDefault();
        cycleFocus(e.shiftKey ? -1 : 1);
      } else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        e.preventDefault();
        nudgeFocusedNode(0, -nudgeStep);
      } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        nudgeFocusedNode(0, nudgeStep);
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        nudgeFocusedNode(-nudgeStep, 0);
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        nudgeFocusedNode(nudgeStep, 0);
      } else if (e.key === 'z' || e.key === 'Z') {
        e.preventDefault();
        handleUndo();
      } else if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        handleHint();
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        loadLevel(currentLevelIndex);
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        ZenKnotAudio.toggle();
        updateSoundIcon();
      }
    });

    // Start Screen buttons
    if (btnStartPlay) {
      btnStartPlay.addEventListener('click', () => {
        modalStart.classList.remove('active');
        canvas.focus();
      });
    }

    if (btnStartLevels) {
      btnStartLevels.addEventListener('click', () => {
        modalStart.classList.remove('active');
        openLevelSelector();
      });
    }

    // Header Controls
    btnSound.addEventListener('click', () => {
      ZenKnotAudio.toggle();
      updateSoundIcon();
    });

    btnRestart.addEventListener('click', () => {
      loadLevel(currentLevelIndex);
      ZenKnotAudio.playGrab();
    });

    // Footer Controls
    btnUndo.addEventListener('click', handleUndo);
    btnHint.addEventListener('click', handleHint);

    btnHelp.addEventListener('click', () => {
      modalHelp.classList.add('active');
    });

    btnCloseHelp.addEventListener('click', () => {
      modalHelp.classList.remove('active');
    });

    // Level selector
    btnLevels.addEventListener('click', openLevelSelector);
    btnHome.addEventListener('click', openLevelSelector);
    btnHome.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLevelSelector();
      }
    });

    btnCloseLevels.addEventListener('click', () => {
      modalLevels.classList.remove('active');
    });

    // Victory modal
    btnNextLevel.addEventListener('click', () => {
      modalVictory.classList.remove('active');
      if (currentLevelIndex + 1 < ZenKnotLevels.LEVELS.length) {
        loadLevel(currentLevelIndex + 1);
      } else {
        openLevelSelector();
      }
    });

    btnVictoryReplay.addEventListener('click', () => {
      modalVictory.classList.remove('active');
      loadLevel(currentLevelIndex);
    });
  }

  function openLevelSelector() {
    packTabsContainer.innerHTML = '';
    levelGridContainer.innerHTML = '';

    ZenKnotLevels.PACKS.forEach((pack, pIdx) => {
      const tab = document.createElement('div');
      tab.className = `pack-tab ${pIdx === currentPackIndex ? 'active' : ''}`;
      tab.textContent = `Pack ${pack.id}: ${pack.name}`;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('tabindex', '0');
      tab.setAttribute('aria-selected', pIdx === currentPackIndex ? 'true' : 'false');

      function selectTab() {
        currentPackIndex = pIdx;
        openLevelSelector();
      }

      tab.addEventListener('click', selectTab);
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectTab();
        }
      });
      packTabsContainer.appendChild(tab);
    });

    const activePack = ZenKnotLevels.PACKS[currentPackIndex];
    const packLevels = ZenKnotLevels.LEVELS.filter(l => l.packId === activePack.id);

    packLevels.forEach(lvl => {
      const card = document.createElement('div');
      const lvlIndex = lvl.id - 1;
      const isLocked = lvlIndex > unlockedLevelIndex;
      const isCurr = lvlIndex === currentLevelIndex;
      const starsEarned = levelStarsMap[lvl.id] || 0;

      card.className = `level-card ${isLocked ? 'locked' : ''} ${isCurr ? 'current' : ''}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', isLocked ? '-1' : '0');
      card.setAttribute('aria-label', `Level ${lvl.id}: ${lvl.name}. ${isLocked ? 'Locked' : `${starsEarned} stars earned`}`);
      card.innerHTML = `
        <span>${lvl.id}</span>
        <div class="card-stars">${isLocked ? '🔒' : (starsEarned > 0 ? '★'.repeat(starsEarned) : '—')}</div>
      `;

      if (!isLocked) {
        function chooseLevel() {
          modalLevels.classList.remove('active');
          loadLevel(lvlIndex);
        }
        card.addEventListener('click', chooseLevel);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            chooseLevel();
          }
        });
      }

      levelGridContainer.appendChild(card);
    });

    modalLevels.classList.add('active');
  }

  // Register PWA Service Worker
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {
        // SW registration failed (offline or insecure origin)
      });
    }
  }

  // Initialization
  function init() {
    loadProgress();
    updateSoundIcon();
    attachEvents();
    loadLevel(unlockedLevelIndex || 0);
    registerServiceWorker();
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
