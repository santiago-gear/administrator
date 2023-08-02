<script setup>

import {useEditSectionStore } from '@/shared/stores/editSection.ts' 
import {computed} from 'vue' 
import MenuOptions from './MenuOptions.vue'
import Panel from 'primevue/panel'
import TabPanel from 'primevue/tabpanel'
import TabView from 'primevue/tabview'

const storeEdit = useEditSectionStore()
const section = computed(() =>storeEdit.section) 

const dictionary = {
    background:'Fondo',
    button:'Boton',
    description:'Descripcion',
    end:'Final',
    image:'Imagen',
    array:'Contenido',
    firstChange:'Primer Cambio',
    middle:'Medio',
    p:'Parrafo',
    start:'Inicio',
    secondChange:'Segundo Cambio',
    title:'Titulo',
}




</script>


<template>

    <div class="menu">
        <Panel header="EDIT MENU">
            <TabView :scrollable="true" >
                <TabPanel v-for="(element,index) in section.elements" :key="dictionary[index]" :header="dictionary[index]" >
                    <MenuOptions  :element="element"/>
                </TabPanel>   
            </TabView>       
        </Panel>
    </div>

    
</template>


<style scoped>


.field{
    margin-bottom: 1rem;
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
}

.field:last-child{
    border-bottom: none;
    margin-bottom: 0;
}

.menu{
    max-width: 40rem;
    min-width: 40rem;
    max-height: 60%;
    overflow-y: scroll;
    z-index: 2;
    border-radius: 5%;
}



</style>

