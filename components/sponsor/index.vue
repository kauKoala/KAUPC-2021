<template>
  <p class="sponsor-bottom text-2xs md:text-lg flex items-center mt-12">
    본 대회는 한국항공대학교 소프트웨어학과,
    <img src="~/assets/image/d2.png" width="80" class="mx-2" />와
    <img src="~/assets/image/startlink.png" width="80" class="mx-2" />가
    후원합니다.
  </p>
</template>

<script>
export default {
  name: "sponsor"
};
</script>

<style>
@media screen and (max-width: 768px) {
  .sponsor-bottom {
    display: none;
  }
}
</style>
