import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#fb923c";

export const metadata = {
  title: "プライバシーポリシー - 子供クエスト",
};

export default function KodomoQuestPrivacyPage() {
  return (
    <Layout title="子供クエスト - プライバシーポリシー" description="子供クエストのプライバシーポリシー">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: 13, color: "var(--light)", marginBottom: 24 }}>最終更新日：2026年6月23日</p>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>1. 収集する情報</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 8px 0" }}>本アプリはGoogle AdMob広告配信のため、以下の情報を収集する場合があります：</p>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>広告識別子（IDFA）</li>
            <li>デバイス情報（機種・OSバージョン）</li>
            <li>アプリ利用状況（広告効果測定のみ）</li>
          </ul>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "8px 0 0 0" }}>これらの情報は広告配信目的のみに使用され、子供を特定する個人情報は一切収集しません。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>2. 収集しない情報</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>氏名・住所・電話番号等の個人特定情報</li>
            <li>位置情報</li>
            <li>アプリ内に入力したクエスト・ポイント等のデータ（ローカルのみ保存）</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>3. 保護者向け機能</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本アプリは暗証番号ロックによる保護者専用メニューを提供しています。広告はこの保護者メニュー内にのみ表示され、子供が直接広告に触れることがないよう配慮しています。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>4. データの保存</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>クエスト・ポイント・ごほうびなどのアプリデータはすべてデバイスのローカルストレージにのみ保存されます。外部サーバーへの送信は行いません。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>5. 情報の利用目的</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>広告の配信・最適化（AdMobのみ）</li>
            <li>アプリの品質改善</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>6. 子供のプライバシー</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本アプリは13歳未満のお子様も対象としていますが、個人を特定できる情報を収集・処理することはありません。すべてのデータはデバイス内にのみ保存され、外部に送信されることはありません。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>7. ポリシーの変更</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本ポリシーは予告なく変更される場合があります。変更後のポリシーはアプリ更新後に本ページにて確認できます。</p>
        </div>

        <div style={{ marginTop: 24, padding: "16px 20px", background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 10 }}>
          <p style={{ fontSize: 13, color: "var(--mid)", margin: 0 }}>
            Email: <a href="mailto:app@liv-jpn.com" style={{ color: APP_COLOR }}>app@liv-jpn.com</a>
          </p>
          <p style={{ fontSize: 13, color: "var(--light)", marginTop: 4, marginBottom: 0 }}>Developer: UTSUNO HIDETA</p>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/kodomo-quest" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← 子供クエストに戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
