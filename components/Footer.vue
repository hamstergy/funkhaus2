<template>
  <div class="footer">
    <h2 class="footer-link">INSTAGRAM</h2>
    <h2 class="footer-link">CONTACT</h2>
  </div>
</template>

<script>
  export default {
    name: "FooterApp",
  }
</script>

<style lang="scss" scoped>
  .footer {
    position: fixed;
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    padding: 30px 50px 50px;
    bottom: 0;
    width:100%;
    &-link {
      /*margin: auto;*/
      color: #FFFFFF;
      font: bold 14px/18px 'Lota Grotesque Alt';
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

</style>
