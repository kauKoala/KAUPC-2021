<template>
  <div class="w-screen sm:py-5">
    <Hero />
    <Introduction />
    <Regulation />
    <Apply />
  </div>
</template>

<script>
export default {
  components: {
    Hero: () => import("~/components/hero"),
    Introduction: () => import("~/components/introduction"),
    Regulation: () => import("~/components/regulation"),
    Apply: () => import("~/components/apply")
  }
};
</script>
