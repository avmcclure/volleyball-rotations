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

  const [showTransitions, setShowTransitions] = useState(false);

  return (
    <div>
      <div className="mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{rotation.name}</h1>
        <p className="text-sm sm:text-base text-gray-600">{rotation.description}</p>
        <div className="mt-2 flex gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
          <span>
            Setter Zone: <strong>{
              Object.entries(rotation.playerZones).find(
                ([_, playerId]) => playerId === PlayerId.S
              )?.[0]
            }</strong>
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="mb-4 sm:mb-6">
        <CourtLegend
          items={legendItems}
          onItemClick={(id) => {
            // Find the player in HOME arrangement and open modal
            handlePlayerClick(id, Arrangement.HOME);
          }}
        />
      </div>

      <CourtGrid rotation={rotation} onPlayerClick={handlePlayerClick} />

      {/* Animations Toggle */}
      <div className="mt-8 mb-4">
        <button
          onClick={() => setShowTransitions(!showTransitions)}
          className="w-full px-4 py-3 text-left font-semibold text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between"
        >
          <span>View Animated Transitions</span>
          <svg
            className={`w-5 h-5 transition-transform ${showTransitions ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Animated Transitions */}
      {showTransitions && (
        <div className="space-y-8 mb-8">
          <AnimatedTransition
            fromArrangement={Arrangement.HOME}
            toArrangement={Arrangement.SERVE}
            fromPlayers={rotation.arrangements[Arrangement.HOME].players}
            toPlayers={rotation.arrangements[Arrangement.SERVE].players}
            title={`${Arrangement.HOME} → ${Arrangement.SERVE}`}
            description="Watch how players move from service order positions to serving arrangement."
          />

          <AnimatedTransition
            fromArrangement={Arrangement.HOME}
            toArrangement={Arrangement.RECEIVE}
            fromPlayers={rotation.arrangements[Arrangement.HOME].players}
            toPlayers={rotation.arrangements[Arrangement.RECEIVE].players}
            title={`${Arrangement.HOME} → ${Arrangement.RECEIVE}`}
            description="See how the team forms the serve receive formation with proper passing positioning."
          />
        </div>
      )}

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
