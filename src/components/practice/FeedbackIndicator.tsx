import React from 'react';

interface FeedbackIndicatorProps {
  correctCount: number;
  totalCount: number;
  isComplete: boolean;
}

export function FeedbackIndicator({ correctCount, totalCount, isComplete }: FeedbackIndicatorProps) {
  const allCorrect = correctCount === totalCount && totalCount > 0;

  if (!isComplete) return null;

  return (
    <div
      className={`rounded-lg p-4 ${
        allCorrect
          ? 'bg-green-50 border-2 border-green-500'
          : 'bg-yellow-50 border-2 border-yellow-500'
      }`}
    >
      <div className="flex items-center gap-3">
        {allCorrect ? (
          <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        ) : (
          <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">!</span>
          </div>
        )}

        <div className="flex-1">
          {allCorrect ? (
            <div>
              <h3 className="font-semibold text-green-900">Perfect!</h3>
              <p className="text-sm text-green-800">
                You got all {totalCount} positions correct!
              </p>
            </div>
          ) : (
            <div>
              <h3 className="font-semibold text-yellow-900">Almost there!</h3>
              <p className="text-sm text-yellow-800">
                You got {correctCount} out of {totalCount} correct. Try adjusting the highlighted positions.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
