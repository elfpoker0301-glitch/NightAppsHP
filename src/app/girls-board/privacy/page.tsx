import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#a855f7";

export const metadata = {
  title: "プライバシーポリシー - Girls Board",
};

export default function GirlsBoardPrivacyPage() {
  return (
    <Layout title="Girls Board - プライバシーポリシー" description="Girls Boardのプライバシーポリシー">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: 13, color: "var(--light)", marginBottom: 24 }}>最終更新日：2026年6月28日</p>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>1. 収集する情報</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>Girls Board（以下「本アプリ」）は、ユーザーが入力する顧客情報（名前・連絡先・誕生日・来店履歴等）を外部サーバーへ送信することはありません。これらのデータはデバイス内にのみ保存されます。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>2. データの保存場所</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本アプリが扱う顧客データはユーザーのデバイスのローカルストレージにのみ保存されます。クラウドへの同期や外部への送信は行いません。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>3. 広告の配信について</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本アプリはGoogle AdMobを使用して広告を配信しています。AdMobは広告のパーソナライズや効果測定のため、広告識別子（IDFA）などの情報を収集する場合があります。初回起動時に表示されるApp Tracking Transparency（ATT）のダイアログでトラッキングの許可・拒否を選択できます。詳細はGoogleのプライバシーポリシー（<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: APP_COLOR }}>https://policies.google.com/privacy</a>）をご確認ください。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>4. 第三者への提供</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>顧客データを第三者に提供・販売・共有することは一切ありません。</p>
        </div>

        <div style={{ marginTop: 24, padding: "16px 20px", background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 10 }}>
          <p style={{ fontSize: 13, color: "var(--mid)", margin: 0 }}>
            Email: <a href="mailto:app@liv-jpn.com" style={{ color: APP_COLOR }}>app@liv-jpn.com</a>
          </p>
          <p style={{ fontSize: 13, color: "var(--light)", marginTop: 4, marginBottom: 0 }}>Developer: UTSUNO HIDETA</p>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/girls-board" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← Girls Boardに戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
