<template>
     <nav class="menu-nav">
        <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple"><router-link to="/list/ko"><el-button style="padding:40px;" circle>한국</el-button></router-link></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"><router-link to="/list/jp"><el-button style="padding:40px;" circle>일본</el-button></router-link></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"><router-link to="/list/en"><el-button style="padding:40px;" circle>미국</el-button></router-link></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple"><router-link to="/list"><el-button style="padding:40px;" circle>메뉴</el-button></router-link></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"><router-link to="/list"><el-button style="padding:40px;" circle>메뉴</el-button></router-link></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"><router-link to="/list"><el-button style="padding:40px;" circle>메뉴</el-button></router-link></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple"><router-link to="/list"><el-button style="padding:40px;" circle>메뉴</el-button></router-link></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"><router-link to="/list"><el-button style="padding:40px;" circle>메뉴</el-button></router-link></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"><router-link to="/list"><el-button style="padding:40px;" circle>메뉴</el-button></router-link></div></el-col>
        </el-row>
      </nav> 
</template>

<script>
export default {
  
}
</script>

<style>
  .menu-nav{
    text-align: center;
     min-height: 500px;
  }
  .grid-content {
    border-radius: 4px;
   
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  
  
</style>