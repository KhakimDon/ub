<template>
  <div id="auth">
    <BeTeacher />
 
  </div>
</template>

<script setup>
import BeTeacher from "../components/BeTeacher.vue";
</script>
<script>
export default {};
</script>

<style scoped>
.step-primary::before{
  background: red !important;
}
.step-primary::after{
  background: red !important;
}
.steps-item{
    margin-top: 50px;
    margin-bottom: 30px;
    font-family: s;
    font-size: 14px;
}
#auth{
    height: calc(100vh - 220px);
    overflow-y: scroll;
}
</style>