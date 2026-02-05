'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Cat, PawPrint } from 'lucide-react';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string; isError?: boolean }[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // メッセージが追加されたら自動で一番下へスクロール
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);

        try {
            // 通信経路を「api/chat」に固定（今日学んだ正解ルート）
            const res = await fetch('api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg }),
            });

            const data = await res.json();

            if (data.reply) {
                setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
            } else if (data.error) {
                setMessages(prev => [...prev, { role: 'bot', text: data.error, isError: true }]);
            }
        } catch {
            setMessages(prev => [...prev, { role: 'bot', text: "通信に失敗したにゃ。ネットを確認してほしいにゃ。", isError: true }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-10 right-10 z-40 font-sans flex flex-col items-end gap-4">
            {/* 誘導メッセージ（吹き出し） */}
            {!isOpen && (
                <div className="animate-float mb-2">
                    <div className="relative bg-white text-[#5D4037] px-6 py-3 rounded-2xl shadow-xl border-2 border-pink-100 whitespace-nowrap text-sm font-black">
                        よつはとお話ししたい方はこちらにゃ🐾
                        {/* 吹き出しの三角部分 */}
                        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r-2 border-b-2 border-pink-100 rotate-45"></div>
                    </div>
                </div>
            )}

            {/* チャットボタン */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-pink-400 hover:bg-pink-500 text-white p-5 rounded-full shadow-[0_15px_30px_-5px_rgba(216,140,140,0.4)] transition-all hover:scale-110 active:scale-95 animate-bounce-subtle group"
            >
                {isOpen ? <X size={32} /> : <Cat size={32} className="group-hover:rotate-12 transition-transform" />}
            </button>

            <style jsx>{`
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                .animate-bounce-subtle {
                    animation: bounce-subtle 3s infinite ease-in-out;
                }
                .animate-float {
                    animation: float 2.5s infinite ease-in-out;
                }
            `}</style>

            {/* チャットウィンドウ */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-pink-100">
                    <div className="bg-pink-400 p-4 text-white font-bold flex justify-between items-center">
                        <span>よつは 🐾</span>
                        <div className="flex items-center text-xs">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                            ONLINE
                        </div>
                    </div>

                    <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-pink-50/30">
                        {messages.length === 0 && (
                            <p className="text-gray-400 text-center text-sm mt-10">よつはとお話しするにゃ！</p>
                        )}
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user'
                                        ? 'bg-pink-500 text-white rounded-tr-none'
                                        : m.isError
                                            ? 'bg-red-50 text-red-600 border border-red-200 rounded-tl-none font-bold'
                                            : 'bg-white text-gray-700 shadow-sm rounded-tl-none border border-pink-100'
                                    }`}>
                                    {m.isError && <span className="mr-1">⚠️</span>}
                                    {m.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-pink-100 flex space-x-1">
                                    <span className="w-1.5 h-1.5 bg-pink-200 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-pink-200 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                    <span className="w-1.5 h-1.5 bg-pink-200 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col bg-white">
                        <div className="px-4 py-1.5 bg-pink-50 text-[10px] text-[#A1887F] font-bold border-t border-pink-100 flex items-center gap-1">
                            <PawPrint size={10} className="text-pink-300" />
                            お話しが噛み合わないこともあるけど許してにゃ🐾
                        </div>
                        <div className="p-4 border-t border-gray-100 flex space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="メッセージを入力..."
                                className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-pink-400"
                            />
                            <button onClick={handleSend} className="text-pink-400 hover:text-pink-600 transition-colors">
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}