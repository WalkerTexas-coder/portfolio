import Link from "next/link";
import Navbar from "../components/Navbar";
import FadeInOnScroll from "../components/FadeInOnScroll";
import indexData from "./content/index.json";

interface ProjectCardProps {
  slug: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  impact: string;
  readTime: string;
  tags: string[];
}

function ProjectCard({ slug, title, subtitle, problem, solution, impact, readTime, tags }: ProjectCardProps) {
  return (
    <Link href={`/case-studies/${slug}`} className="block group">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-t-4 border-purple-500 hover:border-blue-500">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">{readTime}</span>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-200 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">
          {subtitle}
        </p>

        <div className="space-y-3 mb-4">
          <div>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Problem</span>
            <p className="text-sm text-gray-700 dark:text-gray-300">{problem}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Solution</span>
            <p className="text-sm text-gray-700 dark:text-gray-300">{solution}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase">Impact</span>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">{impact}</p>
          </div>
        </div>

        <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-2 transition-transform pt-4 border-t border-gray-200 dark:border-gray-700">
          Read case study →
        </div>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
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

      {/* Projects Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <FadeInOnScroll delay={100}>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Three projects showcasing the full product lifecycle: ideation, validation, implementation,
                testing, deployment, and scale.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {indexData.projects.map((project, index) => (
              <FadeInOnScroll key={project.slug} delay={200 + index * 100}>
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  subtitle={project.subtitle}
                  problem={project.problem}
                  solution={project.solution}
                  impact={project.impact}
                  readTime={project.readTime}
                  tags={project.tags}
                />
              </FadeInOnScroll>
            ))}
          </div>

          {/* CTA Section */}
          <FadeInOnScroll delay={600}>
            <div className="mt-16 bg-gradient-to-r from-purple-900 to-blue-900 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
              <p className="text-lg mb-6 text-gray-200">
                Each case study walks through the complete product lifecycle, showing how I approach
                complex healthcare problems from discovery to scale.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="/journey"
                  className="inline-block px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Read My Journey
                </Link>
                <Link
                  href="/#connect"
                  className="inline-block px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors text-center"
                >
                  Let's Connect
                </Link>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}
