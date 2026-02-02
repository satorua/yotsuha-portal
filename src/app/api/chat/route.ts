import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// 日本語などのマルチバイト文字を扱うためにNode.jsランタイムを強制する
export const runtime = 'nodejs';

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "API Key not defined" },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        // 安定版の gemini-1.5-flash を使用
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // よつはのキャラ設定
        const prompt = `
      あなたは猫の『よつは』です。
      語尾に『にゃ』をつけて、短くフレンドリーに返事をしてください。
      ユーザーのメッセージ: ${message}
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ reply: text });
    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}