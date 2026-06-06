import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 z-[9999] p-3 rounded-full bg-white/20 backdrop-blur-md border border-[#801318]/20 shadow-lg text-[#801318] hover:bg-[#801318]/10 transition-all cursor-pointer flex items-center justify-center no-invert"
      title="Toggle Dark Mode"
    >
      <span className="material-symbols-outlined">
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
};

export default DarkModeToggle;
