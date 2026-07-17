import Layout from "../../components/Layout";

const APP_COLOR = "#C9A227";

export default function ZeimuCalendarTerms() {
  return (
    <Layout
      title="税務カレンダー - 利用規約"
      description="税務カレンダーの利用規約"
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: 13, color: "var(--light)", marginBottom: 24 }}>制定日：2026年7月17日</p>

        {[
          {
            title: "第1条（適用）",
            content: "本規約は、税務カレンダー（以下「本アプリ」）の利用に関する条件を定めるものです。本アプリをご利用の方（以下「ユーザー」）は本規約に同意したものとみなします。"
          },
          {
            title: "第2条（利用料金）",
            content: "本アプリは無料でダウンロードでき、基本機能を無料でご利用いただけます。プレミアムプランは月額120円（税込）のサブスクリプションです。料金はApp Storeアカウントを通じて請求されます。サブスクリプションは自動更新され、更新日の24時間前までにキャンセルしない限り自動的に継続されます。"
          },
          {
            title: "第3条（税務情報の免責）",
            content: "本アプリが提供する税務期限・税務情報は参考情報です。税法の改正・特例・個別の事情により実際の期限が異なる場合があります。申告・納付にあたっては、必ず所轄の税務署または税理士にご確認ください。本アプリの情報に基づく申告漏れ・延滞税等について、開発者は一切の責任を負いません。"
          },
          {
            title: "第4条（禁止事項）",
            content: "ユーザーは以下の行為を行ってはなりません。\n・本アプリの逆コンパイル・リバースエンジニアリング\n・本アプリを用いた違法行為\n・他のユーザーへの迷惑行為\n・その他開発者が不適切と判断する行為"
          },
          {
            title: "第5条（サービスの変更・終了）",
            content: "開発者は、ユーザーへの事前通知なく本アプリの内容を変更、または提供を終了する場合があります。これによりユーザーに損害が生じた場合でも、開発者は責任を負わないものとします。"
          },
          {
            title: "第6条（免責事項）",
            content: "本アプリの利用により生じた損害（データの消失・申告遅延等）について、開発者は一切の責任を負いません。本アプリは現状有姿で提供されます。"
          },
          {
            title: "第7条（準拠法・管轄）",
            content: "本規約は日本法に準拠します。本アプリに関する紛争は、開発者の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。"
          },
        ].map(({ title, content }) => (
          <div key={title} style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>{title}</h2>
            <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0, whiteSpace: "pre-line" }}>{content}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
