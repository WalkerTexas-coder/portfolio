import ExperienceItem from "../components/ExperienceItem";

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Major Projects</h1>
          <p className="text-xl md:text-2xl leading-relaxed mb-12">
            I don't just manage products—I ship them. Here's how I turn complex healthcare requirements into working software
            that doctors, patients, and pharmacy partners actually use.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="mb-20">
            <ExperienceItem
              title="Pharmacy Fulfillment Workflow"
              company="Problem Solved"
              description="Doctors were manually routing prescriptions across 3+ pharmacy partners with no systematic guidance, risking missed/duplicate prescriptions. Created systematic pharmacy-by-pharmacy queue workflow, wrote 12 Jira tickets with detailed acceptance criteria. Eliminated prescription routing errors in 2-3 weeks, established foundation for clinical review system."
              projectName="Healthcare Workflow Optimization"
              imageBgColor="from-emerald-500 to-teal-500"
            />

            <ExperienceItem
              title="Choose Health Lab Integration"
              company="Revenue Expansion"
              description="Hedfirst was migraine-only; needed comprehensive health monitoring to increase patient lifetime value. Analyzed designer mockups, mapped 7-endpoint API integration, wrote 13 implementation tickets across patient portal, admin system, and backend. Created entirely new revenue stream, transformed single-condition platform into comprehensive health partner."
              projectName="Strategic Integration"
              imageBgColor="from-blue-500 to-cyan-500"
            />

            <ExperienceItem
              title="Platform Launch"
              company="August 4, 2025"
              description="Shipped 150+ features in 9 months coordinating 4 engineers + CTO across pharmacy integration, e-prescribing, lab testing, AI assessment, and membership management. Platform launched with 499 medications across 20+ disease states, 25 beta patients, 48-state prescription fulfillment, $499/year membership model. Real patients, live prescriptions, operational pharmacy fulfillment."
              projectName="Production Healthcare SaaS"
              imageBgColor="from-purple-500 to-pink-500"
            />

            <ExperienceItem
              title="PayTheory Billing Integration"
              company="Membership Architecture"
              description="Built recurring billing subscription system with flexible billing cycles (30-365 days). Designed complete subscription lifecycle including creation, modification, cancellation, payment retries. Created membership benefits configuration system. Implemented $499/year AI Care Membership model with comprehensive benefits package."
              projectName="Healthcare Payment Processing"
              imageBgColor="from-orange-500 to-red-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}