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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Full Stack Developer at Rugiet Health</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Healthcare Engineering • 2021-2022
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
            <h2>Building Men's Health Telehealth from the Ground Up</h2>
            <p>
              At Rugiet Health, I was part of the core engineering team building a comprehensive men's health 
              telehealth platform from scratch. This wasn't just another web application—it was a HIPAA-compliant, 
              prescription-enabled healthcare platform that needed to handle sensitive medical data and real patient care.
            </p>

            <h2>Technical Architecture</h2>
            <p>
              Built the entire platform using Ruby on Rails, focusing on:
            </p>
            <ul>
              <li><strong>Online Consultation System:</strong> Real-time video consultations with medical providers</li>
              <li><strong>Prescription Management:</strong> Integration with pharmacy partners for medication fulfillment</li>
              <li><strong>Recurring Subscriptions:</strong> Automated billing and subscription management</li>
              <li><strong>HIPAA Compliance:</strong> End-to-end encryption, audit logging, and secure data handling</li>
            </ul>

            <h2>Key Features Developed</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3>Patient Portal</h3>
              <ul>
                <li>Secure patient registration and profile management</li>
                <li>Medical history intake forms</li>
                <li>Appointment scheduling and video consultation interface</li>
                <li>Prescription tracking and refill requests</li>
              </ul>

              <h3>Provider Dashboard</h3>
              <ul>
                <li>Patient management and medical record access</li>
                <li>Prescription writing and approval workflows</li>
                <li>Consultation notes and treatment planning</li>
                <li>Compliance reporting and audit trails</li>
              </ul>

              <h3>Subscription Management</h3>
              <ul>
                <li>Flexible billing cycles and pricing tiers</li>
                <li>Automated payment processing and retry logic</li>
                <li>Subscription pause/resume functionality</li>
                <li>Revenue analytics and reporting</li>
              </ul>
            </div>

            <h2>Engineering Practices</h2>
            <p>
              This role taught me the importance of rigorous engineering practices in healthcare:
            </p>
            <ul>
              <li><strong>Agile Scrum Methodology:</strong> 2-week sprints with daily standups and retrospectives</li>
              <li><strong>Code Reviews:</strong> Every line of code reviewed by at least one other developer</li>
              <li><strong>Test-Driven Development:</strong> Comprehensive test coverage for all critical paths</li>
              <li><strong>Team Mentorship:</strong> Onboarded junior developers and led technical discussions</li>
            </ul>

            <h2>Impact & Results</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <ul className="list-none space-y-2">
                <li><strong>📈 Patient Retention:</strong> 35% increase through improved subscription management</li>
                <li><strong>🔒 Security Compliance:</strong> Achieved full HIPAA compliance certification</li>
                <li><strong>⚡ Performance:</strong> Sub-2-second page load times across the platform</li>
                <li><strong>🚀 Scalability:</strong> Platform handled 10x user growth without major refactoring</li>
              </ul>
            </div>

            <h2>From Engineering to Product</h2>
            <p>
              Working at Rugiet Health was where I first realized that great healthcare technology isn't just about 
              clean code—it's about understanding the entire patient journey. I found myself naturally gravitating 
              toward product decisions: How should the consultation flow work? What information do doctors actually 
              need? How can we make prescription refills seamless?
            </p>

            <p>
              This experience planted the seeds for my transition from pure engineering to technical product management. 
              I learned that the most impactful engineers are the ones who understand not just how to build something, 
              but what to build and why.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex justify-between">
              <Link href="/experience/learn-academy" className="text-blue-600 dark:text-blue-400 hover:underline">
                ← Previous: LEARN Academy
              </Link>
              <Link href="/experience/compoundlive" className="text-blue-600 dark:text-blue-400 hover:underline">
                Next: CompoundLive →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}