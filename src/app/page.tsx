'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2 } from 'lucide-react';

export default function TopPage() {
  const [videoId, setVideoId] = useState('S7bAcZNDJNw');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const res = await fetch('/api/youtube/latest');
        const data = await res.json();
        if (data.videoId) {
          setVideoId(data.videoId);
        }
      } catch (error) {
        console.error("Failed to fetch latest video:", error);
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    };
    fetchLatestVideo();
  }, []);

  const photos = [
    { id: 1, src: '/images/photos/yotsuha_1.jpg', rotate: -5, x: '-25vw', y: '-25vh', mobile: false },
    { id: 2, src: '/images/photos/yotsuha_2.jpg', rotate: 8, x: '28vw', y: '-20vh', mobile: true },
    { id: 3, src: '/images/photos/yotsuha_3.jpg', rotate: -12, x: '-32vw', y: '10vh', mobile: false },
    { id: 4, src: '/images/photos/yotsuha_4.jpg', rotate: 15, x: '30vw', y: '25vh', mobile: true },
    { id: 5, src: '/images/photos/yotsuha_5.jpg', rotate: -3, x: '-10vw', y: '-30vh', mobile: false },
    { id: 6, src: '/images/photos/yotsuha_6.jpg', rotate: 6, x: '15vw', y: '-35vh', mobile: false },
    { id: 7, src: '/images/photos/yotsuha_7.jpg', rotate: -9, x: '-20vw', y: '30vh', mobile: true },
    { id: 8, src: '/images/photos/yotsuha_8.jpg', rotate: 10, x: '10vw', y: '35vh', mobile: false },
    { id: 9, src: '/images/photos/yotsuha_9.jpg', rotate: -7, x: '35vw', y: '0vh', mobile: false },
    { id: 10, src: '/images/photos/yotsuha_10.jpg', rotate: 4, x: '-40vw', y: '-5vh', mobile: false },
  ];

  return (
    <main className="min-h-screen bg-[#D7B494] flex flex-col items-center justify-center relative overflow-hidden font-sans">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 0)',
          backgroundSize: '4px 4px'
        }}
      ></div>

      {photos.map((photo) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: photo.rotate }}
          transition={{ duration: 0.8, delay: photo.id * 0.1 }}
          className={`absolute ${photo.mobile ? 'block' : 'hidden md:block'}`}
          style={{
            left: '50%',
            top: '50%',
            x: photo.x,
            y: photo.y,
            zIndex: photo.mobile ? 1 : 0
          }}
        >
          <div className="p-2 pb-8 bg-white shadow-xl transform hover:scale-110 hover:z-50 transition-all duration-300 border border-gray-100">
            <div className="relative w-24 h-32 md:w-32 md:h-44 overflow-hidden bg-gray-100">
              <Image
                src={photo.src}
                alt={`Yotsuha ${photo.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100px, 150px"
              />
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-5 bg-pink-100/60 rotate-2"></div>
          </div>
        </motion.div>
      ))}



      <div className="z-20 text-center flex flex-col items-center p-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative group mb-8"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full shadow-inner z-30">
            <div className="absolute top-1 left-1 w-2 h-2 bg-white/30 rounded-full"></div>
          </div>

          <div className="relative w-40 md:w-48 aspect-[9/16] bg-white rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full bg-pink-50 flex flex-col items-center justify-center p-6 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="text-3xl mb-4"
                  >
                    🐾
                  </motion.div>
                  <p className="text-[10px] font-black text-pink-400 leading-tight uppercase tracking-widest">
                    Loading<br />Today&apos;s Yotsuha
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full h-full"
                >
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=0&rel=0`}
                    title="Yotsuha Short Video"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="absolute -top-3 -right-3 bg-pink-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg transform rotate-12">
            NEW!
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border-2 border-pink-50 relative min-w-[300px] md:min-w-[320px]"
        >
          <div className="absolute -top-3 left-4 bg-pink-400 text-white text-[8px] font-black px-2 py-0.5 rounded shadow-sm">
            OFFICIAL PORTAL
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-[#5D4037] mb-2 tracking-tighter">
            よつは君ポータル🐾
          </h1>
          <p className="text-pink-400 text-[10px] font-black mb-8 tracking-[0.3em] uppercase">
            Relax & Healing space
          </p>

          <Link
            href="/relax"
            className="inline-block bg-[#5D4037] text-white px-12 py-4 rounded-full font-black text-lg hover:bg-[#4E342E] transition-all shadow-xl hover:scale-105 active:scale-95 group overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center gap-2">
              Enter Portal
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                🐾
              </motion.span>
            </span>
          </Link>
        </motion.div>

        <div className="mt-8 text-[9px] font-black text-[#8D6E63] opacity-60 tracking-widest bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-[2px] border border-white/20">
          OFFICIAL PORTAL V1.3.0
        </div>
      </div>
    </main>
  );
}