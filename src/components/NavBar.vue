<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div
      class="container-fluid position-relative d-flex align-items-center"
      style="background-color: rgb(3, 21, 2, 0.9)"
    >
      <router-link
        :to="{ name: 'homePage' }"
        class="navbar-brand d-flex align-items-center"
      >
        <img src="../assets/logoSpesso.png" class="me-2 logo" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-center mb-md-0 mb-3"
        id="navbarNav"
        ref="navCollapse"
      >
        <ul class="navbar-nav flex-column flex-lg-row text-center">
          <li class="nav-item">
            <router-link
              class="textColor textNav rounded px-3 m-1 nav-link"
              :to="{ name: 'homePage' }"
              @click="closeOnMobile"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="textColor textNav rounded px-3 m-1 nav-link"
              :to="{ name: 'catalogo' }"
              @click="closeOnMobile"
              >Serra</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="textColor textNav rounded px-3 m-1 nav-link"
              :to="{ name: 'consiglia' }"
              @click="closeOnMobile"
              >Consiglia</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="textColor textNav rounded px-3 m-1 nav-link"
              :to="{ name: 'giardino' }"
              @click="closeOnMobile"
            >
              Giardino
              <span class="ms-2 contatore p-2 rounded">{{ userGarden }}</span>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="ms-auto d-none d-lg-block text-light">
        <router-link
          :to="{ name: 'homePage' }"
          class="text-light text-decoration-none"
        >
          <h2>HomeGarden</h2>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    userGarden() {
      return this.$store.getters.userGarden;
    },
  },
  methods: {
    closeOnMobile() {
      const toggler = this.$el.querySelector(".navbar-toggler");
      if (toggler && window.getComputedStyle(toggler).display !== "none") {
        toggler.click();
      }
    },
  },
};
</script>
