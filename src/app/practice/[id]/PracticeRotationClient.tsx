'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getRotation } from '@/data/rotations';
import { Arrangement, CourtPosition, PlayerId, ValidationResult } from '@/lib/rotations/types';
import { DragDropCourt } from '@/components/practice/DragDropCourt';
import { PlayerBank } from '@/components/practice/PlayerBank';
import { FeedbackIndicator } from '@/components/practice/FeedbackIndicator';
import { HintButton } from '@/components/practice/HintButton';
import { Button } from '@/components/ui/Button';
import { RotationNav } from '@/components/navigation/RotationNav';
import { validateAllPlacements, getHint } from '@/lib/rotations/validator';

interface PracticeRotationClientProps {
  rotationId: number;
}

export default function PracticeRotationClient({ rotationId }: PracticeRotationClientProps) {
  const rotation = getRotation(rotationId);

  const [selectedArrangement, setSelectedArrangement] = useState<Arrangement>(Arrangement.HOME);
  const [placedPlayers, setPlacedPlayers] = useState<Map<PlayerId, CourtPosition>>(new Map());
  const [validationResults, setValidationResults] = useState<ValidationResult[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [hintPlayerIds, setHintPlayerIds] = useState<Set<PlayerId>>(new Set());

  if (!rotation) {
    notFound();
  }

  const allPlayers = rotation.arrangements[selectedArrangement].players;
  const placedPlayerIds = Array.from(placedPlayers.keys());
  const availablePlayers = allPlayers.filter((p) => !placedPlayerIds.includes(p.id));

  const handlePlayerPlaced = (playerId: PlayerId, position: CourtPosition) => {
    const newPlacedPlayers = new Map(placedPlayers);
    newPlacedPlayers.set(playerId, position);
    setPlacedPlayers(newPlacedPlayers);
    setIsChecked(false);
    setValidationResults([]);
  };

  const handleDragStart = (playerId: PlayerId) => {
    // Remove player from placed if they're being dragged again
    const newPlacedPlayers = new Map(placedPlayers);
    newPlacedPlayers.delete(playerId);
    setPlacedPlayers(newPlacedPlayers);
  };

  const handleCheckAnswer = () => {
    const session = {
      rotationId,
      arrangement: selectedArrangement,
      playerPlacements: placedPlayers,
      isComplete: true,
      correctCount: 0,
      hintsUsed,
    };

    const results = validateAllPlacements(session, rotation);
    setValidationResults(results);
    setIsChecked(true);
  };

  const handleHint = () => {
    const session = {
      rotationId,
      arrangement: selectedArrangement,
      playerPlacements: placedPlayers,
      isComplete: false,
      correctCount: 0,
      hintsUsed,
    };

    const hintPlayer = getHint(session, rotation);
    if (hintPlayer) {
      const newPlacedPlayers = new Map(placedPlayers);
      newPlacedPlayers.set(hintPlayer.id, hintPlayer.coordinates);
      setPlacedPlayers(newPlacedPlayers);
      setHintsUsed(hintsUsed + 1);
      setHintPlayerIds(new Set([...hintPlayerIds, hintPlayer.id]));
      setIsChecked(false);
      setValidationResults([]);
    }
  };

  const handleShowSolution = () => {
    const newPlacedPlayers = new Map<PlayerId, CourtPosition>();
    allPlayers.forEach((player) => {
      newPlacedPlayers.set(player.id, player.coordinates);
    });
    setPlacedPlayers(newPlacedPlayers);
    setIsChecked(false);
    setValidationResults([]);
  };

  const handleReset = () => {
    setPlacedPlayers(new Map());
    setValidationResults([]);
    setIsChecked(false);
    setHintsUsed(0);
    setHintPlayerIds(new Set());
  };

  const handleArrangementChange = (arrangement: Arrangement) => {
    setSelectedArrangement(arrangement);
    handleReset();
  };

  const correctCount = validationResults.filter((r) => r.isCorrect).length;
  const allCorrect = correctCount === allPlayers.length && isChecked;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <RotationNav currentRotation={rotationId} basePath="/practice" />

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{rotation.name} - Practice</h1>
        <p className="text-gray-600">{rotation.description}</p>
      </div>

      {/* Arrangement Selector */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose Arrangement:</h3>
        <div className="flex flex-wrap gap-2">
          {[Arrangement.HOME, Arrangement.SERVE, Arrangement.RECEIVE, Arrangement.BASE].map(
            (arrangement) => (
              <button
                key={arrangement}
                onClick={() => handleArrangementChange(arrangement)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedArrangement === arrangement
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {arrangement}
              </button>
            )
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Practice Area */}
        <div className="lg:col-span-2 space-y-4">
          <DragDropCourt
            rotation={rotation}
            arrangement={selectedArrangement}
            placedPlayers={placedPlayers}
            onPlayerPlaced={handlePlayerPlaced}
            validationResults={validationResults}
            hints={hintPlayerIds}
          />

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant="primary"
              onClick={handleCheckAnswer}
              disabled={placedPlayers.size === 0}
            >
              Check Answer
            </Button>

            <HintButton
              hintsUsed={hintsUsed}
              totalHints={6}
              onHintRequest={handleHint}
              disabled={placedPlayers.size === allPlayers.length}
            />

            <Button variant="outline" onClick={handleShowSolution}>
              Show Solution
            </Button>

            <Button variant="ghost" onClick={handleReset}>
              Reset
            </Button>
          </div>

          {/* Feedback */}
          {isChecked && (
            <FeedbackIndicator
              correctCount={correctCount}
              totalCount={allPlayers.length}
              isComplete={isChecked}
            />
          )}

          {allCorrect && (
            <div className="flex gap-3">
              <Link href={`/learn/${rotationId}`}>
                <Button variant="outline">Review Rotation</Button>
              </Link>
              {rotationId < 6 && (
                <Link href={`/practice/${rotationId + 1}`}>
                  <Button variant="primary">Next Rotation</Button>
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <PlayerBank availablePlayers={availablePlayers} onDragStart={handleDragStart} />

          {/* Stats */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Stats</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Placed:</span>
                <span className="font-semibold text-gray-900">
                  {placedPlayers.size} / {allPlayers.length}
                </span>
              </div>
              {isChecked && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Correct:</span>
                  <span className="font-semibold text-gray-900">
                    {correctCount} / {allPlayers.length}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Hints Used:</span>
                <span className="font-semibold text-gray-900">{hintsUsed}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
