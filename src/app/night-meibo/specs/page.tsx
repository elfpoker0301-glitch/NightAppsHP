import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#8b5cf6";

export default function NightMeiboSpecs() {
  return (
    <Layout
      title="Night名簿帳 - 仕様詳細"
      description="機能と技術仕様について詳しくご説明します"
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>📝 基本概要</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>Night名簿帳は、ナイト業界で働くスタッフの情報を効率的に管理するための専用アプリです。</p>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>対応環境</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>iOS 12.0以降</li>
            <li>iPhone、iPad対応</li>
          </ul>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>開発者情報</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>開発者: HIDETA UTSUNO</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>🔧 主な機能</h2>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>📋 スタッフ管理</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>スタッフの基本情報登録（名前、年齢、連絡先等）</li>
            <li>身分証明書の写真撮影・保存</li>
            <li>勤務店舗の割り当て</li>
            <li>職位・ランクの設定</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>🏪 店舗管理</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>複数店舗の情報管理</li>
            <li>店舗別スタッフ配置</li>
            <li>店舗情報の編集・削除</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>📄 出力機能</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>PDF形式でのスタッフリスト出力</li>
            <li>Excel形式でのデータエクスポート</li>
            <li>印刷・共有機能</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>📱 写真管理</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>カメラ撮影・ギャラリー選択</li>
            <li>身分証明書の安全な保存</li>
            <li>写真の閲覧・削除</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>📊 技術仕様</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>プラットフォーム: iOS（iPhone・iPad対応）</li>
            <li>開発環境: Flutter 3.32.8</li>
            <li>対応OS: iOS 12.0以降（システム要件: iOS 14.0以降）</li>
            <li>データベース: SQLite（ローカル）</li>
            <li>広告: Google AdMob</li>
            <li>課金: App Store In-App Purchase</li>
            <li>容量: 50MB以上</li>
            <li>ネットワーク: インターネット接続必須（同期機能あり）</li>
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
