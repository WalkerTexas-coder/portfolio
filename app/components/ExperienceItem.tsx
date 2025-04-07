import Image from "next/image";
import { StaticImageData } from "next/image";

interface ExperienceItemProps {
  title: string;
  company: string;
  description: string;
  imageBgColor?: string;
  projectName?: string;
  imageUrl?: string | StaticImageData;
}

export default function ExperienceItem({ 
  title, 
  company, 
  description, 
  imageBgColor = "from-blue-500 to-purple-500",
  projectName,
  imageUrl
}: ExperienceItemProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="md:col-span-1">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <h4 className="text-2xl font-bold mb-4">{company}</h4>
        <p>{description}</p>
      </div>
      <div className="md:col-span-2 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 relative h-64">
          {imageUrl ? (
            <Image 
              src={imageUrl}
              alt={`${company} - ${projectName || title}`}
              fill
              style={{ objectFit: 'cover' }}
              className="z-10"
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
}
