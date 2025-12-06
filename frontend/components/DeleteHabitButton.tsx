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

  const { data, write, isLoading: isPending, error } = useContractWrite({
    address: contractAddress as `0x${string}`,
    abi: HabiTracABI,
    functionName: 'deleteHabit',
  });

  const { isLoading: isConfirming, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleOpenDialog = () => {
    setShowConfirmDialog(true);
  };

  const handleCloseDialog = () => {
    setShowConfirmDialog(false);
  };

  const handleDelete = async () => {
    if (!address) return;

    try {
      write({
        args: [BigInt(habitId)],
      });
    } catch (err) {
      console.error('Error deleting habit:', err);
    }
  };

  return (
    <button
      onClick={handleOpenDialog}
      disabled={!address}
      className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
    >
      Delete Habit
    </button>
  );
}
