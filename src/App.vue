<script setup lang="ts">



import DragDrop from './modules/module_drag_drop/components/DragDrop.vue'
import Sidebar from './shared/components/Sidebar.vue';
import EditMenu from './modules/module_edit/components/EditMenu.vue';
import { useEditSectionStore } from './shared/stores/editSection';
import { useInactivityStore } from './shared/stores/inactivityStore';

import { computed,ref } from 'vue';
import Button from 'primevue/button';

const showMenu = computed(()=> useEditSectionStore().showEditMenu)

window.addEventListener('load',mouseInactivity,false);

let currentTime =0;
let limitTime = 5000;

let posX:number, posY:number
let mouseIsClicked=false;

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

function mouseClicked(event:MouseEvent){
   posX = event.clientX;
   posY = event.clientY;
   mouseIsClicked =true;
}

function mouseUnclicked(event:MouseEvent){
   mouseIsClicked = false;
}

function mouseMoved(event:MouseEvent){
   if(mouseIsClicked){
      let currentPosX = event.clientX
      let currentPosY = event.clientY;
      let deltaX = currentPosX - posX;
      let deltaY = currentPosY - posY;
      posX = currentPosX;
      posY = currentPosY;

      const element = document.getElementById('editor')
      const positition = getPosition(element)
      element!.style.top  = (positition[0] + deltaY) + 'px'
      element!.style.left = (positition[1] + deltaX) + 'px'
   }
}

function getPosition(element:HTMLElement | null){
   const position = [0,0]
   if(document.defaultView != undefined && document.defaultView.getComputedStyle!= undefined){
      position[0] = parseInt(document.defaultView.getComputedStyle(element, null).getPropertyValue("top"))
      position[1] = parseInt(document.defaultView.getComputedStyle(element, null).getPropertyValue("left"));
   }
   return position
}

function closeMenus(){
   useEditSectionStore().showEditMenu=false;
}

</script>

<template>
   <div class="aplication">
      <Sidebar class="sidebar"/>
      <DragDrop @click="closeMenus" class="drag-drop"/>
      <EditMenu 
         v-if="showMenu" 

         class="editor"
         />
   </div>
</template>

<style scoped>

.aplication{
   display: flex;
   position: relative;
   height: 100vh;
}



.drag-drop{
   overflow-y: scroll;
   width: 100vw;
   height: 100vh;
}

.editor{
   width: fit-content;
   height: fit-content;
   position: absolute;
   right: 20px;
   bottom:20px;
   
}

</style>
