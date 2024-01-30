<style scoped>
 .main{
  display: flex;
  flex-direction:column;
 }
 .input-section{
  background-color: bisque;
  height: 70vh;
  width: 80vw;
  margin: 20px auto;
  border-radius: 12px;
  border:1px solid grey;
 }
 .input-area{
    display: flex;
    /* / flex-direction: column; / */
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
  label{
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 2px;
  }

 .inp{ 
  width:150px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 8px;
 }
 .inp ::placeholder{
  font-family: 'Courier New', Courier, monospace;
  padding-left: 6px;
  letter-spacing: 3px;
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
  gap:20px;
  border:1px solid grey
 }
 .select-field{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 5px auto;
  gap:20px;
  
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
  border:1px solid grey
 }
 .texty ::placeholder{
  font-family: 'Courier New', Courier, monospace;
  padding-left: 6px;
  letter-spacing: 3px;
 }
 .btn{
  display: flex;
  align-items: center;
  width: 150px;
  margin: 20px auto;
  height:40px;
  padding:auto;
  background-color: black !important;
  font-size: 16px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: 7px;
 }
</style>
<template>
  <div class="main">
    <div class="input-section">
      <el-form>
        
        <div class="input-area">
          <div class="each-input">
            <label for="input1">Name :</label>
            
            <el-input v-model="formData.input" placeholder="Name..." clearable class="inp" id="input1" />
             <span v-for="error in v$.input.$errors" :key="error.$uid" class="error">
            {{ error.$message }}</span>
          </div>
          <div class="each-input">
            <label for="input2">Username :</label>
            <el-input v-model="formData.val" placeholder="Username..." clearable class="inp" id="input2" />
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
            placeholder="Address..."
            id="textarea1"
            class="texty"
          />
          <span v-for="error in v$.textarea2.$errors" :key="error.$uid" class="error">
            {{ error.$message }}</span>
        </div>

        <div class="select-field">
          <label>Country : </label>
          <el-select v-model="formData.value" class="m-2 slct" placeholder="select">
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
          <el-button @click="submitForm" class="btn">Submit</el-button>
        </div>
        
      </el-form>
    </div>

    <div class="table-section">
      <el-table :data="tableData" height="250" style="width: 100%">
        <el-table-column prop="id" label="id" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="username" label="Username" />
        <el-table-column prop="gender" label="Gender" />
        <el-table-column prop="address" label="Address" />
        <el-table-column prop="country" label="Country" />
        <el-table-column label="Actions">
          <template #default="{ row }">
            <el-button type="text" @click="editRow(row)">Edit</el-button>
            <el-button type="text" @click="removeRow(row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="editModalVisible" title="Edit Entry">
      <el-form ref="editForm">

        <el-form-item label="Name" prop="name">
          <el-input v-model="editFormData.name"></el-input>
        </el-form-item>
        <el-form-item label="Username" prop="username">
          <el-input v-model="editFormData.username"></el-input>
        </el-form-item>
        <el-form-item label="Gender" prop="gender">
          <el-radio-group v-model="editFormData.gender">
            <el-radio label="male">Male</el-radio>
            <el-radio label="female">Female</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Address" prop="address">
          <el-input v-model="editFormData.address"></el-input>
        </el-form-item>
        <el-form-item label="Country" prop="country">
          <el-select v-model="editFormData.country" placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveChanges">Save Changes</el-button>
          <el-button @click="closeEditModal">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { required } from '@vuelidate/validators';

import useVuelidate from "@vuelidate/core"


const editModalVisible = ref(false);
const editFormData = ref({});



// const editFormRef = ref(null);


// const editRules = {
//   input : {required},
//   val : {required},
//   radio2 : { required },
//   textarea2 : { required },
//   value : { required },
// };

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


const closeEditModal = () => {
  editFormData.value = {};
  editModalVisible.value = false;
};



const editRow = (row) => {  
  editFormData.value = { ...row };
  editModalVisible.value = true;
};

const removeRow = (row) => {
  const index = tableData.value.indexOf(row);
  tableData.value.splice(index, 1);
};

const saveChanges = () => {
  // Find the index of the row being edited by its ID
  const index = tableData.value.findIndex(row => row.id === editFormData.value.id);

  // Replace the existing row with the changes
  if (index !== -1) {
    // Update the properties of the found row
    tableData.value[index].name = editFormData.value.name;
    tableData.value[index].username = editFormData.value.username;
    tableData.value[index].gender = editFormData.value.gender;
    tableData.value[index].address = editFormData.value.address;
    tableData.value[index].country = editFormData.value.country;
  }

  // Clear the form data and hide the edit modal
  editFormData.value = {};
  editModalVisible.value = false;
};

function generateRandomId() {
  const randomNumber = Math.floor(Math.random() * 1000000);
  const randomString = randomNumber.toString();
  const timestamp = new Date().getTime();
  const randomId = `${timestamp}${randomString}`;
  return randomId;
}

const submitForm = async() => {
     const result = await v$.value.$validate();
     
     if(result){
  
       tableData.value.push({
        id:generateRandomId(),
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