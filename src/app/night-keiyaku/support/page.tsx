import Layout from "../../components/Layout";

export default function NightKeiyakuSupport() {
  return (
    <Layout 
      title="Night契約書 - サポート" 
      description="よくある質問と問い合わせ先"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">よくある質問</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q. 契約書データのバックアップは可能ですか？</h3>
              <p className="text-gray-300">A. はい、クラウド上に自動バックアップされます。また、手動でのエクスポート機能も提供しています。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q. 電子署名の法的効力はありますか？</h3>
              <p className="text-gray-300">A. はい、電子署名法に準拠した電子署名機能を提供しており、法的効力があります。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q. 複数人で契約書を管理できますか？</h3>
              <p className="text-gray-300">A. はい、チーム機能により複数のメンバーで契約書を管理・共有できます。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q. 契約書テンプレートは追加できますか？</h3>
              <p className="text-gray-300">A. はい、標準テンプレートに加えて、独自のテンプレートを作成・保存できます。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q. データのセキュリティは保証されていますか？</h3>
              <p className="text-gray-300">A. はい、AES-256暗号化により高度なセキュリティを確保しています。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q. PDFでの出力は可能ですか？</h3>
              <p className="text-gray-300">A. はい、契約書をPDF形式で出力・印刷することができます。</p>
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
