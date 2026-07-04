import Layout from "../components/Layout";

const apps = [
  { name: "Night名簿帳",        appId: "ca-app-pub-1342706829550106~9102650115",  storeId: "6749575718",  verified: true  },
  { name: "Night契約書",         appId: "ca-app-pub-1342706829550106~1988141492",  storeId: null,          verified: false },
  { name: "Night シフト管理",    appId: "ca-app-pub-1342706829550106~6371462065",  storeId: "6787041071",  verified: false },
  { name: "Nightアフターバック",  appId: "ca-app-pub-1342706829550106~4277519603",  storeId: "6751783629",  verified: true  },
  { name: "Night PDF (iOS)",    appId: "ca-app-pub-1342706829550106~4382534498",  storeId: "6755782601",  verified: true  },
  { name: "Night Dice",         appId: "ca-app-pub-1342706829550106~2617084737",  storeId: "6755870063",  verified: true  },
  { name: "Girls Board",        appId: "ca-app-pub-1342706829550106~8405700678",  storeId: "6785039885",  verified: false },
  { name: "Girls Back",         appId: "ca-app-pub-1342706829550106~2469959667",  storeId: "6782473775",  verified: true  },
  { name: "子供クエスト",         appId: "ca-app-pub-1342706829550106~6021862292",  storeId: "6781513708",  verified: false },
  { name: "ゴミの日！",           appId: "ca-app-pub-1342706829550106~1353264632",  storeId: "6782357102",  verified: false },
];

export const metadata = {
  title: "AdMob — NightApp",
  description: "Google AdMob compliance page for NightApp applications",
};

export default function AdMobPage() {
  return (
    <Layout title="AdMob" description="Google AdMob アプリID一覧・コンプライアンス情報">
      <div style={{ maxWidth: 860 }}>

        {/* Publisher ID */}
        <section style={{ marginBottom: 40, padding: "20px 24px", background: "var(--bg2)", borderRadius: 12, border: "1px solid var(--line)" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--light)", margin: "0 0 6px" }}>Publisher ID</p>
          <code style={{ fontSize: 14, fontWeight: 600, fontFamily: "monospace", color: "var(--text)" }}>
            pub-1342706829550106
          </code>
        </section>

        {/* App ID table */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, margin: "0 0 20px", letterSpacing: "-.3px" }}>
            アプリ AdMob App ID 一覧
          </h2>
          <div style={{ border: "1px solid var(--line)", borderRadius: 12, overflow: "hidden" }}>
            {apps.map((app, i) => (
              <div
                key={app.appId}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr 80px",
                  gap: 16,
                  alignItems: "center",
                  padding: "14px 20px",
                  borderBottom: i < apps.length - 1 ? "1px solid var(--line)" : "none",
                  background: i % 2 === 0 ? "#fff" : "var(--bg2)",
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{app.name}</span>
                <code style={{ fontSize: 12, color: "var(--mid)", fontFamily: "monospace", wordBreak: "break-all" }}>
                  {app.appId}
                </code>
                <span style={{
                  fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 100,
                  textAlign: "center",
                  background: app.verified ? "rgba(16,185,129,.1)" : "rgba(245,158,11,.1)",
                  color: app.verified ? "#059669" : "#d97706",
                  border: `1px solid ${app.verified ? "rgba(16,185,129,.25)" : "rgba(245,158,11,.25)"}`,
                }}>
                  {app.verified ? "確認済み" : "要審査"}
                </span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "var(--light)", marginTop: 10 }}>
            ※ app-ads.txt は <code style={{ fontFamily: "monospace" }}>https://apps.liv-jpn.com/app-ads.txt</code> で公開中
          </p>
        </section>

        {/* Policy */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-.3px" }}>
            広告ポリシー
          </h2>
          <ul style={{ fontSize: 14, color: "var(--mid)", lineHeight: 2, paddingLeft: 20, margin: 0 }}>
            <li>すべての広告は Google AdMob ポリシーに準拠しています</li>
            <li>不適切・誤解を招くコンテンツは一切配信しません</li>
            <li>ユーザーのプライバシーは個人情報保護法・GDPR に基づき保護されます</li>
            <li>広告識別子の利用はデバイス設定からオプトアウト可能です</li>
            <li>広告配置は Google のベストプラクティスに沿っています</li>
          </ul>
        </section>

        {/* Contact */}
        <section style={{ padding: "24px 28px", background: "var(--bg2)", borderRadius: 12, border: "1px solid var(--line)" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 800, margin: "0 0 10px" }}>お問い合わせ</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", margin: "0 0 6px" }}>
            広告・AdMob に関するご連絡:
          </p>
          <a href="mailto:app@liv-jpn.com" style={{ fontSize: 14, color: "#8b5cf6", textDecoration: "none", fontWeight: 500 }}>
            app@liv-jpn.com
          </a>
          <p style={{ fontSize: 12, color: "var(--light)", margin: "8px 0 0" }}>Developer: UTSUNO HIDETA</p>
        </section>

      </div>
    </Layout>
  );
}
