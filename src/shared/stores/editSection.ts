
import {defineStore} from 'pinia'
import { ref,shallowRef, triggerRef } from 'vue'


export const useEditSectionStore = defineStore('editSection',()=>{
    
    const section = ref({})
    const showEditMenu = ref(false)
    const sections = shallowRef([])

    function initializeSections(sectionsArray:any){
        sections.value = sectionsArray
    }

    function addSection(section:any){
        sections.value.push(section)
        updateSections()
    }

    function updateSections(){
        triggerRef(sections)
    }


    return {section, sections ,showEditMenu,initializeSections,addSection,updateSections}

})