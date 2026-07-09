import { useState } from 'react';
import { motion } from 'framer-motion';
import './CodeBlock.css';

/**
 * Lightweight syntax highlighter — no external deps.
 * Highlights Python / JavaScript / TypeScript / Bash / JSON.
 */
function highlight(code, language) {
  const lines = code.split('\n');
  const isPy = language === 'python';
  const isJs = language === 'javascript' || language === 'typescript';

  return lines.map((line, lineIdx) => {
    const tokens = [];
    let i = 0;
    const pushToken = (text, className) => {
      if (text) tokens.push({ text, className });
    };

    while (i < line.length) {
      // Comments
      if ((isPy && line[i] === '#') || (isJs && line[i] === '/' && line[i + 1] === '/')) {
        pushToken(line.slice(i), 'tok-comment');
        break;
      }
      // Strings (single, double, triple)
      if (line[i] === '"' || line[i] === "'" || (isPy && line.slice(i, i + 3) === '"""')) {
        let end = i + 1;
        let quote = line[i];
        if (isPy && line.slice(i, i + 3) === '"""') {
          quote = '"""';
          const close = line.indexOf('"""', i + 3);
          end = close === -1 ? line.length : close + 3;
        } else {
          while (end < line.length && line[end] !== quote) {
            if (line[end] === '\\') end++;
            end++;
          }
          end++;
        }
        pushToken(line.slice(i, end), 'tok-string');
        i = end;
        continue;
      }
      // Numbers
      if (/\d/.test(line[i]) && (i === 0 || /[\s,(\[]/.test(line[i - 1]))) {
        let j = i;
        while (j < line.length && /[\d.]/.test(line[j])) j++;
        pushToken(line.slice(i, j), 'tok-number');
        i = j;
        continue;
      }
      // Decorators (Python)
      if (isPy && line[i] === '@') {
        let j = i;
        while (j < line.length && /[A-Za-z_]/.test(line[j + 1])) j++;
        pushToken(line.slice(i, j + 1), 'tok-decorator');
        i = j + 1;
        continue;
      }
      // Identifiers (keywords, function names, vars)
      if (/[A-Za-z_]/.test(line[i])) {
        let j = i;
        while (j < line.length && /[A-Za-z0-9_]/.test(line[j])) j++;
        const word = line.slice(i, j);
        if (isPy && PY_KEYWORDS.has(word)) pushToken(word, 'tok-keyword');
        else if (isJs && JS_KEYWORDS.has(word)) pushToken(word, 'tok-keyword');
        else if (i > 0 && line[i - 1] === '.' || (j < line.length && line[j] === '(')) pushToken(word, 'tok-fn');
        else pushToken(word, '');
        i = j;
        continue;
      }
      // Default char
      pushToken(line[i], '');
      i++;
    }

    return { tokens, lineIdx };
  });
}

const PY_KEYWORDS = new Set([
  'def', 'class', 'return', 'yield', 'if', 'elif', 'else', 'for', 'while',
  'in', 'is', 'not', 'and', 'or', 'import', 'from', 'as', 'with', 'try',
  'except', 'finally', 'raise', 'pass', 'break', 'continue', 'lambda',
  'True', 'False', 'None', 'self', 'async', 'await', 'global', 'nonlocal',
]);
const JS_KEYWORDS = new Set([
  'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while',
  'do', 'switch', 'case', 'break', 'continue', 'class', 'extends', 'new',
  'this', 'super', 'import', 'export', 'from', 'default', 'async', 'await',
  'try', 'catch', 'finally', 'throw', 'typeof', 'instanceof', 'in', 'of',
  'true', 'false', 'null', 'undefined', 'yield',
]);

export default function CodeBlock({ code, language = 'python', filename }) {
  const [copied, setCopied] = useState(false);
  const highlighted = highlight(code, language);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {}
  };

  return (
    <motion.div
      className="codeblock"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="codeblock__head">
        <div className="codeblock__file">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 1.5H8L12 5.5V12.5H2V1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            <path d="M8 1.5V5.5H12" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
          </svg>
          <span>{filename}</span>
        </div>
        <div className="codeblock__meta">
          <span className="codeblock__lang">{language}</span>
          <button className="codeblock__copy" onClick={handleCopy} aria-label="Copy code">
            {copied ? (
              <span>Copied</span>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M2 8V2.5C2 2.22 2.22 2 2.5 2H8" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="codeblock__body">
        <pre className="codeblock__pre">
          {highlighted.map(({ tokens, lineIdx }) => (
            <div key={lineIdx} className="codeblock__line">
              <span className="codeblock__lineno">{String(lineIdx + 1).padStart(3, ' ')}</span>
              <span className="codeblock__code">
                {tokens.map((tok, i) => (
                  <span key={i} className={tok.className}>{tok.text}</span>
                ))}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </motion.div>
  );
}
