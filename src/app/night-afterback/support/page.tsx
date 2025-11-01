import Layout from "../../components/Layout";

export default function NightAfterbackSupport() {
  return (
    <Layout 
      title="Nightアフターバック - サポート" 
      description="よくある質問と問い合わせ先"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">よくある質問</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q. サポート案件のデータはバックアップされますか？</h3>
              <p className="text-gray-300">A. はい、すべてのサポート案件データは自動的にクラウドにバックアップされます。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q. 顧客満足度の測定方法は？</h3>
              <p className="text-gray-300">A. NPS（Net Promoter Score）やCSAT（Customer Satisfaction Score）など、複数の指標で測定できます。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q. 自動フォローアップ機能はどのように動作しますか？</h3>
              <p className="text-gray-300">A. 設定したタイミング（案件クローズ後1週間など）で、自動的にフォローアップメールを送信します。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q. レポート機能では何が確認できますか？</h3>
              <p className="text-gray-300">A. 対応時間、解決率、満足度スコア、トレンド分析など、多様なデータを可視化できます。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q. 他のシステムとの連携は可能ですか？</h3>
              <p className="text-gray-300">A. はい、APIを通じて顧客管理システムなど他のシステムと連携できます。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q. チームで利用できますか？</h3>
              <p className="text-gray-300">A. はい、複数のメンバーでサポート案件を共有・管理できます。</p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">お問い合わせ</h2>
          
          <div className="text-gray-300 space-y-4">
            <p>
              その他のご質問やサポートが必要な場合は、以下の連絡先までお気軽にお問い合わせください。
            </p>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">連絡先</h3>
              <div className="space-y-2">
                <p>
                  <span className="text-white font-medium">Email:</span>{" "}
                  <a href="mailto:app@liv-jpn.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                    app@liv-jpn.com
                  </a>
                </p>
                <p>
                  <span className="text-white font-medium">開発者:</span> UTSUNO HIDETA
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  ※ お問い合わせいただいた内容には、3営業日以内に返信いたします。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
