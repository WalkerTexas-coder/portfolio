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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hedfirst: First Brand on Teligant Platform</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Product Lead • September 2024 - September 2025
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
          <div className="experience-prose prose-lg dark:prose-invert max-w-none">
            <h2>The Challenge</h2>
            <p>
              Hedfirst was the first brand implementation on the Teligant platform—the proving ground for everything we built. 
              This wasn't just a demo. It was launching an Idaho-based telehealth clinic from concept to operational with real 
              patients, live prescriptions, and multi-state pharmacy fulfillment in 6 months.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 my-8">
              <h3 className="text-2xl font-semibold mb-4">My Role</h3>
              <p className="mb-4">
                I led the end-to-end product experience for Hedfirst, bridging business objectives, clinical requirements, 
                and technical execution. This meant:
              </p>
              <ul className="space-y-2">
                <li>Co-leading complete clinic buildout including LegitScript certification and pharmacy network integration</li>
                <li>Configuring 39 disease states and 514 medication protocols with HIPAA-compliant data integrity</li>
                <li>Collaborating directly with contracted physicians and medical director to optimize clinical workflows</li>
                <li>Coordinating with pharmacy partners to ensure seamless fulfillment and compliance</li>
                <li>Managing the Hedfirst launch as flagship telehealth compounding clinic for migraine treatments</li>
              </ul>
            </div>

            <h2>Product Strategy & Implementation</h2>
            
            <h3>LegitScript Certification</h3>
            <p>
              Led the LegitScript certification process with minimal executive oversight—managing all documentation, 
              coordinating with LegitScript compliance team, responding to certification requirements, and achieving 
              successful approval. This certification was critical for operating telehealth across multiple states 
              and established our healthcare regulatory compliance framework.
            </p>

            <h3>Pharmacy Network Integration</h3>
            <p>
              Coordinated integration with 3 pharmacy partners for prescription fulfillment. This included:
            </p>
            <ul>
              <li>DoseSpot e-prescribing implementation for HIPAA-compliant electronic prescriptions</li>
              <li>SureScripts network connectivity for pharmacy transmission across 48 states</li>
              <li>ShipStation fulfillment integration for order management and tracking</li>
              <li>Multi-pharmacy routing logic to prevent prescription errors</li>
            </ul>

            <h3>Medication & Disease State Configuration</h3>
            <p>
              Configured comprehensive medication catalog supporting the clinic's therapeutic focus:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
              <ul className="list-none space-y-2">
                <li><strong>514 Medication Protocols:</strong> Complete dosing, form factors, and compounding specifications</li>
                <li><strong>39 Disease States:</strong> Migraine, peptide therapy, weight loss, hair growth, sexual wellness, and more</li>
                <li><strong>Clinical Setup Efficiency:</strong> 70% reduction in setup time through systematic configuration</li>
                <li><strong>HIPAA-Compliant Data:</strong> All medication data maintained regulatory compliance standards</li>
              </ul>
            </div>

            <h3>AI Integration & Clinical Documentation</h3>
            <p>
              Architected and deployed Claude AI integration for clinical documentation automation:
            </p>
            <ul>
              <li>Created 13-section Universal AI Medical Assessment template serving as operational backbone</li>
              <li>Integrated Claude 4 Sonnet via AWS Bedrock with Business Associate Agreement (BAA)</li>
              <li>Configured zero retention policy for HIPAA compliance</li>
              <li>Reduced manual processing time by 60% while maintaining 92% clinical accuracy</li>
              <li>Built Store Admin AI Chat for patient analysis and treatment planning</li>
            </ul>

            <h3>Lab Testing Integration</h3>
            <p>
              Integrated Choose Health for at-home lab testing, expanding Hedfirst from migraine-focused to 
              comprehensive health monitoring:
            </p>
            <ul>
              <li>Analyzed 7-endpoint REST API plus webhook system for real-time results</li>
              <li>Designed patient-facing lab ordering, tracking, and results viewing</li>
              <li>Created store admin lab management with Choose Health panel integration</li>
              <li>Established HIPAA-compliant data storage with 7-year retention requirements</li>
              <li>Product catalog: 6 lab test panels priced $99-$145 targeting complex conditions</li>
            </ul>

            <h2>Launch Results</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-semibold mb-4">August 4, 2025 Launch Metrics</h3>
              <ul className="list-none space-y-3">
                <li><strong>🚀 Beta Patients:</strong> 25 patients onboarded in first 3 weeks post-launch</li>
                <li><strong>💰 First-Month Revenue:</strong> $12,475 generated through AI Care Membership</li>
                <li><strong>💊 Medication Catalog:</strong> 514 medications across 39 disease states operational</li>
                <li><strong>🏥 Fulfillment Coverage:</strong> 48-state prescription fulfillment through multi-pharmacy network</li>
                <li><strong>🔬 Lab Adoption:</strong> 40% of beta patients ordered lab tests within first month</li>
                <li><strong>⚕️ Clinical Accuracy:</strong> 92% diagnostic accuracy with AI enhancement vs. 74-76% for physicians alone</li>
                <li><strong>✅ Routing Accuracy:</strong> Zero prescription routing errors through systematic workflow design</li>
              </ul>
            </div>

            <h2>Key Projects During Hedfirst Launch</h2>
            <h3>Pharmacy Fulfillment Workflow System</h3>
            <p>
              Doctors were manually routing prescriptions across 4 pharmacy partners with no systematic guidance. 
              I spent two days shadowing doctors and discovered they had no audit trail to track what they'd sent. 
              Created pharmacy-by-pharmacy queue workflow positioned above DoseSpot iframe, preventing prescription 
              errors while maintaining doctor flexibility. Wrote 12 Jira tickets across 2 sprint cycles. Result: 
              Zero routing errors across 200+ monthly prescriptions.
            </p>

            <h3>Order Hierarchy System</h3>
            <p>
              Healthcare transactions have complex structures—medications with recurring fills, consultations with 
              multiple appointments, memberships with benefits. Designed 3-tier order hierarchy (Master order → 
              Sub-categories → Sub-sub categories) handling all product types. This foundation enabled appointment 
              tokens, subscription management, and complete customer service tracking.
            </p>

            <h3>PayTheory Billing Integration</h3>
            <p>
              User research revealed different patient payment preferences—some wanted annual plans for savings, 
              others needed quarterly for cash flow. Designed flexible subscription architecture supporting 30-365 
              day billing cycles. Created membership benefits configuration system. Result: Enabled $499/year AI 
              Care Membership model that became Hedfirst's primary revenue driver.
            </p>

            <h2>Clinical Collaboration</h2>
            <p>
              Worked directly with contracted physicians and medical director to optimize clinical workflows:
            </p>
            <ul>
              <li>Developed patient questionnaires and assessment workflows balancing clinical needs with user experience</li>
              <li>Ensured appropriate prescribing protocols and quality assurance systems across telehealth platform</li>
              <li>Maintained 98% quality assurance score with zero regulatory violations</li>
              <li>Directed physician collaboration across 100+ weekly patient cases</li>
            </ul>

            <h2>What I Learned</h2>
            <p>
              Hedfirst taught me that successful healthcare products require obsessive attention to operational 
              details most SaaS products never consider:
            </p>
            <ul>
              <li><strong>Pharmacy relationships are critical:</strong> Technology is only as good as the fulfillment network</li>
              <li><strong>Clinical protocols need clarity:</strong> Doctors need evidence-based treatment guidelines, not just features</li>
              <li><strong>Regulatory compliance is non-negotiable:</strong> Every feature must consider HIPAA, state regulations, and medical standards</li>
              <li><strong>Operational excellence beats technical perfection:</strong> The hardest problems aren't technical—they're workflow and coordination</li>
            </ul>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 mt-8">
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