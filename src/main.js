import * as THREE from 'three';
import init from './scripts/init';
import './scripts/header';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import './globals.scss';

const { sizes, camera, scene, renderer } = init();

// resize
/** Базовые обпаботчики событий длы поддержки ресайза */
function handleResize() {
	const windowWidth = document.documentElement.clientWidth;
	const windowHeight = document.documentElement.clientHeight;

	// Обновляем размеры
	sizes.width = windowWidth;
	sizes.height = windowHeight;

	// Обновляем соотношение сторон камеры
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	// Обновляем renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.render(scene, camera);

	// обновляем модель
	const modelScaler = findModelScaler(windowWidth);
	model.scale.set(modelScaler, modelScaler, modelScaler);
}

const scaleBoundaries = {
	max: 0.2,
	min: 0.12,
};

function findModelScaler(currentWidth) {
	let scaler = (modelInitScaler * currentWidth / initScreenSizes.width) + 0.05;
	scaler = Math.min(scaler, scaleBoundaries.max);
	scaler = Math.max(scaler, scaleBoundaries.min);
	
	return scaler;
}

window.addEventListener('resize', handleResize, { passive: true });


// model load
let model;
const loader = new GLTFLoader();

// value to scale model on desktop
const modelInitScaler = 0.2;
const initScreenSizes = {
	width: 1440,
	height: 900,
} 

const pathToModel = 'clubock_model.glb';

loader.load(
	pathToModel,
	(gltf) => {
		model = gltf.scene;
		model.scale.set(modelInitScaler, modelInitScaler, modelInitScaler);
		scene.add(model);

		// spotlight props
		const spotLight = new THREE.SpotLight( 0xffffff );
		spotLight.position.set( 0, 0, 15 );
		spotLight.intensity = 300;

		spotLight.target = model;
		spotLight.map = model;

		spotLight.castShadow = true;
		model.receiveShadow = true;

		spotLight.shadow.mapSize.width = 1024;
		spotLight.shadow.mapSize.height = 1024;

		spotLight.shadow.camera.near = 20;
		spotLight.shadow.camera.far = 1000;
		spotLight.shadow.camera.fov = 60;

		scene.add( spotLight );

		handleResize();
		renderer.render(scene, camera);
	},
	undefined,
	(error) => {
		console.error(error);
	}
);


// mouse move event
let targetVector = new THREE.Vector3(0, 0, 600);

let mouseXNormalized = 0, mouseYNormalized = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

window.addEventListener('mousemove', (e) => {
	// check if desktop
	const windowWidth = document.documentElement.clientWidth;
	const isDesktop = windowWidth >= 900;
	if (!isDesktop) return;

	mouseXNormalized = ( e.clientX - windowHalfX );
    mouseYNormalized = ( e.clientY - windowHalfY );

	requestAnimationFrame(animate);
});


// animation
let destX = 0, destY = 0;

function animate() {
    if (!model) return;

	destX = mouseXNormalized - targetVector.x;
	destY = -mouseYNormalized - targetVector.y;
	
	targetVector.x += destX;
    targetVector.y += destY;

    model.lookAt( targetVector );

    renderer.render( scene, camera );
}