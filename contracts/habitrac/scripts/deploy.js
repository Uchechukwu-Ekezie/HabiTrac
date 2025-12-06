const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("Deploying HabiTrac contract...");
  
  const HabiTrac = await hre.ethers.getContractFactory("HabiTrac");
  const habitrac = await HabiTrac.deploy();

  await habitrac.waitForDeployment();

  const address = await habitrac.getAddress();
  const network = hre.network.name;
  const chainId = (await hre.ethers.provider.getNetwork()).chainId;
  
  console.log("\n=== Deployment Successful ===");
  console.log("Contract Address:", address);
  console.log("Network:", network);
  console.log("Chain ID:", chainId.toString());
  console.log("============================\n");

  // Save deployment info
  const deploymentInfo = {
    address,
    network,
    chainId: chainId.toString(),
    deployedAt: new Date().toISOString(),
  };

  const deploymentPath = path.join(__dirname, "../deployments", `${network}.json`);
  const deploymentsDir = path.dirname(deploymentPath);
  
  if (!fs.existsSync(deploymentsDir)) {
    fs.mkdirSync(deploymentsDir, { recursive: true });
  }
  
  fs.writeFileSync(deploymentPath, JSON.stringify(deploymentInfo, null, 2));
  console.log(`Deployment info saved to: ${deploymentPath}`);
  
  console.log("\nTo verify the contract, run:");
  console.log(`npx hardhat verify --network ${network} ${address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

