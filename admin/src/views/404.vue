<template>
    <el-result icon="warning" title="404" sub-title="The page does not exist :(">
        <template #extra>
            <el-button type="primary" @click =" $router.push('/home')">Back</el-button>
        </template>
    </el-result>
</template>


<script setup lang="ts" name="404">














</script>




<style scoped></style>