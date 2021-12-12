async function main() {
    const FeatureToggle = await ethers.getContractFactory("FeatureToggle");
    const deployedContract = await FeatureToggle.deploy();

    console.log("FeatureToggle contract deployed to:", deployedContract.address);
    return deployedContract.address;
}

main()
.then(() => process.exit(0))
.catch(
    (error) => {
        console.error(error);
        process.exit(1);
    }
);