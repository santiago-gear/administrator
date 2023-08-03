<script setup lang="ts">
import Button from 'primevue/button';
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
    <div class="advanced-card">
        <div class="advanced-container neo">
            <Card style="width: 100">
                <template v-if="card.image" #header>
                    <img :alt="card.image.alt" :src="card.image.source" />
                </template>
                <template v-if="card.title" #title> 
                    <div class="" v-html="card.title.value"></div>
                </template>
                <template v-if="card.subtitle" #subtitle>
                    <div class="" v-html="card.subtitle.value"></div>
                </template>
                <template v-if="card.p" #content>
                    <div class="" v-html="card.description.value"></div>
                </template>
                <template v-if="card.footer" #footer>
                    <div class="" v-html="card.footer.value"></div>
                </template>
            </Card>
        </div>
    </div>
</template>

<style scoped>
.advanced-card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

}

.advanced-container {
    padding: 0.2rem;
    max-width: 1024px;
}
</style>
