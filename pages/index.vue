<template>
  <div class="w-screen">
    <Hero />
    <Introduction />
    <Regulation />
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    Hero: () => import("~/components/hero"),
    Introduction: () => import("~/components/introduction"),
    Regulation: () => import("~/components/regulation"),
    Hooper,
    Slide
  }
};
</script>
