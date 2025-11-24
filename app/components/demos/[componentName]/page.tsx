import DemoView from './DemoView';
import { demoComponentNames } from '../component-names';

// Generate static params for all demo components (server-side)
export function generateStaticParams() {
  return demoComponentNames.map((componentName) => ({
    componentName,
  }));
}

export default async function DemoViewPage({ params }: { params: Promise<{ componentName: string }> }) {
  const resolvedParams = await params;
  return <DemoView componentName={resolvedParams.componentName} />;
}
