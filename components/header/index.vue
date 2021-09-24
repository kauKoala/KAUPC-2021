<template>
  <header
    class="fixed top-0 w-full shadow-lg h-16 bg-kau-main hidden md:flex items-center px-6 z-10"
  >
    <div class="flex-1 text-white flex justify-between">
      <div class="flex items-center">
        <img
          src="~/assets/image/logo.svg"
          width="24"
          class="inline-block mr-2 font-bold"
        /><span class="font-bold">제 1회 한국항공대 프로그래밍 경진대회</span>
      </div>
      <ul class="flex space-x-10">
        <li><a href="#about">대회 안내</a></li>
        <li>대회 규정</li>
        <li>참가 신청</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "BaseHeader"
};
</script>

<style scoped>
header {
  backdrop-filter: blur(80%) !important;
}
</style>
