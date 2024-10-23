import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 md:bottom-40 right-10 z-50 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
        aria-label="Back to top"
      >
        <FaAngleUp className="w-6 h-6 text-black" />
      </button>
    )
  );
};

export default BackToTop;
