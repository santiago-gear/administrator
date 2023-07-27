

<script setup>
import {ref} from 'vue'
const props = defineProps({
    elements:{
        type:Object,
        required:false
    }
})
const elements = ref(props.elements)
</script>

<template>

    <h3 :style="elements.tittle.styles" >{{elements.tittle.value}}</h3>

    <p  :style="elements.p.styles">{{elements.p.value}}</p>

</template>