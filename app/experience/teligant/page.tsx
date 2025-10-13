import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function TeligantPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Building the Teligant Platform</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Multi-Tenant Healthcare SaaS • 2024-2025
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
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>From Concept to Production in 9 Months</h2>
            <p>
              The Teligant platform represents everything I've learned about building healthcare technology that actually works. 
              This wasn't just another SaaS project—it was architecting a multi-tenant platform that could power multiple 
              telehealth brands while maintaining strict HIPAA compliance and operational excellence.
            </p>

            <h2>The Challenge</h2>
            <p>
              When I joined Hedfirst/Teligant, there was a vision but no platform. The goal was ambitious: create a 
              white-label telehealth SaaS that could support multiple brands, each with their own patient portals, 
              doctor workflows, and business logic, while sharing core infrastructure for prescriptions, labs, and payments.
            </p>

            <h2>Platform Architecture</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3>Multi-Tenant Design</h3>
              <ul>
                <li><strong>Brand Isolation:</strong> Each client gets their own subdomain, branding, and user base</li>
                <li><strong>Shared Infrastructure:</strong> Common pharmacy, lab, and payment integrations</li>
                <li><strong>Configurable Workflows:</strong> Customizable patient journeys and doctor protocols</li>
                <li><strong>Scalable Architecture:</strong> Built to handle multiple brands from day one</li>
              </ul>

              <h3>Core Integrations</h3>
              <ul>
                <li><strong>DoseSpot E-Prescribing:</strong> 499 medications across 20+ disease states</li>
                <li><strong>Choose Health Labs:</strong> 7-endpoint API for comprehensive lab testing</li>
                <li><strong>PayTheory Billing:</strong> Flexible subscription and one-time payment processing</li>
                <li><strong>LegitScript Certification:</strong> Compliance for online pharmacy operations</li>
              </ul>
            </div>

            <h2>Product Management Approach</h2>
            <p>
              This project taught me that great product management in healthcare isn't just about features—it's about 
              understanding the entire ecosystem of patients, doctors, pharmacies, and regulations.
            </p>

            <h3>Requirements Gathering</h3>
            <ul>
              <li>Shadowed doctors during patient consultations to understand real workflows</li>
              <li>Mapped pharmacy fulfillment processes across 3+ partner pharmacies</li>
              <li>Analyzed competitor platforms to identify gaps and opportunities</li>
              <li>Created detailed user stories for patients, doctors, and administrators</li>
            </ul>

            <h3>Technical Specifications</h3>
            <ul>
              <li>Wrote 150+ detailed Jira tickets with acceptance criteria</li>
              <li>Created API documentation for all third-party integrations</li>
              <li>Designed database schemas for multi-tenant architecture</li>
              <li>Established testing protocols for HIPAA compliance</li>
            </ul>

            <h2>Key Features Delivered</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3>Patient Experience</h3>
              <ul>
                <li>AI-powered medical assessments with dynamic questionnaires</li>
                <li>Secure video consultations with licensed providers</li>
                <li>Prescription tracking and pharmacy coordination</li>
                <li>Lab test ordering and results management</li>
                <li>Membership management with flexible billing cycles</li>
              </ul>

              <h3>Provider Workflows</h3>
              <ul>
                <li>Comprehensive patient dashboards with medical history</li>
                <li>E-prescribing with real-time pharmacy routing</li>
                <li>Clinical decision support and treatment protocols</li>
                <li>Appointment scheduling and consultation management</li>
              </ul>

              <h3>Administrative Tools</h3>
              <ul>
                <li>Multi-tenant brand management and configuration</li>
                <li>Revenue analytics and subscription reporting</li>
                <li>Compliance monitoring and audit trails</li>
                <li>Pharmacy partner management and routing logic</li>
              </ul>
            </div>

            <h2>Launch Results</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <ul className="list-none space-y-2">
                <li><strong>🚀 Launch Date:</strong> August 4, 2025 - On time and fully functional</li>
                <li><strong>💊 Medications:</strong> 499 medications across 20+ disease states</li>
                <li><strong>🏥 Coverage:</strong> 48-state prescription fulfillment</li>
                <li><strong>👥 Beta Patients:</strong> 25 real patients with live prescriptions</li>
                <li><strong>💰 Revenue Model:</strong> $499/year AI Care Membership</li>
                <li><strong>🔬 Lab Integration:</strong> Full Choose Health lab testing suite</li>
              </ul>
            </div>

            <h2>What Made This Different</h2>
            <p>
              Most healthcare platforms are built by people who've never seen a real patient consultation or 
              tried to coordinate with a pharmacy. I made sure to understand every step of the patient journey:
            </p>
            <ul>
              <li><strong>Real-World Testing:</strong> Every feature tested with actual doctors and patients</li>
              <li><strong>Operational Excellence:</strong> Built for real pharmacy fulfillment, not just demos</li>
              <li><strong>Compliance First:</strong> HIPAA compliance built in, not bolted on</li>
              <li><strong>Scalable Architecture:</strong> Multi-tenant from day one, not retrofitted</li>
            </ul>

            <h2>Technical Lessons Learned</h2>
            <p>
              Building a healthcare SaaS platform taught me that the hardest problems aren't technical—they're 
              operational. The code that routes a prescription to the right pharmacy is simple. The business 
              logic that determines which pharmacy to use based on medication availability, patient location, 
              insurance coverage, and delivery preferences? That's the real challenge.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="mb-0">
                <strong>Visit the Platform:</strong> See the Teligant platform in action at{" "}
                <Link href="https://www.teligant.com/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  teligant.com
                </Link>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex justify-between">
              <Link href="/experience/hedfirst" className="text-blue-600 dark:text-blue-400 hover:underline">
                ← Related: Hedfirst Launch
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