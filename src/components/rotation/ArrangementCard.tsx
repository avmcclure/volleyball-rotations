'use client';

import React, { useState, useEffect } from 'react';
import { Rotation, Arrangement, Player } from '@/lib/rotations/types';
import { CourtDiagram } from '../court/CourtDiagram';
import { PlayerToken } from '../court/PlayerToken';
import { Card, CardHeader, CardContent } from '../ui/Card';

interface ArrangementCardProps {
  rotation: Rotation;
  arrangement: Arrangement;
  onPlayerClick?: (playerId: string, arrangement: Arrangement) => void;
  fromArrangement?: Arrangement | null;
  isTransitioning?: boolean;
}

export function ArrangementCard({
  rotation,
  arrangement,
  onPlayerClick,
  fromArrangement,
  isTransitioning = false,
}: ArrangementCardProps) {
  const config = rotation.arrangements[arrangement];
  const [animatedPlayers, setAnimatedPlayers] = useState(config.players);

  // Handle animation when transitioning
  useEffect(() => {
    if (isTransitioning && fromArrangement) {
      const fromConfig = rotation.arrangements[fromArrangement];
      // Start with from positions
      setAnimatedPlayers(fromConfig.players);

      // Trigger transition to target positions after a brief delay
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimatedPlayers(config.players);
        });
      });
    } else {
      // Not transitioning, show current positions
      setAnimatedPlayers(config.players);
    }
  }, [arrangement, fromArrangement, isTransitioning, config.players, rotation.arrangements]);

  return (
    <Card>
      <CardHeader>
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">{arrangement}</h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">{config.description}</p>
      </CardHeader>

      <CardContent>
        <div className="max-h-[60vh]">
          <CourtDiagram>
            {animatedPlayers.map((player) => (
              <PlayerToken
                key={player.id}
                player={player}
                onClick={onPlayerClick ? () => onPlayerClick(player.id, arrangement) : undefined}
                animated={isTransitioning}
              />
            ))}
          </CourtDiagram>
        </div>

        {config.setupSteps && config.setupSteps.length > 0 && (
          <div className="mt-3 sm:mt-4">
            <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Setup Steps:</h4>
            <ol className="list-decimal list-inside space-y-0.5 sm:space-y-1 text-xs sm:text-sm text-gray-600">
              {config.setupSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
