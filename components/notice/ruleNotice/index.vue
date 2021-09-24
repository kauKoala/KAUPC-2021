<template>
  <Card>
    <section class="p-4 md:p-8">
      <NoticeTitle title="👨🏻‍💻 참가 신청" />
      <p class="text-sm md:text-base">
        참가 신청 구글 폼 링크 : <a>www.google.com</a>
      </p>
      <p class="text-sm md:text-base">
        네이버 D2 뉴스레터 신청 링크 : <a>www.d2.com</a>
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
