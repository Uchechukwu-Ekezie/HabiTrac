'use client';

import { useTokenBalance } from '@/hooks/useTokenBalance';

export default function TokenBalance() {
  const { balance, isLoading } = useTokenBalance();

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-4 w-16 rounded"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
      <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
        {balance} $HABIT
      </span>
    </div>
  );
}

