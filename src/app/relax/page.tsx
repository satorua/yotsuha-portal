'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ChatBot from '@/components/ChatBot';

const RelaxPage = () => {
    // 1. 商品紹介データ
    const goods = [
        {
            id: 1,
            name: "RealScooper Pro 全自動猫トイレ",
            shortName: "RealScooper Pro",
            description: "猫砂自動補充・自動掃除機能付きの高性能トイレ。よつはも快適に使ってるにゃ！",
            link: "https://www.amazon.co.jp/LALAHOME-%E5%85%A8%E8%87%AA%E5%8B%95%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E7%8C%AB%E3%83%88%E3%82%A4%E3%83%AC-RealScooper-%E4%BB%8A%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%81%84%E7%8C%AB%E7%A0%82%E8%87%AA%E5%8B%95%E8%A3%9C%E5%85%85%E3%83%BB%E8%87%AA%E5%8B%95%E6%8E%83%E9%99%A4%E3%82%B9%E3%82%B3%E3%83%83%E3%83%97-Android%E5%AF%BE%E5%BF%9C/dp/B0DLFV6MHB/ref=sr_1_15",
            videoId: "E3xN1uFUidI"
        },
        {
            id: 2,
            name: "PURE PET 自動給餌器 PPAF01-WH",
            shortName: "PURE PET 自動給餌器",
            description: "スマホ管理できるスマート給餌器。ごはんの時間が楽しみだにゃ！",
            link: "https://www.amazon.co.jp/%E3%82%B8%E3%82%A7%E3%83%83%E3%82%AF%E3%82%B9-%E7%8A%AC%E7%8C%AB%E7%94%A8%E8%87%AA%E5%8B%95%E7%B5%A6%E9%A4%8C%E5%99%A8-1%E6%97%A5%E6%9C%80%E5%A4%A710%E5%9B%9E5g%E5%8D%98%E4%BD%8D%E3%81%AE%E7%B4%B0%E3%81%8B%E3%81%AA%E8%A8%AD%E5%AE%9A-%E6%B8%85%E6%BD%94%E3%83%95%E3%83%BC%E3%83%89%E3%82%BF%E3%83%B3%E3%82%AF%E4%B8%B8%E6%B4%97%E3%81%84-PPAF01-WH/dp/B0D62QBZQV/ref=sr_1_5",
            videoId: "_k8VSaS-tpQ"
        },
        {
            id: 3,
            name: "Mwpo キャットタワー (162cm)",
            shortName: "Mwpo キャットタワー",
            description: "高いところもハンモックも大好きにゃ！多頭飼いにもぴったりだにゃ。",
            link: "https://www.amazon.co.jp/Mwpo-%E3%82%AD%E3%83%A3%E3%83%88%E3%83%AF%E3%83%BC-%E5%A4%A7%E3%81%8D%E3%81%84%E3%83%8F%E3%83%B3%E3%83%A2%E3%83%83%E3%82%AF-%E3%82%AD%E3%83%A3%E3%83%83%E3%83%88%E3%83%A9%E3%83%B3%E3%83%89-2%E3%81%A4%E9%AB%98%E3%81%84%E3%83%99%E3%83%83%E3%83%89/dp/B089M1ZQ2H/ref=sr_1_6",
            videoId: "UT1OlSGB12A"
        },
    ];

    // 2. ヒーロー動画用のステート（今月のおすすめ動画IDで固定）
    const [heroVideoId] = React.useState('t-sILn_nTA0');

    // 3. ギャラリー用ショート動画IDリスト（6本）
    const videoIds = [
        'PDb9RCc8nu0',
        'fBJaaV5U51M',
        'NlFUrHK463k',
        'k_eTRDYBY-Q',
        '3VaM0u1sbAQ',
        'jbCZNtY9rTg'
    ];

    // 自動取得ロジックを一時停止（固定動画を表示するため）
    /*
    React.useEffect(() => {
        const fetchLatest = async () => {
            try {
                const res = await fetch('/api/youtube/latest');
                const data = await res.json();
                if (data.videoId) {
                    setHeroVideoId(data.videoId);
                }
            } catch (error) {
                console.error("Failed to fetch latest video:", error);
            }
        };
        fetchLatest();
    }, []);
    */

    return (
        <div className="min-h-screen bg-[#FFFDFB] text-[#5D4037] font-sans selection:bg-pink-100 selection:text-pink-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-pink-50 px-8 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 hover:text-pink-500 transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold tracking-tight">Portal</span>
                </Link>
                <div className="font-black text-xl tracking-widest text-[#D88C8C]">
                    YOTSUHA RELAX
                </div>
                <div className="w-20" />
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
                            THIS MONTH&apos;S PICK
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-4 text-[#4E342E]">
                            今月のよつは
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="aspect-video w-full rounded-3xl bg-[#F5E6D3] shadow-2xl overflow-hidden relative"
                    >
                        {/* メイン動画 */}
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${heroVideoId}`}
                            title="YouTube video player"
                            style={{ border: 0 }}
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
                                <div className="aspect-[9/16] rounded-2xl bg-[#FAF3EE] mb-6 overflow-hidden shadow-inner group-hover:scale-[1.02] transition-transform duration-500 border border-pink-100 flex items-center justify-center">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${item.videoId}`}
                                        title={item.name}
                                        style={{ border: 0 }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="flex-1 space-y-2 mb-6">
                                    <h3 className="text-xl font-bold leading-tight">【{item.shortName}】</h3>
                                    <p className="text-sm text-[#A1887F] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 rounded-xl bg-[#4E342E] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#D88C8C] transition-colors shadow-lg shadow-brown-200"
                                >
                                    <ExternalLink size={18} />
                                    Amazonで見る
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* YouTube Channel Link Section */}
                <section className="flex flex-col items-center justify-center space-y-6">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group cursor-pointer"
                    >
                        {/* 左耳 */}
                        <div className="absolute -top-3 left-6 w-8 h-8 bg-[#FF0000] rounded-tl-full group-hover:bg-[#CC0000] transition-colors"></div>
                        {/* 右耳 */}
                        <div className="absolute -top-3 right-6 w-8 h-8 bg-[#FF0000] rounded-tr-full group-hover:bg-[#CC0000] transition-colors"></div>

                        <a
                            href="https://www.youtube.com/@428kun"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block px-12 py-6 bg-[#FF0000] text-white rounded-[2rem] shadow-2xl hover:bg-[#CC0000] transition-all duration-300 group-hover:shadow-pink-200/50"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-2 rounded-full text-[#FF0000]">
                                    <ExternalLink size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-black tracking-widest uppercase opacity-80">Official Channel</p>
                                    <p className="text-xl md:text-2xl font-black">YouTubeで見に行くにゃ！</p>
                                </div>
                            </div>
                        </a>

                        {/* 吹き出しの尻尾風装飾 */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF0000] rotate-45 group-hover:bg-[#CC0000] transition-colors"></div>
                    </motion.div>

                    <p className="text-[#A1887F] text-sm font-bold italic">
                        毎日15:15更新中🐾 チャンネル登録よろしくだにゃ！
                    </p>
                </section>

                {/* Gallery Section */}
                <section className="space-y-12 pb-20">
                    <div className="text-center md:text-left border-b-2 border-pink-100 pb-6 mb-12">
                        <h2 className="text-3xl font-black tracking-tight text-[#4E342E]">Video Gallery</h2>
                        <p className="text-[#A1887F] text-sm mt-1">よつはの日常を覗き見る窓</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        {/* ギャラリーからはヒーロー動画を自動で除外して表示 */}
                        {videoIds
                            .filter(id => id !== heroVideoId)
                            .slice(0, 6)
                            .map((id, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    whileHover={{
                                        scale: 1.03,
                                        rotate: i % 2 === 0 ? 1 : -1,
                                        y: -10
                                    }}
                                    className="relative group"
                                >
                                    {/* 装飾用の背面レイヤー（窓の質感を出す） */}
                                    <div className="absolute -inset-1 bg-gradient-to-tr from-pink-200 to-brown-200 rounded-[2.5rem] blur opacity-25 group-hover:opacity-60 transition duration-500"></div>

                                    <div className="relative aspect-[9/16] rounded-[2rem] md:rounded-[2.5rem] bg-white overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] group-hover:shadow-[0_40px_80px_-20px_rgba(216,140,140,0.3)] transition-all duration-500 border-4 border-white">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${id}`}
                                            title={`Yotsuha Video ${i}`}
                                            style={{ border: 0 }}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>

                                        {/* 窓の下部の反射のようなエフェクト（オーバーレイ） */}
                                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-60"></div>
                                    </div>

                                    {/* 窓のラベル（動画のインデックスなど） */}
                                    <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-[10px] font-black tracking-[0.2em] text-[#D88C8C] uppercase">Window {i + 1}</span>
                                    </div>
                                </motion.div>
                            ))}
                    </div>
                </section>
                {/* Profile Section */}
                <section className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-black mb-2">よつはのプロフィール</h2>
                        <span className="text-pink-400 font-bold block">🐾 Profile 🐾</span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-pink-50/50 rounded-[3rem] p-8 md:p-12 border-2 border-dashed border-pink-200 relative overflow-hidden"
                    >
                        {/* 背景の肉球装飾 */}
                        <div className="absolute top-10 right-10 opacity-5 -rotate-12">
                            <ShoppingBag size={120} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 border-b border-pink-100 pb-4">
                                    <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold">名</div>
                                    <div>
                                        <p className="text-xs text-[#A1887F] font-bold uppercase tracking-widest">Name</p>
                                        <p className="text-2xl font-black">よつは</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 border-b border-pink-100 pb-4">
                                    <div className="w-12 h-12 bg-[#D88C8C] rounded-full flex items-center justify-center text-white font-bold">呼</div>
                                    <div>
                                        <p className="text-xs text-[#A1887F] font-bold uppercase tracking-widest">Nickname</p>
                                        <p className="text-xl font-bold">よつ、よちゅ</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 border-b border-pink-100 pb-4">
                                    <div className="w-12 h-12 bg-[#4E342E] rounded-full flex items-center justify-center text-white font-bold">柄</div>
                                    <div>
                                        <p className="text-xs text-[#A1887F] font-bold uppercase tracking-widest">Pattern</p>
                                        <p className="text-xl font-bold">サバトラ / MIX猫</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 border-b border-pink-100 pb-4">
                                    <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center text-white font-bold">誕</div>
                                    <div>
                                        <p className="text-xs text-[#A1887F] font-bold uppercase tracking-widest">Birthday</p>
                                        <p className="text-xl font-bold">2024年 3月（推定）</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 border-b border-pink-100 pb-4">
                                    <div className="w-12 h-12 bg-[#D3BFA7] rounded-full flex items-center justify-center text-white font-bold">地</div>
                                    <div>
                                        <p className="text-xs text-[#A1887F] font-bold uppercase tracking-widest">Origin</p>
                                        <p className="text-xl font-bold">沖縄</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 border-b border-pink-100 pb-4">
                                    <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-white font-bold">🏠</div>
                                    <div>
                                        <p className="text-xs text-[#A1887F] font-bold uppercase tracking-widest">Rescue Place</p>
                                        <p className="text-lg font-bold">渋谷区・港区あたりの保護猫カフェ</p>
                                        <p className="text-[10px] text-pink-400 font-black tracking-tighter">※2024年11月まで</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 下部のメッセージ的な装飾 */}
                        <div className="mt-12 pt-8 text-center border-t border-pink-100">
                            <p className="text-[#A1887F] italic font-serif">
                                &ldquo;いつも元気いっぱい、遊ぶのが大好きなよつはだにゃ！&rdquo;
                            </p>
                        </div>
                    </motion.div>
                </section>



                {/* Footer / Legal Section */}
                <footer className="pt-20 pb-10 border-t border-pink-100/50">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Guidance and Legal Section */}
                        <div className="text-center space-y-4">
                            <div className="inline-block p-3 bg-pink-50 rounded-2xl">
                                <ShoppingBag size={32} className="text-pink-400" />
                            </div>
                            <h3 className="text-xl font-black text-[#4E342E]">サイトのご利用にあたって</h3>
                            <p className="text-sm text-[#A1887F] leading-relaxed max-w-2xl mx-auto">
                                当サイトを安心してご利用いただくための重要な事項について記載しています。<br className="hidden md:block" />
                                安全な運営のため、ご一読いただけますと幸いです。
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[11px] leading-relaxed text-[#8D6E63]">
                            {/* 免責事項 */}
                            <div className="bg-white/50 p-6 rounded-[2rem] border border-pink-50 space-y-3">
                                <h4 className="font-black text-[#D88C8C] flex items-center gap-2">
                                    <span>🐾</span> 免責事項
                                </h4>
                                <p>
                                    当サイトに掲載されている情報は、細心の注意を払っておりますが、その正確性や安全性を保証するものではありません。情報の利用によって生じたトラブルや損失について、運営者は一切の責任を負いかねます。
                                </p>
                                <p>
                                    また、外部サイトへのリンク先で提供される情報やサービスについても責任を負いかねますので、移動先サイトにてご確認ください。YouTube動画の著作権や肖像権は各権利者に帰属します。
                                </p>
                            </div>

                            {/* プライバシーポリシー */}
                            <div className="bg-white/50 p-6 rounded-[2rem] border border-pink-50 space-y-3">
                                <h4 className="font-black text-[#D88C8C] flex items-center gap-2">
                                    <span>🐾</span> プライバシーポリシー
                                </h4>
                                <p>
                                    当サイトでは、アクセス解析や広告配信のためにCookie（クッキー）を使用しています。Cookieはブラウザを識別し、より良い体験を提供するために使用されますが、個人を特定する情報は含まれません。ブラウザの設定でCookieを無効にすることも可能です。
                                </p>
                                <p>
                                    YouTube APIを利用して最新の動画情報を取得しており、これに伴い公開データの一部を利用することがありますが、規約に則り適切に取り扱っています。
                                </p>
                            </div>

                            {/* AIチャットについて */}
                            <div className="bg-white/50 p-6 rounded-[2rem] border border-pink-50 space-y-3">
                                <h4 className="font-black text-[#D88C8C] flex items-center gap-2">
                                    <span>🐾</span> AIチャットの利用について
                                </h4>
                                <p>
                                    サイト内のチャット機能は生成AI技術を使用しています。入力されたメッセージは品質向上ののために利用される可能性があるため、お名前や住所などの重要な個人情報は入力しないようお願いいたします。また、AIは誤った情報を提示する場合があることをご了承ください。
                                </p>
                            </div>

                            {/* 広告・アフィリエイト */}
                            <div className="bg-white/50 p-6 rounded-[2rem] border border-pink-50 space-y-3">
                                <h4 className="font-black text-[#D88C8C] flex items-center gap-2">
                                    <span>🐾</span> 広告とアフィリエイト
                                </h4>
                                <p>
                                    当サイトは、Amazon.co.jpおよび楽天市場等のアフィリエイトプログラムの参加者です。適切な商品紹介を通じて運営を維持しています。
                                </p>
                                <p>
                                    Google AdSense等の第三者配信事業者は、Cookieを使用してユーザーの過去のアクセス情報に基づき広告を配信します。これらの設定は各サービスの広告設定より無効化することが可能です。
                                </p>
                            </div>
                        </div>

                        <div className="text-center pt-8">
                            <p className="text-[10px] font-bold text-[#D3BFA7] tracking-widest uppercase">
                                &copy; 2024 YOTSUHA PORTAL. ALL RIGHTS RESERVED.
                            </p>
                        </div>
                    </div>
                </footer>
            </main>

            <ChatBot />

            <div className="py-20 text-center opacity-20 pointer-events-none select-none">
                <p className="font-black text-6xl md:text-9xl leading-none">RELAX & HEAL</p>
            </div>
        </div>
    );
};

export default RelaxPage;