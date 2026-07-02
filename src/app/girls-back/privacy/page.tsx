import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#f59e0b";

export const metadata = {
  title: "プライバシーポリシー - Girls Back",
};

export default function GirlsBackPrivacyPage() {
  return (
    <Layout title="Girls Back - プライバシーポリシー" description="Girls Backのプライバシーポリシー">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: 13, color: "var(--light)", marginBottom: 24 }}>最終更新日：2025年6月20日</p>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>1. 収集する情報</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>Girls Back（以下「本アプリ」）は、外部サーバーへの個人情報の送信を一切行いません。ユーザーが入力するすべてのデータ（アフターバック記録・店舗情報等）はデバイス内にのみ保存されます。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>2. データの保存場所</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本アプリが扱うすべてのデータはユーザーのデバイスのローカルストレージにのみ保存されます。クラウドへの同期や外部への送信は行いません。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>3. 第三者への提供</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>ユーザーのデータを第三者に提供・販売・共有することは一切ありません。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>4. セキュリティ</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本アプリはパスコードロック機能を提供しています。パスコードはデバイス内にのみ保存され、外部に送信されることはありません。</p>
        </div>

        <div style={{ marginTop: 24, padding: "16px 20px", background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 10 }}>
          <p style={{ fontSize: 13, color: "var(--mid)", margin: 0 }}>
            Email: <a href="mailto:app@liv-jpn.com" style={{ color: APP_COLOR }}>app@liv-jpn.com</a>
          </p>
          <p style={{ fontSize: 13, color: "var(--light)", marginTop: 4, marginBottom: 0 }}>Developer: UTSUNO HIDETA</p>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/girls-back" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← Girls Backに戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
