import Link from 'next/link';

interface ArticleHeaderProps {
  title: string;
  subtitle?: string;
  backLink?: string;
  backLabel?: string;
  className?: string;
}

export default function ArticleHeader({
  title,
  subtitle,
  backLink = '/',
  backLabel = '← Back to Portfolio',
  className = ''
}: ArticleHeaderProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <Link
        href={backLink}
        className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block"
      >
        {backLabel}
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
