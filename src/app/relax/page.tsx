'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cat, ExternalLink, Play, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const RelaxPage = () => {
    const goods = [
        {
            id: 1,
            name: "RealScooper Pro 全自動猫トイレ",
            shortName: "RealScooper Pro",
            description: "猫砂自動補充・自動掃除機能付きの高性能トイレ。",
            link: "#"
        },
        {
            id: 2,
            name: "PURE PET 自動給餌器 PPAF01-WH",
            shortName: "PURE PET 自動給餌器",
            description: "ホワイト。スマホ管理できるスマート給餌器。",
            link: "#"
        },
        {
            id: 3,
            name: "Mwpo キャットタワー (162cm)",
            shortName: "Mwpo キャットタワー",
            description: "ハンモック付き・多頭飼い対応のライトグレータワー。",
            link: "#"
        },
    ];

    const galleryItems = [1, 2, 3, 4, 5, 6];

    return (
        <div className="min-h-screen bg-[#FFFDFB] text-[#5D4037] font-sans selection:bg-pink-100 selection:text-pink-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-pink-50 px-8 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 hover:text-pink-500 transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold tracking-tight">Portal</span>
                </Link>
                <div className="font-black text-xl tracking-widest text-[#D88C8C]">
                    YOTSUHA RELAX
                </div>
                <div className="w-20" /> {/* Spacer */}
            </nav>

            <main className="pt-24 pb-32 px-6 max-w-6xl mx-auto space-y-32">
                {/* Hero Section */}
                <section className="space-y-8 text-center pt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1 rounded-full bg-pink-50 text-pink-500 text-xs font-black tracking-widest mb-6">
                            TODAY&apos;S PICK
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-4 text-[#4E342E]">
                            今日のよつは
                        </h1>
                    </motion.div>

                    {/* Video Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="aspect-video w-full rounded-3xl bg-[#F5E6D3] shadow-2xl overflow-hidden relative"
                    >
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/irau2-NK5_Q"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </motion.div>
                </section>

                {/* Goods Section */}
                <section className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-2">よつはの愛用品</h2>
                        <p className="text-[#A1887F] font-medium tracking-wide">Yotsuha&apos;s Favorites</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {goods.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group bg-white rounded-[2rem] p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(216,140,140,0.15)] transition-all duration-500 border border-pink-50/50 flex flex-col h-full"
                            >
                                <div className="aspect-square rounded-2xl bg-[#FAF3EE] mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                    <ShoppingBag size={64} className="text-[#D3BFA7]" />
                                </div>
                                <div className="flex-1 space-y-2 mb-6">
                                    <h3 className="text-xl font-bold leading-tight">【{item.shortName}】</h3>
                                    <p className="text-sm text-[#A1887F] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <button className="w-full py-4 rounded-xl bg-[#4E342E] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#D88C8C] transition-colors shadow-lg shadow-brown-200">
                                    <ExternalLink size={18} />
                                    Amazonで見る
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="space-y-12">
                    <div className="flex justify-between items-end border-b-2 border-pink-100 pb-4">
                        <h2 className="text-2xl font-black">Video Gallery</h2>
                        <Link href="#" className="text-sm font-bold text-pink-400 hover:text-pink-600 transition-colors uppercase tracking-widest">
                            View All
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryItems.map((item, i) => (
                            <motion.div
                                key={item}
                                whileHover={{ scale: 1.02 }}
                                className="aspect-square rounded-2xl md:rounded-3xl bg-[#FAF3EE] overflow-hidden cursor-pointer"
                            >
                                <div className="w-full h-full bg-[#EFEBE9] opacity-50 flex items-center justify-center">
                                    <Play size={24} className="text-[#BCAAA4]" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Floating AI Chat Button */}
            <motion.button
                whileHover={{ scale: 1.1, rotate: [-2, 2, -2] }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-white shadow-2xl border-2 border-pink-200 flex items-center justify-center text-pink-400 z-[60] group overflow-hidden"
            >
                <div className="absolute inset-0 bg-pink-100 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                <Cat size={32} className="relative z-10" />
            </motion.button>

            {/* Footer Decor */}
            <div className="py-20 text-center opacity-20 pointer-events-none select-none">
                <p className="font-black text-6xl md:text-9xl leading-none">RELAX & HEAL</p>
            </div>
        </div>
    );
};

export default RelaxPage;
