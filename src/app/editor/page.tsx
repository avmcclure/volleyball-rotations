'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAllSystems } from '@/data/systems';
import { Rotation, Arrangement, CourtPosition, PlayerId } from '@/lib/rotations/types';
import { CourtDiagram } from '@/components/court/CourtDiagram';
import { PlayerToken } from '@/components/court/PlayerToken';
import { Button } from '@/components/ui/Button';
import { getZoneFromCoordinates } from '@/lib/utils/coordinates';

// Helper function to get factory function name for a player ID
const getFactoryFunctionName = (playerId: PlayerId): string => {
  const factoryMap: Record<PlayerId, string> = {
    [PlayerId.S]: 'createS',
    [PlayerId.S1]: 'createS1',
    [PlayerId.S2]: 'createS2',
    [PlayerId.RS]: 'createRS',
    [PlayerId.M1]: 'createM1',
    [PlayerId.M2]: 'createM2',
    [PlayerId.O1]: 'createO1',
    [PlayerId.O2]: 'createO2',
  };
  return factoryMap[playerId] || 'createPlayer';
};

export default function RotationEditorPage() {
  const router = useRouter();
  const rotations = getAllSystems();
  const [selectedRotation, setSelectedRotation] = useState<Rotation>(rotations[0]);
  const [selectedArrangement, setSelectedArrangement] = useState<Arrangement>(Arrangement.HOME);
  const [playerPositions, setPlayerPositions] = useState<Map<PlayerId, CourtPosition>>(new Map());
  const [draggedPlayer, setDraggedPlayer] = useState<PlayerId | null>(null);

  // Redirect to home if not in development
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      router.push('/');
    }
  }, [router]);

  // Initialize player positions when rotation or arrangement changes
  useEffect(() => {
    const players = selectedRotation.arrangements[selectedArrangement].players;
    const positions = new Map<PlayerId, CourtPosition>();
    players.forEach((player) => {
      positions.set(player.id, player.coordinates);
    });
    setPlayerPositions(positions);
  }, [selectedRotation, selectedArrangement]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!draggedPlayer) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const zone = getZoneFromCoordinates(x, y);

    const newPositions = new Map(playerPositions);
    newPositions.set(draggedPlayer, { x: Math.round(x), y: Math.round(y), zone });
    setPlayerPositions(newPositions);
    setDraggedPlayer(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const generateCode = () => {
    const players = selectedRotation.arrangements[selectedArrangement].players;
    const sortedPlayers = [...players].sort((a, b) => {
      const zoneOrder = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6 };
      // Get zone from rotation's playerZones mapping
      const zoneA = Object.entries(selectedRotation.playerZones).find(
        ([_, playerId]) => playerId === a.id
      )?.[0];
      const zoneB = Object.entries(selectedRotation.playerZones).find(
        ([_, playerId]) => playerId === b.id
      )?.[0];
      return (
        (zoneOrder[zoneA as keyof typeof zoneOrder] || 0) -
        (zoneOrder[zoneB as keyof typeof zoneOrder] || 0)
      );
    });

    const code = sortedPlayers
      .map((player) => {
        const pos = playerPositions.get(player.id) || player.coordinates;
        const factoryFn = getFactoryFunctionName(player.id);
        return `          ${factoryFn}({ x: ${pos.x}, y: ${pos.y} })`;
      })
      .join(',\n');

    return `        players: [\n${code}\n        ]`;
  };

  const copyToClipboard = () => {
    const code = generateCode();
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="min-h-screen py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 lg:mb-10 animate-fadeIn">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2 sm:mb-3">
            Rotation Configuration Editor
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
            Drag players to update positions, then copy the generated code to update your rotation
            data.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-slate-200/60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">Rotation</label>
              <select
                value={selectedRotation.id}
                onChange={(e) => {
                  const rotation = rotations.find((r) => r.id === parseInt(e.target.value));
                  if (rotation) setSelectedRotation(rotation);
                }}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              >
                {rotations.map((rotation) => {
                  const setterZone = Object.entries(rotation.playerZones).find(
                    ([_, playerId]) => playerId === PlayerId.S
                  )?.[0];
                  return (
                    <option key={rotation.id} value={rotation.id}>
                      {rotation.name} - Setter in Zone {setterZone}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2">Arrangement</label>
              <select
                value={selectedArrangement}
                onChange={(e) => setSelectedArrangement(e.target.value as Arrangement)}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              >
                <option value={Arrangement.HOME}>Home</option>
                <option value={Arrangement.SERVE}>Serve</option>
                <option value={Arrangement.RECEIVE}>Receive</option>
                <option value={Arrangement.BASE}>Base</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Court Editor */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-slate-200/60">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5 sm:mb-2">Court Editor</h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6">
              Drag players to reposition them. Coordinates update in real-time.
            </p>

            <div className="relative" onDrop={handleDrop} onDragOver={handleDragOver}>
              <CourtDiagram>
                {selectedRotation.arrangements[selectedArrangement].players.map((player) => {
                  const position = playerPositions.get(player.id) || player.coordinates;
                  const playerWithPosition = { ...player, coordinates: position };

                  return (
                    <PlayerToken
                      key={player.id}
                      player={playerWithPosition}
                      draggable={true}
                      onDragStart={(e) => {
                        e.dataTransfer.setData('playerId', player.id);
                        e.dataTransfer.effectAllowed = 'move';
                        setDraggedPlayer(player.id);
                      }}
                    />
                  );
                })}
              </CourtDiagram>

              {draggedPlayer && (
                <div className="absolute inset-0 border-4 border-dashed border-indigo-400 rounded-xl pointer-events-none bg-indigo-50 bg-opacity-20" />
              )}
            </div>

            {/* Position Display */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4">Current Positions</h3>
              <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
                {selectedRotation.arrangements[selectedArrangement].players.map((player) => {
                  const pos = playerPositions.get(player.id) || player.coordinates;
                  return (
                    <div
                      key={player.id}
                      className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div
                        className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md flex-shrink-0"
                        style={{ backgroundColor: player.color }}
                      >
                        {player.position.charAt(0)}
                      </div>
                      <span className="text-slate-900 font-semibold">{player.id}:</span>
                      <span className="text-slate-600 text-xs sm:text-sm">
                        x: {pos.x}, y: {pos.y}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Generated Code */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-slate-200/60">
            <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Generated Code</h2>
              <Button onClick={copyToClipboard} variant="primary" size="sm">
                Copy
              </Button>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6">
              Copy this code and paste it into the appropriate arrangement in src/data/rotations.ts
            </p>

            <div className="bg-slate-900 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 overflow-x-auto border border-slate-800 shadow-inner">
              <pre className="text-emerald-400 text-[10px] sm:text-xs font-mono whitespace-pre">
                {generateCode()}
              </pre>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-200/60 rounded-lg sm:rounded-xl">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-2 sm:mb-3">Usage Instructions:</h3>
              <ol className="text-xs sm:text-sm text-slate-700 space-y-1.5 sm:space-y-2 list-decimal list-inside">
                <li>Drag players to their desired positions on the court</li>
                <li>Click "Copy to Clipboard" above</li>
                <li>Open src/data/rotations.ts in your editor</li>
                <li>
                  Find the rotation ({selectedRotation.name}) and arrangement ({selectedArrangement}
                  )
                </li>
                <li>Replace the players array with the copied code</li>
                <li>Save the file - changes will hot reload automatically</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
