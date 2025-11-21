import { PhilosophySection } from '@/components/learn/basics/PhilosophySection';
import { CourtZonesSection } from '@/components/learn/basics/CourtZonesSection';
import { FrontRowBackRowSection } from '@/components/learn/basics/FrontRowBackRowSection';
import { ArrangementsSection } from '@/components/learn/basics/ArrangementsSection';
import { OverlapRulesSection } from '@/components/learn/basics/OverlapRulesSection';
import { FiveOneSystemSection } from '@/components/learn/basics/FiveOneSystemSection';
import { PlayerPositionsSection } from '@/components/learn/basics/PlayerPositionsSection';
import { KeyConceptsSection } from '@/components/learn/basics/KeyConceptsSection';
import { NextStepsSection } from '@/components/learn/basics/NextStepsSection';

export default function BasicsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <div className="inline-block mb-3">
          <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-semibold border border-green-200">
            ✓ Beginner Friendly
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Volleyball Rotation Basics</h1>
        <p className="text-lg text-gray-600 mb-2">
          Learn the fundamental concepts needed to understand volleyball rotations.
        </p>
        <p className="text-sm text-gray-500">
          This guide is designed for players ages 12-18 who are new to rotations.
        </p>
      </div>

      <PhilosophySection />
      <CourtZonesSection />
      <FrontRowBackRowSection />
      <ArrangementsSection />
      <OverlapRulesSection />
      <FiveOneSystemSection />
      <PlayerPositionsSection />
      <KeyConceptsSection />
      <NextStepsSection />
    </div>
  );
}
