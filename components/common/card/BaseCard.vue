<template>
  <section
    class="card relative shadow-xl border-t border-l border-r rounded-lg flex-1 overflow-visible md:overflow-hidden hover:scale-105 transition-transform"
  >
    <slot />
    <div
      class="hidden md:flex items-center justify-end absolute h-12 w-full bottom-0 bg-kau-main text-white pr-5 font-bold"
    >
      <a :href="target" class="cursor-pointer"
        >더 알아보기<span class="ml-2 inline-block">&#10142;</span></a
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    target: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.card {
  background-color: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(90%);
}

@media screen and (max-width: 800px) {
  .card {
    --d: 6px; /* folded part */
    --c: rgb(31, 31, 141); /* color */
    --f: 18px; /* ribbon font-size */
    position: relative;
  }
  .card::before {
    content: attr(data-ribbon);
    font-size: var(--f);
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(29.29%, -100%) rotate(45deg);
    transform-origin: bottom left;
    padding: 5px 35px calc(var(--d) + 5px);
    background: linear-gradient(rgba(0, 0, 0, 0.5) 0 0) bottom/100% var(--d)
      no-repeat var(--c);
    clip-path: polygon(
      0 0,
      100% 0,
      100% 100%,
      calc(100% - var(--d)) calc(100% - var(--d)),
      var(--d) calc(100% - var(--d)),
      0 100%
    );
    -webkit-mask: linear-gradient(
          135deg,
          transparent calc(50% - var(--d) * 0.707),
          #fff 0
        )
        bottom left,
      linear-gradient(-135deg, transparent calc(50% - var(--d) * 0.707), #fff 0)
        bottom right;
    -webkit-mask-size: 300vmax 300vmax;
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
  }
}
</style>
