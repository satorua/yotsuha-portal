import Link from 'next/link';

export default function TopPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFB] flex flex-col items-center justify-center relative">

      {/* メインコンテンツ */}
      <div className="z-10 text-center flex flex-col items-center">
        {/* 最新のショート動画をエントランスに配置 */}
        <div className="relative group mb-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 to-brown-200 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative w-48 aspect-[9/16] bg-white rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/S7bAcZNDJNw?autoplay=0&controls=0&rel=0"
              title="Yotsuha Short Video"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          {/* 装飾用のバッジ */}
          <div className="absolute -top-3 -right-3 bg-pink-400 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
            NEW VIDEO
          </div>
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