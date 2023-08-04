<script setup lang="ts">
import Card from 'primevue/card';
import { ref } from 'vue';
const props = defineProps({
    properties:{},
    elements:{
        type:Object,
        required:true,
    }
});

const properties = ref(props.properties)
const cards = ref(props.elements);
</script>

<template>
      <div class="flex flex-row flex-wrap gap-3 justify-content-center align-content-center p-5">
        <template v-for="card in cards">
          <Card class="flex-1 card">
            <template v-if="card.image" #header>
              <img class="card-image" :src="card.image.source" :alt="card.image.alt" />
            </template>
            <template #title>
              <div v-if="card.title" v-html="card.title.value" :style="card.title.styles"></div>
            </template>
            <template #content>
              <div v-if="card.description" v-html="card.description.value" :style="card.description.styles" >
              </div>
            </template>
          </Card>
        </template>
      </div>
</template>

<style>
.card {
  min-width:200px;
  max-width: 30%;
}
.card-image{
  max-width:100%;
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
