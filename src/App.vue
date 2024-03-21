<template>
  <div>
   <SideBar /> 
  </div>
  <div>
    <ClientVue/>
    <LoginVue />
    <CoverPageVue />
  </div>
</template>

<script setup>
import ClientVue from './components/Client.vue';
import CoverPageVue from './components/CoverPage.vue';
import LoginVue from './components/Login.vue';
import Login from './components/Login.vue';
import SideBar from './components/SideBar.vue';


</script>

<style lang="scss" scoped>

</style>