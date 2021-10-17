<template>
  <div
    class="sponsor-bottom text-xs md:text-sm shadow-lg mt-8 flex flex-col items-start justify-center mb-4 border rounded-md border-gray-300 pt-5 px-5 pb-3"
  >
    <ul>
      <li class="flex items-center mb-2">
        <span class="font-semibold border-l-4 border-kau-main pl-3 w-16"
          >주관 :</span
        >
        <div class="text-xs md:text-base leading-4">
          한국항공대학교 소프트웨어학과,
          <br class="inline-block lg:hidden"/>
          한국항공대 알고리즘 학회
          <span class="font-bold">Koala</span>
        </div>
      </li>
      <li class="flex items-center my-2 mt-4 md:mt-0">
        <span class="font-semibold border-l-4 border-kau-main pl-3 w-16"
          >후원 :
        </span>
        <div class="flex flex-col md:flex-row items-center ml-5 md:ml-0">
          <img
            src="~/assets/image/d2.png"
            class="mx-2 naver-img mb-2 lg:mb-0"
          />
          <a href="https://startlink.io/" target="_blank"
            ><img
              src="~/assets/image/startlink.png"
              width="120"
              class="mx-2 startlink-img"
            />
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sponsor"
};
</script>

<style scoped>
.naver-img {
  width: 160px;
  height: 35px;
}
.startlink-img {
  width: 140px;
  height: 35px;
  margin-bottom: 12px;
}
.sponsor-bottom {
  background-color: rgba(255, 255, 255, 0.92);
  max-width: 800px;
}
@media screen and (max-width: 768px) {
  .sponsor-bottom {
    width: 80vw;
    max-width: 80vw;
  }
  .naver-img {
    width: 120px;
    height: 25px;
  }
  .startlink-img {
    width: 110px;
    height: 25px;
  }
}
</style>
