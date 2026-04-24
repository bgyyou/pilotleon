import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation } from '../../data/config.js';
import NavItem from './NavItem.jsx';
import SubMenu from './SubMenu.jsx';

function Navigation({ currentPage, activeProject, onNavigate, onProjectSelect, onBack, isDarkBackground }) {
  const [isVisible, setIsVisible] = useState(true);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientX < 100) {
        setIsVisible(true);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      } else {
        if (!timeoutRef.current) {
          timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
            setShowSubmenu(false);
            timeoutRef.current = null;
          }, 3000);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const isProjectDetail = activeProject !== null && (activeProject === 'mediapilot' || activeProject === 'insurancehub');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          ref={navRef}
          className="navigation"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          style={{
            position: 'fixed',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '200px',
            background: 'transparent',
            padding: '24px 12px',
            zIndex: 100,
            color: isDarkBackground ? '#ffffff' : '#000000'
          }}
        >
          {/* 主导航项 */}
          <div className="navigation__main">
            {navigation.items.map(item => (
              <div key={item.id} className="navigation__item-wrapper">
                <NavItem
                  label={item.label}
                  isActive={
                    isProjectDetail
                      ? false
                      : item.section === currentPage
                  }
                  onClick={() => {
                    if (item.hasSubmenu) {
                      setShowSubmenu(!showSubmenu);
                    } else {
                      setShowSubmenu(false);
                      onNavigate(item.section);
                    }
                  }}
                  hasSubmenu={item.hasSubmenu}
                  isDarkBackground={isDarkBackground}
                />

                {/* 子菜单 */}
                <AnimatePresence>
                  {item.hasSubmenu && showSubmenu && (
                    <SubMenu
                      items={item.submenu}
                      activeProject={activeProject}
                      onProjectSelect={(projectId) => {
                        setShowSubmenu(false);
                        onProjectSelect(projectId);
                      }}
                      isDarkBackground={isDarkBackground}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* 项目详情页显示返回按钮 */}
          <AnimatePresence>
            {isProjectDetail && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                style={{
                  marginTop: '24px',
                  paddingTop: '24px',
                  borderTop: `1px solid ${isDarkBackground ? '#ffffff' : '#000000'}`
                }}
              >
                <NavItem
                  label="← 返回"
                  isActive={false}
                  onClick={() => {
                    setShowSubmenu(false);
                    onBack();
                  }}
                  isDarkBackground={isDarkBackground}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
  activeProject: PropTypes.string,
  onNavigate: PropTypes.func.isRequired,
  onProjectSelect: PropTypes.func,
  onBack: PropTypes.func,
  isDarkBackground: PropTypes.bool
};

Navigation.defaultProps = {
  activeProject: null,
  onProjectSelect: () => {},
  onBack: () => {},
  isDarkBackground: true
};

export default Navigation;
