<script setup lang="ts">



import DragDrop from './modules/module_drag_drop/components/DragDrop.vue'
import Sidebar from './shared/components/Sidebar.vue';
import EditMenu from './modules/module_edit/components/EditMenu.vue';
import { useEditSectionStore } from './shared/stores/editSection';
import { useInactivityStore } from './shared/stores/inactivityStore';

import { computed } from 'vue';

const showMenu = computed(()=> useEditSectionStore().showEditMenu)


window.addEventListener('load',mouseInactivity,false);

let currentTime =0;
let limitTime = 5000;


function mouseInactivity(){
   document.body.addEventListener('mousemove',function(){
      currentTime = new Date().getTime()
   },false)
   setInterval(activity,limitTime);
   
}

function activity(){
   if(Math.abs(currentTime - new Date().getTime()) > limitTime){
      
   }
   
}

</script>

<template>
   <Sidebar/>
   <DragDrop/>
   <EditMenu v-if="showMenu"/>
</template>

<style scoped>

</style>
