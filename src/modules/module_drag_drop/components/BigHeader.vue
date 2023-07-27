<script setup>


import {ref} from 'vue'

const props = defineProps({
    elements:{
        type:Object,
        required:false,
        default:{}
    }
})

const elements = ref(props.elements)

</script>

<template>    
    <h1 :style="elements.tittle.styles">{{ elements.tittle.value }}</h1>
    <p  :style="elements.p.styles">{{ elements.p.value }}</p>
</template>
