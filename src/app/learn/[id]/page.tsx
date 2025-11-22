import { notFound } from 'next/navigation';
import { getRotation } from '@/data/systems';
import { RotationDetailClient } from '@/components/learning/RotationDetailClient';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];
}

export default async function RotationDetailPage({ params }: PageProps) {
  const { id } = await params;
  const rotationId = parseInt(id);
  const rotation = getRotation(rotationId);

  if (!rotation) {
    notFound();
  }

  return <RotationDetailClient rotation={rotation} rotationId={rotationId} />;
}
