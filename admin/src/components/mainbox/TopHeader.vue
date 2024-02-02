<template>



    <el-header>

      
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
        router
      >


        <el-menu-item index="sharedCenter">Shared Center</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="show">Workspace</el-menu-item>
        <el-sub-menu index="2">
          <template #title>
              Personal Center
          </template>
          <el-menu-item index="personalCenter" disabled>
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
                      <template #default>
                      <div> Comming  S∞N</div>
                      </template>
                      <template #reference>
                      <div>Personal Center</div>
                      </template>
                  </el-popover>
          </el-menu-item>
          <el-menu-item index="/login" @click="logout">Logout</el-menu-item>
          
        </el-sub-menu>
      </el-menu> 
    </el-header>
    

</template>


<script setup lang="ts" name="TopHeader">

import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import router from '@/router';

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key)
}

function logout(){
    
    localStorage.clear();
    router.push("/login")

}




</script>




<style scoped>


.flex-grow {
  flex-grow: 1;
}








</style>