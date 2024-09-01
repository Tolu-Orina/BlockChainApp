App = {
    load: async () => {
        // Loading App...
        console.log('App loading...');

        await App.loadWeb3();
        await App.loadAccounts();
        await App.loadContract();
    },

    loadWeb3: async () => {
        // if (window.ethereum) {
        //     window.web3 = new Web3(window.ethereum);
        //     // await window.ethereum.enable();
        //     await window.web3.eth_requestAccounts;
        // } else if (window.web3) {
        //     window.web3 = new Web3(window.web3.currentProvider);
        //     // Accelerated connection
        //     // await window.web3.eth.requestAccounts();
        // } else {
        //     console.log('No Web3 detected. Falling back to Metamask.');
        //     // window.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY'));
        // }

        web3 = new Web3('http://localhost:7545');
    },

    loadAccounts: async () => {
        App.account = await web3.eth.getAccounts();
        console.log(App.account[0]);
    },

    loadContract: async () => {
        const todoList = await $.getJSON('TodoList.json');

        
        // App.contract = await new web3.eth.Contract(
        //     abi,
        //     '0x740d585993e8586d8953492851f7757412251080' // Contract address
        // );

        App.contract.TodoList = await TruffleContract( todoList );
        App.contract.TodoList.setProvider(web3.currentProvider);

        console.log(todoList);
    }
    
}

$(() => {
    $(window).load(() => {
        App.load()
    }
    )    
})