<script setup>
import StudentsTable from "../components/StudentsTable.vue"
import TeachersTable from "../components/TeachersTable.vue"
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'   
</script>
<template>
    <div class="pt-[5px] pl-[5px] pr-[5px]">
        
        <TabGroup>
    <TabList class="btn-group w-[100%] flex items-center justify-center">
      <Tab id="tabs" @click="this.showAllStudents = true" :class="{'active': this.showAllStudents == true}" aria-selected="true"  class="btn w-[50%] mb-[10px]">Студенты</Tab>
      <Tab id="tabs" @click="this.showAllStudents = false" :class="{'active': !this.showAllStudents}" class="btn w-[50%] mb-[10px]">Группы</Tab>
    </TabList>
    <TabPanels>
      <TabPanel><StudentsTable /></TabPanel>
      <TabPanel><TeachersTable /></TabPanel>
    </TabPanels>
  </TabGroup>
    </div>  
</template>

<script>
export default {
    data(){
        return{
            showAllStudents: true
        }
    }
}
</script>   

<style scoped>

#tabs,.btn-active{
    border: none !important;
    box-shadow: 0 0 0 transparent !important;
}
.active{
    border: none !important;
    box-shadow: none !important;
    background: red !important;
}
.active::after{
    display: none !important;
}
.active::before{
    display: none !important;
}

</style>