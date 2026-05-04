import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { slogan } from '../../data/config.js';

function Slogan({ isVisible }) {
  const [zhText, setZhText] = useState('');
  const [enText, setEnText] = useState('');
  const [showEn, setShowEn] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      const baseHeight = 1080;
      setScale(Math.max(0.6, Math.min(1.2, height / baseHeight)));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setZhText('');
      setEnText('');
      setShowEn(false);
      return;
    }

    let zhIndex = 0;
    let enIndex = 0;

    const zhInterval = setInterval(() => {
      if (zhIndex < slogan.zh.length) {
        setZhText(slogan.zh.slice(0, zhIndex + 1));
        zhIndex++;
      } else {
        clearInterval(zhInterval);
        setShowEn(true);

        const enInterval = setInterval(() => {
          if (enIndex < slogan.en.length) {
            setEnText(slogan.en.slice(0, enIndex + 1));
            enIndex++;
          } else {
            clearInterval(enInterval);
          }
        }, slogan.typingSpeed);

        return;
      }
    }, slogan.typingSpeed);

    return () => {
      clearInterval(zhInterval);
    };
  }, [isVisible]);

  return (
    <div
      style={{
        position: 'absolute',
        top: `calc(50% - ${280 * scale}px)`,
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        pointerEvents: 'none',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        zIndex: 100
      }}
    >
      <div
        style={{
          fontSize: `${54 * scale}px`,
          fontWeight: 700,
          lineHeight: 1.5,
          marginBottom: `${8 * scale}px`
        }}
      >
        {zhText}
        {isVisible && zhText.length < slogan.zh.length && (
          <span style={{ animation: 'blink 1s infinite' }}>|</span>
        )}
      </div>

      {showEn && (
        <div
          style={{
            fontSize: `${36 * scale}px`,
            fontWeight: 400,
            opacity: 0.9,
            lineHeight: 1.4
          }}
        >
          {enText}
          {enText.length < slogan.en.length && (
            <span style={{ animation: 'blink 1s infinite' }}>|</span>
          )}
        </div>
      )}
    </div>
  );
}

Slogan.propTypes = {
  isVisible: PropTypes.bool
};

Slogan.defaultProps = {
  isVisible: true
};

export default Slogan;
