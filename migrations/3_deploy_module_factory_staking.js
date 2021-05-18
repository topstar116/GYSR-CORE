// deploy erc20 staking module factory

const PoolFactory = artifacts.require('PoolFactory');
const ERC20StakingModuleFactory = artifacts.require('ERC20StakingModuleFactory');

// set address of main pool factory
const FACTORY_ADDRESS = '';

module.exports = async function (deployer) {
    // deploy
    await deployer.deploy(ERC20StakingModuleFactory);
    const modulefactory = await ERC20StakingModuleFactory.deployed();

    // whitelist
    const factory = await PoolFactory.at(FACTORY_ADDRESS);
    const res = await factory.setWhitelist(modulefactory.address, 1);
    //console.log(res);
}
