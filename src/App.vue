<script setup lang="ts">




import Sidebar from './shared/components/Sidebar.vue';
import CreateSections from './modules/create_sections/createSections.vue'
</script>

<template>
   <div class="aplication">
      <Sidebar class="sidebar"/> 
      <router-view></router-view>
   </div>
</template>

<style scoped>

.aplication{
   display: flex;
   position: relative;
   height: 100vh;
}

</style>
