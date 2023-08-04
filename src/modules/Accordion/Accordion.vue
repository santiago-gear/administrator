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

const tabs = ref(props.elements )

</script>

<template>
        <Accordion :activeIndex="0">
            <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title.text">
                <div class="tab-container" :style="tab.background.styles">
                    <div v-if="tab.image.source" >
                        <img :src="tab.image.source" :alt="tab.image.alt">
                    </div>
                    <div v-if="tab.p"  v-html="tab.p.value" :style="tab.p.styles"></div>
                </div>
            </AccordionTab>
        </Accordion>
</template>

<style scoped>

.tab-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
}
img{
    width: 10   0%;
    height: auto;
}
:deep(.p-accordion-content){
    padding: 0;
}

</style>