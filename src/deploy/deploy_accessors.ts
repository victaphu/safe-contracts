import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment,
) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  console.log(hre);

  await deploy("SimulateTxAccessor", {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: false,
  });
};

deploy.tags = ['accessors', 'l2-suite', 'main-suite']
export default deploy;
