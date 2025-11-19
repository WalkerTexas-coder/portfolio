import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import StoryNavigation from "../../components/StoryNavigation";

export default function TeligantHedfirstPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <article className="pt-24 pb-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          {/* Story Navigation - Top */}
          <div className="mb-12">
            <StoryNavigation
              currentStep={4}
              totalSteps={7}
              nextUrl="/journey/compoundlive"
              nextLabel="Next: CompoundLive"
              prevUrl="/journey/experience"
              prevLabel="Back"
              showProgress={true}
            />
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Teligant & Hedfirst: Multi-Tenant Healthcare SaaS</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Technical Product Manager • August 2024 - September 2025
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <Image
              src="https://cdn.prod.website-files.com/67ad2c6bdcb40e4e1f8634c9/67af2f828dde99af89ddfdfa_2image.avif"
              alt="Teligant Platform Dashboard"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="experience-prose prose-lg dark:prose-invert max-w-none">
            <h2>Building Multi-Tenant Healthcare SaaS from Concept to Production</h2>
            <p>
              The Teligant platform represents everything I learned from building telehealth at CompoundLive and
              Rugiet Health. This was the opportunity to build it right from the ground up—a multi-tenant SaaS
              platform that could power multiple telehealth brands while maintaining strict HIPAA compliance,
              operational excellence, and native AI capabilities.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 my-8">
              <h3 className="text-2xl font-semibold mb-4">The Vision</h3>
              <p>
                After leaving CompoundLive/Rugiet (acquired by ListenCo), I proposed to Kelly Smith that I could
                help build a next-generation telehealth platform incorporating everything I'd learned about what
                worked and what didn't. The vision: sophisticated multi-tenant healthcare SaaS with native AI
                capabilities, better clinical workflows, and more flexible product configuration.
              </p>
            </div>

            <h2>Platform Architecture</h2>

            <h3>Multi-Tenant Design</h3>
            <p>
              Defined multi-tenant SaaS architecture enabling multiple healthcare brands on a single platform:
            </p>
            <ul>
              <li><strong>Isolated Tenant Instances:</strong> Each brand receives isolated patient portal, doctor portal, admin dashboard, and API endpoints</li>
              <li><strong>AWS ECS Deployment:</strong> Separate Docker containers for each service layer ensuring scalability</li>
              <li><strong>Cross-Tenant Data Transfer:</strong> Built HIPAA-compliant patient data transfer with explicit consent workflow</li>
              <li><strong>Rapid White-Label Deployment:</strong> Architecture enables quick brand launches with isolated data</li>
            </ul>

            <h3>Core Technical Integrations</h3>
            <p>
              Coordinated 8+ third-party API integrations with complex compliance requirements:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
              <ul className="space-y-3">
                <li><strong>DoseSpot E-Prescribing:</strong> HIPAA-compliant electronic prescriptions for non-controlled substances, 514+ medication protocols with dosage variants</li>
                <li><strong>SureScripts Network:</strong> Pharmacy transmission connectivity for multi-state prescription fulfillment</li>
                <li><strong>Choose Health Labs:</strong> 7 REST endpoints plus webhook system for at-home lab testing with real-time results</li>
                <li><strong>PayTheory Billing:</strong> Flexible subscription processor supporting 30-365 day billing cycles</li>
                <li><strong>ShipStation Fulfillment:</strong> Order management and shipping coordination via Custom Store integration</li>
                <li><strong>LegitScript Certification:</strong> Third-party healthcare regulatory compliance certification</li>
                <li><strong>Claude AI (AWS Bedrock):</strong> Clinical documentation automation with HIPAA BAA and zero retention</li>
                <li><strong>Zoom API:</strong> HIPAA-compliant video conferencing with automated meeting creation</li>
              </ul>
            </div>

            <h2>Major Product Features Delivered</h2>
            <p>
              Delivered 150+ features across 9 months spanning patient experience, doctor workflows, store
              administration, pharmacy integration, lab testing, AI assessment, and membership management.
            </p>

            <h3>Order Hierarchy System</h3>
            <p>
              Healthcare transactions have complex structures that simple order numbering can't represent.
              Created 3-tier order hierarchy system:
            </p>
            <ul>
              <li><strong>Master Order:</strong> #HF-XXXX parent order for entire transaction</li>
              <li><strong>Sub-Categories:</strong> -S (subscriptions), -C (consultations), -L (lab kits), -A (appointments), -M (memberships)</li>
              <li><strong>Sub-Sub Categories:</strong> -F (medication fills), -A (appointment instances) for recurring events</li>
              <li><strong>Business Logic:</strong> Single checkout creates multiple sub-category items with sequential numbering and appropriate billing</li>
            </ul>

            <h3>Disease State Classification System</h3>
            <p>
              Classified 514 medications across 20+ therapeutic disease state categories:
            </p>
            <ul>
              <li>Created badges, subtitles, and descriptions for all 39 disease states</li>
              <li>Built NestJS PostgreSQL migration to update product disease states from CSV data</li>
              <li>Enabled disease state-based product organization improving patient navigation</li>
              <li>Created foundation for targeted treatment protocols</li>
            </ul>

            <h3>Consultation Services & Access Model</h3>
            <p>
              Designed disease state-specific consultation model:
            </p>
            <ul>
              <li><strong>Initial Consultations:</strong> Asynchronous consultations automatically bundled with first medication purchase</li>
              <li><strong>Access Model:</strong> Payment for one medication in disease state grants access to ALL medications in that category for one year</li>
              <li><strong>Follow-Up Consultations:</strong> 30-minute provider appointments ($99 each) exclusive to members</li>
              <li><strong>Lab Review Sessions:</strong> 15-minute review sessions included with lab kit purchases</li>
            </ul>

            <h3>Provider Appointment System</h3>
            <p>
              Wrote Epic MT-1602 containing 24 implementation tickets for complete appointment system:
            </p>
            <ul>
              <li>Appointment token system where purchased appointments create tokens requiring scheduling</li>
              <li>Zoom API integration for HIPAA-compliant video conferencing with automated calendar invitations</li>
              <li>Complete patient flow from purchase through scheduling to confirmation</li>
              <li>Coverage across Patient Admin, Doctor Admin, and Store Admin interfaces</li>
            </ul>

            <h3>Universal AI Medical Assessment</h3>
            <p>
              Created 13-section template serving as operational backbone for all AI Medical Assessments:
            </p>
            <ul>
              <li>Sections covering patient info, medical history, symptoms, lab studies, diagnostic imaging, AI pattern recognition, risk stratification, treatment planning, and more</li>
              <li>Claude 4 Sonnet via AWS Bedrock with BAA and zero retention for HIPAA compliance</li>
              <li>Store Admin AI Chat integrated for patient analysis and treatment planning with full patient profile context</li>
              <li>Platform achieves 92% diagnostic accuracy vs. 74-76% for physicians alone (Stanford Medicine benchmark)</li>
            </ul>

            <h3>Membership Product & Subscription Architecture</h3>
            <p>
              Designed AI Care Membership at $499/year with comprehensive benefits:
            </p>
            <ul>
              <li>Included benefits: 2 free provider appointments, free Core Metabolic Lab Kit, unlimited patient concierge messaging, AI Medical Assessment, waived prescription fees</li>
              <li>Flexible subscription architecture supporting 30-365 day billing cycles</li>
              <li>Membership benefits configuration system for unlimited vs. counted benefits</li>
              <li>Beta launch: 25 spots at $29.99 (94% discount), post-beta pricing $499 annual</li>
            </ul>

            <h2>Product Management Approach</h2>

            <h3>Coordinating Engineering Team</h3>
            <p>
              Led cross-functional team of 8 (4 engineers + CTO + shared product responsibility with COO) through
              12 two-week sprints:
            </p>
            <ul>
              <li>Translated physician and pharmacy requirements into 150+ technical user stories</li>
              <li>Achieved 95% on-time delivery rate with zero critical production issues</li>
              <li>Created interactive React prototypes demonstrating complex workflows for engineering clarity</li>
              <li>Wrote comprehensive Jira tickets with acceptance criteria reducing implementation ambiguity</li>
            </ul>

            <h3>Third-Party Vendor Coordination</h3>
            <p>
              Managed relationships with DoseSpot, Choose Health, PayTheory, LegitScript, SureScripts, and
              ShipStation. This included analyzing API documentation, writing integration specifications,
              coordinating implementation timelines, and troubleshooting production issues.
            </p>

            <h2>Launch Results</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-semibold mb-4">August 4, 2025 - Production Launch</h3>
              <ul className="list-none space-y-3">
                <li><strong>🚀 Timeline:</strong> Concept to production in 9 months</li>
                <li><strong>💊 Medication Catalog:</strong> 514 medications across 39 disease states</li>
                <li><strong>🏥 Fulfillment:</strong> 48-state prescription coverage operational</li>
                <li><strong>👥 Beta Patients:</strong> 25 patients with live prescriptions and pharmacy fulfillment</li>
                <li><strong>💰 Revenue:</strong> $12,475 first-month revenue validating business model</li>
                <li><strong>🔬 Lab Integration:</strong> 40% adoption rate, 60% revealed deficiencies</li>
                <li><strong>⚕️ Clinical Accuracy:</strong> 92% diagnostic accuracy with AI enhancement</li>
                <li><strong>✅ Zero Errors:</strong> Zero prescription routing errors through systematic workflow</li>
              </ul>
            </div>

            <h2>What Made This Different</h2>
            <p>
              Most healthcare platforms are built by people who've never shadowed a doctor or coordinated with a
              pharmacy. I made sure to understand every step:
            </p>
            <ul>
              <li><strong>User Research-Driven:</strong> Spent two days shadowing doctors to understand prescription workflows</li>
              <li><strong>Operational Focus:</strong> Built for real pharmacy fulfillment and clinical workflows, not just demos</li>
              <li><strong>Compliance-First Architecture:</strong> HIPAA compliance built into foundation, not bolted on afterward</li>
              <li><strong>Multi-Tenant from Day One:</strong> Architected for scale from beginning, not retrofitted later</li>
            </ul>

            <h2>Platform Scale & Capabilities</h2>
            <p>
              At launch, Teligant supported:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
              <ul className="list-none space-y-2">
                <li>✅ Complete multi-tenant SaaS architecture</li>
                <li>✅ Patient portals, doctor portals, admin dashboards per tenant</li>
                <li>✅ E-prescribing with 514 medication protocols</li>
                <li>✅ Lab testing integration with 6 comprehensive panels</li>
                <li>✅ AI-powered diagnostic assessment system</li>
                <li>✅ Flexible membership and subscription management</li>
                <li>✅ Appointment scheduling with video conferencing</li>
                <li>✅ Multi-pharmacy fulfillment network (3+ partners)</li>
                <li>✅ HIPAA-compliant data processing and storage</li>
                <li>✅ 48-state prescription coverage</li>
              </ul>
            </div>

            <h2>Lessons in Healthcare Product Management</h2>
            <p>
              Building Teligant taught me that healthcare product management requires understanding the entire
              ecosystem:
            </p>
            <ul>
              <li><strong>Technical depth matters:</strong> Understanding API documentation and database schemas enables better product decisions</li>
              <li><strong>Operational excellence beats features:</strong> The prescription routing workflow was more valuable than fancy admin analytics</li>
              <li><strong>Prototype-driven development works:</strong> Interactive React prototypes eliminated weeks of implementation back-and-forth</li>
              <li><strong>Healthcare needs patience:</strong> Regulatory requirements, pharmacy coordination, and clinical validation take time</li>
              <li><strong>Strategic architecture pays off:</strong> Getting the order hierarchy right early enabled rapid feature expansion</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 mt-8">
              <p className="mb-0">
                <strong>Visit the Platform:</strong> Learn more about Teligant at{" "}
                <Link href="https://www.teligant.com/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  teligant.com
                </Link>
              </p>
            </div>
          </div>

          {/* Story Navigation - Bottom */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <StoryNavigation
              currentStep={4}
              totalSteps={7}
              nextUrl="/journey/compoundlive"
              nextLabel="Next: CompoundLive"
              prevUrl="/journey/experience"
              prevLabel="Back"
              showProgress={false}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
