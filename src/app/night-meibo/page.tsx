import Layout from "../components/Layout";
import Link from "next/link";

export default function NightMeiboPage() {
  return (
    <Layout 
      title="Night名簿帳" 
      description="効率的な名簿管理アプリケーション"
    >
      <div className="max-w-4xl mx-auto">
        {/* App Info Section */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">アプリ概要</h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>Night名簿帳は、効率的な連絡先管理を実現するモダンなアプリケーションです。</p>
            <p>シンプルで直感的なインターフェースにより、大切な連絡先情報を安全に管理できます。</p>
          </div>
        </section>

        {/* Navigation Menu */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/night-meibo/specs" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">📋</div>
            <h3 className="text-white font-semibold mb-2">仕様詳細</h3>
            <p className="text-gray-400 text-sm">機能と仕様について</p>
          </Link>
          
          <Link href="/night-meibo/terms" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">📄</div>
            <h3 className="text-white font-semibold mb-2">利用規約</h3>
            <p className="text-gray-400 text-sm">ご利用にあたって</p>
          </Link>
          
          <Link href="/night-meibo/support" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">🔧</div>
            <h3 className="text-white font-semibold mb-2">サポート</h3>
            <p className="text-gray-400 text-sm">お困りの際は</p>
          </Link>
          
          <Link href="/night-meibo/privacy" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">🔒</div>
            <h3 className="text-white font-semibold mb-2">プライバシーポリシー</h3>
            <p className="text-gray-400 text-sm">個人情報保護について</p>
          </Link>
        </section>

        {/* Key Features */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">主な機能</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">📱 直感的な操作</h3>
              <p className="text-gray-300 text-sm">シンプルで使いやすいユーザーインターフェース</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">🔍 高速検索</h3>
              <p className="text-gray-300 text-sm">必要な連絡先をすぐに見つけることができます</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">💾 安全なデータ管理</h3>
              <p className="text-gray-300 text-sm">データは暗号化され安全に保存されます</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">☁️ クラウド同期</h3>
              <p className="text-gray-300 text-sm">複数デバイス間でデータを同期可能</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}