<template>
  <div
    class="sponsor-bottom text-2xs md:text-xs mt-8 flex items-center mb-4 border rounded-md border-gray-300 p-5"
  >
    <div>주관 : 한국항공대학교 소프트웨어학과</div>
    <div class="flex items-center">
      <div>후원 :</div>
      <div class="flex">
        <img src="~/assets/image/d2.png" width="120" height="20" class="mx-2" />
        <a href="https://startlink.io/" target="_blank"
          ><img src="~/assets/image/startlink.png" width="120" class="mx-2" />
        </a>
      </div>
    </div>
  </div>
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
