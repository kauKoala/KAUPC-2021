<template>
  <hooper :vertical="true" style="height: 100vh" :transition="+500">
    <slide class="block md:flex">
      <Hero />
    </slide>
    <slide class="block md:flex">
      <Introduction />
    </slide>
    <slide class="block md:flex">
      <Regulation />
    </slide>
  </hooper>
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
