import Layout from "../../components/Layout";

export default function NightMeiboSpecs() {
  return (
    <Layout 
      title="Night名簿帳 - 仕様詳細" 
      description="機能と技術仕様について詳しくご説明します"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">システム仕様</h2>
          
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">対応プラットフォーム</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>iOS 14.0以降</li>
                <li>Android 8.0（APIレベル26）以降</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">主要機能</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>連絡先の追加・編集・削除</li>
                <li>カテゴリ別分類</li>
                <li>高度な検索機能</li>
                <li>データのインポート・エクスポート</li>
                <li>クラウドバックアップ</li>
                <li>データ暗号化</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">技術仕様</h3>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">フロントエンド</h4>
                    <p className="text-sm">React Native</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">バックエンド</h4>
                    <p className="text-sm">Node.js + Express</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">データベース</h4>
                    <p className="text-sm">MongoDB</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">認証</h4>
                    <p className="text-sm">JWT + OAuth2.0</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">セキュリティ</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>AES-256暗号化</li>
                <li>HTTPS通信</li>
                <li>生体認証対応</li>
                <li>定期的なセキュリティ監査</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}