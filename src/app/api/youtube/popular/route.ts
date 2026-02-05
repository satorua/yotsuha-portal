import { NextResponse } from "next/server";

export const revalidate = 86400; // 24時間キャッシュ (ISR)

export async function GET() {
    try {
        const apiKey = process.env.YOUTUBE_API_KEY;
        const handle = process.env.YOUTUBE_CHANNEL_HANDLE || '@428kun';

        if (!apiKey) {
            return NextResponse.json({ error: "YouTube API key not found" }, { status: 500 });
        }

        // 1. チャンネルID取得
        const channelRes = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${handle.replace('@', '')}&key=${apiKey}`
        );
        const channelData = await channelRes.json();

        if (!channelData.items || channelData.items.length === 0) {
            return NextResponse.json({ error: "Channel not found" }, { status: 404 });
        }

        const channelId = channelData.items[0].id;

        // 2. 人気のショート動画を最大50件取得
        // videoDuration=short, order=viewCount
        const searchRes = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=viewCount&type=video&videoDuration=short&maxResults=50&key=${apiKey}`
        );
        const searchData = await searchRes.json();

        if (!searchData.items || searchData.items.length === 0) {
            return NextResponse.json({ error: "No videos found" }, { status: 404 });
        }

        // 動画IDのリストを返す
        const videoIds = searchData.items.map((item: any) => item.id.videoId);

        return NextResponse.json({ videoIds });

    } catch (error: unknown) {
        console.error("YouTube Popular API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
