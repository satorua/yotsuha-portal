'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cat, Send, X, MessageCircle } from 'lucide-react';

interface Message {
    role: 'user' | 'yotsuha';
    content: string;
}

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { role: 'yotsuha', content: 'こんにちはにゃ！なにか手伝えることはあるかにゃ？' }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch('api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();
            if (data.reply) {
                setMessages(prev => [...prev, { role: 'yotsuha', content: data.reply }]);
            } else {
                setMessages(prev => [...prev, { role: 'yotsuha', content: 'ちょっと疲れちゃったにゃ...。またあとで話しかけてほしいにゃ。' }]);
            }
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, { role: 'yotsuha', content: '通信エラーだにゃ。インターネットを確認してみてほしいにゃ。' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                whileHover={{ scale: 1.1, rotate: [-2, 2, -2] }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-white shadow-2xl border-2 border-pink-200 flex items-center justify-center text-pink-400 z-[60] group overflow-hidden"
            >
                <div className="absolute inset-0 bg-pink-100 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                <Cat size={32} className="relative z-10" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full border-2 border-white animate-bounce flex items-center justify-center">
                    <span className="text-[10px] text-white font-bold">1</span>
                </div>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-28 right-8 w-[350px] max-w-[calc(100vw-64px)] h-[500px] bg-white rounded-3xl shadow-2xl z-[70] border border-pink-50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-pink-50 to-white border-b border-pink-100 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-pink-400">
                                    <Cat size={20} />
                                </div>
                                <div>
                                    <h3 className="font-black text-sm text-[#4E342E]">よつは AI</h3>
                                    <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-pink-100 rounded-full transition-colors text-slate-400"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FFFDFB]"
                        >
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm font-medium ${msg.role === 'user'
                                        ? 'bg-[#4E342E] text-white rounded-br-none'
                                        : 'bg-white text-[#5D4037] shadow-sm border border-pink-50 rounded-bl-none'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-pink-50 flex gap-1">
                                        <span className="w-1 h-1 bg-pink-400 rounded-full animate-bounce" />
                                        <span className="w-1 h-1 bg-pink-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                                        <span className="w-1 h-1 bg-pink-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-pink-50 bg-white">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="メッセージを入力にゃ..."
                                    className="flex-1 bg-slate-50 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isLoading}
                                    className="w-10 h-10 rounded-xl bg-pink-400 text-white flex items-center justify-center hover:bg-pink-500 disabled:opacity-50 transition-all shrink-0"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;
