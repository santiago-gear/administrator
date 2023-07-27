
<script setup>

import {onUpdated,ref} from 'vue'
import {useEditSectionStore } from '@/shared/stores/editSection.ts'

const props = defineProps({
    element:{
        type:Object,
        required:false
    }
})


onUpdated(()=>{
    useEditSectionStore().updateSections()
})

</script>

<template>

<div v-if="props.element.type == 'text'">
    <input type="text" v-model="props.element.value">
    <input type="color" v-model="props.element.styles.color">
</div>

<div v-else-if="props.element.type == 'img'">

</div>

</template>

