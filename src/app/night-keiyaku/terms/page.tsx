import Layout from "../../components/Layout";

export default function NightKeiyakuTerms() {
  return (
    <Layout 
      title="Night契約書 - 利用規約" 
      description="Night契約書の利用規約"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第1条（利用規約の適用）</h2>
          <p className="text-gray-300">
            本規約は、Night契約書（以下「本アプリ」）の利用に関する条件を定めるものです。
            本アプリをダウンロードまたは利用することにより、本規約に同意したものとみなされます。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第2条（アプリの目的）</h2>
          <p className="text-gray-300">
            本アプリは、ナイト業界の契約書をスムーズに作成・管理することを目的としています。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第3条（無料機能とプレミアム機能）</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">無料機能</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>契約書の作成と保存</li>
                <li>PDF出力（ウォーターマークあり）</li>
                <li>基本的な契約管理機能</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">プレミアム機能（月額300円）</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>無制限の契約書作成</li>
                <li>ウォーターマークなしPDF出力</li>
                <li>クラウド同期</li>
                <li>デジタル署名機能</li>
                <li>テンプレートのカスタマイズ</li>
                <li>広告非表示</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第4条（サブスクリプションと課金）</h2>
          <div className="text-gray-300 space-y-3">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>プレミアム機能は月額300円（税込）のサブスクリプション制です。</li>
              <li>料金は毎月自動で更新されます。</li>
              <li>課金はApp Storeを通じて行われ、Appleの購入ポリシーが適用されます。</li>
              <li>購入後の返金には対応しておりません。</li>
              <li>解約は購入日の24時間前までに設定から行ってください。</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第5条（データの保存と管理）</h2>
          <div className="text-gray-300 space-y-3">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>契約書データは端末内に保存されます。</li>
              <li>プレミアム機能を利用する場合、クラウド同期が利用可能です。</li>
              <li>ユーザーは自身で定期的にバックアップを行うことを推奨します。</li>
              <li>データの消失や破損について、当方は一切責任を負いかねます。</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第6条（禁止行為）</h2>
          <p className="text-gray-300 mb-4">以下の行為を禁止します：</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>違法または不正な目的での使用</li>
            <li>第三者の権利を侵害する行為</li>
            <li>アプリの改ざんやリバースエンジニアリング</li>
            <li>他のユーザーへの迷惑行為</li>
          </ul>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第7条（知的財産権）</h2>
          <p className="text-gray-300">
            本アプリおよびそのコンテンツに関する知的財産権は、すべて当方に帰属します。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第8条（免責事項）</h2>
          <div className="text-gray-300 space-y-3">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>本アプリは契約書の作成をサポートするツールです。法的助言を提供するものではありません。</li>
              <li>作成された契約書の法的有効性については、専門家にご相談ください。</li>
              <li>本アプリの利用により生じた損害について、当方は一切責任を負いません。</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第9条（規約の変更）</h2>
          <p className="text-gray-300">
            当方は、必要に応じて本規約を変更する場合があります。変更後も引き続きアプリを利用した場合、
            変更に同意したものとみなされます。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第10条（準拠法と管轄）</h2>
          <p className="text-gray-300">
            本規約は日本法に準拠し、紛争が生じた場合は東京地方裁判所を専属的合意管轄裁判所とします。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">📩 お問い合わせ</h2>
          <div className="text-gray-300 space-y-3">
            <p>本規約に関するご質問は、以下のメールアドレスまでお問い合わせください。</p>
            <div className="bg-white/5 rounded-lg p-6">
              <p><strong className="text-white">開発者：</strong>HIDETA UTSUNO</p>
              <p className="mt-2">
                <strong className="text-white">Email：</strong>
                <a href="mailto:support@liv-jpn.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                  SUPPORT@LIV-JPN.COM
                </a>
              </p>
              <p className="mt-4 pt-4 border-t border-white/10">
                <strong className="text-white">制定日：</strong>2025年8月29日
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
