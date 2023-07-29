import {type Section } from './../interfaces/section.interface';

import {defineStore} from 'pinia'
import { ref} from 'vue'


export const useEditSectionStore = defineStore('editSection',()=>{
    
    const section = ref({})
    const refreshSections = ref(0)
    const showEditMenu = ref(false)

    return {
        section, 
        refreshSections,
        showEditMenu,
    }
})