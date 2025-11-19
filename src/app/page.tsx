import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Master Volleyball Rotations</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Learn the 5-1 rotation system with interactive walkthroughs and practice quizzes. Perfect
          for beginners learning court positioning and movement.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/learn">
            <Button size="lg" variant="primary">
              Start Learning
            </Button>
          </Link>
          <Link href="/practice">
            <Button size="lg" variant="outline">
              Practice Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardContent className="text-center py-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Guided Walkthroughs</h3>
            <p className="text-gray-600">
              Learn all 6 rotations with detailed explanations and visual diagrams showing all 4
              arrangements.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Practice</h3>
            <p className="text-gray-600">
              Drag and drop players to practice positioning with instant feedback on correctness.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="text-center py-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Glossary</h3>
            <p className="text-gray-600">
              Reference all volleyball terms, zones, and concepts with clear definitions and
              examples.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Start */}
      <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start Guide</h2>
        <ol className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
              1
            </span>
            <span>
              <strong>Learn the Basics:</strong> Start with terminology and understand zones,
              positions, and arrangements.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
              2
            </span>
            <span>
              <strong>Study Rotations:</strong> Walk through each of the 6 rotations and see how
              players move.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
              3
            </span>
            <span>
              <strong>Practice:</strong> Test your knowledge with drag-and-drop quizzes and get
              instant feedback.
            </span>
          </li>
        </ol>

        <div className="mt-6">
          <Link href="/learn/basics">
            <Button variant="primary" size="lg">
              Begin with Basics
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
