import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Article, { ArticleData, ArticleNavigationProps } from "../../components/Article";
import introductionJson from "../content/introduction.json";
import philosophyJson from "../content/philosophy.json";
import experienceJson from "../content/experience.json";
import teligantHedfirstJson from "../content/teligant-hedfirst.json";
import compoundliveJson from "../content/compoundlive.json";
import rugietJson from "../content/rugiet.json";
import learnAcademyJson from "../content/learn-academy.json";

// Map of slug to JSON data
const contentMap: Record<string, any> = {
  introduction: introductionJson,
  philosophy: philosophyJson,
  experience: experienceJson,
  "teligant-hedfirst": teligantHedfirstJson,
  compoundlive: compoundliveJson,
  rugiet: rugietJson,
  "learn-academy": learnAcademyJson,
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function JourneyArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const content = contentMap[slug];

  if (!content) {
    notFound();
  }

  // Prepare article data
  const articleData: ArticleData = {
    title: content.title,
    subtitle: content.subtitle,
    backLink: "/journey",
    backLabel: "← Back to Journey",
    heroImage: content.heroImage?.src
      ? {
          src: content.heroImage.src,
          alt: content.heroImage.alt,
          className: content.heroImage.className,
        }
      : undefined,
    sections: content.sections,
  };

  // Prepare navigation data (for journey articles)
  const navigation: ArticleNavigationProps | undefined = content.step
    ? {
        currentStep: content.step,
        totalSteps: content.totalSteps,
        nextUrl: content.nextSlug ? `/journey/${content.nextSlug}` : undefined,
        nextLabel: content.nextLabel,
        prevUrl: content.prevSlug ? `/journey/${content.prevSlug}` : undefined,
        prevLabel: content.prevLabel,
      }
    : undefined;

  return (
    <div className="min-h-screen">
      <Navbar />
      <Article data={articleData} navigation={navigation} />
    </div>
  );
}

// Generate static params for all journey articles
export async function generateStaticParams() {
  return Object.keys(contentMap).map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const content = contentMap[slug];

  if (!content) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${content.title} | Austin Walker`,
    description: content.subtitle || "Journey through healthcare product management",
  };
}
