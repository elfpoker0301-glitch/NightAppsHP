import Layout from "../components/Layout";
import Link from "next/link";

export default function NightKeiyakuPage() {
  return (
    <Layout 
      title="Night契約書" 
      description="デジタル契約書管理システム"
    >
      <div className="max-w-4xl mx-auto">
        {/* App Info Section */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">アプリ概要</h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>Night契約書は、契約書の作成から管理まで一元化できるデジタル契約書管理システムです。</p>
            <p>電子署名機能により、ペーパーレスで効率的な契約業務を実現します。</p>
          </div>
        </section>

        {/* Navigation Menu */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/night-keiyaku/specs" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">📋</div>
            <h3 className="text-white font-semibold mb-2">仕様詳細</h3>
            <p className="text-gray-400 text-sm">機能と仕様について</p>
          </Link>
          
          <Link href="/night-keiyaku/terms" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">📄</div>
            <h3 className="text-white font-semibold mb-2">利用規約</h3>
            <p className="text-gray-400 text-sm">ご利用にあたって</p>
          </Link>
          
          <Link href="/night-keiyaku/support" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">🔧</div>
            <h3 className="text-white font-semibold mb-2">サポート</h3>
            <p className="text-gray-400 text-sm">お困りの際は</p>
          </Link>
          
          <Link href="/night-keiyaku/privacy" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
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
              <h3 className="text-white font-semibold mb-2">📝 契約書作成</h3>
              <p className="text-gray-300 text-sm">テンプレートを使用した迅速な契約書作成</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">✍️ 電子署名</h3>
              <p className="text-gray-300 text-sm">法的効力のある電子署名機能</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">📊 進捗管理</h3>
              <p className="text-gray-300 text-sm">契約の進捗状況をリアルタイムで追跡</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">🔒 セキュア保存</h3>
              <p className="text-gray-300 text-sm">暗号化された安全なクラウドストレージ</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}