import * as THREE from 'three';

function init() {
	const sizes = {
		width: window.innerWidth,
		height: window.innerHeight,
	};

	const scene = new THREE.Scene();
	const canvas = document.querySelector('#canvas');
	const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000);
	scene.add(camera);

	const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
	renderer.setSize(sizes.width, sizes.height);
	renderer.setClearColor(0, 0);
	renderer.render(scene, camera);

	camera.position.z = 5;

	return { sizes, scene, camera, renderer };
};

export default init;