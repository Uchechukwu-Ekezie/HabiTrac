'use client';

import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import HabiTracABI from '@/abis/HabiTrac.json';

interface LogHabitButtonProps {
  habitId: number;
  onSuccess?: () => void;
}

export default function LogHabitButton({ habitId, onSuccess }: LogHabitButtonProps) {
  const { address } = useAccount();
  const [isLogging, setIsLogging] = useState(false);

  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x0000000000000000000000000000000000000000';

  const { data: hash, writeContract, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const handleLogHabit = async () => {
    if (!address) return;

    try {
      const currentTimestamp = Math.floor(Date.now() / 1000);
      
      await writeContract({
        address: contractAddress as `0x${string}`,
        abi: HabiTracABI,
        functionName: 'logHabit',
        args: [BigInt(habitId), BigInt(currentTimestamp)],
      });
    } catch (err) {
      console.error('Error logging habit:', err);
    }
  };

  if (isSuccess && onSuccess) {
    onSuccess();
  }

  const isLoading = isPending || isConfirming;

  return (
    <div className="flex flex-col items-end space-y-2">
      <button
        onClick={handleLogHabit}
        disabled={isLoading || !address}
        className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
      >
        {isLoading ? 'Logging...' : 'Log Today'}
      </button>
      
      {error && (
        <p className="text-xs text-red-600 dark:text-red-400 max-w-[150px] text-right">
          {error.message}
        </p>
      )}
      
      {isSuccess && (
        <p className="text-xs text-green-600 dark:text-green-400">
          Logged successfully!
        </p>
      )}
    </div>
  );
}

