<template>
  <div id="app">
       <yummy-header></yummy-header>
       <router-view></router-view>
       <yummy-footer></yummy-footer>
  </div>
</template>

<script>
import yummyHeader from './components/yummyHeader.vue'
import yummyFooter from './components/yummyFooter.vue'

export default {
  name: 'app',
  components: {
    yummyHeader,
    yummyFooter,
  },
}
</script>

<style>
#app {
  max-width: 510px;
  margin: 50px auto;
}
</style>
