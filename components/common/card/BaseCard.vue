<template>
  <section
    class="card relative shadow-xl border-t border-l border-r rounded-lg flex-1 overflow-visible md:overflow-hidden hover:scale-105 transition-transform"
  >
    <slot />
    <div
      class="hidden md:flex items-center justify-end absolute h-12 w-full bottom-0 bg-kau-main text-white pr-5 font-bold"
    >
      더 알아보기<span class="ml-2 inline-block">&#10142;</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "BaseCard"
};
</script>

<style>
.card {
  background-color: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(90%);
}
</style>
