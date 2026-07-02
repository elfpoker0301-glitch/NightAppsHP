import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#8b5cf6";

export default function NightMeiboSupport() {
  return (
    <Layout
      title="Night名簿帳 - サポート"
      description="Night名簿帳に関するサポート情報"
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>■ よくある質問</h2>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 20 }}>【プレミアムプランについて】</h3>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q: プレミアムプランの料金は？</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A: 月額300円です。7日間の無料トライアルもご利用いただけます。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q: プレミアムプランの特典は？</p>
          <ul style={{ paddingLeft: 20, margin: "0 0 12px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>広告の完全非表示</li>
            <li>データのバックアップ・復元機能</li>
          </ul>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q: 解約方法は？</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A: iPhone/iPadの設定アプリ &gt; App Store &gt; サブスクリプション から管理できます。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 20 }}>【データについて】</h3>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q: データは安全ですか？</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A: すべてのデータはお客様のデバイス内にのみ保存され、外部に送信されることはありません。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q: データのバックアップは？</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A: プレミアムプランにて、iCloudを利用したバックアップ機能をご利用いただけます。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 20 }}>【操作について】</h3>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q: スタッフの写真が保存できません</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A: カメラ・フォトライブラリへのアクセス許可が必要です。設定アプリでアクセス許可をご確認ください。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q: PDFが出力できません</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>A: iOS標準の共有機能を使用しています。他のアプリとの競合がある場合は、端末の再起動をお試しください。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>📩 お問い合わせ</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>メール：</strong><a href="mailto:app@liv-jpn.com" style={{ color: APP_COLOR }}>app@liv-jpn.com</a></li>
            <li><strong>アプリ内：</strong>「設定 ＞ お問い合わせ」から送信可能</li>
            <li><strong>対応時間：</strong>平日 9:00〜18:00</li>
            <li><strong>回答目安：</strong>24時間以内</li>
          </ul>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/night-meibo" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← Night名簿帳に戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
