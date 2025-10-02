import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ExperienceItem from "./components/ExperienceItem";
import Contact from "./components/Contact";

const rugietImgPath = "/portfolio/CleanShot 2025-04-06 at 19.05.18.png";

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
              Hello, I'm Austin Walker - 
              full-stack engineer turned <span className="text-[#f0abfc] font-bold">product manager</span>
              {" "}who ships <span className="text-[#7dd3fc] font-bold">healthcare platforms</span>
              {" "}that actually <span className="text-[#a5b4fc] font-bold">work</span>.
            </h1>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <Link 
                href="#work" 
                className="inline-block px-6 py-3 border-b-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                Recent Work
              </Link>
              <Link 
                href="#projects" 
                className="inline-block px-6 py-3 border-b-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                Major Projects
              </Link>
              <Link 
                href="#connect" 
                className="inline-block px-6 py-3 border-b-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                Connect
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-[8rem] md:text-[12rem] font-bold text-white opacity-20 overflow-hidden">
          <h2 className="whitespace-nowrap">Austin Walker</h2>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <h2 className="text-2xl mb-8">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl md:text-2xl leading-relaxed">
                I write specifications that developers can actually implement.
                I break down complex healthcare integrations into clear, deliverable tickets.
                I coordinate pharmacy partners, e-prescribing vendors, and lab testing APIs without everything falling apart.
              </p>
            </div>
            <div>
              <p className="text-xl md:text-2xl leading-relaxed">
                My superpower is turning "wouldn't it be cool if..." conversations into systematic implementation plans that ship on time.
                I think in sprints, write in acceptance criteria, and measure success by what actually launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section id="work" className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="section-title">Recent Work</h2>
          <p className="text-xl mb-12 max-w-3xl">
            In 9 months at Hedfirst/Teligant, I defined 150+ features and launched a multi-tenant telehealth SaaS platform from concept to production.
            Platform went live August 4th, 2025 with real patients, live prescriptions, and operational pharmacy fulfillment across 48 states.
          </p>
          
          <div className="gradient-bg p-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">Built from scratch. Shipped on time. Actually works.</h3>
            <p className="text-white mb-8">
              Multi-tenant healthcare SaaS platform powering direct-to-consumer telehealth brands with integrated e-prescribing, 
              lab testing, AI diagnostics, and HIPAA-compliant data processing.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProjectCard 
                title="Teligant Platform"
                description="Multi-tenant SaaS architecture with patient portals, doctor workflows, admin dashboards, and pharmacy integrations. 499 medications across 20+ disease states, 48-state prescription fulfillment."
                link="https://www.teligant.com/"
                imageSrc="https://cdn.prod.website-files.com/67ad2c6bdcb40e4e1f8634c9/67af2f828dde99af89ddfdfa_2image.avif"
              />
              <ProjectCard 
                title="Hedfirst Launch"
                description="First brand implementation on Teligant platform. Launched August 2025 with 25 beta patients, $499/year AI Care Membership, integrated Choose Health lab testing, and DoseSpot e-prescribing."
                link="https://www.hedfirst.com/"
                imageSrc="https://cdn.prod.website-files.com/67a509f5940083778a2478d0/67d16eb0733bbcccda908f61_hedfirst-home-screen.avif"
              />
              <ProjectCard 
                title="150+ Features Shipped"
                description="Pharmacy fulfillment workflows, Choose Health lab integration (7-endpoint API), PayTheory billing, DoseSpot e-prescribing, LegitScript certification, AI Medical Assessment framework, appointment system (24-ticket epic)."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Major Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <h2 className="section-title">Major Projects</h2>
          <p className="text-xl mb-12">
            I don't just manage products—I ship them. Here's how I turn complex healthcare requirements into working software 
            that doctors, patients, and pharmacy partners actually use.
          </p>
          
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

      {/* Previous Experience Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="section-title">Previous Experience</h2>
          
          <div className="mb-20">
            <p className="text-xl mb-12">
              Three years in telehealth building compliant platforms for prescription-based healthcare services.
              Started as full-stack engineer, evolved into technical product management through solving real implementation problems.
            </p>
            
            <ExperienceItem 
              title="Solutions Engineer"
              company="CompoundLive"
              description="Led telehealth platform implementations for healthcare brands. Designed custom workflows, integrated payment systems, developed patient management features. Reduced client implementation time from 5 months to 5 weeks through systematic process improvements. 30% improvement in client satisfaction, 25% increase in deal closure rates."
              projectName="Client Implementation Excellence"
              imageUrl="https://web.archive.org/web/20240621022216im_/https://www.compoundlive.com/IMGS/homepage/desktop/sec-2.png"
            />

            <ExperienceItem 
              title="Full Stack Developer"
              company="Rugiet Health"
              description="Built Ruby on Rails application for men's health telehealth services. Developed online consultation features, prescription management, recurring subscription services. HIPAA compliance implementation. Increased patient retention by 35% through subscription management features. Agile Scrum methodology, code reviews, team mentorship."
              projectName="Healthcare Engineering"
              imageUrl={rugietImgPath}
            />
            
            <ExperienceItem 
              title="Lead Instructor"
              company="LEARN Academy"
              description="Technical curriculum development and instruction for aspiring developers. 120+ lectures covering React, Ruby on Rails, REST APIs, SQL, Git. Conducted 200+ code reviews and 450+ technical assessments. Achieved 85% student placement rate into tech roles within 6 months. Trained 170+ students across 9 cohorts."
              projectName="Developer Education"
              imageUrl="https://cdn.prod.website-files.com/6529b289fd19962a33e120c8/652fde252e2b5971fbcd3be6_hero-team-values.webp"
            />
          </div>
        </div>
      </section>

      {/* Let's Build Section */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-center text-[5rem] md:text-[8rem] font-bold outline-text mb-6">LET'S BUILD</h2>
          <p className="text-center text-xl md:text-2xl max-w-3xl mx-auto mb-12">
            Looking for a technical product manager who can translate complex healthcare requirements into working software?
            Someone who writes specifications developers can actually implement? Let's talk.
          </p>
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
              { name: "Github", url: "https://github.com/WalkerTexas-coder"},
              { name: "LinkedIn", url: "https://www.linkedin.com/in/walkertexas-coder/" },
              { name: "X", url: "https://x.com/WalkerTXdriver" },
              { name: "Email", url: "mailto:walkertexasdriver@gmail.com" }
            ]}
          />
        </div>
      </footer>
    </div>
  );
}