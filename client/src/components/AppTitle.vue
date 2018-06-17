<template>
  <h1 class="header">LATVJU ZĪMES</h1>
</template>

<script>
export default {
  name: 'AppTitle'
}
</script>

<style lang="scss" scoped>
.header {
  font-family: 'Amatic SC', cursive;
  font-size: calc(30px + 5vw);
  text-align: center;
}

@media (min-width: 600px) {
  .header {
    font-size: 60px;
  }
}
</style>
