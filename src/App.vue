<template>
  <div id="app">
       <yummyHeader></yummyHeader>
       <yummyNav></yummyNav>
       <yummyFooter></yummyFooter>
        <yummyList></yummyList>
  </div>
</template>

<script>
import yummyList from './components/yummyList.vue'
import yummyHeader from './components/yummyHeader.vue'
import yummyNav from './components/yummyNav.vue'
import yummyFooter from './components/yummyFooter.vue'

export default {
  name: 'app',
  components: {
    'yummyList' : yummyList,
    'yummyHeader' : yummyHeader,
    'yummyNav' : yummyNav,
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
