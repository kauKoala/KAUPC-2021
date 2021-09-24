<template>
  <Card>
    <section class="p-4 md:p-8">
      <NoticeTitle title="✅ 참가 자격" />
      <p class="text-sm md:text-base">
        2021년도 2학기 한국항공대학교에 재학중인 모든
        <span class="font-bold text-kau-main">학부생</span> (전공 무관, 대학원생
        참가 불가)
      </p>
    </section>
  </Card>
</template>

<script>
export default {
  components: {
    Card: () => import("~/components/common/card/BaseCard"),
    NoticeTitle: () => import("../noticeTitle")
  }
};
</script>

<style></style>
