'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAccount } from 'wagmi';

interface TokenBalanceContextType {
  balance: string;
  isLoading: boolean;
  refetch: () => void;
  updateBalance: (newBalance: string) => void;
}

const TokenBalanceContext = createContext<TokenBalanceContextType | undefined>(undefined);

export function TokenBalanceProvider({ children }: { children: ReactNode }) {
  const { address, isConnected } = useAccount();
  const [balance, setBalance] = useState<string>('0');
  const [isLoading, setIsLoading] = useState(false);

  const fetchBalance = async () => {
    if (!isConnected || !address) {
      setBalance('0');
      return;
    }

    setIsLoading(true);
    try {
      // Mock token balance calculation based on streaks
      // In production, this would call the token contract
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Mock: Calculate balance from localStorage or contract
      const storedBalance = localStorage.getItem(`tokenBalance_${address}`);
      if (storedBalance) {
        setBalance(storedBalance);
      } else {
        setBalance('0');
      }
    } catch (error) {
      console.error('Error fetching balance:', error);
      setBalance('0');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [address, isConnected]);

  const updateBalance = (newBalance: string) => {
    setBalance(newBalance);
    if (address) {
      localStorage.setItem(`tokenBalance_${address}`, newBalance);
    }
  };

  return (
    <TokenBalanceContext.Provider value={{ balance, isLoading, refetch: fetchBalance, updateBalance }}>
      {children}
    </TokenBalanceContext.Provider>
  );
}

export function useTokenBalanceContext() {
  const context = useContext(TokenBalanceContext);
  if (context === undefined) {
    throw new Error('useTokenBalanceContext must be used within a TokenBalanceProvider');
  }
  return context;
}

