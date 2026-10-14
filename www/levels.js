/**
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

  const PACKS = [
  {
    "id": 1,
    "name": "Dawn Constellations",
    "minNodes": 6,
    "maxNodes": 8,
    "count": 10,
    "theme": "cyan"
  },
  {
    "id": 2,
    "name": "Astral Runes",
    "minNodes": 9,
    "maxNodes": 11,
    "count": 10,
    "theme": "emerald"
  },
  {
    "id": 3,
    "name": "Sacred Mandala",
    "minNodes": 12,
    "maxNodes": 14,
    "count": 10,
    "theme": "amethyst"
  },
  {
    "id": 4,
    "name": "Celestial Geometry",
    "minNodes": 15,
    "maxNodes": 18,
    "count": 10,
    "theme": "amber"
  },
  {
    "id": 5,
    "name": "Cosmic Labyrinth",
    "minNodes": 19,
    "maxNodes": 24,
    "count": 10,
    "theme": "radiance"
  }
];
  const LEVELS = [
  {
    "id": 1,
    "packId": 1,
    "packName": "Dawn Constellations",
    "name": "Triad Lyra",
    "theme": "cyan",
    "nodeCount": 6,
    "edgeCount": 11,
    "initialCrossings": 6,
    "parMoves": 3,
    "nodes": [
      {
        "id": 0,
        "x": 500,
        "y": 835,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 231,
        "y": 345,
        "targetX": 812,
        "targetY": 680,
        "label": "2"
      },
      {
        "id": 2,
        "x": 767,
        "y": 346,
        "targetX": 188,
        "targetY": 680,
        "label": "3"
      },
      {
        "id": 3,
        "x": 219,
        "y": 662,
        "targetX": 504,
        "targetY": 493,
        "label": "4"
      },
      {
        "id": 4,
        "x": 781,
        "y": 662,
        "targetX": 389,
        "targetY": 445,
        "label": "5"
      },
      {
        "id": 5,
        "x": 500,
        "y": 142,
        "targetX": 609,
        "targetY": 442,
        "label": "6"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        1,
        3
      ],
      [
        2,
        4
      ],
      [
        0,
        4
      ],
      [
        3,
        4
      ],
      [
        0,
        5
      ],
      [
        1,
        5
      ],
      [
        3,
        5
      ]
    ]
  },
  {
    "id": 2,
    "packId": 1,
    "packName": "Dawn Constellations",
    "name": "Cygnus Wing",
    "theme": "cyan",
    "nodeCount": 6,
    "edgeCount": 11,
    "initialCrossings": 8,
    "parMoves": 4,
    "nodes": [
      {
        "id": 0,
        "x": 500,
        "y": 160,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 214,
        "y": 335,
        "targetX": 812,
        "targetY": 680,
        "label": "2"
      },
      {
        "id": 2,
        "x": 793,
        "y": 331,
        "targetX": 188,
        "targetY": 680,
        "label": "3"
      },
      {
        "id": 3,
        "x": 500,
        "y": 863,
        "targetX": 500,
        "targetY": 504,
        "label": "4"
      },
      {
        "id": 4,
        "x": 230,
        "y": 656,
        "targetX": 394,
        "targetY": 442,
        "label": "5"
      },
      {
        "id": 5,
        "x": 792,
        "y": 668,
        "targetX": 495,
        "targetY": 628,
        "label": "6"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        1,
        3
      ],
      [
        2,
        4
      ],
      [
        0,
        4
      ],
      [
        3,
        4
      ],
      [
        1,
        5
      ],
      [
        2,
        5
      ],
      [
        3,
        5
      ]
    ]
  },
  {
    "id": 3,
    "packId": 1,
    "packName": "Dawn Constellations",
    "name": "Orion Belt",
    "theme": "cyan",
    "nodeCount": 6,
    "edgeCount": 12,
    "initialCrossings": 8,
    "parMoves": 4,
    "nodes": [
      {
        "id": 0,
        "x": 500,
        "y": 845,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 196,
        "y": 324,
        "targetX": 812,
        "targetY": 680,
        "label": "2"
      },
      {
        "id": 2,
        "x": 764,
        "y": 348,
        "targetX": 188,
        "targetY": 680,
        "label": "3"
      },
      {
        "id": 3,
        "x": 500,
        "y": 161,
        "targetX": 496,
        "targetY": 499,
        "label": "4"
      },
      {
        "id": 4,
        "x": 813,
        "y": 680,
        "targetX": 503,
        "targetY": 615,
        "label": "5"
      },
      {
        "id": 5,
        "x": 227,
        "y": 658,
        "targetX": 605,
        "targetY": 432,
        "label": "6"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        1,
        3
      ],
      [
        2,
        3
      ],
      [
        1,
        4
      ],
      [
        2,
        4
      ],
      [
        3,
        4
      ],
      [
        0,
        5
      ],
      [
        1,
        5
      ],
      [
        3,
        5
      ]
    ]
  },
  {
    "id": 4,
    "packId": 1,
    "packName": "Dawn Constellations",
    "name": "Cassiopeia",
    "theme": "cyan",
    "nodeCount": 7,
    "edgeCount": 13,
    "initialCrossings": 17,
    "parMoves": 8,
    "nodes": [
      {
        "id": 0,
        "x": 839,
        "y": 577,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 221,
        "y": 277,
        "targetX": 860,
        "targetY": 500,
        "label": "2"
      },
      {
        "id": 2,
        "x": 752,
        "y": 299,
        "targetX": 500,
        "targetY": 860,
        "label": "3"
      },
      {
        "id": 3,
        "x": 500,
        "y": 156,
        "targetX": 140,
        "targetY": 500,
        "label": "4"
      },
      {
        "id": 4,
        "x": 192,
        "y": 570,
        "targetX": 375,
        "targetY": 499,
        "label": "5"
      },
      {
        "id": 5,
        "x": 647,
        "y": 804,
        "targetX": 625,
        "targetY": 501,
        "label": "6"
      },
      {
        "id": 6,
        "x": 366,
        "y": 779,
        "targetX": 459,
        "targetY": 505,
        "label": "7"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        2,
        4
      ],
      [
        3,
        4
      ],
      [
        0,
        5
      ],
      [
        1,
        5
      ],
      [
        2,
        5
      ],
      [
        0,
        6
      ],
      [
        2,
        6
      ],
      [
        4,
        6
      ]
    ]
  },
  {
    "id": 5,
    "packId": 1,
    "packName": "Dawn Constellations",
    "name": "Pegasus Square",
    "theme": "cyan",
    "nodeCount": 7,
    "edgeCount": 14,
    "initialCrossings": 13,
    "parMoves": 6,
    "nodes": [
      {
        "id": 0,
        "x": 174,
        "y": 574,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 646,
        "y": 802,
        "targetX": 860,
        "targetY": 500,
        "label": "2"
      },
      {
        "id": 2,
        "x": 500,
        "y": 191,
        "targetX": 500,
        "targetY": 860,
        "label": "3"
      },
      {
        "id": 3,
        "x": 753,
        "y": 298,
        "targetX": 140,
        "targetY": 500,
        "label": "4"
      },
      {
        "id": 4,
        "x": 218,
        "y": 275,
        "targetX": 626,
        "targetY": 495,
        "label": "5"
      },
      {
        "id": 5,
        "x": 831,
        "y": 576,
        "targetX": 380,
        "targetY": 492,
        "label": "6"
      },
      {
        "id": 6,
        "x": 355,
        "y": 800,
        "targetX": 455,
        "targetY": 500,
        "label": "7"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        0,
        3
      ],
      [
        0,
        2
      ],
      [
        0,
        4
      ],
      [
        1,
        4
      ],
      [
        2,
        4
      ],
      [
        0,
        5
      ],
      [
        2,
        5
      ],
      [
        3,
        5
      ],
      [
        0,
        6
      ],
      [
        2,
        6
      ],
      [
        5,
        6
      ]
    ]
  },
  {
    "id": 6,
    "packId": 1,
    "packName": "Dawn Constellations",
    "name": "Polaris Ring",
    "theme": "cyan",
    "nodeCount": 7,
    "edgeCount": 13,
    "initialCrossings": 11,
    "parMoves": 5,
    "nodes": [
      {
        "id": 0,
        "x": 357,
        "y": 797,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 500,
        "y": 179,
        "targetX": 860,
        "targetY": 500,
        "label": "2"
      },
      {
        "id": 2,
        "x": 806,
        "y": 570,
        "targetX": 500,
        "targetY": 860,
        "label": "3"
      },
      {
        "id": 3,
        "x": 219,
        "y": 276,
        "targetX": 140,
        "targetY": 500,
        "label": "4"
      },
      {
        "id": 4,
        "x": 737,
        "y": 311,
        "targetX": 622,
        "targetY": 506,
        "label": "5"
      },
      {
        "id": 5,
        "x": 648,
        "y": 808,
        "targetX": 376,
        "targetY": 499,
        "label": "6"
      },
      {
        "id": 6,
        "x": 167,
        "y": 576,
        "targetX": 665,
        "targetY": 383,
        "label": "7"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        0,
        3
      ],
      [
        0,
        2
      ],
      [
        1,
        4
      ],
      [
        2,
        4
      ],
      [
        0,
        5
      ],
      [
        2,
        5
      ],
      [
        3,
        5
      ],
      [
        0,
        6
      ],
      [
        1,
        6
      ],
      [
        4,
        6
      ]
    ]
  },
  {
    "id": 7,
    "packId": 1,
    "packName": "Dawn Constellations",
    "name": "Aquila Crest",
    "theme": "cyan",
    "nodeCount": 7,
    "edgeCount": 13,
    "initialCrossings": 14,
    "parMoves": 7,
    "nodes": [
      {
        "id": 0,
        "x": 741,
        "y": 308,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 654,
        "y": 820,
        "targetX": 860,
        "targetY": 500,
        "label": "2"
      },
      {
        "id": 2,
        "x": 837,
        "y": 577,
        "targetX": 500,
        "targetY": 860,
        "label": "3"
      },
      {
        "id": 3,
        "x": 229,
        "y": 284,
        "targetX": 140,
        "targetY": 500,
        "label": "4"
      },
      {
        "id": 4,
        "x": 184,
        "y": 572,
        "targetX": 617,
        "targetY": 502,
        "label": "5"
      },
      {
        "id": 5,
        "x": 500,
        "y": 157,
        "targetX": 387,
        "targetY": 506,
        "label": "6"
      },
      {
        "id": 6,
        "x": 362,
        "y": 786,
        "targetX": 341,
        "targetY": 381,
        "label": "7"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        0,
        3
      ],
      [
        0,
        2
      ],
      [
        0,
        4
      ],
      [
        1,
        4
      ],
      [
        2,
        4
      ],
      [
        0,
        5
      ],
      [
        3,
        5
      ],
      [
        3,
        6
      ],
      [
        0,
        6
      ],
      [
        5,
        6
      ]
    ]
  },
  {
    "id": 8,
    "packId": 1,
    "packName": "Dawn Constellations",
    "name": "Draco Arc",
    "theme": "cyan",
    "nodeCount": 8,
    "edgeCount": 16,
    "initialCrossings": 25,
    "parMoves": 12,
    "nodes": [
      {
        "id": 0,
        "x": 749,
        "y": 251,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 714,
        "y": 714,
        "targetX": 860,
        "targetY": 500,
        "label": "2"
      },
      {
        "id": 2,
        "x": 148,
        "y": 500,
        "targetX": 500,
        "targetY": 860,
        "label": "3"
      },
      {
        "id": 3,
        "x": 500,
        "y": 143,
        "targetX": 140,
        "targetY": 500,
        "label": "4"
      },
      {
        "id": 4,
        "x": 805,
        "y": 500,
        "targetX": 372,
        "targetY": 497,
        "label": "5"
      },
      {
        "id": 5,
        "x": 256,
        "y": 256,
        "targetX": 622,
        "targetY": 497,
        "label": "6"
      },
      {
        "id": 6,
        "x": 500,
        "y": 835,
        "targetX": 653,
        "targetY": 376,
        "label": "7"
      },
      {
        "id": 7,
        "x": 266,
        "y": 734,
        "targetX": 544,
        "targetY": 505,
        "label": "8"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        0,
        3
      ],
      [
        0,
        2
      ],
      [
        0,
        4
      ],
      [
        2,
        4
      ],
      [
        3,
        4
      ],
      [
        0,
        5
      ],
      [
        1,
        5
      ],
      [
        0,
        6
      ],
      [
        1,
        6
      ],
      [
        5,
        6
      ],
      [
        2,
        7
      ],
      [
        0,
        7
      ],
      [
        5,
        7
      ]
    ]
  },
  {
    "id": 9,
    "packId": 1,
    "packName": "Dawn Constellations",
    "name": "Phoenix Tail",
    "theme": "cyan",
    "nodeCount": 8,
    "edgeCount": 15,
    "initialCrossings": 18,
    "parMoves": 9,
    "nodes": [
      {
        "id": 0,
        "x": 173,
        "y": 500,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 500,
        "y": 847,
        "targetX": 860,
        "targetY": 500,
        "label": "2"
      },
      {
        "id": 2,
        "x": 500,
        "y": 152,
        "targetX": 500,
        "targetY": 860,
        "label": "3"
      },
      {
        "id": 3,
        "x": 270,
        "y": 730,
        "targetX": 140,
        "targetY": 500,
        "label": "4"
      },
      {
        "id": 4,
        "x": 847,
        "y": 500,
        "targetX": 624,
        "targetY": 492,
        "label": "5"
      },
      {
        "id": 5,
        "x": 731,
        "y": 269,
        "targetX": 377,
        "targetY": 504,
        "label": "6"
      },
      {
        "id": 6,
        "x": 254,
        "y": 254,
        "targetX": 544,
        "targetY": 493,
        "label": "7"
      },
      {
        "id": 7,
        "x": 733,
        "y": 733,
        "targetX": 336,
        "targetY": 384,
        "label": "8"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        0,
        3
      ],
      [
        0,
        2
      ],
      [
        0,
        4
      ],
      [
        1,
        4
      ],
      [
        0,
        5
      ],
      [
        2,
        5
      ],
      [
        2,
        6
      ],
      [
        0,
        6
      ],
      [
        4,
        6
      ],
      [
        3,
        7
      ],
      [
        0,
        7
      ],
      [
        5,
        7
      ]
    ]
  },
  {
    "id": 10,
    "packId": 1,
    "packName": "Dawn Constellations",
    "name": "Aurora Crown",
    "theme": "cyan",
    "nodeCount": 8,
    "edgeCount": 16,
    "initialCrossings": 26,
    "parMoves": 12,
    "nodes": [
      {
        "id": 0,
        "x": 180,
        "y": 500,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 802,
        "y": 500,
        "targetX": 860,
        "targetY": 500,
        "label": "2"
      },
      {
        "id": 2,
        "x": 500,
        "y": 837,
        "targetX": 500,
        "targetY": 860,
        "label": "3"
      },
      {
        "id": 3,
        "x": 269,
        "y": 731,
        "targetX": 140,
        "targetY": 500,
        "label": "4"
      },
      {
        "id": 4,
        "x": 716,
        "y": 284,
        "targetX": 379,
        "targetY": 504,
        "label": "5"
      },
      {
        "id": 5,
        "x": 247,
        "y": 247,
        "targetX": 613,
        "targetY": 494,
        "label": "6"
      },
      {
        "id": 6,
        "x": 500,
        "y": 179,
        "targetX": 654,
        "targetY": 611,
        "label": "7"
      },
      {
        "id": 7,
        "x": 750,
        "y": 750,
        "targetX": 346,
        "targetY": 381,
        "label": "8"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        0,
        3
      ],
      [
        0,
        2
      ],
      [
        2,
        4
      ],
      [
        3,
        4
      ],
      [
        0,
        5
      ],
      [
        1,
        5
      ],
      [
        2,
        5
      ],
      [
        1,
        6
      ],
      [
        2,
        6
      ],
      [
        5,
        6
      ],
      [
        3,
        7
      ],
      [
        0,
        7
      ],
      [
        4,
        7
      ]
    ]
  },
  {
    "id": 11,
    "packId": 2,
    "packName": "Astral Runes",
    "name": "Solar Rune",
    "theme": "emerald",
    "nodeCount": 9,
    "edgeCount": 19,
    "initialCrossings": 39,
    "parMoves": 18,
    "nodes": [
      {
        "id": 0,
        "x": 395,
        "y": 787,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 188,
        "y": 445,
        "targetX": 842,
        "targetY": 389,
        "label": "2"
      },
      {
        "id": 2,
        "x": 500,
        "y": 142,
        "targetX": 712,
        "targetY": 791,
        "label": "3"
      },
      {
        "id": 3,
        "x": 724,
        "y": 234,
        "targetX": 288,
        "targetY": 791,
        "label": "4"
      },
      {
        "id": 4,
        "x": 281,
        "y": 239,
        "targetX": 158,
        "targetY": 389,
        "label": "5"
      },
      {
        "id": 5,
        "x": 191,
        "y": 679,
        "targetX": 499,
        "targetY": 576,
        "label": "6"
      },
      {
        "id": 6,
        "x": 806,
        "y": 446,
        "targetX": 315,
        "targetY": 433,
        "label": "7"
      },
      {
        "id": 7,
        "x": 604,
        "y": 787,
        "targetX": 686,
        "targetY": 434,
        "label": "8"
      },
      {
        "id": 8,
        "x": 797,
        "y": 671,
        "targetX": 569,
        "targetY": 498,
        "label": "9"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        0,
        4
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        5
      ],
      [
        2,
        5
      ],
      [
        3,
        5
      ],
      [
        0,
        6
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        0,
        7
      ],
      [
        1,
        7
      ],
      [
        2,
        7
      ],
      [
        0,
        8
      ],
      [
        2,
        8
      ],
      [
        5,
        8
      ]
    ]
  },
  {
    "id": 12,
    "packId": 2,
    "packName": "Astral Runes",
    "name": "Lunar Shard",
    "theme": "emerald",
    "nodeCount": 9,
    "edgeCount": 17,
    "initialCrossings": 37,
    "parMoves": 17,
    "nodes": [
      {
        "id": 0,
        "x": 724,
        "y": 232,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 178,
        "y": 443,
        "targetX": 842,
        "targetY": 389,
        "label": "2"
      },
      {
        "id": 2,
        "x": 500,
        "y": 183,
        "targetX": 712,
        "targetY": 791,
        "label": "3"
      },
      {
        "id": 3,
        "x": 807,
        "y": 446,
        "targetX": 288,
        "targetY": 791,
        "label": "4"
      },
      {
        "id": 4,
        "x": 186,
        "y": 681,
        "targetX": 158,
        "targetY": 389,
        "label": "5"
      },
      {
        "id": 5,
        "x": 270,
        "y": 226,
        "targetX": 495,
        "targetY": 578,
        "label": "6"
      },
      {
        "id": 6,
        "x": 380,
        "y": 830,
        "targetX": 684,
        "targetY": 432,
        "label": "7"
      },
      {
        "id": 7,
        "x": 773,
        "y": 658,
        "targetX": 309,
        "targetY": 438,
        "label": "8"
      },
      {
        "id": 8,
        "x": 623,
        "y": 837,
        "targetX": 563,
        "targetY": 510,
        "label": "9"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        0,
        4
      ],
      [
        0,
        2
      ],
      [
        2,
        5
      ],
      [
        3,
        5
      ],
      [
        0,
        6
      ],
      [
        1,
        6
      ],
      [
        2,
        6
      ],
      [
        0,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        0,
        8
      ],
      [
        2,
        8
      ],
      [
        5,
        8
      ]
    ]
  },
  {
    "id": 13,
    "packId": 2,
    "packName": "Astral Runes",
    "name": "Star of Eden",
    "theme": "emerald",
    "nodeCount": 9,
    "edgeCount": 19,
    "initialCrossings": 29,
    "parMoves": 14,
    "nodes": [
      {
        "id": 0,
        "x": 177,
        "y": 443,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 766,
        "y": 653,
        "targetX": 842,
        "targetY": 389,
        "label": "2"
      },
      {
        "id": 2,
        "x": 696,
        "y": 267,
        "targetX": 712,
        "targetY": 791,
        "label": "3"
      },
      {
        "id": 3,
        "x": 500,
        "y": 196,
        "targetX": 288,
        "targetY": 791,
        "label": "4"
      },
      {
        "id": 4,
        "x": 376,
        "y": 841,
        "targetX": 158,
        "targetY": 389,
        "label": "5"
      },
      {
        "id": 5,
        "x": 615,
        "y": 817,
        "targetX": 506,
        "targetY": 579,
        "label": "6"
      },
      {
        "id": 6,
        "x": 280,
        "y": 238,
        "targetX": 315,
        "targetY": 447,
        "label": "7"
      },
      {
        "id": 7,
        "x": 225,
        "y": 659,
        "targetX": 687,
        "targetY": 442,
        "label": "8"
      },
      {
        "id": 8,
        "x": 814,
        "y": 445,
        "targetX": 507,
        "targetY": 722,
        "label": "9"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        0,
        4
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        5
      ],
      [
        2,
        5
      ],
      [
        3,
        5
      ],
      [
        0,
        6
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        0,
        7
      ],
      [
        1,
        7
      ],
      [
        2,
        7
      ],
      [
        2,
        8
      ],
      [
        3,
        8
      ],
      [
        5,
        8
      ]
    ]
  },
  {
    "id": 14,
    "packId": 2,
    "packName": "Astral Runes",
    "name": "Astral Wheel",
    "theme": "emerald",
    "nodeCount": 10,
    "edgeCount": 19,
    "initialCrossings": 34,
    "parMoves": 16,
    "nodes": [
      {
        "id": 0,
        "x": 181,
        "y": 396,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 500,
        "y": 841,
        "targetX": 842,
        "targetY": 389,
        "label": "2"
      },
      {
        "id": 2,
        "x": 301,
        "y": 774,
        "targetX": 712,
        "targetY": 791,
        "label": "3"
      },
      {
        "id": 3,
        "x": 689,
        "y": 760,
        "targetX": 288,
        "targetY": 791,
        "label": "4"
      },
      {
        "id": 4,
        "x": 163,
        "y": 610,
        "targetX": 158,
        "targetY": 389,
        "label": "5"
      },
      {
        "id": 5,
        "x": 707,
        "y": 214,
        "targetX": 502,
        "targetY": 581,
        "label": "6"
      },
      {
        "id": 6,
        "x": 500,
        "y": 146,
        "targetX": 314,
        "targetY": 446,
        "label": "7"
      },
      {
        "id": 7,
        "x": 812,
        "y": 399,
        "targetX": 679,
        "targetY": 446,
        "label": "8"
      },
      {
        "id": 8,
        "x": 845,
        "y": 612,
        "targetX": 429,
        "targetY": 501,
        "label": "9"
      },
      {
        "id": 9,
        "x": 322,
        "y": 254,
        "targetX": 565,
        "targetY": 508,
        "label": "10"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        0,
        4
      ],
      [
        0,
        2
      ],
      [
        2,
        5
      ],
      [
        0,
        6
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        0,
        7
      ],
      [
        1,
        7
      ],
      [
        2,
        7
      ],
      [
        3,
        8
      ],
      [
        0,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        2,
        9
      ],
      [
        5,
        9
      ]
    ]
  },
  {
    "id": 15,
    "packId": 2,
    "packName": "Astral Runes",
    "name": "Mystic Chevron",
    "theme": "emerald",
    "nodeCount": 10,
    "edgeCount": 22,
    "initialCrossings": 36,
    "parMoves": 17,
    "nodes": [
      {
        "id": 0,
        "x": 196,
        "y": 599,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 710,
        "y": 790,
        "targetX": 842,
        "targetY": 389,
        "label": "2"
      },
      {
        "id": 2,
        "x": 194,
        "y": 400,
        "targetX": 712,
        "targetY": 791,
        "label": "3"
      },
      {
        "id": 3,
        "x": 500,
        "y": 138,
        "targetX": 288,
        "targetY": 791,
        "label": "4"
      },
      {
        "id": 4,
        "x": 500,
        "y": 816,
        "targetX": 158,
        "targetY": 389,
        "label": "5"
      },
      {
        "id": 5,
        "x": 301,
        "y": 226,
        "targetX": 497,
        "targetY": 566,
        "label": "6"
      },
      {
        "id": 6,
        "x": 308,
        "y": 764,
        "targetX": 314,
        "targetY": 444,
        "label": "7"
      },
      {
        "id": 7,
        "x": 832,
        "y": 608,
        "targetX": 688,
        "targetY": 434,
        "label": "8"
      },
      {
        "id": 8,
        "x": 707,
        "y": 215,
        "targetX": 493,
        "targetY": 709,
        "label": "9"
      },
      {
        "id": 9,
        "x": 825,
        "y": 394,
        "targetX": 574,
        "targetY": 498,
        "label": "10"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        0,
        4
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        5
      ],
      [
        2,
        5
      ],
      [
        3,
        5
      ],
      [
        0,
        6
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        0,
        7
      ],
      [
        1,
        7
      ],
      [
        2,
        7
      ],
      [
        2,
        8
      ],
      [
        3,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        2,
        9
      ],
      [
        5,
        9
      ]
    ]
  },
  {
    "id": 16,
    "packId": 2,
    "packName": "Astral Runes",
    "name": "Crystal Prism",
    "theme": "emerald",
    "nodeCount": 10,
    "edgeCount": 22,
    "initialCrossings": 45,
    "parMoves": 21,
    "nodes": [
      {
        "id": 0,
        "x": 679,
        "y": 253,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 500,
        "y": 188,
        "targetX": 842,
        "targetY": 389,
        "label": "2"
      },
      {
        "id": 2,
        "x": 320,
        "y": 747,
        "targetX": 712,
        "targetY": 791,
        "label": "3"
      },
      {
        "id": 3,
        "x": 177,
        "y": 605,
        "targetX": 288,
        "targetY": 791,
        "label": "4"
      },
      {
        "id": 4,
        "x": 824,
        "y": 395,
        "targetX": 158,
        "targetY": 389,
        "label": "5"
      },
      {
        "id": 5,
        "x": 808,
        "y": 600,
        "targetX": 493,
        "targetY": 568,
        "label": "6"
      },
      {
        "id": 6,
        "x": 287,
        "y": 207,
        "targetX": 314,
        "targetY": 443,
        "label": "7"
      },
      {
        "id": 7,
        "x": 681,
        "y": 749,
        "targetX": 680,
        "targetY": 438,
        "label": "8"
      },
      {
        "id": 8,
        "x": 175,
        "y": 394,
        "targetX": 573,
        "targetY": 504,
        "label": "9"
      },
      {
        "id": 9,
        "x": 500,
        "y": 818,
        "targetX": 497,
        "targetY": 711,
        "label": "10"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        0,
        4
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        5
      ],
      [
        2,
        5
      ],
      [
        3,
        5
      ],
      [
        0,
        6
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        0,
        7
      ],
      [
        1,
        7
      ],
      [
        2,
        7
      ],
      [
        0,
        8
      ],
      [
        2,
        8
      ],
      [
        5,
        8
      ],
      [
        2,
        9
      ],
      [
        3,
        9
      ],
      [
        5,
        9
      ]
    ]
  },
  {
    "id": 17,
    "packId": 2,
    "packName": "Astral Runes",
    "name": "Zenith Spire",
    "theme": "emerald",
    "nodeCount": 10,
    "edgeCount": 21,
    "initialCrossings": 29,
    "parMoves": 14,
    "nodes": [
      {
        "id": 0,
        "x": 708,
        "y": 786,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 693,
        "y": 234,
        "targetX": 842,
        "targetY": 389,
        "label": "2"
      },
      {
        "id": 2,
        "x": 500,
        "y": 147,
        "targetX": 712,
        "targetY": 791,
        "label": "3"
      },
      {
        "id": 3,
        "x": 314,
        "y": 757,
        "targetX": 288,
        "targetY": 791,
        "label": "4"
      },
      {
        "id": 4,
        "x": 787,
        "y": 407,
        "targetX": 158,
        "targetY": 389,
        "label": "5"
      },
      {
        "id": 5,
        "x": 205,
        "y": 596,
        "targetX": 504,
        "targetY": 569,
        "label": "6"
      },
      {
        "id": 6,
        "x": 818,
        "y": 603,
        "targetX": 683,
        "targetY": 442,
        "label": "7"
      },
      {
        "id": 7,
        "x": 187,
        "y": 398,
        "targetX": 319,
        "targetY": 442,
        "label": "8"
      },
      {
        "id": 8,
        "x": 500,
        "y": 831,
        "targetX": 431,
        "targetY": 499,
        "label": "9"
      },
      {
        "id": 9,
        "x": 291,
        "y": 212,
        "targetX": 566,
        "targetY": 505,
        "label": "10"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        0,
        4
      ],
      [
        0,
        3
      ],
      [
        0,
        5
      ],
      [
        2,
        5
      ],
      [
        3,
        5
      ],
      [
        0,
        6
      ],
      [
        1,
        6
      ],
      [
        2,
        6
      ],
      [
        0,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        3,
        8
      ],
      [
        0,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        2,
        9
      ],
      [
        5,
        9
      ]
    ]
  },
  {
    "id": 18,
    "packId": 2,
    "packName": "Astral Runes",
    "name": "Lotus Glyph",
    "theme": "emerald",
    "nodeCount": 11,
    "edgeCount": 25,
    "initialCrossings": 64,
    "parMoves": 30,
    "nodes": [
      {
        "id": 0,
        "x": 685,
        "y": 211,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 601,
        "y": 843,
        "targetX": 842,
        "targetY": 389,
        "label": "2"
      },
      {
        "id": 2,
        "x": 181,
        "y": 546,
        "targetX": 712,
        "targetY": 791,
        "label": "3"
      },
      {
        "id": 3,
        "x": 410,
        "y": 808,
        "targetX": 288,
        "targetY": 791,
        "label": "4"
      },
      {
        "id": 4,
        "x": 320,
        "y": 220,
        "targetX": 158,
        "targetY": 389,
        "label": "5"
      },
      {
        "id": 5,
        "x": 753,
        "y": 719,
        "targetX": 500,
        "targetY": 571,
        "label": "6"
      },
      {
        "id": 6,
        "x": 217,
        "y": 371,
        "targetX": 314,
        "targetY": 440,
        "label": "7"
      },
      {
        "id": 7,
        "x": 841,
        "y": 549,
        "targetX": 680,
        "targetY": 447,
        "label": "8"
      },
      {
        "id": 8,
        "x": 819,
        "y": 354,
        "targetX": 424,
        "targetY": 495,
        "label": "9"
      },
      {
        "id": 9,
        "x": 231,
        "y": 733,
        "targetX": 576,
        "targetY": 500,
        "label": "10"
      },
      {
        "id": 10,
        "x": 500,
        "y": 152,
        "targetX": 504,
        "targetY": 719,
        "label": "11"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        0,
        4
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        5
      ],
      [
        2,
        5
      ],
      [
        3,
        5
      ],
      [
        0,
        6
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        0,
        7
      ],
      [
        1,
        7
      ],
      [
        2,
        7
      ],
      [
        3,
        8
      ],
      [
        0,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        2,
        9
      ],
      [
        5,
        9
      ],
      [
        2,
        10
      ],
      [
        3,
        10
      ],
      [
        5,
        10
      ]
    ]
  },
  {
    "id": 19,
    "packId": 2,
    "packName": "Astral Runes",
    "name": "Arcane Shield",
    "theme": "emerald",
    "nodeCount": 11,
    "edgeCount": 25,
    "initialCrossings": 47,
    "parMoves": 22,
    "nodes": [
      {
        "id": 0,
        "x": 761,
        "y": 726,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 413,
        "y": 797,
        "targetX": 842,
        "targetY": 389,
        "label": "2"
      },
      {
        "id": 2,
        "x": 592,
        "y": 812,
        "targetX": 712,
        "targetY": 791,
        "label": "3"
      },
      {
        "id": 3,
        "x": 332,
        "y": 239,
        "targetX": 288,
        "targetY": 791,
        "label": "4"
      },
      {
        "id": 4,
        "x": 816,
        "y": 545,
        "targetX": 158,
        "targetY": 389,
        "label": "5"
      },
      {
        "id": 5,
        "x": 200,
        "y": 543,
        "targetX": 495,
        "targetY": 573,
        "label": "6"
      },
      {
        "id": 6,
        "x": 825,
        "y": 352,
        "targetX": 313,
        "targetY": 439,
        "label": "7"
      },
      {
        "id": 7,
        "x": 500,
        "y": 148,
        "targetX": 689,
        "targetY": 435,
        "label": "8"
      },
      {
        "id": 8,
        "x": 181,
        "y": 354,
        "targetX": 504,
        "targetY": 724,
        "label": "9"
      },
      {
        "id": 9,
        "x": 683,
        "y": 215,
        "targetX": 569,
        "targetY": 496,
        "label": "10"
      },
      {
        "id": 10,
        "x": 236,
        "y": 729,
        "targetX": 427,
        "targetY": 499,
        "label": "11"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        0,
        4
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        5
      ],
      [
        2,
        5
      ],
      [
        3,
        5
      ],
      [
        0,
        6
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        0,
        7
      ],
      [
        1,
        7
      ],
      [
        2,
        7
      ],
      [
        2,
        8
      ],
      [
        3,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        2,
        9
      ],
      [
        5,
        9
      ],
      [
        3,
        10
      ],
      [
        0,
        10
      ],
      [
        5,
        10
      ]
    ]
  },
  {
    "id": 20,
    "packId": 2,
    "packName": "Astral Runes",
    "name": "Nebula Cross",
    "theme": "emerald",
    "nodeCount": 11,
    "edgeCount": 23,
    "initialCrossings": 40,
    "parMoves": 19,
    "nodes": [
      {
        "id": 0,
        "x": 844,
        "y": 549,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 324,
        "y": 226,
        "targetX": 842,
        "targetY": 389,
        "label": "2"
      },
      {
        "id": 2,
        "x": 408,
        "y": 815,
        "targetX": 712,
        "targetY": 791,
        "label": "3"
      },
      {
        "id": 3,
        "x": 225,
        "y": 738,
        "targetX": 288,
        "targetY": 791,
        "label": "4"
      },
      {
        "id": 4,
        "x": 665,
        "y": 243,
        "targetX": 158,
        "targetY": 389,
        "label": "5"
      },
      {
        "id": 5,
        "x": 195,
        "y": 361,
        "targetX": 507,
        "targetY": 574,
        "label": "6"
      },
      {
        "id": 6,
        "x": 500,
        "y": 160,
        "targetX": 313,
        "targetY": 438,
        "label": "7"
      },
      {
        "id": 7,
        "x": 601,
        "y": 846,
        "targetX": 681,
        "targetY": 439,
        "label": "8"
      },
      {
        "id": 8,
        "x": 153,
        "y": 550,
        "targetX": 503,
        "targetY": 720,
        "label": "9"
      },
      {
        "id": 9,
        "x": 743,
        "y": 711,
        "targetX": 426,
        "targetY": 507,
        "label": "10"
      },
      {
        "id": 10,
        "x": 818,
        "y": 355,
        "targetX": 569,
        "targetY": 496,
        "label": "11"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        0,
        4
      ],
      [
        0,
        2
      ],
      [
        0,
        5
      ],
      [
        3,
        5
      ],
      [
        0,
        6
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        0,
        7
      ],
      [
        1,
        7
      ],
      [
        2,
        7
      ],
      [
        2,
        8
      ],
      [
        3,
        8
      ],
      [
        5,
        8
      ],
      [
        3,
        9
      ],
      [
        0,
        9
      ],
      [
        5,
        9
      ],
      [
        0,
        10
      ],
      [
        2,
        10
      ],
      [
        5,
        10
      ]
    ]
  },
  {
    "id": 21,
    "packId": 3,
    "packName": "Sacred Mandala",
    "name": "Chakra Petals",
    "theme": "amethyst",
    "nodeCount": 12,
    "edgeCount": 27,
    "initialCrossings": 90,
    "parMoves": 41,
    "nodes": [
      {
        "id": 0,
        "x": 661,
        "y": 778,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 657,
        "y": 229,
        "targetX": 812,
        "targetY": 320,
        "label": "2"
      },
      {
        "id": 2,
        "x": 323,
        "y": 194,
        "targetX": 812,
        "targetY": 680,
        "label": "3"
      },
      {
        "id": 3,
        "x": 824,
        "y": 500,
        "targetX": 500,
        "targetY": 860,
        "label": "4"
      },
      {
        "id": 4,
        "x": 213,
        "y": 666,
        "targetX": 188,
        "targetY": 680,
        "label": "5"
      },
      {
        "id": 5,
        "x": 793,
        "y": 331,
        "targetX": 188,
        "targetY": 320,
        "label": "6"
      },
      {
        "id": 6,
        "x": 500,
        "y": 151,
        "targetX": 606,
        "targetY": 553,
        "label": "7"
      },
      {
        "id": 7,
        "x": 220,
        "y": 338,
        "targetX": 394,
        "targetY": 553,
        "label": "8"
      },
      {
        "id": 8,
        "x": 331,
        "y": 792,
        "targetX": 707,
        "targetY": 375,
        "label": "9"
      },
      {
        "id": 9,
        "x": 776,
        "y": 659,
        "targetX": 297,
        "targetY": 377,
        "label": "10"
      },
      {
        "id": 10,
        "x": 500,
        "y": 822,
        "targetX": 635,
        "targetY": 696,
        "label": "11"
      },
      {
        "id": 11,
        "x": 184,
        "y": 500,
        "targetX": 356,
        "targetY": 702,
        "label": "12"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        0,
        5
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        6
      ],
      [
        2,
        6
      ],
      [
        3,
        6
      ],
      [
        0,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        0,
        8
      ],
      [
        1,
        8
      ],
      [
        2,
        8
      ],
      [
        0,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        2,
        10
      ],
      [
        3,
        10
      ],
      [
        6,
        10
      ],
      [
        3,
        11
      ],
      [
        4,
        11
      ],
      [
        7,
        11
      ]
    ]
  },
  {
    "id": 22,
    "packId": 3,
    "packName": "Sacred Mandala",
    "name": "Eternal Hexagram",
    "theme": "amethyst",
    "nodeCount": 12,
    "edgeCount": 26,
    "initialCrossings": 89,
    "parMoves": 41,
    "nodes": [
      {
        "id": 0,
        "x": 325,
        "y": 197,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 804,
        "y": 676,
        "targetX": 812,
        "targetY": 320,
        "label": "2"
      },
      {
        "id": 2,
        "x": 500,
        "y": 148,
        "targetX": 812,
        "targetY": 680,
        "label": "3"
      },
      {
        "id": 3,
        "x": 192,
        "y": 322,
        "targetX": 500,
        "targetY": 860,
        "label": "4"
      },
      {
        "id": 4,
        "x": 671,
        "y": 796,
        "targetX": 188,
        "targetY": 680,
        "label": "5"
      },
      {
        "id": 5,
        "x": 500,
        "y": 862,
        "targetX": 188,
        "targetY": 320,
        "label": "6"
      },
      {
        "id": 6,
        "x": 136,
        "y": 500,
        "targetX": 399,
        "targetY": 553,
        "label": "7"
      },
      {
        "id": 7,
        "x": 188,
        "y": 680,
        "targetX": 602,
        "targetY": 560,
        "label": "8"
      },
      {
        "id": 8,
        "x": 338,
        "y": 781,
        "targetX": 704,
        "targetY": 376,
        "label": "9"
      },
      {
        "id": 9,
        "x": 810,
        "y": 500,
        "targetX": 289,
        "targetY": 377,
        "label": "10"
      },
      {
        "id": 10,
        "x": 787,
        "y": 334,
        "targetX": 636,
        "targetY": 701,
        "label": "11"
      },
      {
        "id": 11,
        "x": 670,
        "y": 205,
        "targetX": 542,
        "targetY": 517,
        "label": "12"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        0,
        5
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        6
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        0,
        7
      ],
      [
        2,
        7
      ],
      [
        3,
        7
      ],
      [
        0,
        8
      ],
      [
        1,
        8
      ],
      [
        2,
        8
      ],
      [
        0,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        2,
        10
      ],
      [
        3,
        10
      ],
      [
        7,
        10
      ],
      [
        3,
        11
      ],
      [
        0,
        11
      ],
      [
        7,
        11
      ]
    ]
  },
  {
    "id": 23,
    "packId": 3,
    "packName": "Sacred Mandala",
    "name": "Flower of Life",
    "theme": "amethyst",
    "nodeCount": 12,
    "edgeCount": 27,
    "initialCrossings": 75,
    "parMoves": 35,
    "nodes": [
      {
        "id": 0,
        "x": 197,
        "y": 675,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 835,
        "y": 500,
        "targetX": 812,
        "targetY": 320,
        "label": "2"
      },
      {
        "id": 2,
        "x": 500,
        "y": 853,
        "targetX": 812,
        "targetY": 680,
        "label": "3"
      },
      {
        "id": 3,
        "x": 500,
        "y": 173,
        "targetX": 500,
        "targetY": 860,
        "label": "4"
      },
      {
        "id": 4,
        "x": 654,
        "y": 767,
        "targetX": 188,
        "targetY": 680,
        "label": "5"
      },
      {
        "id": 5,
        "x": 766,
        "y": 346,
        "targetX": 188,
        "targetY": 320,
        "label": "6"
      },
      {
        "id": 6,
        "x": 330,
        "y": 205,
        "targetX": 609,
        "targetY": 552,
        "label": "7"
      },
      {
        "id": 7,
        "x": 662,
        "y": 219,
        "targetX": 393,
        "targetY": 567,
        "label": "8"
      },
      {
        "id": 8,
        "x": 345,
        "y": 768,
        "targetX": 701,
        "targetY": 377,
        "label": "9"
      },
      {
        "id": 9,
        "x": 210,
        "y": 333,
        "targetX": 298,
        "targetY": 377,
        "label": "10"
      },
      {
        "id": 10,
        "x": 160,
        "y": 500,
        "targetX": 537,
        "targetY": 521,
        "label": "11"
      },
      {
        "id": 11,
        "x": 798,
        "y": 672,
        "targetX": 645,
        "targetY": 463,
        "label": "12"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        0,
        5
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        6
      ],
      [
        2,
        6
      ],
      [
        3,
        6
      ],
      [
        0,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        0,
        8
      ],
      [
        1,
        8
      ],
      [
        2,
        8
      ],
      [
        0,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        3,
        10
      ],
      [
        0,
        10
      ],
      [
        6,
        10
      ],
      [
        0,
        11
      ],
      [
        2,
        11
      ],
      [
        6,
        11
      ]
    ]
  },
  {
    "id": 24,
    "packId": 3,
    "packName": "Sacred Mandala",
    "name": "Golden Spiral",
    "theme": "amethyst",
    "nodeCount": 13,
    "edgeCount": 30,
    "initialCrossings": 106,
    "parMoves": 49,
    "nodes": [
      {
        "id": 0,
        "x": 194,
        "y": 616,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 710,
        "y": 737,
        "targetX": 812,
        "targetY": 320,
        "label": "2"
      },
      {
        "id": 2,
        "x": 657,
        "y": 201,
        "targetX": 812,
        "targetY": 680,
        "label": "3"
      },
      {
        "id": 3,
        "x": 811,
        "y": 618,
        "targetX": 500,
        "targetY": 860,
        "label": "4"
      },
      {
        "id": 4,
        "x": 500,
        "y": 174,
        "targetX": 188,
        "targetY": 680,
        "label": "5"
      },
      {
        "id": 5,
        "x": 267,
        "y": 763,
        "targetX": 188,
        "targetY": 320,
        "label": "6"
      },
      {
        "id": 6,
        "x": 800,
        "y": 464,
        "targetX": 610,
        "targetY": 568,
        "label": "7"
      },
      {
        "id": 7,
        "x": 775,
        "y": 310,
        "targetX": 392,
        "targetY": 559,
        "label": "8"
      },
      {
        "id": 8,
        "x": 577,
        "y": 814,
        "targetX": 298,
        "targetY": 379,
        "label": "9"
      },
      {
        "id": 9,
        "x": 413,
        "y": 852,
        "targetX": 706,
        "targetY": 376,
        "label": "10"
      },
      {
        "id": 10,
        "x": 232,
        "y": 315,
        "targetX": 540,
        "targetY": 529,
        "label": "11"
      },
      {
        "id": 11,
        "x": 343,
        "y": 202,
        "targetX": 641,
        "targetY": 702,
        "label": "12"
      },
      {
        "id": 12,
        "x": 187,
        "y": 462,
        "targetX": 639,
        "targetY": 467,
        "label": "13"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        0,
        5
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        6
      ],
      [
        2,
        6
      ],
      [
        3,
        6
      ],
      [
        0,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        1,
        9
      ],
      [
        2,
        9
      ],
      [
        3,
        10
      ],
      [
        0,
        10
      ],
      [
        6,
        10
      ],
      [
        2,
        11
      ],
      [
        3,
        11
      ],
      [
        6,
        11
      ],
      [
        0,
        12
      ],
      [
        2,
        12
      ],
      [
        6,
        12
      ]
    ]
  },
  {
    "id": 25,
    "packId": 3,
    "packName": "Sacred Mandala",
    "name": "Sacred Matrix",
    "theme": "amethyst",
    "nodeCount": 13,
    "edgeCount": 28,
    "initialCrossings": 101,
    "parMoves": 46,
    "nodes": [
      {
        "id": 0,
        "x": 266,
        "y": 765,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 826,
        "y": 624,
        "targetX": 812,
        "targetY": 320,
        "label": "2"
      },
      {
        "id": 2,
        "x": 421,
        "y": 820,
        "targetX": 812,
        "targetY": 680,
        "label": "3"
      },
      {
        "id": 3,
        "x": 194,
        "y": 463,
        "targetX": 500,
        "targetY": 860,
        "label": "4"
      },
      {
        "id": 4,
        "x": 708,
        "y": 734,
        "targetX": 188,
        "targetY": 680,
        "label": "5"
      },
      {
        "id": 5,
        "x": 500,
        "y": 191,
        "targetX": 188,
        "targetY": 320,
        "label": "6"
      },
      {
        "id": 6,
        "x": 344,
        "y": 202,
        "targetX": 612,
        "targetY": 567,
        "label": "7"
      },
      {
        "id": 7,
        "x": 640,
        "y": 232,
        "targetX": 391,
        "targetY": 566,
        "label": "8"
      },
      {
        "id": 8,
        "x": 582,
        "y": 831,
        "targetX": 295,
        "targetY": 380,
        "label": "9"
      },
      {
        "id": 9,
        "x": 788,
        "y": 301,
        "targetX": 715,
        "targetY": 376,
        "label": "10"
      },
      {
        "id": 10,
        "x": 816,
        "y": 462,
        "targetX": 647,
        "targetY": 696,
        "label": "11"
      },
      {
        "id": 11,
        "x": 210,
        "y": 610,
        "targetX": 534,
        "targetY": 514,
        "label": "12"
      },
      {
        "id": 12,
        "x": 224,
        "y": 310,
        "targetX": 360,
        "targetY": 466,
        "label": "13"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        0,
        5
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        2,
        6
      ],
      [
        3,
        6
      ],
      [
        0,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        1,
        9
      ],
      [
        2,
        9
      ],
      [
        2,
        10
      ],
      [
        3,
        10
      ],
      [
        6,
        10
      ],
      [
        3,
        11
      ],
      [
        0,
        11
      ],
      [
        6,
        11
      ],
      [
        4,
        12
      ],
      [
        0,
        12
      ],
      [
        7,
        12
      ]
    ]
  },
  {
    "id": 26,
    "packId": 3,
    "packName": "Sacred Mandala",
    "name": "Temple Dome",
    "theme": "amethyst",
    "nodeCount": 13,
    "edgeCount": 29,
    "initialCrossings": 82,
    "parMoves": 38,
    "nodes": [
      {
        "id": 0,
        "x": 191,
        "y": 463,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 296,
        "y": 730,
        "targetX": 812,
        "targetY": 320,
        "label": "2"
      },
      {
        "id": 2,
        "x": 573,
        "y": 798,
        "targetX": 812,
        "targetY": 680,
        "label": "3"
      },
      {
        "id": 3,
        "x": 646,
        "y": 222,
        "targetX": 500,
        "targetY": 860,
        "label": "4"
      },
      {
        "id": 4,
        "x": 832,
        "y": 626,
        "targetX": 188,
        "targetY": 680,
        "label": "5"
      },
      {
        "id": 5,
        "x": 794,
        "y": 297,
        "targetX": 188,
        "targetY": 320,
        "label": "6"
      },
      {
        "id": 6,
        "x": 705,
        "y": 732,
        "targetX": 390,
        "targetY": 566,
        "label": "7"
      },
      {
        "id": 7,
        "x": 500,
        "y": 158,
        "targetX": 598,
        "targetY": 558,
        "label": "8"
      },
      {
        "id": 8,
        "x": 417,
        "y": 835,
        "targetX": 708,
        "targetY": 381,
        "label": "9"
      },
      {
        "id": 9,
        "x": 236,
        "y": 318,
        "targetX": 291,
        "targetY": 376,
        "label": "10"
      },
      {
        "id": 10,
        "x": 810,
        "y": 462,
        "targetX": 644,
        "targetY": 456,
        "label": "11"
      },
      {
        "id": 11,
        "x": 211,
        "y": 610,
        "targetX": 630,
        "targetY": 700,
        "label": "12"
      },
      {
        "id": 12,
        "x": 353,
        "y": 220,
        "targetX": 362,
        "targetY": 706,
        "label": "13"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        0,
        5
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        6
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        0,
        7
      ],
      [
        2,
        7
      ],
      [
        3,
        7
      ],
      [
        0,
        8
      ],
      [
        1,
        8
      ],
      [
        2,
        8
      ],
      [
        0,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        0,
        10
      ],
      [
        2,
        10
      ],
      [
        7,
        10
      ],
      [
        2,
        11
      ],
      [
        3,
        11
      ],
      [
        7,
        11
      ],
      [
        3,
        12
      ],
      [
        4,
        12
      ],
      [
        6,
        12
      ]
    ]
  },
  {
    "id": 27,
    "packId": 3,
    "packName": "Sacred Mandala",
    "name": "Serene Labyrinth",
    "theme": "amethyst",
    "nodeCount": 13,
    "edgeCount": 27,
    "initialCrossings": 67,
    "parMoves": 31,
    "nodes": [
      {
        "id": 0,
        "x": 346,
        "y": 206,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 771,
        "y": 313,
        "targetX": 812,
        "targetY": 320,
        "label": "2"
      },
      {
        "id": 2,
        "x": 824,
        "y": 623,
        "targetX": 812,
        "targetY": 680,
        "label": "3"
      },
      {
        "id": 3,
        "x": 201,
        "y": 613,
        "targetX": 500,
        "targetY": 860,
        "label": "4"
      },
      {
        "id": 4,
        "x": 225,
        "y": 310,
        "targetX": 188,
        "targetY": 680,
        "label": "5"
      },
      {
        "id": 5,
        "x": 727,
        "y": 756,
        "targetX": 188,
        "targetY": 320,
        "label": "6"
      },
      {
        "id": 6,
        "x": 417,
        "y": 836,
        "targetX": 599,
        "targetY": 566,
        "label": "7"
      },
      {
        "id": 7,
        "x": 289,
        "y": 738,
        "targetX": 390,
        "targetY": 565,
        "label": "8"
      },
      {
        "id": 8,
        "x": 500,
        "y": 150,
        "targetX": 289,
        "targetY": 383,
        "label": "9"
      },
      {
        "id": 9,
        "x": 585,
        "y": 846,
        "targetX": 716,
        "targetY": 375,
        "label": "10"
      },
      {
        "id": 10,
        "x": 804,
        "y": 463,
        "targetX": 631,
        "targetY": 461,
        "label": "11"
      },
      {
        "id": 11,
        "x": 194,
        "y": 463,
        "targetX": 365,
        "targetY": 456,
        "label": "12"
      },
      {
        "id": 12,
        "x": 668,
        "y": 181,
        "targetX": 468,
        "targetY": 526,
        "label": "13"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        0,
        5
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        6
      ],
      [
        2,
        6
      ],
      [
        3,
        7
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        1,
        9
      ],
      [
        2,
        9
      ],
      [
        0,
        10
      ],
      [
        2,
        10
      ],
      [
        6,
        10
      ],
      [
        4,
        11
      ],
      [
        0,
        11
      ],
      [
        7,
        11
      ],
      [
        0,
        12
      ],
      [
        3,
        12
      ],
      [
        7,
        12
      ]
    ]
  },
  {
    "id": 28,
    "packId": 3,
    "packName": "Sacred Mandala",
    "name": "Solar Corona",
    "theme": "amethyst",
    "nodeCount": 14,
    "edgeCount": 32,
    "initialCrossings": 103,
    "parMoves": 47,
    "nodes": [
      {
        "id": 0,
        "x": 837,
        "y": 577,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 361,
        "y": 788,
        "targetX": 812,
        "targetY": 320,
        "label": "2"
      },
      {
        "id": 2,
        "x": 217,
        "y": 726,
        "targetX": 812,
        "targetY": 680,
        "label": "3"
      },
      {
        "id": 3,
        "x": 500,
        "y": 848,
        "targetX": 500,
        "targetY": 860,
        "label": "4"
      },
      {
        "id": 4,
        "x": 167,
        "y": 576,
        "targetX": 188,
        "targetY": 680,
        "label": "5"
      },
      {
        "id": 5,
        "x": 851,
        "y": 420,
        "targetX": 188,
        "targetY": 320,
        "label": "6"
      },
      {
        "id": 6,
        "x": 226,
        "y": 281,
        "targetX": 601,
        "targetY": 565,
        "label": "7"
      },
      {
        "id": 7,
        "x": 741,
        "y": 308,
        "targetX": 389,
        "targetY": 557,
        "label": "8"
      },
      {
        "id": 8,
        "x": 500,
        "y": 190,
        "targetX": 286,
        "targetY": 384,
        "label": "9"
      },
      {
        "id": 9,
        "x": 653,
        "y": 817,
        "targetX": 708,
        "targetY": 375,
        "label": "10"
      },
      {
        "id": 10,
        "x": 658,
        "y": 172,
        "targetX": 460,
        "targetY": 521,
        "label": "11"
      },
      {
        "id": 11,
        "x": 364,
        "y": 217,
        "targetX": 640,
        "targetY": 705,
        "label": "12"
      },
      {
        "id": 12,
        "x": 758,
        "y": 706,
        "targetX": 365,
        "targetY": 703,
        "label": "13"
      },
      {
        "id": 13,
        "x": 203,
        "y": 432,
        "targetX": 535,
        "targetY": 521,
        "label": "14"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        0,
        5
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        6
      ],
      [
        2,
        6
      ],
      [
        3,
        6
      ],
      [
        0,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        1,
        9
      ],
      [
        2,
        9
      ],
      [
        0,
        10
      ],
      [
        3,
        10
      ],
      [
        7,
        10
      ],
      [
        2,
        11
      ],
      [
        3,
        11
      ],
      [
        6,
        11
      ],
      [
        3,
        12
      ],
      [
        4,
        12
      ],
      [
        7,
        12
      ],
      [
        3,
        13
      ],
      [
        0,
        13
      ],
      [
        6,
        13
      ]
    ]
  },
  {
    "id": 29,
    "packId": 3,
    "packName": "Sacred Mandala",
    "name": "Celestial Dial",
    "theme": "amethyst",
    "nodeCount": 14,
    "edgeCount": 30,
    "initialCrossings": 120,
    "parMoves": 55,
    "nodes": [
      {
        "id": 0,
        "x": 854,
        "y": 581,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 352,
        "y": 806,
        "targetX": 812,
        "targetY": 320,
        "label": "2"
      },
      {
        "id": 2,
        "x": 500,
        "y": 838,
        "targetX": 812,
        "targetY": 680,
        "label": "3"
      },
      {
        "id": 3,
        "x": 759,
        "y": 707,
        "targetX": 500,
        "targetY": 860,
        "label": "4"
      },
      {
        "id": 4,
        "x": 658,
        "y": 828,
        "targetX": 188,
        "targetY": 680,
        "label": "5"
      },
      {
        "id": 5,
        "x": 178,
        "y": 427,
        "targetX": 188,
        "targetY": 320,
        "label": "6"
      },
      {
        "id": 6,
        "x": 238,
        "y": 709,
        "targetX": 394,
        "targetY": 564,
        "label": "7"
      },
      {
        "id": 7,
        "x": 642,
        "y": 204,
        "targetX": 596,
        "targetY": 564,
        "label": "8"
      },
      {
        "id": 8,
        "x": 766,
        "y": 288,
        "targetX": 299,
        "targetY": 385,
        "label": "9"
      },
      {
        "id": 9,
        "x": 849,
        "y": 420,
        "targetX": 701,
        "targetY": 375,
        "label": "10"
      },
      {
        "id": 10,
        "x": 500,
        "y": 158,
        "targetX": 635,
        "targetY": 706,
        "label": "11"
      },
      {
        "id": 11,
        "x": 147,
        "y": 581,
        "targetX": 359,
        "targetY": 457,
        "label": "12"
      },
      {
        "id": 12,
        "x": 355,
        "y": 200,
        "targetX": 524,
        "targetY": 526,
        "label": "13"
      },
      {
        "id": 13,
        "x": 256,
        "y": 306,
        "targetX": 458,
        "targetY": 525,
        "label": "14"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        0,
        5
      ],
      [
        0,
        2
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        0,
        7
      ],
      [
        2,
        7
      ],
      [
        3,
        7
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        1,
        9
      ],
      [
        2,
        9
      ],
      [
        2,
        10
      ],
      [
        3,
        10
      ],
      [
        7,
        10
      ],
      [
        4,
        11
      ],
      [
        0,
        11
      ],
      [
        6,
        11
      ],
      [
        3,
        12
      ],
      [
        0,
        12
      ],
      [
        7,
        12
      ],
      [
        0,
        13
      ],
      [
        3,
        13
      ],
      [
        6,
        13
      ]
    ]
  },
  {
    "id": 30,
    "packId": 3,
    "packName": "Sacred Mandala",
    "name": "Harmony Web",
    "theme": "amethyst",
    "nodeCount": 14,
    "edgeCount": 32,
    "initialCrossings": 121,
    "parMoves": 55,
    "nodes": [
      {
        "id": 0,
        "x": 362,
        "y": 786,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 656,
        "y": 175,
        "targetX": 812,
        "targetY": 320,
        "label": "2"
      },
      {
        "id": 2,
        "x": 745,
        "y": 695,
        "targetX": 812,
        "targetY": 680,
        "label": "3"
      },
      {
        "id": 3,
        "x": 746,
        "y": 304,
        "targetX": 500,
        "targetY": 860,
        "label": "4"
      },
      {
        "id": 4,
        "x": 247,
        "y": 299,
        "targetX": 188,
        "targetY": 680,
        "label": "5"
      },
      {
        "id": 5,
        "x": 854,
        "y": 581,
        "targetX": 188,
        "targetY": 320,
        "label": "6"
      },
      {
        "id": 6,
        "x": 500,
        "y": 818,
        "targetX": 396,
        "targetY": 564,
        "label": "7"
      },
      {
        "id": 7,
        "x": 161,
        "y": 423,
        "targetX": 611,
        "targetY": 556,
        "label": "8"
      },
      {
        "id": 8,
        "x": 799,
        "y": 432,
        "targetX": 712,
        "targetY": 387,
        "label": "9"
      },
      {
        "id": 9,
        "x": 146,
        "y": 581,
        "targetX": 293,
        "targetY": 374,
        "label": "10"
      },
      {
        "id": 10,
        "x": 500,
        "y": 180,
        "targetX": 467,
        "targetY": 529,
        "label": "11"
      },
      {
        "id": 11,
        "x": 228,
        "y": 717,
        "targetX": 636,
        "targetY": 464,
        "label": "12"
      },
      {
        "id": 12,
        "x": 646,
        "y": 803,
        "targetX": 356,
        "targetY": 705,
        "label": "13"
      },
      {
        "id": 13,
        "x": 362,
        "y": 213,
        "targetX": 643,
        "targetY": 691,
        "label": "14"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        0,
        5
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        6
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        0,
        7
      ],
      [
        2,
        7
      ],
      [
        0,
        8
      ],
      [
        1,
        8
      ],
      [
        2,
        8
      ],
      [
        0,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        0,
        10
      ],
      [
        3,
        10
      ],
      [
        6,
        10
      ],
      [
        0,
        11
      ],
      [
        2,
        11
      ],
      [
        7,
        11
      ],
      [
        3,
        12
      ],
      [
        4,
        12
      ],
      [
        6,
        12
      ],
      [
        2,
        13
      ],
      [
        3,
        13
      ],
      [
        7,
        13
      ]
    ]
  },
  {
    "id": 31,
    "packId": 4,
    "packName": "Celestial Geometry",
    "name": "Starburst Web",
    "theme": "amber",
    "nodeCount": 15,
    "edgeCount": 32,
    "initialCrossings": 124,
    "parMoves": 57,
    "nodes": [
      {
        "id": 0,
        "x": 790,
        "y": 406,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 250,
        "y": 275,
        "targetX": 781,
        "targetY": 276,
        "label": "2"
      },
      {
        "id": 2,
        "x": 680,
        "y": 748,
        "targetX": 851,
        "targetY": 580,
        "label": "3"
      },
      {
        "id": 3,
        "x": 353,
        "y": 170,
        "targetX": 656,
        "targetY": 824,
        "label": "4"
      },
      {
        "id": 4,
        "x": 169,
        "y": 535,
        "targetX": 344,
        "targetY": 824,
        "label": "5"
      },
      {
        "id": 5,
        "x": 300,
        "y": 775,
        "targetX": 149,
        "targetY": 580,
        "label": "6"
      },
      {
        "id": 6,
        "x": 432,
        "y": 818,
        "targetX": 219,
        "targetY": 276,
        "label": "7"
      },
      {
        "id": 7,
        "x": 830,
        "y": 535,
        "targetX": 503,
        "targetY": 595,
        "label": "8"
      },
      {
        "id": 8,
        "x": 625,
        "y": 220,
        "targetX": 671,
        "targetY": 512,
        "label": "9"
      },
      {
        "id": 9,
        "x": 568,
        "y": 819,
        "targetX": 329,
        "targetY": 521,
        "label": "10"
      },
      {
        "id": 10,
        "x": 500,
        "y": 162,
        "targetX": 504,
        "targetY": 744,
        "label": "11"
      },
      {
        "id": 11,
        "x": 794,
        "y": 670,
        "targetX": 295,
        "targetY": 334,
        "label": "12"
      },
      {
        "id": 12,
        "x": 753,
        "y": 272,
        "targetX": 714,
        "targetY": 328,
        "label": "13"
      },
      {
        "id": 13,
        "x": 232,
        "y": 654,
        "targetX": 556,
        "targetY": 527,
        "label": "14"
      },
      {
        "id": 14,
        "x": 196,
        "y": 401,
        "targetX": 453,
        "targetY": 512,
        "label": "15"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        0,
        6
      ],
      [
        0,
        2
      ],
      [
        0,
        5
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        0,
        8
      ],
      [
        2,
        8
      ],
      [
        3,
        8
      ],
      [
        0,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        3,
        10
      ],
      [
        4,
        10
      ],
      [
        7,
        10
      ],
      [
        0,
        11
      ],
      [
        5,
        11
      ],
      [
        6,
        11
      ],
      [
        0,
        12
      ],
      [
        1,
        12
      ],
      [
        2,
        12
      ],
      [
        0,
        13
      ],
      [
        3,
        13
      ],
      [
        7,
        13
      ],
      [
        4,
        14
      ],
      [
        0,
        14
      ],
      [
        7,
        14
      ]
    ]
  },
  {
    "id": 32,
    "packId": 4,
    "packName": "Celestial Geometry",
    "name": "Octahedral Lattice",
    "theme": "amber",
    "nodeCount": 15,
    "edgeCount": 33,
    "initialCrossings": 125,
    "parMoves": 57,
    "nodes": [
      {
        "id": 0,
        "x": 362,
        "y": 190,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 736,
        "y": 287,
        "targetX": 781,
        "targetY": 276,
        "label": "2"
      },
      {
        "id": 2,
        "x": 245,
        "y": 270,
        "targetX": 851,
        "targetY": 580,
        "label": "3"
      },
      {
        "id": 3,
        "x": 635,
        "y": 197,
        "targetX": 656,
        "targetY": 824,
        "label": "4"
      },
      {
        "id": 4,
        "x": 219,
        "y": 662,
        "targetX": 344,
        "targetY": 824,
        "label": "5"
      },
      {
        "id": 5,
        "x": 684,
        "y": 754,
        "targetX": 149,
        "targetY": 580,
        "label": "6"
      },
      {
        "id": 6,
        "x": 500,
        "y": 188,
        "targetX": 219,
        "targetY": 276,
        "label": "7"
      },
      {
        "id": 7,
        "x": 295,
        "y": 782,
        "targetX": 502,
        "targetY": 601,
        "label": "8"
      },
      {
        "id": 8,
        "x": 822,
        "y": 395,
        "targetX": 673,
        "targetY": 516,
        "label": "9"
      },
      {
        "id": 9,
        "x": 155,
        "y": 536,
        "targetX": 337,
        "targetY": 515,
        "label": "10"
      },
      {
        "id": 10,
        "x": 435,
        "y": 804,
        "targetX": 715,
        "targetY": 337,
        "label": "11"
      },
      {
        "id": 11,
        "x": 786,
        "y": 665,
        "targetX": 292,
        "targetY": 337,
        "label": "12"
      },
      {
        "id": 12,
        "x": 859,
        "y": 538,
        "targetX": 497,
        "targetY": 755,
        "label": "13"
      },
      {
        "id": 13,
        "x": 569,
        "y": 823,
        "targetX": 446,
        "targetY": 520,
        "label": "14"
      },
      {
        "id": 14,
        "x": 175,
        "y": 394,
        "targetX": 328,
        "targetY": 413,
        "label": "15"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        0,
        6
      ],
      [
        0,
        2
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        0,
        8
      ],
      [
        2,
        8
      ],
      [
        3,
        8
      ],
      [
        0,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        0,
        10
      ],
      [
        1,
        10
      ],
      [
        2,
        10
      ],
      [
        0,
        11
      ],
      [
        5,
        11
      ],
      [
        6,
        11
      ],
      [
        3,
        12
      ],
      [
        4,
        12
      ],
      [
        7,
        12
      ],
      [
        4,
        13
      ],
      [
        0,
        13
      ],
      [
        7,
        13
      ],
      [
        5,
        14
      ],
      [
        0,
        14
      ],
      [
        9,
        14
      ]
    ]
  },
  {
    "id": 33,
    "packId": 4,
    "packName": "Celestial Geometry",
    "name": "Hyperion Ring",
    "theme": "amber",
    "nodeCount": 16,
    "edgeCount": 37,
    "initialCrossings": 157,
    "parMoves": 72,
    "nodes": [
      {
        "id": 0,
        "x": 273,
        "y": 727,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 627,
        "y": 194,
        "targetX": 781,
        "targetY": 276,
        "label": "2"
      },
      {
        "id": 2,
        "x": 362,
        "y": 832,
        "targetX": 851,
        "targetY": 580,
        "label": "3"
      },
      {
        "id": 3,
        "x": 189,
        "y": 629,
        "targetX": 656,
        "targetY": 824,
        "label": "4"
      },
      {
        "id": 4,
        "x": 797,
        "y": 623,
        "targetX": 344,
        "targetY": 824,
        "label": "5"
      },
      {
        "id": 5,
        "x": 173,
        "y": 500,
        "targetX": 149,
        "targetY": 580,
        "label": "6"
      },
      {
        "id": 6,
        "x": 788,
        "y": 381,
        "targetX": 219,
        "targetY": 276,
        "label": "7"
      },
      {
        "id": 7,
        "x": 616,
        "y": 781,
        "targetX": 502,
        "targetY": 591,
        "label": "8"
      },
      {
        "id": 8,
        "x": 736,
        "y": 736,
        "targetX": 337,
        "targetY": 520,
        "label": "9"
      },
      {
        "id": 9,
        "x": 285,
        "y": 285,
        "targetX": 666,
        "targetY": 509,
        "label": "10"
      },
      {
        "id": 10,
        "x": 383,
        "y": 217,
        "targetX": 455,
        "targetY": 515,
        "label": "11"
      },
      {
        "id": 11,
        "x": 500,
        "y": 144,
        "targetX": 289,
        "targetY": 325,
        "label": "12"
      },
      {
        "id": 12,
        "x": 812,
        "y": 500,
        "targetX": 505,
        "targetY": 744,
        "label": "13"
      },
      {
        "id": 13,
        "x": 500,
        "y": 862,
        "targetX": 560,
        "targetY": 524,
        "label": "14"
      },
      {
        "id": 14,
        "x": 737,
        "y": 263,
        "targetX": 707,
        "targetY": 327,
        "label": "15"
      },
      {
        "id": 15,
        "x": 199,
        "y": 375,
        "targetX": 676,
        "targetY": 410,
        "label": "16"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        0,
        6
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        5
      ],
      [
        0,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        2,
        9
      ],
      [
        3,
        9
      ],
      [
        4,
        10
      ],
      [
        0,
        10
      ],
      [
        7,
        10
      ],
      [
        0,
        11
      ],
      [
        5,
        11
      ],
      [
        6,
        11
      ],
      [
        3,
        12
      ],
      [
        4,
        12
      ],
      [
        7,
        12
      ],
      [
        0,
        13
      ],
      [
        3,
        13
      ],
      [
        7,
        13
      ],
      [
        0,
        14
      ],
      [
        1,
        14
      ],
      [
        2,
        14
      ],
      [
        0,
        15
      ],
      [
        2,
        15
      ],
      [
        9,
        15
      ]
    ]
  },
  {
    "id": 34,
    "packId": 4,
    "packName": "Celestial Geometry",
    "name": "Andromeda Spiral",
    "theme": "amber",
    "nodeCount": 16,
    "edgeCount": 36,
    "initialCrossings": 154,
    "parMoves": 70,
    "nodes": [
      {
        "id": 0,
        "x": 251,
        "y": 251,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 721,
        "y": 721,
        "targetX": 781,
        "targetY": 276,
        "label": "2"
      },
      {
        "id": 2,
        "x": 834,
        "y": 638,
        "targetX": 851,
        "targetY": 580,
        "label": "3"
      },
      {
        "id": 3,
        "x": 177,
        "y": 500,
        "targetX": 656,
        "targetY": 824,
        "label": "4"
      },
      {
        "id": 4,
        "x": 835,
        "y": 500,
        "targetX": 344,
        "targetY": 824,
        "label": "5"
      },
      {
        "id": 5,
        "x": 740,
        "y": 260,
        "targetX": 149,
        "targetY": 580,
        "label": "6"
      },
      {
        "id": 6,
        "x": 500,
        "y": 171,
        "targetX": 219,
        "targetY": 276,
        "label": "7"
      },
      {
        "id": 7,
        "x": 631,
        "y": 183,
        "targetX": 501,
        "targetY": 597,
        "label": "8"
      },
      {
        "id": 8,
        "x": 192,
        "y": 628,
        "targetX": 677,
        "targetY": 508,
        "label": "9"
      },
      {
        "id": 9,
        "x": 381,
        "y": 214,
        "targetX": 336,
        "targetY": 519,
        "label": "10"
      },
      {
        "id": 10,
        "x": 619,
        "y": 788,
        "targetX": 560,
        "targetY": 525,
        "label": "11"
      },
      {
        "id": 11,
        "x": 377,
        "y": 797,
        "targetX": 497,
        "targetY": 744,
        "label": "12"
      },
      {
        "id": 12,
        "x": 258,
        "y": 742,
        "targetX": 446,
        "targetY": 527,
        "label": "13"
      },
      {
        "id": 13,
        "x": 795,
        "y": 378,
        "targetX": 712,
        "targetY": 329,
        "label": "14"
      },
      {
        "id": 14,
        "x": 206,
        "y": 378,
        "targetX": 282,
        "targetY": 336,
        "label": "15"
      },
      {
        "id": 15,
        "x": 500,
        "y": 811,
        "targetX": 321,
        "targetY": 421,
        "label": "16"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        0,
        6
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        0,
        7
      ],
      [
        4,
        7
      ],
      [
        0,
        8
      ],
      [
        2,
        8
      ],
      [
        3,
        8
      ],
      [
        0,
        9
      ],
      [
        5,
        9
      ],
      [
        0,
        10
      ],
      [
        3,
        10
      ],
      [
        7,
        10
      ],
      [
        3,
        11
      ],
      [
        4,
        11
      ],
      [
        7,
        11
      ],
      [
        4,
        12
      ],
      [
        0,
        12
      ],
      [
        7,
        12
      ],
      [
        0,
        13
      ],
      [
        1,
        13
      ],
      [
        2,
        13
      ],
      [
        0,
        14
      ],
      [
        5,
        14
      ],
      [
        6,
        14
      ],
      [
        5,
        15
      ],
      [
        0,
        15
      ],
      [
        9,
        15
      ]
    ]
  },
  {
    "id": 35,
    "packId": 4,
    "packName": "Celestial Geometry",
    "name": "Sirius Gateway",
    "theme": "amber",
    "nodeCount": 16,
    "edgeCount": 36,
    "initialCrossings": 118,
    "parMoves": 54,
    "nodes": [
      {
        "id": 0,
        "x": 500,
        "y": 829,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 150,
        "y": 500,
        "targetX": 781,
        "targetY": 276,
        "label": "2"
      },
      {
        "id": 2,
        "x": 193,
        "y": 373,
        "targetX": 851,
        "targetY": 580,
        "label": "3"
      },
      {
        "id": 3,
        "x": 500,
        "y": 143,
        "targetX": 656,
        "targetY": 824,
        "label": "4"
      },
      {
        "id": 4,
        "x": 806,
        "y": 627,
        "targetX": 344,
        "targetY": 824,
        "label": "5"
      },
      {
        "id": 5,
        "x": 619,
        "y": 788,
        "targetX": 149,
        "targetY": 580,
        "label": "6"
      },
      {
        "id": 6,
        "x": 361,
        "y": 836,
        "targetX": 219,
        "targetY": 276,
        "label": "7"
      },
      {
        "id": 7,
        "x": 823,
        "y": 366,
        "targetX": 501,
        "targetY": 603,
        "label": "8"
      },
      {
        "id": 8,
        "x": 622,
        "y": 205,
        "targetX": 325,
        "targetY": 511,
        "label": "9"
      },
      {
        "id": 9,
        "x": 189,
        "y": 629,
        "targetX": 665,
        "targetY": 513,
        "label": "10"
      },
      {
        "id": 10,
        "x": 732,
        "y": 732,
        "targetX": 546,
        "targetY": 519,
        "label": "11"
      },
      {
        "id": 11,
        "x": 270,
        "y": 730,
        "targetX": 705,
        "targetY": 331,
        "label": "12"
      },
      {
        "id": 12,
        "x": 371,
        "y": 187,
        "targetX": 506,
        "targetY": 750,
        "label": "13"
      },
      {
        "id": 13,
        "x": 747,
        "y": 253,
        "targetX": 385,
        "targetY": 495,
        "label": "14"
      },
      {
        "id": 14,
        "x": 269,
        "y": 269,
        "targetX": 294,
        "targetY": 329,
        "label": "15"
      },
      {
        "id": 15,
        "x": 846,
        "y": 500,
        "targetX": 721,
        "targetY": 638,
        "label": "16"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        0,
        6
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        0,
        7
      ],
      [
        4,
        7
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        5,
        8
      ],
      [
        2,
        9
      ],
      [
        3,
        9
      ],
      [
        0,
        10
      ],
      [
        3,
        10
      ],
      [
        7,
        10
      ],
      [
        0,
        11
      ],
      [
        1,
        11
      ],
      [
        2,
        11
      ],
      [
        3,
        12
      ],
      [
        4,
        12
      ],
      [
        7,
        12
      ],
      [
        0,
        13
      ],
      [
        4,
        13
      ],
      [
        8,
        13
      ],
      [
        0,
        14
      ],
      [
        5,
        14
      ],
      [
        6,
        14
      ],
      [
        2,
        15
      ],
      [
        3,
        15
      ],
      [
        9,
        15
      ]
    ]
  },
  {
    "id": 36,
    "packId": 4,
    "packName": "Celestial Geometry",
    "name": "Cosmic Hexahedron",
    "theme": "amber",
    "nodeCount": 17,
    "edgeCount": 41,
    "initialCrossings": 195,
    "parMoves": 89,
    "nodes": [
      {
        "id": 0,
        "x": 193,
        "y": 347,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 621,
        "y": 187,
        "targetX": 781,
        "targetY": 276,
        "label": "2"
      },
      {
        "id": 2,
        "x": 681,
        "y": 792,
        "targetX": 851,
        "targetY": 580,
        "label": "3"
      },
      {
        "id": 3,
        "x": 500,
        "y": 151,
        "targetX": 656,
        "targetY": 824,
        "label": "4"
      },
      {
        "id": 4,
        "x": 556,
        "y": 799,
        "targetX": 344,
        "targetY": 824,
        "label": "5"
      },
      {
        "id": 5,
        "x": 807,
        "y": 347,
        "targetX": 149,
        "targetY": 580,
        "label": "6"
      },
      {
        "id": 6,
        "x": 438,
        "y": 832,
        "targetX": 219,
        "targetY": 276,
        "label": "7"
      },
      {
        "id": 7,
        "x": 244,
        "y": 693,
        "targetX": 500,
        "targetY": 593,
        "label": "8"
      },
      {
        "id": 8,
        "x": 161,
        "y": 596,
        "targetX": 665,
        "targetY": 515,
        "label": "9"
      },
      {
        "id": 9,
        "x": 389,
        "y": 213,
        "targetX": 335,
        "targetY": 522,
        "label": "10"
      },
      {
        "id": 10,
        "x": 726,
        "y": 252,
        "targetX": 285,
        "targetY": 337,
        "label": "11"
      },
      {
        "id": 11,
        "x": 832,
        "y": 594,
        "targetX": 718,
        "targetY": 334,
        "label": "12"
      },
      {
        "id": 12,
        "x": 827,
        "y": 470,
        "targetX": 447,
        "targetY": 511,
        "label": "13"
      },
      {
        "id": 13,
        "x": 316,
        "y": 798,
        "targetX": 505,
        "targetY": 742,
        "label": "14"
      },
      {
        "id": 14,
        "x": 156,
        "y": 468,
        "targetX": 673,
        "targetY": 418,
        "label": "15"
      },
      {
        "id": 15,
        "x": 786,
        "y": 716,
        "targetX": 554,
        "targetY": 526,
        "label": "16"
      },
      {
        "id": 16,
        "x": 292,
        "y": 272,
        "targetX": 332,
        "targetY": 406,
        "label": "17"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        0,
        6
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        0,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        0,
        8
      ],
      [
        2,
        8
      ],
      [
        3,
        8
      ],
      [
        0,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        0,
        10
      ],
      [
        5,
        10
      ],
      [
        6,
        10
      ],
      [
        0,
        11
      ],
      [
        1,
        11
      ],
      [
        2,
        11
      ],
      [
        4,
        12
      ],
      [
        0,
        12
      ],
      [
        7,
        12
      ],
      [
        3,
        13
      ],
      [
        4,
        13
      ],
      [
        7,
        13
      ],
      [
        0,
        14
      ],
      [
        2,
        14
      ],
      [
        8,
        14
      ],
      [
        0,
        15
      ],
      [
        3,
        15
      ],
      [
        7,
        15
      ],
      [
        5,
        16
      ],
      [
        0,
        16
      ],
      [
        9,
        16
      ]
    ]
  },
  {
    "id": 37,
    "packId": 4,
    "packName": "Celestial Geometry",
    "name": "Starlight Lattice",
    "theme": "amber",
    "nodeCount": 17,
    "edgeCount": 39,
    "initialCrossings": 153,
    "parMoves": 70,
    "nodes": [
      {
        "id": 0,
        "x": 660,
        "y": 758,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 741,
        "y": 682,
        "targetX": 781,
        "targetY": 276,
        "label": "2"
      },
      {
        "id": 2,
        "x": 263,
        "y": 240,
        "targetX": 851,
        "targetY": 580,
        "label": "3"
      },
      {
        "id": 3,
        "x": 317,
        "y": 795,
        "targetX": 656,
        "targetY": 824,
        "label": "4"
      },
      {
        "id": 4,
        "x": 189,
        "y": 471,
        "targetX": 344,
        "targetY": 824,
        "label": "5"
      },
      {
        "id": 5,
        "x": 195,
        "y": 348,
        "targetX": 149,
        "targetY": 580,
        "label": "6"
      },
      {
        "id": 6,
        "x": 744,
        "y": 232,
        "targetX": 219,
        "targetY": 276,
        "label": "7"
      },
      {
        "id": 7,
        "x": 619,
        "y": 194,
        "targetX": 499,
        "targetY": 600,
        "label": "8"
      },
      {
        "id": 8,
        "x": 256,
        "y": 684,
        "targetX": 329,
        "targetY": 519,
        "label": "9"
      },
      {
        "id": 9,
        "x": 845,
        "y": 598,
        "targetX": 665,
        "targetY": 516,
        "label": "10"
      },
      {
        "id": 10,
        "x": 562,
        "y": 833,
        "targetX": 708,
        "targetY": 329,
        "label": "11"
      },
      {
        "id": 11,
        "x": 838,
        "y": 469,
        "targetX": 452,
        "targetY": 527,
        "label": "12"
      },
      {
        "id": 12,
        "x": 205,
        "y": 584,
        "targetX": 559,
        "targetY": 522,
        "label": "13"
      },
      {
        "id": 13,
        "x": 816,
        "y": 343,
        "targetX": 289,
        "targetY": 334,
        "label": "14"
      },
      {
        "id": 14,
        "x": 440,
        "y": 824,
        "targetX": 497,
        "targetY": 749,
        "label": "15"
      },
      {
        "id": 15,
        "x": 381,
        "y": 192,
        "targetX": 732,
        "targetY": 638,
        "label": "16"
      },
      {
        "id": 16,
        "x": 500,
        "y": 190,
        "targetX": 670,
        "targetY": 406,
        "label": "17"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        0,
        6
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        0,
        7
      ],
      [
        3,
        7
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        3,
        9
      ],
      [
        0,
        10
      ],
      [
        1,
        10
      ],
      [
        2,
        10
      ],
      [
        4,
        11
      ],
      [
        0,
        11
      ],
      [
        7,
        11
      ],
      [
        0,
        12
      ],
      [
        3,
        12
      ],
      [
        7,
        12
      ],
      [
        0,
        13
      ],
      [
        5,
        13
      ],
      [
        6,
        13
      ],
      [
        3,
        14
      ],
      [
        4,
        14
      ],
      [
        7,
        14
      ],
      [
        2,
        15
      ],
      [
        3,
        15
      ],
      [
        9,
        15
      ],
      [
        0,
        16
      ],
      [
        2,
        16
      ],
      [
        9,
        16
      ]
    ]
  },
  {
    "id": 38,
    "packId": 4,
    "packName": "Celestial Geometry",
    "name": "Vortex Crown",
    "theme": "amber",
    "nodeCount": 17,
    "edgeCount": 40,
    "initialCrossings": 240,
    "parMoves": 110,
    "nodes": [
      {
        "id": 0,
        "x": 783,
        "y": 714,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 625,
        "y": 177,
        "targetX": 781,
        "targetY": 276,
        "label": "2"
      },
      {
        "id": 2,
        "x": 860,
        "y": 467,
        "targetX": 851,
        "targetY": 580,
        "label": "3"
      },
      {
        "id": 3,
        "x": 565,
        "y": 846,
        "targetX": 656,
        "targetY": 824,
        "label": "4"
      },
      {
        "id": 4,
        "x": 815,
        "y": 343,
        "targetX": 344,
        "targetY": 824,
        "label": "5"
      },
      {
        "id": 5,
        "x": 728,
        "y": 250,
        "targetX": 149,
        "targetY": 580,
        "label": "6"
      },
      {
        "id": 6,
        "x": 251,
        "y": 688,
        "targetX": 219,
        "targetY": 276,
        "label": "7"
      },
      {
        "id": 7,
        "x": 500,
        "y": 146,
        "targetX": 499,
        "targetY": 590,
        "label": "8"
      },
      {
        "id": 8,
        "x": 380,
        "y": 191,
        "targetX": 669,
        "targetY": 522,
        "label": "9"
      },
      {
        "id": 9,
        "x": 286,
        "y": 265,
        "targetX": 334,
        "targetY": 510,
        "label": "10"
      },
      {
        "id": 10,
        "x": 434,
        "y": 852,
        "targetX": 498,
        "targetY": 751,
        "label": "11"
      },
      {
        "id": 11,
        "x": 208,
        "y": 354,
        "targetX": 290,
        "targetY": 325,
        "label": "12"
      },
      {
        "id": 12,
        "x": 195,
        "y": 472,
        "targetX": 552,
        "targetY": 512,
        "label": "13"
      },
      {
        "id": 13,
        "x": 661,
        "y": 761,
        "targetX": 441,
        "targetY": 511,
        "label": "14"
      },
      {
        "id": 14,
        "x": 335,
        "y": 766,
        "targetX": 704,
        "targetY": 325,
        "label": "15"
      },
      {
        "id": 15,
        "x": 181,
        "y": 591,
        "targetX": 272,
        "targetY": 644,
        "label": "16"
      },
      {
        "id": 16,
        "x": 820,
        "y": 591,
        "targetX": 385,
        "targetY": 487,
        "label": "17"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        0,
        6
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        5
      ],
      [
        0,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        0,
        8
      ],
      [
        2,
        8
      ],
      [
        3,
        8
      ],
      [
        0,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        3,
        10
      ],
      [
        4,
        10
      ],
      [
        7,
        10
      ],
      [
        0,
        11
      ],
      [
        5,
        11
      ],
      [
        6,
        11
      ],
      [
        0,
        12
      ],
      [
        3,
        12
      ],
      [
        7,
        12
      ],
      [
        4,
        13
      ],
      [
        0,
        13
      ],
      [
        7,
        13
      ],
      [
        0,
        14
      ],
      [
        1,
        14
      ],
      [
        2,
        14
      ],
      [
        4,
        15
      ],
      [
        5,
        15
      ],
      [
        9,
        15
      ],
      [
        0,
        16
      ],
      [
        4,
        16
      ],
      [
        9,
        16
      ]
    ]
  },
  {
    "id": 39,
    "packId": 4,
    "packName": "Celestial Geometry",
    "name": "Zodiac Wheel",
    "theme": "amber",
    "nodeCount": 18,
    "edgeCount": 42,
    "initialCrossings": 186,
    "parMoves": 85,
    "nodes": [
      {
        "id": 0,
        "x": 383,
        "y": 177,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 500,
        "y": 842,
        "targetX": 781,
        "targetY": 276,
        "label": "2"
      },
      {
        "id": 2,
        "x": 143,
        "y": 563,
        "targetX": 851,
        "targetY": 580,
        "label": "3"
      },
      {
        "id": 3,
        "x": 773,
        "y": 342,
        "targetX": 656,
        "targetY": 824,
        "label": "4"
      },
      {
        "id": 4,
        "x": 730,
        "y": 774,
        "targetX": 344,
        "targetY": 824,
        "label": "5"
      },
      {
        "id": 5,
        "x": 820,
        "y": 556,
        "targetX": 149,
        "targetY": 580,
        "label": "6"
      },
      {
        "id": 6,
        "x": 622,
        "y": 164,
        "targetX": 219,
        "targetY": 276,
        "label": "7"
      },
      {
        "id": 7,
        "x": 716,
        "y": 243,
        "targetX": 667,
        "targetY": 514,
        "label": "8"
      },
      {
        "id": 8,
        "x": 814,
        "y": 445,
        "targetX": 502,
        "targetY": 591,
        "label": "9"
      },
      {
        "id": 9,
        "x": 287,
        "y": 754,
        "targetX": 326,
        "targetY": 520,
        "label": "10"
      },
      {
        "id": 10,
        "x": 201,
        "y": 447,
        "targetX": 290,
        "targetY": 329,
        "label": "11"
      },
      {
        "id": 11,
        "x": 297,
        "y": 258,
        "targetX": 551,
        "targetY": 514,
        "label": "12"
      },
      {
        "id": 12,
        "x": 500,
        "y": 165,
        "targetX": 493,
        "targetY": 749,
        "label": "13"
      },
      {
        "id": 13,
        "x": 382,
        "y": 823,
        "targetX": 714,
        "targetY": 332,
        "label": "14"
      },
      {
        "id": 14,
        "x": 204,
        "y": 671,
        "targetX": 454,
        "targetY": 521,
        "label": "15"
      },
      {
        "id": 15,
        "x": 616,
        "y": 820,
        "targetX": 392,
        "targetY": 492,
        "label": "16"
      },
      {
        "id": 16,
        "x": 211,
        "y": 333,
        "targetX": 675,
        "targetY": 409,
        "label": "17"
      },
      {
        "id": 17,
        "x": 788,
        "y": 666,
        "targetX": 723,
        "targetY": 642,
        "label": "18"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        0,
        6
      ],
      [
        0,
        2
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        0,
        7
      ],
      [
        2,
        7
      ],
      [
        3,
        7
      ],
      [
        0,
        8
      ],
      [
        3,
        8
      ],
      [
        4,
        8
      ],
      [
        0,
        9
      ],
      [
        5,
        9
      ],
      [
        0,
        10
      ],
      [
        5,
        10
      ],
      [
        6,
        10
      ],
      [
        0,
        11
      ],
      [
        3,
        11
      ],
      [
        8,
        11
      ],
      [
        3,
        12
      ],
      [
        4,
        12
      ],
      [
        8,
        12
      ],
      [
        0,
        13
      ],
      [
        1,
        13
      ],
      [
        2,
        13
      ],
      [
        4,
        14
      ],
      [
        0,
        14
      ],
      [
        8,
        14
      ],
      [
        0,
        15
      ],
      [
        4,
        15
      ],
      [
        9,
        15
      ],
      [
        0,
        16
      ],
      [
        2,
        16
      ],
      [
        7,
        16
      ],
      [
        2,
        17
      ],
      [
        3,
        17
      ],
      [
        7,
        17
      ]
    ]
  },
  {
    "id": 40,
    "packId": 4,
    "packName": "Celestial Geometry",
    "name": "Radiant Octagon",
    "theme": "amber",
    "nodeCount": 18,
    "edgeCount": 41,
    "initialCrossings": 207,
    "parMoves": 95,
    "nodes": [
      {
        "id": 0,
        "x": 397,
        "y": 783,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 790,
        "y": 667,
        "targetX": 781,
        "targetY": 276,
        "label": "2"
      },
      {
        "id": 2,
        "x": 500,
        "y": 157,
        "targetX": 851,
        "targetY": 580,
        "label": "3"
      },
      {
        "id": 3,
        "x": 610,
        "y": 197,
        "targetX": 656,
        "targetY": 824,
        "label": "4"
      },
      {
        "id": 4,
        "x": 217,
        "y": 663,
        "targetX": 344,
        "targetY": 824,
        "label": "5"
      },
      {
        "id": 5,
        "x": 797,
        "y": 552,
        "targetX": 149,
        "targetY": 580,
        "label": "6"
      },
      {
        "id": 6,
        "x": 854,
        "y": 438,
        "targetX": 219,
        "targetY": 276,
        "label": "7"
      },
      {
        "id": 7,
        "x": 706,
        "y": 746,
        "targetX": 497,
        "targetY": 602,
        "label": "8"
      },
      {
        "id": 8,
        "x": 225,
        "y": 341,
        "targetX": 335,
        "targetY": 514,
        "label": "9"
      },
      {
        "id": 9,
        "x": 700,
        "y": 262,
        "targetX": 671,
        "targetY": 514,
        "label": "10"
      },
      {
        "id": 10,
        "x": 146,
        "y": 562,
        "targetX": 553,
        "targetY": 527,
        "label": "11"
      },
      {
        "id": 11,
        "x": 169,
        "y": 442,
        "targetX": 494,
        "targetY": 749,
        "label": "12"
      },
      {
        "id": 12,
        "x": 500,
        "y": 811,
        "targetX": 291,
        "targetY": 327,
        "label": "13"
      },
      {
        "id": 13,
        "x": 292,
        "y": 252,
        "targetX": 708,
        "targetY": 339,
        "label": "14"
      },
      {
        "id": 14,
        "x": 790,
        "y": 333,
        "targetX": 278,
        "targetY": 635,
        "label": "15"
      },
      {
        "id": 15,
        "x": 615,
        "y": 816,
        "targetX": 454,
        "targetY": 527,
        "label": "16"
      },
      {
        "id": 16,
        "x": 390,
        "y": 197,
        "targetX": 324,
        "targetY": 411,
        "label": "17"
      },
      {
        "id": 17,
        "x": 273,
        "y": 770,
        "targetX": 733,
        "targetY": 639,
        "label": "18"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        0,
        6
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        3,
        9
      ],
      [
        0,
        10
      ],
      [
        3,
        10
      ],
      [
        7,
        10
      ],
      [
        3,
        11
      ],
      [
        4,
        11
      ],
      [
        7,
        11
      ],
      [
        0,
        12
      ],
      [
        5,
        12
      ],
      [
        6,
        12
      ],
      [
        0,
        13
      ],
      [
        1,
        13
      ],
      [
        2,
        13
      ],
      [
        4,
        14
      ],
      [
        5,
        14
      ],
      [
        8,
        14
      ],
      [
        4,
        15
      ],
      [
        0,
        15
      ],
      [
        7,
        15
      ],
      [
        5,
        16
      ],
      [
        0,
        16
      ],
      [
        8,
        16
      ],
      [
        2,
        17
      ],
      [
        3,
        17
      ],
      [
        9,
        17
      ]
    ]
  },
  {
    "id": 41,
    "packId": 5,
    "packName": "Cosmic Labyrinth",
    "name": "Transcendent Web",
    "theme": "radiance",
    "nodeCount": 19,
    "edgeCount": 45,
    "initialCrossings": 232,
    "parMoves": 106,
    "nodes": [
      {
        "id": 0,
        "x": 827,
        "y": 643,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 206,
        "y": 308,
        "targetX": 755,
        "targetY": 245,
        "label": "2"
      },
      {
        "id": 2,
        "x": 687,
        "y": 260,
        "targetX": 860,
        "targetY": 500,
        "label": "3"
      },
      {
        "id": 3,
        "x": 260,
        "y": 721,
        "targetX": 755,
        "targetY": 755,
        "label": "4"
      },
      {
        "id": 4,
        "x": 195,
        "y": 634,
        "targetX": 500,
        "targetY": 860,
        "label": "5"
      },
      {
        "id": 5,
        "x": 809,
        "y": 526,
        "targetX": 245,
        "targetY": 755,
        "label": "6"
      },
      {
        "id": 6,
        "x": 648,
        "y": 773,
        "targetX": 140,
        "targetY": 500,
        "label": "7"
      },
      {
        "id": 7,
        "x": 736,
        "y": 718,
        "targetX": 245,
        "targetY": 245,
        "label": "8"
      },
      {
        "id": 8,
        "x": 176,
        "y": 527,
        "targetX": 411,
        "targetY": 593,
        "label": "9"
      },
      {
        "id": 9,
        "x": 781,
        "y": 316,
        "targetX": 587,
        "targetY": 583,
        "label": "10"
      },
      {
        "id": 10,
        "x": 352,
        "y": 774,
        "targetX": 292,
        "targetY": 465,
        "label": "11"
      },
      {
        "id": 11,
        "x": 840,
        "y": 414,
        "targetX": 710,
        "targetY": 462,
        "label": "12"
      },
      {
        "id": 12,
        "x": 307,
        "y": 252,
        "targetX": 476,
        "targetY": 525,
        "label": "13"
      },
      {
        "id": 13,
        "x": 500,
        "y": 147,
        "targetX": 615,
        "targetY": 732,
        "label": "14"
      },
      {
        "id": 14,
        "x": 449,
        "y": 807,
        "targetX": 390,
        "targetY": 501,
        "label": "15"
      },
      {
        "id": 15,
        "x": 383,
        "y": 159,
        "targetX": 610,
        "targetY": 500,
        "label": "16"
      },
      {
        "id": 16,
        "x": 170,
        "y": 416,
        "targetX": 288,
        "targetY": 292,
        "label": "17"
      },
      {
        "id": 17,
        "x": 601,
        "y": 205,
        "targetX": 530,
        "targetY": 520,
        "label": "18"
      },
      {
        "id": 18,
        "x": 550,
        "y": 801,
        "targetX": 390,
        "targetY": 741,
        "label": "19"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        6,
        7
      ],
      [
        0,
        7
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        0,
        6
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        3,
        9
      ],
      [
        4,
        9
      ],
      [
        0,
        10
      ],
      [
        5,
        10
      ],
      [
        6,
        10
      ],
      [
        0,
        11
      ],
      [
        2,
        11
      ],
      [
        3,
        11
      ],
      [
        0,
        12
      ],
      [
        4,
        12
      ],
      [
        8,
        12
      ],
      [
        3,
        13
      ],
      [
        4,
        13
      ],
      [
        9,
        13
      ],
      [
        5,
        14
      ],
      [
        0,
        14
      ],
      [
        8,
        14
      ],
      [
        0,
        15
      ],
      [
        3,
        15
      ],
      [
        9,
        15
      ],
      [
        0,
        16
      ],
      [
        6,
        16
      ],
      [
        7,
        16
      ],
      [
        4,
        17
      ],
      [
        0,
        17
      ],
      [
        9,
        17
      ],
      [
        4,
        18
      ],
      [
        5,
        18
      ],
      [
        8,
        18
      ]
    ]
  },
  {
    "id": 42,
    "packId": 5,
    "packName": "Cosmic Labyrinth",
    "name": "Infinity Knot",
    "theme": "radiance",
    "nodeCount": 20,
    "edgeCount": 47,
    "initialCrossings": 275,
    "parMoves": 125,
    "nodes": [
      {
        "id": 0,
        "x": 290,
        "y": 789,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 500,
        "y": 824,
        "targetX": 755,
        "targetY": 245,
        "label": "2"
      },
      {
        "id": 2,
        "x": 205,
        "y": 404,
        "targetX": 860,
        "targetY": 500,
        "label": "3"
      },
      {
        "id": 3,
        "x": 397,
        "y": 818,
        "targetX": 755,
        "targetY": 755,
        "label": "4"
      },
      {
        "id": 4,
        "x": 603,
        "y": 818,
        "targetX": 500,
        "targetY": 860,
        "label": "5"
      },
      {
        "id": 5,
        "x": 686,
        "y": 756,
        "targetX": 245,
        "targetY": 755,
        "label": "6"
      },
      {
        "id": 6,
        "x": 594,
        "y": 211,
        "targetX": 140,
        "targetY": 500,
        "label": "7"
      },
      {
        "id": 7,
        "x": 810,
        "y": 500,
        "targetX": 245,
        "targetY": 245,
        "label": "8"
      },
      {
        "id": 8,
        "x": 752,
        "y": 683,
        "targetX": 417,
        "targetY": 587,
        "label": "9"
      },
      {
        "id": 9,
        "x": 224,
        "y": 299,
        "targetX": 581,
        "targetY": 581,
        "label": "10"
      },
      {
        "id": 10,
        "x": 700,
        "y": 225,
        "targetX": 712,
        "targetY": 461,
        "label": "11"
      },
      {
        "id": 11,
        "x": 794,
        "y": 286,
        "targetX": 297,
        "targetY": 473,
        "label": "12"
      },
      {
        "id": 12,
        "x": 253,
        "y": 680,
        "targetX": 474,
        "targetY": 535,
        "label": "13"
      },
      {
        "id": 13,
        "x": 500,
        "y": 140,
        "targetX": 392,
        "targetY": 494,
        "label": "14"
      },
      {
        "id": 14,
        "x": 209,
        "y": 594,
        "targetX": 388,
        "targetY": 741,
        "label": "15"
      },
      {
        "id": 15,
        "x": 198,
        "y": 500,
        "targetX": 611,
        "targetY": 497,
        "label": "16"
      },
      {
        "id": 16,
        "x": 840,
        "y": 610,
        "targetX": 617,
        "targetY": 732,
        "label": "17"
      },
      {
        "id": 17,
        "x": 843,
        "y": 388,
        "targetX": 290,
        "targetY": 289,
        "label": "18"
      },
      {
        "id": 18,
        "x": 293,
        "y": 215,
        "targetX": 521,
        "targetY": 528,
        "label": "19"
      },
      {
        "id": 19,
        "x": 390,
        "y": 160,
        "targetX": 659,
        "targetY": 447,
        "label": "20"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        6,
        7
      ],
      [
        0,
        7
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        0,
        6
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        5,
        8
      ],
      [
        3,
        9
      ],
      [
        4,
        9
      ],
      [
        0,
        10
      ],
      [
        3,
        10
      ],
      [
        0,
        11
      ],
      [
        5,
        11
      ],
      [
        6,
        11
      ],
      [
        0,
        12
      ],
      [
        4,
        12
      ],
      [
        8,
        12
      ],
      [
        5,
        13
      ],
      [
        0,
        13
      ],
      [
        8,
        13
      ],
      [
        4,
        14
      ],
      [
        5,
        14
      ],
      [
        8,
        14
      ],
      [
        0,
        15
      ],
      [
        3,
        15
      ],
      [
        9,
        15
      ],
      [
        3,
        16
      ],
      [
        4,
        16
      ],
      [
        9,
        16
      ],
      [
        0,
        17
      ],
      [
        6,
        17
      ],
      [
        7,
        17
      ],
      [
        4,
        18
      ],
      [
        0,
        18
      ],
      [
        9,
        18
      ],
      [
        3,
        19
      ],
      [
        0,
        19
      ],
      [
        10,
        19
      ]
    ]
  },
  {
    "id": 43,
    "packId": 5,
    "packName": "Cosmic Labyrinth",
    "name": "Chronos Labyrinth",
    "theme": "radiance",
    "nodeCount": 20,
    "edgeCount": 47,
    "initialCrossings": 240,
    "parMoves": 110,
    "nodes": [
      {
        "id": 0,
        "x": 598,
        "y": 800,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 797,
        "y": 597,
        "targetX": 755,
        "targetY": 245,
        "label": "2"
      },
      {
        "id": 2,
        "x": 199,
        "y": 598,
        "targetX": 860,
        "targetY": 500,
        "label": "3"
      },
      {
        "id": 3,
        "x": 794,
        "y": 405,
        "targetX": 755,
        "targetY": 755,
        "label": "4"
      },
      {
        "id": 4,
        "x": 306,
        "y": 767,
        "targetX": 500,
        "targetY": 860,
        "label": "5"
      },
      {
        "id": 5,
        "x": 699,
        "y": 226,
        "targetX": 245,
        "targetY": 755,
        "label": "6"
      },
      {
        "id": 6,
        "x": 230,
        "y": 304,
        "targetX": 140,
        "targetY": 500,
        "label": "7"
      },
      {
        "id": 7,
        "x": 254,
        "y": 679,
        "targetX": 245,
        "targetY": 245,
        "label": "8"
      },
      {
        "id": 8,
        "x": 772,
        "y": 698,
        "targetX": 577,
        "targetY": 581,
        "label": "9"
      },
      {
        "id": 9,
        "x": 396,
        "y": 180,
        "targetX": 421,
        "targetY": 579,
        "label": "10"
      },
      {
        "id": 10,
        "x": 678,
        "y": 746,
        "targetX": 297,
        "targetY": 458,
        "label": "11"
      },
      {
        "id": 11,
        "x": 823,
        "y": 500,
        "targetX": 705,
        "targetY": 467,
        "label": "12"
      },
      {
        "id": 12,
        "x": 752,
        "y": 317,
        "targetX": 608,
        "targetY": 495,
        "label": "13"
      },
      {
        "id": 13,
        "x": 181,
        "y": 396,
        "targetX": 381,
        "targetY": 492,
        "label": "14"
      },
      {
        "id": 14,
        "x": 611,
        "y": 160,
        "targetX": 385,
        "targetY": 725,
        "label": "15"
      },
      {
        "id": 15,
        "x": 404,
        "y": 797,
        "targetX": 612,
        "targetY": 734,
        "label": "16"
      },
      {
        "id": 16,
        "x": 318,
        "y": 250,
        "targetX": 707,
        "targetY": 297,
        "label": "17"
      },
      {
        "id": 17,
        "x": 500,
        "y": 835,
        "targetX": 531,
        "targetY": 523,
        "label": "18"
      },
      {
        "id": 18,
        "x": 175,
        "y": 500,
        "targetX": 472,
        "targetY": 524,
        "label": "19"
      },
      {
        "id": 19,
        "x": 500,
        "y": 153,
        "targetX": 229,
        "targetY": 572,
        "label": "20"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        6,
        7
      ],
      [
        0,
        7
      ],
      [
        0,
        3
      ],
      [
        0,
        5
      ],
      [
        0,
        6
      ],
      [
        0,
        8
      ],
      [
        3,
        8
      ],
      [
        4,
        8
      ],
      [
        0,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        0,
        10
      ],
      [
        5,
        10
      ],
      [
        6,
        10
      ],
      [
        0,
        11
      ],
      [
        2,
        11
      ],
      [
        3,
        11
      ],
      [
        0,
        12
      ],
      [
        3,
        12
      ],
      [
        8,
        12
      ],
      [
        5,
        13
      ],
      [
        0,
        13
      ],
      [
        9,
        13
      ],
      [
        4,
        14
      ],
      [
        5,
        14
      ],
      [
        9,
        14
      ],
      [
        3,
        15
      ],
      [
        4,
        15
      ],
      [
        8,
        15
      ],
      [
        0,
        16
      ],
      [
        1,
        16
      ],
      [
        2,
        16
      ],
      [
        4,
        17
      ],
      [
        0,
        17
      ],
      [
        8,
        17
      ],
      [
        0,
        18
      ],
      [
        4,
        18
      ],
      [
        9,
        18
      ],
      [
        5,
        19
      ],
      [
        6,
        19
      ],
      [
        10,
        19
      ]
    ]
  },
  {
    "id": 44,
    "packId": 5,
    "packName": "Cosmic Labyrinth",
    "name": "Ethereal Matrix",
    "theme": "radiance",
    "nodeCount": 21,
    "edgeCount": 49,
    "initialCrossings": 387,
    "parMoves": 176,
    "nodes": [
      {
        "id": 0,
        "x": 677,
        "y": 241,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 168,
        "y": 370,
        "targetX": 755,
        "targetY": 245,
        "label": "2"
      },
      {
        "id": 2,
        "x": 164,
        "y": 577,
        "targetX": 860,
        "targetY": 500,
        "label": "3"
      },
      {
        "id": 3,
        "x": 325,
        "y": 243,
        "targetX": 755,
        "targetY": 755,
        "label": "4"
      },
      {
        "id": 4,
        "x": 449,
        "y": 835,
        "targetX": 500,
        "targetY": 860,
        "label": "5"
      },
      {
        "id": 5,
        "x": 264,
        "y": 311,
        "targetX": 245,
        "targetY": 755,
        "label": "6"
      },
      {
        "id": 6,
        "x": 645,
        "y": 801,
        "targetX": 140,
        "targetY": 500,
        "label": "7"
      },
      {
        "id": 7,
        "x": 169,
        "y": 475,
        "targetX": 245,
        "targetY": 245,
        "label": "8"
      },
      {
        "id": 8,
        "x": 605,
        "y": 160,
        "targetX": 583,
        "targetY": 591,
        "label": "9"
      },
      {
        "id": 9,
        "x": 284,
        "y": 733,
        "targetX": 415,
        "targetY": 577,
        "label": "10"
      },
      {
        "id": 10,
        "x": 828,
        "y": 475,
        "targetX": 701,
        "targetY": 471,
        "label": "11"
      },
      {
        "id": 11,
        "x": 550,
        "y": 830,
        "targetX": 292,
        "targetY": 462,
        "label": "12"
      },
      {
        "id": 12,
        "x": 799,
        "y": 568,
        "targetX": 606,
        "targetY": 494,
        "label": "13"
      },
      {
        "id": 13,
        "x": 411,
        "y": 212,
        "targetX": 468,
        "targetY": 527,
        "label": "14"
      },
      {
        "id": 14,
        "x": 742,
        "y": 307,
        "targetX": 394,
        "targetY": 726,
        "label": "15"
      },
      {
        "id": 15,
        "x": 829,
        "y": 371,
        "targetX": 299,
        "targetY": 294,
        "label": "16"
      },
      {
        "id": 16,
        "x": 810,
        "y": 679,
        "targetX": 384,
        "targetY": 496,
        "label": "17"
      },
      {
        "id": 17,
        "x": 200,
        "y": 673,
        "targetX": 612,
        "targetY": 733,
        "label": "18"
      },
      {
        "id": 18,
        "x": 500,
        "y": 146,
        "targetX": 531,
        "targetY": 525,
        "label": "19"
      },
      {
        "id": 19,
        "x": 740,
        "y": 758,
        "targetX": 704,
        "targetY": 301,
        "label": "20"
      },
      {
        "id": 20,
        "x": 354,
        "y": 802,
        "targetX": 683,
        "targetY": 366,
        "label": "21"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        6,
        7
      ],
      [
        0,
        7
      ],
      [
        0,
        2
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        0,
        6
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        0,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        2,
        10
      ],
      [
        3,
        10
      ],
      [
        0,
        11
      ],
      [
        5,
        11
      ],
      [
        6,
        11
      ],
      [
        0,
        12
      ],
      [
        3,
        12
      ],
      [
        8,
        12
      ],
      [
        0,
        13
      ],
      [
        4,
        13
      ],
      [
        9,
        13
      ],
      [
        4,
        14
      ],
      [
        5,
        14
      ],
      [
        9,
        14
      ],
      [
        0,
        15
      ],
      [
        6,
        15
      ],
      [
        7,
        15
      ],
      [
        5,
        16
      ],
      [
        0,
        16
      ],
      [
        9,
        16
      ],
      [
        3,
        17
      ],
      [
        4,
        17
      ],
      [
        8,
        17
      ],
      [
        4,
        18
      ],
      [
        0,
        18
      ],
      [
        8,
        18
      ],
      [
        0,
        19
      ],
      [
        1,
        19
      ],
      [
        2,
        19
      ],
      [
        0,
        20
      ],
      [
        2,
        20
      ],
      [
        10,
        20
      ]
    ]
  },
  {
    "id": 45,
    "packId": 5,
    "packName": "Cosmic Labyrinth",
    "name": "Grand Meridian",
    "theme": "radiance",
    "nodeCount": 21,
    "edgeCount": 51,
    "initialCrossings": 290,
    "parMoves": 132,
    "nodes": [
      {
        "id": 0,
        "x": 455,
        "y": 799,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 650,
        "y": 812,
        "targetX": 755,
        "targetY": 245,
        "label": "2"
      },
      {
        "id": 2,
        "x": 774,
        "y": 281,
        "targetX": 860,
        "targetY": 500,
        "label": "3"
      },
      {
        "id": 3,
        "x": 394,
        "y": 157,
        "targetX": 755,
        "targetY": 755,
        "label": "4"
      },
      {
        "id": 4,
        "x": 184,
        "y": 572,
        "targetX": 500,
        "targetY": 860,
        "label": "5"
      },
      {
        "id": 5,
        "x": 684,
        "y": 230,
        "targetX": 245,
        "targetY": 755,
        "label": "6"
      },
      {
        "id": 6,
        "x": 245,
        "y": 297,
        "targetX": 140,
        "targetY": 500,
        "label": "7"
      },
      {
        "id": 7,
        "x": 186,
        "y": 681,
        "targetX": 245,
        "targetY": 245,
        "label": "8"
      },
      {
        "id": 8,
        "x": 822,
        "y": 573,
        "targetX": 419,
        "targetY": 585,
        "label": "9"
      },
      {
        "id": 9,
        "x": 206,
        "y": 385,
        "targetX": 579,
        "targetY": 591,
        "label": "10"
      },
      {
        "id": 10,
        "x": 357,
        "y": 797,
        "targetX": 302,
        "targetY": 467,
        "label": "11"
      },
      {
        "id": 11,
        "x": 602,
        "y": 171,
        "targetX": 700,
        "targetY": 473,
        "label": "12"
      },
      {
        "id": 12,
        "x": 500,
        "y": 170,
        "targetX": 394,
        "targetY": 488,
        "label": "13"
      },
      {
        "id": 13,
        "x": 783,
        "y": 663,
        "targetX": 612,
        "targetY": 498,
        "label": "14"
      },
      {
        "id": 14,
        "x": 781,
        "y": 390,
        "targetX": 615,
        "targetY": 733,
        "label": "15"
      },
      {
        "id": 15,
        "x": 858,
        "y": 473,
        "targetX": 395,
        "targetY": 729,
        "label": "16"
      },
      {
        "id": 16,
        "x": 187,
        "y": 477,
        "targetX": 467,
        "targetY": 536,
        "label": "17"
      },
      {
        "id": 17,
        "x": 728,
        "y": 746,
        "targetX": 289,
        "targetY": 295,
        "label": "18"
      },
      {
        "id": 18,
        "x": 317,
        "y": 231,
        "targetX": 322,
        "targetY": 376,
        "label": "19"
      },
      {
        "id": 19,
        "x": 268,
        "y": 750,
        "targetX": 524,
        "targetY": 526,
        "label": "20"
      },
      {
        "id": 20,
        "x": 547,
        "y": 812,
        "targetX": 230,
        "targetY": 567,
        "label": "21"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        6,
        7
      ],
      [
        0,
        7
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        0,
        6
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        3,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        10
      ],
      [
        6,
        10
      ],
      [
        0,
        11
      ],
      [
        2,
        11
      ],
      [
        3,
        11
      ],
      [
        5,
        12
      ],
      [
        0,
        12
      ],
      [
        8,
        12
      ],
      [
        0,
        13
      ],
      [
        3,
        13
      ],
      [
        9,
        13
      ],
      [
        3,
        14
      ],
      [
        4,
        14
      ],
      [
        9,
        14
      ],
      [
        4,
        15
      ],
      [
        5,
        15
      ],
      [
        8,
        15
      ],
      [
        0,
        16
      ],
      [
        4,
        16
      ],
      [
        8,
        16
      ],
      [
        0,
        17
      ],
      [
        6,
        17
      ],
      [
        7,
        17
      ],
      [
        6,
        18
      ],
      [
        0,
        18
      ],
      [
        10,
        18
      ],
      [
        4,
        19
      ],
      [
        0,
        19
      ],
      [
        9,
        19
      ],
      [
        5,
        20
      ],
      [
        6,
        20
      ],
      [
        10,
        20
      ]
    ]
  },
  {
    "id": 46,
    "packId": 5,
    "packName": "Cosmic Labyrinth",
    "name": "Supernova Web",
    "theme": "radiance",
    "nodeCount": 22,
    "edgeCount": 55,
    "initialCrossings": 291,
    "parMoves": 133,
    "nodes": [
      {
        "id": 0,
        "x": 267,
        "y": 298,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 326,
        "y": 229,
        "targetX": 755,
        "targetY": 245,
        "label": "2"
      },
      {
        "id": 2,
        "x": 782,
        "y": 629,
        "targetX": 860,
        "targetY": 500,
        "label": "3"
      },
      {
        "id": 3,
        "x": 403,
        "y": 831,
        "targetX": 755,
        "targetY": 755,
        "label": "4"
      },
      {
        "id": 4,
        "x": 587,
        "y": 797,
        "targetX": 500,
        "targetY": 860,
        "label": "5"
      },
      {
        "id": 5,
        "x": 500,
        "y": 168,
        "targetX": 245,
        "targetY": 755,
        "label": "6"
      },
      {
        "id": 6,
        "x": 211,
        "y": 632,
        "targetX": 140,
        "targetY": 500,
        "label": "7"
      },
      {
        "id": 7,
        "x": 327,
        "y": 769,
        "targetX": 245,
        "targetY": 245,
        "label": "8"
      },
      {
        "id": 8,
        "x": 790,
        "y": 368,
        "targetX": 409,
        "targetY": 579,
        "label": "9"
      },
      {
        "id": 9,
        "x": 190,
        "y": 358,
        "targetX": 589,
        "targetY": 589,
        "label": "10"
      },
      {
        "id": 10,
        "x": 591,
        "y": 191,
        "targetX": 706,
        "targetY": 464,
        "label": "11"
      },
      {
        "id": 11,
        "x": 670,
        "y": 765,
        "targetX": 288,
        "targetY": 468,
        "label": "12"
      },
      {
        "id": 12,
        "x": 268,
        "y": 701,
        "targetX": 616,
        "targetY": 742,
        "label": "13"
      },
      {
        "id": 13,
        "x": 764,
        "y": 729,
        "targetX": 474,
        "targetY": 529,
        "label": "14"
      },
      {
        "id": 14,
        "x": 155,
        "y": 450,
        "targetX": 529,
        "targetY": 529,
        "label": "15"
      },
      {
        "id": 15,
        "x": 193,
        "y": 544,
        "targetX": 378,
        "targetY": 484,
        "label": "16"
      },
      {
        "id": 16,
        "x": 849,
        "y": 550,
        "targetX": 711,
        "targetY": 290,
        "label": "17"
      },
      {
        "id": 17,
        "x": 398,
        "y": 152,
        "targetX": 619,
        "targetY": 497,
        "label": "18"
      },
      {
        "id": 18,
        "x": 811,
        "y": 455,
        "targetX": 341,
        "targetY": 458,
        "label": "19"
      },
      {
        "id": 19,
        "x": 500,
        "y": 831,
        "targetX": 291,
        "targetY": 296,
        "label": "20"
      },
      {
        "id": 20,
        "x": 684,
        "y": 213,
        "targetX": 391,
        "targetY": 737,
        "label": "21"
      },
      {
        "id": 21,
        "x": 757,
        "y": 277,
        "targetX": 305,
        "targetY": 371,
        "label": "22"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        6,
        7
      ],
      [
        0,
        7
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        0,
        6
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        5,
        8
      ],
      [
        0,
        9
      ],
      [
        3,
        9
      ],
      [
        4,
        9
      ],
      [
        0,
        10
      ],
      [
        2,
        10
      ],
      [
        3,
        10
      ],
      [
        0,
        11
      ],
      [
        5,
        11
      ],
      [
        6,
        11
      ],
      [
        3,
        12
      ],
      [
        4,
        12
      ],
      [
        9,
        12
      ],
      [
        0,
        13
      ],
      [
        4,
        13
      ],
      [
        8,
        13
      ],
      [
        4,
        14
      ],
      [
        0,
        14
      ],
      [
        9,
        14
      ],
      [
        5,
        15
      ],
      [
        0,
        15
      ],
      [
        8,
        15
      ],
      [
        0,
        16
      ],
      [
        1,
        16
      ],
      [
        2,
        16
      ],
      [
        0,
        17
      ],
      [
        3,
        17
      ],
      [
        9,
        17
      ],
      [
        0,
        18
      ],
      [
        5,
        18
      ],
      [
        11,
        18
      ],
      [
        0,
        19
      ],
      [
        6,
        19
      ],
      [
        7,
        19
      ],
      [
        4,
        20
      ],
      [
        5,
        20
      ],
      [
        8,
        20
      ],
      [
        6,
        21
      ],
      [
        0,
        21
      ],
      [
        11,
        21
      ]
    ]
  },
  {
    "id": 47,
    "packId": 5,
    "packName": "Cosmic Labyrinth",
    "name": "Cosmic Mandala",
    "theme": "radiance",
    "nodeCount": 22,
    "edgeCount": 51,
    "initialCrossings": 344,
    "parMoves": 157,
    "nodes": [
      {
        "id": 0,
        "x": 592,
        "y": 813,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 190,
        "y": 642,
        "targetX": 755,
        "targetY": 245,
        "label": "2"
      },
      {
        "id": 2,
        "x": 757,
        "y": 723,
        "targetX": 860,
        "targetY": 500,
        "label": "3"
      },
      {
        "id": 3,
        "x": 172,
        "y": 547,
        "targetX": 755,
        "targetY": 755,
        "label": "4"
      },
      {
        "id": 4,
        "x": 248,
        "y": 718,
        "targetX": 500,
        "targetY": 860,
        "label": "5"
      },
      {
        "id": 5,
        "x": 400,
        "y": 840,
        "targetX": 245,
        "targetY": 755,
        "label": "6"
      },
      {
        "id": 6,
        "x": 332,
        "y": 239,
        "targetX": 140,
        "targetY": 500,
        "label": "7"
      },
      {
        "id": 7,
        "x": 587,
        "y": 204,
        "targetX": 245,
        "targetY": 245,
        "label": "8"
      },
      {
        "id": 8,
        "x": 745,
        "y": 287,
        "targetX": 586,
        "targetY": 589,
        "label": "9"
      },
      {
        "id": 9,
        "x": 262,
        "y": 294,
        "targetX": 413,
        "targetY": 588,
        "label": "10"
      },
      {
        "id": 10,
        "x": 804,
        "y": 639,
        "targetX": 291,
        "targetY": 460,
        "label": "11"
      },
      {
        "id": 11,
        "x": 319,
        "y": 782,
        "targetX": 711,
        "targetY": 463,
        "label": "12"
      },
      {
        "id": 12,
        "x": 795,
        "y": 365,
        "targetX": 468,
        "targetY": 533,
        "label": "13"
      },
      {
        "id": 13,
        "x": 398,
        "y": 151,
        "targetX": 379,
        "targetY": 498,
        "label": "14"
      },
      {
        "id": 14,
        "x": 684,
        "y": 786,
        "targetX": 380,
        "targetY": 736,
        "label": "15"
      },
      {
        "id": 15,
        "x": 663,
        "y": 247,
        "targetX": 525,
        "targetY": 536,
        "label": "16"
      },
      {
        "id": 16,
        "x": 197,
        "y": 362,
        "targetX": 616,
        "targetY": 492,
        "label": "17"
      },
      {
        "id": 17,
        "x": 500,
        "y": 138,
        "targetX": 612,
        "targetY": 739,
        "label": "18"
      },
      {
        "id": 18,
        "x": 184,
        "y": 455,
        "targetX": 296,
        "targetY": 296,
        "label": "19"
      },
      {
        "id": 19,
        "x": 837,
        "y": 548,
        "targetX": 699,
        "targetY": 301,
        "label": "20"
      },
      {
        "id": 20,
        "x": 852,
        "y": 449,
        "targetX": 771,
        "targetY": 576,
        "label": "21"
      },
      {
        "id": 21,
        "x": 500,
        "y": 805,
        "targetX": 651,
        "targetY": 460,
        "label": "22"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        6,
        7
      ],
      [
        0,
        7
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        5
      ],
      [
        0,
        8
      ],
      [
        3,
        8
      ],
      [
        4,
        8
      ],
      [
        0,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        0,
        10
      ],
      [
        5,
        10
      ],
      [
        6,
        10
      ],
      [
        3,
        11
      ],
      [
        0,
        12
      ],
      [
        4,
        12
      ],
      [
        9,
        12
      ],
      [
        5,
        13
      ],
      [
        0,
        13
      ],
      [
        9,
        13
      ],
      [
        4,
        14
      ],
      [
        5,
        14
      ],
      [
        9,
        14
      ],
      [
        4,
        15
      ],
      [
        0,
        15
      ],
      [
        8,
        15
      ],
      [
        0,
        16
      ],
      [
        3,
        16
      ],
      [
        8,
        16
      ],
      [
        3,
        17
      ],
      [
        4,
        17
      ],
      [
        8,
        17
      ],
      [
        0,
        18
      ],
      [
        6,
        18
      ],
      [
        7,
        18
      ],
      [
        0,
        19
      ],
      [
        1,
        19
      ],
      [
        2,
        19
      ],
      [
        2,
        20
      ],
      [
        3,
        20
      ],
      [
        11,
        20
      ],
      [
        3,
        21
      ],
      [
        0,
        21
      ],
      [
        11,
        21
      ]
    ]
  },
  {
    "id": 48,
    "packId": 5,
    "packName": "Cosmic Labyrinth",
    "name": "Celestial Sphere",
    "theme": "radiance",
    "nodeCount": 23,
    "edgeCount": 56,
    "initialCrossings": 287,
    "parMoves": 131,
    "nodes": [
      {
        "id": 0,
        "x": 458,
        "y": 805,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 715,
        "y": 765,
        "targetX": 755,
        "targetY": 245,
        "label": "2"
      },
      {
        "id": 2,
        "x": 544,
        "y": 820,
        "targetX": 860,
        "targetY": 500,
        "label": "3"
      },
      {
        "id": 3,
        "x": 232,
        "y": 361,
        "targetX": 755,
        "targetY": 755,
        "label": "4"
      },
      {
        "id": 4,
        "x": 358,
        "y": 828,
        "targetX": 500,
        "targetY": 860,
        "label": "5"
      },
      {
        "id": 5,
        "x": 807,
        "y": 341,
        "targetX": 245,
        "targetY": 755,
        "label": "6"
      },
      {
        "id": 6,
        "x": 193,
        "y": 436,
        "targetX": 140,
        "targetY": 500,
        "label": "7"
      },
      {
        "id": 7,
        "x": 663,
        "y": 232,
        "targetX": 245,
        "targetY": 245,
        "label": "8"
      },
      {
        "id": 8,
        "x": 276,
        "y": 775,
        "targetX": 422,
        "targetY": 583,
        "label": "9"
      },
      {
        "id": 9,
        "x": 241,
        "y": 683,
        "targetX": 593,
        "targetY": 586,
        "label": "10"
      },
      {
        "id": 10,
        "x": 320,
        "y": 203,
        "targetX": 711,
        "targetY": 457,
        "label": "11"
      },
      {
        "id": 11,
        "x": 261,
        "y": 276,
        "targetX": 299,
        "targetY": 457,
        "label": "12"
      },
      {
        "id": 12,
        "x": 168,
        "y": 618,
        "targetX": 524,
        "targetY": 528,
        "label": "13"
      },
      {
        "id": 13,
        "x": 757,
        "y": 260,
        "targetX": 385,
        "targetY": 737,
        "label": "14"
      },
      {
        "id": 14,
        "x": 170,
        "y": 523,
        "targetX": 622,
        "targetY": 737,
        "label": "15"
      },
      {
        "id": 15,
        "x": 813,
        "y": 435,
        "targetX": 388,
        "targetY": 496,
        "label": "16"
      },
      {
        "id": 16,
        "x": 840,
        "y": 621,
        "targetX": 473,
        "targetY": 528,
        "label": "17"
      },
      {
        "id": 17,
        "x": 500,
        "y": 162,
        "targetX": 608,
        "targetY": 500,
        "label": "18"
      },
      {
        "id": 18,
        "x": 777,
        "y": 696,
        "targetX": 711,
        "targetY": 293,
        "label": "19"
      },
      {
        "id": 19,
        "x": 417,
        "y": 202,
        "targetX": 287,
        "targetY": 290,
        "label": "20"
      },
      {
        "id": 20,
        "x": 644,
        "y": 831,
        "targetX": 228,
        "targetY": 572,
        "label": "21"
      },
      {
        "id": 21,
        "x": 817,
        "y": 522,
        "targetX": 344,
        "targetY": 448,
        "label": "22"
      },
      {
        "id": 22,
        "x": 589,
        "y": 183,
        "targetX": 660,
        "targetY": 445,
        "label": "23"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        6,
        7
      ],
      [
        0,
        7
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        0,
        5
      ],
      [
        0,
        6
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        0,
        9
      ],
      [
        3,
        9
      ],
      [
        4,
        9
      ],
      [
        0,
        10
      ],
      [
        2,
        10
      ],
      [
        3,
        10
      ],
      [
        0,
        11
      ],
      [
        6,
        11
      ],
      [
        4,
        12
      ],
      [
        0,
        12
      ],
      [
        9,
        12
      ],
      [
        4,
        13
      ],
      [
        5,
        13
      ],
      [
        8,
        13
      ],
      [
        3,
        14
      ],
      [
        4,
        14
      ],
      [
        9,
        14
      ],
      [
        5,
        15
      ],
      [
        0,
        15
      ],
      [
        8,
        15
      ],
      [
        0,
        16
      ],
      [
        4,
        16
      ],
      [
        8,
        16
      ],
      [
        0,
        17
      ],
      [
        3,
        17
      ],
      [
        9,
        17
      ],
      [
        0,
        18
      ],
      [
        1,
        18
      ],
      [
        2,
        18
      ],
      [
        0,
        19
      ],
      [
        6,
        19
      ],
      [
        7,
        19
      ],
      [
        5,
        20
      ],
      [
        6,
        20
      ],
      [
        11,
        20
      ],
      [
        0,
        21
      ],
      [
        5,
        21
      ],
      [
        11,
        21
      ],
      [
        3,
        22
      ],
      [
        0,
        22
      ],
      [
        10,
        22
      ]
    ]
  },
  {
    "id": 49,
    "packId": 5,
    "packName": "Cosmic Labyrinth",
    "name": "Nirvana Knot",
    "theme": "radiance",
    "nodeCount": 23,
    "edgeCount": 55,
    "initialCrossings": 308,
    "parMoves": 140,
    "nodes": [
      {
        "id": 0,
        "x": 149,
        "y": 524,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 333,
        "y": 225,
        "targetX": 755,
        "targetY": 245,
        "label": "2"
      },
      {
        "id": 2,
        "x": 233,
        "y": 688,
        "targetX": 860,
        "targetY": 500,
        "label": "3"
      },
      {
        "id": 3,
        "x": 417,
        "y": 202,
        "targetX": 755,
        "targetY": 755,
        "label": "4"
      },
      {
        "id": 4,
        "x": 786,
        "y": 352,
        "targetX": 500,
        "targetY": 860,
        "label": "5"
      },
      {
        "id": 5,
        "x": 547,
        "y": 841,
        "targetX": 245,
        "targetY": 755,
        "label": "6"
      },
      {
        "id": 6,
        "x": 804,
        "y": 521,
        "targetX": 140,
        "targetY": 500,
        "label": "7"
      },
      {
        "id": 7,
        "x": 266,
        "y": 282,
        "targetX": 245,
        "targetY": 245,
        "label": "8"
      },
      {
        "id": 8,
        "x": 364,
        "y": 813,
        "targetX": 412,
        "targetY": 577,
        "label": "9"
      },
      {
        "id": 9,
        "x": 587,
        "y": 190,
        "targetX": 587,
        "targetY": 584,
        "label": "10"
      },
      {
        "id": 10,
        "x": 824,
        "y": 615,
        "targetX": 296,
        "targetY": 470,
        "label": "11"
      },
      {
        "id": 11,
        "x": 692,
        "y": 736,
        "targetX": 706,
        "targetY": 468,
        "label": "12"
      },
      {
        "id": 12,
        "x": 762,
        "y": 685,
        "targetX": 391,
        "targetY": 727,
        "label": "13"
      },
      {
        "id": 13,
        "x": 178,
        "y": 433,
        "targetX": 471,
        "targetY": 531,
        "label": "14"
      },
      {
        "id": 14,
        "x": 755,
        "y": 262,
        "targetX": 531,
        "targetY": 534,
        "label": "15"
      },
      {
        "id": 15,
        "x": 677,
        "y": 209,
        "targetX": 616,
        "targetY": 493,
        "label": "16"
      },
      {
        "id": 16,
        "x": 500,
        "y": 181,
        "targetX": 290,
        "targetY": 298,
        "label": "17"
      },
      {
        "id": 17,
        "x": 456,
        "y": 821,
        "targetX": 616,
        "targetY": 741,
        "label": "18"
      },
      {
        "id": 18,
        "x": 815,
        "y": 434,
        "targetX": 700,
        "targetY": 289,
        "label": "19"
      },
      {
        "id": 19,
        "x": 173,
        "y": 616,
        "targetX": 392,
        "targetY": 491,
        "label": "20"
      },
      {
        "id": 20,
        "x": 200,
        "y": 345,
        "targetX": 659,
        "targetY": 453,
        "label": "21"
      },
      {
        "id": 21,
        "x": 302,
        "y": 744,
        "targetX": 769,
        "targetY": 577,
        "label": "22"
      },
      {
        "id": 22,
        "x": 633,
        "y": 807,
        "targetX": 308,
        "targetY": 373,
        "label": "23"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        6,
        7
      ],
      [
        0,
        7
      ],
      [
        0,
        2
      ],
      [
        0,
        5
      ],
      [
        0,
        6
      ],
      [
        0,
        8
      ],
      [
        4,
        8
      ],
      [
        0,
        9
      ],
      [
        3,
        9
      ],
      [
        4,
        9
      ],
      [
        0,
        10
      ],
      [
        5,
        10
      ],
      [
        6,
        10
      ],
      [
        0,
        11
      ],
      [
        2,
        11
      ],
      [
        3,
        11
      ],
      [
        4,
        12
      ],
      [
        5,
        12
      ],
      [
        8,
        12
      ],
      [
        0,
        13
      ],
      [
        4,
        13
      ],
      [
        8,
        13
      ],
      [
        4,
        14
      ],
      [
        0,
        14
      ],
      [
        9,
        14
      ],
      [
        0,
        15
      ],
      [
        3,
        15
      ],
      [
        9,
        15
      ],
      [
        0,
        16
      ],
      [
        6,
        16
      ],
      [
        7,
        16
      ],
      [
        3,
        17
      ],
      [
        4,
        17
      ],
      [
        9,
        17
      ],
      [
        0,
        18
      ],
      [
        1,
        18
      ],
      [
        2,
        18
      ],
      [
        5,
        19
      ],
      [
        0,
        19
      ],
      [
        8,
        19
      ],
      [
        3,
        20
      ],
      [
        0,
        20
      ],
      [
        11,
        20
      ],
      [
        2,
        21
      ],
      [
        3,
        21
      ],
      [
        11,
        21
      ],
      [
        6,
        22
      ],
      [
        0,
        22
      ],
      [
        10,
        22
      ]
    ]
  },
  {
    "id": 50,
    "packId": 5,
    "packName": "Cosmic Labyrinth",
    "name": "Astral Singularity",
    "theme": "radiance",
    "nodeCount": 24,
    "edgeCount": 58,
    "initialCrossings": 490,
    "parMoves": 223,
    "nodes": [
      {
        "id": 0,
        "x": 806,
        "y": 677,
        "targetX": 500,
        "targetY": 140,
        "label": "1"
      },
      {
        "id": 1,
        "x": 232,
        "y": 655,
        "targetX": 755,
        "targetY": 245,
        "label": "2"
      },
      {
        "id": 2,
        "x": 278,
        "y": 278,
        "targetX": 860,
        "targetY": 500,
        "label": "3"
      },
      {
        "id": 3,
        "x": 333,
        "y": 210,
        "targetX": 755,
        "targetY": 755,
        "label": "4"
      },
      {
        "id": 4,
        "x": 500,
        "y": 198,
        "targetX": 500,
        "targetY": 860,
        "label": "5"
      },
      {
        "id": 5,
        "x": 168,
        "y": 500,
        "targetX": 245,
        "targetY": 755,
        "label": "6"
      },
      {
        "id": 6,
        "x": 819,
        "y": 414,
        "targetX": 140,
        "targetY": 500,
        "label": "7"
      },
      {
        "id": 7,
        "x": 751,
        "y": 751,
        "targetX": 245,
        "targetY": 245,
        "label": "8"
      },
      {
        "id": 8,
        "x": 832,
        "y": 589,
        "targetX": 588,
        "targetY": 587,
        "label": "9"
      },
      {
        "id": 9,
        "x": 260,
        "y": 740,
        "targetX": 411,
        "targetY": 582,
        "label": "10"
      },
      {
        "id": 10,
        "x": 344,
        "y": 771,
        "targetX": 701,
        "targetY": 466,
        "label": "11"
      },
      {
        "id": 11,
        "x": 591,
        "y": 839,
        "targetX": 294,
        "targetY": 463,
        "label": "12"
      },
      {
        "id": 12,
        "x": 500,
        "y": 808,
        "targetX": 615,
        "targetY": 726,
        "label": "13"
      },
      {
        "id": 13,
        "x": 217,
        "y": 337,
        "targetX": 390,
        "targetY": 739,
        "label": "14"
      },
      {
        "id": 14,
        "x": 184,
        "y": 585,
        "targetX": 612,
        "targetY": 502,
        "label": "15"
      },
      {
        "id": 15,
        "x": 159,
        "y": 409,
        "targetX": 475,
        "targetY": 525,
        "label": "16"
      },
      {
        "id": 16,
        "x": 669,
        "y": 793,
        "targetX": 537,
        "targetY": 535,
        "label": "17"
      },
      {
        "id": 17,
        "x": 660,
        "y": 224,
        "targetX": 382,
        "targetY": 486,
        "label": "18"
      },
      {
        "id": 18,
        "x": 778,
        "y": 340,
        "targetX": 687,
        "targetY": 376,
        "label": "19"
      },
      {
        "id": 19,
        "x": 805,
        "y": 500,
        "targetX": 709,
        "targetY": 301,
        "label": "20"
      },
      {
        "id": 20,
        "x": 591,
        "y": 162,
        "targetX": 341,
        "targetY": 448,
        "label": "21"
      },
      {
        "id": 21,
        "x": 737,
        "y": 263,
        "targetX": 291,
        "targetY": 287,
        "label": "22"
      },
      {
        "id": 22,
        "x": 406,
        "y": 851,
        "targetX": 774,
        "targetY": 568,
        "label": "23"
      },
      {
        "id": 23,
        "x": 407,
        "y": 154,
        "targetX": 315,
        "targetY": 369,
        "label": "24"
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        6,
        7
      ],
      [
        0,
        7
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        5
      ],
      [
        0,
        6
      ],
      [
        0,
        8
      ],
      [
        3,
        8
      ],
      [
        4,
        8
      ],
      [
        0,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        0,
        10
      ],
      [
        2,
        10
      ],
      [
        3,
        10
      ],
      [
        6,
        11
      ],
      [
        3,
        12
      ],
      [
        4,
        12
      ],
      [
        8,
        12
      ],
      [
        4,
        13
      ],
      [
        5,
        13
      ],
      [
        9,
        13
      ],
      [
        0,
        14
      ],
      [
        3,
        14
      ],
      [
        8,
        14
      ],
      [
        0,
        15
      ],
      [
        4,
        15
      ],
      [
        9,
        15
      ],
      [
        4,
        16
      ],
      [
        0,
        16
      ],
      [
        8,
        16
      ],
      [
        5,
        17
      ],
      [
        0,
        17
      ],
      [
        9,
        17
      ],
      [
        0,
        18
      ],
      [
        2,
        18
      ],
      [
        10,
        18
      ],
      [
        0,
        19
      ],
      [
        1,
        19
      ],
      [
        2,
        19
      ],
      [
        0,
        20
      ],
      [
        5,
        20
      ],
      [
        11,
        20
      ],
      [
        0,
        21
      ],
      [
        6,
        21
      ],
      [
        7,
        21
      ],
      [
        2,
        22
      ],
      [
        3,
        22
      ],
      [
        10,
        22
      ],
      [
        6,
        23
      ],
      [
        0,
        23
      ],
      [
        11,
        23
      ]
    ]
  }
];

  return {
    PACKS,
    LEVELS
  };
});
