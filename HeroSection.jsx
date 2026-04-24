import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import Slogan from '../common/Slogan.jsx';
import ParticleBall from './ParticleBall.jsx';
import RippleEffect from './RippleEffect.jsx';
import AIHead from './AIHead.jsx';

function HeroSection({ isVisible }) {
  const containerRef = useRef(null);

  const handleRipple = (position) => {
    // 波纹由 ParticleBall 触发，RippleEffect 处理显示
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.section
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '100vw',
            height: '100vh',
            background: '#000000',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* 层级1：背景层 - AI 头部 */}
          <AIHead isVisible={true} />

          {/* 层级2：中间层 - 粒子球 */}
          <ParticleBall isVisible={true} onRipple={handleRipple} />

          {/* 层级3：最上层 - Slogan 文字 */}
          <Slogan isVisible={true} />

          {/* 层级4：交互层 - 烟花效果 */}
          <RippleEffect onClick={() => {}} />
        </motion.section>
      )}
    </AnimatePresence>
  );
}

HeroSection.propTypes = {
  isVisible: PropTypes.bool.isRequired
};

HeroSection.defaultProps = {
  isVisible: true
};

export default HeroSection;
