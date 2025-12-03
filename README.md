# HabiTrac

A decentralized application (dApp) built on blockchain technology designed to help users track daily habits and earn rewards for consistency. Leveraging the immutability and transparency of blockchain, users can log habits on-chain, participate in challenges, and redeem tokens for real-world rewards.

## Project Structure

```
Habitrac/
├── contracts/
│   └── habitrac/          # Smart contracts
│       ├── contracts/     # Solidity source files
│       ├── scripts/       # Deployment scripts
│       ├── test/          # Contract tests
│       └── hardhat.config.js
├── frontend/              # Next.js frontend application
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   └── abis/            # Contract ABIs
└── README.md
```

## Key Features

- **Habit Logging**: Users create and log habits with verifiable on-chain entries
- **Streak Tracking**: Automated tracking of habit streaks with visual progress
- **Reward System**: Earn native tokens for maintaining streaks
- **Community Challenges**: Join or create group challenges
- **Privacy Controls**: Users control data visibility

## Tech Stack

- **Blockchain**: Base Network (Ethereum L2)
- **Smart Contracts**: Solidity 0.8.20, Hardhat
- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Web3**: Wagmi, RainbowKit, Ethers.js

## Getting Started

### Prerequisites

- Node.js v16+
- npm or yarn
- MetaMask or similar Web3 wallet
- Base Sepolia testnet ETH (for testing)

### Contract Setup

1. Navigate to contracts directory:
   ```bash
   cd contracts/habitrac
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your private key and API keys

5. Compile contracts:
   ```bash
   npm run compile
   ```

6. Deploy to Base Sepolia (testnet):
   ```bash
   npm run deploy:base-sepolia
   ```

7. Verify contract:
   ```bash
   npm run verify:base-sepolia
   ```

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env.local` file (copy from `.env.example`):
   ```bash
   cp .env.example .env.local
   ```

4. Update `.env.local` with deployed contract address:
   ```env
   NEXT_PUBLIC_CONTRACT_ADDRESS=0x...
   ```

5. Run development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Base Network Information

- **Base Mainnet**
  - Chain ID: 8453
  - RPC URL: https://mainnet.base.org
  - Explorer: https://basescan.org

- **Base Sepolia (Testnet)**
  - Chain ID: 84532
  - RPC URL: https://sepolia.base.org
  - Explorer: https://sepolia.basescan.org
  - Faucet: https://www.coinbase.com/faucets/base-ethereum-goerli-faucet

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License. See LICENSE for details.
