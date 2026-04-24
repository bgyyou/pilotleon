import React, { useState, useEffect } from 'react';
import HeroSection from './components/hero/HeroSection.jsx';
import AboutSection from './components/about/AboutSection.jsx';
import ProjectsSection from './components/projects/ProjectsSection.jsx';
import ContactSection from './components/contact/ContactSection.jsx';
import Navigation from './components/navigation/Navigation.jsx';

function App() {
  const [page, setPage] = useState(0);
  const [activeProject, setActiveProject] = useState(null);

  // 页面背景色配置
  const isDarkBackground = page === 0 || page === 2;

  // 当前页面标识
  const currentPage = page === 0 ? 'home' :
                     page === 1 ? 'about' :
                     page === 2 ? (activeProject ? activeProject : 'projects') :
                     page === 3 ? 'contact' : 'home';

  // 监听页面切换，自动滚动到顶部
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [page]);

  // 导航跳转处理
  const handleNavigate = (section) => {
    setPage(section);
    setActiveProject(null);
    window.scrollTo(0, 0);
  };

  // 项目详情跳转
  const handleProjectSelect = (projectId) => {
    setActiveProject(projectId);
    setPage(2);
    window.scrollTo(0, 0);
  };

  // 返回列表
  const handleBack = () => {
    setActiveProject(null);
  };

  // Logo点击回到首页
  const handleLogoClick = () => {
    setPage(0);
    setActiveProject(null);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      {/* Logo行 - relative定位，随页面一起滚动 */}
      <div
        className="logo-bar"
        style={{
          position: 'relative',
          height: '96px',
          background: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderTop: isDarkBackground ? '1px solid #ffffff' : '1px solid #000000',
          cursor: 'pointer',
          zIndex: 9999,
          flexShrink: 0
        }}
        onClick={handleLogoClick}
      >
        <span style={{
          fontSize: '24px',
          fontWeight: 600,
          letterSpacing: '0.05em',
          color: '#ffffff'
        }}>
          PilotLeon
        </span>
      </div>

      {/* 左侧导航栏 */}
      <Navigation
        currentPage={currentPage}
        activeProject={activeProject}
        onNavigate={handleNavigate}
        onProjectSelect={handleProjectSelect}
        onBack={handleBack}
        isDarkBackground={isDarkBackground}
      />

      {/* 页面内容 */}
      <div style={{ minHeight: 'calc(100vh - 96px)' }}>
        {page === 0 && <HeroSection isVisible={true} isDarkBackground={true} />}
        {page === 1 && <AboutSection isDarkBackground={false} />}
        {page === 2 && (
          <ProjectsSection
            key={activeProject || 'list'}
            activeProject={activeProject}
            onBack={handleBack}
            onProjectSelect={handleProjectSelect}
            isDarkBackground={true}
          />
        )}
        {page === 3 && <ContactSection isDarkBackground={false} />}
      </div>
    </div>
  );
}

export default App;
