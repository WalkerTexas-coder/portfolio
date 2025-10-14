import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function LearnAcademyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Lead Instructor at LEARN Academy</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Developer Education • April 2021 - February 2023
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <Image
              src="https://cdn.prod.website-files.com/6529b289fd19962a33e120c8/652fde252e2b5971fbcd3be6_hero-team-values.webp"
              alt="LEARN Academy"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>From Student to Lead Instructor</h2>
            <p>
              I completed LEARN Academy's bootcamp in August 2020, did a 6-month internship at Victorise, then 
              returned to LEARN Academy as an instructor. This role solidified my technical fundamentals while I 
              recovered from losing my mother during the internship. Teaching became both professional development 
              and personal healing.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 my-8">
              <h3 className="text-2xl font-semibold mb-4">Career Progression</h3>
              <ul className="space-y-2">
                <li><strong>Associate Instructor:</strong> April 2021 - January 2022 (10 months)</li>
                <li><strong>Lead Instructor:</strong> January 2022 - February 2023 (13 months)</li>
                <li><strong>Total Tenure:</strong> 23 months teaching full-stack web development</li>
              </ul>
            </div>

            <h2>What I Taught</h2>
            <p>
              LEARN Academy runs intensive 3-month bootcamps (480+ hours of hands-on training) transforming 
              complete beginners into job-ready full-stack developers. I designed and delivered comprehensive 
              curriculum covering:
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold mb-4">Full Stack Curriculum</h3>
              <ul className="space-y-2">
                <li><strong>Frontend:</strong> React, JavaScript ES6+, HTML5, CSS3, responsive design</li>
                <li><strong>Backend:</strong> Ruby on Rails, Node.js, RESTful API development</li>
                <li><strong>Database:</strong> PostgreSQL, SQL queries, database design</li>
                <li><strong>Tools:</strong> Git/GitHub version control, testing frameworks, deployment</li>
                <li><strong>Computer Science:</strong> Object-oriented programming, algorithms, data structures</li>
              </ul>
            </div>

            <h2>Teaching Methodology</h2>
            
            <h3>Hands-On Learning</h3>
            <p>
              Every concept was taught through practical application. Students didn't just learn about APIs—they 
              built them. They didn't just study React—they created full applications with real user interactions 
              and database persistence.
            </p>

            <h3>Code Reviews & Mentorship</h3>
            <p>
              Conducted 200+ individual code reviews across 9 cohorts, providing detailed feedback on:
            </p>
            <ul>
              <li>Code quality and best practices</li>
              <li>Architectural decisions and design patterns</li>
              <li>Debugging strategies and problem-solving approaches</li>
              <li>Professional development practices</li>
            </ul>

            <h3>Technical Assessments</h3>
            <p>
              Designed and administered 450+ technical assessments ranging from basic algorithm challenges to 
              full-stack application builds. These assessments helped students:
            </p>
            <ul>
              <li>Track progress throughout the bootcamp</li>
              <li>Identify areas needing additional practice</li>
              <li>Prepare for technical interviews</li>
              <li>Build confidence in their abilities</li>
            </ul>

            <h2>Impact & Results</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
              <ul className="list-none space-y-3">
                <li><strong>👥 Students Trained:</strong> 170+ students across 9 cohorts</li>
                <li><strong>📚 Lectures Delivered:</strong> 120+ comprehensive technical lectures and workshops</li>
                <li><strong>💼 Job Placement:</strong> 85% of students placed in tech roles within 6 months</li>
                <li><strong>😊 Satisfaction Rate:</strong> 95% student satisfaction across all cohorts</li>
                <li><strong>🔍 Code Reviews:</strong> 200+ individual code reviews with detailed feedback</li>
                <li><strong>📊 Assessments:</strong> 450+ technical assessments designed and administered</li>
              </ul>
            </div>

            <h2>What Teaching Taught Me</h2>
            <p>
              Nothing tests your technical depth like explaining recursion to 30 people staring at you, or 
              debugging someone else's code in real-time. Teaching fundamentally changed how I approach 
              technical communication.
            </p>

            <h3>Technical Communication Skills</h3>
            <p>
              I learned that the best technical explanations are:
            </p>
            <ul>
              <li><strong>Concrete First:</strong> Always start with a specific example before explaining the abstract concept</li>
              <li><strong>Progressive Complexity:</strong> Build understanding gradually, ensuring each step is solid before moving forward</li>
              <li><strong>Practical Context:</strong> Connect every concept to real-world applications students will encounter</li>
              <li><strong>Empathetic Patience:</strong> Remember what it feels like to not understand something</li>
            </ul>

            <h3>Debugging & Problem-Solving</h3>
            <p>
              Debugging other people's code in real-time during office hours made me a significantly better 
              problem-solver. You can't just brute-force solutions when 30 students are waiting—you need 
              systematic approaches to:
            </p>
            <ul>
              <li>Read error messages methodically</li>
              <li>Trace code execution mentally</li>
              <li>Identify likely failure points quickly</li>
              <li>Explain your reasoning process out loud</li>
            </ul>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold mb-4">Skills That Transferred to Product Management</h3>
              <ul className="space-y-2">
                <li>✅ Breaking down complex technical concepts into digestible pieces</li>
                <li>✅ Communicating effectively with engineers at all skill levels</li>
                <li>✅ Understanding learning curves for new technologies</li>
                <li>✅ Writing clear, actionable documentation and specifications</li>
                <li>✅ Explaining technical tradeoffs to non-technical stakeholders</li>
                <li>✅ Teaching others how to think about problems, not just solutions</li>
              </ul>
            </div>

            <h2>Curriculum Design & Iteration</h2>
            <p>
              As Lead Instructor, I was responsible for curriculum improvements based on student outcomes and 
              industry feedback. This meant:
            </p>
            <ul>
              <li>Analyzing which concepts students struggled with most</li>
              <li>Gathering feedback from hiring partners about skill gaps</li>
              <li>Iterating on lesson plans and project assignments</li>
              <li>Measuring success through placement rates and student satisfaction</li>
            </ul>
            <p>
              This experience taught me to think like a product manager: measure outcomes, gather feedback, 
              iterate based on data, and always focus on end-user success (in this case, job placement).
            </p>

            <h2>Why I Left</h2>
            <p>
              After almost two years of teaching, I wanted to transition back into hands-on software engineering 
              to gain real-world production experience. Teaching solidified my fundamentals, but I needed to apply 
              them in a professional development environment. That's when I got the opportunity at Rugiet Health.
            </p>

            <p>
              In retrospect, teaching was perfect preparation for becoming a Technical Product Manager. The best 
              technical leaders are teachers at heart—whether you're explaining a new feature to stakeholders, 
              writing acceptance criteria for developers, or onboarding new team members.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 mt-8">
              <p className="mb-0">
                <strong>Learn More:</strong> Visit LEARN Academy at{" "}
                <Link href="https://www.learnacademy.org/" className="text-green-600 dark:text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  learnacademy.org
                </Link>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex justify-between">
              <Link href="/experience/rugiet-health" className="text-blue-600 dark:text-blue-400 hover:underline">
                ← Next: Rugiet Health
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