<script setup>

import {ref} from 'vue'

const props = defineProps({
    elements:{
        type:Object,
        required:true
    }
})

const elements = ref(props.elements)
</script>

<template>


    <nav>
        <ul>
            <li :style="elements.item1.styles">{{elements.item1.value}}</li>
            <li :style="elements.item2.styles">{{elements.item2.value}}</li>
            <li :style="elements.item3.styles">{{elements.item3.value}}</li>
        </ul>
    </nav>

</template>


<style scoped>

li{ 
    display: inline-block;
    list-style: none;
}
</style>