<script setup>

</script>

<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/AV-Logo.png" alt="logo">
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
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  width: 100vh;
  overflow: hidden;
  min-height: calc(2rem + 32px);
  padding: 1rem;
  background-color: var(--dark);
  color: var(--light);

  transition: 0.2s ease-out;

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

  .menu {
    margin-left: 1rem;

    .button {
      display: inline-flex;
      flex-direction: row;
      text-decoration: none;
      padding: 1rem 1rem;
      transition: 0.2s ease-out;
      align-items: center;

      .text {
        color: var(--light);
        transition: 0.2s ease-out;
        padding: 1rem;
        align-self: center;
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
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 999;
  }

}
</style>