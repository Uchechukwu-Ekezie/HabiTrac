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
    // Tests will be added incrementally
  });
});

