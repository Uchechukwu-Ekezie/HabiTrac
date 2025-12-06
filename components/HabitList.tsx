'use client';

import { useAccount, useReadContract } from 'wagmi';
import { useEffect, useState } from 'react';
import HabiTracABI from '@/abis/HabiTrac.json';
import LogHabitButton from './LogHabitButton';

interface Habit {
  id: number;
  name: string;
  description: string;
  owner: string;
  createdAt: bigint;
  isActive: boolean;
}

export default function HabitList() {
  const { address } = useAccount();
  const [habits, setHabits] = useState<Habit[]>([]);
  const [streaks, setStreaks] = useState<Record<number, bigint>>({});
  const [totalDays, setTotalDays] = useState<Record<number, bigint>>({});

  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x0000000000000000000000000000000000000000';

  const { data: userHabits, refetch } = useReadContract({
    address: contractAddress as `0x${string}`,
    abi: HabiTracABI,
    functionName: 'getUserHabits',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  useEffect(() => {
    if (userHabits) {
      const habitsArray = userHabits as Habit[];
      setHabits(habitsArray);
      
      // Initialize streaks and total days
      const newStreaks: Record<number, bigint> = {};
      const newTotalDays: Record<number, bigint> = {};
      
      habitsArray.forEach((habit) => {
        if (habit.isActive) {
          newStreaks[Number(habit.id)] = 0n;
          newTotalDays[Number(habit.id)] = 0n;
        }
      });
      
      setStreaks(newStreaks);
      setTotalDays(newTotalDays);
    }
  }, [userHabits]);

  if (!address) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          Please connect your wallet to view your habits
        </p>
      </div>
    );
  }

  if (habits.length === 0 || habits.filter(h => h.isActive).length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          You don't have any habits yet. Create your first habit to get started!
        </p>
      </div>
    );
  }

  const activeHabits = habits.filter(h => h.isActive);

  return (
    <div className="space-y-4">
      {activeHabits.map((habit) => (
        <div
          key={Number(habit.id)}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {habit.name}
              </h3>
              {habit.description && (
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {habit.description}
                </p>
              )}
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  Streak: <span className="font-semibold text-orange-600 dark:text-orange-400">
                    {Number(streaks[Number(habit.id)] || 0)} days
                  </span>
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  Total: <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {Number(totalDays[Number(habit.id)] || 0)} days
                  </span>
                </span>
              </div>
            </div>
            <LogHabitButton habitId={Number(habit.id)} onSuccess={() => refetch()} />
          </div>
        </div>
      ))}
    </div>
  );
}

