const fs = require('fs');
require('dotenv').config();

export async function updateFrontEndABI(deployedContractAddress: string) {
    console.log('updating files');
    const web3DemoUiRepoPath = '/Users/lilian.ludford/Development/web3-demo-ui';
    const filename = `FeatureToggle.json`;
// destination will be created or overwritten by default.
    fs.copyFile('/Users/lilian.ludford/Development/web3-demo/artifacts/contracts/FeatureToggle.sol/FeatureToggle.json', `/Users/lilian.ludford/Development/web3-demo-ui/abis/${filename}`, (err: any) => {
        if (err) {
            console.error('ERROR: file not copied to web3-demo-ui repo');
            throw err;
        }
    });
    console.log('File successfully copied to web3-demo-ui repo');
    console.log('updating contractAddress on FE...');
    const data = `export const contract = "${deployedContractAddress}";`
    fs.writeFileSync(`${web3DemoUiRepoPath}/contractAddress.ts`, data, (err: any) => {
        if (err) {
            console.error('ERROR: contract address not updated');
            throw err;
        }
    });
    console.log(`Successfully updated contract address to ${deployedContractAddress}`);
    return deployedContractAddress;
}