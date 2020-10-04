<template>
  <div id="app">
    <MainLayout>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout";

export default {
  components: {
    MainLayout,
  },
};
</script>

<style lang="scss"></style>
