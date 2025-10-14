import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

interface ExperienceItemProps {
  title: string;
  company: string;
  description: string;
  imageBgColor?: string;
  projectName?: string;
  imageUrl?: string | StaticImageData;
  slug?: string;
}

export default function ExperienceItem({
  title,
  company,
  description,
  imageBgColor = "from-blue-500 to-purple-500",
  projectName,
  imageUrl,
  slug
}: ExperienceItemProps) {
  const content = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="md:col-span-1">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <h4 className="text-2xl font-bold mb-4">{company}</h4>
        <p>{description}</p>
        {slug && (
          <div className="mt-4">
            <span className="text-blue-600 dark:text-blue-400 hover:underline">
              Read more →
            </span>
          </div>
        )}
      </div>
      <div className="md:col-span-2 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 relative h-full">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${company} - ${projectName || title}`}
              fill
              style={{ objectFit: 'cover' }}
              className="z-10"
              priority={false}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          ) : (
            <>
              <div className={`absolute inset-0 bg-gradient-to-r ${imageBgColor}`}></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                {projectName || `${company} Project`}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link href={`/experience/${slug}`} className="block hover:opacity-80 transition-opacity cursor-pointer">
        {content}
      </Link>
    );
  }

  return content;
}
