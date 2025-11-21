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

          <h3 className="font-semibold text-gray-900 mt-6 mb-3">Why Do We Switch Positions?</h3>
          <p className="text-gray-700 mb-4">
            The service order (HOME arrangement) is required by volleyball rules, but it's rarely
            the best setup for playing effectively. As soon as the server contacts the ball,
            players are free to move anywhere on the court. We take advantage of this by switching
            to better positions that help our team succeed.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 mb-2">The Core Idea:</p>
            <p className="text-gray-700">
              Get specialist players into their optimal positions as quickly as possible after the
              serve is contacted.
            </p>
          </div>

          <h4 className="font-semibold text-gray-900 mb-2">Each Arrangement Has a Purpose:</h4>
          <div className="space-y-3 mb-4">
            <div>
              <span className="font-semibold text-gray-900">HOME:</span>
              <span className="text-gray-700">
                {' '}
                Required starting position based on service order. Not optimized for play.
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-900">SERVE:</span>
              <span className="text-gray-700">
                {' '}
                Position for offensive transition after your team serves. Ready to attack when the
                ball comes back.
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-900">RECEIVE:</span>
              <span className="text-gray-700">
                {' '}
                Optimize passing formation with your best passers in position to handle the serve.
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-900">BASE:</span>
              <span className="text-gray-700">
                {' '}
                Defensive coverage positions based on where the opponent's attack is coming from.
              </span>
            </div>
          </div>

          <h4 className="font-semibold text-gray-900 mb-2">Common Examples:</h4>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>Setter moves to the front right (near Zone II) to be close to their target spot</li>
            <li>Front row middle blocker shifts to center for quick attacks and blocking</li>
            <li>Best passers form a line or triangle to receive serves effectively</li>
            <li>Players not passing get out of the way and prepare to attack or defend</li>
          </ul>
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

      {/* Front Row vs Back Row */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900">Front Row vs Back Row</h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            Front row and back row positions have different rules about what they can and cannot
            do. Understanding these differences is key to grasping why rotations matter.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                    Aspect
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                    Front Row (II, III, IV)
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                    Back Row (I, VI, V)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-900">
                    Attacking
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">
                    Can attack at any height from anywhere
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">
                    Must jump from behind the attack line when attacking above net height
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-900">
                    Blocking
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">
                    Can block at the net
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">
                    Cannot block at all
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-900">
                    Setting
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">
                    Can set from anywhere
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">
                    Can set from anywhere
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Why Setter Position Matters</h4>
            <ul className="space-y-1 text-gray-700">
              <li>
                <strong>Front Row Setter:</strong> Can attack but not block effectively. Only 2
                hitters available (setter can't attack well).
              </li>
              <li>
                <strong>Back Row Setter:</strong> Cannot block. All 3 front row players are
                available as attackers.
              </li>
            </ul>
            <p className="text-gray-700 mt-2">
              This is why rotations change—we want 3 attackers when possible!
            </p>
          </div>

          <h4 className="font-semibold text-gray-900 mb-3">The Attack Line (10-Foot Line)</h4>
          <p className="text-gray-700 mb-3">
            The <strong>attack line</strong> (also called the <strong>10-foot line</strong> or{' '}
            <strong>3-meter line</strong>) is a dashed line that runs parallel to the net, about 10
            feet (3 meters) away. It divides the front and back zones of the court.
          </p>

          <div className="bg-gray-50 border border-gray-300 rounded p-4 mb-4">
            <p className="font-semibold text-gray-900 mb-2">The Rule:</p>
            <p className="text-gray-700 mb-2">
              When a back row player attacks the ball <em>above net height</em>, they must jump
              from behind the attack line. "Attacking" means hitting or tipping the ball toward the
              opponent's court.
            </p>
            <p className="text-gray-700 text-sm italic">
              Important: Players can land in front of the line—it's where they take off that
              matters!
            </p>
          </div>

          <div className="space-y-2 text-gray-700 mb-4">
            <p>
              <strong>Why this rule exists:</strong> It keeps the game balanced. Without it, tall
              back row players could attack from anywhere, making defense too difficult. This rule
              ensures front row players have a clear advantage at the net.
            </p>
            <p>
              <strong>On diagrams:</strong> Look for the dashed line across the court. It's a key
              reference point for understanding player positioning.
            </p>
          </div>

          <h4 className="font-semibold text-gray-900 mb-2">Libero (Specialized Back Row Player)</h4>
          <p className="text-gray-700">
            A libero is a defensive specialist who wears a different colored jersey. They can only
            play back row positions and cannot attack above net height, block, or serve in most
            leagues. Liberos can substitute freely for any back row player without counting against
            substitution limits.
          </p>
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

      {/* Overlap Rules */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900">Overlap Rules</h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            An <strong>overlap</strong> is a rotation violation that occurs when players are not in
            their correct relative positions at the moment the server contacts the ball. Understanding
            overlap rules helps you avoid costly penalties.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <p className="font-semibold text-gray-900 mb-2">What Happens When an Overlap Occurs?</p>
            <p className="text-gray-700">
              The referee calls a violation. Your team loses the point, and the other team gets the
              serve.
            </p>
          </div>

          <h3 className="font-semibold text-gray-900 mb-3">The Three Overlap Rules</h3>
          <p className="text-gray-700 mb-3">
            These rules apply <strong>only at the moment of serve contact</strong>. After the ball
            is served, players can move anywhere!
          </p>

          <div className="space-y-4 mb-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-1">
                1. Front row must be in front of back row
              </h4>
              <p className="text-gray-700 text-sm mb-1">
                Each front row player must be closer to the net than their corresponding back row
                player.
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>Zone II must be in front of Zone I</li>
                <li>Zone III must be in front of Zone VI</li>
                <li>Zone IV must be in front of Zone V</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-1">
                2. Maintain left-to-right order within each row
              </h4>
              <p className="text-gray-700 text-sm mb-1">
                Players in the same row must keep their correct order from left to right (from the
                team's perspective).
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>
                  <strong>Front row:</strong> Zone IV (left) → Zone III (middle) → Zone II (right)
                </li>
                <li>
                  <strong>Back row:</strong> Zone V (left) → Zone VI (middle) → Zone I (right)
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-1">
                3. Rules only apply at serve contact
              </h4>
              <p className="text-gray-700 text-sm">
                You only need to be in legal positions when the server hits the ball. Before and
                after that moment, you can position yourself anywhere on your side of the court to
                prepare for the play.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-300 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-green-600">✓</span> Legal Example
            </h4>
            <p className="text-gray-700 text-sm">
              Zone IV is to the left of Zone III, Zone III is to the left of Zone II. Zone IV is
              in front of Zone V. No overlap!
            </p>
          </div>

          <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-red-600">✗</span> Illegal Example
            </h4>
            <p className="text-gray-700 text-sm">
              If Zone II is to the left of Zone III at serve contact, that's an overlap violation
              because they're out of left-to-right order.
            </p>
          </div>

          <p className="text-gray-700 text-sm italic">
            <strong>Pro Tip:</strong> You can stand very close to the boundary between zones—even
            inches apart—as long as you maintain the correct relative positions. Many teams use this
            to get a head start on moving to their next arrangement!
          </p>
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
