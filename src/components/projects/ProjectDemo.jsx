import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

function ProjectDemo({ screenshots, isDarkBackground }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  // 自动轮播
  useEffect(() => {
    if (screenshots.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, screenshots.length]);

  if (!screenshots || screenshots.length === 0) {
    return (
      <div style={{
        border: `2px solid ${isDarkBackground ? 'rgba(255,255,255,0.1)' : '#e5e5e5'}`,
        borderRadius: '16px',
        padding: '48px',
        textAlign: 'center',
        color: isDarkBackground ? '#666' : '#999'
      }}>
        功能截图待上传
      </div>
    );
  }

  const slide = screenshots[current];

  return (
    <div style={{ width: '100%' }}>
      {/* 主图区域 */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: '12px',
          overflow: 'hidden',
          background: '#111',
          marginBottom: '16px',
          border: isDarkBackground ? '2px solid rgba(255,255,255,0.3)' : '2px solid #e5e5e5'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.src}
            src={`${import.meta.env.BASE_URL}${slide.src.replace(/^\//, '')}`}
            alt={slide.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </AnimatePresence>

        {/* 左右箭头 */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={prev}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ‹
            </button>
            <button
              onClick={next}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* 缩略图指示器 */}
      {screenshots.length > 1 && (
        <div style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center'
        }}>
          {screenshots.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setCurrent(i)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                background: i === current
                  ? (isDarkBackground ? '#fff' : '#000')
                  : (isDarkBackground ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'),
                transition: 'background 0.3s'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

ProjectDemo.propTypes = {
  screenshots: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
  })).isRequired,
  isDarkBackground: PropTypes.bool
};

ProjectDemo.defaultProps = {
  isDarkBackground: true
};

export default ProjectDemo;
