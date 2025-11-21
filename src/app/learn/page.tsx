import Link from 'next/link';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { getAllSystems } from '@/data/systems';
import { PlayerId } from '@/lib/rotations/types';

export default function LearnPage() {
  const rotations = getAllSystems();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Learn Rotations</h1>
        <p className="text-base sm:text-lg text-gray-600">
          Explore all 6 rotations of the 5-1 system. Click on any rotation to see detailed diagrams
          and explanations.
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <Link href="/learn/basics">
          <Card className="h-full">
            <CardContent className="py-4 sm:py-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Basics & Terminology</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Start here to learn fundamental concepts, zones, and arrangements.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/learn/glossary">
          <Card className="h-full">
            <CardContent className="py-4 sm:py-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Glossary</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Quick reference for all volleyball rotation terms and definitions.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Rotations Grid */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">All Rotations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {rotations.map((rotation) => (
            <Link key={rotation.id} href={`/learn/${rotation.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{rotation.name}</h3>
                    <span className="text-xs sm:text-sm text-gray-500 flex-shrink-0">{rotation.system}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{rotation.description}</p>
                  <div className="space-y-1 text-xs sm:text-sm text-gray-600">
                    <p>
                      <strong>Setter:</strong> Zone {
                        Object.entries(rotation.playerZones).find(
                          ([_, playerId]) => playerId === PlayerId.S
                        )?.[0]
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
