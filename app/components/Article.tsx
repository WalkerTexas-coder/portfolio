import React from 'react';
import Image, { StaticImageData } from 'next/image';
import ArticleHeader from './ArticleHeader';
import ArticleSection, { ArticleSectionData } from './ArticleSection';
import StoryNavigation from './StoryNavigation';

export interface ArticleData {
  title: string;
  subtitle?: string;
  backLink?: string;
  backLabel?: string;
  heroImage?: {
    src: string | StaticImageData;
    alt: string;
    className?: string;
  };
  sections: ArticleSectionData[];
}

export interface ArticleNavigationProps {
  currentStep?: number;
  totalSteps?: number;
  nextUrl?: string;
  nextLabel?: string;
  prevUrl?: string;
  prevLabel?: string;
}

interface ArticleProps {
  data: ArticleData;
  navigation?: ArticleNavigationProps;
}

export default function Article({ data, navigation }: ArticleProps) {
  return (
    <article className="pt-24 pb-20 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        {/* Story Navigation - Top (for journey articles) */}
        {navigation && navigation.currentStep && navigation.totalSteps && (
          <div className="mb-12">
            <StoryNavigation
              currentStep={navigation.currentStep}
              totalSteps={navigation.totalSteps}
              nextUrl={navigation.nextUrl}
              nextLabel={navigation.nextLabel}
              prevUrl={navigation.prevUrl}
              prevLabel={navigation.prevLabel}
              showProgress={true}
            />
          </div>
        )}

        {/* Article Header */}
        <ArticleHeader
          title={data.title}
          subtitle={data.subtitle}
          backLink={data.backLink}
          backLabel={data.backLabel}
        />

        {/* Hero Image */}
        {data.heroImage && (
          <div className="mb-12 rounded-lg overflow-hidden">
            <Image
              src={data.heroImage.src}
              alt={data.heroImage.alt}
              width={800}
              height={400}
              className={data.heroImage.className || 'w-full h-[400px] object-cover'}
              unoptimized
            />
          </div>
        )}

        {/* Article Content */}
        <div className="experience-prose prose-lg dark:prose-invert max-w-none">
          {data.sections.map((section, index) => (
            <ArticleSection key={index} section={section} />
          ))}
        </div>

        {/* Story Navigation - Bottom (for journey articles) */}
        {navigation && navigation.currentStep && navigation.totalSteps && (
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <StoryNavigation
              currentStep={navigation.currentStep}
              totalSteps={navigation.totalSteps}
              nextUrl={navigation.nextUrl}
              nextLabel={navigation.nextLabel}
              prevUrl={navigation.prevUrl}
              prevLabel={navigation.prevLabel}
              showProgress={false}
            />
          </div>
        )}
      </div>
    </article>
  );
}
