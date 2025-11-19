'use client';

import React from 'react';
import { Player } from '@/lib/rotations/types';

interface PlayerBankProps {
  availablePlayers: Player[];
  onDragStart: (playerId: string) => void;
}

export function PlayerBank({ availablePlayers, onDragStart }: PlayerBankProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Players</h3>
      <p className="text-sm text-gray-600 mb-4">Drag players onto the court to position them</p>

      <div className="flex flex-wrap gap-3">
        {availablePlayers.map((player) => (
          <div
            key={player.id}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('playerId', player.id);
              e.dataTransfer.effectAllowed = 'move';
              onDragStart(player.id);
            }}
            className="cursor-move hover:scale-110 transition-transform"
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-gray-700 shadow-md"
              style={{ backgroundColor: player.color }}
            >
              {player.position.charAt(0)}
            </div>
            <p className="text-xs text-center mt-1 text-gray-600">
              {player.position.split(' ')[0]}
            </p>
          </div>
        ))}
      </div>

      {availablePlayers.length === 0 && (
        <p className="text-sm text-gray-500 italic">All players have been placed</p>
      )}
    </div>
  );
}
