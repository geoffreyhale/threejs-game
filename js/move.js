const move = (camera, keysDown) => {
    const RESET = {
        position: {
            x: 0,
            y: 0,
            z: 10
        },
        rotation: {
            y: 0
        }
    };

    const SPEED = {
        VERTICAL: 0.1,
        STRAFE: 0.1,
        FORWARD: 0.1,
        BACKWARD: 0.1,
        ROTATION: 0.02,
    };

    keysDown.forEach((key) => {
        if (key === KEYS.W) {
            camera.position.y += SPEED.VERTICAL;
        }
        if (key === KEYS.S) {
            camera.position.y -= SPEED.VERTICAL;
        }
        if (key === KEYS.A) {
            camera.position.x -= SPEED.STRAFE;
        }
        if (key === KEYS.D) {
            camera.position.x += SPEED.STRAFE;
        }
        if (key === KEYS.R) {
            camera.position.x = RESET.position.x;
            camera.position.y = RESET.position.y;
            camera.position.z = RESET.position.z;
            camera.rotation.y = RESET.rotation.y;
        }
        if (key === KEYS.UP) {
            camera.position.z -= SPEED.FORWARD;
        }
        if (key === KEYS.DOWN) {
            camera.position.z += SPEED.BACKWARD;
        }
        if (key === KEYS.LEFT) {
            camera.rotation.z += SPEED.ROTATION;
        }
        if (key === KEYS.RIGHT) {
            camera.rotation.z -= SPEED.ROTATION;
        }
    });
};