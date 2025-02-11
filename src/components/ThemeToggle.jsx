import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { TbMoon, TbSunHigh } from "react-icons/tb";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div>
      <motion.button
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        onClick={toggleTheme}
        className="text-lg dark:text-neutral-200 cursor-pointer"
      >
        <span className=" hover:text-white transition-transform duration-500 text-2xl dark:hover:text-neutral-500">
          {isDarkMode ? < TbMoon /> : <TbSunHigh />}
        </span>
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
