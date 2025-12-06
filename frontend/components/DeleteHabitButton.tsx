'use client';

import { useState } from 'react';
import { useAccount, useContractWrite, useWaitForTransaction } from 'wagmi';
import HabiTracABI from '@/abis/HabiTrac.json';

interface DeleteHabitButtonProps {
  habitId: number;
  habitName: string;
  onSuccess?: () => void;
}

export default function DeleteHabitButton({ habitId, habitName, onSuccess }: DeleteHabitButtonProps) {
  const { address } = useAccount();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x0000000000000000000000000000000000000000';

  const { data, write, isLoading: isPending } = useContractWrite({
    address: contractAddress as `0x${string}`,
    abi: HabiTracABI,
    functionName: 'deleteHabit',
  });

  const { isLoading: isConfirming, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleDelete = async () => {
    if (!address) return;
    write({
      args: [BigInt(habitId)],
    });
  };

  if (isSuccess && onSuccess) {
    onSuccess();
  }

  const isLoading = isPending || isConfirming;

  return (
    <>
      <button
        onClick={() => setShowConfirmDialog(true)}
        disabled={isLoading || !address}
        className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
      >
        Delete Habit
      </button>

      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Delete Habit
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Are you sure you want to delete "{habitName}"? This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowConfirmDialog(false)}
                disabled={isLoading}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isLoading || !address}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
