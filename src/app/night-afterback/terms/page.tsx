import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#ec4899";

export default function NightAfterbackTerms() {
  return (
    <Layout
      title="Nightアフターバック - 利用規約"
      description="Nightアフターバックの利用規約"
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: 13, color: "var(--light)", marginBottom: 24 }}>最終更新日：2025年9月18日</p>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>利用規約 (Terms of Use)</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>Night AfteBack（以下「本アプリ」）をご利用いただき、ありがとうございます。本利用規約（以下「本規約」）は、HIDETA UTSUNO（以下「開発者」）が提供する本アプリの利用条件を定めるものです。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>第1条（適用）</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本規約は、ユーザーと開発者との間における本アプリの利用に関わる一切の関係に適用されるものとします。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>第2条（利用登録）</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>本アプリの利用にあたり、特別な登録は不要です。アプリをダウンロード・インストールした時点で、本規約に同意したものとみなします。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>第3条（サブスクリプション）</h2>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 8 }}>プレミアム会員について</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>サービス名：</strong>Night AfteBack プレミアム</li>
            <li><strong>料金：</strong>月額480円（税込）</li>
            <li><strong>期間：</strong>1ヶ月間の自動更新</li>
            <li><strong>無料トライアル：</strong>初回7日間無料</li>
            <li><strong>決済：</strong>Apple App Store経由</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>第4条（自動更新について）</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 8px 0" }}>プレミアム会員は自動更新サブスクリプションです。解約手続きを行わない限り、毎月自動的に更新されます。</p>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 12 }}>解約方法</h3>
          <ol style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>iPhoneの「設定」アプリを開く</li>
            <li>「Apple ID」をタップ</li>
            <li>「サブスクリプション」をタップ</li>
            <li>「Night AfteBack」を選択</li>
            <li>「サブスクリプションをキャンセル」をタップ</li>
          </ol>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>第5条（プライバシー）</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>個人情報の取り扱いについては、別途定めるプライバシーポリシーに従うものとします。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>第6条（禁止事項）</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>本アプリの内容等、本アプリに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
            <li>本アプリのサーバーやネットワークの機能を破壊したり、妨害したりする行為</li>
            <li>本アプリを不正に操作する行為</li>
            <li>その他、開発者が不適切と判断する行為</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>第7条〜第13条</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>第7条（本アプリの提供の停止等）：</strong>開発者は、事前に通知することなく本アプリの全部または一部の提供を停止または中断することができるものとします。</li>
            <li><strong>第8条（免責事項）：</strong>開発者は、本アプリに事実上または法律上の瑕疵がないことを明示的にも黙示的にも保証しておりません。</li>
            <li><strong>第9条（サービス内容の変更等）：</strong>開発者は、ユーザーに通知することなく、本アプリの内容を変更しまたは提供を中止することができます。</li>
            <li><strong>第10条（利用規約の変更）：</strong>開発者は、必要と判断した場合には、いつでも本規約を変更することができるものとします。</li>
            <li><strong>第11条（個人情報の取扱い）：</strong>開発者は、個人情報については「プライバシーポリシー」に従い適切に取り扱うものとします。</li>
            <li><strong>第12条（通知または連絡）：</strong>ユーザーと開発者との間の通知または連絡は、開発者の定める方法によって行うものとします。</li>
            <li><strong>第13条（準拠法・裁判管轄）：</strong>本規約の解釈にあたっては、日本法を準拠法とします。紛争が生じた場合には、開発者の本店所在地を管轄する裁判所を専属的合意管轄とします。</li>
          </ul>
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
