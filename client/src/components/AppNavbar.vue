<template>
  <nav class="navbar">
    <a class="navbar__links" href="#">HOME</a>
    <a class="navbar__links" href="#">GALLERY</a>
    <a class="navbar__links" href="#">CONTACTS</a>
    <a class="navbar__links" href="#">ABOUT</a>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<style lang="scss" scoped>
.navbar {
  display: grid;
  font-size: calc(10px + 1vw);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  &__links {
    transition: all .2s linear;
    &:hover {
      -webkit-transform: translate(0, 3px);
      -moz-transform: translate(0, 3px);
      -ms-transform: translate(0, 3px);
      -o-transform: translate(0, 3px);
      transform: translate(0, 3px);
    }
  }
}
</style>
