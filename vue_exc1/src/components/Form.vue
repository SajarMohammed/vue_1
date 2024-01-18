<style>
 .main{
  display: flex;
  flex-direction:column;
 }
 .input-section{
  background-color: burlywood;
  height: 70vh;

 }
 .input-area{
    display: flex;
    /* flex-direction: column; */
    margin:10px auto;
    width: fit-content;
 }
 .each-input {
    margin: 10px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    
  }
  /* .error{
    color:crimson
  } */

 .inp{ 
  width:150px;
  height: 30px;
 }
 .check{
  display: flex;
  width: fit-content;
  margin: 10px auto;
  gap:20px
 }

 
 .radio-field{
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 10px auto;
  gap:20px
 }
 .select-field{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 5px auto;
  gap:20px
 }
 .text-area{
   margin: 15px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
 }
 .texty{
  width:200px;
 }
 .btn{
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 5px auto;
  gap:20px
 }
</style>
<template>
  <div class="main">
    <div class="input-section">
      <el-form>
        
        <div class="input-area">
          <div class="each-input">
            <label for="input1">Name :</label>
            
            <el-input v-model="formData.input" placeholder="Please input" clearable class="inp" id="input1" />
             <span v-for="error in v$.input.$errors" :key="error.$uid" class="error">
            {{ error.$message }}</span>
          </div>
          <div class="each-input">
            <label for="input2">Username :</label>
            <el-input v-model="formData.val" placeholder="Please input" clearable class="inp" id="input2" />
            <span v-for="error in v$.val.$errors" :key="error.$uid" class="error">
            {{ error.$message }}</span>
          </div>
        </div>

        <div class="radio-field">
          <div class="my-2 flex justify-center items-center text-sm">
          
            <el-radio-group v-model="formData.radio2" class="ml-4" size="large"> 
              
              <el-radio-button label="male">Male</el-radio-button>
              <el-radio-button label="female">Female</el-radio-button>
            </el-radio-group>
            <span v-for="error in v$.radio2.$errors" :key="error.$uid" class="error">
            {{ error.$message }}</span>
          </div>
        </div>

        <div class="text-area">
          <label for="textarea1">Address :</label>
          <el-input
            v-model="formData.textarea2"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="Please input"
            id="textarea1"
            class="texty"
          />
          <span v-for="error in v$.textarea2.$errors" :key="error.$uid" class="error">
            {{ error.$message }}</span>
        </div>

        <div class="select-field">
          <label>Country : </label>
          <el-select v-model="formData.value" class="m-2" placeholder="select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              class="label-field"
            />
          </el-select>
          <span v-for="error in v$.value.$errors" :key="error.$uid" class="error">
            {{ error.$message }}</span>
        </div>

        <div class="form-actions">
          <el-button type="primary" @click="submitForm" class="btn">Submit</el-button>
        </div>
        
      </el-form>
    </div>

    <div class="table-section">
      <el-table :data="tableData" height="250" style="width: 100%">
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="username" label="Username" />
        <el-table-column prop="gender" label="Gender" />
        <el-table-column prop="address" label="Address" />
        <el-table-column prop="country" label="Country" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { required } from '@vuelidate/validators';
import useVuelidate from "@vuelidate/core"

const formData = reactive({
  input:"",
  val:"",
  radio2:"",
  textarea2:"",
  value:"",
})
const rules = {
  input : {required},
  val : {required},
  radio2 : { required },
  textarea2 : { required },
  value : { required },
}

const v$ = useVuelidate(rules, formData)
// const input = ref('');
// const val = ref('');
// const textarea2 = ref('');
// const radio2 = ref('');
// const value = ref('');

const options = [
  { label: 'India', value: 'India' },
  { label: 'China', value: 'China' },
  { label: 'Mexico', value: 'Mexico' },
  { label: 'Norway', value: 'Norway' },
];

const tableData = ref([]);

const submitForm = async() => {
     const result = await v$.value.$validate();
     
     if(result){
  
       tableData.value.push({
        name: formData.input,
        username: formData.val,
        gender: formData.radio2,
        address: formData.textarea2,
        country: formData.value,
    }); 
    formData.input = '';
    formData.val = '';
    formData.textarea2 = '';
    formData.radio2 = '';
    formData.value = '';

  

    // this.v$.$reset();
    v$.value.$reset();

    
     }

    
}
</script>


