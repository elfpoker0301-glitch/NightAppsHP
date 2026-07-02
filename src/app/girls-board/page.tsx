import Layout from "../components/Layout";
import Link from "next/link";

export const metadata = {
  title: "Girls Board - キャバ嬢のための顧客管理・売上管理アプリ",
  description: "キャバクラ・ガールズバーで働く女性のための顧客管理＆売上管理アプリ。月別売上ダッシュボード・指名客来店アラート・日報シェアをラグジュアリーなデザインで。",
};

export default function GirlsBoardPage() {
  return (
    <Layout
      title="Girls Board"
      description="顧客管理・売上管理アプリ"
    >
      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-yellow-900/40 to-gray-900/60 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-yellow-700/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/5 to-transparent pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/girls-board-icon.png"
              alt="Girls Board アイコン"
              className="w-28 h-28 rounded-3xl shadow-2xl shadow-yellow-500/30 flex-shrink-0"
            />
            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-3 tracking-wider">Girls Board</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                キャバクラ・ガールズバーで働く女性のための顧客管理＆売上管理アプリ。<br />
                指名客の来店アラート・誕生日・売上集計・日報シェアをラグジュアリーなデザインで一元管理。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-600/40 rounded-full text-yellow-400 text-xs font-semibold">来店アラート</span>
                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-600/40 rounded-full text-yellow-400 text-xs font-semibold">売上管理</span>
                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-600/40 rounded-full text-yellow-400 text-xs font-semibold">日報シェア</span>
                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-600/40 rounded-full text-yellow-400 text-xs font-semibold">誕生日管理</span>
                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-600/40 rounded-full text-yellow-400 text-xs font-semibold">無料</span>
              </div>
            </div>
          </div>
        </section>

        {/* Nav Menu */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Link href="/girls-board/specs" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">📋</div>
            <h3 className="text-white font-semibold mb-2">仕様詳細</h3>
            <p className="text-gray-400 text-sm">機能と仕様について</p>
          </Link>
          <Link href="/girls-board/terms" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">📄</div>
            <h3 className="text-white font-semibold mb-2">利用規約</h3>
            <p className="text-gray-400 text-sm">ご利用にあたって</p>
          </Link>
          <Link href="/girls-board/support" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">🔧</div>
            <h3 className="text-white font-semibold mb-2">サポート</h3>
            <p className="text-gray-400 text-sm">お困りの際は</p>
          </Link>
          <Link href="/girls-board/privacy" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 block">
            <div className="text-2xl mb-3">🔒</div>
            <h3 className="text-white font-semibold mb-2">プライバシーポリシー</h3>
            <p className="text-gray-400 text-sm">個人情報保護について</p>
          </Link>
        </section>

        {/* Sales Management */}
        <section className="bg-gradient-to-br from-yellow-900/30 to-gray-900/60 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-yellow-700/20">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">💰 売上管理</h2>
          <p className="text-gray-400 text-sm mb-6">月別の売上を記録・集計・シェアできます</p>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-black/30 rounded-xl p-5 border border-yellow-700/20">
              <h3 className="text-yellow-300 font-semibold mb-2">📊 月別ダッシュボード</h3>
              <p className="text-gray-300 text-sm">売上高・小計・接客数・場内指名数・本指名数・ボトル数・ドリンク数を月ごとに集計。月間目標と達成率も表示。</p>
            </div>
            <div className="bg-black/30 rounded-xl p-5 border border-yellow-700/20">
              <h3 className="text-yellow-300 font-semibold mb-2">📝 売上登録</h3>
              <p className="text-gray-300 text-sm">客名・指名種別（フリー/場内/本指名）・同伴・ボトル・キープボトル・ドリンク・メモを登録。顧客管理と自動連携。</p>
            </div>
            <div className="bg-black/30 rounded-xl p-5 border border-yellow-700/20">
              <h3 className="text-yellow-300 font-semibold mb-2">📅 カレンダー・日報</h3>
              <p className="text-gray-300 text-sm">月カレンダーで登録状況を一覧表示。日付タップで日報をシェア。月次レポートもワンタップで共有できます。</p>
            </div>
          </div>
        </section>

        {/* Customer Management */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">👥 顧客管理</h2>
          <p className="text-gray-400 text-sm mb-6">指名客の情報をまとめて管理できます</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">💎 ダッシュボード</h3>
              <p className="text-gray-300 text-sm">指名客数・1/3/6ヶ月未来店客・誕生日客・要注意客・NG客をワンタップで確認。</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">📒 客一覧・客登録</h3>
              <p className="text-gray-300 text-sm">名前・ふりがな・連絡先・誕生日・血液型などを登録。名前順・来店順・来店回数順で並び替え・検索対応。</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">📅 来店履歴・売上履歴</h3>
              <p className="text-gray-300 text-sm">来店日・種別・売上を複数登録。売上管理で登録した記録も顧客ページに自動反映されます。</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">⚠️ 要注意客・NG客</h3>
              <p className="text-gray-300 text-sm">トラブルがあった客にフラグを立て、ダッシュボードから即座に確認できます。</p>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="bg-gradient-to-r from-gray-800/50 to-yellow-900/20 backdrop-blur-lg rounded-2xl p-8 border border-yellow-700/20">
          <h2 className="text-2xl font-bold text-white mb-4">🔐 セキュリティ</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-0.5">✓</span>
              <span>顧客データ・売上データはすべてデバイス内にのみ保存。外部サーバーへの送信は一切ありません。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-0.5">✓</span>
              <span>ローカルバックアップ機能でデータを安全に引き継げます。顧客・売上・設定データをまとめてバックアップ。</span>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
