import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#3b82f6";

export default function NightKeiyakuPrivacy() {
  return (
    <Layout
      title="Night契約書 - プライバシーポリシー"
      description="個人情報の取り扱いについて"
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: 13, color: "var(--light)", marginBottom: 24 }}>制定日：2025年8月29日</p>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>プライバシーポリシー</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>Night契約書（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>収集する情報</h2>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 8 }}>収集する情報</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>契約書データ（テキスト、署名、日付など）</li>
            <li>デバイス情報（機種、OSバージョン）</li>
            <li>利用統計データ（機能の利用頻度）</li>
          </ul>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>収集しない情報</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>氏名、住所、電話番号などの個人情報</li>
            <li>位置情報</li>
            <li>連絡先</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>データの保存</h2>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 8 }}>ローカル保存</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>契約書データは端末内に暗号化されて保存されます。</p>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>クラウド同期（プレミアム機能）</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>プレミアム機能を利用する場合、iCloudまたはGoogle Driveに同期されます。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>情報の利用目的・第三者提供</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>アプリの機能提供</li>
            <li>サービスの改善</li>
            <li>サポート対応</li>
          </ul>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "8px 0 0 0" }}>契約書データを第三者に提供することはありません。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>広告の利用（Google AdMob）</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 8px 0" }}>本アプリは、Google AdMobを使用して広告を表示します。AdMobが収集する情報：</p>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>広告ID</li>
            <li>デバイス情報</li>
            <li>アクセスログ</li>
          </ul>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "8px 0 0 0" }}>詳細は<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: APP_COLOR }}>Googleのプライバシーポリシー</a>をご確認ください。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>セキュリティ・データの削除</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>データは暗号化されて保存されます。</li>
            <li>通信はSSL/TLSで保護されます。</li>
            <li>アプリをアンインストールすることで、端末内のデータはすべて削除されます。</li>
            <li>クラウドに同期されたデータは、設定から削除できます。</li>
          </ul>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "8px 0 0 0" }}>本ポリシーは予告なく変更される場合があります。変更内容はアプリ内でお知らせします。</p>
        </div>

        <div style={{ marginTop: 24, padding: "16px 20px", background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 10 }}>
          <p style={{ fontSize: 13, color: "var(--mid)", margin: 0 }}>
            Email: <a href="mailto:app@liv-jpn.com" style={{ color: APP_COLOR }}>app@liv-jpn.com</a>
          </p>
          <p style={{ fontSize: 13, color: "var(--light)", marginTop: 4, marginBottom: 0 }}>Developer: UTSUNO HIDETA</p>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/night-keiyaku" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← Night契約書に戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
