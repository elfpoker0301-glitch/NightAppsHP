import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />
      
      <main className="container mx-auto px-6">
        {title && (
          <div className="text-center py-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{title}</h1>
            {description && (
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
            )}
          </div>
        )}
        {children}
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 mt-20">
        <div className="text-center border-t border-white/20 pt-8">
          <p className="text-gray-400 mb-2">© 2025 UTSUNO HIDETA. All rights reserved.</p>
          <p className="text-gray-400 text-sm">開発者: UTSUNO HIDETA</p>
        </div>
      </footer>
    </div>
  );
}