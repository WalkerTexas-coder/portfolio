import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import cplImage from "../../images/cpl2.png";

export default function CompoundLivePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <article className="pt-24 pb-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
              ← Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions Engineer at CompoundLive</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Client Implementation Excellence • 2022-2024
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <Image
              src={cplImage}
              alt="CompoundLive Platform"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>The Challenge</h2>
            <p>
              Healthcare brands were struggling with lengthy, complex telehealth platform implementations. 
              What should have been straightforward integrations were taking 5+ months, causing client 
              frustration and delayed revenue generation.
            </p>

            <h2>My Approach</h2>
            <p>
              I transformed our implementation process from a chaotic, ad-hoc approach into a systematic, 
              repeatable methodology. This involved:
            </p>
            <ul>
              <li>Standardizing client onboarding workflows</li>
              <li>Creating reusable integration templates</li>
              <li>Developing automated testing procedures</li>
              <li>Building comprehensive documentation systems</li>
            </ul>

            <h2>Technical Implementation</h2>
            <p>
              Led the design and development of custom telehealth workflows for each client, including:
            </p>
            <ul>
              <li><strong>Payment System Integration:</strong> Stripe, PayPal, and custom billing solutions</li>
              <li><strong>Patient Management Features:</strong> Appointment scheduling, medical records, prescription tracking</li>
              <li><strong>Compliance Systems:</strong> HIPAA-compliant data handling and storage</li>
              <li><strong>Custom Workflows:</strong> Tailored consultation flows for different medical specialties</li>
            </ul>

            <h2>Results</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <ul className="list-none space-y-2">
                <li><strong>🚀 Implementation Time:</strong> Reduced from 5 months to 5 weeks (90% improvement)</li>
                <li><strong>😊 Client Satisfaction:</strong> 30% improvement in satisfaction scores</li>
                <li><strong>💰 Deal Closure:</strong> 25% increase in deal closure rates</li>
                <li><strong>🔄 Process Efficiency:</strong> Standardized workflows across all implementations</li>
              </ul>
            </div>

            <h2>Key Learnings</h2>
            <p>
              This role taught me the critical importance of systematic process improvement in healthcare technology. 
              I learned that the difference between a 5-month implementation and a 5-week implementation isn't just 
              technical—it's about understanding client needs, anticipating common problems, and building reusable solutions.
            </p>

            <p>
              The experience also reinforced my belief that healthcare technology should be invisible to end users. 
              The best telehealth platforms are the ones that doctors and patients don't have to think about—they 
              just work.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex justify-between">
              <Link href="/experience/rugiet-health" className="text-blue-600 dark:text-blue-400 hover:underline">
                ← Previous: Rugiet Health
              </Link>
              <Link href="/experience/learn-academy" className="text-blue-600 dark:text-blue-400 hover:underline">
                Next: LEARN Academy →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}