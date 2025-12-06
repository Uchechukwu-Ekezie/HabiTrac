# Contract Deployment Information

## ✅ Contract Successfully Deployed & Verified on Base Mainnet!

### Mainnet Deployment
**Contract Address:** `0x6D4C5233090169292b21384E07a9f72a6984777F`  
**Network:** Base Mainnet  
**Chain ID:** 8453  
**Deployed At:** 2025-12-03T11:30:02.633Z  
**Explorer:** https://basescan.org/address/0x6D4C5233090169292b21384E07a9f72a6984777F#code  
**Status:** ✅ Verified

### Testnet Deployment (Base Sepolia)
**Contract Address:** `0xfc388A9ae083003E37898526b8eF07076124b660`  
**Network:** Base Sepolia (Testnet)  
**Chain ID:** 84532  
**Deployed At:** 2025-12-03T11:23:39.110Z  
**Explorer:** https://sepolia.basescan.org/address/0xfc388A9ae083003E37898526b8eF07076124b660  
**Status:** ⏳ Not verified (optional)

## Frontend Configuration

Update your frontend `.env.local` file for **mainnet**:

```env
NEXT_PUBLIC_CONTRACT_ADDRESS=0x6D4C5233090169292b21384E07a9f72a6984777F
NEXT_PUBLIC_REOWN_ID=1db88bda17adf26df9ab7799871788c4
NEXT_PUBLIC_CHAIN_ID=8453
```

For **testnet**, use:
```env
NEXT_PUBLIC_CONTRACT_ADDRESS=0xfc388A9ae083003E37898526b8eF07076124b660
NEXT_PUBLIC_REOWN_ID=1db88bda17adf26df9ab7799871788c4
NEXT_PUBLIC_CHAIN_ID=84532
```

## Contract Functions

- `createHabit(string name, string description)` - Create a new habit
- `logHabit(uint256 habitId, uint256 timestamp)` - Log a habit for a specific day
- `getUserHabits(address user)` - Get all habits for a user
- `getHabitStreak(address user, uint256 habitId)` - Get current streak
- `getTotalLoggedDays(address user, uint256 habitId)` - Get total logged days
- `deleteHabit(uint256 habitId)` - Delete a habit

## Network Information

### Base Mainnet
- Chain ID: 8453
- RPC URL: https://mainnet.base.org
- Explorer: https://basescan.org
- Currency: ETH

### Base Sepolia (Testnet)
- Chain ID: 84532
- RPC URL: https://sepolia.base.org
- Explorer: https://sepolia.basescan.org
- Faucet: https://www.coinbase.com/faucets/base-ethereum-goerli-faucet

## Next Steps

1. ✅ Contract deployed to mainnet
2. ✅ Contract verified on BaseScan
3. ✅ Frontend configured with mainnet contract address
4. Ready for production use!
