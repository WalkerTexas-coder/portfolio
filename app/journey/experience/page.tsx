import Navbar from "../../components/Navbar";
import StoryNavigation from "../../components/StoryNavigation";
import FadeInOnScroll from "../../components/FadeInOnScroll";

export default function ExperienceDetailPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg">
        <div className="container mx-auto max-w-4xl">
          <FadeInOnScroll>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              How I Became a Healthcare PM
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              The path from teaching code to leading product strategy in one of the most regulated industries
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          {/* The Evolution Story */}
          <FadeInOnScroll delay={100}>
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Evolution</h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl leading-relaxed mb-6">
                  I didn't plan to become a product manager. I started as a coding bootcamp instructor,
                  became a full-stack engineer, and gradually realized my highest impact wasn't writing
                  code—it was asking better questions before anyone wrote code.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  At LEARN Academy, I learned to break down complex technical concepts into digestible pieces.
                  Teaching 170+ students forced me to understand things deeply enough to explain them simply.
                  That skill—translating technical complexity for different audiences—became my competitive advantage.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  At Rugiet Health, I had my "product manager moment." When retention metrics dropped, I didn't
                  just implement the ticket on the board. I analyzed user data, talked to support, and discovered
                  the real problem: inflexible subscription management forcing patients to cancel when they wanted
                  to pause. The solution increased retention 35%. I realized I was better at deciding what to build
                  than building it.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  At CompoundLive, I formalized this approach. As a Solutions Engineer working with 6+ C-suite
                  healthcare teams, I saw the same pattern: our 5-month deployment cycles weren't failing because
                  features were missing—they were failing because implementation was too bespoke. I built reusable
                  frameworks that cut deployment to 5 weeks, boosting deal closures 25%. The lesson:
                  <strong className="text-purple-600 dark:text-purple-400"> the fastest way to ship isn't more features—it's better processes</strong>.
                </p>

                <p className="text-lg leading-relaxed">
                  At Teligant/Hedfirst, I took everything I'd learned and built a multi-tenant telehealth platform
                  from scratch in 12 months. Co-leading product strategy for 4 engineers, we launched with real patients,
                  live prescriptions, and operational pharmacy fulfillment. Not a prototype—a production system processing
                  200+ monthly prescriptions with zero routing errors across 48 states.
                </p>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Why Healthcare */}
          <FadeInOnScroll delay={200}>
            <div className="mb-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Why Healthcare?</h2>

              <p className="text-lg leading-relaxed mb-4">
                Healthcare technology isn't just another SaaS domain. It requires:
              </p>

              <ul className="space-y-4 text-lg">
                <li className="flex gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                  <span>
                    <strong>Deep operational understanding</strong> — Clinical workflows, pharmacy fulfillment,
                    compliance requirements aren't abstract concepts. They're the difference between a feature
                    shipping and a prescription actually reaching a patient.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                  <span>
                    <strong>Technical rigor</strong> — HIPAA, SOC 2, state pharmacy boards, e-prescribing protocols.
                    You can't fake technical depth when a security audit or clinical workflow depends on your spec.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                  <span>
                    <strong>Stakeholder translation</strong> — Bridging clinical stakeholders who think in patient
                    outcomes, engineers who think in data models, and business leaders who think in unit economics.
                    My teaching background makes this natural.
                  </span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed mt-6">
                Three years in telehealth has taught me that healthcare PM isn't about shipping fast—it's about
                shipping <em>right</em>. When real patients depend on your product, "move fast and break things"
                becomes "move deliberately and validate everything."
              </p>
            </div>
          </FadeInOnScroll>

          {/* What Defines My Approach */}
          <FadeInOnScroll delay={300}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">What Defines My Approach</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-3">Outcomes-Driven</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I don't measure success by features shipped. I measure it by problems solved and
                    value created. A 35% retention increase matters more than 10 new features.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-xl font-bold mb-3">Technical Depth</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I read code, understand data models, and write specs developers can implement
                    without 10 rounds of clarification. Engineering background is my superpower.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <div className="text-4xl mb-4">⚙️</div>
                  <h3 className="text-xl font-bold mb-3">Operational Obsession</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    The best technical architecture doesn't matter if clinical workflows don't work.
                    I design for the operational reality, not the ideal state.
                  </p>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Transition to Articles */}
          <FadeInOnScroll delay={400}>
            <div className="bg-gray-900 dark:bg-gray-800 text-white rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready for the Full Story?</h2>
              <p className="text-xl mb-6 text-gray-300">
                The next four articles dive deep into specific projects, decisions, and lessons learned.
                You'll see exactly how I approach product management in healthcare—with real metrics,
                real challenges, and real outcomes.
              </p>
              <p className="text-lg text-gray-400">
                We'll start with Teligant and Hedfirst, where I co-led a multi-tenant platform from concept
                to production in 12 months.
              </p>
            </div>
          </FadeInOnScroll>

          {/* Navigation */}
          <div className="mt-16">
            <StoryNavigation
              currentStep={3}
              totalSteps={7}
              nextUrl="/journey/teligant-hedfirst"
              nextLabel="Read: Teligant & Hedfirst"
              prevUrl="/journey"
              prevLabel="Back to Timeline"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
