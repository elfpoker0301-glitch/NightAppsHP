import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#22c55e";

export default function GomiNoHiPrivacyPage() {
  return (
    <Layout title="ゴミの日！ - プライバシーポリシー" description="個人情報の取り扱いについて">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: 13, color: "var(--light)", marginBottom: 24 }}>最終更新日：2026年6月21日</p>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>1. 収集する情報</h2>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 8 }}>収集する情報</h3>
          <ul style={{ paddingLeft: 20, margin: "0 0 12px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>広告識別子（IDFA）- 広告配信のため</li>
            <li>デバイス情報（機種、OSバージョン）</li>
            <li>利用統計データ（機能の利用頻度）</li>
            <li>通知設定の許可状態</li>
          </ul>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>収集しない情報</h3>
          <ul style={{ paddingLeft: 20, margin: 0, color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>氏名、メールアドレス、電話番号などの個人情報</li>
            <li>正確な位置情報</li>
            <li>連絡先</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>2. データの保存</h2>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 8 }}>ローカル保存</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>選択した地域情報や収集スケジュール、通知設定は、すべて端末内に保存されます。</p>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>クラウド保存について</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本アプリは、ユーザーデータをクラウド上のサーバーに送信・保存しません。すべての処理は端末内で完結します。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>3. 情報の利用目的</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>アプリの機能提供（ゴミ収集日の通知・ウィジェット表示）</li>
            <li>サービスの改善</li>
            <li>サポート対応</li>
            <li>広告の表示と最適化</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>4. 第三者提供</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 8px 0" }}>本アプリで設定した地域情報やスケジュールデータを第三者に提供することはありません。</p>
          <p style={{ fontSize: 13, color: "var(--mid)", padding: "12px 16px", background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 8 }}>
            例外：法令に基づく開示要請があった場合、または利用規約違反が認められた場合に限り、必要最小限の情報を提供する場合があります。
          </p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>5. 広告の利用（Google AdMob）</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>本アプリは、Google AdMobを使用して広告を表示します。</p>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 8 }}>AdMobが収集する情報</h3>
          <ul style={{ paddingLeft: 20, margin: "0 0 12px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>広告識別子（IDFA）</li>
            <li>デバイス情報</li>
            <li>アクセスログ</li>
            <li>広告インタラクション</li>
          </ul>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 16px 0" }}>
            詳細は<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: APP_COLOR }}>Googleのプライバシーポリシー</a>をご確認ください。
          </p>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>広告のパーソナライゼーションをオフにする方法</h3>
          <ul style={{ paddingLeft: 20, margin: 0, color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>iOS: 設定 → プライバシー → 追跡 → 「Appからのトラッキング要求を許可」をオフ</li>
            <li>iOS: 設定 → プライバシー → Apple広告 → 「パーソナライズされた広告」をオフ</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>6. 通知について</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本アプリは、ゴミ収集日の前日・当日にお知らせするために通知の許可を求めます。通知は端末内のスケジュールに基づき送信され、外部サーバーとの通信は行いません。通知の許可は、いつでも端末の設定からオフにすることができます。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>7. セキュリティ</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>ユーザーデータは端末内に保存されます。</li>
            <li>通信が発生する場合はSSL/TLSで保護されます。</li>
            <li>不正アクセスを防止するため、適切なセキュリティ対策を実施しています。</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>8. データの削除</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本アプリをアンインストールすることで、端末内に保存された地域情報やスケジュールデータはすべて削除されます。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>9. 子供のプライバシー</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本アプリは、13歳未満の子供を対象としていません。13歳未満の子供から意図的に個人情報を収集することはありません。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>10. ポリシーの変更</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本ポリシーは予告なく変更される場合があります。変更内容はアプリ内またはウェブサイトでお知らせします。定期的に本ページを確認することをお勧めします。</p>
        </div>

        <div style={{ marginTop: 24, padding: "16px 20px", background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 10 }}>
          <p style={{ fontSize: 13, color: "var(--mid)", margin: 0 }}>
            Email: <a href="mailto:app@liv-jpn.com" style={{ color: APP_COLOR }}>app@liv-jpn.com</a>
          </p>
          <p style={{ fontSize: 13, color: "var(--light)", marginTop: 4, marginBottom: 0 }}>Developer: UTSUNO HIDETA</p>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/gomi-no-hi" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← ゴミの日！に戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
