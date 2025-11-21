'use client';

import React, { useState } from 'react';
import { Color, Position, PlayerId } from '@/lib/rotations/types';

interface LegendItem {
  id: PlayerId;
  label: string;
  position: Position;
  color: Color;
}

interface CourtLegendProps {
  items: LegendItem[];
  onItemClick?: (id: PlayerId) => void;
  onItemHover?: (id: PlayerId | null) => void;
  className?: string;
}

export function CourtLegend({ items, onItemClick, onItemHover, className = '' }: CourtLegendProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700">Player Key</h3>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="lg:hidden text-gray-500 hover:text-gray-700"
          aria-label={isCollapsed ? 'Expand legend' : 'Collapse legend'}
        >
          <svg
            className={`w-4 h-4 transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Legend Items */}
      {!isCollapsed && (
        <div className="p-3">
          <div className="space-y-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => onItemClick?.(item.id)}
                onMouseEnter={() => onItemHover?.(item.id)}
                onMouseLeave={() => onItemHover?.(null)}
                className="flex items-center gap-2 w-full text-left hover:bg-gray-50 rounded px-2 py-1 transition-colors"
              >
                {/* Color Circle */}
                <div
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white font-bold text-xs border-2 border-gray-700 flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                >
                  {item.id}
                </div>

                {/* Label */}
                <span className="text-sm text-gray-700">
                  <span className="font-medium">{item.id}</span> - {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Helper function to create legend items from a rotation
 */
export function createLegendItems(players: Array<{ id: PlayerId; position: Position; color: Color }>): LegendItem[] {
  // Create a unique set of players (remove duplicates)
  const uniquePlayersMap = new Map<PlayerId, LegendItem>();

  players.forEach((player) => {
    if (!uniquePlayersMap.has(player.id)) {
      uniquePlayersMap.set(player.id, {
        id: player.id,
        label: player.position,
        position: player.position,
        color: player.color,
      });
    }
  });

  // Sort by player ID for consistent ordering
  const sortOrder: PlayerId[] = [PlayerId.S, PlayerId.O1, PlayerId.O2, PlayerId.M1, PlayerId.M2, PlayerId.RS];

  return Array.from(uniquePlayersMap.values()).sort(
    (a, b) => sortOrder.indexOf(a.id) - sortOrder.indexOf(b.id)
  );
}
