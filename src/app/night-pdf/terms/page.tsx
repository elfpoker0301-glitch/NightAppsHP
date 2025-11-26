import Layout from "../../components/Layout";

export default function NightPDFTerms() {
  return (
    <Layout 
      title="Night PDF - 利用規約" 
      description="Night PDFの利用規約"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第1条（利用規約の適用）</h2>
          <p className="text-gray-300">
            本規約は、Night PDF（以下「本アプリ」）の利用に関する条件を定めるものです。
            本アプリをダウンロード、インストール、または使用することにより、本規約に同意したものとみなされます。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第2条（アプリの目的）</h2>
          <p className="text-gray-300">
            本アプリは、PDFファイルの編集・注釈追加をスムーズに行うことを目的としています。
            バケツ塗り機能をはじめとした革新的な編集ツールを提供します。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第3条（無料機能とプレミアム機能）</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">無料機能</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>ペンツール（手書き編集）</li>
                <li>消しゴムツール</li>
                <li>テキスト挿入</li>
                <li>PDF保存・共有</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">プレミアム機能（広告視聴で24時間利用可能）</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>ハイライト機能</li>
                <li>図形描画（矩形、円、直線、矢印）</li>
                <li>バケツ塗り機能</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第4条（広告とプレミアム機能）</h2>
          <div className="text-gray-300 space-y-4">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>本アプリは無料で提供され、Google AdMobによる広告が表示されます。</li>
              <li>リワード広告（動画広告）を視聴することで、プレミアム機能が24時間利用可能になります。</li>
              <li>広告の視聴は任意です。</li>
              <li>広告の在庫状況により、表示されない場合があります。</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第5条（データの保存と管理）</h2>
          <div className="text-gray-300 space-y-4">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>編集したPDFファイルは端末内に保存されます。</li>
              <li>ユーザーは自身で定期的にバックアップを行うことを推奨します。</li>
              <li>データの消失や破損について、当方は一切責任を負いかねます。</li>
              <li>本アプリをアンインストールすると、保存されたデータはすべて削除されます。</li>
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
            <li>他のユーザーへの迷惑行為</li>
          </ul>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第7条（知的財産権）</h2>
          <p className="text-gray-300">
            本アプリおよびそのコンテンツに関する知的財産権は、すべて当方に帰属します。
            ユーザーが作成・編集したPDFファイルの著作権は、ユーザーに帰属します。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">第8条（免責事項）</h2>
          <div className="text-gray-300 space-y-4">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>本アプリは「現状有姿」で提供されます。動作、品質、性能について保証しません。</li>
              <li>本アプリはPDF編集をサポートするツールです。法的助言を提供するものではありません。</li>
              <li>編集したPDFの法的有効性については、専門家にご相談ください。</li>
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
                <a href="mailto:support@liv-jpn.com" className="text-orange-300 hover:text-orange-200 transition-colors">
                  support@liv-jpn.com
                </a>
              </p>
              <p className="mt-4 pt-4 border-t border-white/10">
                <strong className="text-white">最終更新日：</strong>2025年11月26日
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
