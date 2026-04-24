// 全局配置 - 改这里影响全局

// 主题配置
export const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    darkGray: '#333333',
    lightGray: '#f5f5f5'
  },
  fonts: {
    primary: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif',
    heading: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif'
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
    '2xl': '64px'
  }
};

// 导航配置
export const navigation = {
  items: [
    {
      id: 'home',
      label: 'Home',
      section: 0,
      hasSubmenu: false
    },
    {
      id: 'about',
      label: 'About Me',
      section: 1,
      hasSubmenu: false
    },
    {
      id: 'projects',
      label: 'Project Sets',
      section: 2,
      hasSubmenu: true,
      submenu: [
        {
          id: 'mediapilot',
          label: 'MediaPilot',
          detailPage: true
        },
        {
          id: 'insurancehub',
          label: 'InsuranceHub',
          detailPage: true
        }
      ]
    },
    {
      id: 'contact',
      label: 'Contact Me',
      section: 3,
      hasSubmenu: false
    }
  ]
};

// Logo配置
export const logo = {
  name: 'PilotLeon'
};

// Slogan配置
export const slogan = {
  zh: '在AI时代，营销自己是最重要的能力',
  en: 'In the age of AI, marketing yourself is the most important skill',
  typingSpeed: 50 // 打字速度
};

// 动画配置
export const animations = {
  pageTransition: {
    duration: 0.6,
    ease: [0.4, 0, 0.2, 1]
  },
  typewriter: {
    speed: 50, // ms per character
    delay: 100 // delay before start
  }
};
