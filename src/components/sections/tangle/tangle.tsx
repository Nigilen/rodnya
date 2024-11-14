'use client'

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FC, useLayoutEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import styles from './tangle.module.css';
import Image from 'next/image';
import cn from 'classnames';
import Loading from '../loading/loading';


export const Tangle: FC = () => {

  // прелоадер
  const [preload, setPreload] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => setPreload(false), 4000);
  }, []);

  const router = useRouter();

  // клубок

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // снова часть прелоадера

  const handleMove = () => { 
    canvasRef.current?.classList.add(styles.animation);
    setTimeout(() => {
      router.push('/cases');
    }, 900);
  }

  // продолженение клубка



  // при первом рендере
  useLayoutEffect(()=>{
    // вычисляем размер окна
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // стартовые размеры модели
    const modelInitScalers = {
      width: 0.07,
      height: 0.075,
    };
      

    // создаем холст
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current as HTMLCanvasElement,
      antialias: true,
      alpha: true,
    });


    // создаем камеру
    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      1,
      1000
    );
    camera.position.z = 5.2;
    
    // создаем сцену
    const scene = new THREE.Scene();

    // загружаем модель
    const gltfLoader = new GLTFLoader();

    let model: THREE.Group<THREE.Object3DEventMap>;
    let spotLight: THREE.SpotLight;
    

    // стартовы размеры экрана
    const initScreenSizes = {
      width: 1440,
      height: 900,
    } 
    const imgToHideOnLoad = imageRef.current as HTMLImageElement;
    const scaleBoundaries = {
      max: 0.15,
      min: 0.1,
    };
    const desktopBreakpoint = 1280;


    gltfLoader.load(
      "/clubok.gltf",
      (gltf) => {
        model = gltf.scene;
    
        const isDesktop = document.documentElement.clientWidth >= desktopBreakpoint;
        if (!isDesktop) return;
    
        imgToHideOnLoad.classList.add("hidden");
        scene.add(model);
    
        spotLight = new THREE.SpotLight( 0xffffff );
        spotLight.position.set( 0, 0, 10 );
        spotLight.intensity = 380;
        spotLight.penumbra = 0.0;
        spotLight.angle = Math.PI / 2;
    
        spotLight.target = model;
    
        spotLight.castShadow = true;
        model.receiveShadow = true;
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;
        spotLight.shadow.camera.near = 20;
        spotLight.shadow.camera.far = 1000;
        spotLight.shadow.camera.fov = 60;
    
        scene.add( spotLight );

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
        scene.add(ambientLight);
    
        handleResize();
        renderer.render(scene, camera);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
      },
      (error) => {
        console.error(error);
      }
    )
    
    const targetVector = new THREE.Vector3(0, 0, 600);
    let spotlightPosition;
    let mouseXNormalized = 0, mouseYNormalized = 0;
    const windowHalfX = sizes.width / 2;
    const windowHalfY = sizes.height / 2;

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
    
    function findModelScaler(currentWidth: number, currentHeight: number) {
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

    function moveTangle(e: MouseEvent) {
      const windowWidth = document.documentElement.clientWidth;
      const isDesktop = windowWidth >= 1200;
      if (!isDesktop) return;
    
      mouseXNormalized = ( e.clientX - windowHalfX );
      mouseYNormalized = ( e.clientY - windowHalfY );
    
      requestAnimationFrame(animate);
    }

    
    window.addEventListener('mousemove', moveTangle);
    window.addEventListener('resize', handleResize);
    
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('mousemove', moveTangle);
    }

  },[]);


  return (
    <div className={cn(styles.main, "link-cursor")} >
      <canvas id='canvas' ref={canvasRef} className={cn('link-cursor', styles.canvas)} />
      <div className={styles.main_bg} onClick={handleMove}>
        <Image priority ref={imageRef} src="/clubok_img.webp" className={cn(styles.main__img, 'link-cursor')} width={1440} height={900} alt={''} />
      </div>
      {preload && <Loading />}
    </div>
  );
};