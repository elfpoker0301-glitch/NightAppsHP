import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#3b82f6";

export default function NightKeiyakuSpecs() {
  return (
    <Layout
      title="Night契約書 - 仕様詳細"
      description="機能と技術仕様について詳しくご説明します"
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>📝 基本概要</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>アプリ名：</strong>Night契約書</li>
            <li><strong>Bundle ID：</strong>com.nightcontract.app</li>
            <li><strong>対応OS：</strong>iOS 14.0以降、macOS 11.0以降</li>
            <li><strong>カテゴリ：</strong>ビジネス・効率化</li>
            <li><strong>言語：</strong>日本語</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>⭐ 主な機能</h2>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 8 }}>1. 契約書作成</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>テンプレート選択：</strong>労働基準法に準拠した契約書テンプレート</li>
            <li><strong>自動入力：</strong>会社情報・従業員情報をフォームから自動反映</li>
            <li><strong>夜間労働特化：</strong>ナイトワークに合わせた条項をカスタマイズ可能</li>
            <li><strong>リアルタイムプレビュー：</strong>作成中の契約書を即時確認</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>2. PDF出力・共有</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>高品質PDF生成：</strong>見やすいプロフェッショナルなレイアウト</li>
            <li><strong>署名機能：</strong>デジタル署名対応</li>
            <li><strong>共有オプション：</strong>メール送信／クラウド保存／印刷</li>
            <li><strong>セキュリティ：</strong>パスワード保護機能付き</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>3. 契約管理</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>契約一覧：</strong>作成済み契約を一括管理</li>
            <li><strong>検索・フィルター：</strong>従業員名・日付で検索</li>
            <li><strong>ステータス管理：</strong>作成中／完了／更新予定</li>
            <li><strong>更新通知：</strong>契約更新時期を自動リマインド</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>4. データ管理</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>バックアップ・復元：</strong>データ消失に備えた保存機能</li>
            <li><strong>インポート・エクスポート：</strong>他システムと連携可能</li>
            <li><strong>クラウド同期：</strong>複数デバイス間でデータ共有</li>
            <li><strong>データ暗号化：</strong>強固なセキュリティで個人情報を保護</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>⚙️ 技術仕様</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>開発言語：</strong>Flutter / Dart</li>
            <li><strong>データベース：</strong>SQLite + Cloud Storage</li>
            <li><strong>PDF生成：</strong>flutter_pdf</li>
            <li><strong>署名機能：</strong>signature + crypto暗号化</li>
            <li><strong>広告：</strong>Google AdMob統合</li>
          </ul>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>システム要件</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>iOS：14.0以降</li>
            <li>macOS：11.0以降</li>
            <li>容量：50MB以上</li>
            <li>ネットワーク：インターネット接続必須（同期機能あり）</li>
          </ul>
          <p style={{ fontSize: 13, color: "var(--light)", marginTop: 16, marginBottom: 0 }}>⚠️ 免責：本アプリおよび本ページは法的助言を提供するものではありません。必要に応じて専門家へご相談ください。</p>
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
