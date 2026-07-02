import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#f97316";

export default function NightPDFPrivacy() {
  return (
    <Layout
      title="Night PDF - プライバシーポリシー"
      description="個人情報の取り扱いについて"
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: 13, color: "var(--light)", marginBottom: 24 }}>最終更新日：2025年11月26日</p>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>プライバシーポリシー</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>Night PDF（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>収集する情報</h2>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 8 }}>収集する情報</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>広告識別子（IDFA）- 広告配信のため</li>
            <li>デバイス情報（機種、OSバージョン）</li>
            <li>利用統計データ（機能の利用頻度）</li>
          </ul>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>収集しない情報</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>氏名、住所、電話番号などの個人情報</li>
            <li>位置情報</li>
            <li>連絡先</li>
            <li>PDFファイルの内容やデータ</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>データの保存</h2>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 8 }}>ローカル保存</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>編集したPDFファイルは、すべて端末内に暗号化されて保存されます。</p>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>クラウド保存</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本アプリは、クラウド上にデータを保存しません。すべての処理は端末内で完結します。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>情報の利用目的・第三者提供</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>アプリの機能提供</li>
            <li>サービスの改善</li>
            <li>サポート対応</li>
            <li>広告の表示と最適化</li>
          </ul>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "8px 0 0 0" }}>本アプリで編集したPDFファイルやデータを第三者に提供することはありません。例外：法令に基づく開示要請があった場合、または利用規約違反が認められた場合に限り、必要最小限の情報を提供する場合があります。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>広告の利用（Google AdMob）</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 8px 0" }}>本アプリは、Google AdMobを使用して広告を表示します。AdMobが収集する情報：</p>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>広告識別子（IDFA）</li>
            <li>デバイス情報</li>
            <li>アクセスログ</li>
            <li>広告インタラクション</li>
          </ul>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "8px 0" }}>詳細は<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: APP_COLOR }}>Googleのプライバシーポリシー</a>をご確認ください。</p>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>広告のパーソナライゼーションをオフにする方法</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>iOS:</strong> 設定 → プライバシー → 追跡 → 「Appからのトラッキング要求を許可」をオフ</li>
            <li><strong>iOS:</strong> 設定 → プライバシー → Apple広告 → 「パーソナライズされた広告」をオフ</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>セキュリティ・データの削除・ポリシーの変更</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>PDFファイルは端末内で暗号化されて保存されます。</li>
            <li>通信はSSL/TLSで保護されます。</li>
            <li>本アプリは13歳未満の子供を対象としていません。</li>
            <li>アンインストールすることで、端末内のデータはすべて削除されます。アンインストール前にバックアップしてください。</li>
          </ul>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "8px 0 0 0" }}>本ポリシーは予告なく変更される場合があります。変更内容はアプリ内またはウェブサイトでお知らせします。</p>
        </div>

        <div style={{ marginTop: 24, padding: "16px 20px", background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 10 }}>
          <p style={{ fontSize: 13, color: "var(--mid)", margin: 0 }}>
            Email: <a href="mailto:app@liv-jpn.com" style={{ color: APP_COLOR }}>app@liv-jpn.com</a>
          </p>
          <p style={{ fontSize: 13, color: "var(--light)", marginTop: 4, marginBottom: 0 }}>Developer: UTSUNO HIDETA</p>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/night-pdf" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← Night PDFに戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
