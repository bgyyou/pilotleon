import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile.jsx';
import Skills from './Skills.jsx';
import Timeline from './Timeline.jsx';

function AboutSection({ isDarkBackground }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="about-section"
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        padding: '0 24px',
        paddingBottom: '64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Profile isVisible={isVisible} isDarkBackground={isDarkBackground} />
      <Skills isVisible={isVisible} isDarkBackground={isDarkBackground} />
      <Timeline isVisible={isVisible} isDarkBackground={isDarkBackground} />
    </div>
  );
}

AboutSection.propTypes = {
  isDarkBackground: PropTypes.bool
};

AboutSection.defaultProps = {
  isDarkBackground: false
};

export default AboutSection;
