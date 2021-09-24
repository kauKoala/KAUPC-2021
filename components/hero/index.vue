<template>
  <div class="hero flex-1 flex flex-col items-center justify-center">
    <section class="mb-7">
      <h1
        class="flex flex-col justify-center items-center md:text-4xl font-semibold text-xl"
      >
        <p class="hero-title font-montserrat text-7xl mb-7">
          <span class="font-montserrat text-kau-main">KAU</span>PC 2021
        </p>
        <p class="hero-subtitle">제 1회 한국항공대학교 프로그래밍 경진대회</p>
      </h1>
      <BaseLine />
    </section>
    <section>
      <Notice />
    </section>
    <section>
      <Sponsor />
    </section>
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
}
.hero-title {
  margin-left: 32px;
}

@media screen and (max-width: 320px) {
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
}

@media screen and (max-width: 375px) {
  .hero-title {
    margin-bottom: 12px;
    margin-top: 4rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>
