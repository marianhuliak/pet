import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import scrollUpArrow from '../../../images/arrow_down.png'; 

const ScrollArrow = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsAtBottom(scrollTop + windowHeight >= documentHeight - 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div
    style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        transform: `rotate(${isAtBottom ? 180 : 0}deg)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        borderRadius: '50%', 
      }}
      onClick={isAtBottom ? scrollToTop : scrollToBottom}
    >
      <Image
        src={scrollUpArrow}
        alt="Scroll Arrow"
        width={50}
        height={50}
      />
    </div>
  );
};

export default ScrollArrow;
