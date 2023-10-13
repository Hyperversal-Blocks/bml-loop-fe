<template>
  <div v-if="showAlert" class="overlay">
    <div class="alert-container">
      <p>Please consider trying MetaMask or another web3 provider to use this website fully.</p>
      <button @click="closeAlert">Close</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import useMetamask from '@/composables/useWallet';

export default {
  setup() {
    const { ethEnabled, connectMetamask } = useMetamask();
    const showAlert = ref(false);

    const closeAlert = () => {
      showAlert.value = false;
    };

    // Timeout to close the alert after e.g. 2 minutes (120000ms)
    let closeTimer = null;

    onMounted(() => {
      // When `ethEnabled` changes, check its state
      if (!ethEnabled.value) {
        showAlert.value = true;
        closeTimer = setTimeout(() => {
          showAlert.value = false;
        }, 120000); // Adjust the time as per your requirements
      }
    });

    onUnmounted(() => {
      clearTimeout(closeTimer); // Clean up the timer when the component is destroyed
    });

    return {
      showAlert,
      closeAlert,
      connectMetamask,
      ethEnabled,
    };
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.alert-container {
  background: #fff;
  padding: 2em;
  border-radius: 8px;
  text-align: center;
}
</style>
