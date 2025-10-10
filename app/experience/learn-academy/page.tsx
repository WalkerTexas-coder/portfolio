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
              Developer Education • 2019-2021
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 h-[400px] flex items-center justify-center">
            <div className="text-white text-center">
              <h2 className="text-4xl font-bold mb-4">LEARN Academy</h2>
              <p className="text-xl">Transforming Careers Through Code</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Teaching the Next Generation of Developers</h2>
            <p>
              At LEARN Academy, I had the privilege of transforming people's lives through code education. 
              This wasn't just about teaching syntax—it was about taking people from complete beginners 
              to job-ready developers in 16 intensive weeks.
            </p>

            <h2>Curriculum Development</h2>
            <p>
              I developed and delivered comprehensive technical curriculum covering the full stack:
            </p>
            <ul>
              <li><strong>Frontend Technologies:</strong> React, JavaScript ES6+, HTML5, CSS3, responsive design</li>
              <li><strong>Backend Development:</strong> Ruby on Rails, RESTful APIs, database design</li>
              <li><strong>Database Management:</strong> PostgreSQL, SQL queries, data modeling</li>
              <li><strong>Development Tools:</strong> Git version control, testing frameworks, deployment</li>
            </ul>

            <h2>Teaching Methodology</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3>Hands-On Learning</h3>
              <p>
                Every concept was taught through practical application. Students didn't just learn about APIs—they 
                built them. They didn't just study React—they created full applications.
              </p>

              <h3>Code Reviews & Mentorship</h3>
              <p>
                Conducted over 200 individual code reviews, providing detailed feedback on code quality, 
                best practices, and architectural decisions. This one-on-one mentorship was crucial for 
                student development.
              </p>

              <h3>Technical Assessments</h3>
              <p>
                Designed and administered 450+ technical assessments, from basic algorithm challenges to 
                full-stack application builds. These assessments helped students track their progress and 
                identify areas for improvement.
              </p>
            </div>

            <h2>Student Success Stories</h2>
            <p>
              The most rewarding part of teaching was watching students transform their careers:
            </p>
            <ul>
              <li>Former restaurant manager who became a senior React developer at a fintech startup</li>
              <li>Military veteran who transitioned to backend engineering at a healthcare company</li>
              <li>Stay-at-home parent who landed a remote full-stack position at a SaaS company</li>
              <li>Career changer from retail who became a technical lead at a nonprofit</li>
            </ul>

            <h2>Program Impact</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <ul className="list-none space-y-2">
                <li><strong>👥 Students Trained:</strong> 170+ students across 9 cohorts</li>
                <li><strong>📚 Lectures Delivered:</strong> 120+ technical lectures and workshops</li>
                <li><strong>💼 Job Placement Rate:</strong> 85% of students placed in tech roles within 6 months</li>
                <li><strong>🔍 Code Reviews:</strong> 200+ individual code reviews and technical assessments</li>
                <li><strong>📊 Technical Assessments:</strong> 450+ assessments designed and administered</li>
              </ul>
            </div>

            <h2>Key Lessons in Technical Communication</h2>
            <p>
              Teaching at LEARN Academy fundamentally changed how I approach technical communication. 
              I learned that the best technical explanations are:
            </p>
            <ul>
              <li><strong>Concrete:</strong> Always start with a specific example before explaining the concept</li>
              <li><strong>Progressive:</strong> Build complexity gradually, ensuring each step is understood</li>
              <li><strong>Practical:</strong> Connect every concept to real-world applications</li>
              <li><strong>Empathetic:</strong> Remember what it feels like to not understand something</li>
            </ul>

            <h2>From Teaching to Product Management</h2>
            <p>
              My experience at LEARN Academy was invaluable preparation for product management. Teaching 
              developers taught me how to:
            </p>
            <ul>
              <li>Break down complex technical concepts into digestible pieces</li>
              <li>Communicate effectively with engineers at all skill levels</li>
              <li>Understand the learning curve for new technologies</li>
              <li>Write clear, actionable documentation and specifications</li>
            </ul>

            <p>
              Most importantly, it taught me that the best technical leaders are teachers at heart. 
              Whether you're explaining a new feature to stakeholders or writing acceptance criteria 
              for developers, it's all about clear communication and empathy for your audience.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex justify-between">
              <Link href="/experience/compoundlive" className="text-blue-600 dark:text-blue-400 hover:underline">
                ← Previous: CompoundLive
              </Link>
              <Link href="/experience/rugiet-health" className="text-blue-600 dark:text-blue-400 hover:underline">
                Next: Rugiet Health →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}