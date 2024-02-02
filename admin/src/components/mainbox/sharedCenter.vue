<template>
    <div>
        <el-table :data="PhStore.showData" style="width: 100%;">
            <!-- date -->
            <el-table-column fixed label="Date" width="100">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <span>{{ scope.row.date }}</span>
                    </div>
                </template>
            </el-table-column>

            <!-- pH value -->
            <el-table-column label="pH Value" width="80">
                <template #default="scope">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto">
                        <template #default>
                            <div>test here</div>
                            <div>address: {{ scope.row.address }}</div>
                        </template>
                        <template #reference>
                            <el-tag>{{ scope.row.ph }}</el-tag>
                        </template>
                    </el-popover>
                </template>
            </el-table-column>

            <!-- (latitude, longitude) -->
            <el-table-column label=" Latitude & Longitude" width="180">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <span>( {{ scope.row.latitude }} , {{ scope.row.longitude }} )</span>
                    </div>
                </template>
            </el-table-column>

            <!-- Address -->
            <el-table-column label="Location" width="180">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <span>{{ scope.row.address }}</span>
                    </div>
                </template>
            </el-table-column>

            <!-- username -->
            <el-table-column label="Contributor" width="100">
                <template #default="scope">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto">
                            <template #default>
                                <div>username: {{ scope.row.username }}</div>
                                <div>email: {{ scope.row.email }}</div>
                            </template>
                            <template #reference>
                                <el-tag>{{ scope.row.username }}</el-tag>
                            </template>
                        </el-popover>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


<script setup lang="ts" name="sharedCenter">

import { type phDataRec } from '@/types/data'
import { usePhStore } from '@/stores/usePhStore'



const PhStore = usePhStore()

// load data from database
PhStore.getAllData()



</script>








<style scoped>
:deep(.el-table) {
    overflow: visible;
    background-color: white;
}

:deep(.el-table__header-wrapper) {
    position: sticky;
    top: 0px;
    z-index: 10;
}
</style>

