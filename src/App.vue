<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="header-gradient text-white" elevated>
      <q-toolbar>
        <q-btn flat round icon="menu" @click="toggleLeftDrawer"></q-btn>        <q-icon name="" />
        <q-toolbar-title class="q-ml-xl text-center">Aplikasi Perkiraan Cuaca</q-toolbar-title>
        <q-space />
        <q-menu v-model="tasksMenu" anchor="top-left" transition-show="slide-down" transition-hide="slide-up">
          <q-list>
            <q-item to="/" tag="router-link" active-class="q-item-active" clickable>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-separator />
            <q-item to="/task1" tag="router-link" active-class="q-item-active" clickable>
              <q-item-section>Tugas 1</q-item-section>
            </q-item>
            <q-item to="/task2" tag="router-link" active-class="q-item-active" clickable>
              <q-item-section>Tugas 2</q-item-section>
            </q-item>
            <q-item to="/task3" tag="router-link" active-class="q-item-active" clickable>
              <q-item-section>Tugas 3</q-item-section>
            </q-item>
            <q-item to="/task4" tag="router-link" active-class="q-item-active" clickable>
              <q-item-section>Tugas 4</q-item-section>
            </q-item>
            <q-item to="/task5" tag="router-link" active-class="q-item-active" clickable>
              <q-item-section>Tugas 5</q-item-section>
            </q-item>
            <q-item to="/task6" tag="router-link" active-class="q-item-active" clickable>
              <q-item-section>Tugas 6</q-item-section>
            </q-item>
            <q-item to="/task7" tag="router-link" active-class="q-item-active" clickable>
              <q-item-section>Tugas 7</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        <q-space />
      </q-toolbar>
    </q-header>

    <q-page-container class="background-image">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </q-page-container>

    <q-footer class="footer-gradient text-white text-center q-pa-md">
      <q-toolbar-title>&copy; 2024 Weather App</q-toolbar-title>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      tasksMenu: false,
    }
  },
  methods: {
    toggleLeftDrawer() {
      this.drawer = !this.drawer;
    },
    toggleTasksMenu() {
      this.tasksMenu = !this.tasksMenu;
    },
    toggleDarkMode() {
      this.$q.dark.toggle();
    },
  }
}
</script>

<style>
.header-gradient {
  background: linear-gradient(135deg, #236026, #60ea67);
}

.drawer-gradient {
  background: linear-gradient(135deg, #fafafa, #707b89);
}

.footer-gradient {
  background: linear-gradient(135deg, #236026, #60ea67);
}

.q-toolbar-title {
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
}

.q-footer {
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
}

.q-item-active {
  background-color: rgba(255, 255, 255, 0.1);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.background-image {
  background: url(src/assets/aw.jpg) center center fixed;
  background-size: cover;
}
</style>
