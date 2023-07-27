<script setup lang="ts">



import DragDrop from './modules/module_drag_drop/components/DragDrop.vue'
import Sidebar from './shared/components/Sidebar.vue';
import EditMenu from './modules/module_edit/components/EditMenu.vue';
import { useEditSectionStore } from './shared/stores/editSection';
import { computed } from 'vue';

const showMenu = computed(()=> useEditSectionStore().showEditMenu)

</script>

<template>
   <Sidebar/>
   <DragDrop/>
   <EditMenu v-if="showMenu"/>
</template>

<style scoped>

</style>
