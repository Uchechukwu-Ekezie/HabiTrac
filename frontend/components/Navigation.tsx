'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/dashboard" className="text-2xl font-bold text-gray-900 dark:text-white">
            HabiTrac
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="/dashboard"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/dashboard'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/challenges"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/challenges'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Challenges
            </Link>
            <Link
              href="/rewards"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/rewards'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Rewards
            </Link>
            <Link
              href="/profile"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/profile'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Profile
            </Link>
            <ConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

