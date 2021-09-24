<template>
  <div class="flex-1 flex flex-col items-center justify-center">
    <div class="container">
      <div class="p-7 pb-3">
        <h1 class="text-2xl md:text-3xl font-bold">📢 대회 안내</h1>
        <h6 class="text-xs md:text-sm text-gray-500 mt-3 md:mt-2">
          ※ 모든 대회는 비대면 온라인 환경에서 진행되며, 대회 일시는 주최측
          사정에 의해 변경될 수 있습니다.
        </h6>
        <div class="bg-kau-main border-line-thin" />
        <div class="flex mt-3">
          <section class="intro-contents">
            <Contestdate />
            <ContestReward />
          </section>
          <img src="~/assets/image/competition.svg" class="competition-image" />
        </div>
      </div>
      <div class="container-bottom-line h-2 w-full bg-kau-main"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "introduction",
  components: {
    BaseLine: () => import("~/components/common/line"),
    Notice: () => import("~/components/notice"),
    Contestdate: () => import("./contestDate"),
    ContestReward: () => import("./contestReward")
  }
};
</script>

<style scoped>
.intro-contents {
  flex: 2;
}

.competition-image {
  flex: 1;
  max-width: 450px;
  margin-right: 20px;
}

@media screen and (max-width: 1100px) {
  .competition-image {
    max-width: 280px;
  }
}

@media screen and (max-width: 900px) {
  .competition-image {
    display: none;
  }
  .container-bottom-line {
    display: none;
  }
}
</style>
