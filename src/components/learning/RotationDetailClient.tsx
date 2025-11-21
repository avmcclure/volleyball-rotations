'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { RotationDisplay } from '@/components/rotation/RotationDisplay';
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

  const prevRotation = rotationId > 1 ? rotationId - 1 : null;
  const nextRotation = rotationId < 6 ? rotationId + 1 : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Header with navigation */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between mb-4">
          <Link href="/learn">
            <Button variant="outline" size="sm">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Rotations
            </Button>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            {prevRotation && (
              <Link href={`/learn/${prevRotation}`}>
                <Button variant="outline" size="sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Button>
              </Link>
            )}

            <span className="text-sm font-medium text-gray-600">
              {rotationId} / 6
            </span>

            {nextRotation && (
              <Link href={`/learn/${nextRotation}`}>
                <Button variant="outline" size="sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            )}

            <Link href={`/practice/${rotationId}`}>
              <Button variant="primary" size="sm">
                Practice
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <RotationDisplay rotation={rotation} />
    </div>
  );
}
