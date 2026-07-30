import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile.js';

function Profile({ isVisible, isDarkBackground }) {
  return (
    <motion.div
      className="profile"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.95
      }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'flex',
        gap: '24px',
        padding: '24px 0',
        maxWidth: '1000px',
        margin: '0 auto',
        width: '100%'
      }}
    >
      {/* 照片区域 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          width: '200px',
          height: '300px',
          borderRadius: '12px',
          flexShrink: 0,
          overflow: 'hidden'
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/profile.webp`}
          alt="个人照片"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
          onError={(e) => {
            e.target.style.background = '#f5f5f5';
          }}
        />
      </motion.div>

      {/* 右侧内容 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}
      >
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 600,
            marginBottom: '8px',
            color: '#000000'
          }}
        >
          {profile.name}
        </h2>

        <p
          className="profile__title"
          style={{
            fontSize: '20px',
            color: '#666666',
            marginBottom: '8px'
          }}
        >
          {profile.title}
        </p>

        <p
          className="profile__subtitle"
          style={{
            fontSize: '15px',
            color: '#999999',
            marginBottom: '24px',
            fontStyle: 'italic'
          }}
        >
          {profile.subtitle}
        </p>

        <p
          className="profile__summary"
          style={{
            fontSize: '16px',
            lineHeight: 1.7,
            color: '#333333',
            marginBottom: '32px'
          }}
        >
          {profile.summary}
        </p>

        {/* 核心亮点和核心优势并排 */}
        <div style={{ display: 'flex', gap: '32px', marginTop: '16px' }}>
          {/* 核心亮点 */}
          <div style={{ flex: 1, borderRight: '2px solid #e5e5e5', paddingRight: '24px' }}>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 600,
                marginBottom: '16px',
                color: '#000000'
              }}
            >
              核心亮点
            </h3>
            {profile.highlights.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                  fontSize: '14px',
                  color: '#333333',
                  lineHeight: 1.5
                }}
              >
                <span style={{ marginRight: '10px', color: '#000000', fontWeight: 'bold' }}>
                  •
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* 核心优势 */}
          <div style={{ flex: 1, paddingLeft: '8px' }}>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 600,
                marginBottom: '16px',
                color: '#000000'
              }}
            >
              核心优势
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {profile.coreStrengths.map((strength, index) => (
                <span
                  key={index}
                  style={{
                    background: '#f5f5f5',
                    color: '#333333',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px'
                  }}
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

Profile.propTypes = {
  isVisible: PropTypes.bool,
  isDarkBackground: PropTypes.bool
};

Profile.defaultProps = {
  isVisible: true,
  isDarkBackground: false
};

export default Profile;
