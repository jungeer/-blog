<template lang="html">
  <div class="content">
    <Article></Article>
    <Log></Log>
  </div>
</template>

<script>
import Article from './Article'
import Log from './Log'

export default {
  components: {
    'Article': Article,
    'Log': Log
  }
}
</script>

<style lang="css">
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    height: 300px;
  }
</style>
