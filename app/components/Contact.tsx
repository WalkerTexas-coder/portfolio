import Link from 'next/link';

interface SocialLink {
  name: string;
  url: string;
}

interface ContactProps {
  name: string;
  projects: SocialLink[];
  companies: SocialLink[];
  socialLinks: SocialLink[];
}

export default function Contact({ name, projects, companies, socialLinks }: ContactProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-6">{name}</h3>
      </div>
      
      <div>
        <h4 className="font-semibold mb-4">Projects</h4>
        <ul className="space-y-2">
          {projects.map((project, index) => (
            <li key={index}>
              <Link href={project.url} className="hover:underline">
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold mb-4">Companies</h4>
        <ul className="space-y-2">
          {companies.map((company, index) => (
            <li key={index}>
              <Link href={company.url} className="hover:underline">
                {company.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold mb-4">Connect</h4>
        <ul className="space-y-2">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.url} className="hover:underline">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
