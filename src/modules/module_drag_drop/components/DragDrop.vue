
<script setup lang="ts">

import { shallowRef,onMounted, defineAsyncComponent,ref, computed,type Ref, triggerRef} from 'vue';
import { deleteSection, getDefault, getLastId, getSection, getSections } from '../services/getSections.service'
import {type Section} from '@/shared/interfaces/section.interface'
import {useEditSectionStore } from '@/shared/stores/editSection.ts' 

const storeEdit = useEditSectionStore()

/* const sections: Section[] = shallowReactive([]) */
/* const sections: Ref<Section[]> = shallowRef([])  */
const sections = computed(()=> storeEdit.sections)
const sectionsDivs= ref()

const positions = { old:null,new:null}

let lastID = 0

function generateIDs():number{
    lastID++;
    return lastID
}

/* function loadSections():void{
    const savedSectionsIDs = getSections()
    savedSectionsIDs.map( id =>{
        const savedSection = getSection(id)
        sections.value.push({
            id,
            type:savedSection.type,
            templateName:savedSection.templateName,
            elements:savedSection.elements,
            component:defineAsyncComponent(() => import(`./${savedSection.templateName}.vue`))
        })

        
    })

    triggerRef(sections)
    
} */
function loadSections():void{
    const savedSectionsIDs = getSections()
    savedSectionsIDs.map( id =>{
        const savedSection = getSection(id)        
        const newSection = {
            id,
            type:savedSection.type,
            templateName:savedSection.templateName,
            elements:savedSection.elements,
            component:defineAsyncComponent(() => import(`./${savedSection.templateName}.vue`))
        }
        storeEdit.addSection(newSection)
    })
    
}


/* function addSection(type:string,templateName:string):void{
    const defaultSection = getDefault(templateName)
    const url = `./${templateName}.vue`
    const newSection:Section ={
        id:generateIDs(),
        type,
        templateName,
        elements:structuredClone(defaultSection.elements),
        component: defineAsyncComponent(() => import(url))
    } 
    sections.value.push(newSection) 
} */

function addSection(type:string,templateName:string):void{
    const defaultSection = getDefault(templateName)
    const url = `./${templateName}.vue`
    const newSection:Section ={
        id:generateIDs(),
        type,
        templateName,
        elements:structuredClone(defaultSection.elements),
        component: defineAsyncComponent(() => import(url))
    } 
    storeEdit.addSection(newSection) 
}

function removeSection(index:number,id:number){
    sections.splice(index, 1)
    deleteSection(id)
}

function dropSection(event:DragEvent){
    const option = event.dataTransfer?.getData('dragOption')
    if (option == 'insert' && event.dataTransfer!= undefined) {
        const sectionType = event.dataTransfer.getData('sectionType')
        const sectionTemplateName = event.dataTransfer.getData('sectionTemplateName')
        addSection(sectionType, sectionTemplateName)
    }
    else if (option == 'move') {
        if(positions.old == positions.new) return
        const aux = sections[positions.old]
        if(positions.new == -1){
            sections.value.splice(positions.old,1)
            sections.value.push(aux)
        }else{
            sections.value.splice(positions.old,1)
            sections.value.splice(positions.new,0,aux)
        } 
        
    } 
    triggerRef(sections)   
}

function addClass(event:DragEvent,index:number){
    
    if(event.dataTransfer !=undefined){
        event.dataTransfer.setData('dragOption','move')
        sectionsDivs.value[index].classList.add('dragging')
    }
}

function draggingSection(event:DragEvent){
    event.preventDefault()
    try{
        const otherSections = [...document.querySelectorAll(".section:not(.dragging)")]
        

        const draggedSectionView = document.querySelector('.dragging')
        
        
        const nextSectionView = otherSections.find(sectionView => {
            return event.clientY <= sectionView.offsetTop + sectionView.offsetHeight / 2
        })

        
        const nextSectionPos = otherSections.findIndex( section => {
            return event.clientY <= section.offsetTop + section.offsetHeight
        })
        
        document.querySelector('.drop-zone')!.insertBefore(draggedSectionView!,nextSectionView!)
        positions.new = nextSectionPos
    } catch(error){            
    
    }

}

function editSection(section:Section){
    storeEdit.section = section
    storeEdit.showEditMenu = true
    //storeEdit.sections = sections
}



onMounted(()=>{
    lastID = getLastId()
    loadSections()
})


</script>

<template>

    <div class="drop-zone" 
        @drop="dropSection" 
        @dragover="draggingSection" 
        @dragenter.prevent
    >
        <div class="section" v-for="(section, index) in sections" draggable="true" 
            @dragstart="addClass($event,index)"
            @dragend="sectionsDivs[index].classList.remove('dragging')"
            @dblclick="editSection(section)"
            ref="sectionsDivs"
            >
            <component :is="section.component" :elements="section.elements"></component>
           
            <button @click="removeSection(index,section.id)">Delete</button>
        </div>
    </div>
</template>

<style>

.drop-zone {
    width: 100vw;
    height: 100vh;
}

.section {
    border: 1px solid black;
    padding: 1rem .5rem;
    transition: scale .3s;
}

.section:hover {
    scale: 1.02;
}
</style>