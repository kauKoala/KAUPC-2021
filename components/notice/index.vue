<template>
  <div>
    <a href="#about" />
    <div
      class="notice-container flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0"
    >
      <DateNotice />
      <QualificationNotice />
      <RuleNotice />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    DateNotice: () => import("./dateNotice"),
    QualificationNotice: () => import("./qualificationNotice"),
    RuleNotice: () => import("./ruleNotice")
  }
};
</script>

<style scoped>
.notice-container {
  width: 85vw;
  height: 210px;
}

@media screen and (max-width: 768px) {
  .notice-container {
    width: 85vw;
    height: 90%;
  }
}
</style>
