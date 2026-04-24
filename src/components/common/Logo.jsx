import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { logo } from '../../data/config.js';

function Logo({ isVisible, onClick, isDarkBackground }) {
  const [scale, setScale] = useState(1);

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        color: isDarkBackground ? '#ffffff' : '#000000'
      }}
      transition={{
        opacity: { duration: 0.3 },
        color: { duration: 0.5 }
      }}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        boxShadow: isDarkBackground
          ? '0 6px 24px rgba(255, 255, 255, 0.15)'
          : '0 6px 24px rgba(0, 0, 0, 0.15)'
      }}
      style={{
        position: 'fixed',
        top: `${24 * scale}px`,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        cursor: 'pointer',
        background: isDarkBackground ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
        padding: '10px 28px',
        borderRadius: '12px',
        backdropFilter: 'blur(10px)',
        boxShadow: isDarkBackground
          ? '0 4px 16px rgba(255, 255, 255, 0.1)'
          : '0 4px 16px rgba(0, 0, 0, 0.1)',
        border: isDarkBackground
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : '1px solid rgba(0, 0, 0, 0.1)',
        fontSize: `${24 * scale}px`,
        fontWeight: 600,
        letterSpacing: '0.05em',
        userSelect: 'none',
        transition: 'all 0.3s ease'
      }}
    >
      {logo.name}
    </motion.div>
  );
}

Logo.propTypes = {
  isVisible: PropTypes.bool,
  onClick: PropTypes.func,
  isDarkBackground: PropTypes.bool
};

Logo.defaultProps = {
  isVisible: true,
  isDarkBackground: true,
  onClick: () => {}
};

export default Logo;
