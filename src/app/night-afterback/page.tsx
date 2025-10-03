import Layout from "../components/Layout";
import Link from "next/link";

export default function NightAfterbackPage() {
  return (
    <Layout 
      title="Nightアフターバック" 
      description="アフターサービス管理ツール"
    >
      <div className="max-w-4xl mx-auto">
        {/* App Info Section */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">アプリ概要</h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>Nightアフターバックは、顧客のアフターサービスを効率的に管理するためのツールです。</p>
            <p>サポート履歴の管理から顧客満足度の向上まで、包括的なアフターサービス業務をサポートします。</p>
          </div>
        </section>

        {/* Navigation Menu */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/night-afterback/specs" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">📋</div>
            <h3 className="text-white font-semibold mb-2">仕様詳細</h3>
            <p className="text-gray-400 text-sm">機能と仕様について</p>
          </Link>
          
          <Link href="/night-afterback/terms" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">📄</div>
            <h3 className="text-white font-semibold mb-2">利用規約</h3>
            <p className="text-gray-400 text-sm">ご利用にあたって</p>
          </Link>
          
          <Link href="/night-afterback/support" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">🔧</div>
            <h3 className="text-white font-semibold mb-2">サポート</h3>
            <p className="text-gray-400 text-sm">お困りの際は</p>
          </Link>
          
          <Link href="/night-afterback/privacy" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
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
              <h3 className="text-white font-semibold mb-2">📞 サポート管理</h3>
              <p className="text-gray-300 text-sm">顧客からの問い合わせを一元管理</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">📈 満足度測定</h3>
              <p className="text-gray-300 text-sm">顧客満足度の測定と分析</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">🔄 フォローアップ</h3>
              <p className="text-gray-300 text-sm">自動フォローアップ機能</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">📊 レポート機能</h3>
              <p className="text-gray-300 text-sm">詳細なアナリティクスレポート</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}