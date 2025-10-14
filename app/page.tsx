import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ExperienceItem from "./components/ExperienceItem";
import Contact from "./components/Contact";
import FadeInOnScroll from "./components/FadeInOnScroll";
import atxImage from "./images/atx.png";
import rugietImage from "./images/rugiet-health.png";
import cplImage from "./images/cpl2.png";
import learnImage from "./images/learn.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

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
            <h1 className="hero-text text-white mb-4">
              I'm Austin Walker, a
              {" "}
              <span className="text-[#f0abfc] font-bold">technical product manager</span>
              {" "}for hire.{" "}
            </h1>
           
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <Link
                href="#work"
                className="inline-block px-6 py-3 border-b-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                Recent Work
              </Link>
              <Link
                href="/projects"
                className="inline-block px-6 py-3 border-b-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                Major Projects
              </Link>
              <Link
                href="#connect"
                className="inline-block px-6 py-3 border-b-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                Book a Meeting
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
        <div className="container mx-auto max-w-6xl">
          {/* Statement Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <FadeInOnScroll delay={0}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 hover:translate-y-[-4px] h-full flex items-center">
                <p className="text-xl md:text-2xl leading-relaxed text-white font-semibold">
                  I draw ERDs during stakeholder calls. 
                  <br/>
                  I code enough to challenge estimates. 
                  <br/>
                  I ship fast enough to catch overengineering.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={100}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 hover:translate-y-[-4px] h-full flex items-center">
                <p className="text-xl md:text-2xl leading-relaxed text-white font-semibold">
                  I don't just build what stakeholders ask for—I ask what they actually need.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 hover:translate-y-[-4px] h-full flex items-center">
                <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-semibold">
                  Patient outcomes over feature counts. Working software over perfect specs. The best product decisions aren't about what to build—they're about what not to build.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={300}>
              <Link href="#connect" className="block h-full">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 hover:translate-y-[-4px] h-full flex items-center cursor-pointer">
                  <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-semibold">
                    Looking for a senior PM? Need someone to gut-check your roadmap? Either way, let's connect.
                  </p>
                </div>
              </Link>
            </FadeInOnScroll>
          </div>

          {/* Expertise Badges */}
          <FadeInOnScroll delay={400}>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                Healthcare Domain
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                Technical PM
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                0-1 Builds
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                Compliance (HIPAA/SOC 2)
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/30">
                Data Architecture
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
              In 12 months at Hedfirst/Teligant, I co-led product strategy for a multi-tenant telehealth platform
              from concept to production—with real patients, live prescriptions, and operational pharmacy fulfillment.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Launched August 4, 2025 with 25 beta patients generating $12,475 in first-month revenue •
              499 medications across 39 disease states •
              48-state prescription fulfillment •
              Zero routing errors across 200+ monthly prescriptions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Teligant Platform"
              description="Multi-tenant SaaS architecture with patient portals, doctor workflows, admin dashboards, and pharmacy integrations. Led product strategy, coordinated 4 engineers + CTO, and prioritized features that enabled 48-state fulfillment."
              slug="teligant"
              imageSrc="https://cdn.prod.website-files.com/67ad2c6bdcb40e4e1f8634c9/67af2f828dde99af89ddfdfa_2image.avif"
            />
            <ProjectCard
              title="Hedfirst Launch"
              description="First brand implementation on Teligant platform. Launched August 4th, 2025 with beta patients, validating $499/year membership model. Integrated Choose Health lab testing and DoseSpot e-prescribing based on user research insights."
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
              description="Started as Solutions Engineer helping enterprise healthcare clients deploy CompoundLive's white-label telehealth platform. Through discovery sessions with 6+ C-suite teams, I identified that our 5-month deployment cycles were killing sales velocity—not because features were missing, but because implementation was too bespoke. Built reusable integration frameworks and streamlined compliance workflows that cut deployment to 5 weeks. Result: 4 successful client implementations, 30% satisfaction increase, 25% boost in deal closures. This taught me that the fastest way to ship isn't more features—it's better processes."
              projectName="Discovery → Process Redesign → Revenue Impact"
              imageUrl={cplImage}
              slug="compoundlive"
            />

            <ExperienceItem
              title="Full Stack Developer"
              company="Rugiet Health"
              description="Started as IC2 Software Engineer building prescription and subscription features in Ruby on Rails. When retention metrics dropped, I didn't just implement the feature request on the ticket. Analyzed user data, talked to support, and discovered the real problem: inflexible subscription management was forcing patients to cancel when they wanted to pause. Proposed a solution, wrote detailed specs, and built it. Result: 35% retention increase. This was my 'product manager moment'—realizing my highest impact wasn't writing code faster, it was asking better questions first."
              projectName="Data Analysis → Root Cause → Business Impact"
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