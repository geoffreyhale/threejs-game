const CAMERA = {
    DEFAULT: {
        POSITION: {
            X: 0,
            Y: 0,
            Z: 40,
            SPEED: 1
        },
        ROTATION: {
            X: 0,
            Y: 0,
            Z: 0,
            SPEED: 0.1
        },
    }
};

const move = (camera, keysDown) => {
    keysDown.forEach((key) => {
        //Forward
        if (key === KEYS.W) {
            camera.position.y += CAMERA.DEFAULT.POSITION.SPEED * Math.cos(camera.rotation.z);
            camera.position.x += CAMERA.DEFAULT.POSITION.SPEED * Math.sin(camera.rotation.z + Math.PI);
        }
        //Backward
        if (key === KEYS.S) {
            camera.position.y += CAMERA.DEFAULT.POSITION.SPEED * Math.cos(camera.rotation.z + Math.PI);
            camera.position.x += CAMERA.DEFAULT.POSITION.SPEED * Math.sin(camera.rotation.z);
        }
        //Strafe Left
        if (key === KEYS.A) {
            camera.position.y += CAMERA.DEFAULT.POSITION.SPEED * Math.sin(camera.rotation.z + Math.PI);
            camera.position.x += CAMERA.DEFAULT.POSITION.SPEED * Math.cos(camera.rotation.z + Math.PI);
        }
        //Strafe Right
        if (key === KEYS.D) {
            camera.position.y += CAMERA.DEFAULT.POSITION.SPEED * Math.sin(camera.rotation.z);
            camera.position.x += CAMERA.DEFAULT.POSITION.SPEED * Math.cos(camera.rotation.z);
        }
        //Reset
        if (key === KEYS.R) {
            camera.position.x = CAMERA.DEFAULT.POSITION.X;
            camera.position.y = CAMERA.DEFAULT.POSITION.Y;
            camera.position.z = CAMERA.DEFAULT.POSITION.Z;
            camera.rotation.x = CAMERA.DEFAULT.ROTATION.X;
            camera.rotation.y = CAMERA.DEFAULT.ROTATION.Y;
            camera.rotation.z = CAMERA.DEFAULT.ROTATION.Z;
        }
        if (key === KEYS.UP) {
            camera.position.z -= CAMERA.DEFAULT.POSITION.SPEED;
        }
        if (key === KEYS.DOWN) {
            camera.position.z += CAMERA.DEFAULT.POSITION.SPEED;
        }
        if (key === KEYS.LEFT) {
            camera.rotation.z += CAMERA.DEFAULT.ROTATION.SPEED;
        }
        if (key === KEYS.RIGHT) {
            camera.rotation.z -= CAMERA.DEFAULT.ROTATION.SPEED;
        }
    });
};