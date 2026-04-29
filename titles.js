// =============================================================================
// titles.js - Cyber Faction 称号定義ファイル (完全版)
// =============================================================================
//
// 各称号のプロパティ:
//   id            : 一意ID
//   cat           : カテゴリ名
//   weight        : 重さ（同カテゴリ内で最重量が表示される）
//   title         : 称号名
//   color         : Tailwind テキストカラークラス
//   req           : 解除条件の説明文（Secretは '???' で隠す）
//   check         : 解除条件チェック関数 (stats) => boolean
//   rippleColor   : 波紋エフェクトの色（rgba）
//   glowColor     : タイピングボックスのボーダー発光色（hex）
//   soundType     : Web Audio API の oscillator type
//   soundFreq     : 打鍵音の基本周波数（Hz）
//   particleEffect: パーティクルエフェクト種別
//   secret        : trueの場合、未解除時に名前・条件を非表示
// =============================================================================

const TITLE_DEFINITIONS = [

    // =========================================================================
    // Score (Create) - スコア称号【創造チーム】7段階
    // コンセプト: ランクが上がるほど澄んだ高音・青→黄金の光へ
    // =========================================================================
    {
        id: 'sc_c_1', cat: 'Score (Create)', weight: 1,
        title: 'ネット新参者', color: 'text-gray-400', req: 'CREATE 1,000pt',
        check: s => s.team === 'create' && s.score >= 1000,
        rippleColor: 'rgba(255,255,255,0.15)', glowColor: '#6b7280',
        soundType: 'square', soundFreq: 600, particleEffect: 'sparks'
    },
    {
        id: 'sc_c_2', cat: 'Score (Create)', weight: 2,
        title: 'コードの使い手', color: 'text-green-400', req: 'CREATE 5,000pt',
        check: s => s.team === 'create' && s.score >= 5000,
        rippleColor: 'rgba(74,222,128,0.3)', glowColor: '#4ade80',
        soundType: 'square', soundFreq: 800, particleEffect: 'circuit'
    },
    {
        id: 'sc_c_3', cat: 'Score (Create)', weight: 3,
        title: '回路の騎士', color: 'text-blue-400', req: 'CREATE 10,000pt',
        check: s => s.team === 'create' && s.score >= 10000,
        rippleColor: 'rgba(96,165,250,0.4)', glowColor: '#60a5fa',
        soundType: 'sine', soundFreq: 1000, particleEffect: 'circuit'
    },
    {
        id: 'sc_c_4', cat: 'Score (Create)', weight: 4,
        title: 'データの魔導士', color: 'text-cyan-400', req: 'CREATE 15,000pt',
        check: s => s.team === 'create' && s.score >= 15000,
        rippleColor: 'rgba(34,211,238,0.5)', glowColor: '#22d3ee',
        soundType: 'sine', soundFreq: 1200, particleEffect: 'matrix'
    },
    {
        id: 'sc_c_5', cat: 'Score (Create)', weight: 5,
        title: 'アーキテクトの神', color: 'text-indigo-400', req: 'CREATE 20,000pt',
        check: s => s.team === 'create' && s.score >= 20000,
        rippleColor: 'rgba(129,140,248,0.6)', glowColor: '#818cf8',
        soundType: 'sine', soundFreq: 1400, particleEffect: 'lightning'
    },
    {
        id: 'sc_c_6', cat: 'Score (Create)', weight: 6,
        title: '神速のクリエイター', color: 'text-yellow-200', req: 'CREATE 25,000pt',
        check: s => s.team === 'create' && s.score >= 25000,
        rippleColor: 'rgba(253,230,138,0.7)', glowColor: '#fde68a',
        soundType: 'sine', soundFreq: 1600, particleEffect: 'stars'
    },
    {
        id: 'sc_c_7', cat: 'Score (Create)', weight: 7,
        title: '光の創造神', color: 'text-yellow-400', req: 'CREATE 30,000pt',
        check: s => s.team === 'create' && s.score >= 30000,
        rippleColor: 'rgba(250,204,21,0.9)', glowColor: '#facc15',
        soundType: 'sine', soundFreq: 2000, particleEffect: 'stars'
    },

    // =========================================================================
    // Score (Destroy) - スコア称号【破壊チーム】7段階
    // コンセプト: ランクが上がるほど低く唸る音・灰→深紅の闇へ
    // =========================================================================
    {
        id: 'sc_d_1', cat: 'Score (Destroy)', weight: 1,
        title: 'バイナリの迷子', color: 'text-gray-400', req: 'DESTROY 1,000pt',
        check: s => s.team === 'destroy' && s.score >= 1000,
        rippleColor: 'rgba(156,163,175,0.2)', glowColor: '#4b5563',
        soundType: 'square', soundFreq: 400, particleEffect: 'sparks'
    },
    {
        id: 'sc_d_2', cat: 'Score (Destroy)', weight: 2,
        title: 'バイナリの刺客', color: 'text-orange-400', req: 'DESTROY 5,000pt',
        check: s => s.team === 'destroy' && s.score >= 5000,
        rippleColor: 'rgba(251,146,60,0.3)', glowColor: '#fb923c',
        soundType: 'sawtooth', soundFreq: 300, particleEffect: 'glitch'
    },
    {
        id: 'sc_d_3', cat: 'Score (Destroy)', weight: 3,
        title: 'システムハンター', color: 'text-red-400', req: 'DESTROY 10,000pt',
        check: s => s.team === 'destroy' && s.score >= 10000,
        rippleColor: 'rgba(248,113,113,0.4)', glowColor: '#f87171',
        soundType: 'sawtooth', soundFreq: 250, particleEffect: 'glitch'
    },
    {
        id: 'sc_d_4', cat: 'Score (Destroy)', weight: 4,
        title: 'ブラックハットの影', color: 'text-pink-400', req: 'DESTROY 15,000pt',
        check: s => s.team === 'destroy' && s.score >= 15000,
        rippleColor: 'rgba(244,114,182,0.5)', glowColor: '#f472b6',
        soundType: 'sawtooth', soundFreq: 200, particleEffect: 'corruption'
    },
    {
        id: 'sc_d_5', cat: 'Score (Destroy)', weight: 5,
        title: 'システムブレイカー', color: 'text-purple-400', req: 'DESTROY 20,000pt',
        check: s => s.team === 'destroy' && s.score >= 20000,
        rippleColor: 'rgba(192,132,252,0.6)', glowColor: '#c084fc',
        soundType: 'sawtooth', soundFreq: 150, particleEffect: 'corruption'
    },
    {
        id: 'sc_d_6', cat: 'Score (Destroy)', weight: 6,
        title: '厄災のトリガー', color: 'text-rose-400', req: 'DESTROY 25,000pt',
        check: s => s.team === 'destroy' && s.score >= 25000,
        rippleColor: 'rgba(251,113,133,0.7)', glowColor: '#fb7185',
        soundType: 'sawtooth', soundFreq: 100, particleEffect: 'void'
    },
    {
        id: 'sc_d_7', cat: 'Score (Destroy)', weight: 7,
        title: '深淵の破壊神', color: 'text-rose-600', req: 'DESTROY 30,000pt',
        check: s => s.team === 'destroy' && s.score >= 30000,
        rippleColor: 'rgba(225,29,72,0.9)', glowColor: '#e11d48',
        soundType: 'sawtooth', soundFreq: 60, particleEffect: 'void'
    },

    // =========================================================================
    // Accuracy - 精度称号 6段階
    // =========================================================================
    {
        id: 'acc_1', cat: 'Accuracy', weight: 1,
        title: '暴走する指先', color: 'text-gray-500', req: 'Score 3000 & Acc < 50%',
        check: s => s.score >= 3000 && s.accuracy < 50,
        rippleColor: 'rgba(107,114,128,0.5)', glowColor: '#6b7280',
        soundType: 'sawtooth', soundFreq: 300, particleEffect: 'glitch'
    },
    {
        id: 'acc_2', cat: 'Accuracy', weight: 2,
        title: '安定のタイパー', color: 'text-blue-300', req: 'Score 5000 & Acc >= 90%',
        check: s => s.score >= 5000 && s.accuracy >= 90,
        rippleColor: 'rgba(147,197,253,0.4)', glowColor: '#93c5fd',
        soundType: 'triangle', soundFreq: 700, particleEffect: 'circuit'
    },
    {
        id: 'acc_3', cat: 'Accuracy', weight: 4,
        title: '精密機械', color: 'text-cyan-300', req: 'Score 8000 & Acc >= 95%',
        check: s => s.score >= 8000 && s.accuracy >= 95,
        rippleColor: 'rgba(103,232,249,0.5)', glowColor: '#67e8f9',
        soundType: 'square', soundFreq: 900, particleEffect: 'circuit'
    },
    {
        id: 'acc_4', cat: 'Accuracy', weight: 6,
        title: '凄腕のスナイパー', color: 'text-green-300', req: 'Score 12000 & Acc >= 98%',
        check: s => s.score >= 12000 && s.accuracy >= 98,
        rippleColor: 'rgba(134,239,172,0.6)', glowColor: '#86efac',
        soundType: 'square', soundFreq: 1100, particleEffect: 'lightning'
    },
    {
        id: 'acc_5', cat: 'Accuracy', weight: 8,
        title: '完璧主義者', color: 'text-yellow-300', req: 'Score 18000 & Acc >= 99%',
        check: s => s.score >= 18000 && s.accuracy >= 99,
        rippleColor: 'rgba(253,224,71,0.7)', glowColor: '#fde047',
        soundType: 'sine', soundFreq: 1300, particleEffect: 'stars'
    },
    {
        id: 'acc_6', cat: 'Accuracy', weight: 10,
        title: '奇跡の完全詠唱', color: 'text-white', req: 'Score 20000 & Acc 100%',
        check: s => s.score >= 20000 && s.accuracy === 100,
        rippleColor: 'rgba(255,255,255,1.0)', glowColor: '#ffffff',
        soundType: 'sine', soundFreq: 2500, particleEffect: 'stars'
    },

    // =========================================================================
    // Rank - ランキング称号 5段階
    // =========================================================================
    {
        id: 'rnk_1', cat: 'Rank', weight: 1,
        title: '崖っぷちエージェント', color: 'text-gray-600', req: 'Rank 10位',
        check: s => s.score > 0 && s.rank === 10,
        rippleColor: 'rgba(75,85,99,0.3)', glowColor: '#374151',
        soundType: 'sawtooth', soundFreq: 200, particleEffect: 'sparks'
    },
    {
        id: 'rnk_2', cat: 'Rank', weight: 2,
        title: '期待の新人', color: 'text-blue-200', req: 'Rank 5位以内',
        check: s => s.score > 0 && s.rank <= 5,
        rippleColor: 'rgba(191,219,254,0.4)', glowColor: '#bfdbfe',
        soundType: 'triangle', soundFreq: 800, particleEffect: 'circuit'
    },
    {
        id: 'rnk_3', cat: 'Rank', weight: 4,
        title: 'エリートエージェント', color: 'text-purple-300', req: 'Rank 3位以内',
        check: s => s.score > 0 && s.rank <= 3,
        rippleColor: 'rgba(216,180,254,0.5)', glowColor: '#d8b4fe',
        soundType: 'square', soundFreq: 1000, particleEffect: 'lightning'
    },
    {
        id: 'rnk_4', cat: 'Rank', weight: 7,
        title: 'トップランカー', color: 'text-yellow-400', req: 'Rank 1位',
        check: s => s.score > 0 && s.rank === 1,
        rippleColor: 'rgba(250,204,21,0.8)', glowColor: '#facc15',
        soundType: 'sine', soundFreq: 1500, particleEffect: 'stars'
    },
    {
        id: 'rnk_5', cat: 'Rank', weight: 9,
        title: '伝説のハッカー', color: 'text-red-500', req: 'Score 25000 & Rank 1位',
        check: s => s.score >= 25000 && s.rank === 1,
        rippleColor: 'rgba(239,68,68,0.9)', glowColor: '#ef4444',
        soundType: 'sawtooth', soundFreq: 1800, particleEffect: 'void'
    },

    // =========================================================================
    // Collection - 単語コレクション称号 6段階（上限350語に引き上げ）
    // =========================================================================
    {
        id: 'wrd_1', cat: 'Collection', weight: 1,
        title: '知識の探求者', color: 'text-green-200', req: '累計 50単語',
        check: s => s.words >= 50,
        rippleColor: 'rgba(187,247,208,0.3)', glowColor: '#bbf7d0',
        soundType: 'triangle', soundFreq: 600, particleEffect: 'sparks'
    },
    {
        id: 'wrd_2', cat: 'Collection', weight: 2,
        title: '駆け出しエージェント', color: 'text-green-300', req: '累計 100単語',
        check: s => s.words >= 100,
        rippleColor: 'rgba(134,239,172,0.4)', glowColor: '#86efac',
        soundType: 'triangle', soundFreq: 700, particleEffect: 'circuit'
    },
    {
        id: 'wrd_3', cat: 'Collection', weight: 3,
        title: '基本情報技術者', color: 'text-green-400', req: '累計 150単語',
        check: s => s.words >= 150,
        rippleColor: 'rgba(74,222,128,0.5)', glowColor: '#4ade80',
        soundType: 'square', soundFreq: 800, particleEffect: 'circuit'
    },
    {
        id: 'wrd_4', cat: 'Collection', weight: 5,
        title: '応用情報技術者', color: 'text-green-500', req: '累計 200単語',
        check: s => s.words >= 200,
        rippleColor: 'rgba(34,197,94,0.6)', glowColor: '#22c55e',
        soundType: 'square', soundFreq: 900, particleEffect: 'matrix'
    },
    {
        id: 'wrd_5', cat: 'Collection', weight: 7,
        title: '歩くデータベース', color: 'text-cyan-400', req: '累計 280単語',
        check: s => s.words >= 280,
        rippleColor: 'rgba(34,211,238,0.7)', glowColor: '#22d3ee',
        soundType: 'sine', soundFreq: 1100, particleEffect: 'matrix'
    },
    {
        id: 'wrd_6', cat: 'Collection', weight: 10,
        title: '森羅万象を知る者', color: 'text-yellow-300', req: '累計 350単語',
        check: s => s.words >= 350,
        rippleColor: 'rgba(253,224,71,0.9)', glowColor: '#fde047',
        soundType: 'sine', soundFreq: 1500, particleEffect: 'stars'
    },

    // =========================================================================
    // PlayCount - プレイ回数称号 3段階【新規】
    // =========================================================================
    {
        id: 'play_1', cat: 'PlayCount', weight: 2,
        title: '精勤エージェント', color: 'text-teal-400', req: '通算 50回プレイ',
        check: s => s.playCount >= 50,
        rippleColor: 'rgba(45,212,191,0.5)', glowColor: '#2dd4bf',
        soundType: 'triangle', soundFreq: 750, particleEffect: 'circuit'
    },
    {
        id: 'play_2', cat: 'PlayCount', weight: 5,
        title: '不滅の闘士', color: 'text-orange-300', req: '通算 100回プレイ',
        check: s => s.playCount >= 100,
        rippleColor: 'rgba(253,186,116,0.6)', glowColor: '#fdba74',
        soundType: 'square', soundFreq: 950, particleEffect: 'lightning'
    },
    {
        id: 'play_3', cat: 'PlayCount', weight: 8,
        title: '伝道のランナー', color: 'text-amber-400', req: '通算 200回プレイ',
        check: s => s.playCount >= 200,
        rippleColor: 'rgba(251,191,36,0.7)', glowColor: '#fbbf24',
        soundType: 'sine', soundFreq: 1250, particleEffect: 'stars'
    },

    // =========================================================================
    // DualTeam - 両チームプレイ称号 2段階【新規】
    // =========================================================================
    {
        id: 'dual_1', cat: 'DualTeam', weight: 6,
        title: '二刀流エージェント', color: 'text-violet-400', req: '両チームで各10,000pt達成',
        check: s => s.bestCreate >= 10000 && s.bestDestroy >= 10000,
        rippleColor: 'rgba(167,139,250,0.7)', glowColor: '#a78bfa',
        soundType: 'sine', soundFreq: 1100, particleEffect: 'lightning'
    },
    {
        id: 'dual_2', cat: 'DualTeam', weight: 9,
        title: '世界の観測者', color: 'text-fuchsia-400', req: '両チームで各20,000pt達成',
        check: s => s.bestCreate >= 20000 && s.bestDestroy >= 20000,
        rippleColor: 'rgba(232,121,249,0.8)', glowColor: '#e879f9',
        soundType: 'sine', soundFreq: 1350, particleEffect: 'stars'
    },

    // =========================================================================
    // Special - スペシャル称号 3段階（既存）
    // =========================================================================
    {
        id: 'sp_1', cat: 'Special', weight: 4,
        title: 'デュアルマスター', color: 'text-blue-300', req: 'Score 10,000 & Acc 95%',
        check: s => s.score >= 10000 && s.accuracy >= 95,
        rippleColor: 'rgba(147,197,253,0.7)', glowColor: '#93c5fd',
        soundType: 'square', soundFreq: 1000, particleEffect: 'circuit'
    },
    {
        id: 'sp_2', cat: 'Special', weight: 7,
        title: 'サイバーアサシン', color: 'text-rose-400', req: 'Score 20,000 & Acc 98%',
        check: s => s.score >= 20000 && s.accuracy >= 98,
        rippleColor: 'rgba(251,113,133,0.8)', glowColor: '#fb7185',
        soundType: 'sawtooth', soundFreq: 1500, particleEffect: 'void'
    },
    {
        id: 'sp_3', cat: 'Special', weight: 10,
        title: '完全無欠のシステム', color: 'text-white', req: 'Score 25,000 & Acc 100%',
        check: s => s.score >= 25000 && s.accuracy === 100,
        rippleColor: 'rgba(255,255,255,1.0)', glowColor: '#ffffff',
        soundType: 'sine', soundFreq: 2500, particleEffect: 'stars'
    },

    // =========================================================================
    // Faction - 陣営勝利称号 2段階【新規】
    // 自陣営が世界ゲージで60%超 かつ 累計 200,000pt
    // =========================================================================
    {
        id: 'fac_1', cat: 'Faction', weight: 8,
        title: '創造の覇者', color: 'text-yellow-300', req: '【創造】優勢時に累計 200,000pt',
        check: s => s.team === 'create' && s.gaugeCreate > 60 && s.totalContribution >= 200000,
        rippleColor: 'rgba(253,224,71,0.85)', glowColor: '#fde047',
        soundType: 'sine', soundFreq: 1700, particleEffect: 'stars'
    },
    {
        id: 'fac_2', cat: 'Faction', weight: 8,
        title: '破壊の覇者', color: 'text-purple-400', req: '【破壊】優勢時に累計 200,000pt',
        check: s => s.team === 'destroy' && s.gaugeCreate < 40 && s.totalContribution >= 200000,
        rippleColor: 'rgba(192,132,252,0.85)', glowColor: '#c084fc',
        soundType: 'sawtooth', soundFreq: 120, particleEffect: 'void'
    },

    // =========================================================================
    // Contribution - 累計貢献称号 4段階（既存）
    // =========================================================================
    {
        id: 'ct_1', cat: 'Contribution', weight: 2,
        title: '世界の歯車', color: 'text-gray-300', req: '累計 50,000pt',
        check: s => s.totalContribution >= 50000,
        rippleColor: 'rgba(209,213,219,0.4)', glowColor: '#d1d5db',
        soundType: 'triangle', soundFreq: 500, particleEffect: 'sparks'
    },
    {
        id: 'ct_2', cat: 'Contribution', weight: 5,
        title: '歴史の転換点', color: 'text-cyan-400', req: '累計 200,000pt',
        check: s => s.totalContribution >= 200000,
        rippleColor: 'rgba(34,211,238,0.6)', glowColor: '#22d3ee',
        soundType: 'sine', soundFreq: 900, particleEffect: 'matrix'
    },
    {
        id: 'ct_3', cat: 'Contribution', weight: 8,
        title: '世界を創りし者', color: 'text-yellow-400', req: '【創造】累計 500,000pt',
        check: s => s.team === 'create' && s.totalContribution >= 500000,
        rippleColor: 'rgba(250,204,21,0.9)', glowColor: '#facc15',
        soundType: 'sine', soundFreq: 1800, particleEffect: 'stars'
    },
    {
        id: 'ct_4', cat: 'Contribution', weight: 8,
        title: '世界を壊しし者', color: 'text-purple-500', req: '【破壊】累計 500,000pt',
        check: s => s.team === 'destroy' && s.totalContribution >= 500000,
        rippleColor: 'rgba(168,85,247,0.9)', glowColor: '#a855f7',
        soundType: 'sawtooth', soundFreq: 80, particleEffect: 'void'
    },

    // =========================================================================
    // Secret - 隠し称号 6種【新規】
    // ・条件は非公開（req: '???'）
    // ・未解除時は名前も '???' と表示
    // =========================================================================
    {
        id: 'sec_1', cat: 'Secret', weight: 5,
        title: '引き分け製造機', color: 'text-gray-300', req: '???',
        // 世界ゲージがゲーム終了時に 50.0% ± 0.3% のとき
        check: s => s.score > 0 && Math.abs(s.gaugeCreate - 50.0) <= 0.3,
        rippleColor: 'rgba(209,213,219,0.6)', glowColor: '#9ca3af',
        soundType: 'triangle', soundFreq: 440, particleEffect: 'sparks',
        secret: true
    },
    {
        id: 'sec_2', cat: 'Secret', weight: 3,
        title: '完璧な敗者', color: 'text-gray-600', req: '???',
        // スコア 0 で終了
        check: s => s.score === 0,
        rippleColor: 'rgba(75,85,99,0.4)', glowColor: '#4b5563',
        soundType: 'sawtooth', soundFreq: 150, particleEffect: 'void',
        secret: true
    },
    {
        id: 'sec_3', cat: 'Secret', weight: 7,
        title: '神の気まぐれ', color: 'text-emerald-300', req: '???',
        // 精度100% かつ ランキング5位以下
        check: s => s.accuracy === 100 && s.rank >= 5 && s.score > 0,
        rippleColor: 'rgba(110,231,183,0.7)', glowColor: '#6ee7b7',
        soundType: 'sine', soundFreq: 1111, particleEffect: 'stars',
        secret: true
    },
    {
        id: 'sec_4', cat: 'Secret', weight: 6,
        title: '深夜の亡霊', color: 'text-indigo-300', req: '???',
        // 深夜0〜4時にプレイ
        check: s => s.hour >= 0 && s.hour < 4 && s.score > 0,
        rippleColor: 'rgba(165,180,252,0.6)', glowColor: '#a5b4fc',
        soundType: 'sine', soundFreq: 333, particleEffect: 'void',
        secret: true
    },
    {
        id: 'sec_5', cat: 'Secret', weight: 5,
        title: 'ラッキーセブン', color: 'text-amber-300', req: '???',
        // スコアの下3桁が 777
        check: s => s.score > 777 && s.score % 1000 === 777,
        rippleColor: 'rgba(252,211,77,0.7)', glowColor: '#fcd34d',
        soundType: 'sine', soundFreq: 777, particleEffect: 'stars',
        secret: true
    },
    {
        id: 'sec_6', cat: 'Secret', weight: 10,
        title: 'ゴーストタイパー', color: 'text-slate-200', req: '???',
        // 精度99%以上 & スコア20000以上 & 通算100回以上
        check: s => s.accuracy >= 99 && s.score >= 20000 && s.playCount >= 100,
        rippleColor: 'rgba(226,232,240,0.8)', glowColor: '#e2e8f0',
        soundType: 'sine', soundFreq: 2222, particleEffect: 'stars',
        secret: true
    },

];

window.TITLE_DEFINITIONS = TITLE_DEFINITIONS;
