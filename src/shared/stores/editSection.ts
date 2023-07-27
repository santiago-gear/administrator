import {type Section } from './../interfaces/section.interface';

import {defineStore} from 'pinia'
import { ref, triggerRef, shallowReactive ,type Ref} from 'vue'


export const useEditSectionStore = defineStore('editSection',()=>{
    
    const section = ref({})
    const refreshSections = ref(0)
    const showEditMenu = ref(false)

    
    /* const sections : Ref<Section[]> = shallowReactive([])

    function initializeSections(sectionsArray:any){
        sectionsArray.forEach(section => {
            sections.value.push(section)
        });
    }

    function addSection(newSection:Section){
        sections.push(newSection)
        updateSections();
    }

    function removeSection(index:number){
        sections.splice(index,1)
        updateSections();
    }

    function insertSection(newSection:Section,index:number){
        sections.splice(index,0,newSection)
        updateSections()
    }
    */
    
    function updateSections(){
        refreshSections.value++
    } 


    return {
        /* addSection,
        initializeSections,
        insertSection, */
        section, 
        refreshSections,
        /* sections, */
        showEditMenu,
        /* removeSection,*/
        updateSections, 
    }
})