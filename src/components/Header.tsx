'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center p-8 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto"
      >
        <h1 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-gray-800 dark:text-white mix-blend-difference">
          YOTSUHA 428
        </h1>
      </motion.div>
    </header>
  );
};

export default Header;
