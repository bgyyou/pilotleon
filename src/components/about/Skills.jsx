import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills.js';

function Skills({ isVisible, isDarkBackground }) {
  return (
    <div
      className="skills-section"
      style={{
        maxWidth: '1000px',
        margin: '32px auto 0 auto',
        width: '100%'
      }}
    >
      <h2
        style={{
          fontSize: '32px',
          fontWeight: 600,
          marginBottom: '32px',
          color: isDarkBackground ? '#ffffff' : '#000000'
        }}
      >
        技能
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
        {skills.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: isVisible ? categoryIndex * 0.1 : 0 }}
          >
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '24px',
                color: isDarkBackground ? '#ffffff' : '#000000'
              }}
            >
              {category.category}
            </h3>
            {category.items.map((item, itemIndex) => (
              <div key={item.name} style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                    fontSize: '15px',
                    color: isDarkBackground ? '#cccccc' : '#333333'
                  }}
                >
                  <span>{item.name}</span>
                  <span style={{ fontWeight: 500 }}>{item.level}%</span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '8px',
                    background: isDarkBackground ? 'rgba(255,255,255,0.1)' : '#e5e5e5',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: isVisible ? categoryIndex * 0.1 + itemIndex * 0.1 : 0 }}
                    style={{
                      height: '100%',
                      background: isDarkBackground ? '#ffffff' : '#000000',
                      borderRadius: '4px'
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

Skills.propTypes = {
  isVisible: PropTypes.bool,
  isDarkBackground: PropTypes.bool
};

Skills.defaultProps = {
  isVisible: false,
  isDarkBackground: false
};

export default Skills;
