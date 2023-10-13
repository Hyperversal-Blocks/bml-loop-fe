// useMetamask.js
import {ref, watch, onMounted, onUnmounted, nextTick} from 'vue';
import Web3 from 'web3';

export default function useMetamask() {
    const account = ref(null);
    const ethEnabled = ref(false);
    let poller = null;
    const showError = ref(false);

    const connectMetamask = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                account.value = (await window.web3.eth.getAccounts())[0];
                ethEnabled.value = true;
                showError.value = false;
            } catch (e) {
                console.error("User denied account access");
            }
        } else {
            console.error("No web3? Consider trying MetaMask!");
            showError.value = true;
            await nextTick();
            showError.value = true;
        }
    };

    const checkAccountChange = async () => {
        const accounts = await window.web3?.eth.getAccounts();
        if (account.value !== accounts[0]) {
            account.value = accounts[0] || null;
            ethEnabled.value = !!account.value;
        }
    };

    onMounted(() => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            poller = setInterval(checkAccountChange, 1000);
        }
    });

    onUnmounted(() => {
        if (poller) {
            clearInterval(poller);
        }
    });

    return {
        account,
        ethEnabled,
        connectMetamask,
        showError,
    };
}
