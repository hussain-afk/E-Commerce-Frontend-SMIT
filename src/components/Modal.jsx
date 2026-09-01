import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Modal({ isOpen, onClose, title, children, maxWidth = "max-w-lg" }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Box */}
      <div 
        className={`bg-white w-full ${maxWidth} rounded-[24px] p-6 sm:p-8 relative shadow-2xl border border-black/10 transform transition-all animate-scaleUp`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F0F0F0] text-black/60 hover:text-black hover:bg-black/10 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <FaTimes className="w-4 h-4" />
        </button>

        {/* Modal Title (Optional) */}
        {title && (
          <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-4 pr-6">
            {title}
          </h3>
        )}

        {/* Dynamic Content */}
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}