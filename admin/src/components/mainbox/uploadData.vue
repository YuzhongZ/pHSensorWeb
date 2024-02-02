<template>

        <el-popover :visible="visible" width="20%" trigger="click" >
            <template #reference>
              <el-button type="primary" style="margin-right: 16px" @click="visible = true">Upload Data</el-button>
            </template>

            <div style="padding:10%;">
                  <el-form
              ref="ruleFormRef"
              :model="ruleForm"
              :rules="rules"
              label-width="auto"
              class="demo-ruleForm"
              size="default"
              status-icon
       
            >
              <el-form-item label="Username" prop="username">
                <el-input :placeholder="ruleForm.username" v-model="ruleForm.username" disabled />
              </el-form-item>
              <el-form-item label="Email" prop="email">
                  <el-input :placeholder="ruleForm.email" v-model="ruleForm.email" disabled />
              </el-form-item>
              <el-form-item label="pH value" prop="ph" required>
                <el-input-number v-model.number="ruleForm.ph" :precision="2" :step="0.1" :max="14" :min="0" />
                
              </el-form-item>
              <el-form-item label="Latitude" prop="latitude" required>
          
                    <el-input v-model.number="ruleForm.latitude" />
              </el-form-item>
              <el-form-item label="Longitude" prop="longitude" required>
                    <el-input v-model.number="ruleForm.longitude" type="number" />
              </el-form-item>

              <el-form-item label="Date" required>
                  <el-form-item prop="date">
                    <el-date-picker
                      v-model="ruleForm.date"
                      type="date"
                      label="Pick a date"
                      placeholder="Pick a date"
                      style="width: 100%"
                      editable
                      format="YYYY/MM/DD"
                      value-format="YYYY-MM-DD"
                      @blur="visible = true"
                    />
                  </el-form-item>
              </el-form-item>

              <el-form-item label="Share" prop="isShared">
                <el-switch v-model="ruleForm.isShared" />
              </el-form-item>
      
             <el-form-item label="Address" prop="address" required>
                <el-input v-model="ruleForm.address" type="textarea" />
              </el-form-item>

          
              <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                  Create
                </el-button>
                <el-button type="warning" plain @click="resetForm(ruleFormRef)">Reset</el-button>
                <el-button plain @click="visible = false">Cancel</el-button>
              </el-form-item>
          
            </el-form>
            </div>
        
          </el-popover>





</template>


<script setup lang="ts" name="uploadData">
import { usePhStore } from '@/stores/usePhStore';
import { useUserStore } from '@/stores/userStore';
import type { phDataRecUpload } from '@/types/data';
import { type FormInstance, type FormRules, ElMessage } from 'element-plus';
import { ref, reactive } from 'vue';

const UserStore = useUserStore()
const PhStore = usePhStore()

const visible = ref(false)

let currentDate = new Date(); // 获取当前日期的 Date 对象

let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();

let standardFormat = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;


const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<phDataRecUpload>({

    username: UserStore.username,
    email: UserStore.email,
    date: standardFormat,
    ph: 7,
    latitude: 0,
    longitude: 0,
    address: "",
    isShared: true,
})

const rules = reactive<FormRules<phDataRecUpload>>({

    date: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change',
        }
    ],
    address: [
        {
            required: true,
            message: 'Please input approximate location',
            trigger: 'change',
        },
    ],
    isShared: [
        {
            required: true,
        },
    ],
    ph: [
        {
            required: true,
            type: 'number',
            max: 14,
            min: 0,
            message: 'range in 0 - 14',
            trigger: 'blur',
        },
    ],
    latitude:[{
        required:true,
        type: 'number',
        message:"please input correct number",
        trigger: "blur"
    }],
    longitude: [{
        required: true,
        type: 'number',
        message: "please input correct number",
        trigger: "blur"
    }]

})

const submitForm = async (formEl: FormInstance | undefined) => {
    
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            PhStore.uploadOne(ruleForm)
            visible.value = false

        } else {
            ElMessage.error('error submit')
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}))












</script>




<style scoped>













</style>