'use client';

import Link from "next/link";
import { useState } from "react";
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
  isLeft: boolean;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function JourneyStepCard({
  slug,
  title,
  subtitle,
  step,
  excerpt,
  readTime,
  isLeft,
  isActive,
  onHover,
  onLeave
}: JourneyStepCardProps) {
  return (
    <div
      className={`relative flex items-center w-full mb-32 md:mb-40 ${
        isLeft ? 'md:justify-start' : 'md:justify-end'
      } justify-start`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Card */}
      <Link
        href={`/journey/${slug}`}
        className={`block group w-full md:w-5/12 z-10`}
      >
        <div
          className={`
          bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg
          hover:shadow-2xl transition-all duration-500 h-full
          border-l-4 transform
          ${isActive
            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 scale-105 md:scale-110'
            : 'border-gray-300 dark:border-gray-600 hover:scale-105'
          }
          ${isLeft ? 'hover:translate-x-2' : 'md:hover:-translate-x-2 hover:translate-x-2'}
        `}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              className={`
              text-sm font-bold px-3 py-1 rounded-full transition-all duration-500
              ${isActive
                ? 'bg-purple-600 text-white scale-110'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }
            `}
            >
              Step {step}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{readTime}</span>
          </div>

          <h3
            className={`
            text-2xl font-bold mb-2 transition-all duration-500
            ${isActive
              ? 'text-purple-600 dark:text-purple-400'
              : 'text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400'
            }
          `}
          >
            {title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
            {subtitle}
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {excerpt}
          </p>

          <div
            className={`
            flex items-center font-semibold transition-all duration-300
            ${isActive
              ? 'text-purple-600 dark:text-purple-400'
              : 'text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400'
            }
            ${isLeft ? 'group-hover:translate-x-2' : 'md:group-hover:-translate-x-2 group-hover:translate-x-2'}
          `}
          >
            Read article →
          </div>
        </div>
      </Link>

      {/* Timeline Node (Desktop only) */}
      <div
        className={`
        hidden md:block absolute left-1/2 transform -translate-x-1/2
        w-5 h-5 rounded-full transition-all duration-500 z-20
        ${isActive
          ? 'bg-purple-600 ring-8 ring-purple-300 dark:ring-purple-700 scale-150'
          : 'bg-gray-400 dark:bg-gray-600 ring-4 ring-white dark:ring-gray-900'
        }
      `}
      />

      {/* Branch Line (Desktop only) */}
      <div
        className={`
        hidden md:block absolute top-1/2 transform -translate-y-1/2 h-0.5 z-0
        ${isLeft ? 'left-1/2 ml-2.5' : 'right-1/2 mr-2.5'}
        transition-all duration-500
        ${isActive
          ? 'bg-purple-500 opacity-80'
          : 'bg-gray-300 dark:bg-gray-600 opacity-40'
        }
      `}
        style={{
          width: isLeft
            ? 'calc(50% - 0.625rem - 41.666667%)'
            : 'calc(50% - 0.625rem - 41.666667%)'
        }}
      />

      {/* Mobile Timeline Dot */}
      <div
        className={`
        md:hidden absolute left-0 transform -translate-x-1/2
        w-3 h-3 rounded-full transition-all duration-500 z-10
        ${isActive
          ? 'bg-purple-600 ring-4 ring-purple-300 dark:ring-purple-700'
          : 'bg-gray-400 dark:bg-gray-600 ring-2 ring-white dark:ring-gray-900'
        }
      `}
      />
    </div>
  );
}

export default function JourneyIndexPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

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

      {/* Journey Timeline Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <FadeInOnScroll delay={100}>
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Journey</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Six articles chronicling my path from teaching code to building healthcare platforms.
              </p>
            </div>
          </FadeInOnScroll>

          {/* Timeline Container */}
          <div className="relative pl-6 md:pl-0">
            {/* Vertical Timeline Line (Desktop - center) */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 transition-all duration-700 ease-out"
              style={{
                background:
                  activeStep !== null
                    ? `linear-gradient(to bottom,
                       rgba(147, 51, 234, 0.8) 0%,
                       rgba(147, 51, 234, 0.8) ${((activeStep + 1) / indexData.steps.length) * 100}%,
                       rgba(147, 51, 234, 0.3) ${((activeStep + 1) / indexData.steps.length) * 100}%,
                       rgba(147, 51, 234, 0.3) 100%)`
                    : 'linear-gradient(to bottom, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.3) 50%, rgba(147, 51, 234, 0.3) 100%)'
              }}
            />

            {/* Vertical Timeline Line (Mobile - left side) */}
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-purple-400 opacity-30" />

            {/* Timeline Steps */}
            {indexData.steps.map((step, index) => (
              <FadeInOnScroll key={step.slug} delay={200 + index * 50}>
                <JourneyStepCard
                  slug={step.slug}
                  title={step.title}
                  subtitle={step.subtitle}
                  step={step.step}
                  excerpt={step.excerpt}
                  readTime={step.readTime}
                  isLeft={index % 2 === 0}
                  isActive={activeStep === index}
                  onHover={() => setActiveStep(index)}
                  onLeave={() => setActiveStep(null)}
                />
              </FadeInOnScroll>
            ))}
          </div>

          {/* CTA Section */}
          <FadeInOnScroll delay={600}>
            <div className="mt-16 bg-gradient-to-r from-purple-900 to-blue-900 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
              <p className="text-lg mb-6 text-gray-200">
                Begin with LEARN Academy to understand where it all started, or jump to any chapter that interests you.
              </p>
              <Link
                href="/journey/learn-academy"
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
