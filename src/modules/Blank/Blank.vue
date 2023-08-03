<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    elements: {
        type:Object,
        required:true,
    }
})

const columns = ref(props.elements.array)

const width = ref((100 / props.elements.array.length) + "%")

</script>

<template>
    <div class="blank-card">
        <div class="blank-container neo" :style="props.elements.styles">
            <div v-for="column in columns" class="column neo">
                <div v-if="column.title" class="column-title" v-html="column.title.value"></div>
                <div v-if="column.description" class="column-description" v-html="column.description.value"></div>
                <div v-if="column.image" class="column-image">
                    <img :src="column.image.source" :alt="column.image.alt">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.container-title { } 

.container-content {  }
.blank-card {
    display: flex;
    justify-content: center;
    align-items: center;
}

.blank-container {
    display: flex;
    height: 100%;
    width: 100%;
    gap: 0.2rem;
}

.column {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-flow: row wrap;
    flex: 1 1 auto;
    gap: 0.2rem;
}

.column-title {
    /* text-align: center; */
   /*  width: 100%;
    column-gap: 0.2rem; */
    width: 60%; height: 5%; margin-left: 5rem; 
}

.column-description {
    padding: 0.2rem;
    text-align: justify;
    width: 100%;
    width: 60%; height: 50%; margin-left: 5rem;
}

.column-image {
    padding: 0.2rem;
}

@media screen and (max-width: 480px) {
    .blank-container {
        flex-flow: row wrap;
    }

    .column {
        width: 100%;
    }
}

@media screen and (min-width: 481px) and (max-width: 767px) {
    .blank-container {
        flex-flow: row wrap;
    }

    .column {
        width: 100%;
    }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
    .blank-container {
        flex-flow: row wrap;
    }

    .column {
        width: 100%;
        gap: 0.2rem;
    }
}

@media screen and (min-width: 1024px) {
    .column {
        max-width: v-bind(width);
    }

    .column-image {
        max-width: 1024px;
    }
}
</style>