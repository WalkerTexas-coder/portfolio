import Link from "next/link";

export const metadata = {
  title: "Resume - Austin Walker",
  description: "Download Austin Walker's resume - Healthcare-focused or General Product Manager versions available",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Choose Your Resume
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            Select the version that best fits your needs
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Healthcare Resume */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-3">Healthcare Domain</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Focused on telehealth platforms, prescription management, pharmacy fulfillment, and HIPAA-compliant healthcare SaaS
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Healthcare platform experience</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Regulatory compliance (HIPAA, SOC 2)</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Clinical workflow optimization</span>
                </div>
              </div>

              <Link
                href="/Austin_Walker_TechnicalProductManager_Healthcare.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Download Healthcare Resume
              </Link>
            </div>

            {/* General Product Manager Resume */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-3">General Product Manager</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Technical product management for B2B SaaS, platform development, and complex technical products
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">B2B SaaS platform experience</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Technical depth & engineering collaboration</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">0-to-1 product development</span>
                </div>
              </div>

              <Link
                href="/Austin_Walker_TechnicalProductManager.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-purple-600 text-white text-center rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Download General Resume
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
