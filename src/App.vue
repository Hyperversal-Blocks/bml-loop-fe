
<script setup>
import Sidebar from './components/Sidebar.vue'
import Navbar from "@/components/Navbar.vue";

</script>

<template>
  <div class="app">
    <Navbar/>
    <Sidebar/>
    <router-view/>
  </div>
</template>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --less-dark: #40435C;
  --light: #f1f5f9;
  --sidebar-width: 300px;
  --navbar-width:150px
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>

