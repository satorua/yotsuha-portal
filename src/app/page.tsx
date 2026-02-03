import Link from 'next/link';

export default function TopPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFB] flex flex-col items-center justify-center relative">

      {/* メインコンテンツ */}
      <div className="z-10 text-center flex flex-col items-center">
        {/* アイコン（既存の画像やアイコンがあれば適宜差し替えてください） */}
        <div className="bg-white p-6 rounded-full shadow-sm mb-6 border border-pink-50 text-4xl">
          🐱
        </div>

        {/* タイトル */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          よつは君ポータル
        </h1>
        <p className="text-gray-400 text-sm mb-8 tracking-wider">
          RELAX & HEALING
        </p>

        {/* 統合された単一の入り口（フェーズ1で作った /relax へ誘導） */}
        <Link
          href="/relax"
          className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:scale-105"
        >
          Enter Portal
        </Link>

        {/* 技術要素は控えめに下部へ配置（開発者向け） */}
        <div className="mt-12 text-xs font-mono text-gray-300">
          <span>DEV ACCESS // V1.0.4</span>
        </div>
      </div>

    </main>
  );
}