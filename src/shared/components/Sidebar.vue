<script setup lang="ts">


import { ref, type Ref } from 'vue'
import {type SubMenu} from '@/shared/interfaces/menu.interfaces'

const menu: SubMenu[] = [
    {
        type: 'Contact',
        options: ['Contact Black', 'Contact White']
    }, {
        type: 'Header',
        options: ['Big Header', 'Small Header']
    }, {
        type: 'NavBar',
        options: ['Fix Navbar', 'Toogle Navbar']
    },
    {
        type: 'Footer',
        options: ['Dark Footer', 'Light Footer']
    },
    {
        type: 'Carousel',
        options: ['Image Carousel']
    }]

const submenu: Ref<string[]>= ref([])
const typeSelected: Ref<string> = ref('')

const updateSubmenu = (el:SubMenu):void => {
    typeSelected.value = el.type
    submenu.value = el.options 

}

const dragElement = (event :DragEvent,element:string) =>{
    
    if(event.dataTransfer != undefined){
        event.dataTransfer.dropEffect= 'move'
        event.dataTransfer.effectAllowed= 'move'
        event.dataTransfer.setData('dragOption','insert')
        event.dataTransfer.setData('sectionType',typeSelected.value)
        event.dataTransfer.setData('sectionTemplateName',element.split(' ').join(''))
    }
} 


</script>

<template>
    <div class="container">
        <div class="menu-container">
            <div class="option" v-for="element in menu" @click="updateSubmenu(element)">
                <p>{{ element.type }}</p>
            </div>
        </div>
        <div class="menu-container">
            
            <div class="option" v-for="element in submenu" draggable="true" @dragstart="dragElement($event,element)" >
                <p>{{ element }}</p>
            </div>
        </div>
    </div>
</template>


<style scoped>


.container{
    max-width: 30rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.menu-container {
    border-right: 1px solid black;
    height: 100vh;
    padding: 2rem;
    max-width: 15rem;
}

.option {
    padding: 1rem 2rem;
    margin: 1rem 0;
    border: 1px solid black;
    transition: scale .3s;
}

.option:hover {
    cursor: move;
    scale: 1.2;
}


</style>