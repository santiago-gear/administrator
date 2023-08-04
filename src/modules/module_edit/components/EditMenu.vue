<script setup>

import {useEditSectionStore } from '@/shared/stores/editSection.ts' 
import {computed, ref} from 'vue' 


import MenuOptions from './MenuOptions.vue'
import Panel from 'primevue/panel'
import Button from 'primevue/button'
import TabPanel from 'primevue/tabpanel'
import TabView from 'primevue/tabview'  

const storeEdit = useEditSectionStore()
const refreshMenu = ref(0)


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

const editOptionsSection = ref(false)
const properties = ref(storeEdit.section.properties)
const isArray = Array.isArray(storeEdit.section.elements)

let elements;
let array; 
let items;
let globalIndex;

if(isArray){
    array = ref(storeEdit.section.elements)
    items = ref(array.value)
    elements = ref(array.value[0])
}
else{
    elements = ref(storeEdit.section.elements)
}

function selectItem(index){
    elements.value = array.value[index]
    globalIndex = index;
}

function removeItem(){
    if(array.value.length <= properties.value.restrictions.min ) return 
    elements = ref(array.value[0])
    array.value.splice(globalIndex,1)
    refreshMenu.value++
}

function cloneObject(object){
    let clone = {}

    for(let key in object){
        let value = object[key]
        if(typeof(value) != 'object'){
            clone[key] = value            
        }else{
            clone[key] = cloneObject(value)
        }
    }
    return clone

} 

function addItem(){
    if(array.value.length >= properties.value.restrictions.max) return
    const newItem = cloneObject(array.value[0])
    array.value.push(newItem) 

}

const idValue = ref('')

function updateID(){
    storeEdit.section.properties.sectionID = idValue.value.split(' ').join('')
}




</script>


<template>

    
     <div class="menu" :key="refreshMenu">
         <Panel header="EDIT MENU"> 
            <template #icons>
                <Button class="p-panel-header-icon p-link mr-2" @click="editOptionsSection=false">
                    <span class="pi pi-pencil"></span>
                </Button>
                <Button class="p-panel-header-icon p-link mr-2" @click="editOptionsSection=true">
                    <span class="pi pi-cog"></span>
                </Button>
            </template>
            
            <template v-if="editOptionsSection">
                <label for="">Identificador: </label>
                <input type="text" @keyup="updateID" v-model="idValue" >

                <MenuOptions  :element="properties.options"/>

            </template>

            <template v-else>
                
                <template v-if="isArray">
                <div class="flex justify-content-between m-2">
                    <div class="flex flex-wrap gap-3 index-buttons">
                        <Button v-for="(item,index) in items" :label="index+1" size="small" rounded="true" @click="selectItem(index)" /> 
                    </div>
                    
                    <div class="flex gap-2">
                        <Button  icon="pi pi-plus" size="small" rounded="true" severity="success" @click="addItem" />
                        <Button  icon="pi pi-trash" size="small" rounded="true" severity="danger" @click="removeItem" />
                    </div>
                </div>
                </template>

                
                <TabView :scrollable="true" >
                    <TabPanel v-for="(element,index) in elements" :key="dictionary[index]" :header="dictionary[index] || 'Item'" >
                        <MenuOptions  :element="element"/>
                    </TabPanel>   
                </TabView>   

            </template>

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

.index-buttons{
    max-width: 80%;
}


</style>

