<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <el-row>
      <router-link to="/write"><el-button>Default</el-button></router-link>  
    </el-row>  
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
         <li v-for="i in count" v-bind:key=i class="list-item"> <router-link to="/view">아이템 {{i}}</router-link> </li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
  </div>
</template>

<script>
   export default {
    data () {
      return {
        cid: 0,
        count: 10,
        loading: false
      }
    },
    created: {

    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      }
    }
  }
</script>

<style>

</style>