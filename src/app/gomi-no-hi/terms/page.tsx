import Layout from "../../components/Layout";

export default function GomiNoHiTerms() {
  return (
    <Layout
      title="ゴミの日！ - 利用規約"
      description="ゴミの日！の利用規約"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第1条（利用規約の適用）</h2>
          <p className="text-gray-300">
            本規約は、ゴミの日！（以下「本アプリ」）の利用に関する条件を定めるものです。
            本アプリをダウンロード、インストール、または使用することにより、本規約に同意したものとみなされます。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第2条（アプリの目的）</h2>
          <p className="text-gray-300">
            本アプリは、ユーザーが居住する地域のゴミ収集日を分かりやすく管理し、
            通知・ホーム画面ウィジェットによってゴミ出しを忘れないようサポートすることを目的としています。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第3条（収集スケジュールの正確性）</h2>
          <div className="text-gray-300 space-y-4">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>本アプリが提供するゴミ収集スケジュールは、自治体が公表する情報に基づき作成していますが、その正確性・最新性を保証するものではありません。</li>
              <li>収集日は自治体の都合により変更される場合があります。最新の情報は各自治体の公式情報をご確認ください。</li>
              <li>本アプリの情報を基にした行動により生じた損害について、当方は一切の責任を負いません。</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第4条（無料機能と広告）</h2>
          <div className="text-gray-300 space-y-4">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>本アプリは無料で提供され、すべての機能を無料で利用できます。</li>
              <li>本アプリは、Google AdMobによる広告が表示されます。</li>
              <li>広告の在庫状況により、表示されない場合があります。</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第5条（データの保存と管理）</h2>
          <div className="text-gray-300 space-y-4">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>地域設定・収集スケジュール・通知設定は端末内に保存されます。</li>
              <li>本アプリをアンインストールすると、保存されたデータはすべて削除されます。</li>
              <li>データの消失について、当方は一切責任を負いかねます。</li>
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
            <li>広告の不正な操作や回避</li>
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
          <div className="text-gray-300 space-y-4">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>本アプリは「現状有姿」で提供されます。動作、品質、性能について保証しません。</li>
              <li>通知が届かない、またはウィジェットが正しく表示されない場合がありますが、当方は責任を負いません。</li>
              <li>本アプリの使用により生じた損害について、当方は一切責任を負いません。</li>
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
                <a href="mailto:support@liv-jpn.com" className="text-green-300 hover:text-green-200 transition-colors">
                  support@liv-jpn.com
                </a>
              </p>
              <p className="mt-4 pt-4 border-t border-white/10">
                <strong className="text-white">最終更新日：</strong>2026年6月21日
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
