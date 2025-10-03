import Layout from "../../components/Layout";

export default function NightMeiboPrivacy() {
  return (
    <Layout 
      title="Night名簿帳 - プライバシーポリシー" 
      description="個人情報の取り扱いについて"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <div className="text-gray-300 space-y-6">
            <p className="text-sm text-gray-400">最終更新日: 2025年10月2日</p>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-4">1. 基本方針</h2>
              <p>
                UTSUNO HIDETA（以下「当社」）は、Night名簿帳サービス（以下「本サービス」）における
                利用者の個人情報の取り扱いについて、以下のプライバシーポリシーを定めます。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">2. 収集する情報</h2>
              <p>当社は、以下の情報を収集いたします：</p>
              <ul className="list-disc list-inside mt-3 space-y-2 pl-4">
                <li>利用者が入力した連絡先情報（名前、電話番号、メールアドレス等）</li>
                <li>アプリの利用状況に関する情報</li>
                <li>デバイス情報（OS、機種名、端末識別子等）</li>
                <li>クラッシュレポートやエラーログ</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">3. 情報の利用目的</h2>
              <p>収集した個人情報は、以下の目的で利用いたします：</p>
              <ul className="list-disc list-inside mt-3 space-y-2 pl-4">
                <li>本サービスの提供・運営</li>
                <li>利用者サポート</li>
                <li>サービスの改善・開発</li>
                <li>利用規約違反の対応</li>
                <li>メンテナンス・重要なお知らせの配信</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">4. 第三者への提供</h2>
              <p>
                当社は、以下の場合を除いて、利用者の個人情報を第三者に提供することはありません：
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 pl-4">
                <li>利用者の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">5. データの保存・セキュリティ</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">暗号化</h3>
                <p>すべての個人情報は、AES-256暗号化により保護されています。</p>
                
                <h3 className="text-lg font-semibold text-white">アクセス制御</h3>
                <p>個人情報へのアクセスは、必要最小限の権限を持つ担当者に限定されています。</p>
                
                <h3 className="text-lg font-semibold text-white">バックアップ</h3>
                <p>データの安全性確保のため、定期的なバックアップを実施しています。</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">6. 利用者の権利</h2>
              <p>利用者は、以下の権利を有します：</p>
              <ul className="list-disc list-inside mt-3 space-y-2 pl-4">
                <li>個人情報の開示請求</li>
                <li>個人情報の訂正・削除請求</li>
                <li>個人情報の利用停止請求</li>
                <li>アカウントの削除</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">7. Cookieについて</h2>
              <p>
                本サービスでは、サービスの改善や利用状況の分析のために、
                Cookieや類似の技術を使用する場合があります。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">8. プライバシーポリシーの変更</h2>
              <p>
                当社は、必要に応じて本プライバシーポリシーを変更することがあります。
                変更後のプライバシーポリシーは、本ページに掲載したときから効力を生じるものとします。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">9. お問い合わせ</h2>
              <p>
                本プライバシーポリシーに関するお問い合わせは、以下までご連絡ください：
              </p>
              <div className="bg-white/5 rounded-lg p-4 mt-3">
                <p>メールアドレス: 
                  <a 
                    href="mailto:app@liv-jpn.com" 
                    className="text-purple-300 hover:text-purple-200 transition-colors ml-1"
                  >
                    app@liv-jpn.com
                  </a>
                </p>
                <p className="mt-2">責任者: UTSUNO HIDETA</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}