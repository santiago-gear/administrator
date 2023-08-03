<script setup>

import {useEditSectionStore } from '@/shared/stores/editSection.ts' 
import {computed, ref} from 'vue' 
import CommonMenu from './CommonMenu.vue'


import MenuOptions from './MenuOptions.vue'
import Panel from 'primevue/panel'
import Button from 'primevue/button'
import TabPanel from 'primevue/tabpanel'
import TabView from 'primevue/tabview'

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   
import Row from 'primevue/row';   

const storeEdit = useEditSectionStore()
const section = computed(() =>storeEdit.section) 




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



const selectedRow = ref('')

let index = null

let elements = storeEdit.section.elements
let isArrayElement = ref(Object.keys(section.value.elements).includes('array'))
let columns =[];
let arrayItems

if(isArrayElement.value){
    arrayItems = section.value.elements.array
    arrayItems.map(elements => {
    if (columns.length < Object.keys(elements).length)
        columns = Object.keys(elements)
    });

}

function remove(){
    if(index){
        arrayItems.splice(index,1)
    }
    
}

function edit(){
    elements = storeEdit.section.elements.array[index]
    isArrayElement.value = false
}

function cloneObject(object){
    let clone = {}

    for(let key in object){
        let value = object[key]
        if(typeof(value) != 'object'){
            if(['value','text'].includes(key)){
                clone[key] = 'Text'
            }else{
                clone[key] = value
            }

            
        }else{
            clone[key] = cloneObject(value)
        }
    }
    return clone

}

function insert(){

    const newObject = cloneObject(arrayItems[0])
    isArrayElement.value = false
    arrayItems.push(newObject)
    const last = storeEdit.section.elements.array.length -1
    elements = storeEdit.section.elements.array[last]
    
} 


</script>


<template>

    
     <div class="menu" v-if="!isArrayElement">
        <Panel header="EDIT MENU">
            <TabView :scrollable="true" >
                <TabPanel v-for="(element,index) in elements" :key="dictionary[index]" :header="dictionary[index]" >
                    <MenuOptions  :element="element"/>
                </TabPanel>   
            </TabView>       
        </Panel>
    </div> 

    <div v-else class="array-menu" >
        <DataTable  
            v-model:selection="selectedRow" 
            selectionMode="single" 
            :value="arrayItems" 
            @row-click="index = $event.index"
            tableStyle="min-width: 50rem">
            <Column v-for="(col,index) in columns" :header="dictionary[col]"> 
                <template #body="slotProps">
                    <div v-if="slotProps.data[col]">
                        <div v-if="col=='image'">
                            <img  v-if="slotProps.data[col].source" :src=slotProps.data[col].source alt="image" width="100" height="100">
                        </div>
                        <div v-else>
                            <p  v-if="slotProps.data[col].text"> {{ slotProps.data[col].text }}</p>
                            <p v-else  v-html="slotProps.data[col].value"> </p>
                        </div>
                    </div>
                </template>
            </Column>
        </DataTable>

        <div class="buttons">
            <Button label="Borrar" icon="pi pi-trash" severity="danger" rounded @click="remove" />
            <Button label="Editar" icon="pi pi-pencil" severity="primary" rounded @click="edit" />
            <Button label="Añadir" icon="pi pi-plus" severity="success" rounded @click="insert" />
        </div>

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

.buttons{
    text-align: right;
    margin-top: 1rem;
}

.array-menu{
    max-width: 60rem;
    overflow-y: scroll;
    z-index: 2;
    border-radius: 5%;
}


</style>

