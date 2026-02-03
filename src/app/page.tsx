'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TopPage() {
  const [videoId, setVideoId] = useState('S7bAcZNDJNw');

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
      }
    };
    fetchLatestVideo();
  }, []);

  // 写真のデータ
  const photos = [
    { id: 1, src: '/images/photos/yotsuha_1.jpg', rotate: -5, x: '-25vw', y: '-25vh' },
    { id: 2, src: '/images/photos/yotsuha_2.jpg', rotate: 8, x: '28vw', y: '-20vh' },
    { id: 3, src: '/images/photos/yotsuha_3.jpg', rotate: -12, x: '-32vw', y: '10vh' },
    { id: 4, src: '/images/photos/yotsuha_4.jpg', rotate: 15, x: '30vw', y: '25vh' },
    { id: 5, src: '/images/photos/yotsuha_5.jpg', rotate: -3, x: '-10vw', y: '-30vh' },
    { id: 6, src: '/images/photos/yotsuha_6.jpg', rotate: 6, x: '15vw', y: '-35vh' },
    { id: 7, src: '/images/photos/yotsuha_7.jpg', rotate: -9, x: '-20vw', y: '30vh' },
    { id: 8, src: '/images/photos/yotsuha_8.jpg', rotate: 10, x: '10vw', y: '35vh' },
    { id: 9, src: '/images/photos/yotsuha_9.jpg', rotate: -7, x: '35vw', y: '0vh' },
    { id: 10, src: '/images/photos/yotsuha_10.jpg', rotate: 4, x: '-40vw', y: '-5vh' },
  ];

  return (
    <main className="min-h-screen bg-[#D7B494] flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* コルクボードのテクスチャ表現 */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 0)',
          backgroundSize: '4px 4px'
        }}
      ></div>

      {/* 散りばめられた写真 */}
      {photos.map((photo) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: photo.rotate }}
          transition={{ duration: 0.8, delay: photo.id * 0.1 }}
          className="absolute hidden md:block"
          style={{
            left: '50%',
            top: '50%',
            x: photo.x,
            y: photo.y,
          }}
        >
          <div className="p-3 pb-10 bg-white shadow-xl transform hover:scale-110 hover:z-50 transition-all duration-300 border border-gray-100">
            <div className="w-32 h-44 overflow-hidden bg-gray-100">
              <img src={photo.src} alt={`Yotsuha ${photo.id}`} className="w-full h-full object-cover" />
            </div>
            {/* マスキングテープ風の装飾 */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-6 bg-pink-200/40 rotate-2"></div>
          </div>
        </motion.div>
      ))}

      {/* メインコンテンツ */}
      <div className="z-20 text-center flex flex-col items-center">
        {/* 最新のショート動画 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative group mb-8"
        >
          {/* 画鋲の装飾 */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full shadow-inner z-30">
            <div className="absolute top-1 left-1 w-2 h-2 bg-white/30 rounded-full"></div>
          </div>

          <div className="relative w-48 aspect-[9/16] bg-white rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=0&rel=0`}
              title="Yotsuha Short Video"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="absolute -top-3 -right-3 bg-pink-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg transform rotate-12">
            NEW!
          </div>
        </motion.div>

        {/* ボードに貼った紙風のタイトルエリア */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-2 border-pink-50 relative min-w-[320px]"
        >
          <h1 className="text-4xl font-black text-[#5D4037] mb-2 tracking-tighter">
            よつは君ポータル
          </h1>
          <p className="text-pink-400 text-xs font-black mb-8 tracking-[0.3em] uppercase">
            Relax & Healing space
          </p>

          <Link
            href="/relax"
            className="inline-block bg-[#5D4037] text-white px-12 py-4 rounded-full font-black text-lg hover:bg-[#4E342E] transition-all shadow-xl hover:scale-105 active:scale-95 group"
          >
            <span className="flex items-center gap-2">
              Enter Portal
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                🐾
              </motion.span>
            </span>
          </Link>
        </motion.div>

        {/* 下部のステータス */}
        <div className="mt-8 text-[10px] font-black text-[#8D6E63] opacity-60 tracking-widest bg-white/30 px-4 py-1 rounded-full backdrop-blur-sm">
          DEV ACCESS // V1.2.0 (BOARD REDESIGN)
        </div>
      </div>
    </main>
  );
}