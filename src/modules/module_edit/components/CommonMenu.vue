

<script setup lang="ts">


import MenuOptions from './MenuOptions.vue'
import Panel from 'primevue/panel'
import Button from 'primevue/button'
import TabPanel from 'primevue/tabpanel'
import TabView from 'primevue/tabview'


const props = defineProps({
    elements:{
        type:Object,
        required:true
    }
})


const dictionary = {
    background:'Fondo',
    button:'Boton',
    description:'Descripcion',
    image:'Imagen',
    array:'Contenido',
    p:'Parrafo',
    title:'Titulo',
    subtitle:'Subtitulo',
    footer:'Footer'
}



</script>

<template>
<div class="menu" >
        <Panel header="EDIT MENU">
            <TabView :scrollable="true" >
                <TabPanel v-for="(element,index) in elements" :key="dictionary[index]" :header="dictionary[index]" >
                    <MenuOptions  :element="element"/>
                </TabPanel>   
            </TabView>       
        </Panel>
    </div>
</template>

<style scoped>


.menu{
    max-width: 40rem;
    min-width: 40rem;
    max-height: 60%;
    overflow-y: scroll;
    z-index: 2;
    border-radius: 5%;
}

</style>