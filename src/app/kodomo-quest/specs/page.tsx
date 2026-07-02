import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#fb923c";

export const metadata = {
  title: "仕様詳細 - 子供クエスト",
};

export default function KodomoQuestSpecsPage() {
  return (
    <Layout title="子供クエスト - 仕様詳細" description="子供クエストの機能仕様">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: 13, color: "var(--light)", marginBottom: 24 }}>最終更新日：2025年11月1日</p>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>基本情報</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>アプリ名：</strong>子供クエスト</li>
            <li><strong>カテゴリ：</strong>教育・ファミリー</li>
            <li><strong>対応OS：</strong>iOS 14以降</li>
            <li><strong>対象年齢：</strong>4歳以上推奨</li>
            <li><strong>価格：</strong>無料（広告あり）</li>
            <li><strong>言語：</strong>日本語</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>主な機能</h2>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 8 }}>⚔️ クエスト機能</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>保護者がお手伝いや課題を「クエスト」として登録。子供が完了報告し、保護者が承認するとポイントが付与されます。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>🐣 キャラクター成長</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>ポイントを貯めるとキャラクターが成長します（たまご → ひな → こども → おとな → スーパー）。成長を楽しみながらやる気を維持できます。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>🎁 ごほうび機能</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>保護者がポイントと交換できるごほうびを設定。子供はポイントを使ってごほうびと交換できます。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>👨‍👩‍👧‍👦 複数子供対応</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>一つのアプリで複数のお子様を管理できます。きょうだいそれぞれのクエストやポイントを個別に管理。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>🔐 管理画面（保護者専用）</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>暗証番号で保護されたメニュー。クエスト作成・承認、ポイント調整、ごほうび設定が可能。広告はこの画面にのみ表示されます。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>技術仕様</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>開発言語：</strong>Swift / SwiftUI</li>
            <li><strong>広告SDK：</strong>Google AdMob（保護者メニューのみ）</li>
            <li><strong>データ保存：</strong>ローカルストレージ（外部送信なし）</li>
          </ul>
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
