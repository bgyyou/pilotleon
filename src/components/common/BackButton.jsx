import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * BackButton组件 - 改这里影响返回按钮显示
 * 位置：src/components/common/BackButton.jsx
 *
 * 功能：
 * - 极简箭头样式
 * - 颜色根据背景色自动切换
 * - 点击触发返回回调
 */
function BackButton({ onClick, isDarkBackground }) {
  const color = isDarkBackground ? '#ffffff' : '#000000';

  return (
    <motion.button
      className="back-button"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={onClick}
      style={{
        position: 'fixed',
        top: '24px',
        left: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48px',
        height: '48px',
        cursor: 'pointer',
        zIndex: 1000,
        border: 'none',
        background: 'transparent',
        padding: 0
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"


        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.path
          d="M15 19l-7-7 7 7"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M15 8l-7 7 7-7"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.button>
  );
}

BackButton.propTypes = {
  /** 点击回调 */
  onClick: PropTypes.func.isRequired,
  /** 当前背景是否为深色（黑色） */
  isDarkBackground: PropTypes.bool
};

BackButton.defaultProps = {
  isDarkBackground: true
};

export default BackButton;
