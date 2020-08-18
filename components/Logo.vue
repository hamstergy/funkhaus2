<template>
  <img class="logo" src="~assets/Logo.png" alt="">
</template>

<script>
  export default {
    name: "Logo",
  }
</script>

<style lang="scss" scoped>
  .logo {
    z-index: 9999;
    animation: 1s appear;
    width: 41px;
    height: 41px;
  }
  @keyframes appear {
    0% {
      opacity: 0;
    }
  }
</style>
