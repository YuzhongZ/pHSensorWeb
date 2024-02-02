<template>

    <div class="common-layout">
      <div style="display:flex; flex-direction: column; margin: 0 auto;">
      <el-container direction="vertical">
        <TopHeader class="header">
          
        </TopHeader>
        <el-main class="main">
          <RouterView></RouterView>
        </el-main>
        
      </el-container>
      </div>
    </div>

</template>


<script setup lang="ts" name="MainBox">

import { RouterView } from 'vue-router';
import Show from '@/components/mainbox/Show.vue';
import TopHeader from '@/components/mainbox/TopHeader.vue';



</script>




<style scoped>


.common-layout {
  
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;

}

.el-container{

  display: inline-flex;
  flex-direction: column;
  height:100%
  /* width: 100vw;
  height: 100vh; */
  /* margin: 0 auto; */
}


/* .header{
  display: flex;

  justify-content: center;
  align-items: center;
  margin: auto;
  flex-grow: 1;
} */

.header{
  padding: 0;
  margin-bottom: 2%;
}


.main{
  /* display: flex;
  justify-content: center; */
  margin: auto;
  padding: 0;
  /* flex-flow: 1; */
  

}





</style>