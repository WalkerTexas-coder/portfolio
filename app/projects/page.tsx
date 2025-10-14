import ExperienceItem from "../components/ExperienceItem";

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Major Projects</h1>
          <p className="text-xl md:text-2xl leading-relaxed mb-12">
            Product management in healthcare is 50% strategy, 50% operational obsession. Here are four projects
            that demonstrate how I identify problems, design solutions, and measure impact—not just ship features.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="mb-20">
            <ExperienceItem
              title="Pharmacy Fulfillment Workflow"
              company="Problem: Prescription Routing Chaos"
              description="Doctors were manually routing prescriptions across 4 pharmacy partners (Crafted RX, Greenwich/Texas Performance Meds, Outreach RX, patient local pharmacy) with no systematic guidance, risking missed and duplicate prescriptions. Strategic thinking: Spent two days shadowing doctors to understand workflow—discovered the real issue wasn't just unclear routing logic, they had no audit trail to track what they'd sent. Product judgment: Built manual workflow bridge above DoseSpot iframe rather than complex automation, balancing speed with reliability. Holistic implementation: Wrote 12 detailed Jira tickets across 2 sprint cycles with acceptance criteria and edge cases. Impact: Eliminated 100% of prescription routing errors within 3 weeks. System now processes 200+ prescriptions monthly with zero failures and complete audit trail."
              projectName="User Research → Workflow Design → Zero Errors"
              imageBgColor="from-emerald-500 to-teal-500"
            />

            <ExperienceItem
              title="Choose Health Lab Integration"
              company="Problem: Limited Patient Lifetime Value"
              description="Hedfirst was migraine-only, limiting patient LTV to $499/year with no expansion revenue. Strategic thinking: Hypothesis was that migraine patients would value comprehensive health monitoring, especially if lab results revealed underlying conditions (vitamin deficiencies, hormone imbalances) contributing to migraines. Value clarification: This wasn't just feature expansion—it positioned Hedfirst as comprehensive health partner vs. single-condition treatment, increasing LTV and patient engagement. Design & prototyping: Analyzed 7-endpoint Choose Health API plus webhook system, designed patient-facing lab ordering flow, created provider dashboard for results review. Holistic implementation: Wrote 13 implementation tickets across frontend, backend, admin interfaces, and HIPAA-compliant data storage with 7-year retention. Impact: 40% of beta patients ordered lab tests within first month. Lab insights revealed vitamin deficiencies in 60% of patients, improving clinical outcomes while creating new revenue stream at $99-$145 per panel."
              projectName="Strategic Integration → Revenue Expansion"
              imageBgColor="from-blue-500 to-cyan-500"
            />

            <ExperienceItem
              title="Platform Launch"
              company="Challenge: Ship in 12 Months"
              description="Co-led product strategy for multi-tenant telehealth platform build from concept to production. Strategic thinking: Coordinated 4 engineers + CTO through 12 two-week sprints with 95% on-time delivery. User research: Conducted stakeholder research and user interviews with chronic migraine patients to validate $499/year membership model. Product judgment: Prioritized pharmacy integration and e-prescribing (must-have for launch) while cutting admin analytics and reporting features (nice-to-have, could add post-launch). Made critical tradeoff: chose Choose Health over competitors for lab integration due to better API documentation, even though it was more expensive—this decision saved 2+ weeks of integration time. Business outcomes: Launched August 4, 2025 with 25 beta patients, $12,475 first-month revenue, 499 medications across 39 disease states, 48-state prescription fulfillment. Shipped with real paying patients rather than perfect features."
              projectName="Strategy → Prioritization → Launch"
              imageBgColor="from-purple-500 to-pink-500"
            />

            <ExperienceItem
              title="PayTheory Billing Integration"
              company="Problem: Inflexible Business Model"
              description="Initial platform design only supported monthly subscriptions, but user research revealed different patient preferences: some wanted annual plans for savings, others needed quarterly for cash flow. Business requirement: Support multiple subscription models from day one to enable diverse go-to-market strategies. Solution: Designed flexible subscription architecture supporting 30-365 day billing cycles. Wrote detailed integration specs for PayTheory implementation, including subscription creation, modification, cancellation, and payment retry logic. Created membership benefits configuration system enabling per-plan customization. Impact: Enabled $499/year AI Care Membership model that became Hedfirst's primary revenue driver. Architecture now supports multiple brands with different billing strategies on same platform."
              projectName="Requirements Analysis → Technical Architecture"
              imageBgColor="from-orange-500 to-red-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}