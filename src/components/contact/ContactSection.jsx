import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { contact } from '../../data/contact.js';

function ContactSection({ isDarkBackground }) {
  return (
    <div
      className="contact-section"
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '48px 24px',
        width: '100%'
      }}
    >
      {/* 姓名 */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: '48px',
          fontWeight: 600,
          marginBottom: '16px',
          color: '#000000'
        }}
      >
        {contact.name}
      </motion.h1>

      {/* 职位 */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: '24px',
          color: '#666666',
          marginBottom: '8px'
        }}
      >
        {contact.title}
      </motion.p>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{
          fontSize: '16px',
          color: '#999999',
          marginBottom: '48px',
          fontStyle: 'italic',
          textAlign: 'center',
          maxWidth: '600px'
        }}
      >
        {contact.subtitle}
      </motion.p>

      {/* 联系方式 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '48px',
          alignItems: 'center'
        }}
      >
        <div style={{ fontSize: '18px', color: '#333333' }}>
          📧 {contact.email}
        </div>
        <div style={{ fontSize: '18px', color: '#333333' }}>
          📱 HK: {contact.phone.hk}
        </div>
        <div style={{ fontSize: '18px', color: '#333333' }}>
          📱 CN: {contact.phone.cn}
        </div>
        <div style={{ fontSize: '16px', color: '#666666' }}>
          📍 {contact.location}
        </div>
      </motion.div>

      {/* 简历下载 */}
      <motion.a
        href={contact.resume.url}
        download={contact.resume.filename}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        style={{
          display: 'inline-block',
          padding: '16px 40px',
          background: '#000000',
          color: '#ffffff',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 600,
          textDecoration: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease'
        }}
      >
        {contact.resume.label}
      </motion.a>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          marginTop: '48px',
          fontSize: '18px',
          color: '#333333',
          textAlign: 'center',
          maxWidth: '600px',
          lineHeight: 1.6
        }}
      >
        {contact.message}
      </motion.p>

      {/* Availability */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          marginTop: '16px',
          fontSize: '16px',
          color: '#4CAF50',
          fontWeight: 500,
          textAlign: 'center'
        }}
      >
        {contact.availability}
      </motion.p>
    </div>
  );
}

ContactSection.propTypes = {
  isDarkBackground: PropTypes.bool
};

ContactSection.defaultProps = {
  isDarkBackground: false
};

export default ContactSection;
