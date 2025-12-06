'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { isConnected, address } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push('/dashboard');
    }
  }, [isConnected, router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            HabiTrac
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Track your habits on-chain and earn rewards for consistency
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Get Started
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Connect your wallet to start tracking your habits on the blockchain
          </p>
          
          <div className="flex justify-center">
            <ConnectButton />
          </div>

          {isConnected && address && (
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-sm text-green-800 dark:text-green-300">
                Connected: {address.slice(0, 6)}...{address.slice(-4)}
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">
              📝 Track Habits
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Log your daily habits on-chain with immutable records
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">
              🔥 Build Streaks
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Maintain consistency and watch your streaks grow
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">
              🎁 Earn Rewards
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Get rewarded with tokens for your dedication
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

