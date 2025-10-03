import Layout from "../components/Layout";

export default function NewsPage() {
  return (
    <Layout 
      title="お知らせ" 
      description="NightAppの最新情報をお届けします"
    >
      <div className="max-w-4xl mx-auto">
        {/* News Items */}
        <div className="space-y-6">
          <article className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                  新機能
                </span>
                <time className="text-gray-400 text-sm">2025.10.02</time>
              </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-4">
              Night名簿帳 v2.0がリリースされました
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Night名簿帳の大幅なアップデートを実施いたしました。新機能として、
              グループ管理機能、高度な検索フィルター、CSVインポート/エクスポート機能を追加しました。
              また、パフォーマンスの向上とUIの改善も行っております。
            </p>
            <div className="text-gray-400 text-sm">
              詳細は各アプリストアでご確認ください。
            </div>
          </article>

          <article className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                  お知らせ
                </span>
                <time className="text-gray-400 text-sm">2025.09.28</time>
              </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-4">
              サーバーメンテナンスのお知らせ
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              2025年10月5日（土）午前2:00〜午前6:00の間、
              システムメンテナンスを実施いたします。
              この間、一部サービスがご利用いただけない場合がございます。
            </p>
            <div className="text-gray-400 text-sm">
              ご迷惑をおかけいたしますが、何卒ご了承ください。
            </div>
          </article>

          <article className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                  新サービス
                </span>
                <time className="text-gray-400 text-sm">2025.09.15</time>
              </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-4">
              Night契約書のベータ版をリリース
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              デジタル契約書管理システム「Night契約書」のベータ版をリリースいたしました。
              電子署名機能、テンプレート管理、進捗追跡など、
              契約業務を効率化する機能を搭載しています。
            </p>
            <div className="text-gray-400 text-sm">
              ベータテスターを募集中です。詳細はお問い合わせください。
            </div>
          </article>

          <article className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                  重要
                </span>
                <time className="text-gray-400 text-sm">2025.09.01</time>
              </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-4">
              プライバシーポリシー更新のお知らせ
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              2025年9月1日付で、各アプリのプライバシーポリシーを更新いたしました。
              データ保護に関する規定を強化し、より透明性の高い情報提供を行います。
            </p>
            <div className="text-gray-400 text-sm">
              各アプリのプライバシーポリシーページをご確認ください。
            </div>
          </article>

          <article className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                  新機能
                </span>
                <time className="text-gray-400 text-sm">2025.08.20</time>
              </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-4">
              Nightアフターバック開発開始
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              アフターサービス管理ツール「Nightアフターバック」の開発を開始いたしました。
              顧客満足度の向上と効率的なサポート業務を実現するための機能を開発中です。
            </p>
            <div className="text-gray-400 text-sm">
              リリース時期については決まり次第お知らせいたします。
            </div>
          </article>
        </div>

        {/* Archive Notice */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <p className="text-gray-300">
              過去のお知らせについては、
              <a 
                href="mailto:app@liv-jpn.com" 
                className="text-purple-300 hover:text-purple-200 transition-colors"
              >
                お問い合わせ
              </a>
              までご連絡ください。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}