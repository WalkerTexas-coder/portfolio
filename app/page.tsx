import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ExperienceItem from "./components/ExperienceItem";
import Contact from "./components/Contact";
import FadeInOnScroll from "./components/FadeInOnScroll";
import ShiftF1Banner from "./components/ShiftF1Banner";
import atxImage from "./images/atx.png";
import rugietImage from "./images/rugiet-health.png";
import cplImage from "./images/cpl2.png";
import learnImage from "./images/learn.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Shift+F1 Thank You Banner - positioned below fixed navbar */}
      <div className="pt-16">
        <ShiftF1Banner />
      </div>




      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/60 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070')",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl bg-black/30 backdrop-blur-sm p-6 rounded-lg">
            <h1 className="hero-text text-white mb-6 text-4xl md:text-6xl leading-tight">
              My name is Austin Walker. I'm a <span className="text-[#f0abfc] font-bold">Technical Product Manager</span> who <span className="text-blue-300 font-bold">bridges the gap</span> between clinical complexity and shipping code.
            </h1>

            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <Link
                href="/journey/introduction"
                className="px-8 py-4 bg-white text-purple-900 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-center"
              >
                My Journey
              </Link>
              <Link
                href="#work"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-center"
              >
                View Work
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-[8rem] md:text-[12rem] font-bold text-white opacity-20 overflow-hidden">
          <h2 className="whitespace-nowrap">Austin Walker</h2>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12 gradient-bg">
        <div className="container mx-auto max-w-4xl">
          <FadeInOnScroll delay={0}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 mb-12 hover:bg-white/15 transition-all duration-300">
              <p className="text-2xl md:text-3xl leading-relaxed text-white font-semibold text-center">
                Great products aren't just about features; they're about <span className="text-white font-bold">reducing anxiety</span>.
                I build systems that make doctors feel safe and patients feel cared for.
                By mastering the "what, why, and how," I turn compliance from a blocker into a competitive advantage.
              </p>
            </div>
          </FadeInOnScroll>

          {/* Expanded Expertise Badges */}
          <FadeInOnScroll delay={100}>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                Healthcare Domain (3 years)
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                Technical PM
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                0-1 Builds
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                HIPAA/SOC 2 Compliance
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                Data Architecture
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                Multi-Tenant SaaS
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                Pharmacy Integrations
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                E-Prescribing (DoseSpot)
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                Lab Integration (Choose Health)
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                Payment Systems (PayTheory)
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                Escalating Dose Protocols
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                AI Integration
              </span>
            </div>
          </FadeInOnScroll>
        </div>
      </section>





      {/* Recent Work Section */}
      <section id="work" className="py-20 px-6 md:px-12 gradient-bg">
        <div className="container mx-auto">
          <h2 className="section-title text-white mb-8">Recent Work</h2>

          <div className="max-w-4xl mb-12">
            <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
              The market needed a telehealth platform that didn't just "work" technically, but worked <em>legally</em> across 48 distinct jurisdictions.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Instead of building a generic e-commerce flow, I designed a "compliance-first" architecture.
              We treated state regulations not as edge cases, but as the core data model.
              <strong>The Outcome:</strong> Launched Aug 4, 2025. 499 medications. Zero routing errors. $12k+ first-month revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Teligant Platform"
              description="Designed a 3-tier Order Hierarchy system to handle the complexity of recurring prescriptions, one-off lab kits, and membership benefits in a single checkout. Built a 'Pharmacy Bridge' workflow to stop doctors from misrouting prescriptions."
              slug="teligant"
              imageSrc="https://cdn.prod.website-files.com/67ad2c6bdcb40e4e1f8634c9/67af2f828dde99af89ddfdfa_2image.avif"
            />
            <ProjectCard
              title="Hedfirst Launch"
              description="Launched August 4th, 2025. Proof that compliance can be a competitive advantage. We launched in 48 states on Day 1 because we treated regulations as a core data model, not an afterthought."
              slug="hedfirst"
              imageSrc="https://cdn.prod.website-files.com/67a509f5940083778a2478d0/67d16eb0733bbcccda908f61_hedfirst-home-screen.avif"
            />
          </div>
        </div>
      </section>

      {/* Previous Experience Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="section-title">Previous Experience</h2>

          <div className="mb-20">
            <p className="text-xl mb-12">
              Three years in telehealth building compliant platforms for prescription-based healthcare services.
              Started as a full-stack engineer, evolved into technical product management by solving real
              implementation problems and learning what actually ships.
            </p>

            <ExperienceItem
              title="Solutions Engineer → Technical Product Lead"
              company="CompoundLive"
              description="Enterprise clients loved the demo but feared the integration. The friction wasn't the software; it was the implementation anxiety. I productized the onboarding process, creating reusable integration frameworks that turned a bespoke engineering project into a repeatable configuration task. We didn't just ship faster; we changed the sales conversation from 'Can we afford this delay?' to 'When can we start?'"
              projectName="5 Months → 5 Weeks Integration Time"
              imageUrl={cplImage}
              slug="compoundlive"
            />

            <ExperienceItem
              title="Full Stack Developer"
              company="Rugiet Health"
              description="Churn wasn't happening because users disliked the product. It was happening because they felt trapped. The rigid subscription model created anxiety. I championed a 'Pause' feature—technically simple, but business-critical. Stakeholders feared it would lower revenue, but retention increased by 35%. By giving users control, we gained their trust. It proved that in healthcare, autonomy is a key feature."
              projectName="35% Retention Increase via 'Pause' Feature"
              imageUrl={rugietImage}
              slug="rugiet-health"
            />

            <ExperienceItem
              title="Lead Instructor"
              company="LEARN Academy"
              description="Trained 170+ developers across 9 cohorts in full-stack development. Designed curriculum based on industry feedback, iterated based on student outcomes, and achieved 85% placement rate within 6 months. Teaching taught me to break down complex technical concepts—a skill I now use daily to bridge gaps between clinical stakeholders, engineers, and business leaders. Nothing tests your technical depth like explaining recursion to 30 people staring at you, or debugging someone else's code in real-time. Those skills directly translate to writing specs developers can implement and explaining technical tradeoffs to non-technical executives."
              projectName="Curriculum Design → Technical Communication Skills"
              imageUrl={learnImage}
              slug="learn-academy"
            />
          </div>
        </div>
      </section>



      {/* Let's Build Section */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-center text-[5rem] md:text-[8rem] font-bold outline-text mb-6">LET'S BUILD</h2>
          <p className="text-center text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Looking for a technical product manager who can translate complex healthcare requirements into
            working software? Someone who writes specifications developers can actually implement?
          </p>
          <div className="text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm seeking senior product roles in healthcare technology where I can leverage my domain expertise
              and technical depth. Ideal fit: Series A-C health tech startups, B2B healthcare SaaS, telehealth platforms.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="#connect"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book a Meeting
              </Link>
              <Link
                href="/resume"
                className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="connect" className="py-12 px-6 md:px-12 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto">
          <Contact
            name="Austin Walker"
            projects={[
              { name: "Teligant Platform", url: "https://www.teligant.com/" },
              { name: "Hedfirst Launch", url: "https://www.hedfirst.com/" },
            ]}
            companies={[
              { name: "Hedfirst/Teligant", url: "https://www.hedfirst.com/" },
              { name: "CompoundLive", url: "https://web.archive.org/web/20240805010017/http://compoundlive.com/" },
              { name: "Rugiet Health", url: "https://www.rugiet.com/" },
              { name: "LEARN Academy", url: "https://www.learnacademy.org/" },
            ]}
            socialLinks={[
              { name: "Github", url: "https://github.com/WalkerTexas-coder" },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/walkeratx/" },
              { name: "X", url: "https://x.com/WalkerTXdriver" },
              { name: "Email", url: "mailto:walkertexasaustin@gmail.com" }
            ]}
          />
        </div>
      </footer>
    </div>
  );
}