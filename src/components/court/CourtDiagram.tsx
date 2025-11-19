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
    <div className={`relative w-full aspect-[9/18] bg-amber-100 border-4 border-white shadow-lg ${className}`}>
      {/* Court outline */}
      <div className="absolute inset-2 border-2 border-white" />

      {/* Center line (net) */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-900 shadow-md transform -translate-y-1/2 z-10">
        {/* Net posts */}
        <div className="absolute -left-1 top-1/2 w-2 h-2 bg-gray-900 rounded-full transform -translate-y-1/2" />
        <div className="absolute -right-1 top-1/2 w-2 h-2 bg-gray-900 rounded-full transform -translate-y-1/2" />
      </div>

      {/* Attack lines (3m lines) */}
      <div className="absolute left-2 right-2 h-0.5 bg-white" style={{ top: '33.33%' }} />
      <div className="absolute left-2 right-2 h-0.5 bg-white" style={{ top: '66.67%' }} />

      {/* Side lines marking zones (subtle) */}
      <div className="absolute top-2 bottom-2 left-1/3 w-px bg-white/30" />
      <div className="absolute top-2 bottom-2 left-2/3 w-px bg-white/30" />

      {/* Zone labels */}
      {showZoneLabels && (
        <>
          {/* Front row */}
          <ZoneLabel zone={Zone.IV} position={{ x: 17, y: 20 }} />
          <ZoneLabel zone={Zone.III} position={{ x: 50, y: 20 }} />
          <ZoneLabel zone={Zone.II} position={{ x: 83, y: 20 }} />
          {/* Back row */}
          <ZoneLabel zone={Zone.V} position={{ x: 17, y: 80 }} />
          <ZoneLabel zone={Zone.VI} position={{ x: 50, y: 80 }} />
          <ZoneLabel zone={Zone.I} position={{ x: 83, y: 80 }} />
        </>
      )}

      {/* Children (player tokens) */}
      {children}
    </div>
  );
}
