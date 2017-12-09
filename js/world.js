const COLOR = {
    BLUE: 0x0000ff,
    GREEN: 0x00ff00,
    WHITE: 0xffffff,
};

const MATERIAL = {
    DEFAULT: new THREE.MeshBasicMaterial({color: COLOR.WHITE}),
    GRASS: new THREE.MeshBasicMaterial({color: COLOR.GREEN}),
    WATER: new THREE.MeshBasicMaterial({color: COLOR.BLUE}),
};

const GEOMETRY = {
    BOX: new THREE.BoxGeometry(1, 1, 1),
};

const CUBES = [];

const WORLD = {
    SIZE: {
        x: 100,
        y: 100
    }
};

const getMaterial = (x, y) => {
    //river
    if (x - y >= 2 && x - y <= 4) {
        return MATERIAL.WATER;
    }

    if (x - y >= 2 && x - 2*y > 2) {
        return MATERIAL.WATER;
    }

    return MATERIAL.GRASS;
};

for (let x = 0; x < WORLD.SIZE.x; x++) {
    CUBES[x] = [];
    for (let y = 0; y < WORLD.SIZE.y; y++) {
        CUBES[x][y] = new THREE.Mesh(GEOMETRY.BOX, getMaterial(x, y));
        CUBES[x][y].position.x = x;
        CUBES[x][y].position.y = y;
    }
}

const scene = new THREE.Scene();
CUBES.forEach((cubeRow) => {
    cubeRow.forEach((cube) => {
        scene.add(cube);
    });
});