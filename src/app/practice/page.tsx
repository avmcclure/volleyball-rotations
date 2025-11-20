import Link from 'next/link';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { getAllSystems } from '@/data/systems';

export default function PracticePage() {
  const rotations = getAllSystems();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Practice Rotations</h1>
        <p className="text-lg text-gray-600">
          Test your knowledge by placing players in the correct positions. Choose a rotation to
          practice.
        </p>
      </div>

      {/* Instructions */}
      <Card className="mb-8 border-2 border-blue-200">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-900">How to Practice</h2>
        </CardHeader>
        <CardContent>
          <ol className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span>Choose a rotation to practice below</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span>Drag players from the bank onto the court</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span>Click "Check Answer" to see how you did</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span>Use hints if you get stuck, or show the solution</span>
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Rotations Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose a Rotation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rotations.map((rotation) => (
            <Link key={rotation.id} href={`/practice/${rotation.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{rotation.name}</h3>
                    <span className="text-sm text-gray-500">{rotation.system}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{rotation.description}</p>
                  <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                    <span>Start Practice</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
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
