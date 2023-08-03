<script setup lang="ts">
import Panel from 'primevue/panel';
import { ref } from 'vue';
const props = defineProps({
    elements:{
        type:Object,
        required:true
    }
})

const panel = ref(props.elements)
</script>

<template>
    <div class="panel-card">
        <Panel :header="panel.title.value">
            <div class="panel-container neo" v-html="panel.p.value">
            </div>
        </Panel>
    </div>
</template>

<style scoped>
.panel-card {
    padding: 0.2rem;
}

.panel-container {
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
