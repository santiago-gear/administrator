<script setup lang="ts">
import Fieldset from "primevue/fieldset"
import { ref } from "vue";

const props = defineProps({
    elements:{
        type:Object,
        required:true,
    }
})

const fieldset = ref(props.elements)


</script>


<template>
    <div class="fieldset-card">
        <Fieldset :legend="fieldset.title.text ||fieldset.title.value">
            <div class="fieldset-container">
                <div v-if="fieldset.p" class="fieldset-content neo" v-html="fieldset.p.value"></div>
                <div v-if="fieldset.image" class="fieldset-image neo">
                    <img :src="fieldset.image.source" :alt="fieldset.image.alt">
                </div>
            </div>
        </Fieldset>
    </div>
</template>

<style scoped>
.fieldset-card {
    padding: 0.2rem;
}
.fieldset-container {
    display: flex;
    flex-flow: row wrap;
    gap: 0.2rem;
}
.fieldset-content {
    padding: 0.2rem;
    flex-grow: 1;
}

.fieldset-image {
    padding: 0.2rem;
    flex-grow: 1;

}

@media screen and (max-width: 480px) {
    .fieldset-content {
        width: 100%;
    }
    .fieldset-image {
        width: 100%;
    }
}

@media screen and (min-width: 481px) and (max-width: 767px) {
    .fieldset-content {
        width: 100%;
    }
    .fieldset-image {
        width: 100%;
    }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
    .fieldset-content {
        width: 100%;
    }
    .fieldset-image {
        width: 100%;
    }
}

@media screen and (min-width: 1024px) {
    .fieldset-container{
       flex-wrap: nowrap; 
       justify-content: center;
    }
    .fieldset-content {
        width: 50%;
    }
    .fieldset-image {
        width: 50%;
        max-width: 1024px;
    }
}
</style>