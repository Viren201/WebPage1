// Import Three.js library
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-model').appendChild(renderer.domElement);

// Add a 3D model (Sphere for Earth, Cube for spaceship)
const earthGeometry = new THREE.SphereGeometry(5, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x1f8ef1 });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

const spaceshipGeometry = new THREE.BoxGeometry(1, 1, 2);
const spaceshipMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const spaceship = new THREE.Mesh(spaceshipGeometry, spaceshipMaterial);
scene.add(spaceship);

// Positioning
earth.position.set(0, 0, 0);
spaceship.position.set(10, 0, 0);

camera.position.z = 20;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    spaceship.position.x -= 0.05; // Move spaceship around Earth
    if (spaceship.position.x < -10) spaceship.position.x = 10;
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});