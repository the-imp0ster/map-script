const fs = require('fs');
const { createNoise2D } = require('simplex-noise');
const noise2D = createNoise2D();

const WIDTH = 50;
const HEIGHT = 50;

let mapGrid = Array.from({ length: HEIGHT }, () => Array(WIDTH).fill(null));

const terrains = {
  water: { threshold: -0.2, value: 'water' },
  coast: { threshold: 0.0, value: 'coast' },
  desert: { threshold: 0.2, value: 'desert' },
  plains: { threshold: 0.3, value: 'grassland' },
  forest: { threshold: 0.6, value: 'forest' },
  mountains: { threshold: 0.8, value: 'mountain' },
  arctic: { threshold: 1.0, value: 'arctic' },
};

// generate noise-based terrain
for (let y = 0; y < HEIGHT; y++) {
  for (let x = 0; x < WIDTH; x++) {
    const noiseValue = noise2D(x / 20, y / 20);
    // default to water
    let terrainType = 'water';

    for (let terrain in terrains) {
      if (noiseValue > terrains[terrain].threshold) {
        terrainType = terrains[terrain].value;
      }
    }

    mapGrid[y][x] = terrainType;
  }
}

// write map to a JSON file
fs.writeFileSync('mapGrid.json', JSON.stringify(mapGrid, null, 2));
console.log('Map grid generated!');