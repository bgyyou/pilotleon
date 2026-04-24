import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

function ProjectsSection({ activeProject: externalActiveProject, onBack, onProjectSelect, isDarkBackground }) {
  const [internalActiveProject, setInternalActiveProject] = useState(null);
  const activeProject = externalActiveProject !== undefined ? externalActiveProject : internalActiveProject;

  // 监听activeProject变化，强制滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeProject]);

  const handleCardClick = (projectId) => {
    onProjectSelect(projectId);
  };

  const project = projects.find(p => p.id === activeProject);

  return (
    <div
      className="projects-section"
      style={{
        minHeight: '100vh',
        background: isDarkBackground ? '#000000' : '#ffffff',
        marginLeft: '220px',
        padding: '48px 24px',
        width: 'calc(100% - 220px)'
      }}
    >
      <AnimatePresence mode="wait">
        {!activeProject ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'flex',
              gap: '32px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              minHeight: '100vh'
            }}
          >
            {projects.map(proj => (
              <div key={proj.id} style={{ flex: 1, minWidth: '300px', maxWidth: '500px' }}>
                <ProjectCard
                  project={proj}
                  onClick={() => handleCardClick(proj.id)}
                  isDarkBackground={isDarkBackground}
                />
              </div>
            ))}
          </motion.div>
        ) : project ? (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* 返回按钮 */}
            <motion.button
              onClick={onBack}
              whileHover={{ x: -5 }}
              style={{
                background: 'transparent',
                border: `1px solid ${isDarkBackground ? '#ffffff' : '#000000'}`,
                color: isDarkBackground ? '#ffffff' : '#000000',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer',
                marginBottom: '32px'
              }}
            >
              ← 返回项目列表
            </motion.button>

            <h1 style={{ fontSize: '48px', fontWeight: 600, marginBottom: '16px', color: isDarkBackground ? '#ffffff' : '#000000' }}>
              {project.title}
            </h1>

            <p style={{ fontSize: '20px', color: isDarkBackground ? '#aaaaaa' : '#666666', marginBottom: '32px' }}>
              {project.subtitle}
            </p>

            <p style={{ fontSize: '16px', lineHeight: 1.8, color: isDarkBackground ? '#cccccc' : '#333333', marginBottom: '24px', maxWidth: '800px' }}>
              {project.description}
            </p>

            {/* 技术栈 */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: isDarkBackground ? '#ffffff' : '#000000' }}>
                技术栈
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tech.map((tech, index) => (
                  <span key={index} style={{
                    display: 'inline-block',
                    background: isDarkBackground ? 'rgba(255,255,255,0.1)' : '#f5f5f5',
                    color: isDarkBackground ? '#ffffff' : '#333333',
                    padding: '6px 14px',
                    borderRadius: '16px',
                    fontSize: '14px'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 核心功能 */}
            {project.features && project.features.length > 0 && (
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: isDarkBackground ? '#ffffff' : '#000000' }}>
                  核心功能
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.features.map((feature, index) => (
                    <span key={index} style={{
                      display: 'inline-block',
                      background: isDarkBackground ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                      color: isDarkBackground ? '#aaaaaa' : '#666666',
                      padding: '6px 14px',
                      borderRadius: '12px',
                      fontSize: '14px',
                      border: `1px solid ${isDarkBackground ? 'rgba(255,255,255,0.1)' : '#e5e5e5'}`
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 关键成果 */}
            {project.achievements && project.achievements.length > 0 && (
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: isDarkBackground ? '#ffffff' : '#000000' }}>
                  关键成果
                </h3>
                {project.achievements.map((achievement, idx) => (
                  <div key={idx} style={{
                    fontSize: '15px',
                    color: isDarkBackground ? '#cccccc' : '#333333',
                    marginBottom: '12px',
                    paddingLeft: '24px',
                    position: 'relative',
                    lineHeight: 1.6
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: '#4CAF50', fontWeight: 'bold' }}>✓</span>
                    {achievement}
                  </div>
                ))}
              </div>
            )}

            {/* 项目试用Demo区域 */}
            <div style={{
              border: `2px solid ${isDarkBackground ? '#ffffff' : '#000000'}`,
              borderRadius: '16px',
              padding: '32px',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: isDarkBackground ? 'rgba(255,255,255,0.02)' : '#f9f9f9',
              marginBottom: '48px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px', color: isDarkBackground ? '#ffffff' : '#000000' }}>
                  项目试用 Demo
                </h3>
                <p style={{ fontSize: '16px', color: isDarkBackground ? '#aaaaaa' : '#666666' }}>
                  Demo区域待开发
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

ProjectsSection.propTypes = {
  activeProject: PropTypes.string,
  onBack: PropTypes.func,
  onProjectSelect: PropTypes.func,
  isDarkBackground: PropTypes.bool
};

ProjectsSection.defaultProps = {
  activeProject: undefined,
  onBack: () => {},
  onProjectSelect: () => {},
  isDarkBackground: true
};

export default ProjectsSection;
