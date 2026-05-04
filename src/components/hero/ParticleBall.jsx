import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function ParticleBall({ isVisible, onRipple }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef(null);
  const animationRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [scale, setScale] = useState(1);

  const rotationRef = useRef({ x: 0, y: 0 });
  const dragStartRef = useRef({ x: 0, y: 0 });
  const rotationVelocityRef = useRef({ x: 0.004, y: 0.005 });
  const autoRotateSpeed = 2.0;
  const dampingFactor = 0.05;

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      const baseHeight = 1080;
      setScale(Math.max(0.6, Math.min(1.2, height / baseHeight)));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const particleCount = 900;
    const positions = [];
    const colors = [];
    const radii = [];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1320 + Math.random() * 330;

      positions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );

      const brightness = 0.8 + Math.random() * 0.2;
      colors.push(brightness, brightness, brightness);

      radii.push((2 + Math.random() * 2) * 0.9);
    }

    particlesRef.current = {
      positions,
      colors,
      radii,
      count: particleCount
    };

    let breatheTime = 0;
    let targetScale = 1;
    let currentScale = 1;

    const animate = () => {
      if (!isVisible) return;

      breatheTime += 0.016;

      const breathe = 1 + Math.sin(breatheTime) * 0.55;

      if (isHovered) {
        targetScale = 1.1;
      } else {
        targetScale = 1;
      }

      if (isPressed) {
        targetScale = 0.95;
      }

      currentScale += (targetScale * breathe - currentScale) * 0.1;

      if (!isDragging) {
        rotationVelocityRef.current.x *= 1 - dampingFactor * 0.5;
        rotationVelocityRef.current.y *= 1 - dampingFactor * 0.5;

        if (
          Math.abs(rotationVelocityRef.current.x) < 0.001 &&
          Math.abs(rotationVelocityRef.current.y) < 0.001
        ) {
          rotationVelocityRef.current.x = 0.004 * autoRotateSpeed;
          rotationVelocityRef.current.y = 0.005 * autoRotateSpeed;
        }
      } else {
        rotationVelocityRef.current.x *= 1 - dampingFactor;
        rotationVelocityRef.current.y *= 1 - dampingFactor;
      }

      rotationRef.current.x += rotationVelocityRef.current.x;
      rotationRef.current.y += rotationVelocityRef.current.y;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const perspective = 400;

      const rotationX = rotationRef.current.x;
      const rotationY = rotationRef.current.y;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      positions.forEach((x, i) => {
        const y = positions[i + 1];
        const z = positions[i + 2];

        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;

        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        const scaledZ = z2 * currentScale;

        const scale2 = perspective / (perspective + scaledZ + 400);
        const screenX = centerX + x1 * currentScale * scale2;
        const screenY = centerY + y2 * currentScale * scale2;

        const size = radii[i / 3] * scale2;

        const brightness = colors[i];
        ctx.fillStyle = `rgba(${brightness * 255}, ${brightness * 255}, ${brightness * 255}, ${Math.min(1, scale2 * 2)})`;
        ctx.beginPath();
        ctx.arc(screenX, screenY, Math.max(0.5, size), 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, isHovered, isPressed, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPressed(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;

    rotationVelocityRef.current.y = deltaX * 0.01;
    rotationVelocityRef.current.x = deltaY * 0.01;

    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPressed(false);
  };

  const handleClick = (e) => {
    if (!canvasRef.current || isDragging) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (onRipple) {
      onRipple({ x, y });
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={420 * scale}
      height={420 * scale}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        position: 'absolute',
        top: 'calc(50% + 100px)',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        cursor: isDragging ? 'grabbing' : 'grab',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        zIndex: 5,
        pointerEvents: 'auto',
        userSelect: 'none'
      }}
    />
  );
}

ParticleBall.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onRipple: PropTypes.func
};

ParticleBall.defaultProps = {
  onRipple: null
};

export default ParticleBall;
