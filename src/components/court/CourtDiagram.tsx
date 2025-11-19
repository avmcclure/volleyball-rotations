import React from 'react';
import { Zone } from '@/lib/rotations/types';
import { ZoneLabel } from './ZoneLabel';

interface CourtDiagramProps {
  children?: React.ReactNode;
  showZoneLabels?: boolean;
  className?: string;
}

export function CourtDiagram({ children, showZoneLabels = true, className = '' }: CourtDiagramProps) {
  return (
    <div className={`relative w-full aspect-[2/3] bg-gradient-to-b from-orange-50 to-orange-100 border-4 border-gray-800 rounded-lg ${className}`}>
      {/* Net line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800 transform -translate-y-1/2" />

      {/* Vertical lines */}
      <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-gray-400" />
      <div className="absolute top-0 bottom-0 left-2/3 w-0.5 bg-gray-400" />

      {/* Zone labels */}
      {showZoneLabels && (
        <>
          <ZoneLabel zone={Zone.IV} position={{ x: 17, y: 25 }} />
          <ZoneLabel zone={Zone.III} position={{ x: 50, y: 25 }} />
          <ZoneLabel zone={Zone.II} position={{ x: 83, y: 25 }} />
          <ZoneLabel zone={Zone.V} position={{ x: 17, y: 75 }} />
          <ZoneLabel zone={Zone.VI} position={{ x: 50, y: 75 }} />
          <ZoneLabel zone={Zone.I} position={{ x: 83, y: 75 }} />
        </>
      )}

      {/* Children (player tokens) */}
      {children}
    </div>
  );
}
