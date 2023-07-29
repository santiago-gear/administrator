<script setup lang="ts">


import Button from 'primevue/button'

import DragDrop from './modules/module_drag_drop/components/DragDrop.vue'
import Sidebar from './shared/components/Sidebar.vue';
import EditMenu from './modules/module_edit/components/EditMenu.vue';
import { useEditSectionStore } from './shared/stores/editSection';
import { computed, onMounted, ref } from 'vue';

const showMenu = computed(()=> useEditSectionStore().showEditMenu)
const save = ref('')

function closeMenus(){
   useEditSectionStore().showEditMenu=false;
}

</script>

<template>
   <div class="aplication">
      <Sidebar class="sidebar"/>
      <DragDrop @click="closeMenus" class="drag-drop" ref="save"/>
      <EditMenu 
         v-if="showMenu" 
         class="editor"
         />
      <div class="save">
         <Button label="Save" severity="success" @click="save.saveSections" />
      </div>
   </div>
</template>

<style scoped>

.aplication{
   display: flex;
   position: relative;
   height: 100vh;

}

.save{
   position: absolute;
   bottom:50px;
   left: 30px;
}
.editor{
   width: fit-content;
   height: fit-content;
   position: absolute;
   right: 50px;
   bottom:20px; 
}

</style>
