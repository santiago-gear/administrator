

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

    <h3 :style="[
            elements.title.styles,
            { color: '#'+elements.title.styles.color }
        ]"
    >
        {{elements.title.value}}
    </h3>

    <p  :style="[
            elements.p.styles,
            { color:'#'+elements.p.styles.color }
        ]"
    >
        {{ elements.p.value }}
    </p>

    <img :src="elements.image.source" :alt="elements.image.alt" >
</template>