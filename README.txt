## hardhat things~
Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

## deploy contract and update frontend ABIs
`npx hh run scripts/deploy.ts --network rinkeby`

make sure account is funded!

## verify your contract on etherscan
`npx hh verify --network rinkeby --constructor-args scripts/arguments.ts INSERT-CONTRACT-ADDRESS-HERE`
view verified contract on etherscan: https://rinkeby.etherscan.io/address/INSERT-CONTRACT-ADDRESS-HERE#code

