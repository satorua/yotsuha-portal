'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ChatBot from '@/components/ChatBot';

const RelaxPage = () => {
    // 1. 商品紹介データ（変更なし：Amazonリンクを完全に維持）
    const goods = [
        {
            id: 1,
            name: "RealScooper Pro 全自動猫トイレ",
            shortName: "RealScooper Pro",
            description: "猫砂自動補充・自動掃除機能付きの高性能トイレ。",
            link: "https://www.amazon.co.jp/LALAHOME-%E5%85%A8%E8%87%AA%E5%8B%95%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E7%8C%AB%E3%83%88%E3%82%A4%E3%83%AC-RealScooper-%E4%BB%8A%E3%81%BE%E3%81%A7%E3%81%AB%E3%81%AA%E3%81%84%E7%8C%AB%E7%A0%82%E8%87%AA%E5%8B%95%E8%A3%9C%E5%85%85%E3%83%BB%E8%87%AA%E5%8B%95%E6%8E%83%E9%99%A4%E3%82%B9%E3%82%B3%E3%83%83%E3%83%97-Android%E5%AF%BE%E5%BF%9C/dp/B0DLFV6MHB/ref=sr_1_15"
        },
        {
            id: 2,
            name: "PURE PET 自動給餌器 PPAF01-WH",
            shortName: "PURE PET 自動給餌器",
            description: "ホワイト。スマホ管理できるスマート給餌器。",
            link: "https://www.amazon.co.jp/%E3%82%B8%E3%82%A7%E3%83%83%E3%82%AF%E3%82%B9-%E7%8A%AC%E7%8C%AB%E7%94%A8%E8%87%AA%E5%8B%95%E7%B5%A6%E9%A4%8C%E5%99%A8-1%E6%97%A5%E6%9C%80%E5%A4%A710%E5%9B%9E5g%E5%8D%98%E4%BD%8D%E3%81%AE%E7%B4%B0%E3%81%8B%E3%81%AA%E8%A8%AD%E5%AE%9A-%E6%B8%85%E6%BD%94%E3%83%95%E3%83%BC%E3%83%89%E3%82%BF%E3%83%B3%E3%82%AF%E4%B8%B8%E6%B4%97%E3%81%84-PPAF01-WH/dp/B0D62QBZQV/ref=sr_1_5"
        },
        {
            id: 3,
            name: "Mwpo キャットタワー (162cm)",
            shortName: "Mwpo キャットタワー",
            description: "ハンモック付き・多頭飼い対応のライトグレータワー。",
            link: "