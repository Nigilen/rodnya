import * as THREE from 'three';
import init from './scripts/init';
import './scripts/header';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import './globals.scss';

const { sizes, camera, scene, renderer } = init();

const scaleBoundaries = {
	max: 0.15,
	min: 0.1,
};

const desktopBreakpoint = 1280;

// model load
let model;
const imgToHideOnLoad = document.querySelector(".main__img");
const loader = new GLTFLoader();
let spotLight;

// value to scale model on desktop
const modelInitScalers = {
	width: 0.075,
	height: 0.038,
};
const initScreenSizes = {
	width: 1440,
	height: 900,
} 

const pathToModel = 'a3.gltf';

loader.load(
	pathToModel,
	(gltf) => {
		model = gltf.scene;

		// hide picture, add 3d model
		// only on desktop (>= 900px screenWidth)
		const isDesktop = document.documentElement.clientWidth >= desktopBreakpoint;
		if (!isDesktop) return;

		imgToHideOnLoad.classList.add("hidden");
		scene.add(model);

		// spotlight props
		spotLight = new THREE.SpotLight( 0xffffff );
		spotLight.position.set( 0, 0, 10 );
		spotLight.intensity = 380;
		spotLight.penumbra = 0.0;
		spotLight.angle = Math.PI / 2;

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

		// to make shadows less dark
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
		scene.add(ambientLight);

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
let spotlightPosition;
let mouseXNormalized = 0, mouseYNormalized = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

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

	// обновляем модель
	const modelScaler = findModelScaler(windowWidth, windowHeight);
	model.scale.set(modelScaler, modelScaler, modelScaler);

	// Обновляем renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.render(scene, camera);
}

function findModelScaler(currentWidth, currentHeight) {
	let scaler = (modelInitScalers.width * currentWidth / initScreenSizes.width) + (modelInitScalers.height * currentHeight / initScreenSizes.height);
	scaler = Math.min(scaler, scaleBoundaries.max);
	scaler = Math.max(scaler, scaleBoundaries.min);
	
	return scaler;
}

// animation
let destX = 0, destY = 0;

function animate() {
    if (!model) return;

	destX = mouseXNormalized - targetVector.x;
	destY = -mouseYNormalized - targetVector.y;
	
	targetVector.x += destX;
    targetVector.y += destY;

    model.lookAt( targetVector );

	spotlightPosition = new THREE.Vector3(mouseXNormalized / 2, -mouseYNormalized / 1.5, -80);
    spotlightPosition.sub(model.position).normalize().multiplyScalar(-10);
	spotLight.position.x *= -1;

    spotLight.position.copy(spotlightPosition);
    spotLight.target.position.copy(model.position);
    spotLight.updateMatrixWorld(true);

    renderer.render( scene, camera );
}

window.addEventListener('mousemove', (e) => {
	// check if desktop
	const windowWidth = document.documentElement.clientWidth;
	const isDesktop = windowWidth >= desktopBreakpoint;
	if (!isDesktop) return;

	mouseXNormalized = ( e.clientX - windowHalfX );
    mouseYNormalized = ( e.clientY - windowHalfY );

	requestAnimationFrame(animate);
}, { passive: true });

window.addEventListener('resize', handleResize, { passive: true });
