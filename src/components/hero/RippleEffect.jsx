import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

/**
 * FireworksEffect组件 - 烟花火星效果
 * 位置：src/components/hero/RippleEffect.jsx
 *
 * 功能：
 * - 点击时产生烟花火星飞散效果
 * - 火星沿随机方向向外飞散，带有重力和衰减
 * - 每次点击产生 15-30 个火星
 * - 持续时间 0.8-1.2 秒
 */
function FireworksEffect({ onClick }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  // 添加新粒子
  const addParticles = useCallback((x, y) => {
    const particleCount = 15 + Math.floor(Math.random() * 16); // 15-30 个

    for (let i = 0; i < particleCount; i++) {
      // 沿随机方向向外飞散
      const angle = Math.random() * Math.PI * 2;

      const speed = 3 + Math.random() * 4; // 初始速度
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      particlesRef.current.push({
        x,
        y,
        vx,
        vy,
        life: 1.0, // 生命周期，从 1.0 衰减到 0.0
        maxLife: 0.8 + Math.random() * 0.4, // 持续时间 0.8-1.2 秒
        size: 2 + Math.random() * 2, // 初始大小
        decayRate: 0.95 + Math.random() * 0.03 // 减速系数 0.95-0.98
      });
    }
  }, []);

  // 动画循环
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 更新和绘制粒子
    particlesRef.current = particlesRef.current.filter(particle => {
      // 物理更新
      particle.vx *= particle.decayRate; // 减速
      particle.vy *= particle.decayRate;
      particle.vy -= 0.015; // 重力（向下）
      particle.x += particle.vx;
      particle.y += particle.vy;

      // 生命周期衰减
      const dt = 0.016; // 每帧约 16ms
      particle.life -= dt / particle.maxLife;

      // 计算当前大小和透明度
      const currentSize = particle.size * (0.2 + 0.8 * particle.life);
      const alpha = particle.life;

      if (particle.life <= 0) return false; // 移除死亡粒子

      // 绘制粒子 - 白色带发光
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, currentSize * 2
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      gradient.addColorStop(0.5, `rgba(255, 255, 255, ${alpha * 0.5})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, currentSize * 2, 0, Math.PI * 2);
      ctx.fill();

      // 中心白点
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, currentSize * 0.5, 0, Math.PI * 2);
      ctx.fill();

      return true;
    });

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  // 初始化
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 设置画布大小
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // 点击事件监听
  useEffect(() => {
    const handleClick = (e) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      addParticles(x, y);

      if (onClick) {
        onClick(e);
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [addParticles, onClick]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10
      }}
    />
  );
}

FireworksEffect.propTypes = {
  onClick: PropTypes.func
};

FireworksEffect.defaultProps = {
  onClick: null
};

export default FireworksEffect;
