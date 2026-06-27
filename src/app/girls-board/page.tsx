import Layout from "../components/Layout";
import Link from "next/link";

export const metadata = {
  title: "Girls Board - キャバ嬢のための顧客管理アプリ",
  description: "キャバクラ・ガールズバーで働く女性のための顧客管理アプリ。指名客の来店アラート・誕生日・要注意客リストをラグジュアリーなデザインで管理。",
};

export default function GirlsBoardPage() {
  return (
    <Layout
      title="Girls Board"
      description="顧客管理アプリ"
    >
      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <section className="bg-gradient-to-br from-yellow-900/40 to-gray-900/60 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-yellow-700/30">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/girls-board-icon.png"
              alt="Girls Board アイコン"
              className="w-28 h-28 rounded-3xl shadow-2xl shadow-yellow-500/30 flex-shrink-0"
            />
            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-3 tracking-wider">Girls Board</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                キャバクラ・ガールズバーで働く女性のための顧客管理アプリ。<br />
                指名客の来店アラート・誕生日・要注意客リストを、ラグジュアリーなデザインで一元管理できます。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-600/40 rounded-full text-yellow-400 text-xs font-semibold">来店アラート</span>
                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-600/40 rounded-full text-yellow-400 text-xs font-semibold">誕生日管理</span>
                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-600/40 rounded-full text-yellow-400 text-xs font-semibold">要注意客リスト</span>
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

        {/* Features */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">主な機能</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">💎 ダッシュボード</h3>
              <p className="text-gray-300 text-sm">指名客数、1/3/6ヶ月未来店客、誕生日客、要注意客・NG客リストを一画面で確認。タップで詳細一覧へ。</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">📒 客一覧・客登録</h3>
              <p className="text-gray-300 text-sm">名前・ふりがな・連絡先・誕生日・血液型など詳細情報を登録。名前順・来店順・来店回数順のソートと検索に対応。</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">📅 来店履歴管理</h3>
              <p className="text-gray-300 text-sm">在籍店舗・来店日・新規/同伴/来店/その他の種別・売上・人数を複数登録。履歴の編集・削除も可能。</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">🏪 在籍店舗登録</h3>
              <p className="text-gray-300 text-sm">複数の在籍店舗を登録し、客の来店履歴でプルダウンから選択できます。</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">⚠️ 要注意客・NG客リスト</h3>
              <p className="text-gray-300 text-sm">トラブルがあった客にフラグを立て、ダッシュボードから即座に確認できます。</p>
            </div>
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-2">💾 バックアップ・復元</h3>
              <p className="text-gray-300 text-sm">顧客データをローカルにバックアップ・復元できます。機種変更時も安心です。</p>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="bg-gradient-to-r from-gray-800/50 to-yellow-900/20 backdrop-blur-lg rounded-2xl p-8 border border-yellow-700/20">
          <h2 className="text-2xl font-bold text-white mb-4">セキュリティ</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-0.5">✓</span>
              <span>登録した顧客データはすべてデバイス内にのみ保存。外部サーバーへの送信は一切ありません。</span>
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
