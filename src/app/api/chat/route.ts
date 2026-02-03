import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// 実行環境の安定化設定
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        // 1. APIキーの存在チェック（初心者がハマるポイントをガード）
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "APIキーが設定されていませんにゃ。Vercelの設定を確認してほしいにゃ。" }, { status: 500 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);

        // 2. あなたが特定した「真実のモデル名」を固定
        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

        // 3. よつはちゃんの「性格」をここに定義（HPの完成度を高める）
        const prompt = `あなたは「よつは」という名前の可愛い猫のAIアシスタントです。
        語尾は必ず「〜だにゃ」「〜にゃ！」にしてください。
        親切で少しおっとりした性格です。
        ユーザーの問いかけに対して、短く可愛く答えてください。
        
        ユーザーのメッセージ: ${message}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ reply: text });

    } catch (error: any) {
        console.error("Chat API Error:", error);
        // エラー内容を具体的に返すことで、トラブルシューティングを容易にする
        return NextResponse.json({
            error: "ちょっと疲れちゃったにゃ。時間をおいて話しかけてほしいにゃ。",
            details: error.message
        }, { status: 500 });
    }
}