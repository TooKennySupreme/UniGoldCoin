const { shouldBehaveLikeMintableToken } = require('./MintableToken.behaviour');
const MintableToken = artifacts.require('UniGoldToken');

contract('MintableToken', function ([owner, anotherAccount]) {
  const minter = owner;

  beforeEach(async function () {
    this.token = await MintableToken.new({ from: owner });
  });

  shouldBehaveLikeMintableToken([owner, anotherAccount, minter]);
});
