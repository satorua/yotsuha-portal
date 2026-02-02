'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface SplitCardProps {
    title: string;
    subtitle: string;
    icon: LucideIcon;
    side: 'left' | 'right';
    className: string;
    iconColor: string;
    href?: string;
    children?: React.ReactNode;
}

const SplitCard: React.FC<SplitCardProps> = ({
    title,
    subtitle,
    icon: Icon,
    side,
    className,
    iconColor,
    href = "#",
    children
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative flex-1 flex flex-col items-center justify-center p-8 transition-all duration-500 overflow-hidden group ${className}`}
        >
            {/* Background Decor */}
            <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center pointer-events-none">
                <Icon size={400} />
            </div>

            <div className="relative z-10 flex flex-col items-center max-w-md text-center">
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-6 rounded-full bg-white/10 backdrop-blur-md mb-8 shadow-xl ${iconColor}`}
                >
                    <Icon size={48} />
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                    {title}
                </h2>
                <p className="text-lg opacity-80 mb-8 font-medium">
                    {subtitle}
                </p>

                {children}

                <Link href={href}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full bg-white text-gray-900 font-bold shadow-lg group-hover:shadow-2xl transition-all"
                    >
                        Enter Portal
                    </motion.button>
                </Link>
            </div>

            {/* Decorative lines / elements based on side */}
            {side === 'right' && (
                <div className="absolute bottom-4 right-4 font-mono text-xs opacity-30 select-none">
                    {`// system.init()`}<br />
                    {`// loading modules...`}<br />
                    {`// access_granted = true`}
                </div>
            )}

            {side === 'left' && (
                <div className="absolute bottom-4 left-4 text-2xl opacity-30 select-none">
                    🐾
                </div>
            )}
        </motion.div>
    );
};

export default SplitCard;
