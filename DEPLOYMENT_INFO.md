# Contract Deployment Information

## ✅ Contract Successfully Deployed!

**Contract Address:** `0xfc388A9ae083003E37898526b8eF07076124b660`  
**Network:** Base Sepolia (Testnet)  
**Chain ID:** 84532  
**Deployed At:** 2025-12-03T11:23:39.110Z  
**Explorer:** https://sepolia.basescan.org/address/0xfc388A9ae083003E37898526b8eF07076124b660

## Contract Verification

To verify the contract on BaseScan, you need a BaseScan API key:

1. **Get BaseScan API Key:**
   - Visit: https://basescan.org/myapikey
   - Sign up/login and create an API key

2. **Add to `.env` file:**
   ```env
   BASESCAN_API_KEY=your_api_key_here
   ```

3. **Verify the contract:**
   ```bash
   cd contracts/habitrac
   npm run verify:base-sepolia
   ```

   Or manually:
   ```bash
   npx hardhat verify --network baseSepolia 0xfc388A9ae083003E37898526b8eF07076124b660
   ```

## Frontend Configuration

Update your frontend `.env.local` file:

```env
NEXT_PUBLIC_CONTRACT_ADDRESS=0xfc388A9ae083003E37898526b8eF07076124b660
NEXT_PUBLIC_REOWN_ID=1db88bda17adf26df9ab7799871788c4
NEXT_PUBLIC_CHAIN_ID=84532
```

## Next Steps

1. ✅ Contract deployed
2. ⏳ Verify contract (requires BaseScan API key)
3. ⏳ Update frontend with contract address
4. ⏳ Test the application

## Contract Functions

- `createHabit(string name, string description)` - Create a new habit
- `logHabit(uint256 habitId, uint256 timestamp)` - Log a habit for a specific day
- `getUserHabits(address user)` - Get all habits for a user
- `getHabitStreak(address user, uint256 habitId)` - Get current streak
- `getTotalLoggedDays(address user, uint256 habitId)` - Get total logged days
- `deleteHabit(uint256 habitId)` - Delete a habit

