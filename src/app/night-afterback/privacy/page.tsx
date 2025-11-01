import Layout from "../../components/Layout";

export default function NightAfterbackPrivacy() {
  return (
    <Layout 
      title="Nightアフターバック - プライバシーポリシー" 
      description="個人情報の取り扱いについて"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Night AfteBack アプリ プライバシーポリシー</h2>
          <p className="text-sm text-gray-400 mb-6">最終更新日: 2025年9月18日</p>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              HIDETA UTSUNO（以下「開発者」といいます）は、Night AfteBackアプリ（以下「本アプリ」といいます）における、
              ユーザーの個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
            </p>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">1. 収集する情報</h3>
              <p className="mb-3">本アプリは以下の情報を収集します：</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-white">手数料記録データ:</strong> 支払先、金額、期限などユーザーが入力した情報</li>
                <li><strong className="text-white">写真・メモデータ:</strong> 手数料記録に添付された画像やメモ（デバイス内のみに保存）</li>
                <li><strong className="text-white">アプリ使用状況:</strong> 広告表示のための匿名使用統計</li>
                <li><strong className="text-white">課金情報:</strong> サブスクリプション購入に関する情報（Appleが管理）</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">2. 情報の使用目的</h3>
              <p className="mb-3">収集した情報は以下の目的で使用されます：</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>アプリ機能の提供（手数料管理、記録保存、バックアップ）</li>
                <li>広告配信の最適化</li>
                <li>アプリの改善とバグ修正</li>
                <li>カスタマーサポート</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">3. 情報の共有</h3>
              <p className="mb-3">以下の場合を除き、個人情報を第三者と共有することはありません：</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-white">Google AdMob:</strong> 広告配信のための匿名統計情報のみ</li>
                <li><strong className="text-white">Apple:</strong> App Store決済処理のため</li>
                <li>手数料データ・写真は第三者と共有しません</li>
                <li>法的要請がある場合</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">4. データの保護</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>すべてのデータはデバイス内に安全に保存されます</li>
                <li>写真データは外部サーバーに送信されません</li>
                <li>バックアップデータは暗号化して保護されます（プレミアム版）</li>
                <li>アプリ削除時にすべてのデータが完全に削除されます</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">5. ユーザーの権利</h3>
              <p className="mb-3">ユーザーは以下の権利を有します：</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>データの削除要求</li>
                <li>データの修正要求</li>
                <li>アプリの使用停止</li>
                <li>記録・写真の任意削除</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">6. 広告について</h3>
              <p>本アプリはGoogle AdMobを使用して広告を表示します（無料版のみ）。</p>
              <p className="mt-2">広告は適切な頻度で制限されており、過度な表示は行いません。</p>
              <p className="mt-2">プレミアム版では広告は一切表示されません。</p>
              <p className="mt-2">詳細はGoogleのプライバシーポリシーをご確認ください。</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">7. iCloudバックアップ</h3>
              <p className="mb-2">プレミアム版では、以下のデータがiCloudに保存されます：</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>手数料記録データ</li>
                <li>写真・メモデータ</li>
              </ul>
              <p className="mt-3">これらのデータは暗号化され、Apple社のプライバシーポリシーに従って管理されます。</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">8. お問い合わせ</h3>
              <p className="mb-3">プライバシーに関するお問い合わせは以下までご連絡ください：</p>
              <div className="bg-white/5 rounded-lg p-4 mt-3">
                <ul className="space-y-2">
                  <li><strong className="text-white">メール:</strong> <a href="mailto:support@liv-jpn.com" className="text-purple-300 hover:text-purple-200 transition-colors">support@liv-jpn.com</a></li>
                  <li><strong className="text-white">会社名:</strong> liv Inc</li>
                  <li><strong className="text-white">サポートページ:</strong> <a href="https://www.liv-jpn.com/support-afterback" className="text-purple-300 hover:text-purple-200 transition-colors">https://www.liv-jpn.com/support-afterback</a></li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">9. ポリシーの変更</h3>
              <p>本ポリシーは予告なく変更される場合があります。</p>
              <p className="mt-2">重要な変更がある場合は、アプリ内で通知いたします。</p>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-white font-semibold">開発者：HIDETA UTSUNO</p>
              <p className="text-sm text-gray-400 mt-2">制定日: 2025年9月18日</p>
              <p className="text-sm text-gray-400">最終更新日: 2025年9月18日</p>
            </div>

            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-sm text-yellow-200">
                <strong>⚠️ 免責：</strong>本アプリおよび本ページは法的助言を提供するものではありません。必要に応じて専門家へご相談ください。
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
