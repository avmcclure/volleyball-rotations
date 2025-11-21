'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { ProgressIndicator } from './ProgressIndicator';
import { RotationCard } from './RotationCard';
import { getCompletedCount, resetProgress } from '@/lib/utils/progress';
import { PlayerId } from '@/lib/rotations/types';

interface Rotation {
  id: number;
  name: string;
  description: string;
  system: string;
  playerZones: Record<string, PlayerId>;
}

interface LearnPageClientProps {
  rotations: Rotation[];
}

export function LearnPageClient({ rotations }: LearnPageClientProps) {
  const [completedCount, setCompletedCount] = useState(0);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    // Update completion count on mount and when returning to page
    const updateCount = () => setCompletedCount(getCompletedCount());
    updateCount();

    // Update when window regains focus (user returns to tab)
    window.addEventListener('focus', updateCount);
    return () => window.removeEventListener('focus', updateCount);
  }, []);

  const handleReset = () => {
    resetProgress();
    setCompletedCount(0);
    setShowResetConfirm(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Learn Rotations</h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Explore all 6 rotations of the 5-1 offensive system. Click on any rotation to see detailed
          diagrams and explanations.
        </p>

        {/* Progress Indicator */}
        <ProgressIndicator completed={completedCount} total={6} className="mb-4" />

        {/* Reset Progress Button */}
        {completedCount > 0 && (
          <div className="flex justify-end">
            {showResetConfirm ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Are you sure?</span>
                <button
                  onClick={handleReset}
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Yes, Reset
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="text-sm text-gray-600 hover:text-gray-700"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="text-sm text-gray-600 hover:text-gray-700"
              >
                Reset Progress
              </button>
            )}
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <Link href="/learn/basics">
          <Card className="h-full">
            <CardContent className="py-4 sm:py-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Basics & Terminology
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Start here to learn fundamental concepts, zones, and arrangements.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/learn/glossary">
          <Card className="h-full">
            <CardContent className="py-4 sm:py-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Glossary</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Quick reference for all volleyball rotation terms and definitions.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Rotations Grid */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">All Rotations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {rotations.map((rotation) => {
            const setterZone = Object.entries(rotation.playerZones).find(
              ([_, playerId]) => playerId === PlayerId.S
            )?.[0];

            return (
              <RotationCard
                key={rotation.id}
                id={rotation.id}
                name={rotation.name}
                description={rotation.description}
                system={rotation.system}
                setterZone={setterZone || ''}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
