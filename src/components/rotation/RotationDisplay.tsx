'use client';

import React, { useState } from 'react';
import { Rotation, Arrangement, PlayerId } from '@/lib/rotations/types';
import { CourtGrid } from '../court/CourtGrid';
import { PlayerInfoModal } from './PlayerInfoModal';
import { CourtLegend, createLegendItems } from '../court/CourtLegend';
import { AnimatedTransition } from '../court/AnimatedTransition';

interface RotationDisplayProps {
  rotation: Rotation;
}

export function RotationDisplay({ rotation }: RotationDisplayProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<{
    playerId: string;
    arrangement: Arrangement;
  } | null>(null);

  const handlePlayerClick = (playerId: string, arrangement: Arrangement) => {
    setSelectedPlayer({ playerId, arrangement });
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
  };

  // Find the selected player data
  const playerData = selectedPlayer
    ? rotation.arrangements[selectedPlayer.arrangement].players.find(
        (p) => p.id === selectedPlayer.playerId
      )
    : null;

  // Create legend items from the first arrangement (all have same players)
  const legendItems = createLegendItems(rotation.arrangements[Arrangement.HOME].players);

  return (
    <div>
      <div className="mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{rotation.name}</h1>
      </div>

      <CourtGrid rotation={rotation} onPlayerClick={handlePlayerClick} />

      {selectedPlayer && (
        <PlayerInfoModal
          isOpen={!!selectedPlayer}
          onClose={handleCloseModal}
          player={playerData || null}
          arrangement={selectedPlayer.arrangement}
          rotation={rotation}
        />
      )}
    </div>
  );
}
