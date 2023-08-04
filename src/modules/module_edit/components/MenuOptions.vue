
<script setup lang="ts">

import {ref} from 'vue'

import TextOptions from './TextOptions.vue'
import ImageOptions from './ImageOptions.vue';
import BackgroundOptions from './BackgroundOptions.vue';
import SectionOptionsOptions from './SectionOptionsOptions.vue'

const props = defineProps({
    element:{
        type:Object,
        required:false
    }
})

const type = props.element.type


</script>

<template>
    <TextOptions v-if="type=='text'" :text="props.element"/>

    <ImageOptions v-else-if="type=='image'" :image="props.element"/>

    <BackgroundOptions v-else-if="type=='background'" :background="props.element"/>

    <SectionOptionsOptions v-else-if="type=='options'" :options="props.element" />

</template>

<style scoped>


</style>