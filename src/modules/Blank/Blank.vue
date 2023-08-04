<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    properties:{},
    elements: []
})

const elements = ref(props.elements)
const properties = ref(props.properties)

</script>

<template>
    
        <div class="blank-container" :id="properties.sectionID">
            <div v-for="column in elements" class="column" :style="column.background.styles">
                <div v-if="column.title" class="column-title" v-html="column.title.value" :style="column.title.styles"></div>
                <div v-if="column.description" class="column-description" v-html="column.description.value" :style="column.description.styles"></div>
                <template v-if="column.image">
                    <img :src="column.image.source" :alt="column.image.alt">
                </template>
            </div>
        </div>
    
</template>

<style scoped>
.blank-container {
    display: flex;  
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;

}


.column {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
}

.column > img{
    width: 100%;
}
.column-title{
    width: 100%;
}
</style>