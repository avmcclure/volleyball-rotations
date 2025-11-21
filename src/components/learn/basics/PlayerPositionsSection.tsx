import { Card, CardHeader, CardContent } from '@/components/ui/Card';

export function PlayerPositionsSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">Player Positions</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              S
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">Setter</h4>
              <p className="text-gray-600 text-sm mb-2">
                The quarterback of the team. Runs the offense by delivering the second touch to
                hitters. Makes split-second decisions about which hitter to set based on the pass
                and defensive positioning. Needs excellent hands, court awareness, and leadership
                skills.
              </p>
              <p className="text-gray-500 text-xs italic">
                Key responsibilities: Second touch, run plays, communicate with hitters
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              O
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">Outside Hitter</h4>
              <p className="text-gray-500 text-xs mb-1">
                Also called: <strong>Left Side</strong>, <strong>Pin Hitter</strong>
              </p>
              <p className="text-gray-600 text-sm mb-2">
                The most well-rounded player on the court. Primary attacker from the left pin and
                one of the team's main passers. Gets the most sets and needs to be able to hit from
                anywhere. Must be effective in both offense and defense.
              </p>
              <p className="text-gray-500 text-xs italic">
                Key responsibilities: Pass serves, attack from left side, dig in back row
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              M
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">Middle Blocker</h4>
              <p className="text-gray-500 text-xs mb-1">
                Also called: <strong>Middle Hitter</strong>, <strong>Middle</strong>
              </p>
              <p className="text-gray-600 text-sm mb-2">
                The tallest and most athletic player, specializing in quick attacks and blocking.
                Reads the opposing setter to anticipate where the attack is coming from. Responsible
                for blocking the middle and helping teammates block at the pins. Usually doesn't
                pass serves.
              </p>
              <p className="text-gray-500 text-xs italic">
                Key responsibilities: Quick attacks, block middle and assist on pin blocks
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              RS
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">Right Side</h4>
              <p className="text-gray-500 text-xs mb-1">
                Also called: <strong>Opposite</strong>, <strong>Right Side Hitter</strong>, <strong>Opposite Hitter</strong>, <strong>Pin Hitter</strong>
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Attacks from the right pin, opposite of the setter in the rotation. Primary
                responsibility is blocking the opponent's outside hitters. Often serves as the backup
                setter. Typically a strong blocker and hitter who can terminate out-of-system balls.
              </p>
              <p className="text-gray-500 text-xs italic">
                Key responsibilities: Attack from right side, block opponent's outside, backup setting
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              L
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">Libero</h4>
              <p className="text-gray-500 text-xs mb-1">
                Also called: <strong>Lib</strong>
              </p>
              <p className="text-gray-600 text-sm mb-2">
                A specialized defensive player who wears a contrasting jersey color. Can only play
                back row positions and substitutes freely without counting against team substitution
                limits. Elite passer and defender who anchors the back row. Cannot attack above net
                height or block
              </p>
              <p className="text-gray-500 text-xs italic">
                Key responsibilities: Passing serves, digging attacks, back row defense
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              DS
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">Defensive Specialist</h4>
              <p className="text-gray-500 text-xs mb-1">
                Also called: <strong>DS</strong>
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Similar to a libero but without the special jersey or unlimited substitution
                privileges. Focuses on passing and defense. Substitutes for a primary front row player. Counts as a regular substitution.
              </p>
              <p className="text-gray-500 text-xs italic">
                Key responsibilities: Passing serves, digging attacks, serving
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

