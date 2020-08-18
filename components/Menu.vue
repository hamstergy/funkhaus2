<template>
  <div class="menu">
    <div class="menu" v-html='$store.state.title'></div>
  </div>
</template>

<script>
  export default {
    name: "MenuApp",
    components: {Logo}
  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 30px 50px 80px;
  }
  .title {
    margin: auto;
    font: 18px/22px 'RM Neue';
    color: #FFFFFF;
  }
</style>
