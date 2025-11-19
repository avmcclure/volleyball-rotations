'use client';

import React from 'react';
import { Rotation, Arrangement } from '@/lib/rotations/types';
import { CourtDiagram } from '../court/CourtDiagram';
import { PlayerToken } from '../court/PlayerToken';
import { Card, CardHeader, CardContent } from '../ui/Card';

interface ArrangementCardProps {
  rotation: Rotation;
  arrangement: Arrangement;
  onPlayerClick?: (playerId: string, arrangement: Arrangement) => void;
}

export function ArrangementCard({ rotation, arrangement, onPlayerClick }: ArrangementCardProps) {
  const config = rotation.arrangements[arrangement];

  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold text-gray-900">{arrangement}</h3>
        <p className="text-sm text-gray-600 mt-1">{config.description}</p>
      </CardHeader>

      <CardContent>
        <CourtDiagram>
          {config.players.map((player) => (
            <PlayerToken
              key={player.id}
              player={player}
              onClick={onPlayerClick ? () => onPlayerClick(player.id, arrangement) : undefined}
            />
          ))}
        </CourtDiagram>

        {config.setupSteps && config.setupSteps.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Setup Steps:</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
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
