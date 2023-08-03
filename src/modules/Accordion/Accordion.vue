<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import { ref } from 'vue';

interface Tab {
    title: string;
    content: string;
    image: {
        source: string;
        alt: string;
    }
}

const props = defineProps({
    elements: {
        type:Object,
        required:true,
    }
})

const tabs = ref(props.elements.array)

</script>

<template>
        <Accordion :activeIndex="0">
            <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title.text">
                <div class="tab-container" :style="tabs.styles">
                    <div v-if="tab.image.source" class="image-container" :styles="tab.image.styles">
                        <img :src="tab.image.source" :alt="tab.image.alt" width="100" height="100">
                    </div>
                    <div v-if="tab.p"  v-html="tab.p.value" :styles="tab.p.styles"></div>
                </div>
            </AccordionTab>
        </Accordion>
</template>

<style scoped>

.tab-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

img{
    width: 100%;
    height: auto;
}

</style>