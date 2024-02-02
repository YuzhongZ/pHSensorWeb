<template>
  <div style="display: flex; justify-content: flex-end;">

    <uploadData></uploadData>

  </div>


  <div>

    <el-table 
        :data="PhStore.showData" 
        style="width: 100%;"
    >
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

        <!-- Location -->
        <el-table-column label="Location" width="180">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span>{{ scope.row.address }}</span>
            </div>
          </template>
        </el-table-column>

        <!-- isShared -->
        <el-table-column label="Shared" width="100">
          <template #default="scope">
            <div style="display: flex; align-items: center">

              <el-switch
                v-model="scope.row.isShared"
                class="mt-2"
                style="--el-switch-on-color: #13ce66;"
                inline-prompt
                :active-icon="Check"
                :inactive-icon="Close"  
                @change="handleIsShared(scope.$index, scope.row)"
              />

            </div>
          </template>
        </el-table-column>


        <el-table-column label="Operations" width="100">
          <template #default="scope">
            <!-- <el-button
                  size="small"
                  type="warning"
                  @click="handleUpdate(scope.$index)"
                  >Edit</el-button
                > -->
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index)"
              >Delete</el-button
            >
            
          </template>
        </el-table-column>


      </el-table>

  </div>

</template>


<script setup lang="ts" name="Show">

import { type phDataRec, type phDataRecUpload } from '@/types/data'
import { Check, Close, } from '@element-plus/icons-vue'
import { usePhStore } from '@/stores/usePhStore'
import uploadData from './uploadData.vue'


const PhStore = usePhStore()


// load data from database
PhStore.initialUser()

const handleDelete = (index: number) => {

    PhStore.deleteOne(index)
}

const handleIsShared = (index: number, row: phDataRec) => {
    PhStore.updateOne(index,
      PhStore.showData[index])
}

const handleUpdate = (index: number, row: phDataRec) => {
  PhStore.updateOne(index,
    PhStore.showData[index])
}

// const handleUpload = ()

// const handleUpload = (index: number, row: phDataRec) => {
//   console.log(index, row)
//   PhStore.showData.splice(index, 1)
//   PhStore.deleteOne(index)
// }





</script>








<style scoped>


:deep(.el-table)  {
  overflow: visible;
  background-color: white;
}
 
:deep(.el-table__header-wrapper)  {
  position: sticky;
  top: 0px;
  z-index: 10;
}





</style>

