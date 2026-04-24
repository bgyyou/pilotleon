import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function ProjectCard({ project, onClick, isDarkBackground }) {
  return (
    <motion.div
      className="project-card"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        boxShadow: isDarkBackground
          ? '0 12px 32px rgba(255,255,255, 0.1)'
          : '0 12px 32px rgba(0,0,0,0.1)'
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: isDarkBackground ? 'rgba(255,255,255,0.05)' : '#ffffff',
        borderRadius: '16px',
        padding: '28px',
        cursor: 'pointer',
        border: isDarkBackground
          ? '1px solid rgba(255,255,255,0.1)'
          : '1px solid #e5e5e5',
        boxShadow: isDarkBackground
          ? '0 4px 16px rgba(0,0,0,0.3)'
          : '0 4px 16px rgba(0,0,0,0.08)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* 项目标题 */}
      <h3
        style={{
          fontSize: '26px',
          fontWeight: 600,
          marginBottom: '8px',
          color: isDarkBackground ? '#ffffff' : '#000000'
        }}
      >
        {project.title}
      </h3>

      {/* 项目副标题 */}
      <p
        style={{
          fontSize: '16px',
          color: isDarkBackground ? '#aaaaaa' : '#666666',
          marginBottom: '12px'
        }}
      >
        {project.subtitle}
      </p>

      {/* 项目描述 */}
      <p
        style={{
          fontSize: '15px',
          lineHeight: 1.6,
          color: isDarkBackground ? '#cccccc' : '#333333',
          marginBottom: '4px',
          flex: 1
        }}
      >
        {project.description}
      </p>

      {/* 技术栈标签 */}
      <div style={{ marginBottom: '12px' }}>
        {project.tech.map((tech, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              background: isDarkBackground ? 'rgba(255,255,255,0.1)' : '#f5f5f5',
              color: isDarkBackground ? '#ffffff' : '#333333',
              padding: '6px 12px',
              borderRadius: '12px',
              fontSize: '13px',
              marginRight: '6px',
              marginBottom: '6px'
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* 项目预览图 */}
      <div
        style={{
          width: '100%',
          height: '200px',
          background: '#f5f5f5',
          borderRadius: '12px',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${isDarkBackground ? 'rgba(255,255,255,0.1)' : '#e5e5e5'}`
        }}
      >
        <p style={{ fontSize: '14px', color: '#999999' }}>
          项目预览图（待上传）
        </p>
      </div>

      {/* 查看详情提示 */}
      <div
        style={{
          fontSize: '14px',
          color: isDarkBackground ? '#888888' : '#999999',
          marginTop: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        点击查看详情
        <span style={{ fontSize: '12px' }}>→</span>
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  isDarkBackground: PropTypes.bool
};

ProjectCard.defaultProps = {
  onClick: () => {},
  isDarkBackground: true
};

export default ProjectCard;
