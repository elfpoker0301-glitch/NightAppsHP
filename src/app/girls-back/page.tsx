import Layout from "../components/Layout";
import Link from "next/link";

export const metadata = {
  title: "Girls Back - アフターバック管理アプリ",
  description: "キャバクラ・クラブで働く女性のためのアフターバック収入管理アプリ。未収金管理・店舗管理・収支グラフを搭載。",
};

export default function GirlsBackPage() {
  return (
    <Layout
      title="Girls Back"
      description="アフターバック収入管理アプリ"
    >
      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <section className="bg-gradient-to-br from-yellow-900/40 to-gray-900/60 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-yellow-700/30">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/girls-back-icon.png"
              alt="Girls Back アイコン"
              className="w-28 h-28 rounded-3xl shadow-2xl shadow-yellow-500/30 flex-shrink-0"
            />
            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-3 tracking-wider">Girls Back</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                キャバクラ・クラブで働く女性のためのアフターバック収入管理アプリ。<br />
                アフターバックの未収管理・店舗管理・月別グラフを、ラグジュアリーなデザインで提供します。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-600/40 rounded-full text-yellow-400 text-xs font-semibold">パスコード保護</span>
                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-600/40 rounded-full text-yellow-400 text-xs font-semibold">未収管理</span>
                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-600/40 rounded-full text-yellow-400 text-xs font-semibold">グラフ表示</span>
                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-600/40 rounded-full text-yellow-400 text-xs font-semibold">無料</span>
              </div>
            </div>
          </div>
        </section>

        {/* Nav Menu */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Link href="/girls-back/specs" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">📋</div>
            <h3 className="text-white font-semibold mb-2">仕様詳細</h3>
            <p className="text-gray-400 text-sm">機能と仕様について</p>
          </Link>
          <Link href="/girls-back/terms" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">📄</div>
            <h3 className="text-white font-semibold mb-2">利用規約</h3>
            <p className="text-gray-400 text-sm">ご利用にあたって</p>
          </Link>
          <Link href="/girls-back/support" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">🔧</div>
            <h3 className="text-white font-semibold mb-2">サポート</h3>
            <p className="text-gray-400 text-sm">お困りの際は</p>
          </Link>
          <Link href="/girls-back/privacy" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">🔒</div>
            <h3 className="text-white font-semibold mb-2">プライバシーポリシー</h3>
            <p className="text-gray-400 text-sm">個人情報保護について</p>
          </Link>
        </section>

        {/* Features */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">主な機能</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">💎 ホーム画面</h3>
              <p className="text-gray-300 text-sm">当月のアフターバック合計・未収金を一目で確認。前月比・過去6ヶ月グラフ・直近10件の履歴を1画面に集約。</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">🔐 パスコード保護</h3>
              <p className="text-gray-300 text-sm">4桁のパスコードでアプリをロック。金額情報をプライベートに管理できます。</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">📊 バック登録・一覧</h3>
              <p className="text-gray-300 text-sm">日付・店舗・支払金額・バック金額・同行者・メモを登録。月別一覧で未収／回収済／回収不可を色分け表示。</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">🏪 店舗管理</h3>
              <p className="text-gray-300 text-sm">店舗名・担当者・連絡先（複数）・LINE（複数）・住所・バック率を登録。回収不可がある店舗は赤表示で警告。</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">⚠️ 未収管理</h3>
              <p className="text-gray-300 text-sm">未収一覧から回収済・回収不可への操作が可能。未収合計を素早く把握できます。</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">📈 収支グラフ</h3>
              <p className="text-gray-300 text-sm">過去6ヶ月の合計と未収をグラフで可視化。稼ぎのトレンドが一目でわかります。</p>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="bg-gradient-to-r from-gray-800/50 to-yellow-900/20 backdrop-blur-lg rounded-2xl p-8 border border-yellow-700/20">
          <h2 className="text-2xl font-bold text-white mb-4">セキュリティ</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-0.5">✓</span>
              <span>すべてのデータはデバイス内にのみ保存。外部サーバーへの送信は一切ありません。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-0.5">✓</span>
              <span>パスコードロックにより、第三者による閲覧を防止します。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-0.5">✓</span>
              <span>ローカルバックアップ機能でデータを安全に引き継げます。</span>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
