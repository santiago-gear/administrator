<script setup lang="ts">
import Card from 'primevue/card';
import { ref } from 'vue';
const props = defineProps({
    elements:{
        type:Object,
        required:true,
    }
})

const card = ref(props.elements)
</script>

<template>
    <div class="simple-card">
        <Card>
            <template #title>
                <div v-if="card.title" v-html="card.title.value"></div>
            </template>
            <template #content>
                <div v-if="card.description" v-html="card.description.value">
                </div>
            </template>
        </Card>
    </div>
</template>

<style>
.simple-card {
    padding: 0.2rem;
}

@media screen and (max-width: 480px) {
    
}

@media screen and (min-width: 481px) and (max-width: 767px) {
    
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
    
}

@media screen and (min-width: 1024px) {
    
}
</style>
