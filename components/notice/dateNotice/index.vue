<template>
  <Card>
    <section class="p-4 md:p-8">
      <NoticeTitle title="⏰ 대회 일시" />
      <section class="font-spoqa">
        <div class="text-sm md:text-base">
          <span class="font-bold text-kau-main">접수 마감</span> : 10월 27일
          (목) 자정
        </div>
        <div class="text-sm md:text-base">
          <span class="font-bold text-kau-main">대회일</span> : 10월 30일 (토) /
          14:00 ~ 18:00
        </div>
      </section>
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
