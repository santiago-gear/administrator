<script setup lang="ts">


import { onMounted, ref } from 'vue'

import PanelMenu from 'primevue/panelmenu'

const items = [
    { 
        label: 'About',
        items: [
            {
            label:'Dialo About',  
            }
        ],
        command:()=>{
            typeSelected.value = 'About'
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
            },
            {
                label:'Dialo Header',
            } 
        ],
        command:()=>{
            typeSelected.value = 'Header'
        }
    },
    { 
        label: 'Info',
        items:[
            {
                label:'Dialo Information'
            }
        ],
        command:()=>{
            typeSelected.value = 'Metrics'
        }
    },
    { 
        label: 'Navbar',
        items: [
            {
                label:'Dialo Navbar'
            }
        ],
        command:()=>{
            typeSelected.value = 'Navbar'
        }
    },
    { 
        label: 'Footer',
        items:[
            {
                label:'Dialo Footer'
            }
        ],
        command:()=>{
            typeSelected.value = 'Footer'
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
        label: 'Services',
        items: [
            {
                label:'Dialo Services'
            }
        ],
        command:()=>{
            typeSelected.value = 'Services'
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