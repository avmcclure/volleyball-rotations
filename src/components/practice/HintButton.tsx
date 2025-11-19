import React from 'react';
import { Button } from '../ui/Button';

interface HintButtonProps {
  hintsUsed: number;
  totalHints: number;
  onHintRequest: () => void;
  disabled?: boolean;
}

export function HintButton({ hintsUsed, totalHints, onHintRequest, disabled }: HintButtonProps) {
  const hintsRemaining = totalHints - hintsUsed;

  return (
    <Button
      variant="outline"
      onClick={onHintRequest}
      disabled={disabled || hintsRemaining === 0}
      className="relative"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
      Hint ({hintsRemaining} left)
    </Button>
  );
}
