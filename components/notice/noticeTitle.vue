<template>
  <h2 class="sm:text-lg md:text-xl font-semibold mb-2">{{ title }}</h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style></style>
