<script setup lang="ts">
import Galleria from 'primevue/galleria';
import { reactive, ref } from 'vue';
const props = defineProps({
    elements: {
        type: Object,
        required: true
    }
})

const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);

const elementsRef = reactive(props.elements)
</script>

<template>
    <div class="container" :style="elementsRef.background.style">
        <Galleria :value="elementsRef.array.content" :responsiveOptions="responsiveOptions" :numVisible="5"
            :containerStyle="{width:'100%'}">
            <template #item="slotProps">
                <img :src="slotProps.item.source" :alt="slotProps.item.alt" style="width: 100%; display: block" width="400"
                    height="400" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.source" :alt="slotProps.item.alt" width="100" height="100"
                    :style="{ display: 'block', maxWidth: '200px' }" />
            </template>
            <template #caption="slotProps">
                <div class="text-xl mb-2 font-bold">titulo</div>
                <p class="text-white">{{ slotProps.item.alt }}</p>
            </template>
        </Galleria>

    </div>
</template>

<style scoped>
.container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#gallery {
    height: 95%;
    max-width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>