import React from 'react';

interface CourtDiagramProps {
  children?: React.ReactNode;
  className?: string;
}

export function CourtDiagram({ children, className = '' }: CourtDiagramProps) {
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

      {/* Children (player tokens) */}
      {children}
    </div>
  );
}
