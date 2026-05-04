import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ParticleBall from './ParticleBall.jsx';
import RippleEffect from './RippleEffect.jsx';
import Slogan from '../common/Slogan.jsx';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function HeroSection({ isVisible, isDarkBackground }) {
  const modelRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    renderer.domElement.style.pointerEvents = 'auto';
    renderer.domElement.style.cursor = 'grab';

    // 添加轨道控制（鼠标拖拽）
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = false;
    controls.rotateSpeed = 0.8;

    controls.addEventListener('start', () => {
      renderer.domElement.style.cursor = 'grabbing';
    });
    controls.addEventListener('end', () => {
      renderer.domElement.style.cursor = 'grab';
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(4, 4, 4);
    scene.add(pointLight);

    // 宇宙繁星背景
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 2000;
    const starsPosArray = new Float32Array(starsCount * 3);
    const starsSizesArray = new Float32Array(starsCount);

    for(let i = 0; i < starsCount; i++) {
      const i3 = i * 3;
      starsPosArray[i3] = (Math.random() - 0.5) * 50;
      starsPosArray[i3 + 1] = (Math.random() - 0.5) * 50;
      starsPosArray[i3 + 2] = (Math.random() - 0.5) * 50;
      starsSizesArray[i] = Math.random() * 2 + 0.5;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPosArray, 3));
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(starsSizesArray, 1));

    const starsMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const loader = new GLTFLoader();
    loader.load(`${import.meta.env.BASE_URL}models/model.glb`, (gltf) => {
      const model = gltf.scene;
      model.scale.set(2, 2, 2);
      model.position.set(0, 0, 0);

      // 让模型发光
      model.traverse((child) => {
        if (child.isMesh) {
          child.material = child.material.clone();
          child.material.color.setHex(0xffffff);
          child.material.emissive = new THREE.Color(0xeef2ff);
          child.material.emissiveIntensity = 0.6;
          child.material.transparent = true;
          child.material.opacity = 0.85;
          child.material.metalness = 0.3;
          child.material.roughness = 0.7;
        }
      });

      scene.add(model);
      modelRef.current = model;

      // 渐入效果
      let opacity = 0;
      const fadeIn = () => {
        opacity += 0.02;
        if (opacity <= 1) {
          model.traverse((child) => {
            if (child.isMesh) {
              child.material.opacity = 0.85 * opacity;
            }
          });
          requestAnimationFrame(fadeIn);
        }
      };
      fadeIn();
    },
    (progress) => {
      console.log('加载进度:', (progress.loaded / progress.total * 100) + '%');
    },
    (error) => {
      console.error('模型加载失败:', error);
    });

    let starTime = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      starTime += 0.01;

      starsMaterial.opacity = 0.6 + Math.sin(starTime) * 0.2;
      stars.rotation.y = starTime * 0.0001;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (controls && controls.dispose) {
        controls.dispose();
      }
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isVisible]);

  return (
    <div
      className="hero-section"
      style={{
        minHeight: '100vh',
        background: '#000000',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      {/* Slogan打字机效果 */}
      <Slogan isVisible={isVisible} />

      {/* 水波纹 */}
      <RippleEffect isVisible={isVisible} />

      {/* GLB模型背景层 */}
      <div
        ref={containerRef}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 50,
          pointerEvents: 'auto',
          background: 'transparent'
        }}
      />
    </div>
  );
}

HeroSection.propTypes = {
  isVisible: PropTypes.bool,
  isDarkBackground: PropTypes.bool
};

HeroSection.defaultProps = {
  isVisible: true,
  isDarkBackground: true
};

export default HeroSection;
