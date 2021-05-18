// deploy erc20 friendly reward module factory

const PoolFactory = artifacts.require('PoolFactory');
const ERC20FriendlyRewardModuleFactory = artifacts.require('ERC20FriendlyRewardModuleFactory');

// set address of main pool factory
const FACTORY_ADDRESS = '';

module.exports = async function (deployer) {
    // deploy
    await deployer.deploy(ERC20FriendlyRewardModuleFactory);
    const modulefactory = await ERC20FriendlyRewardModuleFactory.deployed();

    // whitelist
    const factory = await PoolFactory.at(FACTORY_ADDRESS);
    const res = await factory.setWhitelist(modulefactory.address, 2);
    //console.log(res);
}
