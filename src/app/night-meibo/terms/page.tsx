import Layout from "../../components/Layout";

export default function NightMeiboTerms() {
  return (
    <Layout 
      title="Night名簿帳 - 利用規約" 
      description="Night名簿帳をご利用いただく際の規約について"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <div className="text-gray-300 space-y-6">
            <p className="text-sm text-gray-400">最終更新日: 2025年10月2日</p>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-4">第1条（定義）</h2>
              <p>本規約において、次の各号に掲げる用語の意義は、当該各号に定めるところによります。</p>
              <ol className="list-decimal list-inside mt-3 space-y-2 pl-4">
                <li>「サービス」とは、当社が提供する「Night名簿帳」アプリケーションをいいます。</li>
                <li>「利用者」とは、本サービスを利用する個人または法人をいいます。</li>
                <li>「当社」とは、UTSUNO HIDETAをいいます。</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">第2条（利用規約の適用）</h2>
              <p>本規約は、利用者と当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">第3条（利用登録）</h2>
              <p>本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">第4条（禁止事項）</h2>
              <p>利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
              <ul className="list-disc list-inside mt-3 space-y-2 pl-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社、本サービスの他の利用者、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">第5条（本サービスの提供の停止等）</h2>
              <p>当社は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">第6条（免責事項）</h2>
              <p>当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">第7条（準拠法・裁判管轄）</h2>
              <p>本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</p>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400">
                ご質問やご不明な点がございましたら、
                <a href="mailto:app@liv-jpn.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                  app@liv-jpn.com
                </a>
                までお問い合わせください。
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}