<template>
  <div class="index">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'
export default {
  data () {
    return {
      a: 'aaa'
    }
  },
  components: {
    'Header': Header,
    'Main': Main,
    'Footer': Footer
  },
  methods: {
    show () {
      axios.get('http://127.0.0.1:3000')
        .then(e => {
          console.log(e)
          this.a = e.data.code
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
