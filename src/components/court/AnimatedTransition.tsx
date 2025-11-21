'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Arrangement, Player } from '@/lib/rotations/types';
import { CourtDiagram } from './CourtDiagram';

interface AnimatedTransitionProps {
  fromArrangement: Arrangement;
  toArrangement: Arrangement;
  fromPlayers: Player[];
  toPlayers: Player[];
  title?: string;
  description?: string;
}

interface AnimatedPlayer extends Player {
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  currentX: number;
  currentY: number;
}

export function AnimatedTransition({
  fromArrangement,
  toArrangement,
  fromPlayers,
  toPlayers,
  title,
  description,
}: AnimatedTransitionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const ANIMATION_DURATION = 2000; // 2 seconds
  const PAUSE_DURATION = 1500; // 1.5 seconds pause at each end

  // Create animated players
  const animatedPlayers: AnimatedPlayer[] = fromPlayers.map((fromPlayer) => {
    const toPlayer = toPlayers.find((p) => p.id === fromPlayer.id)!;
    return {
      ...fromPlayer,
      startX: fromPlayer.coordinates.x,
      startY: fromPlayer.coordinates.y,
      targetX: toPlayer.coordinates.x,
      targetY: toPlayer.coordinates.y,
      currentX: fromPlayer.coordinates.x,
      currentY: fromPlayer.coordinates.y,
    };
  });

  // Easing function for smooth animation
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  // Calculate current positions based on progress
  const getCurrentPlayers = (): Player[] => {
    const t = easeInOutCubic(progress);
    return animatedPlayers.map((player) => ({
      ...player,
      coordinates: {
        x: player.startX + (player.targetX - player.startX) * t,
        y: player.startY + (player.targetY - player.startY) * t,
      },
    }));
  };

  // Animation loop
  const animate = (timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const totalCycleDuration = PAUSE_DURATION + ANIMATION_DURATION + PAUSE_DURATION;
    const cycleTime = elapsed % totalCycleDuration;

    let newProgress: number;
    if (cycleTime < PAUSE_DURATION) {
      // Pause at start
      newProgress = 0;
    } else if (cycleTime < PAUSE_DURATION + ANIMATION_DURATION) {
      // Animating
      const animationTime = cycleTime - PAUSE_DURATION;
      newProgress = Math.min(animationTime / ANIMATION_DURATION, 1);
    } else {
      // Pause at end
      newProgress = 1;
    }

    setProgress(newProgress);

    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  // Start/stop animation
  useEffect(() => {
    if (isPlaying) {
      startTimeRef.current = null;
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    startTimeRef.current = null;
  };

  const currentPlayers = getCurrentPlayers();
  const currentArrangement = progress === 0 ? fromArrangement : progress === 1 ? toArrangement : '';

  return (
    <div className="space-y-4">
      {/* Header */}
      {(title || description) && (
        <div className="text-center">
          {title && <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>}
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </div>
      )}

      {/* Court with animated players */}
      <div className="max-w-md mx-auto">
        <div className="mb-2 text-center">
          <span className="text-sm font-semibold text-gray-700">
            {currentArrangement || `Transitioning...`}
          </span>
        </div>
        <CourtDiagram>
          {currentPlayers.map((player) => (
            <div
              key={player.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${player.coordinates.x}%`,
                top: `${player.coordinates.y}%`,
              }}
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm border-2 border-gray-700 shadow-md transition-all"
                style={{ backgroundColor: player.color }}
              >
                {player.id}
              </div>
            </div>
          ))}
        </CourtDiagram>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handlePlayPause}
          className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          {isPlaying ? (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Pause
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              Play
            </>
          )}
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Progress bar */}
      <div className="max-w-md mx-auto">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-100"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
