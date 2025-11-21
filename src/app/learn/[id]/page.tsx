import { notFound } from 'next/navigation';
import { getRotation } from '@/data/systems';
import { RotationDetailClient } from '@/components/learning/RotationDetailClient';

interface PageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];
}

export default function RotationDetailPage({ params }: PageProps) {
  const rotationId = parseInt(params.id);
  const rotation = getRotation(rotationId);

  if (!rotation) {
    notFound();
  }

  return <RotationDetailClient rotation={rotation} rotationId={rotationId} />;
}
