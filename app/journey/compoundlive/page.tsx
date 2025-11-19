import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import StoryNavigation from "../../components/StoryNavigation";
import cplImage from "../../images/cpl2.png";

export default function CompoundLivePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <article className="pt-24 pb-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          {/* Story Navigation - Top */}
          <div className="mb-12">
            <StoryNavigation
              currentStep={5}
              totalSteps={7}
              nextUrl="/journey/rugiet"
              nextLabel="Next: Rugiet Health"
              prevUrl="/journey/teligant-hedfirst"
              prevLabel="Back"
              showProgress={true}
            />
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions Engineer at CompoundLive</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Enterprise Client Implementation • February 2023 - September 2024
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
          <div className="experience-prose prose-lg dark:prose-invert max-w-none">
            <h2>The Problem: 5-Month Implementation Cycles</h2>
            <p>
              When I joined CompoundLive as a Solutions Engineer, enterprise healthcare clients were experiencing
              5-month deployment cycles for what should have been straightforward white-label telehealth platform
              implementations. Each client required extensive custom configuration, compliance documentation, and
              workflow optimization. This long timeline was killing sales velocity and delaying client revenue.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 my-8">
              <h3 className="text-2xl font-semibold mb-4">My Role Evolution</h3>
              <p>
                I started as Solutions Engineer helping enterprise clients deploy CompoundLive's white-label
                telehealth platform. This was a dual role—I spent 75% of my time on Solutions Engineering for
                CompoundLive clients and 25% on software engineering for Rugiet Health (both same parent company,
                Onyx MP Growth, same office).
              </p>
            </div>

            <h2>Discovery: The Real Problem</h2>
            <p>
              Through discovery sessions with 6+ C-suite teams at healthcare companies, I identified that the
              5-month cycles weren't caused by missing features. The problem was that every implementation was
              too bespoke. We were customizing too much for each client instead of building reusable integration
              frameworks.
            </p>

            <h3>What I Did</h3>
            <ul>
              <li>Conducted technical discovery and validation sessions during sales cycles</li>
              <li>Established technical feasibility and implementation roadmaps for complex compliance requirements</li>
              <li>Created custom configurations for client-specific needs (intake forms, branding, workflow customization)</li>
              <li>Translated client requirements into technical specifications for engineering team</li>
              <li>Tested new features and integrations before client rollout</li>
            </ul>

            <h2>Solution: Reusable Integration Frameworks</h2>
            <p>
              I built reusable integration frameworks and streamlined compliance workflows that could be configured
              for client-specific needs without requiring custom development each time. This meant:
            </p>
            <ul>
              <li><strong>Standardized Compliance Documentation:</strong> Created templates for HIPAA, SOC 2, and state-specific requirements</li>
              <li><strong>Reusable Pharmacy Integrations:</strong> Built integration patterns that could be configured vs. custom-coded</li>
              <li><strong>Workflow Templates:</strong> Developed configurable patient journey templates for common use cases</li>
              <li><strong>Automated Testing Procedures:</strong> Established testing protocols reducing manual QA time</li>
            </ul>

            <h2>Results</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
              <ul className="list-none space-y-3">
                <li><strong>⏱️ Implementation Time:</strong> Reduced from 5 months to 5 weeks (10x improvement)</li>
                <li><strong>🎯 Client Success:</strong> Delivered 4 successful enterprise client implementations</li>
                <li><strong>😊 Satisfaction Increase:</strong> 30% improvement in client satisfaction scores</li>
                <li><strong>💰 Revenue Impact:</strong> 25% increase in deal closure rates through effective technical translation</li>
                <li><strong>📋 Process Standardization:</strong> Created workflows used across all future implementations</li>
              </ul>
            </div>

            <h2>Technical Skills Developed</h2>
            <p>
              This role taught me how to be the bridge between business stakeholders and engineering teams:
            </p>
            <ul>
              <li><strong>Enterprise Client Management:</strong> Working with C-suite executives on technical strategy</li>
              <li><strong>Technical Solution Design:</strong> Architecting integrations for complex healthcare compliance</li>
              <li><strong>Healthcare Compliance Explanation:</strong> Translating HIPAA, SOC 2, and PCI DSS requirements</li>
              <li><strong>Sales Enablement:</strong> Conducting technical presentations that helped close deals</li>
              <li><strong>Technical Documentation:</strong> Creating API guides and integration workflows for clients</li>
            </ul>

            <h2>What I Learned</h2>
            <p>
              CompoundLive taught me the critical lesson that <strong>the fastest way to ship isn't more
              features—it's better processes</strong>. Every custom solution we built for one client created
              technical debt for the next. Building reusable frameworks took more upfront work but paid massive
              dividends in implementation speed.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold mb-4">Key Insights</h3>
              <ul className="space-y-2">
                <li>✅ Healthcare implementations fail due to process problems, not technical problems</li>
                <li>✅ Reusable frameworks {`>`} Custom solutions (even when clients request customization)</li>
                <li>✅ Technical discovery sessions during sales prevent implementation surprises</li>
                <li>✅ Clear documentation reduces back-and-forth and accelerates deployment</li>
                <li>✅ Client satisfaction increases when implementation is predictable and fast</li>
              </ul>
            </div>

            <h2>Transition to Product Management</h2>
            <p>
              This role was pivotal in my evolution from pure engineering to product management. I realized my
              highest impact wasn't implementing solutions—it was <strong>deciding which solutions to implement
              and how to make them reusable</strong>. I was doing product management without the title.
            </p>
            <p>
              The experience taught me that great product managers in healthcare need to understand the entire
              ecosystem: client business models, regulatory requirements, technical constraints, and operational
              workflows. This multi-dimensional thinking became the foundation for my transition to Technical
              Product Manager at Hedfirst/Teligant.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 mt-8">
              <p className="mb-0">
                <strong>About CompoundLive:</strong> View archived platform at{" "}
                <Link href="https://web.archive.org/web/20240805010017/http://compoundlive.com/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  web.archive.org
                </Link>
              </p>
            </div>
          </div>

          {/* Story Navigation - Bottom */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <StoryNavigation
              currentStep={5}
              totalSteps={7}
              nextUrl="/journey/rugiet"
              nextLabel="Next: Rugiet Health"
              prevUrl="/journey/teligant-hedfirst"
              prevLabel="Back"
              showProgress={false}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
