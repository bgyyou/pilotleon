import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function NavItem({ label, isActive, onClick, hasSubmenu, isSubmenu, isDarkBackground }) {
  return (
    <motion.div
      className={`nav-item ${isActive ? 'nav-item--active' : ''} ${isSubmenu ? 'nav-item--submenu' : ''}`}
      onClick={onClick}
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      whileHover={{ x: 10 }}
      style={{
        padding: isSubmenu ? '12px 24px 12px 48px' : '16px 24px',
        cursor: 'pointer',
        fontSize: isSubmenu ? '14px' : '16px',
        fontWeight: isActive || isSubmenu ? 500 : 400,
        color: 'inherit',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        whiteSpace: 'nowrap'
      }}
    >
      {label}
      {hasSubmenu && (
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: '12px',
            display: 'inline-block'
          }}
        >
          ↓
        </motion.span>
      )}
    </motion.div>
  );
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  hasSubmenu: PropTypes.bool,
  isSubmenu: PropTypes.bool,
  isDarkBackground: PropTypes.bool
};

NavItem.defaultProps = {
  isActive: false,
  hasSubmenu: false,
  isSubmenu: false,
  isDarkBackground: true
};

export default NavItem;
