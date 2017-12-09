Overlay.init();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = CAMERA.DEFAULT.POSITION.Z;

// Render/Animate Loop
function animate() {
    move(camera, keysDown);
    Overlay.update(camera);
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();