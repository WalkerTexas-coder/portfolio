import Navbar from "../components/Navbar";
import StoryNavigation from "../components/StoryNavigation";
import FadeInOnScroll from "../components/FadeInOnScroll";

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  summary: string;
  metrics: string[];
  isLast?: boolean;
}

function TimelineItem({ year, title, company, summary, metrics, isLast }: TimelineItemProps) {
  return (
    <div className="relative flex gap-8 pb-12">
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 ring-4 ring-white dark:ring-gray-900" />
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500 mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">{company}</p>
            </div>
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              {year}
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {metrics.map((metric, index) => (
              <span
                key={index}
                className="text-sm px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-900 dark:text-purple-200 rounded-full font-medium"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkHistoryPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg">
        <div className="container mx-auto max-w-5xl">
          <FadeInOnScroll>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              My Journey
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              From teaching code to writing it, to leading product strategy in healthcare.
              Here's how I got here.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <FadeInOnScroll delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Timeline</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
              Three years in healthcare technology, building from first principles
            </p>
          </FadeInOnScroll>

          <div className="mt-12">
            <FadeInOnScroll delay={200}>
              <TimelineItem
                year="2024-2025"
                title="Technical Product Lead"
                company="Hedfirst / Teligant"
                summary="Co-led product strategy for multi-tenant telehealth platform from concept to production in 12 months. Coordinated 4 engineers, launched with 25 beta patients, $12,475 first-month revenue across 48 states."
                metrics={["12 months to launch", "514 medications", "48-state fulfillment", "$12,475 revenue"]}
              />
            </FadeInOnScroll>

            <FadeInOnScroll delay={300}>
              <TimelineItem
                year="2023-2024"
                title="Solutions Engineer → Technical Product Lead"
                company="CompoundLive"
                summary="Started helping enterprise clients deploy white-label telehealth platform. Identified that 5-month deployment cycles were killing sales. Built reusable frameworks that cut time to 5 weeks, boosting deal closures 25%."
                metrics={["5 months → 5 weeks", "30% satisfaction increase", "25% deal closure boost", "4 implementations"]}
              />
            </FadeInOnScroll>

            <FadeInOnScroll delay={400}>
              <TimelineItem
                year="2022-2023"
                title="Full Stack Developer"
                company="Rugiet Health"
                summary="First engineering role building prescription and subscription features in Ruby on Rails. When retention dropped, analyzed data, identified inflexible subscription management as root cause, and built solution that increased retention 35%."
                metrics={["35% retention increase", "Ruby on Rails", "Prescription features", "First PM moment"]}
              />
            </FadeInOnScroll>

            <FadeInOnScroll delay={500}>
              <TimelineItem
                year="2021-2022"
                title="Lead Instructor"
                company="LEARN Academy"
                summary="Trained 170+ developers across 9 cohorts in full-stack development. Designed curriculum, iterated based on outcomes, achieved 85% job placement. Learned to break down complex technical concepts and explain tradeoffs—skills I use daily in PM."
                metrics={["170+ students", "9 cohorts", "85% placement rate", "450+ assessments"]}
                isLast
              />
            </FadeInOnScroll>
          </div>

          {/* Key Themes */}
          <FadeInOnScroll delay={600}>
            <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">The Through-Line</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-semibold text-lg mb-2">Outcomes Over Features</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Started asking "why" at Rugiet, formalized it at CompoundLive, scaled it at Teligant
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🔧</div>
                  <h4 className="font-semibold text-lg mb-2">Technical Depth</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Engineering background means I write specs developers can actually implement
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">⚕️</div>
                  <h4 className="font-semibold text-lg mb-2">Healthcare Domain</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Three years learning compliance, clinical workflows, and pharmacy operations
                  </p>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Navigation */}
          <div className="mt-16">
            <StoryNavigation
              currentStep={2}
              totalSteps={7}
              nextUrl="/journey/experience"
              nextLabel="Dive Deeper"
              prevUrl="/"
              prevLabel="Home"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
