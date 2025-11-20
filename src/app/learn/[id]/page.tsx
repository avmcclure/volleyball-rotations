import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getRotation } from '@/data/systems';
import { RotationDisplay } from '@/components/rotation/RotationDisplay';
import { RotationNav } from '@/components/navigation/RotationNav';
import { Button } from '@/components/ui/Button';

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <RotationNav currentRotation={rotationId} basePath="/learn" />

      <div className="mb-6">
        <Link href={`/practice/${rotationId}`}>
          <Button variant="primary" size="lg">
            Practice This Rotation
          </Button>
        </Link>
      </div>

      <RotationDisplay rotation={rotation} />
    </div>
  );
}
