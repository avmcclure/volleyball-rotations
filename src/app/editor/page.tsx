'use client';

import { useState, useEffect } from 'react';
import { getAllRotations } from '@/data/rotations';
import { Rotation, Arrangement, CourtPosition, Color } from '@/lib/rotations/types';
import { CourtDiagram } from '@/components/court/CourtDiagram';
import { PlayerToken } from '@/components/court/PlayerToken';
import { Button } from '@/components/ui/Button';
import { getZoneFromCoordinates } from '@/lib/utils/coordinates';

// Helper function to convert Color enum value to enum name
const getColorEnumName = (colorValue: Color): string => {
  const colorMap: Record<string, string> = {
    [Color.CYAN]: 'Color.CYAN',
    [Color.GREEN]: 'Color.GREEN',
    [Color.BLUE]: 'Color.BLUE',
    [Color.YELLOW]: 'Color.YELLOW',
    [Color.RED]: 'Color.RED',
    [Color.ORANGE]: 'Color.ORANGE',
  };
  return colorMap[colorValue] || colorValue;
};

export default function RotationEditorPage() {
  const rotations = getAllRotations();
  const [selectedRotation, setSelectedRotation] = useState<Rotation>(rotations[0]);
  const [selectedArrangement, setSelectedArrangement] = useState<Arrangement>(Arrangement.HOME);
  const [playerPositions, setPlayerPositions] = useState<Map<string, CourtPosition>>(new Map());
  const [draggedPlayer, setDraggedPlayer] = useState<string | null>(null);

  // Initialize player positions when rotation or arrangement changes
  useEffect(() => {
    const players = selectedRotation.arrangements[selectedArrangement].players;
    const positions = new Map<string, CourtPosition>();
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
      const posA = playerPositions.get(a.id) || a.coordinates;
      const posB = playerPositions.get(b.id) || b.coordinates;
      return zoneOrder[posA.zone] - zoneOrder[posB.zone];
    });

    const code = sortedPlayers
      .map((player) => {
        const pos = playerPositions.get(player.id) || player.coordinates;
        return `          { id: '${player.id}', position: Position.${player.position.toUpperCase().replace(' ', '_')}, color: ${getColorEnumName(player.color)}, coordinates: { x: ${pos.x}, y: ${pos.y}, zone: Zone.${pos.zone} } }`;
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Rotation Configuration Editor</h1>
          <p className="text-gray-600">
            Drag players to update positions, then copy the generated code to update your rotation
            data.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rotation</label>
              <select
                value={selectedRotation.id}
                onChange={(e) => {
                  const rotation = rotations.find((r) => r.id === parseInt(e.target.value));
                  if (rotation) setSelectedRotation(rotation);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {rotations.map((rotation) => (
                  <option key={rotation.id} value={rotation.id}>
                    {rotation.name} - Setter in Zone {rotation.setterZone}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Arrangement</label>
              <select
                value={selectedArrangement}
                onChange={(e) => setSelectedArrangement(e.target.value as Arrangement)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value={Arrangement.HOME}>Home</option>
                <option value={Arrangement.SERVE}>Serve</option>
                <option value={Arrangement.RECEIVE}>Receive</option>
                <option value={Arrangement.BASE}>Base</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Court Editor */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Court Editor</h2>
            <p className="text-sm text-gray-600 mb-4">
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
                <div className="absolute inset-0 border-4 border-dashed border-blue-400 rounded-lg pointer-events-none bg-blue-50 bg-opacity-20" />
              )}
            </div>

            {/* Position Display */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Positions</h3>
              <div className="space-y-2 text-sm">
                {selectedRotation.arrangements[selectedArrangement].players.map((player) => {
                  const pos = playerPositions.get(player.id) || player.coordinates;
                  return (
                    <div key={player.id} className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: player.color }}
                      >
                        {player.position.charAt(0)}
                      </div>
                      <span className="text-gray-700 font-medium">{player.id}:</span>
                      <span className="text-gray-600">
                        x: {pos.x}, y: {pos.y}, zone: {pos.zone}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Generated Code */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Generated Code</h2>
              <Button onClick={copyToClipboard} variant="primary" size="sm">
                Copy to Clipboard
              </Button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Copy this code and paste it into the appropriate arrangement in src/data/rotations.ts
            </p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-xs font-mono whitespace-pre">
                {generateCode()}
              </pre>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">Usage Instructions:</h3>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
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
