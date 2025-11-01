import Layout from "../../components/Layout";

export default function NightAfterbackPrivacy() {
  return (
    <Layout 
      title="Nightアフターバック - プライバシーポリシー" 
      description="個人情報の取り扱いについて"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">プライバシーポリシー</h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              UTSUNO HIDETA（以下「当社」といいます）は、Nightアフターバック（以下「本アプリ」といいます）における、
              ユーザーの個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
            </p>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第1条（収集する情報）</h3>
              <p className="mb-2">当社は、本アプリにおいて以下の情報を収集します。</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>ユーザー登録情報（氏名、メールアドレス等）</li>
                <li>サポート案件情報（顧客データ、対応履歴等）</li>
                <li>満足度調査データ（アンケート回答、スコア等）</li>
                <li>利用履歴情報（アクセス日時、操作ログ等）</li>
                <li>デバイス情報（デバイスID、OS情報等）</li>
                <li>その他、本アプリの利用に必要な情報</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第2条（利用目的）</h3>
              <p className="mb-2">収集した個人情報は、以下の目的で利用します。</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>本アプリのサービス提供のため</li>
                <li>本アプリの品質向上・機能改善のため</li>
                <li>ユーザーサポート・お問い合わせ対応のため</li>
                <li>利用規約違反や不正利用の防止のため</li>
                <li>重要なお知らせの通知のため</li>
                <li>統計データの作成・分析のため</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第3条（第三者提供）</h3>
              <p>
                当社は、ユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。
                ただし、以下の場合を除きます。
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第4条（セキュリティ）</h3>
              <p>
                当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
                すべてのデータはAES-256暗号化により保護され、不正アクセス、紛失、破損、改ざん、漏洩などを防止します。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第5条（データの保存期間）</h3>
              <p>
                個人情報は、利用目的が達成され不要となった時点で、遅滞なく削除します。
                ただし、法令により保存が義務付けられている場合は、当該期間保存します。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第6条（ユーザーの権利）</h3>
              <p className="mb-2">ユーザーは、当社に対して以下の権利を有します。</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>個人情報の開示を求める権利</li>
                <li>個人情報の訂正・追加・削除を求める権利</li>
                <li>個人情報の利用停止を求める権利</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第7条（Cookieおよび類似技術）</h3>
              <p>
                本アプリでは、サービスの改善および最適化のため、Cookieや類似の技術を使用する場合があります。
                ユーザーはブラウザの設定によりCookieを無効化できますが、一部機能が利用できなくなる可能性があります。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第8条（分析ツールの使用）</h3>
              <p>
                本アプリでは、Google Analyticsなどの分析ツールを使用しています。
                これらのツールは、Cookieを使用してユーザーの利用状況を収集・分析しますが、個人を特定する情報は含まれません。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第9条（プライバシーポリシーの変更）</h3>
              <p>
                当社は、本ポリシーの内容を適宜見直し、その改善に努めます。
                変更後のプライバシーポリシーは、本アプリまたはウェブサイトに掲載したときから効力を生じるものとします。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第10条（お問い合わせ）</h3>
              <p>
                本ポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。
              </p>
              <div className="bg-white/5 rounded-lg p-4 mt-3">
                <p>Email: <a href="mailto:app@liv-jpn.com" className="text-purple-300 hover:text-purple-200 transition-colors">app@liv-jpn.com</a></p>
                <p className="mt-2">開発者: UTSUNO HIDETA</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400">制定日: 2025年11月1日</p>
              <p className="text-sm text-gray-400">最終更新日: 2025年11月1日</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
