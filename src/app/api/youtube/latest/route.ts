import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const apiKey = process.env.YOUTUBE_API_KEY;
        const handle = process.env.YOUTUBE_CHANNEL_HANDLE || '@428kun';

        if (!apiKey) {
            return NextResponse.json({ error: "YouTube API key not found" }, { status: 500 });
        }

        // 1. ハンドルからチャンネル情報を取得して ID を特定する、または直接検索する
        // チャンネルの動画を検索する (最新順)
        // type=video, order=date, maxResults=1
        // 注意: チャンネルIDを直接指定する方が安全ですが、ハンドルでの検索も可能です。

        // まずはチャンネルIDを取得 (ハンドルから)
        const channelRes = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${handle.replace('@', '')}&key=${apiKey}`
        );
        const channelData = await channelRes.json();

        if (!channelData.items || channelData.items.length === 0) {
            return NextResponse.json({ error: "Channel not found" }, { status: 404 });
        }

        const channelId = channelData.items[0].id;

        // 2. そのチャンネルの最新動画を1件取得
        const videoRes = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&maxResults=1&key=${apiKey}`
        );
        const videoData = await videoRes.json();

        if (!videoData.items || videoData.items.length === 0) {
            return NextResponse.json({ error: "No videos found" }, { status: 404 });
        }

        const latestVideoId = videoData.items[0].id.videoId;

        return NextResponse.json({ videoId: latestVideoId });

    } catch (error: unknown) {
        console.error("YouTube API Error:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
