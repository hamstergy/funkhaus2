<template>
  <div class="header">
    <logo />
    <div class="menu">
      <div class="menu-left">
        <span class="text-left">EDITORS</span>
        <div class="line-left"></div>
      </div>
      <div class="line-center"></div>
      <div class="menu-right">
        <div class="line-right"></div>
        <span class="text-right">FINISHING</span>
      </div>
    </div>

  </div>
</template>

<script>
  import Logo from '~/components/Logo'
  export default {
    name: "HeaderApp",
    components: {Logo}
  }
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    padding: 50px 50px 80px;
    width:100%;
    @media only screen and (max-width: 600px) {
      padding: 30px 20px 30px;
    }
  }
  .menu {
    display: flex;
    color: #FFFFFF;
    font: bold 18px/79px 'Lota Grotesque Alt';
    @media only screen and (max-width: 600px) {
      font: bold 12px/38px 'Lota Grotesque Alt';
    }

    &-left {
      display: flex;
      -moz-transition: all .3s linear;
      -webkit-transition: all .3s linear;
      transition: all .3s linear;
      transform: translate(0px);

      &:hover {
        cursor: pointer;
        -moz-transition: all .3s linear;
        -webkit-transition: all .3s linear;
        transition: all .3s linear;
        transform: translate(-10px);
      }
    }

    &-right {
      display: flex;
      -moz-transition: all .3s linear;
      -webkit-transition: all .3s linear;
      transition: all .3s linear;
      transform: translate(0px);

      &:hover {
        cursor: pointer;
        -moz-transition: all .3s linear;
        -webkit-transition: all .3s linear;
        transition: all .3s linear;
        transform: translate(10px);
      }
    }
  }
  .text {
    &-left, &-right {
      line-height: normal;
    }
  }
  .line {
    &-left, &-right, &-center {
      margin: 10px 0;
      width: 35px;
      height: 0px;
      border-top: 1px solid #ffffff;
      @media only screen and (max-width: 600px) {
        width: 15px;
        margin: 5px;
      }
    }
    &-left {
      margin-left: 10px;
    }
    &-right {
      margin-right: 10px;
    }
    &-center {
      margin: 10px -10px;
      @media only screen and (max-width: 600px) {
        margin: 5px -20px;
        width: 20px;
      }
    }
  }
</style>
