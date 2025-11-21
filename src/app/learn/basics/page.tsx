import { PhilosophySection } from '@/components/learn/basics/PhilosophySection';
import { CourtZonesSection } from '@/components/learn/basics/CourtZonesSection';
import { FrontRowBackRowSection } from '@/components/learn/basics/FrontRowBackRowSection';
import { LiberoSection } from '@/components/learn/basics/LiberoSection';
import { OverlapRulesSection } from '@/components/learn/basics/OverlapRulesSection';
import { FiveOneSystemSection } from '@/components/learn/basics/FiveOneSystemSection';
import { SixTwoSystemSection } from '@/components/learn/basics/SixTwoSystemSection';
import { PlayerPositionsSection } from '@/components/learn/basics/PlayerPositionsSection';
import { NextStepsSection } from '@/components/learn/basics/NextStepsSection';

export default function BasicsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
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
      <PlayerPositionsSection />
      <LiberoSection />
      <OverlapRulesSection />
      <FiveOneSystemSection />
      <SixTwoSystemSection />
      <NextStepsSection />
    </div>
  );
}
