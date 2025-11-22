import { notFound } from 'next/navigation';
import PracticeRotationClient from './PracticeRotationClient';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];
}

export default async function PracticeRotationPage({ params }: PageProps) {
  const { id } = await params;
  const rotationId = parseInt(id);

  if (isNaN(rotationId) || rotationId < 1 || rotationId > 6) {
    notFound();
  }

  return <PracticeRotationClient rotationId={rotationId} />;
}
