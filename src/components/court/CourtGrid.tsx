'use client';

import React, { useState } from 'react';
import { Arrangement } from '@/lib/rotations/types';
import { ArrangementCard } from '../rotation/ArrangementCard';
import { Rotation } from '@/lib/rotations/types';

interface CourtGridProps {
  rotation: Rotation;
  onPlayerClick?: (playerId: string, arrangement: Arrangement) => void;
}

type CycleType = 'service' | 'receive';

interface CycleConfig {
  name: string;
  description: string;
  arrangements: Arrangement[];
}

const CYCLES: Record<CycleType, CycleConfig> = {
  service: {
    name: 'Service Cycle',
    description: 'When your team is serving',
    arrangements: [
      Arrangement.HOME,
      Arrangement.SERVE,
      Arrangement.BASE,
      Arrangement.FREEBALL,
      Arrangement.BASE,
    ],
  },
  receive: {
    name: 'Receive Cycle',
    description: 'When your team is receiving serve',
    arrangements: [
      Arrangement.HOME,
      Arrangement.RECEIVE,
      Arrangement.BASE,
      Arrangement.FREEBALL
    ],
  },
};

export function CourtGrid({ rotation, onPlayerClick }: CourtGridProps) {
  const [currentCycle, setCurrentCycle] = useState<CycleType>('service');
  const [currentStep, setCurrentStep] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [transitionState, setTransitionState] = useState<{
    from: number;
    to: number;
  } | null>(null);

  const cycle = CYCLES[currentCycle];
  const arrangements = cycle.arrangements;

  const handlePrevious = () => {
    if (currentStep > 0) {
      const fromStep = currentStep;
      const toStep = currentStep - 1;
      setTransitionState({ from: fromStep, to: toStep });
      setCurrentStep(toStep);

      // Clear transition after animation completes
      setTimeout(() => {
        setTransitionState(null);
      }, 1500); // Animation duration
    }
  };

  const handleNext = () => {
    if (currentStep < arrangements.length - 1) {
      const fromStep = currentStep;
      const toStep = currentStep + 1;
      setTransitionState({ from: fromStep, to: toStep });
      setCurrentStep(toStep);

      // Clear transition after animation completes
      setTimeout(() => {
        setTransitionState(null);
      }, 1500); // Animation duration
    }
  };

  const handleCycleChange = (newCycle: CycleType) => {
    setCurrentCycle(newCycle);
    setCurrentStep(0);
    setTransitionState(null);
  };

  if (showAll) {
    return (
      <div>
        <div className="mb-4 flex justify-end">
          <button
            onClick={() => setShowAll(false)}
            className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            Show One at a Time
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {arrangements.map((arrangement, index) => (
            <ArrangementCard
              key={`${arrangement}-${index}`}
              rotation={rotation}
              arrangement={arrangement}
              onPlayerClick={onPlayerClick}
            />
          ))}
        </div>
      </div>
    );
  }

  const currentArrangement = arrangements[currentStep];
  const isTransitioning = transitionState !== null;

  // Get from arrangement for transition
  const fromArrangement = isTransitioning && transitionState
    ? arrangements[transitionState.from]
    : null;

  return (
    <div>
      {/* Cycle Selector Toggle */}
      <div className="mb-6 flex flex-col items-center gap-3">
        <div className="inline-flex rounded-lg border border-gray-300 bg-white p-1">
          <button
            onClick={() => handleCycleChange('service')}
            disabled={isTransitioning}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              currentCycle === 'service'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-700 hover:bg-gray-50'
            } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Service Cycle
          </button>
          <button
            onClick={() => handleCycleChange('receive')}
            disabled={isTransitioning}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              currentCycle === 'receive'
                ? 'bg-green-600 text-white shadow-sm'
                : 'text-gray-700 hover:bg-gray-50'
            } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Receive Cycle
          </button>
        </div>

        <p className="text-xs text-gray-600 text-center">
          {currentCycle === 'service' ? CYCLES.service.description : CYCLES.receive.description}
        </p>
      </div>

      {/* Controls */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0 || isTransitioning}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>

        <div className="flex flex-col items-center gap-1">
          <span className="text-sm font-medium text-gray-900">
            Step {currentStep + 1} of {arrangements.length}
          </span>
          <div className="flex gap-1.5">
            {arrangements.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setCurrentStep(index);
                    setTransitionState(null);
                  }
                }}
                disabled={isTransitioning}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                } ${isTransitioning ? 'cursor-not-allowed' : ''}`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={currentStep === arrangements.length - 1 || isTransitioning}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>

      {/* Current arrangement card with animation */}
      <ArrangementCard
        rotation={rotation}
        arrangement={currentArrangement}
        onPlayerClick={onPlayerClick}
        fromArrangement={fromArrangement}
        isTransitioning={isTransitioning}
      />

      {/* Show All toggle */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setShowAll(true)}
          disabled={isTransitioning}
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 underline transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Show all arrangements at once
        </button>
      </div>
    </div>
  );
}
