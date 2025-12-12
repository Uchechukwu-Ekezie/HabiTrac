const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HabiTrac - Streak Calculation Tests", function () {
  let habiTrac;
  let owner;
  let user1;

  beforeEach(async function () {
    [owner, user1] = await ethers.getSigners();
    
    const HabiTrac = await ethers.getContractFactory("HabiTrac");
    habiTrac = await HabiTrac.deploy();
    await habiTrac.waitForDeployment();
  });

  describe("Streak Calculation", function () {
    it("Should start with streak of 0 for new habit", async function () {
      const tx = await habiTrac.connect(user1).createHabit("Test Habit", "Test Description");
      const receipt = await tx.wait();
      const event = receipt.logs.find(log => {
        try {
          return habiTrac.interface.parseLog(log).name === "HabitCreated";
        } catch {
          return false;
        }
      });
      const habitId = habiTrac.interface.parseLog(event).args.habitId;
      
      const streak = await habiTrac.getHabitStreak(user1.address, habitId);
      expect(streak).to.equal(0);
    });

    it("Should have streak of 1 after first log", async function () {
      const tx = await habiTrac.connect(user1).createHabit("Test Habit", "Test Description");
      const receipt = await tx.wait();
      const event = receipt.logs.find(log => {
        try {
          return habiTrac.interface.parseLog(log).name === "HabitCreated";
        } catch {
          return false;
        }
      });
      const habitId = habiTrac.interface.parseLog(event).args.habitId;
      
      const currentTime = Math.floor(Date.now() / 1000);
      await habiTrac.connect(user1).logHabit(habitId, currentTime);
      
      const streak = await habiTrac.getHabitStreak(user1.address, habitId);
      expect(streak).to.equal(1);
    });
  });
});

