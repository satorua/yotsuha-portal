import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Node.jsランタイムを強制
export const runtime = 'nodejs';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.error("API Key is missing");
            return NextResponse.json({ error: "API Key not set" }, { status: 500 });
        }

        // ★ここが修正ポイント：フロントエンドが送ってくる 'messages' (配列) を受け取る
        const messages = body.messages || [];

        // 最新のメッセージを取り出す（配列の最後）
        // もし messages が空なら、body.message (単数) も確認する保険をかける
        const userMessage = messages.length > 0
            ? messages[messages.length - 1].content
            : body.message || "こんにちは";

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // よつはのキャラ設定
        const systemPrompt = "あなたは猫の『よつは』です。語尾に『にゃ』をつけて、短くフレンドリーに返事をしてください。";

        // AIに送信
        const result = await model.generateContent(`${systemPrompt}\n\nユーザー: ${userMessage}`);
        const response = result.response;
        const text = response.text();

        // 結果を返す
        return NextResponse.json({ role: "model", content: text });

    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}