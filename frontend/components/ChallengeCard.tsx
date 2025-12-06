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
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {challenge.participants} {challenge.maxParticipants ? `/${challenge.maxParticipants}` : ''} participants
          </span>
        </div>
        {challenge.maxParticipants && (
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{
                width: `${Math.min((challenge.participants / challenge.maxParticipants) * 100, 100)}%`,
              }}
            />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between">
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

