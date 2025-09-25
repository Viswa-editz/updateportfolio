const slides = document.querySelector('.slides');
const slideSections = document.querySelectorAll('.slide');
let currentIndex = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentIndex < slideSections.length - 1) currentIndex++;
  updateSlide();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentIndex > 0) currentIndex--;
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// ====== 3D Background using Three.js ======
const canvas = document.getElementById("bg3d");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas, alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);

// 3D rotating cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00d4ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Lights
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
