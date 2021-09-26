<template>
  <div
    class="view-container h-screen flex-1 flex flex-col items-center justify-center"
    data-aos="zoom-in"
    data-aos-duration="1200"
    id="apply"
  >
    <div class="container">
      <div class="p-7 pb-3">
        <h1 class="text-2xl md:text-3xl font-bold">📢 대회 접수</h1>
        <h6 class="text-xs md:text-sm text-gray-500 mt-3 md:mt-2">
          ※ 모든 대회는 비대면 온라인 환경에서 진행되며, 대회 일시는 주최측
          사정에 의해 변경될 수 있습니다.
        </h6>
        <div class="bg-kau-main border-line-thin" />
        <div class="flex mt-3">
          <section class="intro-contents"></section>
        </div>
        <Question />
        <section></section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "apply",
  components: {
    Question: () => import("~/components/question")
  }
};
</script>

<style></style>
