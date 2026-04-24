import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * ContactLink组件 - 联系链接
 * 位置：src/components/contact/ContactLink.jsx
 *
 * 功能：
 * - 显示邮箱、电话等联系方式
 * - 悬浮效果
 * - 支持点击操作（mailto等）
 */
function ContactLink({ icon, label, value, type, onClick }) {
  const handleClick = () => {
    if (type === 'email') {
      window.location.href = `mailto:${value}`;
    } else if (type === 'phone') {
      window.navigator.clipboard?.writeText(value);
      // 可以提示已复制
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <motion.div
      className="contact-link"
      onClick={handleClick}
      whileHover={{ x: 8 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px 24px',
        background: '#f5f5f5',
        borderRadius: '8px',
        cursor: 'pointer',
        marginBottom: '16px',
        maxWidth: '400px'
      }}
    >
      <span style={{ fontSize: '24px' }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: '14px',
            color: '#666',
            marginBottom: '4px'
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: '18px',
            fontWeight: 500,
            color: '#000'
          }}
        >
          {value}
        </div>
      </div>
    </motion.div>
  );
}

ContactLink.propTypes = {
  /** 图标 */
  icon: PropTypes.string.isRequired,
  /** 标签 */
  label: PropTypes.string.isRequired,
  /** 值 */
  value: PropTypes.string.isRequired,
  /** 类型：email, phone, link */
  type: PropTypes.oneOf(['email', 'phone', 'link']),
  /** 点击回调 */
  onClick: PropTypes.func
};

ContactLink.defaultProps = {
  type: 'link',
  onClick: null
};

export default ContactLink;
