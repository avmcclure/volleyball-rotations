import React from 'react';
import { Zone } from '@/lib/rotations/types';

interface ZoneLabelProps {
  zone: Zone;
  position: { x: number; y: number };
}

export function ZoneLabel({ zone, position }: ZoneLabelProps) {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm pointer-events-none select-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      {zone}
    </div>
  );
}
