import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ExperienceItem from "./components/ExperienceItem";
import Contact from "./components/Contact";
// Use a direct URL path instead of importing the image
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
              entrepreneur. <span className="text-[#f0abfc] font-bold">#product</span>, 
               <span className="text-[#7dd3fc] font-bold"> #engineering</span>,
               <span className="text-[#a5b4fc] font-bold"> #transformation</span>.
            </h1>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <Link 
                href="#companies" 
                className="inline-block px-6 py-3 border-b-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                Companies
              </Link>
              <Link 
                href="#projects" 
                className="inline-block px-6 py-3 border-b-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                Projects
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
          <h2 className="text-2xl mb-8">Welcome</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl md:text-2xl leading-relaxed">
                I am a digital transformation specialist and telehealth architect with experience at companies like Axacraft, Teligant, Hedfirst, and Rugiet. 
                I create innovative solutions that enable businesses to execute their digital strategies and healthcare brands to launch and scale their platforms.
                I am passionate about building products that solve real problems and improve lives.
              </p>
            </div>
            <div>
              <p className="text-xl md:text-2xl leading-relaxed">
                I have a strong background in software engineering and systems integration, with expertise in CRM implementations, data migrations, and e-commerce solutions.
                I am also a mentor and educator, helping aspiring developers learn modern web technologies and best practices.
                I believe in the power of technology to transform businesses and improve lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section id="companies" className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="section-title">Currently</h2>
          <p className="text-xl mb-12 max-w-3xl">
            I am currently focused on digital transformation and telehealth solutions that empower businesses and healthcare brands to innovate and scale. 
            My work spans from system integrations and CRM implementations to architecting comprehensive platforms that deliver value and drive growth.
          </p>
          
          <div className="gradient-bg p-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">Building the future of digital business and healthcare.</h3>
            <p className="text-white mb-8">
              Working with forward-thinking companies to create innovative solutions that transform industries, enhance customer experiences, and deliver measurable results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProjectCard 
                title="Axacraft"
                description="A digital transformation execution agency where I architect solutions including CRM implementations, telehealth platforms, data migrations, and e-commerce integrations with make.com, Pipedrive, Klaviyo, and Shopify."
                link="https://www.axacraft.com/"
                imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              />
              <ProjectCard 
                title="Teligant"
                description="A comprehensive telehealth platform that seamlessly integrates patient care, e-commerce, and compliance - enabling healthcare brands to launch and scale with confidence."
                link="https://www.teligant.com/"
                imageSrc="https://cdn.prod.website-files.com/67ad2c6bdcb40e4e1f8634c9/67af2f828dde99af89ddfdfa_2image.avif"
              />
              
              <ProjectCard 
                title="Hedfirst"
                description="A modern migraine care brand combining expert providers, innovative compound medications, and seamless delivery - making specialized treatment accessible to patients nationwide. Built on the Teligant platform."
                link="https://www.hedfirst.com/"
                imageSrc="https://cdn.prod.website-files.com/67a509f5940083778a2478d0/67d16eb0733bbcccda908f61_hedfirst-home-screen.avif"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Previous Experience Section */}
      <section id="projects" className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <h2 className="section-title">Previously</h2>
          
          <div className="mb-20">
            <p className="text-xl mb-12">
              As a hands-on technology leader, I am proud that millions of people use products that I have helped to build.
            </p>
            
            <ExperienceItem 
              title="Solutions Architect"
              company="Compoundlive"
              description="Led the implementation of a secure, compliant telehealth platform for healthcare brands. Designed custom workflows, integrated payment systems, and developed patient management features that streamlined the prescription and fulfillment process."
              projectName="Telehealth Platform Implementation"
              imageUrl="https://web.archive.org/web/20240621022216im_/https://www.compoundlive.com/IMGS/homepage/desktop/sec-2.png"
            />

            <ExperienceItem 
              title="Full Stack Developer"
              company="Rugiet Men"
              description="Developed a Ruby on Rails application for men's health services, focusing on user experience and HIPAA compliance. Built features for online consultations, prescription management, and recurring subscription services that increased patient retention by 35%."
              projectName="Men's Health Ruby on Rails Application"
              imageUrl={rugietImgPath}
            />
            
            <ExperienceItem 
              title="Lead Instructor"
              company="LEARN Academy San Diego"
              description="Led technical curriculum development and instruction for aspiring developers, specializing in modern web technologies and best practices."
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
            Ready to transform your digital vision into reality? Whether you need a telehealth platform, CRM implementation, or custom integration solution, let's collaborate to create something exceptional.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="connect" className="py-12 px-6 md:px-12 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto">
          <Contact 
            name="Austin Walker"
            projects={[
              { name: "Axacraft", url: "https://www.axacraft.com/" },
              { name: "Teligant", url: "https://www.teligant.com/" },
              { name: "Hedfirst", url: "https://www.hedfirst.com/" }
            ]}
            companies={[
              { name: "Axacraft", url: "https://www.axacraft.com/" },
              { name: "Compoundlive", url: "https://web.archive.org/web/20240805010017/http://compoundlive.com/" },
              { name: "Rugiet Men", url: "https://www.rugiet.com/" },
              { name: "LEARN Academy", url: "https://www.learnacademy.org/" },
            ]}
            socialLinks={[
              { name: "Github", url: "https://github.com/WalkerTexas-coder"},
              { name: "LinkedIn", url: "https://linkedin.com/https://www.linkedin.com/in/walkertexas-coder/" },
              { name: "X", url: "https://x.com/WalkerTXdriver" },
              { name: "Email", url: "mailto:walkertexasdriver@gmail.com" }
            ]}
          />
        </div>
      </footer>
    </div>
  );
}
