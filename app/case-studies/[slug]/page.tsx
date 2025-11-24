import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Article, { ArticleData } from "../../components/Article";
import pharmacyFulfillmentJson from "../content/pharmacy-fulfillment.json";
import chooseHealthLabsJson from "../content/choose-health-labs.json";
import platformLaunchJson from "../content/platform-launch.json";
import paytheoryBillingJson from "../content/paytheory-billing.json";

// Map of slug to JSON data
const contentMap: Record<string, any> = {
  "pharmacy-fulfillment": pharmacyFulfillmentJson,
  "choose-health-labs": chooseHealthLabsJson,
  "platform-launch": platformLaunchJson,
  "paytheory-billing": paytheoryBillingJson,
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const content = contentMap[slug];

  if (!content) {
    notFound();
  }

  // Prepare article data
  const articleData: ArticleData = {
    title: content.title,
    subtitle: content.subtitle,
    backLink: "/projects",
    backLabel: "← Back to Projects",
    heroImage: content.heroImage?.src
      ? {
          src: content.heroImage.src,
          alt: content.heroImage.alt,
          className: content.heroImage.className,
        }
      : undefined,
    sections: content.sections,
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Article data={articleData} />
    </div>
  );
}

// Generate static params for all project case studies
export async function generateStaticParams() {
  return Object.keys(contentMap).map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug} = await params;
  const content = contentMap[slug];

  if (!content) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${content.title} | Austin Walker`,
    description: content.subtitle || "Product case study from Austin Walker's portfolio",
  };
}
