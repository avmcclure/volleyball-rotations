import React from 'react';
import { CourtDiagram } from '@/components/court/CourtDiagram';
import { Color } from '@/lib/rotations/types';

interface OverlapExampleProps {
  title: string;
  isLegal: boolean;
  players: Array<{
    id: string;
    zone: string;
    x: number;
    y: number;
    color: Color;
  }>;
  explanation: string;
  relevantPlayerIds?: string[];
}

export function OverlapExample({ title, isLegal, players, explanation, relevantPlayerIds }: OverlapExampleProps) {
  return (
    <div
      className={`border-2 rounded-lg p-4 ${
        isLegal
          ? 'bg-green-50 border-green-300'
          : 'bg-red-50 border-red-300'
      }`}
    >
      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <span className={isLegal ? 'text-green-600' : 'text-red-600'}>
          {isLegal ? '✓' : '✗'}
        </span>
        {title}
      </h4>

      <div className="max-w-xs mx-auto mb-3">
        <CourtDiagram>
          {players.map((player) => {
            const isRelevant = !relevantPlayerIds || relevantPlayerIds.includes(player.id);
            return (
              <div
                key={player.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-opacity ${
                  isRelevant ? 'opacity-100' : 'opacity-30'
                }`}
                style={{
                  left: `${player.x}%`,
                  top: `${player.y}%`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex flex-col items-center justify-center text-white font-bold text-xs border-2 border-gray-700 shadow-md"
                  style={{ backgroundColor: player.color }}
                >
                  <div className="text-[10px] leading-none">{player.id}</div>
                  <div className="text-[8px] leading-none mt-0.5">({player.zone})</div>
                </div>
              </div>
            );
          })}
        </CourtDiagram>
      </div>

      <p className="text-gray-700 text-sm">{explanation}</p>
    </div>
  );
}
