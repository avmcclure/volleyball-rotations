'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { isRotationCompleted, toggleRotationCompleted } from '@/lib/utils/progress';

interface RotationCardProps {
  id: number;
  name: string;
  description: string;
  system: string;
  setterZone: string;
}

export function RotationCard({ id, name, description, system, setterZone }: RotationCardProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsCompleted(isRotationCompleted(id));
  }, [id]);

  const handleToggleComplete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = toggleRotationCompleted(id);
    setIsCompleted(newState);
  };

  return (
    <Link href={`/learn/${id}`}>
      <Card className={`h-full hover:shadow-lg transition-all ${isCompleted ? 'ring-2 ring-green-500' : ''}`}>
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">{name}</h3>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs sm:text-sm text-gray-500">{system}</span>
              {isClient && (
                <button
                  onClick={handleToggleComplete}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isCompleted
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-300 hover:border-green-500'
                  }`}
                  title={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
                  aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
                >
                  {isCompleted && (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{description}</p>
          <div className="space-y-1 text-xs sm:text-sm text-gray-600">
            <p>
              <strong>Setter:</strong> Zone {setterZone}
            </p>
          </div>
          {isClient && isCompleted && (
            <div className="mt-3 flex items-center gap-1.5 text-xs text-green-700 font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Completed
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
