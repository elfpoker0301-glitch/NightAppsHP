import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#ec4899";

export default function NightAfterbackPrivacy() {
  return (
    <Layout
      title="Nightアフターバック - プライバシーポリシー"
      description="個人情報の取り扱いについて"
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: 13, color: "var(--light)", marginBottom: 24 }}>最終更新日: 2025年9月18日</p>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>Night AfteBack アプリ プライバシーポリシー</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>HIDETA UTSUNO（以下「開発者」といいます）は、Night AfteBackアプリ（以下「本アプリ」といいます）における、ユーザーの個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>1. 収集する情報</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>手数料記録データ:</strong> 支払先、金額、期限などユーザーが入力した情報</li>
            <li><strong>写真・メモデータ:</strong> 手数料記録に添付された画像やメモ（デバイス内のみに保存）</li>
            <li><strong>アプリ使用状況:</strong> 広告表示のための匿名使用統計</li>
            <li><strong>課金情報:</strong> サブスクリプション購入に関する情報（Appleが管理）</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>2. 情報の使用目的</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>アプリ機能の提供（手数料管理、記録保存、バックアップ）</li>
            <li>広告配信の最適化</li>
            <li>アプリの改善とバグ修正</li>
            <li>カスタマーサポート</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>3. 情報の共有</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>Google AdMob:</strong> 広告配信のための匿名統計情報のみ</li>
            <li><strong>Apple:</strong> App Store決済処理のため</li>
            <li>手数料データ・写真は第三者と共有しません</li>
            <li>法的要請がある場合</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>4. データの保護</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>すべてのデータはデバイス内に安全に保存されます</li>
            <li>写真データは外部サーバーに送信されません</li>
            <li>バックアップデータは暗号化して保護されます（プレミアム版）</li>
            <li>アプリ削除時にすべてのデータが完全に削除されます</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>5. ユーザーの権利</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>データの削除要求</li>
            <li>データの修正要求</li>
            <li>アプリの使用停止</li>
            <li>記録・写真の任意削除</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>6. 広告について</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本アプリはGoogle AdMobを使用して広告を表示します（無料版のみ）。広告は適切な頻度で制限されており、過度な表示は行いません。プレミアム版では広告は一切表示されません。詳細はGoogleのプライバシーポリシーをご確認ください。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>7. iCloudバックアップ</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 8px 0" }}>プレミアム版では、以下のデータがiCloudに保存されます：</p>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>手数料記録データ</li>
            <li>写真・メモデータ</li>
          </ul>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "8px 0 0 0" }}>これらのデータは暗号化され、Apple社のプライバシーポリシーに従って管理されます。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>8. ポリシーの変更</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本ポリシーは予告なく変更される場合があります。重要な変更がある場合は、アプリ内で通知いたします。</p>
          <p style={{ fontSize: 13, color: "var(--light)", marginTop: 12, marginBottom: 0 }}>⚠️ 本アプリおよび本ページは法的助言を提供するものではありません。必要に応じて専門家へご相談ください。</p>
        </div>

        <div style={{ marginTop: 24, padding: "16px 20px", background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 10 }}>
          <p style={{ fontSize: 13, color: "var(--mid)", margin: 0 }}>
            Email: <a href="mailto:app@liv-jpn.com" style={{ color: APP_COLOR }}>app@liv-jpn.com</a>
          </p>
          <p style={{ fontSize: 13, color: "var(--light)", marginTop: 4, marginBottom: 0 }}>Developer: UTSUNO HIDETA</p>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/night-afterback" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← Nightアフターバックに戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
