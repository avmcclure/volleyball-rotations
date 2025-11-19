import Link from 'next/link';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CourtDiagram } from '@/components/court/CourtDiagram';

export default function BasicsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Volleyball Rotation Basics</h1>
      <p className="text-lg text-gray-600 mb-8">
        Learn the fundamental concepts needed to understand volleyball rotations.
      </p>

      {/* Philosophy */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900">Philosophy</h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            The goal of running rotations is to maximize our ability to have an attack against the
            other team by having players who play dedicated roles (positions) set up in an
            arrangement that they can most effectively fill those roles.
          </p>
        </CardContent>
      </Card>

      {/* Court Zones */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900">Court Zones</h2>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <CourtDiagram className="max-w-md mx-auto" />
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Labeled with Roman Numerals:</strong> I, II, III, IV, V, VI
            </li>
            <li>
              <strong>Service Order:</strong> I is the first server, II is second, etc.
            </li>
            <li>
              <strong>Layout:</strong> Zones II, III, IV are front row. Zones I, VI, V are back row.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* The 4 Arrangements */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900">The 4 Arrangements</h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            A rotation consists of 4 different arrangements where players position themselves:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">1. Home</h3>
              <p className="text-gray-600">
                Where you are in the service order. Your starting position before the serve.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">2. Serve</h3>
              <p className="text-gray-600">
                Spot when your team is serving. Optimized for attacking after the serve.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">3. Serve Receive</h3>
              <p className="text-gray-600">
                Spot when the other team is serving. Focuses on passing the serve.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">4. Base (Defense)</h3>
              <p className="text-gray-600">Where you play defense. Standard defensive positions.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 5-1 System */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900">5-1 Rotation System</h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            The 5-1 system has <strong>5 hitters and 1 setter</strong> across 6 service rotations.
            The single setter sets from all rotations.
          </p>

          <h3 className="font-semibold text-gray-900 mt-4 mb-2">Three Main Goals:</h3>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>Have 3 primary passers</li>
            <li>Get setter to the setter spot</li>
            <li>Have our front row middle hitting middle</li>
          </ul>

          <h3 className="font-semibold text-gray-900 mt-4 mb-2">Rotation Numbering:</h3>
          <p className="text-gray-700">
            Rotations are numbered based on the setter's position. When the setter is in Zone I,
            it's Rotation 1. When the setter is in Zone VI, it's Rotation 2, and so on.
          </p>
        </CardContent>
      </Card>

      {/* Player Positions */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900">Player Positions</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                S
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Setter</h4>
                <p className="text-gray-600 text-sm">
                  Runs the offense by setting the ball to hitters
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                O
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Outside Hitter</h4>
                <p className="text-gray-600 text-sm">
                  Primary attacker from the left side and key passer
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                M
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Middle Blocker</h4>
                <p className="text-gray-600 text-sm">
                  Quick attacker and primary blocker in the middle
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                RS
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Right Side</h4>
                <p className="text-gray-600 text-sm">
                  Right side attacker and blocker, backup setter
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Concepts */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900">Key Concepts</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Opposites</h3>
              <p className="text-gray-600">
                Players who are directly across from each other on the court (3 rotations apart).
                You will always be opposite the other player in your position.
              </p>
              <ul className="text-sm text-gray-600 mt-2 list-disc list-inside">
                <li>I - IV (Right back and left front)</li>
                <li>II - V (Right front and left back)</li>
                <li>III - VI (Middle front and middle back)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Learn Rotations?</h2>
        <Link href="/learn/1">
          <Button size="lg" variant="primary">
            Start with Rotation 1
          </Button>
        </Link>
      </div>
    </div>
  );
}
