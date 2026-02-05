'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Zap, Brain, Rocket, ArrowLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const TypewriterText = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, [text]);

    return (
        <span className="font-mono">
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-5 bg-emerald-500 ml-1 align-middle"
            />
        </span>
    );
};

const TechPage = () => {
    const techStack = [
        { name: "Next.js", role: "Framework", icon: "▲", color: "text-white" },
        { name: "Tailwind CSS", role: "Styling", icon: "≋", color: "text-cyan-400" },
        { name: "Google Gemini", role: "AI Brain", icon: "✧", color: "text-blue-400" },
        { name: "Antigravity", role: "IDE Agent", icon: "⏚", color: "text-emerald-400" },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-mono selection:bg-emerald-500/30 selection:text-emerald-200">
            {/* Grid Background Decor */}
            <div className="fixed inset-0 pointer-events-none opacity-20"
                style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            {/* Header / Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md px-8 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span>system_exit</span>
                </Link>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm font-bold tracking-widest text-emerald-500">SYSTEM_LIVE</span>
                </div>
            </nav>

            <main className="relative pt-32 pb-40 px-6 max-w-5xl mx-auto space-y-40">
                {/* Terminal Hero Section */}
                <section className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400">
                        <Terminal size={12} />
                        <span>localhost:3000/system_init</span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight min-h-[3rem] text-emerald-400">
                            <TypewriterText text="> Initializing Yotsuha_System..." />
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="text-xl md:text-2xl text-slate-400 font-sans font-light"
                        >
                            Built entirely with <span className="text-white font-bold">Google Gemini</span> & <span className="text-emerald-400 font-bold">Antigravity</span>.
                        </motion.p>
                    </div>
                </section>

                {/* Tech Stack Grid */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold tracking-tighter uppercase underline decoration-emerald-500/50 decoration-4 underline-offset-8">
                            System Architecture
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                whileHover={{ y: -5, borderColor: 'rgba(16, 185, 129, 0.5)' }}
                                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:bg-slate-900 transition-all group relative overflow-hidden"
                            >
                                {/* Glow Effect */}
                                <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative flex items-center gap-6">
                                    <div className={`text-4xl font-black ${tech.color} w-12 h-12 flex items-center justify-center bg-slate-950 rounded-lg border border-white/5 shadow-inner`}>
                                        {tech.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                                        <p className="text-sm text-slate-500 uppercase tracking-widest">{tech.role}</p>
                                    </div>
                                    <ChevronRight className="ml-auto text-slate-700 group-hover:text-emerald-500 transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Case Study Section */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold tracking-tighter uppercase underline decoration-emerald-500/50 decoration-4 underline-offset-8">
                            Case Study: Yotsuha Relax
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-900/30 rounded-3xl p-8 border border-white/5">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 rounded bg-pink-500/10 border border-pink-500/20 text-[10px] text-pink-400 font-bold uppercase tracking-widest">
                                Sample Implementation
                            </div>
                            <h3 className="text-3xl font-black text-white">感情を動かすUXの実装</h3>
                            <p className="text-slate-400 leading-relaxed font-sans">
                                無機質なAI技術を、いかにして「猫の癒やし」というエモーショナルな体験に昇華させるか。
                                フロントエンドの実装からコンテンツのトーン＆マナーに至るまで、AIとの対話を通じて最適なバランスを追求しました。
                            </p>
                            <ul className="space-y-3 font-sans text-sm text-slate-300">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Framer Motionによる微細なマイクロアニメーション
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    YouTube Data APIを用いた動的なコンテンツ同期
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Gemini APIによるキャラクター・エージェントの実装
                                </li>
                            </ul>
                            <Link href="/relax" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-bold">
                                実装対象を見る <ChevronRight size={16} />
                            </Link>
                        </div>
                        <div className="relative aspect-video rounded-2xl bg-slate-800 border border-white/10 overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-bold italic">
                                [ YOTSUHA_RELAX_PREVIEW ]
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="relative p-12 rounded-3xl bg-slate-900 border border-emerald-500/20 overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Brain size={200} />
                    </div>

                    <div className="relative space-y-8 max-w-2xl">
                        <div className="flex items-center gap-3 text-emerald-400">
                            <Zap size={24} className="fill-emerald-400" />
                            <h2 className="text-3xl font-black italic tracking-tight">AI Driven Execution</h2>
                        </div>

                        <p className="text-lg md:text-xl leading-relaxed text-slate-300 font-sans">
                            このプロジェクトのコードは、AIエージェントへの指示とフィードバックのループのみで構築されています。
                            人間の役割は「目的の定義」と「成果の検証」。
                            AIを単なるツールではなく、共同開発者（Pair Programmer）として扱うことで、爆速かつ高品質なアウトプットを実現しました。
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all"
                            >
                                <Rocket size={20} />
                                制作フローを見る（近日公開）
                            </motion.button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer Meta */}
            <footer className="py-12 px-8 border-t border-white/5 text-center text-slate-600 text-xs uppercase tracking-[0.3em]">
                <p>&copy; 2026 Yotsuha_System // Version 1.0.4-LTS</p>
            </footer>
        </div>
    );
};

export default TechPage;
