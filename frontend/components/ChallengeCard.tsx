'use client';

import { Challenge } from '@/types/challenge';

interface ChallengeCardProps {
  challenge: Challenge;
  onJoin: (challengeId: string) => void;
  isJoined?: boolean;
}

export default function ChallengeCard({ challenge, onJoin, isJoined = false }: ChallengeCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {challenge.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {challenge.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {challenge.participants} participants
        </div>
        <button
          onClick={() => onJoin(challenge.id)}
          disabled={isJoined}
          className={`font-semibold py-2 px-4 rounded-lg transition-colors ${
            isJoined
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isJoined ? 'Joined' : 'Join Challenge'}
        </button>
      </div>
    </div>
  );
}

