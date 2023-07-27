
import { defineStore } from "pinia";
import {ref} from 'vue'

export const useInactivityStore = defineStore('inactivityStore',()=>{

    const mouseInactivity = ref(false)
    const keyboardInactivity = ref(false)

    return{
        keyboardInactivity,
        mouseInactivity,
    }
})