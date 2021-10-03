<template>
  <div
    class="view-container h-screen flex-1 flex flex-col items-center justify-center"
    :data-aos="isMobile ? null : 'zoom-in'"
    data-aos-duration="1200"
    id="apply"
  >
    <div class="container">
      <div class="p-7 pb-3">
        <h1 class="text-xl md:text-3xl font-bold">📢 대회 접수</h1>
        <div class="bg-kau-main border-line-thin" />
        <section class="mt-4">
          <h2 class="text-xl font-bold">✅ 참가자 유의사항</h2>
          <ul class="list-disc ml-6 md:ml-8 mt-2 text-sm md:text-base">
            <li class="my-4">
              본 대회는 대학원생의 참여가 불가능하며, 한국항공대학교 학부 재학 &
              휴학생 신분으로 제한됩니다.
            </li>
            <li class="my-4">
              대회에서 문제를 가장 많이 푼 10인은
              <span class="font-bold text-gray-600"
                >경인지역 연합 프로그래밍 경시대회
                <span class="text-blue-400 font-bold">Shake!</span></span
              >
              본선 진출의 기회가 주어집니다.
            </li>
            <li class="my-4">
              본 대회는
              <span class="text-naver-main font-nanum font-bold">Naver D2</span
              >의 후원으로 진행되어, 경품 수령을 위해서는 Naver D2에서 제공하는
              네이버 채용정보 관련 메일링 수신에 동의해야 합니다.
            </li>
            <li class="list-none flex justify-center my-6 mr-6">
              <a target="_blank" :href="d2FormLink" class="flex-1 px-2 w-full">
              <button
                class="flex justify-center items-center hover:scale-105 transition-all bg-naver-main px-5 py-2 text-white rounded-md shadow-lg w-64 lg:w-80 lg:text-lg"
              >
                <img
                  src="~/assets/image/naver.svg"
                  width="20"
                  alt="Naver D2"
                  class="mr-3 rounded-sm"
                />
                <span>Naver D2 메일링 신청하기</span>
              </button></a>
            </li>
            <li class="my-4">
              참가 접수는 10월 27일(수) 자정까지 가능하며, 접수 마감기한을 넘긴
              경우에는 대회 참여가 어려울 수 있습니다.
            </li>
            <li class="list-none flex justify-center my-6 mr-6">
              <a target="_blank" :href="googleFormLink" class="flex-1 px-2 w-full">
              <button
                class="flex justify-center items-center hover:scale-105 transition-all bg-blue-500 px-5 py-2 text-gray-50 rounded-md shadow-lg w-64 lg:w-80 lg:text-lg"
              >
                <img
                  src="~/assets/image/trophy.svg"
                  width="20"
                  alt="Apply KAUPC 2021"
                  class="mr-3 rounded-sm"
                />
                <span>KAUPC 2021 접수하기</span>
              </button></a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import checkMobileView from "~/utils/checkMobileView";
import { GOOGLE_FORM_LINK, D2_FORM_LINK } from "~/config/constants";

export default {
  name: "apply",
  components: {
    Question: () => import("~/components/question"),
    Sponsor: () => import("~/components/sponsor")
  },
  computed: {
    isMobile() {
      return checkMobileView();
    }
  },
  data: () => ({
    d2FormLink: D2_FORM_LINK,
    googleFormLink: GOOGLE_FORM_LINK
  })
};
</script>

<style></style>
