# Handoff: Homepage 全面リニューアル（白ベース）

## Overview
NightApp の LP（`src/app/page.tsx`）を、従来の黒ベースダークテーマから、エディトリアル感のある白ベースデザインへ全面リニューアルする。デザインリファレンスは `NightApp.dc.html`（同梱）。

## About the Design Files
同梱の `NightApp.dc.html` は **HTML プロトタイプ（デザインリファレンス）** であり、プロダクションコードとして直接使うものではない。Next.js / TypeScript / Tailwind CSS で既存コードベースのパターンに沿って再実装すること。

## Fidelity
**High-fidelity（ハイファイ）** — 色・タイポグラフィ・スペーシング・インタラクションすべてピクセル単位で忠実に再現すること。

---

## 対象ファイル / 変更スコープ

| ファイル | 変更内容 |
|---|---|
| `src/app/globals.css` | CSS 変数をライトテーマへ全面更新 |
| `src/app/layout.tsx` | themeColor・body クラス更新 |
| `src/app/page.tsx` | 全面書き直し（下記レイアウト参照） |
| `src/app/components/Navigation.tsx` | ライトテーマ対応ナビゲーション |

---

## デザイントークン

### フォント
`globals.css` の Google Fonts インポートに **Syne** を追加：
```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');
```

| 用途 | Font Family | Weight | Size |
|---|---|---|---|
| セクション番号・ヒーロー H1・カードタイトル | Syne | 800 | 各セクション参照 |
| セクションラベル・ナビ | DM Sans | 600 | 11–14px |
| 本文・説明 | DM Sans | 400–500 | 12–17px |

### CSS 変数（`globals.css` を書き換え）
```css
:root {
  --bg: #ffffff;
  --bg2: #f5f5f5;
  --text: #0c0c0c;
  --mid: #606060;
  --light: #a0a0a0;
  --line: #e2e2e2;
  --line-mid: #c8c8c8;
}
```

アプリ別アクセントカラー（変更なし）：
| アプリ | カラー |
|---|---|
| Night名簿帳 | `#8b5cf6` |
| Night契約書 | `#3b82f6` |
| Nightアフターバック | `#ec4899` |
| Night PDF | `#f97316` |
| Girls Back | `#f59e0b` |
| Night Dice | `#10b981` |
| 子供クエスト | `#fb923c` |
| ゴミの日！ | `#22c55e` |

---

## 画面・セクション詳細

### 1. Navigation（固定ヘッダー）
- 背景: `rgba(255,255,255,0.92)` + `backdrop-filter: blur(12px)`
- スクロール 40px 超で下ボーダー `1px solid #e2e2e2` が出現（transition: border-color 0.25s）
- 高さ: 64px, padding: 0 48px, `max-width: 1280px` センタリング
- ロゴ: 2×2 グリッド（各マス: 2.5px gap, 18×18px）
  - 左上: `#8b5cf6`, 右上: `#ec4899`, 左下: `#3b82f6`, 右下: `#f97316`
  - テキスト: Syne 700, 16px, `#0c0c0c`, "App Collection"
- リンク: DM Sans 500, 14px, color `#606060`, hover → `#0c0c0c` (transition 0.2s)
- CTA ボタン: `background: #0c0c0c; color: #fff`, padding 8px 20px, border-radius 6px, font-size 13px, font-weight 600

### 2. Hero セクション
- レイアウト: `display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr);`
- 高さ: `min-height: 100vh`, padding-top: 64px（ナビ分）
- 背景: 白 + ドットグリッド `radial-gradient(circle, #d8d8d8 1px, transparent 1px)`, `background-size: 28px 28px`, opacity 0.5

#### 左カラム（テキスト）
padding: 80px 60px 80px 80px

**エントリーアニメーション（重要）:**
CSS animation では DC 再レンダリングでリセットされる不具合があったため、React state で制御すること：
```tsx
const [ready, setReady] = useState(false);
useEffect(() => { const t = setTimeout(() => setReady(true), 60); return () => clearTimeout(t); }, []);

const heroReveal = {
  opacity: ready ? 1 : 0,
  transform: ready ? 'translateY(0)' : 'translateY(20px)',
  transition: 'opacity .55s, transform .55s',
};
```
左カラム全コンテンツをこの style を持つ `<div>` で包む。

**タグライン（H1 の上）:**
- flex row, gap 10px, margin-bottom 40px
- 紫ドット: 6px × 6px, border-radius 50%, background #8b5cf6
- テキスト: DM Sans 600, 11px, letter-spacing 0.18em, uppercase, color `#606060`
  "iOS App Collection"
- 区切り線: flex:1, height 1px, background `#e2e2e2`, max-width 60px
- "8 APPS": DM Sans 600, 11px, letter-spacing 0.1em, color `#a0a0a0`

**H1:**
```
font-family: Syne
font-size: clamp(72px, 7.5vw, 108px)
font-weight: 800
line-height: 0.88
letter-spacing: -4px
margin: 0 0 32px
color: #0c0c0c
```
テキスト: "App\n[Coll]ection[.]"
"Coll" と末尾の "." は `color: #8b5cf6`

**サブタイトル:**
- font-size: 17px, color: `#606060`, line-height: 1.75, margin-bottom: 48px, max-width: 400px
- テキスト: "ナイト業界から日常生活まで\nあらゆるシーンを支えるアプリスイート"

**CTA ボタン群:** flex row, gap 12px
- プライマリ: background `#0c0c0c`, color `#fff`, padding 14px 28px, border-radius 8px, font-size 15px, font-weight 600
  テキスト: "アプリを見る →"（→ は SVG Arrow）
- セカンダリ: border `1.5px solid #c8c8c8`, color `#0c0c0c`, padding 13px 28px, border-radius 8px, font-size 15px, font-weight 500
  テキスト: "お問い合わせ"

**ミニスタッツ:** margin-top 64px, padding-top 40px, border-top `1px solid #e2e2e2`
flex row, gap 40px, 縦の区切り `width:1px; background:#e2e2e2`

| 数値 | 色 | ラベル |
|---|---|---|
| 8+ | `#0c0c0c` ("+": `#8b5cf6` 20px) | アプリ数 |
| iOS | `#3b82f6` | 対応プラットフォーム |
| 100% | `#0c0c0c` ("%": `#ec4899` 20px) | セキュア設計 |

数値: Syne 800, 32px, letter-spacing -1px  
ラベル: DM Sans 500, 12px, `#a0a0a0`, margin-top 2px

#### 右カラム（アプリモザイク）
padding: 100px 80px 80px 40px, flex center

4×2 グリッド, gap 12px, max-width 380px

各タイル:
- aspect-ratio: 1, border-radius: 20px
- background: アプリの solid カラー
- box-shadow: `0 12px 32px rgba(R,G,B,.28)`
- animation: float（CSS @keyframes, 3.8s ease-in-out infinite, 各タイル異なる delay）
  `@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }`
- 中身: アプリ文字（Syne 800, 18px, white）+ アプリ名（7px, rgba(255,255,255,.7), center）

タイル順（左上から右下へ）:
`名(#8b5cf6, 0s)`, `契(#3b82f6, 0.5s)`, `ア(#ec4899, 1s)`, `PDF(#f97316, 1.5s)`,
`🎲(#10b981, 2s)`, `G(#f59e0b, 2.5s)`, `⭐(#fb923c, 0.3s)`, `🗑(#22c55e, 0.8s)`

---

### 3. マーキー（スクロールテキスト帯）
- background: `#0c0c0c`, padding: 18px 0, border-top: `1px solid #1a1a1a`
- テキスト: DM Sans 600, 12px, letter-spacing 0.14em, uppercase, `rgba(255,255,255,.35)`
- 内容: "Night名簿帳　/　Night契約書　/　Nightアフターバック　/　Night PDF　/　Night Dice　/　Girls Back　/　子供クエスト　/　ゴミの日！　/　" × 2
- アニメーション: `@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }`
  28秒 linear infinite

---

### 4. アプリセクション
padding: 100px 80px 80px, max-width 1280px センタリング

#### セクションヘッダー（01 / 02 共通）
display: grid, grid-template-columns: auto 1fr, gap 32px, align-items: end
border-bottom: `1.5px solid #0c0c0c`, padding-bottom 28px, margin-bottom 52px

- 左: 大きな番号（Syne 800, 80px, `#c8c8c8`, letter-spacing -4px）の下にタイトル（Syne 800, 28px, `#0c0c0c`）
- 右（padding-bottom 6px）: アクセントドット + LABEL（uppercase, DM Sans 600, 11px, letter-spacing 0.15em） + 説明文（14px, `#606060`）

#### Night Industry カード（5カラムグリッド）
grid-template-columns: repeat(5, 1fr), gap 14px, margin-bottom 80px

各カード:
- border: `1.5px solid #e2e2e2`, border-radius 14px, overflow hidden
- hover: translateY(-6px), box-shadow `0 20px 48px rgba(R,G,B,.16)`, border-color → アプリカラー
- transition: transform 0.22s, box-shadow 0.22s, border-color 0.22s

**カードヘッダー帯（上部）:**
- background: アプリのソリッドカラー, padding: 14px 16px
- flex row, space-between
- 左: アイコンアバター（32×32px, border-radius 9px, rgba(255,255,255,.22)背景, Syne 800 15px white文字）
- 右: カテゴリラベル（DM Sans 700, 10px, letter-spacing 0.08em, uppercase, rgba(255,255,255,.8)）

**カードボディ（下部）:**
padding: 14px 16px, flex column, gap 10px

- タイトル: Syne 800, 15px, `#0c0c0c`, letter-spacing -0.2px
- 機能チップ群: flex-wrap, gap 4px
  各チップ: font-size 10px, font-weight 600, color アプリカラー,
  background rgba(R,G,B,.08), padding 3px 8px, border-radius 100px,
  border `1px solid rgba(R,G,B,.18)`
- ボタン: flex column, gap 5px, margin-top auto

ボタンスタイル:
- App Store ボタン（App Storeリンクがあるアプリのみ）: background アプリカラー, color #fff, padding 8px, border-radius 7px, font-size 11.5px, font-weight 600, Apple SVG アイコン付き
- 詳細を見るボタン: border `1.5px solid #e2e2e2`, color `#606060`, padding 7px, border-radius 7px, font-size 11.5px, font-weight 500

各アプリの機能チップ:
| アプリ | チップ | App Store |
|---|---|---|
| Night名簿帳 | 顧客情報管理 / データ保護 / PDF出力 | id6749575718 |
| Night契約書 | 電子契約書 / クラウド保存 / 法的効力 | なし |
| Nightアフターバック | アフター予約 / 顧客分析 / リマインダー | id6751783629 |
| Night PDF | バケツ塗り / PDF編集 / リアルタイム描画 | id6755779324 |
| Girls Back | バック収入管理 / 未収管理 / 6ヶ月グラフ | なし |

#### General Apps カード（3カラムグリッド）
grid-template-columns: repeat(3, 1fr), gap 16px

各カード: ヘッダー帯 padding 24px（Night Industry より大きめ）
機能表示: チップではなく `flex-wrap; gap 8px` のより大きなチップ（padding 4px 10px, font-size 11px）
ボタン: padding 11px, font-size 13px

| アプリ | チップ | App Store |
|---|---|---|
| Night Dice | 2〜8人対戦 / チンチロ / パーティー向け | なし |
| 子供クエスト | クエスト制 / キャラ成長 / 無料 | なし |
| ゴミの日！ | 地域設定 / 当日通知 / ウィジェット | id6782357102 |

---

### 5. CTA バナー
background: `#0c0c0c`, border-radius 24px, padding: 64px 72px
grid: 1fr auto, gap 48px

- 左: 小ラベル（11px, letter-spacing 0.16em, uppercase, rgba(255,255,255,.4)）+ H2（Syne 800, clamp(36px,4vw,56px), #fff）+ 説明（16px, rgba(255,255,255,.45)）
- 右: ボタン縦並び（gap 12px, min-width 200px）
  - プライマリ: background #8b5cf6, color #fff, padding 16px 32px, border-radius 10px, 15px, 700
  - セカンダリ: border `1.5px solid rgba(255,255,255,.15)`, color rgba(255,255,255,.7), 同サイズ

---

### 6. Footer
padding: 28px 80px, border-top: `1px solid #e2e2e2`
flex, justify-content: space-between, align-items: center

- 左: ロゴ（ナビと同形状 14×14px） + "App Collection"（Syne 700, 13px） + "© 2025 UTSUNO HIDETA."（11.5px, `#a0a0a0`）
- 右: リンク群（12.5px, `#a0a0a0`, hover → `#0c0c0c`, gap 28px）: お知らせ / お問い合わせ / AdMob

---

## インタラクション一覧

| インタラクション | 実装 |
|---|---|
| ヒーロー フェードイン | useState(false) → useEffect setTimeout 60ms → setState(true), opacity+translateY transition 0.55s |
| ナビ スクロールボーダー | window scroll listener, scrollY > 40 で border-bottom 表示 |
| カードホバー | translateY(-6px) + box-shadow + border-color → アプリカラー |
| スムーススクロール | `#apps` へのアンカーリンク, scroll-behavior: smooth (globals.css 設定済み) |
| マーキー | CSS animation marquee 28s linear infinite |
| アプリタイル float | CSS animation float 3.8s ease-in-out infinite (各タイル delay 違い) |

---

## Assets
同梱ファイル:
- `NightApp.dc.html` — 完成デザインのHTMLプロトタイプ（ブラウザで開いて確認可能）
- `girls-back-icon.png` — Girls Back アイコン（既存）
- `girls-board-icon.png` — Girls Board アイコン（既存）

Apple ロゴ SVG（App Store ボタン用）:
```svg
<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zm-2.02-15.03c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
```

Arrow SVG（CTAボタン用）:
```svg
<path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
```

---

## 注意事項

1. **float アニメーション** — CSS animation は Next.js の `'use client'` コンポーネント内でのみ機能。ヒーロー右カラムを Client Component にすること。
2. **ヒーローのフェードイン** — CSS animation-fill-mode:both は React の再レンダリングでリセットされるため必ず useState + useEffect で実装（上記参照）。
3. **グリッド最小幅** — `grid-template-columns: minmax(0,1fr) minmax(0,1fr)` で h1 の min-content によるカラム崩れを防ぐ。
4. **Tailwind v4** — このプロジェクトは `@import "tailwindcss"` (v4) を使用。クラス名の変更点に注意。
5. **globals.css 更新時** — `themeColor` を `layout.tsx` の viewport export でも `#ffffff` に変更すること。
