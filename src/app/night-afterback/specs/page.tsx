import Layout from "../../components/Layout";

export default function NightAfterbackSpecs() {
  return (
    <Layout 
      title="Nightアフターバック - 仕様詳細" 
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
                <li>Web版（Chrome, Safari, Firefox最新版）</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">主要機能</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>サポート案件管理・トラッキング</li>
                <li>顧客満足度測定・分析</li>
                <li>自動フォローアップ機能</li>
                <li>レポート生成・可視化</li>
                <li>問い合わせ対応履歴管理</li>
                <li>通知・リマインダー機能</li>
                <li>顧客データベース統合</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">技術仕様</h3>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">フロントエンド</h4>
                    <p className="text-sm">React Native / Next.js</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">バックエンド</h4>
                    <p className="text-sm">Node.js + Express</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">データベース</h4>
                    <p className="text-sm">PostgreSQL</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">認証</h4>
                    <p className="text-sm">OAuth 2.0 + JWT</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">ストレージ</h4>
                    <p className="text-sm">AWS S3</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">分析エンジン</h4>
                    <p className="text-sm">Google Analytics</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">データ分析機能</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>リアルタイム満足度ダッシュボード</li>
                <li>対応時間・解決率の統計分析</li>
                <li>顧客セグメント別レポート</li>
                <li>トレンド分析・予測機能</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">セキュリティ</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>データ暗号化（AES-256）</li>
                <li>2段階認証対応</li>
                <li>定期的なセキュリティ監査</li>
                <li>GDPR・個人情報保護法準拠</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
