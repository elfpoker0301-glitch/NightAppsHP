import Link from "next/link";
import Navigation from "./components/Navigation";
import JsonLd from "./components/JsonLd";

/* ── App data ─────────────────────────────────────────────── */
const nightApps = [
  {
    href: "/night-meibo",
    name: "Night名簿帳",
    tagline: "顧客名簿管理",
    desc: "ナイト業界向けの顧客管理アプリ。来店履歴・誕生日・メモをスマートに一元管理。",
    tags: ["顧客管理", "名簿", "無料"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    href: "/night-keiyaku",
    name: "Night契約書",
    tagline: "契約書作成",
    desc: "ナイト業界の契約書をその場でデジタル作成。テンプレートで素早く・正確に。",
    tags: ["契約書", "書類", "無料"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>
    ),
  },
  {
    href: "/night-afterback",
    name: "Nightアフターバック",
    tagline: "手数料・バック管理",
    desc: "スタッフごとのアフターバック・手数料を自動計算。月次レポートもワンタップ。",
    tags: ["バック管理", "計算", "無料"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    href: "/night-pdf",
    name: "Night PDF",
    tagline: "PDF管理・共有",
    desc: "PDF・画像をまとめて管理。お店のメニューや資料をすぐ共有できる。",
    tags: ["PDF", "ファイル管理"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="15,3 21,3 21,9"/>
        <polyline points="9,21 3,21 3,15"/>
        <line x1="21" y1="3" x2="14" y2="10"/>
        <line x1="3" y1="21" x2="10" y2="14"/>
      </svg>
    ),
  },
  {
    href: "/night-dice",
    name: "Night Dice",
    tagline: "ゲーム・エンタメ",
    desc: "お店で盛り上がるサイコロゲーム。カスタマイズ可能なルールで場を盛り上げよう。",
    tags: ["ゲーム", "無料"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="3" ry="3"/>
        <circle cx="8.5" cy="8.5" r="1.5" fill="white" stroke="none"/>
        <circle cx="15.5" cy="8.5" r="1.5" fill="white" stroke="none"/>
        <circle cx="8.5" cy="15.5" r="1.5" fill="white" stroke="none"/>
        <circle cx="15.5" cy="15.5" r="1.5" fill="white" stroke="none"/>
      </svg>
    ),
  },
];

const girlsApps = [
  {
    href: "/girls-board",
    name: "Girls Board",
    tagline: "顧客管理・売上管理",
    desc: "キャバクラ・ガールズバーで働く女性のためのアプリ。来店アラート・月別売上ダッシュボード・日報シェアを一つに。",
    tags: ["顧客管理", "売上管理", "日報", "無料"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    href: "/girls-back",
    name: "Girls Back",
    tagline: "バック・給与管理",
    desc: "キャスト向けのバック・給与管理アプリ。日別・月別の収支を簡単に記録・確認。",
    tags: ["バック管理", "給与", "無料"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 12V22H4V12"/>
        <path d="M22 7H2v5h20V7z"/>
        <path d="M12 22V7"/>
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
      </svg>
    ),
  },
];

const lifeApps = [
  {
    href: "/kodomo-quest",
    name: "子供クエスト",
    tagline: "育児・こども向けゲーム",
    desc: "お子さんが楽しみながら学べるクエスト型アプリ。毎日のお手伝いをゲームに変えよう。",
    tags: ["育児", "キッズ", "無料"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
      </svg>
    ),
  },
  {
    href: "/gomi-no-hi",
    name: "ゴミの日！",
    tagline: "ゴミ収集日リマインダー",
    desc: "ゴミ出しの日をプッシュ通知でお知らせ。地域ごとの収集スケジュールを登録して忘れずに。",
    tags: ["生活", "通知", "無料"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="3,6 5,6 21,6"/>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
      </svg>
    ),
  },
];

/* ── Sub-components ───────────────────────────────────────── */
function SeriesLabel({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-8">
      <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: color }} />
      <span className="text-xs font-semibold tracking-widest uppercase" style={{ color }}>
        {children}
      </span>
      <span className="flex-1 h-px" style={{ background: `${color}22` }} />
    </div>
  );
}

interface AppDef {
  href: string;
  name: string;
  tagline: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
}

function AppCard({
  app,
  accentColor,
  glowColor,
  borderColor,
  gradient,
}: {
  app: AppDef;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  gradient: string;
}) {
  return (
    <Link
      href={app.href}
      className="group block glass-card cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
      style={{
        padding: "1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hover glow */}
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 30%, ${glowColor}, transparent 70%)` }}
      />

      <div className="relative z-10">
        {/* Icon + name */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: gradient }}
          >
            {app.icon}
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="mt-1 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ color: accentColor }}
          >
            <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <p className="text-[11px] font-medium mb-1" style={{ color: accentColor, letterSpacing: "0.06em" }}>
          {app.tagline}
        </p>
        <h3 className="text-base font-semibold mb-2.5" style={{ color: "var(--text-primary)" }}>
          {app.name}
        </h3>
        <p className="text-[13px] leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
          {app.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {app.tags.map(tag => (
            <span
              key={tag}
              className="tag"
              style={{ color: accentColor, borderColor: borderColor }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
      />
    </Link>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <JsonLd />
      <Navigation />

      {/* Ambient background blobs */}
      <div aria-hidden="true" className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div
          className="blob absolute rounded-full"
          style={{
            width: 500, height: 500,
            top: "-10%", right: "-5%",
            background: "radial-gradient(circle, rgba(124,111,224,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="blob blob-delay-1 absolute rounded-full"
          style={{
            width: 400, height: 400,
            bottom: "20%", left: "-8%",
            background: "radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="blob blob-delay-2 absolute rounded-full"
          style={{
            width: 350, height: 350,
            top: "50%", left: "40%",
            background: "radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 px-5 sm:px-8 max-w-7xl mx-auto text-center" style={{ zIndex: 1 }}>
        <p
          className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-3 py-1 rounded-full"
          style={{ color: "var(--night-accent)", background: "var(--night-glow)", border: "1px solid var(--night-border)" }}
        >
          Apps Collection
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
          <span className="gradient-text">NightApp</span>
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
          ナイトワーク・日常生活を<span style={{ color: "var(--text-primary)" }}>スマートに</span>するiOSアプリコレクション。<br className="hidden sm:block"/>
          9つのアプリがひとつのブランドに。
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
          <div className="text-center">
            <p className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>9</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Apps</p>
          </div>
          <div className="w-px h-8" style={{ background: "var(--border)" }} />
          <div className="text-center">
            <p className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>3</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Series</p>
          </div>
          <div className="w-px h-8" style={{ background: "var(--border)" }} />
          <div className="text-center">
            <p className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>iOS</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Platform</p>
          </div>
        </div>
      </section>

      {/* ── Apps grid ────────────────────────────────────── */}
      <main className="relative px-5 sm:px-8 max-w-7xl mx-auto pb-32" style={{ zIndex: 1 }}>

        {/* Night Series */}
        <section aria-labelledby="night-series">
          <SeriesLabel color="var(--night-accent)">Night Series — ナイト業界</SeriesLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {nightApps.map(app => (
              <AppCard
                key={app.href}
                app={app}
                accentColor="var(--night-accent)"
                glowColor="var(--night-glow)"
                borderColor="var(--night-border)"
                gradient="var(--night-gradient)"
              />
            ))}
          </div>
        </section>

        {/* Girls Series */}
        <section aria-labelledby="girls-series">
          <SeriesLabel color="var(--girls-accent)">Girls Series — キャスト向け</SeriesLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
            {girlsApps.map(app => (
              <AppCard
                key={app.href}
                app={app}
                accentColor="var(--girls-accent)"
                glowColor="var(--girls-glow)"
                borderColor="var(--girls-border)"
                gradient="var(--girls-gradient)"
              />
            ))}
          </div>
        </section>

        {/* Life Series */}
        <section aria-labelledby="life-series">
          <SeriesLabel color="var(--life-accent)">Life Series — 日常生活</SeriesLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {lifeApps.map(app => (
              <AppCard
                key={app.href}
                app={app}
                accentColor="var(--life-accent)"
                glowColor="var(--life-glow)"
                borderColor="var(--life-border)"
                gradient="var(--life-gradient)"
              />
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section
          className="glass-card text-center px-8 py-14"
          aria-label="お問い合わせ"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--night-accent)" }}>
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            ご質問・ご要望はお気軽に
          </h2>
          <p className="text-sm mb-8 max-w-sm mx-auto" style={{ color: "var(--text-secondary)" }}>
            バグ報告・機能リクエスト・その他のお問い合わせをお待ちしています。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            style={{ background: "var(--night-gradient)", color: "white", boxShadow: "0 0 24px var(--night-glow)" }}
          >
            お問い合わせ
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "var(--night-gradient)" }}>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1L9.2 5.4L14 6.1L10.5 9.5L11.4 14L7 11.6L2.6 14L3.5 9.5L0 6.1L4.8 5.4L7 1Z" fill="white"/>
              </svg>
            </span>
            <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>NightApp</span>
          </div>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2025 UTSUNO HIDETA. All rights reserved.
          </p>
          <Link href="/contact" className="text-xs hover:text-white transition-colors duration-150" style={{ color: "var(--text-muted)" }}>
            お問い合わせ
          </Link>
        </div>
      </footer>
    </div>
  );
}
