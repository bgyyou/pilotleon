import { useState, useEffect } from 'react';

/**
 * useSectionScroll hook - 页面滚动状态管理
 * 位置：src/hooks/useSectionScroll.js
 *
 * 功能：
 * - 监听滚轮事件
 * - 处理页面切换
 * - 键盘方向键支持
 */
const useSectionScroll = (onPageChange) => {
  const [currentPage, setCurrentPage] = useState(0); // 0: Hero, 1: About, 2: Projects, 3: Contact
  const [activeProject, setActiveProject] = useState(null); // mediapilot 或 insurancehub
  const [isProjectDetailView, setIsProjectDetailView] = useState(false);

  // 滚轮滚动处理
  useEffect(() => {
    let scrollTimeout = null;
    let scrollDirection = null;
    const scrollThreshold = 50; // 滚动阈值
    let accumulatedScroll = 0;

    const handleWheel = (e) => {
      // 如果在项目详情页，不处理滚轮
      if (isProjectDetailView) return;

      const delta = e.deltaY;

      // 检测滚动方向
      if (Math.abs(delta) > 1) {
        scrollDirection = delta > 0 ? 'down' : 'up';
      }

      accumulatedScroll += Math.abs(delta);

      // 防抖：滚动超过阈值后才触发翻页
      if (accumulatedScroll >= scrollThreshold) {
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }

        scrollTimeout = setTimeout(() => {
          if (scrollDirection === 'down' && currentPage < 3) {
            setCurrentPage(currentPage + 1);
          } else if (scrollDirection === 'up' && currentPage > 0) {
            setCurrentPage(currentPage - 1);
          }
          accumulatedScroll = 0;
        }, 100);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [currentPage, isProjectDetailView]);

  // 键盘方向键支持
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isProjectDetailView) {
        // 项目详情页，ESC返回
        if (e.key === 'Escape') {
          setIsProjectDetailView(false);
          setActiveProject(null);
        }
        return;
      }

      if (e.key === 'ArrowDown' && currentPage < 3) {
        setCurrentPage(currentPage + 1);
      } else if (e.key === 'ArrowUp' && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage, isProjectDetailView]);

  // 页面切换回调
  useEffect(() => {
    if (onPageChange) {
      onPageChange(currentPage);
    }
  }, [currentPage]);

  // 返回状态和控制方法
  return {
    currentPage,
    activeProject,
    isProjectDetailView,
    setCurrentPage,
    setActiveProject,
    setIsProjectDetailView,
    navigateToPage: (page) => {
      setIsProjectDetailView(false);
      setActiveProject(null);
      setCurrentPage(page);
    },
    navigateToProject: (projectId) => {
      setActiveProject(projectId);
      setIsProjectDetailView(true);
    },
    goBack: () => {
      setIsProjectDetailView(false);
      setActiveProject(null);
    }
  };
};

export default useSectionScroll;
