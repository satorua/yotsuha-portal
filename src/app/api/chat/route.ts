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

        // ★ 証拠に基づいた修正：ChatBot.tsx から届く "message" を直接受け取る
        const userMessage = body.message;

        if (!userMessage) {
            return NextResponse.json({ error: "No message provided" }, { status: 400 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

        const systemPrompt = "あなたは猫の『よつは』です。語尾に『にゃ』をつけて、短くフレンドリーに返事をしてください。";

        // AIに送信（最もシンプルな形）
        const result = await model.generateContent(`${systemPrompt}\n\nユーザー: ${userMessage}`);
        const response = await result.response;
        const text = response.text();

        // ★ 証拠に基づいた修正：ChatBot.tsx が待っている "reply" という名前で返す
        return NextResponse.json({ reply: text });

    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}