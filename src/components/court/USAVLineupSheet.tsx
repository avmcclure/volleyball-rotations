import React from 'react';

interface USAVLineupSheetProps {
  className?: string;
}

export function USAVLineupSheet({ className = '' }: USAVLineupSheetProps) {
  return (
    <div className={`bg-white border-[2px] border-black rounded-none w-60 ${className}`}>
      {/* Header */}
      <div className="border-b border-black px-2 py-1">
        <div className="text-center leading-tight">
          <div className="text-[9px] font-bold">SET 1</div>
          <div className="text-[10px] font-bold">LINE-UP SHEET</div>
        </div>
      </div>

      {/* TEAM row with write-in line */}
      <div className="border-b border-black px-2 py-1 flex items-end gap-2">
        <div className="w-12 text-[9px] font-bold leading-none">TEAM</div>
        <div className="flex-1 border-b border-black h-[14px]" />
      </div>

      {/* Lineup Grid Wrapper - gives slightly heavier outer frame */}
      <div className="border-b border-black px-2 py-2">
        <div className="border border-black grid grid-cols-3">
          {/* Front Row */}
          {/* Zone IV - Front Left */}
          <div className="border-r border-b border-black aspect-square px-1 pt-1 pb-0.5">
            <div className="h-full flex flex-col items-center">
              <span className="text-[12px] font-serif leading-none text-black">IV</span>
              {/* empty space below for jersey number input */}
            </div>
          </div>

          {/* Zone III - Front Middle */}
          <div className="border-r border-b border-black aspect-square px-1 pt-1 pb-0.5">
            <div className="h-full flex flex-col items-center">
              <span className="text-[12px] font-serif leading-none text-black">III</span>
            </div>
          </div>

          {/* Zone II - Front Right */}
          <div className="border-b border-black aspect-square px-1 pt-1 pb-0.5">
            <div className="h-full flex flex-col items-center">
              <span className="text-[12px] font-serif leading-none text-black">II</span>
            </div>
          </div>

          {/* Back Row */}
          {/* Zone V - Back Left */}
          <div className="border-r border-black aspect-square px-1 pt-1 pb-0.5">
            <div className="h-full flex flex-col items-center">
              <span className="text-[12px] font-serif leading-none text-black">V</span>
            </div>
          </div>

          {/* Zone VI - Back Middle */}
          <div className="border-r border-black aspect-square px-1 pt-1 pb-0.5">
            <div className="h-full flex flex-col items-center">
              <span className="text-[12px] font-serif leading-none text-black">VI</span>
            </div>
          </div>

          {/* Zone I - Back Right (Server) with thick right border */}
          <div className="aspect-square px-1 pt-1 pb-0.5 border-l border-black" style={{ borderRightWidth: 4 }}>
            <div className="h-full flex flex-col items-center">
              <span className="text-[12px] font-serif leading-none text-black">I</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-2 py-1.5 border-t border-black flex items-center justify-between">
        {/* Logo placeholder */}
        <div className="w-8 h-8 flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="18" fill="none" stroke="black" strokeWidth="2" />
            <text x="20" y="24" textAnchor="middle" fontSize="8" fontWeight="bold" fill="black">
              USAV
            </text>
          </svg>
        </div>

        {/* Service and Coach Signature */}
        <div className="flex-1 flex flex-col items-end pl-2">
          <div className="text-[8px] font-bold leading-none">SERVICE</div>
          <div className="text-[7px] leading-tight mt-[1px]">COACH SIGNATURE</div>
          <div className="border-b border-black w-28 mt-1 ml-auto" />
        </div>
      </div>
    </div>
  );
}
