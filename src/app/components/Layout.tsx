import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  accentVar?: string; // e.g. "--night-accent"
}

export default function Layout({ children, title, description, accentVar = "--night-accent" }: LayoutProps) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navigation />

      {title && (
        <div className="pt-32 pb-10 px-5 sm:px-8 max-w-4xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: `var(${accentVar})` }}
          >
            {title}
          </h1>
          {description && (
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>
              {description}
            </p>
          )}
        </div>
      )}

      <main className={`${title ? "" : "pt-24"} pb-20 px-5 sm:px-8 max-w-4xl mx-auto`}>
        {children}
      </main>

      <footer style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © 2025 UTSUNO HIDETA. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm" style={{ color: "var(--text-muted)" }}>
            <a href="/contact" className="hover:text-white transition-colors duration-150">お問い合わせ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
