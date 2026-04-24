import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import NavItem from './NavItem.jsx';

function SubMenu({ items, activeProject, onProjectSelect, isDarkBackground }) {
  return (
    <AnimatePresence mode="wait">
      {items && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            paddingLeft: '24px',
            marginTop: '8px'
          }}
        >
          {items.map(item => (
            <NavItem
              key={item.id}
              label={item.label}
              isActive={activeProject === item.id}
              onClick={() => onProjectSelect(item.id)}
              isSubmenu={true}
              isDarkBackground={isDarkBackground}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

SubMenu.propTypes = {
  items: PropTypes.array,
  activeProject: PropTypes.string,
  onProjectSelect: PropTypes.func,
  isDarkBackground: PropTypes.bool
};

SubMenu.defaultProps = {
  items: [],
  activeProject: null,
  onProjectSelect: () => {},
  isDarkBackground: true
};

export default SubMenu;
