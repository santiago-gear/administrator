<script setup lang="ts">
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import { ref } from 'vue';

const props = defineProps({
    elements:{
        type:Object,
        required:true
    }
})

const tabs = ref(props.elements.array)

</script>

<template>
    <div class="tabview-container">
        <TabView>
            <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <div class="tabview neo">
                    <div v-if="tab.image" class="tabview-image neo">
                        <img :src="tab.image.source" :alt="tab.image.alt">
                    </div>
                    <div v-if="tab.p" class="tabview-content neo" v-html="tab.p"></div>
                </div>
            </TabPanel>
        </TabView>
    </div>
</template>

<style scoped>
.tabview-container {}

.tabview {
    display: flex;
    flex-flow: row wrap;
    gap: 0.2rem;
}

.tabview-image {
    display: flex;
    align-items: center;
    padding: 0.2rem;
}

.tabview-content {
    padding: 0.2rem;
}

@media screen and (max-width: 480px) {
    .tabview-image {
        width: 100%;
    }

    .tabview-content {
        width: 100%;
    }
}

@media screen and (min-width: 481px) and (max-width: 767px) {
    .tabview-image {
        width: 100%;
    }

    .tabview-content {
        width: 100%;
    }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
    .tabview-image {
        width: 100%;
    }

    .tabview-content {
        width: 100%;
    }
}

@media screen and (min-width: 1024px) {
    .tabview {
        flex-wrap: nowrap;
    }

    .tabview-image {
        width: 40%;
        padding: 0.2rem;
    }

    .tabview-content {
        width: 60%;
        padding: 0.2rem;
    }
}
</style>
