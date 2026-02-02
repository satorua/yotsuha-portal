'use client';

import Header from '@/components/Header';
import SplitCard from '@/components/SplitCard';
import { Cat, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-black">
      <Header />

      {/* Left Section: Relax (Fan Mode) */}
      <SplitCard
        side="left"
        title="癒やされる"
        subtitle="Relax & Healing"
        icon={Cat}
        className="bg-[#FFF9F5] text-[#D88C8C]"
        iconColor="text-pink-400"
        href="/relax"
      >
        <div className="mb-6 px-4 py-2 rounded-full border border-pink-200 bg-pink-50 text-pink-600 text-sm font-bold">
          FAN PORTAL
        </div>
      </SplitCard>

      {/* Right Section: Tech Logic (Developer Mode) */}
      <SplitCard
        side="right"
        title="仕組みを見る"
        subtitle="Tech Logic"
        icon={Terminal}
        className="bg-[#0A0A0A] text-[#E0E0E0] border-l border-white/5"
        iconColor="text-emerald-400"
        href="/tech"
      >
        <div className="mb-6 px-4 py-2 rounded-full border border-emerald-900 bg-emerald-950 text-emerald-400 text-sm font-mono tracking-tighter shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          DEV ACCESS // V1.0.4
        </div>
      </SplitCard>

      {/* Mobile Indicator / Separator */}
      <div className="md:hidden absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-pink-200 via-transparent to-emerald-800 opacity-30" />
    </main>
  );
}
