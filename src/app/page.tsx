import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-24 animate-fadeIn">
        <div className="inline-block mb-4 sm:mb-6">
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-700 rounded-full text-xs sm:text-sm font-semibold border border-indigo-200">
            Interactive Learning Platform
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent leading-tight px-2">
          Master Volleyball Rotations
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed px-2">
          Learn the 5-1 offensive system with interactive walkthroughs and practice quizzes.
        </p>
        <p className="text-sm sm:text-base text-slate-500 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
          Designed for middle school to high school players (ages 12-18) learning court positioning
          and rotational movement. Perfect for beginners and intermediate players.
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
        <Card className="group">
          <CardContent className="text-center py-6 sm:py-8 lg:py-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-white"
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
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Guided Walkthroughs</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Learn all 6 rotations with detailed explanations and visual diagrams showing all 4
              arrangements.
            </p>
          </CardContent>
        </Card>

        <Card className="group">
          <CardContent className="text-center py-6 sm:py-8 lg:py-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-white"
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
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Interactive Practice</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Drag and drop players to practice positioning with instant feedback on correctness.
            </p>
          </CardContent>
        </Card>

        <Card className="group">
          <CardContent className="text-center py-6 sm:py-8 lg:py-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-white"
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
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Complete Glossary</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Reference all volleyball terms, zones, and concepts with clear definitions and
              examples.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Start */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50/50 to-violet-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-indigo-200/60 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Quick Start Guide</h2>
        <ol className="space-y-4 sm:space-y-5 text-sm sm:text-base text-slate-700 mb-6 sm:mb-8">
          <li className="flex items-start gap-3 sm:gap-4">
            <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
              1
            </span>
            <span className="pt-0.5 sm:pt-1">
              <strong className="text-slate-900">Learn the Basics:</strong> Start with terminology and understand zones,
              positions, and arrangements.
            </span>
          </li>
          <li className="flex items-start gap-3 sm:gap-4">
            <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
              2
            </span>
            <span className="pt-0.5 sm:pt-1">
              <strong className="text-slate-900">Study Rotations:</strong> Walk through each of the 6 rotations and see how
              players move.
            </span>
          </li>
          <li className="flex items-start gap-3 sm:gap-4">
            <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
              3
            </span>
            <span className="pt-0.5 sm:pt-1">
              <strong className="text-slate-900">Practice:</strong> Test your knowledge with drag-and-drop quizzes and get
              instant feedback.
            </span>
          </li>
        </ol>

        <div className="mt-6 sm:mt-8">
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
