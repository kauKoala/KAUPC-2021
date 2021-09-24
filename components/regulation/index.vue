<template>
  <div class="flex-1 flex flex-col items-center justify-center">
    <div class="container">
      <div class="p-7">
        <h1 class="text-2xl md:text-3xl font-bold">📖 대회 규정</h1>
        <h6 class="text-xs md:text-sm text-gray-500 mt-3 md:mt-2">
          ※ 대회 운영 및 평가와 관련된 안내입니다. 접수 전 꼭 읽어주세요!
        </h6>
        <div class="bg-kau-main border-line-thin" />
        <section class="mt-4">
          <h2 class="text-xl font-bold">✅ 대회 방식</h2>
          <ul class="list-disc ml-8 mt-2 text-sm md:text-base">
            <li class="my-4">
              본 대회는 <span class="font-bold text-kau-main">3인 1조</span>로
              진행되며, 약 4시간동안 주어진 프로그래밍 문제를 해결하는
              대회입니다.
            </li>
            <li class="my-4">
              사용 가능 언어는 C11, C++14, Java (OpenJDK), Kotlin (JVM), Python
              3, PyPy3 로 제한되며, 이외의 언어로는 참여가 어려울 수 있습니다.
            </li>
            <li class="my-4">
              팀원이 아닌 사람과 문제에 대해 어떤 형태로든 커뮤니케이션하는 것은
              부정행위로 간주됩니다.
            </li>
            <li class="my-4">
              위의 유의사항을 위반하는 경우 부정행위로 간주되어 실격되며,
              수상했더라도 수상이 취소될 수 있습니다.
            </li>
            <li class="my-4">
              기타 명시되지 않은 사항은 운영진의 판단에 따라 결정할 수 있습니다.
            </li>
            <li class="my-4">
              대회 전 과정은 온라인으로 진행되며, 대회 관련 문의는 페이지 하단
              채널톡 또는 소프트웨어학과 학생회를 통해 건의할 수 있습니다.
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regulation"
};
</script>

<style></style>
