<script setup>

import {useEditSectionStore } from '@/shared/stores/editSection.ts' 
import {computed,onUpdated, triggerRef} from 'vue' 
import MenuOptions from './MenuOptions.vue'


const storeEdit = useEditSectionStore()
const section = computed(() =>storeEdit.section) 



</script>


<template>

    <div>
        <h1>Edit Menu</h1>
        
        <div class="field" v-for="(element,index) in section.elements" >
        
            <p><span class="field-name">{{index}}</span></p>
            
            <MenuOptions  :element="element"/>
        </div>   
    </div>
</template>


<style scoped>

</style>

