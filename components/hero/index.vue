<template>
  <div
    class="view-container hero flex-1 flex flex-col items-center justify-center"
  >
    <section class="mb-7">
      <h1
        class="flex flex-col justify-center items-center md:text-4xl font-semibold text-xl"
      >
        <div class="hero-title drop-shadow-xl font-montserrat text-7xl mb-7">
          <span class="font-montserrat text-kau-main">KAU</span>PC 2021
        </div>
        <p class="hero-subtitle">제 1회 한국항공대학교 프로그래밍 경진대회</p>
      </h1>
      <BaseLine />
    </section>
    <section>
      <Notice />
    </section>
    <Sponsor />
  </div>
</template>

<script>
export default {
  components: {
    BaseLine: () => import("~/components/common/line"),
    Notice: () => import("~/components/notice"),
    Sponsor: () => import("~/components/sponsor")
  }
};
</script>

<style scoped>
.hero {
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.hero-title {
  margin-left: 32px;
  font-family: "Montserrat", sans-serif;
}

@media screen and (max-width: 320px) {
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
}

@media screen and (max-width: 900px) {
  .hero-title {
    margin-bottom: 12px;
    margin-top: 4rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
