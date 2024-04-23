import { expect } from "chai";
import { ethers, network } from "hardhat";

const DAI = "";
const DAI_WHALE="0xF977814e90dA44bFA03b6295A0616a897441aceC";

describe("Test unlock accounts", function () {
    let accounts;
    let dai;
    let whale;

    before(async () => {
        accounts = await ethers.getSigners();
        
        await network.provider.request({
            method: "hardhat_impersonateAccount",
            params: [DAI_WHALE],
          });


        dai = await ethers.getContractAt("IERC20", DAI);
        whale = await ethers.getSigners(DAI_WHALE);
    });

    it("unlock account", async () => {

        const amount = 100n * 10n * 18n;
        console.log("DAI balance of whale", await dai.balanceOf(whale.address));
        expect(await dai.balanceOf(whale.address)).to.gte(amount);

        await dai.connect(whale).transfer(accounts[0].address, amount);

        console.log("DAI balance of account", await dai.balanceOf(accounts[0].address));
    });
});