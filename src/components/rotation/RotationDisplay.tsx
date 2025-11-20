'use client';

import React, { useState } from 'react';
import { Rotation, Arrangement, PlayerId } from '@/lib/rotations/types';
import { CourtGrid } from '../court/CourtGrid';
import { PlayerInfoModal } from './PlayerInfoModal';

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

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{rotation.name}</h1>
        <p className="text-gray-600">{rotation.description}</p>
        <div className="mt-2 flex gap-4 text-sm text-gray-600">
          <span>
            Setter Zone: <strong>{
              Object.entries(rotation.playerZones).find(
                ([_, playerId]) => playerId === PlayerId.S
              )?.[0]
            }</strong>
          </span>
        </div>
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
