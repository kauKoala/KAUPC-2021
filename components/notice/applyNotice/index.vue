<template>
  <Card>
    <section class="p-4 md:p-8">
      <NoticeTitle title="👨🏻‍💻 참가 신청" />
      <div class="flex flex-col justify-between items-center">
        <a target="_blank" :href="googleFormLink" class="flex-1 px-2 w-full">
          <button
            class="text-xs md:text-xs bg-white border-kau-main border rounded-md p-2 w-full font-nanum"
          >
            참가 신청 구글 폼 링크
          </button></a
        >

        <a target="_blank" :href="d2FormLink" class="flex-1 px-2 w-full">
          <button
            class="mt-3 text-xs md:text-xs bg-white border-kau-main border rounded-md p-2 w-full font-nanum"
          >
            네이버 D2 뉴스레터 신청 링크
          </button>
        </a>
      </div>
    </section>
  </Card>
</template>

<script>
import { GOOGLE_FORM_LINK, D2_FORM_LINK } from "~/config/constants";

export default {
  components: {
    Card: () => import("~/components/common/card/BaseCard"),
    NoticeTitle: () => import("../noticeTitle")
  },
  data: () => ({
    d2FormLink: D2_FORM_LINK,
    googleFormLink: GOOGLE_FORM_LINK
  })
};
</script>

<style></style>
