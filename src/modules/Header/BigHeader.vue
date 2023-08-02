<script setup>


import {ref} from 'vue'

 

const props = defineProps({
    elements:{
        type:Object,
        required:true,
        default:{}
    }
})

const elements = ref(props.elements)





</script>

<template>    
    <!-- <h1 :style="[
            elements.title.styles,
            { color:'#'+elements.title.styles.color }
        ]"
    >
         {{ elements.title.value }}
    </h1>    -->
    <div :style="elements.background.styles" >
    
    <span v-html="elements.title.value" :style="[
            elements.title.styles,
            { color:'#'+elements.title.styles.color }
        ]"></span>

    <span v-html="elements.p.value" :style="[
            elements.p.styles,
            { color:'#'+elements.p.styles.color }
        ]">
    </span>
    </div>
</template>
