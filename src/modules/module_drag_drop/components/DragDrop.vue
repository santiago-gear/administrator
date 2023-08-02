
<script setup lang="ts">

import { onMounted, defineAsyncComponent,ref, shallowReactive, computed, onUpdated,} from 'vue';
import {getDefault, getLastId } from '../services/getSections.service'
import {type Section} from '@/shared/interfaces/section.interface'
import {useEditSectionStore } from '@/shared/stores/editSection' 
import Button from 'primevue/button'

const storeEdit = useEditSectionStore()
const sections = shallowReactive([])
const sectionsDivs= ref()
const sectionsRefresh =ref(0)
const positions = { old:null,new:null}

let lastID = 0

function generateIDs():number{
    lastID++;
    return lastID
}

function loadLocalSections():void{
    const localSections = localStorage.getItem('sections')
    const savedSections = JSON.parse(localSections)
    savedSections.map( savedSection => {
        const newSection = {
            id:savedSection.id,
            type:savedSection.type,
            templateName:savedSection.templateName,
            elements:savedSection.elements,
            component:defineAsyncComponent(() => import(`../../../shared/components/${savedSection.type}/${savedSection.templateName}.vue`))
        }
        lastID=savedSection.id
        sections.push(newSection)
    })    
     
}

/* function loadSections():void{
    const localSections = localStorage.getItem('sections')
    const savedSectionsIDs = JSON.parse(localSections)
    savedSectionsIDs.map( id =>{
        const savedSection = getSection(id)        
        const newSection = {
            id,
            type:savedSection.type,
            templateName:savedSection.templateName,
            elements:savedSection.elements,
            component:defineAsyncComponent(() => import(`../../../shared/components/${savedSection.type}/${savedSection.templateName}.vue`))
        }
        sections.push(newSection)
    })   
} */

function saveSections():void{
    localStorage.setItem('sections',JSON.stringify(sections))
}

function addSection(type:string,templateName:string):void{
    const defaultSection = getDefault(templateName)
    console.log(defaultSection)
    const url = `../../../shared/components/${type}/${templateName}.vue`
    const newSection:Section ={
        id:generateIDs(),
        type,
        templateName,
        elements:structuredClone(defaultSection.elements),
        component: defineAsyncComponent(() => import(/* @vite-ignore */url))
    } 
    sections.push(newSection) 
}

function removeSection(index:number,id:number){

    sections.splice(index,1);
    sectionsRefresh.value++
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
            sections.splice(positions.old,1)
            sections.push(aux)
        }else{
            sections.splice(positions.old,1)
            sections.splice(positions.new,0,aux)
        } 
        sectionsRefresh.value++
    } 
}

function addClass(event:DragEvent,index:number){
    
    if(event.dataTransfer !=undefined){
        event.dataTransfer.setData('dragOption','move')
        sectionsDivs.value[index].classList.add('dragging')
        positions.old=index
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
}


onMounted(()=>{
    lastID = getLastId()
    loadLocalSections()

})


window.addEventListener('load',mouseInactivity,false);

let currentTime =0;
let limitTime = 5000;
function mouseInactivity(){
   document.body.addEventListener('mousemove',function(){
      currentTime = new Date().getTime()
   },false)
   setInterval(activity,limitTime);
   
}

function activity(){
   if(Math.abs(currentTime - new Date().getTime()) > limitTime){
      saveSections()
   }
}

defineExpose({saveSections})

</script>

<template>

    <div class="drop-zone" 
        @drop="dropSection" 
        @dragover="draggingSection" 
        @dragenter.prevent
        :key="sectionsRefresh"
    >
        <div class="section" v-for="(section, index) in sections" draggable="true" 
            @dragstart="addClass($event,index)"
            @dragend="sectionsDivs[index].classList.remove('dragging')"
            @dblclick="editSection(section)"
            ref="sectionsDivs"
            >
            <div class="delete">
                <Button label="Delete" severity="danger" outlined size="small" @click="removeSection(index,section.id)" />
            </div>
            <component :is="section?.component" :elements="section?.elements"></component>
        </div>

        
    </div>


    
</template>

<style>

.drop-zone {
    height: auto;
    padding: 0 1rem;
    overflow-y: scroll;
    width: 92vw;
    height: 100vh;
}

.section{
    border: 1px dashed black;
    position: relative;
}

.delete{
    position: absolute;
    display: inline-block;
    top: 2px;
    right: 10px;
    z-index: 1;
}

</style>