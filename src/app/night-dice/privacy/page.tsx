import Link from "next/link";
import Layout from "../../components/Layout";

const APP_COLOR = "#10b981";

export const metadata = {
  title: "プライバシーポリシー - Night Dice | NightApp",
  description: "Night Diceのプライバシーポリシー。個人情報の取り扱いについて。",
};

export default function NightDicePrivacyPage() {
  return (
    <Layout>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: 13, color: "var(--light)", marginBottom: 24 }}>最終更新日: 2025年11月28日</p>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>1. はじめに</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>Night Dice（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>2. 収集する情報</h2>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 8 }}>2.1 広告配信に関する情報</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 8px 0" }}>本アプリはGoogle AdMobを使用して広告を表示しています。AdMobは、広告配信の最適化のために以下の情報を収集する場合があります：</p>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>デバイス情報（デバイスの種類、OS、広告ID等）</li>
            <li>アプリの使用状況</li>
            <li>IPアドレス</li>
            <li>位置情報（概算）</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>3. 情報の利用目的</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>広告の配信と最適化</li>
            <li>アプリの改善とパフォーマンスの向上</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>4. 第三者への情報提供</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 8px 0" }}>本アプリは、Google AdMobを通じて広告配信サービスを利用しています。AdMobのプライバシーポリシー：</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: APP_COLOR }}>https://policies.google.com/privacy</a></p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>5. データの保存</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本アプリ自体は、ユーザーの個人情報をサーバーに保存しません。ゲームの設定やプレイヤー名などは、デバイスのローカルストレージにのみ保存されます。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>6. お子様のプライバシー</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本アプリは13歳未満のお子様から意図的に個人情報を収集することはありません。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>7. データの削除</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>アプリをアンインストールすることで、デバイスに保存されたすべてのデータが削除されます</li>
            <li>広告IDに関する設定は、デバイスの設定から変更できます</li>
          </ul>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>広告IDについて（iOSでの制限方法）</h3>
          <ol style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>「設定」アプリを開く</li>
            <li>「プライバシーとセキュリティ」をタップ</li>
            <li>「トラッキング」をタップ</li>
            <li>「Appからのトラッキング要求を許可」をオフにする</li>
          </ol>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>8. プライバシーポリシーの変更</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本プライバシーポリシーは、必要に応じて変更される場合があります。変更がある場合は、本ページにて通知いたします。</p>
        </div>

        <div style={{ marginTop: 24, padding: "16px 20px", background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 10 }}>
          <p style={{ fontSize: 13, color: "var(--mid)", margin: 0 }}>
            Email: <a href="mailto:app@liv-jpn.com" style={{ color: APP_COLOR }}>app@liv-jpn.com</a>
          </p>
          <p style={{ fontSize: 13, color: "var(--light)", marginTop: 4, marginBottom: 0 }}>Developer: UTSUNO HIDETA</p>
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
