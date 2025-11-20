import Link from "next/link";
import Navbar from "../components/Navbar";
import FadeInOnScroll from "../components/FadeInOnScroll";
import indexData from "./content/index.json";

interface JourneyStepCardProps {
  slug: string;
  title: string;
  subtitle: string;
  step: number;
  excerpt: string;
  readTime: string;
}

function JourneyStepCard({ slug, title, subtitle, step, excerpt, readTime }: JourneyStepCardProps) {
  return (
    <Link href={`/journey/${slug}`} className="block group">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-l-4 border-purple-500 hover:border-blue-500">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
            Step {step}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{readTime}</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
          {subtitle}
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {excerpt}
        </p>

        <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-2 transition-transform">
          Read article →
        </div>
      </div>
    </Link>
  );
}

export default function JourneyIndexPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg">
        <div className="container mx-auto max-w-5xl">
          <FadeInOnScroll>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {indexData.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              {indexData.description}
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Journey Steps Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <FadeInOnScroll delay={100}>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Journey</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Seven articles chronicling my path from teaching code to building healthcare platforms.
                Start at the beginning or jump to any chapter.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {indexData.steps.map((step, index) => (
              <FadeInOnScroll key={step.slug} delay={200 + index * 100}>
                <JourneyStepCard
                  slug={step.slug}
                  title={step.title}
                  subtitle={step.subtitle}
                  step={step.step}
                  excerpt={step.excerpt}
                  readTime={step.readTime}
                />
              </FadeInOnScroll>
            ))}
          </div>

          {/* CTA Section */}
          <FadeInOnScroll delay={900}>
            <div className="mt-16 bg-gradient-to-r from-purple-900 to-blue-900 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
              <p className="text-lg mb-6 text-gray-200">
                Begin with the introduction to understand my path, or jump to any chapter that interests you.
              </p>
              <Link
                href="/journey/introduction"
                className="inline-block px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start at Step 1 →
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}
