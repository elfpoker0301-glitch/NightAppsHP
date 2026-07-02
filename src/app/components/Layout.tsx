import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const GridLogo = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", width: 14, height: 14 }}>
    <div style={{ background: "#8b5cf6", borderRadius: 1.5 }} />
    <div style={{ background: "#ec4899", borderRadius: 1.5 }} />
    <div style={{ background: "#3b82f6", borderRadius: 1.5 }} />
    <div style={{ background: "#f97316", borderRadius: 1.5 }} />
  </div>
);

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navigation />

      {title && (
        <div style={{ paddingTop: 100, paddingBottom: 32, paddingLeft: 48, paddingRight: 48, maxWidth: 1280, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, letterSpacing: "-1.5px", marginBottom: 12 }}>
            {title}
          </h1>
          {description && (
            <p style={{ fontSize: 16, color: "var(--mid)", lineHeight: 1.7, maxWidth: 560 }}>{description}</p>
          )}
        </div>
      )}

      <main style={{ paddingTop: title ? 0 : 80, paddingBottom: 80, paddingLeft: 48, paddingRight: 48, maxWidth: 1280, margin: "0 auto" }}>
        {children}
      </main>

      <footer style={{ borderTop: "1px solid var(--line)", padding: "28px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <GridLogo />
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700 }}>App Collection</span>
            <span style={{ fontSize: 11.5, color: "var(--light)" }}>© 2025 UTSUNO HIDETA.</span>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            <a href="/news" style={{ fontSize: 12.5, color: "var(--light)", textDecoration: "none" }}>お知らせ</a>
            <a href="/contact" style={{ fontSize: 12.5, color: "var(--light)", textDecoration: "none" }}>お問い合わせ</a>
            <a href="/admob" style={{ fontSize: 12.5, color: "var(--light)", textDecoration: "none" }}>AdMob</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
