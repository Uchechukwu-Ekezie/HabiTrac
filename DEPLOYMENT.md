# Deployment Guide for HabiTrac

## Base Network Deployment

### Prerequisites
1. Node.js v16+ installed
2. A wallet with Base Sepolia testnet ETH (for testing) or Base mainnet ETH (for production)
3. Private key or mnemonic for deployment account

### Setup

1. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Configure Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   PRIVATE_KEY=your_private_key_here
   BASE_RPC_URL=https://mainnet.base.org
   BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
   NEXT_PUBLIC_CONTRACT_ADDRESS=your_deployed_contract_address
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
   ```

3. **Compile Smart Contracts**
   ```bash
   npm run compile
   ```

4. **Deploy to Base Sepolia (Testnet)**
   ```bash
   npm run deploy:base-sepolia
   ```

5. **Deploy to Base Mainnet**
   ```bash
   npm run deploy:base
   ```

6. **Update Frontend Configuration**
   After deployment, update `NEXT_PUBLIC_CONTRACT_ADDRESS` in your `.env` file with the deployed contract address.

7. **Run Frontend**
   ```bash
   npm run dev
   ```

## Base Network Information

- **Base Mainnet**
  - Chain ID: 8453
  - RPC URL: https://mainnet.base.org
  - Explorer: https://basescan.org

- **Base Sepolia (Testnet)**
  - Chain ID: 84532
  - RPC URL: https://sepolia.base.org
  - Explorer: https://sepolia.basescan.org
  - Faucet: https://www.coinbase.com/faucets/base-ethereum-goerli-faucet

## Issues Resolved

✅ **Issue #1**: Wallet connection button added to homepage with RainbowKit integration
✅ **Issue #2**: Habit creation form with name, description, and frequency fields
✅ **Issue #5**: Habit list display on dashboard with streak and total days
✅ **Issue #6**: Daily habit logging button with transaction handling

## Next Steps

1. Deploy contract to Base Sepolia for testing
2. Test all functionality on testnet
3. Deploy to Base mainnet for production
4. Set up WalletConnect project ID for better wallet support

