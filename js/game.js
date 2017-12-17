Overlay.init();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = CAMERA.DEFAULT.POSITION.X;
camera.position.y = CAMERA.DEFAULT.POSITION.Y;
camera.position.z = CAMERA.DEFAULT.POSITION.Z;

// Render/Animate Loop
function animate() {
    move(camera, userInput);
    Overlay.update(camera);
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();