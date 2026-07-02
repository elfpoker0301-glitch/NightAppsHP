import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#22c55e";

export default function GomiNoHiSpecsPage() {
  return (
    <Layout title="ゴミの日！ - 仕様詳細" description="ゴミの日！の詳しい機能と仕様">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>基本概要</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>アプリ名：</strong>ゴミの日！ - ゴミ収集日お知らせアプリ</li>
            <li><strong>カテゴリ：</strong>ユーティリティ / ライフスタイル</li>
            <li><strong>対応OS：</strong>iOS 17.0以降</li>
            <li><strong>価格：</strong>無料</li>
            <li><strong>開発者：</strong>HIDETA UTSUNO</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>主な機能</h2>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 8 }}>1. かんたん地域設定</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 4px 0" }}>都道府県・市区町村を選択するだけで、お住まいの地域のゴミ収集スケジュールが自動で設定されます。</p>
          <ul style={{ paddingLeft: 20, margin: "0 0 12px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>都道府県・市区町村から選択</li>
            <li>地域が見つからない場合の手動設定</li>
            <li>複数の地区（自宅・実家・職場など）を登録・切り替え可能</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>2. 通知機能</h3>
          <ul style={{ paddingLeft: 20, margin: "0 0 12px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>収集日前日の通知</li>
            <li>収集日当日の通知</li>
            <li>ゴミ出し忘れを防止</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>3. ホーム画面ウィジェット</h3>
          <ul style={{ paddingLeft: 20, margin: "0 0 12px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>WidgetKitによるホーム画面ウィジェット表示</li>
            <li>アプリを開かずに今日・明日の収集予定を確認</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>4. シンプルな操作性</h3>
          <ul style={{ paddingLeft: 20, margin: 0, color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>設定画面からいつでも地域変更が可能</li>
            <li>直感的でわかりやすいUI</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>技術仕様</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>フレームワーク：</strong>SwiftUI</li>
            <li><strong>ウィジェット：</strong>WidgetKit（App Groups対応）</li>
            <li><strong>通知：</strong>UserNotifications</li>
            <li><strong>データ保存：</strong>端末内ローカル保存</li>
            <li><strong>広告：</strong>Google AdMob（Google Mobile Ads SDK）</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>システム要件</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>対応デバイス：</strong>iPhone、iPad</li>
            <li><strong>iOS：</strong>17.0以降</li>
            <li><strong>ストレージ：</strong>最小限の空き容量で動作</li>
            <li><strong>ネットワーク：</strong>広告表示のためインターネット接続が必要</li>
          </ul>
          <p style={{ fontSize: 13, color: "var(--mid)", marginTop: 16, padding: "12px 16px", background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 8 }}>
            免責事項：本アプリは「現状有姿」で提供されます。収集日の最新情報は各自治体の公式情報をご確認ください。
          </p>
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
