/**
 * Generates valid PNG and SVG icons for ZenKnot using Node built-in zlib & fs.
 * Zero external dependencies.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function crc32(buf) {
  let table = new Int32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c;
  }
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

function makePng(width, height, getPixelRgba) {
  const bytesPerPixel = 4;
  const scanlineLength = width * bytesPerPixel;
  const rawData = Buffer.alloc((scanlineLength + 1) * height);

  for (let y = 0; y < height; y++) {
    const scanlineOffset = y * (scanlineLength + 1);
    rawData[scanlineOffset] = 0;
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixelRgba(x, y, width, height);
      const pixelOffset = scanlineOffset + 1 + x * bytesPerPixel;
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const idatData = zlib.deflateSync(rawData);

  function makeChunk(type, data) {
    const typeBuf = Buffer.from(type, 'ascii');
    const lenBuf = Buffer.alloc(4);
    lenBuf.writeUInt32BE(data.length, 0);
    const body = Buffer.concat([typeBuf, data]);
    const crcVal = crc32(body);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crcVal, 0);
    return Buffer.concat([lenBuf, body, crcBuf]);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', idatData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function distToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return Math.sqrt((px - x1) ** 2 + (py - y1) ** 2);
  let t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / lenSq));
  const projX = x1 + t * dx;
  const projY = y1 + t * dy;
  return Math.sqrt((px - projX) ** 2 + (py - projY) ** 2);
}

function renderZenKnotIcon(x, y, width, height) {
  const nx = x / width;
  const ny = y / height;

  // Obsidian celestial gradient background
  const distCenter = Math.sqrt((nx - 0.5) ** 2 + (ny - 0.5) ** 2);
  const bgGrad = Math.max(0, 1 - distCenter * 1.35);
  const bgR = Math.floor(10 + 14 * bgGrad);
  const bgG = Math.floor(14 + 20 * bgGrad);
  const bgB = Math.floor(26 + 35 * bgGrad);

  let addedR = 0;
  let addedG = 0;
  let addedB = 0;

  // 5 Nodes of a sacred pentagram constellation
  const numNodes = 5;
  const nodeRadius = 0.32;
  const nodes = [];
  for (let i = 0; i < numNodes; i++) {
    const angle = (2 * Math.PI * i) / numNodes - Math.PI / 2;
    nodes.push({
      x: 0.5 + nodeRadius * Math.cos(angle),
      y: 0.5 + nodeRadius * Math.sin(angle)
    });
  }

  // Ring halo at 0.32
  const ringDist = Math.abs(distCenter - nodeRadius);
  if (ringDist < 0.02) {
    const ringIntensity = 1 - (ringDist / 0.02);
    addedR += 0;
    addedG += 180 * ringIntensity * 0.4;
    addedB += 240 * ringIntensity * 0.4;
  }

  // Draw 5 outer edges
  for (let i = 0; i < numNodes; i++) {
    const p1 = nodes[i];
    const p2 = nodes[(i + 1) % numNodes];
    const dEdge = distToSegment(nx, ny, p1.x, p1.y, p2.x, p2.y);
    if (dEdge < 0.022) {
      const glow = Math.pow(1 - (dEdge / 0.022), 2);
      addedR += 0;
      addedG += 242 * glow;
      addedB += 254 * glow;
    }
  }

  // Draw center crystal star
  for (let i = 0; i < numNodes; i++) {
    const p1 = nodes[i];
    const p2 = nodes[(i + 2) % numNodes];
    const dEdge = distToSegment(nx, ny, p1.x, p1.y, p2.x, p2.y);
    if (dEdge < 0.016) {
      const glow = Math.pow(1 - (dEdge / 0.016), 2);
      addedR += 251 * glow * 0.8;
      addedG += 191 * glow * 0.8;
      addedB += 36 * glow * 0.8;
    }
  }

  // Draw 5 luminous crystal node orbs
  for (let i = 0; i < numNodes; i++) {
    const nd = Math.sqrt((nx - nodes[i].x) ** 2 + (ny - nodes[i].y) ** 2);
    if (nd < 0.058) {
      const orbGlow = 1 - (nd / 0.058);
      if (nd < 0.028) {
        // Inner white/cyan core
        addedR += 255;
        addedG += 255;
        addedB += 255;
      } else {
        // Cyan / emerald outer glow
        addedR += 16 * orbGlow;
        addedG += 220 * orbGlow;
        addedB += 250 * orbGlow;
      }
    }
  }

  // Center core illumination
  if (distCenter < 0.08) {
    const cGlow = Math.pow(1 - (distCenter / 0.08), 2);
    addedR += 251 * cGlow;
    addedG += 191 * cGlow;
    addedB += 36 * cGlow;
  }

  const finalR = Math.min(255, bgR + Math.floor(addedR));
  const finalG = Math.min(255, bgG + Math.floor(addedG));
  const finalB = Math.min(255, bgB + Math.floor(addedB));

  return [finalR, finalG, finalB, 255];
}

const srcDir = path.join(__dirname, '..', 'src');
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}

console.log('Generating icon-192.png...');
const icon192 = makePng(192, 192, renderZenKnotIcon);
fs.writeFileSync(path.join(srcDir, 'icon-192.png'), icon192);

console.log('Generating icon-512.png...');
const icon512 = makePng(512, 512, renderZenKnotIcon);
fs.writeFileSync(path.join(srcDir, 'icon-512.png'), icon512);

// Generate SVG favicon
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#142238"/>
      <stop offset="100%" stop-color="#080c14"/>
    </radialGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="512" height="512" rx="110" fill="url(#bgGlow)"/>
  
  <!-- Outer Sacred Geometry Ring -->
  <circle cx="256" cy="256" r="180" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="6"/>
  <circle cx="256" cy="256" r="180" fill="none" stroke="#00f2fe" stroke-width="4" stroke-dasharray="8 12" filter="url(#glow)"/>

  <!-- Pentagram Celestial Threads -->
  <polygon points="256,76 385,416 112,216 400,216 127,416" fill="none" stroke="#00f2fe" stroke-width="14" stroke-linejoin="round" filter="url(#glow)"/>
  <polygon points="256,76 427,200 362,400 150,400 85,200" fill="none" stroke="#10b981" stroke-width="10" stroke-linejoin="round"/>

  <!-- Crystal Nodes -->
  <circle cx="256" cy="76" r="26" fill="#ffffff" filter="url(#glow)"/>
  <circle cx="256" cy="76" r="14" fill="#00f2fe"/>

  <circle cx="427" cy="200" r="26" fill="#ffffff" filter="url(#glow)"/>
  <circle cx="427" cy="200" r="14" fill="#00f2fe"/>

  <circle cx="362" cy="400" r="26" fill="#ffffff" filter="url(#glow)"/>
  <circle cx="362" cy="400" r="14" fill="#00f2fe"/>

  <circle cx="150" cy="400" r="26" fill="#ffffff" filter="url(#glow)"/>
  <circle cx="150" cy="400" r="14" fill="#00f2fe"/>

  <circle cx="85" cy="200" r="26" fill="#ffffff" filter="url(#glow)"/>
  <circle cx="85" cy="200" r="14" fill="#00f2fe"/>

  <!-- Center Heart Orb -->
  <circle cx="256" cy="256" r="32" fill="#fbbf24" filter="url(#glow)"/>
  <circle cx="256" cy="256" r="16" fill="#ffffff"/>
</svg>`;

fs.writeFileSync(path.join(srcDir, 'favicon.svg'), faviconSvg, 'utf8');
console.log('ZenKnot icons generated successfully.');
