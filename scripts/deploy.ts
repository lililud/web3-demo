import { ethers } from 'hardhat';
import {updateFrontEndABI} from './updateFrontEndABI';
require('dotenv').config();

const ADDY = process.env.WALLET_ADDY;
async function main() {
    const FeatureToggle = await ethers.getContractFactory("FeatureToggle");
    console.log('test wallet addy', ADDY);
    const deployedContract = await FeatureToggle.deploy([ADDY]);

    console.log("FeatureToggle contract deployed to:", deployedContract.address);
    return deployedContract.address;
}

main()
.then((deployedContractAddress) => updateFrontEndABI(deployedContractAddress))
.then(() => process.exit(0))
.catch(
    (error) => {
        console.error(error);
        process.exit(1);
    }
);