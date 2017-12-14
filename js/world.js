/**
 * Pallette
 */
const COLOR = {
    BLUE: 0x0000ff,
    DARKGREEN: 0x008800,
    MAGENTA: 0xff0ff,
    GREEN: 0x00ff00,
    ECRU: 0xc2b280, //Sand
    WHITE: 0xffffff,
};

const MATERIAL = {
    DEFAULT: new THREE.MeshBasicMaterial({color: COLOR.WHITE}),
    ERROR: new THREE.MeshBasicMaterial({color: COLOR.MAGENTA}),
    TREE: new THREE.MeshBasicMaterial({color: COLOR.DARKGREEN}),
    GRASS: new THREE.MeshBasicMaterial({color: COLOR.GREEN}),
    SAND: new THREE.MeshBasicMaterial({color: COLOR.ECRU}),
    WATER: new THREE.MeshBasicMaterial({color: COLOR.BLUE}),
};

const GEOMETRY = {
    BOX: new THREE.BoxBufferGeometry(1, 1, 1),
};

/**
 * Build
 */
const WORLD = {
    SIZE: {
        x: 10,
        y: 10,

    },
    baseHeight: 65,
    waterLevel: 63,
};

const getMaterial = (worldCubeObject) => {
    if (worldCubeObject.elevation <= WORLD.waterLevel) {
        return MATERIAL.WATER;
    }
    else if (worldCubeObject.elevation > WORLD.waterLevel && worldCubeObject.elevation <= WORLD.waterLevel + 1) {
        return MATERIAL.SAND;
    }
    else if (worldCubeObject.elevation > WORLD.waterLevel + 1) {
        return MATERIAL.GRASS;
    }
    else {
        return MATERIAL.ERROR;
    }
};

/**
 * Get Random Int Inclusive
 * The minimum and maximum are inclusive
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const world = [];
for (let x = 0; x < WORLD.SIZE.x; x++) {
    world[x] = [];
    for (let y = 0; y < WORLD.SIZE.y; y++) {
        world[x][y] = {
            elevation: getRandomIntInclusive(WORLD.baseHeight - 5, WORLD.baseHeight + 5)
        };
    }
}
console.log(world);

const CUBES = [];

for (let x = 0; x < WORLD.SIZE.x; x++) {
    CUBES[x] = [];
    for (let y = 0; y < WORLD.SIZE.y; y++) {
        CUBES[x][y] = new THREE.Mesh(GEOMETRY.BOX, getMaterial(world[x][y]));
        CUBES[x][y].position.x = x;
        CUBES[x][y].position.y = y;
    }
}
console.log(CUBES);

/**
 * Show
 */

const scene = new THREE.Scene();
CUBES.forEach((cubeRow) => {
    cubeRow.forEach((cube) => {
        scene.add(cube);
    });
});