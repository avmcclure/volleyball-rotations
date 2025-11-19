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
    <div className={`relative w-full aspect-square bg-amber-100 border-4 border-white shadow-lg ${className}`}>
      {/* Court outline - only showing one half */}
      <div className="absolute inset-2 border-2 border-white border-t-0" />

      {/* Net at the top (with some overhang for posts) */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gray-900 shadow-md z-10">
        {/* Net posts */}
        <div className="absolute -left-2 top-1/2 w-3 h-3 bg-gray-900 rounded-full transform -translate-y-1/2" />
        <div className="absolute -right-2 top-1/2 w-3 h-3 bg-gray-900 rounded-full transform -translate-y-1/2" />
        {/* Net mesh pattern */}
        <div className="absolute inset-x-0 top-0 h-full opacity-30 bg-gradient-to-b from-gray-800 to-gray-700" />
      </div>

      {/* Attack line (3m line from net) */}
      <div className="absolute left-2 right-2 h-0.5 bg-white" style={{ top: '35%' }} />

      {/* Side lines marking zones (subtle) */}
      <div className="absolute top-2 bottom-2 left-1/3 w-px bg-white/30" />
      <div className="absolute top-2 bottom-2 left-2/3 w-px bg-white/30" />

      {/* Zone labels */}
      {showZoneLabels && (
        <>
          {/* Front row (near net at top) */}
          <ZoneLabel zone={Zone.IV} position={{ x: 17, y: 18 }} />
          <ZoneLabel zone={Zone.III} position={{ x: 50, y: 18 }} />
          <ZoneLabel zone={Zone.II} position={{ x: 83, y: 18 }} />
          {/* Back row (far from net at bottom) */}
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
