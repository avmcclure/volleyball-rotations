'use client';

import React from 'react';
import { Modal } from '../ui/Modal';
import { Player, Arrangement, Rotation } from '@/lib/rotations/types';
import { getPositionInfo } from '@/data/positions';

interface PlayerInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  player: Player | null;
  arrangement: Arrangement;
  rotation: Rotation;
}

export function PlayerInfoModal({ isOpen, onClose, player, arrangement, rotation }: PlayerInfoModalProps) {
  if (!player) return null;

  const positionInfo = getPositionInfo(player.position);

  if (!positionInfo) return null;

  const responsibilities = positionInfo.responsibilities[arrangement];

  // Get the zone for this player from the rotation's playerZones mapping
  const playerZone = Object.entries(rotation.playerZones).find(
    ([_, id]) => id === player.id
  )?.[0];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={player.position}>
      <div className="space-y-4">
        {/* Player color indicator */}
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-gray-700 shadow-md"
            style={{ backgroundColor: player.color }}
          >
            {positionInfo.abbreviation}
          </div>
          <div>
            <p className="text-sm text-gray-600">Zone {playerZone || 'Unknown'}</p>
            <p className="text-sm text-gray-600">{arrangement} Arrangement</p>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Position Description</h3>
          <p className="text-gray-700">{positionInfo.description}</p>
        </div>

        {/* Responsibilities for this arrangement */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Responsibilities in {arrangement}</h3>
          <ul className="space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span className="text-gray-700">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}
