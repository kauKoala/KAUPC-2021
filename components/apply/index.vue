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
        <div class="bg-kau-main border-line-thin" />
        <section class="mt-4">
          <h2 class="text-xl font-bold">✅ 참가자 유의사항</h2>
          <ul class="list-disc ml-8 mt-2 text-sm md:text-base">
            <li class="my-4">
              본 대회는 대학원생의 참여가 불가능하며, 한국항공대학교 학부 재학생
              신분으로 제한됩니다.
            </li>
            <li class="my-4">
              본 대회는
              <span class="text-naver-main font-nanum font-bold">Naver D2</span
              >의 후원으로 진행되어, Naver D2에서 제공하는 네이버 채용정보 관련
              메일링 수신에 동의해야 합니다.
            </li>
            <li class="list-none flex justify-center my-6">
              <button
                class="flex justify-center items-center hover:scale-105 transition-all bg-naver-main px-5 py-2 text-white rounded-md shadow-lg"
              >
                <img
                  src="~/assets/image/naver.svg"
                  width="20"
                  alt="Naver D2"
                  class="mr-3 rounded-sm"
                />
                <span>Naver D2 메일링 신청하기</span>
              </button>
            </li>
            <li class="my-4">
              대회 상위 10명은
              <span class="font-bold text-gray-600"
                >경인지역 연합 프로그래밍 경시대회
                <span class="text-blue-400 font-bold">Shake!</span></span
              >
              본선 진출의 기회가 주어집니다.
            </li>
          </ul>
        </section>
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
