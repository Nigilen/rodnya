import * as THREE from 'three';

import init from './init';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const { sizes, camera, scene, canvas, renderer } = init();

camera.position.z = 5;

// const floor = new THREE.Mesh(
//   new THREE.PlaneGeometry(10, 10),
//   new THREE.MeshStandardMaterial({
//   color: "#444444",
//   metalness: 0,
//   roughness: .5
// }) );

// floor.receiveShadow = true;

// floor.rotation.x = -Math.PI * 0.5;
// scene.add(floor);


// Свет
// const memiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.3);
// memiLight.position.set(0, 20000, 0);
// memiLight.receiveShadow = false;
// scene.add(memiLight);

const color = 0xFFFFFF;
const intensity = 500;
const light = new THREE.PointLight(color, intensity);
light.position.set(10, 10, -10);
scene.add(light);
scene.add(light.target);


const newlight = new THREE.PointLight(0xFFFFFF, 500);
newlight.position.set(-10, -10, 10);
scene.add(newlight);



const loader = new GLTFLoader();

let model;

let startYRotation = -0.5;
let startXRotation = -0.5;

// klub.glb
loader.load('Clubok.gltf', function (gltf) {
// loader.load('Avocado.gltf', function (gltf) {
	model = gltf.scene;
	model.scale.set(.15, .15, .15);
	// gltf.scene.rotation.y = startYRotation;
	// gltf.scene.rotation.x = startXRotation;
	// model.position.y = -1.5;
	

	// const material = new THREE.MeshPhongMaterial({color: 0x44aa88});

	// const modelCompleete = new THREE.Mesh(model, material);

	scene.add(model);

}, undefined, function (error) {

	console.error(error);

});


let XMousePos = 0;
let YMousePos = 0;
let isMoved = false;

const clock = new THREE.Clock();
const tick = () => {
	// controls.update();

	const delta = clock.getDelta();
	// console.log(delta);
	if(model && isMoved){


		if(XMousePos > 50 &&
			model.rotation.y <= XMousePos / 100 + startYRotation
		) {
			model.rotation.y += delta;
		}
		if(XMousePos < 50 &&
			model.rotation.y >= XMousePos / 100 + startYRotation
		) {
			model.rotation.y -= delta;
		}


		if(YMousePos > 50 &&
			model.rotation.x <= YMousePos / 100 + startXRotation
		) {
			model.rotation.x += delta;
		}
		if(YMousePos < 50 &&
			model.rotation.x >= YMousePos / 100 + startXRotation
		) {
			model.rotation.x -= delta;
		}

		// model.rotation.x = (YMousePos / 100 + startXRotation) * delta;
	}
	// 
	// console.log(model);
	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);

};
tick();




canvas.addEventListener('mousemove', (e) => {
	isMoved = true;
	// console.log();
	let width = canvas.getBoundingClientRect().width;
	let height = canvas.getBoundingClientRect().height;
	let x = e.clientX;
	let y = e.clientY;

	XMousePos = x / (width / 100);
	YMousePos = y / (height / 100);
});


/** Базовые обпаботчики событий длы поддержки ресайза */
// window.addEventListener('resize', () => {
// 	// Обновляем размеры
// 	sizes.width = window.innerWidth;
// 	sizes.height = window.innerHeight;

// 	// Обновляем соотношение сторон камеры
// 	camera.aspect = sizes.width / sizes.height;
// 	camera.updateProjectionMatrix();

// 	// Обновляем renderer
// 	renderer.setSize(sizes.width, sizes.height);
// 	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// 	renderer.render(scene, camera);
// });

// window.addEventListener('dblclick', () => {
// 	if (!document.fullscreenElement) {
// 		canvas.requestFullscreen();
// 	} else {
// 		document.exitFullscreen();
// 	}
// });
