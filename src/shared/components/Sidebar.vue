<script setup lang="ts">


import { onMounted, ref } from 'vue'

import PanelMenu from 'primevue/panelmenu'

const items = [
    {
        label: 'Accordion',
        items: [
            {
            label:'Accordion',  
            }
        ],
        command:()=>{
            typeSelected.value = 'Accordion'
        }
    },
    { 
        label: 'Blank',
        items:[
            {
                label:'Blank',
            }
        ],
        command:()=>{
            typeSelected.value = 'Blank'
        }
    },
    {
        label:'Gallery',
        items:[
            {
                label:'Gallery'
            }
        ],
        command:()=>{
            typeSelected.value='Gallery'
        }
    },
    { 
        label: 'Header',
        items:[
            {
                label:'Big Header',
            },
            { 
                label:'Small Header',
            }
        ],
        command:()=>{
            typeSelected.value = 'Header'
        }
    },
    { 
        label: 'Simple Card',
        items: [
            {
            label:'Simple Card',  
            }
        ],
        command:()=>{
            typeSelected.value = 'SimpleCard'
        }
    },
    { 
        label: 'Tab View',
        items:[
            {
                label:'Tab View'
            }
        ],
        command:()=>{
            typeSelected.value = 'TabView'
        }
    },
    {
        label: 'Carousel',
        items:[
            {
                label:'Carousel'
            }
        ],
        command:()=>{
            typeSelected.value = 'Carousel'
        }
    },
];

const typeSelected = ref('')

const dragElement = (event :DragEvent) =>{
    if(event.dataTransfer != undefined){
        event.dataTransfer.dropEffect= 'move'
        event.dataTransfer.effectAllowed= 'move'
        event.dataTransfer.setData('dragOption','insert')
        event.dataTransfer.setData('sectionType',typeSelected.value)
        const name = event.target.innerText
        event.dataTransfer.setData('sectionTemplateName', name.split(' ').join(''))
    }
}

</script>

<template>
    
    <PanelMenu :model="items" 
        :pt="{
            menuitem:{
                draggable:true
            }
        }"
        @dragstart="dragElement"
    />
   
</template>


<style scoped>




</style>
