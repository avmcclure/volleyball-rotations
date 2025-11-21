'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { RotationDisplay } from '@/components/rotation/RotationDisplay';
import { RotationNav } from '@/components/navigation/RotationNav';
import { Button } from '@/components/ui/Button';
import { markRotationViewed } from '@/lib/utils/progress';
import { Rotation } from '@/lib/rotations/types';

interface RotationDetailClientProps {
  rotation: Rotation;
  rotationId: number;
}

export function RotationDetailClient({ rotation, rotationId }: RotationDetailClientProps) {
  useEffect(() => {
    // Mark rotation as viewed when component mounts
    markRotationViewed(rotationId);
  }, [rotationId]);

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
