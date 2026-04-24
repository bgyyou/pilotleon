import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * ProjectDemo组件 - 项目交互Demo区域
 * 位置：src/components/projects/ProjectDemo.jsx
 *
 * 功能：
 * - 模拟项目Demo
 * - 脚本生成器（MediaPilot）
 * - 社交功能（InsuranceHub）
 */
function ProjectDemo({ projectId }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  // 模拟脚本生成
  const handleGenerateScript = async () => {
    setIsGenerating(true);

    // 模拟AI生成过程
    await new Promise(resolve => setTimeout(resolve, 2000));

    const scripts = {
      mediapilot: `# AI生成的脚本示例

## 话题：如何选择合适的保险产品？

### 核心要点：
1. 先了解自己的需求（健康、重疾、寿险？）
2. 评估预算（月交多少钱能接受？）
3. 了解产品条款（免体检、等待期、缴费年限）

### 避坑指南：
❌ 不要只听销售说，要自己看条款
❌ 不要贪便宜，长期来看可能更贵
❌ 不要隐瞒健康状况，后续理赔会出问题

✅ 建议找专业顾问做需求分析
✅ 对比2-3家公司再做决定
✅ 仔细阅读条款，特别是免责条款`,

      insurancehub: `# AI生成的评论示例

这条帖子讲得非常透彻！特别是关于保费的计算部分，很多人容易忽略通胀因素。

作为从业者补充几点：
- 香港的保费结构确实比较复杂
- 除了通胀，还要考虑汇率风险
- 建议客户用美金或人民币保单，对冲汇

分享一个案例：我有个客户去年买的储蓄险，今年才发现用港币交保费但保单是美元的...`
    };

    setGeneratedContent(scripts[projectId] || '');
    setIsGenerating(false);
  };

  const demoContent = {
    mediapilot: {
      title: 'MediaPilot Demo',
      description: 'AI脚本生成器演示',
      action: handleGenerateScript,
      actionLabel: '生成脚本',
      actionIcon: '✨',
      placeholder: '输入保险话题...'
    },
    insurancehub: {
      title: 'InsuranceHub Demo',
      description: '社区功能演示',
      action: () => {},
      actionLabel: '模拟评论',
      actionIcon: '💬',
      placeholder: '这条帖子讲得非常透彻！...'
    }
  };

  const currentDemo = demoContent[projectId];

  return (
    <motion.div
      className="project-demo"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        flex: 1,
        paddingLeft: '48px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Demo标题 */}
      <h3
        style={{
          fontSize: '24px',
          fontWeight: 600,
          marginBottom: '16px',
          color: '#000'
        }}
      >
        {currentDemo.title}
      </h3>
      <p
        style={{
          fontSize: '16px',
          color: '#666',
          marginBottom: '32px'
        }}
      >
        {currentDemo.description}
      </p>

      {/* 交互区域 */}
      <div
        style={{
          background: '#f5f5f5',
          padding: '32px',
          borderRadius: '16px',
          minHeight: '400px'
        }}
      >
        {/* 输入框 */}
        <div
          style={{
            marginBottom: '24px'
          }}
        >
          <textarea
            placeholder={currentDemo.placeholder}
            style={{
              width: '100%',
              height: '120px',
              padding: '16px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '14px',
              fontFamily: 'inherit',
              resize: 'none',
              outline: 'none',
              ':focus': {
                borderColor: '#000'
              }
            }}
          />
        </div>

        {/* 按钮 */}
        <motion.button
          onClick={currentDemo.action}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isGenerating}
          style={{
            width: '100%',
            padding: '16px 32px',
            background: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            opacity: isGenerating ? 0.6 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          {isGenerating ? (
            <>
              <span style={{ animation: 'spin 1s linear infinite' }}>⟳</span>
              生成中...
            </>
          ) : (
            <>
              {currentDemo.actionIcon}
              {currentDemo.actionLabel}
            </>
          )}
        </motion.button>

        {/* 生成结果 */}
        {generatedContent && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5 }}
            style={{
              marginTop: '24px',
              padding: '24px',
              background: '#fff',
              borderRadius: '8px',
              border: '1px solid #ddd',
              maxHeight: '400px',
              overflowY: 'auto',
              fontFamily: 'monospace',
              fontSize: '14px',
              lineHeight: 1.6,
              whiteSpace: 'pre-wrap',
              color: '#333'
            }}
          >
            {generatedContent}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

ProjectDemo.propTypes = {
  /** 项目ID */
  projectId: PropTypes.oneOf(['mediapilot', 'insurancehub']).isRequired
};

export default ProjectDemo;
