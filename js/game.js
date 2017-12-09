const game = (camera, keysDown) => {
    keysDown.forEach((key) => {
        if (key === KEYS.W) {
            camera.position.y++;
        }
        if (key === KEYS.S) {
            camera.position.y--;
        }
        if (key === KEYS.A) {
            camera.position.x--;
        }
        if (key === KEYS.D) {
            camera.position.x++;
        }
        if (key === KEYS.R) {
            camera.position.x = 0;
            camera.position.y = 0;
            camera.position.z = 5;
            camera.rotation.y = 0;
        }
        if (key === KEYS.UP) {
            camera.position.z--;
        }
        if (key === KEYS.DOWN) {
            camera.position.z++;
        }
        if (key === KEYS.LEFT) {
            camera.rotation.y += 0.1;
        }
        if (key === KEYS.RIGHT) {
            camera.rotation.y -= 0.1;
        }
    });
};