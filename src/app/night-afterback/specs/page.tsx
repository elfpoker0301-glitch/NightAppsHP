import Layout from "../../components/Layout";

export default function NightAfterbackSpecs() {
  return (
    <Layout 
      title="Nightアフターバック - 仕様詳細" 
      description="機能と技術仕様について詳しくご説明します"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">📝 基本概要</h2>
          <div className="text-gray-300 space-y-3">
            <ul className="space-y-2">
              <li><strong className="text-white">アプリ名：</strong>Nightアフターバック</li>
              <li><strong className="text-white">対応OS：</strong>iOS 12.0以降</li>
              <li><strong className="text-white">カテゴリ：</strong>ビジネス・効率化</li>
              <li><strong className="text-white">言語：</strong>日本語</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">📱 主な機能</h2>
          
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">基本機能（無料）</h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">📝 簡単記録</h4>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>手数料の金額と支払先を素早く記録</li>
                    <li>請求日・支払期限も一緒に管理</li>
                    <li>写真やメモも追加可能</li>
                    <li>カテゴリ別分類（銀行手数料、年会費、システム利用料等）</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">🏢 支払先別管理</h4>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>会社・サービスごとに手数料履歴を整理</li>
                    <li>月額・年額手数料の合計を一目で確認</li>
                    <li>支払状況をリアルタイムで更新</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">📊 見やすい一覧</h4>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>未払い・支払済みを分けて表示</li>
                    <li>支払期限の近い順に並び替え</li>
                    <li>期限切れをハイライト表示</li>
                    <li>検索・フィルタ機能</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">プレミアム機能（月額480円）</h3>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">💰 高度な管理機能</h4>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>広告なしの快適な操作</li>
                  <li>より詳細な支払履歴管理</li>
                  <li>定期手数料の自動リマインド設定</li>
                  <li>データのiCloudバックアップ</li>
                  <li>CSV形式でのデータエクスポート</li>
                  <li>統計・グラフ表示機能</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">⚙️ 技術仕様</h2>
          
          <div className="bg-white/5 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="font-semibold text-white mb-2">開発言語</h4>
                <p className="text-sm">Flutter / Dart</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">データベース</h4>
                <p className="text-sm">SQLite + Cloud Storage</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">広告</h4>
                <p className="text-sm">Google AdMob統合</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">🖥 システム要件</h2>
          
          <div className="bg-white/5 rounded-lg p-6">
            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-300">
              <li>iOS：12.0以降</li>
              <li>macOS：11.0以降</li>
              <li>容量：50MB以上</li>
              <li>ネットワーク：インターネット接続必須</li>
            </ul>
          </div>

          <div className="mt-6 bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">🔒 データとプライバシー</h3>
            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-300">
              <li>データは端末内で暗号化保存</li>
              <li>個人情報は安全に管理</li>
              <li>バックアップデータも暗号化保護</li>
              <li>アカウント削除：設定画面から実行可能</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
