'use client';

import React from 'react';
import { Player } from '@/lib/rotations/types';

interface PlayerTokenProps {
  player: Player;
  onClick?: () => void;
  isCorrect?: boolean;
  isIncorrect?: boolean;
  isHint?: boolean;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragEnd?: (e: React.DragEvent) => void;
  animated?: boolean;
}

export function PlayerToken({
  player,
  onClick,
  isCorrect,
  isIncorrect,
  isHint,
  draggable = false,
  onDragStart,
  onDragEnd,
  animated = false,
}: PlayerTokenProps) {

  let borderColor = 'border-gray-700';
  let shadowClass = 'shadow-md';

  if (isCorrect) {
    borderColor = 'border-green-500 border-4';
    shadowClass = 'shadow-lg shadow-green-200';
  } else if (isIncorrect) {
    borderColor = 'border-red-500 border-4 animate-shake';
    shadowClass = 'shadow-lg shadow-red-200';
  } else if (isHint) {
    borderColor = 'border-yellow-400 border-4';
    shadowClass = 'shadow-lg shadow-yellow-200';
  }

  return (
    <div
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${onClick || draggable ? 'cursor-pointer touch-manipulation' : ''} ${
        animated ? 'transition-all duration-[1500ms] ease-in-out' : ''
      }`}
      style={{
        left: `${player.coordinates.x}%`,
        top: `${player.coordinates.y}%`,
      }}
      onClick={onClick}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <div
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm border-2 ${borderColor} ${shadowClass} transition-all hover:scale-110 active:scale-95`}
        style={{ backgroundColor: player.color }}
      >
        {player.id}
      </div>

      {/* Checkmark or X indicator */}
      {isCorrect && (
        <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}

      {isIncorrect && (
        <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center">
          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
