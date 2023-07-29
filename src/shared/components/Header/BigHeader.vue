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
    <h1 :style="[
            elements.title.styles,
            { color:'#'+elements.title.styles.color }
        ]"
    >
         {{ elements.title.value }}
    </h1>

    <p  :style="[
            elements.p.styles,
            { color:'#'+elements.p.styles.color }
        ]">
        {{ elements.p.value }}
    </p>

</template>
