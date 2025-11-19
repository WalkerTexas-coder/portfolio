import Link from "next/link";
import Navbar from "../../components/Navbar";
import StoryNavigation from "../../components/StoryNavigation";
import FadeInOnScroll from "../../components/FadeInOnScroll";

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <article className="pt-24 pb-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          {/* Story Navigation - Top */}
          <div className="mb-12">
            <StoryNavigation
              currentStep={7}
              totalSteps={7}
              prevUrl="/journey/rugiet"
              prevLabel="Back"
              showProgress={true}
            />
          </div>

          {/* Header */}
          <div className="mb-12">
            <FadeInOnScroll>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                How I Think About Healthcare Product Management
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Lessons from 3 years building telehealth platforms
              </p>
            </FadeInOnScroll>
          </div>

          {/* Content */}
          <div className="experience-prose prose-lg dark:prose-invert max-w-none">
            <FadeInOnScroll delay={100}>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-lg mb-12">
                <p className="text-xl leading-relaxed mb-0">
                  Healthcare product management isn't like managing a social media app or a SaaS productivity tool.
                  Real patients depend on your product. Regulatory bodies scrutinize your decisions. Clinical workflows
                  determine whether features actually ship value or just ship code.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <h2>The Core Difference: Compliance, Operations, and Lives</h2>
              <p>
                Three years building telehealth platforms taught me that healthcare PM requires a fundamentally different
                mindset than consumer tech. Here's why:
              </p>

              <h3>1. Compliance Isn't a Checkbox—It's a Design Constraint</h3>
              <p>
                Most product managers treat compliance as something you bolt on after building features. In healthcare,
                that approach fails spectacularly.
              </p>
              <ul>
                <li><strong>HIPAA isn't optional:</strong> Every feature touching patient data needs encryption, audit logging, and access controls from day one. You can't retrofit security.</li>
                <li><strong>State pharmacy boards have real authority:</strong> When you're processing prescriptions across 48 states, each state's pharmacy board can shut you down if you violate their rules.</li>
                <li><strong>SOC 2 compliance takes 6+ months:</strong> Enterprise healthcare clients won't sign contracts until you're certified. This isn't a feature—it's a business requirement.</li>
              </ul>
              <p>
                At Teligant, we built HIPAA compliance into our architecture from the beginning. Cross-tenant data
                isolation, explicit consent workflows for data transfer, and comprehensive audit logging weren't features
                we added—they were foundational design decisions that enabled everything else.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={300}>
              <h3>2. Operational Workflows Matter More Than Features</h3>
              <p>
                The prescription routing workflow I built at Teligant was more valuable than any fancy AI feature.
                Here's why:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <p className="font-semibold mb-3">Real Example: The Pharmacy Routing Problem</p>
                <ul className="space-y-2">
                  <li>Patient orders prescription for weight management medication</li>
                  <li>System checks: Is medication available? What pharmacy fulfills? Does state allow shipment?</li>
                  <li>Doctor prescribes via DoseSpot e-prescribing system</li>
                  <li>Prescription routes to correct pharmacy based on medication type, state restrictions, inventory</li>
                  <li>Pharmacy fulfills, ships to patient via ShipStation integration</li>
                </ul>
              </div>
              <p>
                If any step fails, the patient doesn't get their medication. No amount of beautiful UI compensates for
                broken operational workflows. We achieved zero prescription routing errors across 200+ monthly prescriptions
                because we obsessed over the operational reality, not just the feature list.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={400}>
              <h3>3. Technical Depth Enables Better Product Decisions</h3>
              <p>
                My engineering background isn't a nice-to-have—it's the reason I can make good product decisions in
                healthcare. Here's what technical depth enables:
              </p>
              <ul>
                <li><strong>Reading API documentation:</strong> When integrating DoseSpot, Choose Health, PayTheory, I can analyze endpoints, understand rate limits, and design integration architecture myself.</li>
                <li><strong>Writing implementable specs:</strong> Engineers don't come back with 10 clarifying questions because I understand data models, edge cases, and technical constraints.</li>
                <li><strong>Debugging production issues:</strong> When lab results aren't syncing via webhooks, I can read logs, trace API calls, and identify root causes.</li>
                <li><strong>Realistic timelines:</strong> I know the difference between "change a config" (1 day) and "rebuild data architecture" (2 weeks).</li>
              </ul>
            </FadeInOnScroll>

            <FadeInOnScroll delay={500}>
              <h2>My Core Principles</h2>
              <p>
                After teaching 170+ students, engineering at Rugiet, building frameworks at CompoundLive, and co-leading
                product at Teligant, these are the principles that guide my approach:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-3">📊 Outcomes Over Outputs</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    A 35% retention increase beats shipping 50 features. I measure success by problems solved and value
                    created, not velocity metrics.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-3">🔍 Root Cause Analysis First</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    When retention drops, I don't ship the feature on the ticket. I analyze data, talk to users, and
                    identify the actual problem before building anything.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-3">⚙️ Process Over Speed</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Reusable frameworks beat custom solutions. Cutting deployment from 5 months to 5 weeks wasn't about
                    coding faster—it was about better processes.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-3">🏥 Operational Reality Wins</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I shadow doctors, coordinate with pharmacies, and understand fulfillment logistics. The best product
                    strategy accounts for how things actually work, not how they should work in theory.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-3">🗣️ Stakeholder Translation</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I bridge clinical stakeholders, engineers, and business leaders. Teaching background makes me
                    fluent in translating complex concepts for different audiences.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-3">📝 Prototype-Driven Development</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Interactive React prototypes eliminate weeks of back-and-forth. Showing is faster than explaining
                    when coordinating cross-functional teams.
                  </p>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={600}>
              <h2>What "Outcomes-Driven" Actually Means</h2>
              <p>
                Everyone says they're outcomes-driven. Here's what it looks like in practice:
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 my-6">
                <h4 className="text-lg font-semibold mb-3">Example: Lab Integration Decision at Teligant</h4>
                <p className="mb-3">
                  <strong>The Feature Request:</strong> "Add lab testing so patients can track biomarkers"
                </p>
                <p className="mb-3">
                  <strong>The Outcome Question:</strong> "What patient problem does this solve, and how do we measure if it's working?"
                </p>
                <p className="mb-3">
                  <strong>The Research:</strong> I shadowed doctors for 2 days, analyzed patient data, and discovered:
                  most patients guessing at treatments without knowing their baseline levels.
                </p>
                <p className="mb-3">
                  <strong>The Real Problem:</strong> Patients spending money on treatments that may not address their actual deficiencies.
                </p>
                <p>
                  <strong>The Result:</strong> 40% of patients ordered labs. 60% revealed deficiencies they weren't aware of.
                  The feature didn't just "ship"—it solved a measurable problem with trackable outcomes.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={700}>
              <h2>The Healthcare PM Skillset</h2>
              <p>
                If I were hiring a healthcare PM, here's what I'd look for:
              </p>
              <ul>
                <li><strong>Technical literacy:</strong> Can read API docs, understand data models, write specs developers don't need to clarify 10 times</li>
                <li><strong>Operational empathy:</strong> Understands clinical workflows, pharmacy fulfillment, regulatory requirements beyond surface level</li>
                <li><strong>Compliance fluency:</strong> HIPAA, SOC 2, state pharmacy boards aren't abstract concepts—they're design constraints</li>
                <li><strong>Data-driven decision making:</strong> Analyzes metrics, identifies root causes, validates hypotheses before building</li>
                <li><strong>Stakeholder translation:</strong> Bridges clinical, technical, and business perspectives without losing meaning</li>
                <li><strong>Reusable thinking:</strong> Builds frameworks and processes, not just features</li>
              </ul>
            </FadeInOnScroll>

            <FadeInOnScroll delay={800}>
              <h2>Why I'm Looking for Healthcare Roles</h2>
              <p>
                Three years in telehealth taught me that healthcare technology is one of the few domains where product
                decisions have measurable real-world impact. When you ship a prescription routing workflow that enables
                48-state fulfillment with zero errors, that's not just a metric—it's real patients receiving care.
              </p>
              <p>
                I'm seeking senior product roles where I can:
              </p>
              <ul>
                <li>Apply healthcare domain expertise and technical depth to complex product challenges</li>
                <li>Build 0-1 products or scale existing platforms in B2B healthcare SaaS</li>
                <li>Work with cross-functional teams where compliance, operations, and engineering intersect</li>
                <li>Contribute to organizations where product excellence directly improves patient outcomes</li>
              </ul>
              <p>
                Ideal fit: Series A-C health tech startups, B2B healthcare SaaS companies, telehealth platforms,
                or digital health infrastructure where technical PMs drive strategy.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={900}>
              <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white rounded-lg p-8 my-12">
                <h2 className="text-3xl font-bold mb-4 text-white">Want to Explore More?</h2>
                <p className="text-xl mb-6 text-gray-200">
                  The <Link href="/projects" className="underline hover:text-purple-300">Projects page</Link> contains
                  four deep-dive case studies showing specific problems I solved, strategic decisions I made, and
                  measurable impact I created.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Case Studies Include:</h4>
                    <ul className="space-y-1 text-gray-200">
                      <li>• Pharmacy Fulfillment Workflow</li>
                      <li>• Choose Health Lab Integration</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-1 text-gray-200 mt-7">
                      <li>• Platform Launch Strategy</li>
                      <li>• PayTheory Billing Integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={1000}>
              <div className="bg-gray-900 dark:bg-gray-800 text-white rounded-lg p-8 my-8">
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Work Together?</h2>
                <p className="text-xl mb-6 text-gray-300">
                  If you're building in healthcare and need a technical PM who understands compliance, operations,
                  and how to ship products that actually work—let's talk.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <Link
                    href="/#connect"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center"
                  >
                    Book a Meeting
                  </Link>
                  <Link
                    href="/resume"
                    className="inline-block px-6 py-3 border border-gray-400 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-center"
                  >
                    View Resume
                  </Link>
                </div>
              </div>
            </FadeInOnScroll>
          </div>

          {/* Story Navigation - Bottom */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <StoryNavigation
              currentStep={7}
              totalSteps={7}
              prevUrl="/journey/rugiet"
              prevLabel="Back"
              showProgress={false}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
