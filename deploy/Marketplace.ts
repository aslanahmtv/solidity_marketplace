import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Marketplace } from "../build/typechain/Marketplace";

const deployFunction: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {

  const { deployer } = await hre.getNamedAccounts();

  console.log('Marketplace deployment:');
  console.log('deployer:', deployer);

  const marketplace = await hre.ethers.getContractFactory("Marketplace")
  const existingDeployment = await hre.deployments.getOrNull("Marketplace");

  if (existingDeployment) {
    // Upgrade the existing proxy
    const proxy = await hre.upgrades.upgradeProxy(existingDeployment.address, marketplace) as Marketplace;
    console.log(`Marketplace upgraded at ${proxy.address}`);
  } else {
    // Deploy a new proxy
    const proxy = await hre.upgrades.deployProxy(
      marketplace,
      [],
      { kind: "uups" }
    ) as Marketplace;
    console.log(`Marketplace deployed at ${proxy.address}`);
    await proxy.deployed();

    const supportRole = await proxy.SUPPORT_ROLE();
    console.log(`granting SUPPORT_ROLE to ${deployer} (tx: ${(await proxy.grantRole(supportRole, deployer)).hash})`);
    console.log(`granting SUPPORT_ROLE to 0x8c95E33405DD809aC746AB35EB8c12D0F7d9A1FD (tx: ${(await proxy.grantRole(supportRole, "0x8c95E33405DD809aC746AB35EB8c12D0F7d9A1FD")).hash})`);
    console.log(`granting SUPPORT_ROLE to 0x466731F36f79aDD0DaAcbd8427e3cF1bD96E9A31 (tx: ${(await proxy.grantRole(supportRole, "0x466731F36f79aDD0DaAcbd8427e3cF1bD96E9A31")).hash})`);
    console.log(`granting SUPPORT_ROLE to 0x320EA9A313646905e3782d4ca809e1088C2A61Db (tx: ${(await proxy.grantRole(supportRole, "0x320EA9A313646905e3782d4ca809e1088C2A61Db")).hash})`);

    // Save the deployment information
    const artifact = await hre.deployments.getExtendedArtifact("Marketplace");
    let proxyDeployments = {
      address: proxy.address,
      ...artifact,
    };

    await hre.deployments.save("Marketplace", proxyDeployments);
  }
};

deployFunction.tags = ["Marketplace"];

export default deployFunction;
