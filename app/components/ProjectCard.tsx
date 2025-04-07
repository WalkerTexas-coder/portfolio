import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  imageSrc?: string;
}

export default function ProjectCard({ title, description, link, imageSrc }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg project-card">
      {imageSrc && (
        <div className="mb-4 relative h-48 overflow-hidden rounded-md">
          <Image 
            src={imageSrc} 
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
      {link && (
        <Link href={link} className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
          Learn more 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      )}
    </div>
  );
}
