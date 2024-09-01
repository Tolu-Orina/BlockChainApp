window.addEventListener('load', async () => {
    // Mordern dapp browsers....
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);

        try {
        // Request user account access if needed
            await ethereum.enable();

            web3.eth.sendTransaction({/* .. */})

            // window.ethereum.enable().then(accounts => {
            //     // Use the account to interact with contracts
            //     console.log("Connected to Ethereum network using account: ", accounts[0]);
            // });
        } catch (error) {
            console.log("User denied account access");
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        // Use the account to interact with contracts
        console.log("Connected to Ethereum network using injected web3");

        web3.eth.sendTransaction({/* .. */})
    }
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});