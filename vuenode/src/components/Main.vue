<template lang="html">
  <div class="main">
    <Nav></Nav>
    <Content></Content>
  </div>
</template>

<script>
import Nav from './Main/Nav'
import Content from './Main/Content'

export default {
  components: {
    'Nav': Nav,
    'Content': Content
  }
}
</script>

<style lang="css" scoped>
  .main {
    width: 1120px;
    min-height: 600px;
    border: 1px solid yellow;
    margin: 0 auto;
  }
</style>
