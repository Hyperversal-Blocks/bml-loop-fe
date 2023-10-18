<script lang="ts" setup>
import {defineComponent} from 'vue';
import useMetamask from '@/composables/useWallet'; // Adjust path accordingly
import MetaMaskAlert from '@/views/web3/MetamaskAlert.vue'; // Update path as needed

const {connectMetamask, account, ethEnabled, showError} = useMetamask();
</script>

<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/bmlloop-Logo.png" alt="logo">
    </div>

    <div class="menu">
      <router-link class="button" to="/">
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/about">
        <span class="text">About</span>
      </router-link>
      <router-link class="button" to="/team">
        <span class="text">Team</span>
      </router-link>
      <router-link class="button" to="/contact">
        <span class="text">Contact</span>
      </router-link>
      <router-link class="button" to="/settings">
        <span class="text">Settings</span>
      </router-link>
    </div>

    <div class="launch">
      <button @click="connectMetamask" v-if="!ethEnabled" class="wallet-button">
        <span class="text">Connect Wallet</span>
        <img src="../assets/metamask-icon.png" alt="Connect Wallet" class="ico"/>
      </button>
      <p class="wallet-address" v-else>Your account: {{ account }}</p>
    </div>

  </header>
  <meta-mask-alert v-if="showError" @close="showError = false" />
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  min-height: calc(2rem + 32px);
  padding: 1rem;
  background-color: var(--dark);
  color: var(--light);

  .wallet-button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center; // Center the text horizontally
    position: relative; // Set to relative, so absolute positioning of children is relative to this element
    padding: 0;
  }

  .wallet-button .text {
    color: var(--light);
    transition: 0.5s ease-out;
    padding: 1rem;
    font-size: large;
  }

  .wallet-button .ico {
    position: absolute; // Position absolutely to overlay on top of text
    opacity: 0;
    transition: opacity .2s ease-in-out;
    height: 2rem;
    &:hover {
      transform: scale(1.1);
    }
  }

  .wallet-button:hover .text {
    opacity: 0;
  }

  .wallet-button:hover .ico {
    opacity: 1;
  }


  .logo {
    padding: 1rem;
    align-self: center;

    img {
      height: 2rem;
    }
  }

  .button .text {
    opacity: 1;
    transition: 0.3s ease-out;
  }

  .launch {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .menu {
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .button {
    text-decoration: none;
    padding: 1rem 1rem;
    transition: 0.2s ease-out;

    .text {
      color: var(--light);
      transition: 0.2s ease-out;
      padding: 1rem;
    }

    &:hover, &.router-link-exact-active {
      background-color: var(--dark-alt);

      .material-icons, .text {
        color: var(--primary);
      }
    }

    &.router-link-exact-active {
      border-bottom: 5px solid var(--primary);
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 999;
  }

}
</style>