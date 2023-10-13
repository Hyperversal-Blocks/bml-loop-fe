// useMetamask.js
import { ref } from 'vue';
import Web3 from 'web3';

export default function useMetamask() {
    const account = ref(null);
    const ethEnabled = ref(false);

    const connectMetamask = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            try {
                await window.ethereum.request({method: 'eth_requestAccounts'});
                account.value = (await window.web3.eth.getAccounts())[0];
                ethEnabled.value = true;
            } catch (e) {
                console.error("User denied account access");
            }
        } else {
            console.error("No web3? Consider trying MetaMask!");
        }
    };

    return {
        account,
        ethEnabled,
        connectMetamask,
    };
}
