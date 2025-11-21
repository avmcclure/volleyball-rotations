'use client';

import React, { useState, useCallback } from 'react';
import {
  Rotation,
  Arrangement,
  Player,
  CourtPosition,
  PlayerId,
  ValidationResult,
} from '@/lib/rotations/types';
import { CourtDiagram } from '../court/CourtDiagram';
import { PlayerToken } from '../court/PlayerToken';
import { validatePlayerPlacement } from '@/lib/rotations/validator';
import { getZoneFromCoordinates } from '@/lib/utils/coordinates';

interface DragDropCourtProps {
  rotation: Rotation;
  arrangement: Arrangement;
  placedPlayers: Map<PlayerId, CourtPosition>;
  onPlayerPlaced: (playerId: PlayerId, position: CourtPosition) => void;
  validationResults?: ValidationResult[];
  hints?: Set<PlayerId>; // Player IDs that are hints
}

export function DragDropCourt({
  rotation,
  arrangement,
  placedPlayers,
  onPlayerPlaced,
  validationResults,
  hints,
}: DragDropCourtProps) {
  const [draggedPlayer, setDraggedPlayer] = useState<PlayerId | null>(null);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      // Get player ID from dataTransfer (from PlayerBank) or state (from court)
      const playerIdStr = e.dataTransfer.getData('playerId') || draggedPlayer;

      if (!playerIdStr) return;

      const playerId = playerIdStr as PlayerId;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      const zone = getZoneFromCoordinates(x, y);

      onPlayerPlaced(playerId, { x, y, zone });
      setDraggedPlayer(null);
    },
    [draggedPlayer, onPlayerPlaced]
  );

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const getValidationForPlayer = (playerId: string): ValidationResult | undefined => {
    return validationResults?.find((v) => v.playerId === playerId);
  };

  return (
    <div className="relative max-h-[60vh]" onDrop={handleDrop} onDragOver={handleDragOver}>
      <CourtDiagram>
        {Array.from(placedPlayers.entries()).map(([playerId, position]) => {
          const correctPlayer = rotation.arrangements[arrangement].players.find(
            (p) => p.id === playerId
          );

          if (!correctPlayer) return null;

          const validation = getValidationForPlayer(playerId);
          const isHint = hints?.has(playerId);

          // Create a player object with the current position
          const playerWithPosition: Player = {
            ...correctPlayer,
            coordinates: position,
          };

          return (
            <PlayerToken
              key={playerId}
              player={playerWithPosition}
              isCorrect={validation?.isCorrect}
              isIncorrect={validation && !validation.isCorrect}
              isHint={isHint}
              draggable={true}
              onDragStart={(e) => {
                e.dataTransfer.setData('playerId', playerId);
                e.dataTransfer.effectAllowed = 'move';
                setDraggedPlayer(playerId);
              }}
            />
          );
        })}
      </CourtDiagram>

      {draggedPlayer && (
        <div className="absolute inset-0 border-4 border-dashed border-blue-400 rounded-lg pointer-events-none bg-blue-50 bg-opacity-20" />
      )}
    </div>
  );
}
