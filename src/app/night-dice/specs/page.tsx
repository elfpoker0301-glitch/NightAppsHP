import Link from "next/link";
import Layout from "../../components/Layout";

const APP_COLOR = "#10b981";

export const metadata = {
  title: "仕様 - Night Dice | NightApp",
  description: "Night Diceの技術仕様と機能詳細。対応OS、システム要件、ゲーム機能について。",
};

export default function NightDiceSpecsPage() {
  return (
    <Layout>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>📱 基本情報</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong style={{ color: APP_COLOR }}>アプリ名：</strong>Night Dice - チンチロゲーム</li>
            <li><strong style={{ color: APP_COLOR }}>カテゴリ：</strong>ゲーム（ボードゲーム）</li>
            <li><strong style={{ color: APP_COLOR }}>対応OS：</strong>iOS 14.0以降</li>
            <li><strong style={{ color: APP_COLOR }}>年齢制限：</strong>12歳以上（ギャンブルのシミュレーション）</li>
            <li><strong style={{ color: APP_COLOR }}>価格：</strong>無料（広告表示あり）</li>
            <li><strong style={{ color: APP_COLOR }}>言語：</strong>日本語、英語</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>🎮 ゲーム機能</h2>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 8 }}>プレイヤー設定</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0 16px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>2人〜8人まで対応</li>
            <li>プレイヤー名のカスタマイズ可能</li>
            <li>参加人数の自由な設定</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>ゲームプレイ</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0 16px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>伝統的なチンチロルール</li>
            <li>3つのサイコロを使用</li>
            <li>役の自動判定機能</li>
            <li>スコア管理機能</li>
            <li>ターン制のゲーム進行</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>ビジュアル・サウンド</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0 16px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>美しいダイスアニメーション</li>
            <li>リアルなサイコロの物理演算</li>
            <li>直感的なUI/UXデザイン</li>
            <li>エフェクト表示</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>その他の機能</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>ヘルプ・ルール説明</li>
            <li>ゲーム設定のリセット機能</li>
            <li>広告表示（AdMob）</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>⚙️ 技術仕様・システム要件</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>開発環境：</strong>SwiftUI / Xcode</li>
            <li><strong>プログラミング言語：</strong>Swift</li>
            <li><strong>広告プラットフォーム：</strong>Google AdMob</li>
            <li><strong>データストレージ：</strong>ローカルストレージ（デバイス内）</li>
            <li><strong>推奨OS：</strong>iOS 14.0以降</li>
            <li><strong>推奨デバイス：</strong>iPhone 8以降のモデル</li>
            <li><strong>ネットワーク：</strong>安定したインターネット接続（広告表示のため）</li>
          </ul>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/night-dice" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← Night Diceに戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
