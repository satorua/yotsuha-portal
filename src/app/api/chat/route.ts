import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export const runtime = 'nodejs';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ error: "API Key not set" }, { status: 500 });
        }

        // 入力：配列(messages)でも単体(message)でも受け取れるようにする
        const messages = body.messages || [];
        const userMessage = messages.length > 0
            ? messages[messages.length - 1].content
            : body.message || "こんにちは";

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const systemPrompt = "あなたは猫の『よつは』です。語尾に『にゃ』をつけて、短くフレンドリーに返事をしてください。";

        const result = await model.generateContent(`${systemPrompt}\n\nユーザー: ${userMessage}`);
        const response = result.response;
        const text = response.text();

        // ★ここです！ 返事の名前を 'reply' に戻しました。これで画面と噛み合います。
        return NextResponse.json({ reply: text });

    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}