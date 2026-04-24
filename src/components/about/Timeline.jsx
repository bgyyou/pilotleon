import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { timeline } from '../../data/timeline.js';

function Timeline({ isVisible, isDarkBackground }) {
  return (
    <div
      className="timeline-section"
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        width: '100%'
      }}
    >
      <h2
        style={{
          fontSize: '32px',
          fontWeight: 600,
          marginBottom: '48px',
          color: '#000000'
        }}
      >
        经历
      </h2>

      {timeline.map((item, index) => (
        <motion.div
          key={`${item.year}-${index}`}
          className="timeline-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : -50
          }}
          transition={{
            opacity: { duration: 0.5 },
            x: { duration: 0.5, delay: index * 0.1 }
          }}
          style={{
            display: 'flex',
            marginBottom: '48px',
            alignItems: 'flex-start'
          }}
        >
          {/* 年份列（固定宽度160px） */}
          <div
            style={{
              width: '160px',
              flexShrink: 0,
              fontSize: '18px',
              fontWeight: 600,
              color: '#000000',
              lineHeight: 1.4
            }}
          >
            {item.year}
          </div>

          {/* 右侧内容 */}
          <div
            style={{
              flex: 1,
              paddingLeft: '32px',
              borderLeft: '2px solid #e5e5e5'
            }}
          >
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '4px',
                color: '#000000'
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: '16px',
                color: '#666666',
                marginBottom: '4px',
                fontWeight: 500
              }}
            >
              {item.subtitle}
            </p>
            {item.location && (
              <p
                style={{
                  fontSize: '14px',
                  color: '#999999',
                  marginBottom: '12px',
                  fontStyle: 'italic'
                }}
              >
                {item.location}
              </p>
            )}
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: '#333333',
                marginBottom: '16px'
              }}
            >
              {item.description}
            </p>

            {/* Achievements */}
            {item.achievements && item.achievements.length > 0 && (
              <div className="timeline__achievements">
                {item.achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    style={{
                      fontSize: '14px',
                      color: '#333333',
                      marginBottom: '8px',
                      paddingLeft: '24px',
                      position: 'relative',
                      lineHeight: 1.5
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: '#4CAF50',
                        fontWeight: 'bold'
                      }}
                    >
                      ✓
                    </span>
                    {achievement}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

Timeline.propTypes = {
  isVisible: PropTypes.bool,
  isDarkBackground: PropTypes.bool
};

Timeline.defaultProps = {
  isVisible: true,
  isDarkBackground: false
};

export default Timeline;
