import Layout from "../../components/Layout";

export default function GomiNoHiPrivacy() {
  return (
    <Layout
      title="ゴミの日！ - プライバシーポリシー"
      description="個人情報の取り扱いについて"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🔒 プライバシーポリシー</h2>
          <p className="text-gray-300">
            ゴミの日！（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">📋 収集する情報</h2>
          <div className="text-gray-300 space-y-4">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">収集する情報</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>広告識別子（IDFA）- 広告配信のため</li>
                <li>デバイス情報（機種、OSバージョン）</li>
                <li>利用統計データ（機能の利用頻度）</li>
                <li>通知設定の許可状態</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">収集しない情報</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>氏名、メールアドレス、電話番号などの個人情報</li>
                <li>正確な位置情報</li>
                <li>連絡先</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">💾 データの保存</h2>
          <div className="text-gray-300 space-y-4">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">ローカル保存</h3>
              <p>選択した地域情報や収集スケジュール、通知設定は、すべて端末内に保存されます。</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">クラウド保存</h3>
              <p>本アプリは、ユーザーデータをクラウド上のサーバーに送信・保存しません。すべての処理は端末内で完結します。</p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🛡️ 情報の利用目的</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>アプリの機能提供（ゴミ収集日の通知・ウィジェット表示）</li>
            <li>サービスの改善</li>
            <li>サポート対応</li>
            <li>広告の表示と最適化</li>
          </ul>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🚫 第三者提供</h2>
          <p className="text-gray-300 mb-4">
            本アプリで設定した地域情報やスケジュールデータを第三者に提供することはありません。
          </p>
          <div className="bg-green-500/20 rounded-lg p-4">
            <p className="text-sm text-gray-300">
              ⚠️ 例外：法令に基づく開示要請があった場合、または利用規約違反が認められた場合に限り、
              必要最小限の情報を提供する場合があります。
            </p>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">📊 広告の利用（Google AdMob）</h2>
          <div className="text-gray-300 space-y-4">
            <p>本アプリは、Google AdMobを使用して広告を表示します。</p>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">AdMobが収集する情報</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>広告識別子（IDFA）</li>
                <li>デバイス情報</li>
                <li>アクセスログ</li>
                <li>広告インタラクション</li>
              </ul>
              <p className="mt-4">
                詳細は
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-green-200 transition-colors ml-1"
                >
                  Googleのプライバシーポリシー
                </a>
                をご確認ください。
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">広告のパーソナライゼーションをオフにする方法</h3>
              <p className="mb-2">デバイスの設定から以下の操作を行ってください：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>iOS:</strong> 設定 → プライバシー → 追跡 → 「Appからのトラッキング要求を許可」をオフ</li>
                <li><strong>iOS:</strong> 設定 → プライバシー → Apple広告 → 「パーソナライズされた広告」をオフ</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🔔 通知について</h2>
          <p className="text-gray-300">
            本アプリは、ゴミ収集日の前日・当日にお知らせするために通知の許可を求めます。
            通知は端末内のスケジュールに基づき送信され、外部サーバーとの通信は行いません。
            通知の許可は、いつでも端末の設定からオフにすることができます。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🔐 セキュリティ</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>ユーザーデータは端末内に保存されます。</li>
            <li>通信が発生する場合はSSL/TLSで保護されます。</li>
            <li>不正アクセスを防止するため、適切なセキュリティ対策を実施しています。</li>
          </ul>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🗑️ データの削除</h2>
          <p className="text-gray-300">
            本アプリをアンインストールすることで、端末内に保存された地域情報やスケジュールデータはすべて削除されます。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">👶 子供のプライバシー</h2>
          <p className="text-gray-300">
            本アプリは、13歳未満の子供を対象としていません。
            13歳未満の子供から意図的に個人情報を収集することはありません。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🔄 ポリシーの変更</h2>
          <p className="text-gray-300">
            本ポリシーは予告なく変更される場合があります。変更内容はアプリ内またはウェブサイトでお知らせします。
            定期的に本ページを確認することをお勧めします。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">📩 お問い合わせ</h2>
          <div className="text-gray-300 space-y-4">
            <p>プライバシーに関するご質問は以下までご連絡ください。</p>
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
