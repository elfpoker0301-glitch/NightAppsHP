import Layout from "../components/Layout";

export default function AdMobPage() {
  return (
    <Layout 
      title="NightApp AdMob Policy" 
      description="Google AdMob compliance page for NightApp applications"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <div className="text-gray-300 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">AdMob Integration Policy</h2>
              <p>
                This page serves as a compliance document for Google AdMob integration 
                in NightApp applications. All advertising content is served in accordance 
                with Google&apos;s advertising policies and guidelines.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Advertising Standards</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>All advertisements comply with Google AdMob policies</li>
                <li>No misleading or inappropriate content</li>
                <li>User privacy is protected in accordance with GDPR and local regulations</li>
                <li>Advertisement placement follows Google&apos;s best practices</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Data Usage</h2>
              <p>
                Advertising identifiers and usage data are processed in accordance with 
                our privacy policies and Google&apos;s data processing requirements. 
                Users can opt out of personalized advertising through their device settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
              <p>
                For any concerns regarding advertisements or AdMob compliance, 
                please contact us at:
              </p>
              <div className="bg-white/5 rounded-lg p-4 mt-3">
                <p>Email: 
                  <a 
                    href="mailto:app@liv-jpn.com" 
                    className="text-purple-300 hover:text-purple-200 transition-colors ml-1"
                  >
                    app@liv-jpn.com
                  </a>
                </p>
                <p className="mt-2">Developer: UTSUNO HIDETA</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Applications</h2>
              <p>This policy applies to the following applications:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 pl-4">
                <li>Night名簿帳 (Night Address Book)</li>
                <li>Night契約書 (Night Contract)</li>
                <li>Nightアフターバック (Night After Back)</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400">
                Last updated: October 2, 2025
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}