<template>
  <div class="h-full">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
export default {
  components: {
    BaseHeader: () => import("~/components/header")
  },
  name: "BaseLayout"
};
</script>

<style></style>
