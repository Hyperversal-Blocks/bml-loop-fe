<script setup>
import {ref} from "vue";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value

  localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="toggle">
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">
          keyboard_double_arrow_right
        </span>
      </button>
    </div>

    <h3>New</h3>
    <div class="menu">
      <router-link class="button" to="/new/setup">
        <span class="material-symbols-outlined">counter_1</span>
        <span class="text">Setup</span>
      </router-link>
      <router-link class="button" to="/new/recruit">
        <span class="material-symbols-outlined">counter_2</span>
        <span class="text">Recruit</span>
      </router-link>
      <router-link class="button" to="/new/survey">
        <span class="material-symbols-outlined">counter_3</span>
        <span class="text">Survey</span>
      </router-link>
      <router-link class="button" to="/new/screening">
        <span class="material-symbols-outlined">counter_4</span>
        <span class="text">Screening</span>
      </router-link>
      <router-link class="button" to="/new/settings">
        <span class="material-symbols-outlined">counter_5</span>
        <span class="text">Settings</span>
      </router-link>
      <router-link class="button" to="/new/launch">
        <span class="material-symbols-outlined">counter_6</span>
        <span class="text">Launch</span>
      </router-link>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  background-color: var(--less-dark);
  color: var(--light);

  transition: 0.2s ease-out;

  .toggle {
    margin: 1rem;
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3, .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      .material-symbols-outlined {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover, &.router-link-exact-active {
        background-color: var(--dark-alt);

        .material-symbols-outlined, .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -2rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3, .button .text {
      opacity: 1;
    }

    .button {
      .material-symbols-outlined {
        margin-right: 1rem;
      }
    }
  }

  .flex {
    flex: 1 1 0;
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 999;
  }

}
</style>