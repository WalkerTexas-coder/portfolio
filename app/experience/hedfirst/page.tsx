import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function HedfirstPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hedfirst Launch: From Beta to Production</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              First Brand Implementation • August 2025
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <Image
              src="https://cdn.prod.website-files.com/67a509f5940083778a2478d0/67d16eb0733bbcccda908f61_hedfirst-home-screen.avif"
              alt="Hedfirst Platform Interface"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>The First Real Test</h2>
            <p>
              Hedfirst wasn't just another client implementation—it was the proving ground for everything we built 
              with the Teligant platform. This was where theory met reality: real patients, live prescriptions, 
              actual pharmacy fulfillment, and a $499/year membership model that had to work from day one.
            </p>

            <h2>The Challenge: Migraine Care Reimagined</h2>
            <p>
              Traditional migraine treatment is reactive—patients suffer through attacks, then try to get emergency 
              care or wait weeks for specialist appointments. Hedfirst's vision was different: proactive, AI-powered 
              migraine management with immediate access to both preventive and rescue medications.
            </p>

            <h2>Product Strategy</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3>AI Care Membership Model</h3>
              <ul>
                <li><strong>$499/year membership:</strong> All-inclusive migraine care</li>
                <li><strong>Unlimited consultations:</strong> No per-visit fees</li>
                <li><strong>Medication included:</strong> Both preventive and rescue medications</li>
                <li><strong>Lab testing:</strong> Comprehensive health monitoring through Choose Health</li>
                <li><strong>AI assessment:</strong> Personalized treatment recommendations</li>
              </ul>

              <h3>Clinical Approach</h3>
              <ul>
                <li><strong>Preventive Focus:</strong> Reduce frequency and severity of migraines</li>
                <li><strong>Rescue Protocol:</strong> Fast-acting medications for breakthrough attacks</li>
                <li><strong>Lifestyle Integration:</strong> Sleep, stress, and trigger management</li>
                <li><strong>Continuous Monitoring:</strong> Regular check-ins and medication adjustments</li>
              </ul>
            </div>

            <h2>Implementation Challenges</h2>
            <p>
              Launching Hedfirst taught me that healthcare product management is 50% technology and 50% operations. 
              The platform could handle the technical requirements, but making it work for real patients required 
              solving dozens of operational details.
            </p>

            <h3>Pharmacy Coordination</h3>
            <ul>
              <li>Migraine medications have complex insurance coverage patterns</li>
              <li>Some rescue medications require special handling and shipping</li>
              <li>Patients needed clear guidance on when to use preventive vs. rescue medications</li>
              <li>Pharmacy routing had to account for medication availability and patient location</li>
            </ul>

            <h3>Clinical Workflows</h3>
            <ul>
              <li>Doctors needed streamlined protocols for migraine assessment</li>
              <li>AI assessment had to capture migraine-specific triggers and patterns</li>
              <li>Follow-up scheduling had to align with medication adjustment timelines</li>
              <li>Emergency protocols for severe or unusual migraine presentations</li>
            </ul>

            <h2>Launch Execution</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3>Beta Phase (July 2025)</h3>
              <ul>
                <li>Recruited 25 beta patients with chronic migraines</li>
                <li>Conducted comprehensive onboarding and AI assessments</li>
                <li>Established baseline migraine frequency and severity metrics</li>
                <li>Fine-tuned pharmacy routing and medication protocols</li>
              </ul>

              <h3>Production Launch (August 4, 2025)</h3>
              <ul>
                <li>Platform went live with full payment processing</li>
                <li>All 25 beta patients converted to paid memberships</li>
                <li>First live prescriptions processed through DoseSpot</li>
                <li>Choose Health lab orders placed and processed</li>
                <li>Pharmacy fulfillment operational across 48 states</li>
              </ul>
            </div>

            <h2>Real-World Results</h2>
            <p>
              The true test of any healthcare platform isn't the demo—it's what happens when real patients 
              need real care. Hedfirst's launch proved that our platform could handle the complexity of 
              actual healthcare delivery.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <ul className="list-none space-y-2">
                <li><strong>👥 Beta Patients:</strong> 25 patients with chronic migraines</li>
                <li><strong>💊 Prescriptions:</strong> 100% successfully routed and fulfilled</li>
                <li><strong>🔬 Lab Tests:</strong> Comprehensive health panels for all patients</li>
                <li><strong>💰 Revenue:</strong> $12,475 in first-month memberships</li>
                <li><strong>⭐ Satisfaction:</strong> 4.8/5 average patient rating</li>
                <li><strong>🏥 Coverage:</strong> 48-state prescription fulfillment operational</li>
              </ul>
            </div>

            <h2>Patient Stories</h2>
            <p>
              The most rewarding part of launching Hedfirst was hearing from patients whose lives were actually 
              improved by what we built:
            </p>
            <ul>
              <li><strong>Sarah, 34:</strong> "First time in years I have preventive medication that actually works. The AI assessment caught triggers I never connected to my migraines."</li>
              <li><strong>Mike, 42:</strong> "Having rescue medication on hand gives me confidence to travel again. The consultation process was so much easier than going to urgent care."</li>
              <li><strong>Jennifer, 28:</strong> "The lab results showed vitamin deficiencies that were contributing to my migraines. Now I have a complete treatment plan, not just pain management."</li>
            </ul>

            <h2>Operational Lessons</h2>
            <p>
              Launching Hedfirst taught me that successful healthcare products require obsessive attention to 
              operational details that most SaaS products never consider:
            </p>
            <ul>
              <li><strong>Pharmacy Relationships:</strong> Technology is only as good as the fulfillment network</li>
              <li><strong>Clinical Protocols:</strong> Doctors need clear, evidence-based treatment guidelines</li>
              <li><strong>Patient Education:</strong> Complex medical information must be accessible and actionable</li>
              <li><strong>Regulatory Compliance:</strong> Every feature must consider HIPAA, state regulations, and medical standards</li>
            </ul>

            <h2>From Launch to Scale</h2>
            <p>
              Hedfirst's successful launch validated our multi-tenant platform approach. The same infrastructure 
              that powers migraine care can be configured for other chronic conditions—diabetes, hypertension, 
              mental health, and more. Each new brand benefits from the operational excellence we built with Hedfirst.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
              <p className="mb-0">
                <strong>Experience Hedfirst:</strong> See the platform in action at{" "}
                <Link href="https://www.hedfirst.com/" className="text-green-600 dark:text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  hedfirst.com
                </Link>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex justify-between">
              <Link href="/experience/teligant" className="text-blue-600 dark:text-blue-400 hover:underline">
                ← Related: Teligant Platform
              </Link>
              <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
                Back to Portfolio →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}