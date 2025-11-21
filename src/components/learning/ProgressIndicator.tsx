'use client';

import React from 'react';

interface ProgressIndicatorProps {
  completed: number;
  total: number;
  className?: string;
}

export function ProgressIndicator({ completed, total, className = '' }: ProgressIndicatorProps) {
  const percentage = Math.round((completed / total) * 100);
  const isComplete = completed === total;

  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-700">
          {completed} of {total} Rotations Complete
        </span>
        <span className="text-sm font-semibold text-gray-700">{percentage}%</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${
            isComplete
              ? 'bg-gradient-to-r from-green-500 to-emerald-600'
              : 'bg-gradient-to-r from-indigo-500 to-purple-600'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Completion Message */}
      {isComplete && (
        <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm font-semibold text-green-800 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            You've mastered all rotations!
          </p>
          <p className="text-xs text-green-700 mt-1">
            Ready to test yourself? Try the practice quizzes.
          </p>
        </div>
      )}
    </div>
  );
}
