import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

interface RotationNavProps {
  currentRotation: number;
  basePath: '/learn' | '/practice';
}

export function RotationNav({ currentRotation, basePath }: RotationNavProps) {
  const prevRotation = currentRotation > 1 ? currentRotation - 1 : null;
  const nextRotation = currentRotation < 6 ? currentRotation + 1 : null;

  return (
    <div className="flex items-center justify-between py-4">
      <div>
        {prevRotation && (
          <Link href={`${basePath}/${prevRotation}`}>
            <Button variant="outline" size="md">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Rotation {prevRotation}
            </Button>
          </Link>
        )}
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">Rotation</p>
        <p className="text-2xl font-bold text-gray-900">{currentRotation} / 6</p>
      </div>

      <div>
        {nextRotation && (
          <Link href={`${basePath}/${nextRotation}`}>
            <Button variant="outline" size="md">
              Rotation {nextRotation}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
