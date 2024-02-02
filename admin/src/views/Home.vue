<template>

<h1>welcame {{ UserStore.username }} Home</h1>

    


</template>


<script setup lang="ts" name="Home">


import { useUserStore } from '@/stores/userStore'
const UserStore = useUserStore()









</script>




<style scoped>













</style>