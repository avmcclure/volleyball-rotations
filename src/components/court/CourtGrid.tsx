import React from 'react';
import { Arrangement } from '@/lib/rotations/types';
import { ArrangementCard } from '../rotation/ArrangementCard';
import { Rotation } from '@/lib/rotations/types';

interface CourtGridProps {
  rotation: Rotation;
  onPlayerClick?: (playerId: string, arrangement: Arrangement) => void;
}

export function CourtGrid({ rotation, onPlayerClick }: CourtGridProps) {
  const arrangements = [Arrangement.HOME, Arrangement.BASE, Arrangement.SERVE, Arrangement.RECEIVE];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
      {arrangements.map((arrangement) => (
        <ArrangementCard
          key={arrangement}
          rotation={rotation}
          arrangement={arrangement}
          onPlayerClick={onPlayerClick}
        />
      ))}
    </div>
  );
}
