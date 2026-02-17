import React, { useEffect, useState } from 'react';

const Toast = ({ message, type = 'info', duration = 5000, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Don't set timers if duration is 0 or negative
    if (duration <= 0) return;

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, duration - 300);

    const closeTimer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(closeTimer);
    };
  }, [duration, onClose]);

  // Handle manual close
  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 300);
  };

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '!'
  };

  const colors = {
    success: { border: '#6d8a7d', bg: 'rgba(109, 138, 125, 0.1)', text: '#6d8a7d' },
    error: { border: '#b8a58b', bg: 'rgba(184, 165, 139, 0.1)', text: '#b8a58b' },
    info: { border: '#3a3a3a', bg: 'rgba(58, 58, 58, 0.1)', text: '#a0a0a0' },
    warning: { border: '#b8a58b', bg: 'rgba(184, 165, 139, 0.1)', text: '#b8a58b' }
  };

  // Add keyframe animation to document if not already present
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes progress {
        0% { width: 100%; }
        100% { width: 0%; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-4 right-4 z-50 min-w-[320px] max-w-md transition-all duration-300 transform ${
        isExiting ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'
      }`}
      role="alert"
      aria-live="polite"
    >
      <div 
        className="relative border p-4 shadow-lg backdrop-blur-sm"
        style={{
          borderColor: colors[type].border,
          backgroundColor: colors[type].bg,
        }}
      >
        <div className="flex items-start gap-3">
          {/* Icon with background circle */}
          <span 
            className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm"
            style={{ 
              backgroundColor: colors[type].text,
              color: '#0a0a0a'
            }}
          >
            {icons[type]}
          </span>
          
          {/* Message */}
          <p className="flex-1 text-sm text-[#f0f0f0] pr-6 leading-relaxed">
            {message}
          </p>
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors text-sm"
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
        
        {/* Progress bar */}
        {duration > 0 && (
          <div 
            className="absolute bottom-0 left-0 h-0.5"
            style={{ 
              backgroundColor: colors[type].text,
              animation: `progress ${duration}ms linear forwards`
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Toast;