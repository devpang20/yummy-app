<template>
  <div id="app">
       <yummyHeader></yummyHeader>
       <router-view></router-view>
       <yummyFooter></yummyFooter>
  </div>
</template>

<script>
import yummyHeader from './components/yummyHeader.vue'
import yummyFooter from './components/yummyFooter.vue'

export default {
  name: 'app',
  components: {
    'yummyHeader' : yummyHeader,
    'yummyFooter' : yummyFooter,
  }
}
</script>

<style>
#app {
  border: 1px solid #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>
