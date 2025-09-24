<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="flex-grow-1">
      <header>
        <NavBar class="bg-transparent" />
      </header>

      <router-view />
    </div>

    <footer class="footer py-3 text-center bg-transparent textNav">
      <div class="container">
        <span>© 2025 www.homegarden.com - All Rights Reserved.</span>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style scoped>
.footer {
  color: var(--secondo);
}
</style>
