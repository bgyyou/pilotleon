import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ParticleBall from './ParticleBall.jsx';
import RippleEffect from './RippleEffect.jsx';
import Slogan from '../common/Slogan.jsx';

function HeroSection({ isVisible, isDarkBackground }) {
  return (
    <div
      className="hero-section"
      style={{
        minHeight: '100vh',
        background: '#000000',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Slogan打字机效果 */}
      <Slogan isVisible={isVisible} />

      {/* 粒子球 */}
      <ParticleBall isVisible={isVisible} />

      {/* 水波纹 */}
      <RippleEffect isVisible={isVisible} />
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
