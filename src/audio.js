/**
 * ZenKnot Procedural Web Audio Engine
 * Pure procedural synthesis for glass harps, crystal bells, and celestial chords.
 * Zero external audio assets, zero network requests, 100% offline.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ZenKnotAudio = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Pentatonic celestial frequencies (Hz)
  const SCALE = [
    261.63, // C4
    293.66, // D4
    329.63, // E4
    392.00, // G4
    440.00, // A4
    523.25, // C5
    587.33, // D5
    659.25, // E5
    783.99, // G5
    880.00, // A5
    1046.50 // C6
  ];

  class AudioManager {
    constructor() {
      this.ctx = null;
      this.enabled = true;
      this.masterGain = null;
      this.lastPitchIndex = 0;
      this.loadPreference();
    }

    loadPreference() {
      try {
        const stored = localStorage.getItem('zenknot_sound_enabled');
        if (stored !== null) {
          this.enabled = stored === 'true';
        }
      } catch (e) {
        this.enabled = true;
      }
    }

    savePreference() {
      try {
        localStorage.setItem('zenknot_sound_enabled', String(this.enabled));
      } catch (e) {
        // Ignore storage errors
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      this.savePreference();
      if (this.enabled) {
        this.init();
        this.playGrab();
      }
      return this.enabled;
    }

    init() {
      if (!this.ctx && typeof AudioContext !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    /**
     * Synthesize a crystal bell strike with harmonic overtones
     */
    playBell(freq, duration = 1.2, volume = 0.25) {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const harmonics = [
        { fRatio: 1.0, gain: 0.8, decay: duration },
        { fRatio: 2.76, gain: 0.35, decay: duration * 0.7 },
        { fRatio: 5.4, gain: 0.15, decay: duration * 0.4 }
      ];

      for (const h of harmonics) {
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * h.fRatio, now);

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(volume * h.gain, now + 0.015);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + h.decay);

        osc.connect(gainNode);
        gainNode.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + h.decay + 0.05);
      }
    }

    /**
     * Node Grab sound (subtle crystal chime)
     */
    playGrab() {
      this.playBell(SCALE[4], 0.35, 0.15);
    }

    /**
     * Crossing decreased sound (pleasant higher chord note)
     */
    playProgress(pitchStep = 0) {
      const idx = (3 + pitchStep) % SCALE.length;
      this.playBell(SCALE[idx], 0.6, 0.22);
    }

    /**
     * Crossing increased / conflict sound (lower muted tone)
     */
    playWarning() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(146.83, now); // D3

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.28);
    }

    /**
     * Undo sound (soft reverse bell)
     */
    playUndo() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(293.66, now + 0.2);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.25);
    }

    /**
     * Hint sound (gentle glass harp ping)
     */
    playHint() {
      this.playBell(SCALE[7], 0.8, 0.25);
    }

    /**
     * Level victory celebration: celestial 5-note arpeggio chord cascade
     */
    playVictory() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const chord = [SCALE[0], SCALE[2], SCALE[4], SCALE[6], SCALE[8], SCALE[10]];
      chord.forEach((freq, i) => {
        setTimeout(() => {
          this.playBell(freq, 2.5, 0.28);
        }, i * 140);
      });
    }
  }

  return new AudioManager();
});
