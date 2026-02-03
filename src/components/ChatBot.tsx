'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
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
                setMessages(prev => [...prev, { role: 'bot', text: data.error }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'bot', text: "通信に失敗したにゃ。ネットを確認してほしいにゃ。" }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 font-sans">
            {/* チャットボタン */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-pink-400 hover:bg-pink-500 text-white p-4 rounded-full shadow-lg transition-all"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>

            {/* チャットウィンドウ */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-pink-100">
                    <div className="bg-pink-400 p-4 text-white font-bold flex justify-between items-center">
                        <span>よつは AI</span>
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
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-pink-500 text-white rounded-tr-none' : 'bg-white text-gray-700 shadow-sm rounded-tl-none border border-pink-100'
                                    }`}>
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

                    <div className="p-4 bg-white border-t border-gray-100 flex space-x-2">
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
            )}
        </div>
    );
}