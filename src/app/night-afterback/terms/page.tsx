import Layout from "../../components/Layout";

export default function NightAfterbackTerms() {
  return (
    <Layout 
      title="Nightアフターバック - 利用規約" 
      description="Nightアフターバックの利用規約"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">利用規約</h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第1条（適用）</h3>
              <p>
                本規約は、UTSUNO HIDETA（以下「当社」といいます）が提供するNightアフターバック（以下「本サービス」といいます）の利用条件を定めるものです。
                本サービスをご利用いただくには、本規約に同意いただく必要があります。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第2条（利用登録）</h3>
              <p>
                本サービスの利用を希望する方は、本規約に同意の上、当社の定める方法によって利用登録を申請し、
                当社がこれを承認することによって、利用登録が完了するものとします。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第3条（禁止事項）</h3>
              <p className="mb-2">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
                <li>当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>本サービスによって得られた情報を商業的に利用する行為</li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>不正な目的を持って本サービスを利用する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第4条（本サービスの提供の停止等）</h3>
              <p>
                当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第5条（免責事項）</h3>
              <p>
                当社は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。
                ただし、本サービスに関する当社とユーザーとの間の契約が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第6条（サービス内容の変更等）</h3>
              <p>
                当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、
                これによってユーザーに生じた損害について一切の責任を負いません。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第7条（利用規約の変更）</h3>
              <p>
                当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
                なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">第8条（お問い合わせ）</h3>
              <p>
                本サービスに関するお問い合わせは、以下の連絡先までお願いいたします。
              </p>
              <div className="bg-white/5 rounded-lg p-4 mt-3">
                <p>Email: <a href="mailto:app@liv-jpn.com" className="text-purple-300 hover:text-purple-200 transition-colors">app@liv-jpn.com</a></p>
                <p className="mt-2">開発者: UTSUNO HIDETA</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400">最終更新日: 2025年11月1日</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
