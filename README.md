# ZenKnot

[![CI](https://github.com/OfferPk/zenknot/actions/workflows/ci.yml/badge.svg)](https://github.com/OfferPk/zenknot/actions/workflows/ci.yml)
[![Deploy GitHub Pages](https://github.com/OfferPk/zenknot/actions/workflows/pages.yml/badge.svg)](https://github.com/OfferPk/zenknot/actions/workflows/pages.yml)
[![Android build](https://github.com/OfferPk/zenknot/actions/workflows/android.yml/badge.svg)](https://github.com/OfferPk/zenknot/actions/workflows/android.yml)

> **ZenKnot**: A sleek, calming offline planar graph untangling logic puzzle game. Drag and reposition glowing crystal nodes across sacred geometric constellations to untangle intersecting energy threads until no strands cross.

---

## 🌟 Live Demo & Downloads

- **Live Web Demo**: [https://offerpk.github.io/zenknot/](https://offerpk.github.io/zenknot/)
- **Android APK**: Download the latest build from [GitHub Actions Artifacts](https://github.com/OfferPk/zenknot/actions/workflows/android.yml) (`zenknot-apk`) or [Releases](https://github.com/OfferPk/zenknot/releases).

---

## ✨ Features

- **100% Offline & Private**: Zero tracking, zero telemetry, zero advertisements, zero network requests. All level progress, stars, and moves are preserved locally in device storage.
- **50 Solver-Verified Levels Across 5 Packs**:
  - **Pack 1: Dawn Constellations** (10 levels, 6 to 8 nodes): Learn the fundamentals of planar untangling.
  - **Pack 2: Astral Runes** (10 levels, 9 to 11 nodes): Curving radiant glyphs and multi-chord crossings.
  - **Pack 3: Sacred Mandala** (10 levels, 12 to 14 nodes): Multi-layered sacred geometric labyrinths.
  - **Pack 4: Celestial Geometry** (10 levels, 15 to 18 nodes): Grand celestial facets with dense strand networks.
  - **Pack 5: Cosmic Labyrinth** (10 levels, 19 to 24 nodes): Master-level transcendent matrices.
- **Procedural Glass Harp & Bell Synthesizer**: Pure Web Audio synthesis with delicate crystal tones on node grabs, melodic progress chimes, and celestial chord cascades on completion.
- **Intuitive Controls**: Fluid touch & mouse dragging, full keyboard navigation (Tab to cycle nodes, Arrow keys / WASD to nudge).
- **Smart Hint Assistant**: Highlights the highest-crossing node and displays a subtle target guide ring.
- **Unlimited Undo & Restart**: Experiment freely with zero penalty or frustration.
- **Cross-Platform**: Play seamlessly as a Progressive Web App (PWA) in any modern browser or on Android via Capacitor.

---

## 📱 Screenshots

```
+-------------------------------------------------------------+
|  [✦] ZenKnot       Pack 1 • Triad Lyra     Crossings: 3     |
|                                         [🔊] [↺]           |
|                                                             |
|                           ( 1 )                             |
|                          /     \                            |
|                        /         \                          |
|                      /      X      \                        |
|                    ( 2 ) --------- ( 3 )                    |
|                      \             /                        |
|                        \         /                          |
|                          \     /                            |
|                           ( 4 )                             |
|                                                             |
|     [Levels]         [Undo]         [Hint]         [Guide]   |
+-------------------------------------------------------------+
```

---

## 🛠️ Building & Development

### Prerequisites
- Node.js 18+ (tested on Node 20, 22, 24)
- npm 9+
- Android Studio / SDK (optional, for local Android builds)

### Commands
```bash
# Clone the repository
git clone https://github.com/OfferPk/zenknot.git
cd zenknot

# Install dependencies
npm ci

# Run unit tests
npm test

# Build runtime web assets to www/
npm run build

# Generate deterministic levels
node scripts/generate_levels.js

# Generate icons
node scripts/generate_icons.js
```

### Android Build (Capacitor)
```bash
# Add Android platform
npx cap add android

# Sync assets
npx cap sync android

# Open in Android Studio
npx cap open android
```

---

## 📄 License
MIT License — Copyright (c) 2026 OfferPk.
