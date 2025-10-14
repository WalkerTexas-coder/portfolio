import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import rugietImage from "../../images/rugiet-health.png";

export default function RugietHealthPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Software Engineer at Rugiet Health</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              IC2 Full Stack Engineer • February 2023 - September 2024
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <Image
              src={rugietImage}
              alt="Rugiet Health Platform"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>My First Real Engineering Job</h2>
            <p>
              Rugiet Health was my first professional software engineering role after completing LEARN Academy's 
              bootcamp and teaching there for two years. I joined as an IC2 (Individual Contributor Level 2) 
              Software Engineer building a men's health telehealth platform using Ruby on Rails. This was where 
              I learned what it meant to write production code for real patients and real healthcare operations.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 my-8">
              <h3 className="text-2xl font-semibold mb-4">Context: Dual Role</h3>
              <p>
                I worked simultaneously at both Rugiet Health and CompoundLive (same parent company, Onyx MP Growth). 
                I spent about 25% of my time on engineering for Rugiet's platform ("Bufo V2") and 75% on Solutions 
                Engineering for CompoundLive's B2B clients. Both roles were in the same building, same office. 
                I'd code in the morning, jump on client calls in the afternoon.
              </p>
            </div>

            <h2>What I Built</h2>
            <p>
              As a junior full-stack engineer, I worked on prescription management and subscription features:
            </p>
            <ul>
              <li><strong>Prescription Management:</strong> Patient prescription request flows and doctor approval workflows</li>
              <li><strong>Subscription System:</strong> Recurring billing for men's health treatment plans</li>
              <li><strong>Patient Portal Features:</strong> Account management, treatment history, refill requests</li>
              <li><strong>HIPAA-Compliant Development:</strong> Secure data handling and audit logging</li>
            </ul>

            <h3>Tech Stack</h3>
            <ul>
              <li>Ruby on Rails (backend framework)</li>
              <li>Stimulus.js (JavaScript framework for frontend interactivity)</li>
              <li>PostgreSQL (database)</li>
              <li>Git/GitHub (version control)</li>
              <li>AWS (infrastructure)</li>
            </ul>

            <h2>The Retention Problem</h2>
            <p>
              This is where my product management journey actually began, even though I didn't realize it at the time.
            </p>
            
            <p>
              When patient retention metrics started dropping, I didn't just implement the feature request on the 
              Jira ticket. I dug into the data. I talked to customer support. I analyzed churn patterns.
            </p>

            <p>
              The Jira tickets had clear acceptance criteria, but they weren't solving the right problem. The real 
              issue wasn't missing features—it was <strong>inflexible subscription management forcing patients to 
              cancel when they wanted to pause or adjust</strong>.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold mb-4">What I Did</h3>
              <ul className="space-y-2">
                <li>Analyzed user data and support tickets to identify churn root causes</li>
                <li>Discovered patients were canceling because they couldn't pause subscriptions</li>
                <li>Proposed a flexible subscription management solution</li>
                <li>Wrote detailed specs with edge cases for implementation</li>
                <li>Built the feature myself in Ruby on Rails</li>
              </ul>
            </div>

            <h2>Results</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
              <ul className="list-none space-y-3">
                <li><strong>📈 Patient Retention:</strong> 35% increase after implementing flexible subscription management</li>
                <li><strong>💰 Revenue Impact:</strong> Direct bottom-line improvement from reduced churn</li>
                <li><strong>🔍 Root Cause Analysis:</strong> Learned to question requirements and dig into actual user problems</li>
                <li><strong>📝 Spec Writing:</strong> Developed skills in writing detailed technical specifications</li>
              </ul>
            </div>

            <h2>My "Product Manager Moment"</h2>
            <p>
              That retention project was when I realized I was doing product management, not just engineering. 
              I wasn't writing code faster—I was <strong>asking better questions first</strong>.
            </p>

            <p className="text-xl font-semibold italic my-6">
              "That's when I realized I was better at deciding what to build than building it."
            </p>

            <p>
              I was good at writing code, but I kept finding myself in the gap between "what we're building" 
              and "what actually needs to work." The best engineers I saw weren't just fast coders—they 
              understood the business problem deeply enough to question the requirements.
            </p>

            <h2>Engineering Practices</h2>
            <p>
              Working on a 10+ person engineering team taught me professional software development practices:
            </p>
            <ul>
              <li><strong>Agile Scrum:</strong> 2-week sprints with daily standups and retrospectives</li>
              <li><strong>Code Reviews:</strong> Every pull request reviewed by at least one other engineer</li>
              <li><strong>ClickUp Management:</strong> Tracked requirements, feature progress, and bug reports</li>
              <li><strong>HIPAA Compliance:</strong> Learned healthcare data handling standards and security practices</li>
              <li><strong>Team Collaboration:</strong> Worked with 10+ engineers on shared codebase</li>
            </ul>

            <h2>Reality Check</h2>
            <p>
              I was only shipping about 25% of the ticket volume of other engineers due to my time split with 
              CompoundLive. This made me feel less productive as a pure engineer. But what I didn't realize at 
              the time was that I was developing a different skillset—bridging technical and business thinking.
            </p>

            <h2>What I Learned</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
              <ul className="space-y-2">
                <li>✅ Healthcare engineering requires understanding patient journeys, not just writing features</li>
                <li>✅ The hardest part isn't coding—it's figuring out what to code</li>
                <li>✅ Data analysis reveals problems that stakeholders don't articulate</li>
                <li>✅ Talking to support teams provides invaluable product insights</li>
                <li>✅ Business impact matters more than code elegance</li>
                <li>✅ My highest impact wasn't writing code faster—it was asking better questions</li>
              </ul>
            </div>

            <h2>Why I Left</h2>
            <p>
              Parent company (Onyx MP Growth) was acquired by ListenCo. After the acquisition process completed, 
              I decided to pursue the Hedfirst/Teligant opportunity with Kelly Smith instead of staying with the 
              acquired entity. I wanted to build a healthcare platform from scratch incorporating everything I'd 
              learned about what worked and what didn't.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 mt-8">
              <p className="mb-0">
                <strong>Visit Rugiet Health:</strong> See the platform at{" "}
                <Link href="https://www.rugiet.com/" className="text-green-600 dark:text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  rugiet.com
                </Link>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex justify-between">
              <Link href="/experience/compoundlive" className="text-blue-600 dark:text-blue-400 hover:underline">
                ← Related: CompoundLive
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