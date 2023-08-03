<script setup lang="ts">
import Card from 'primevue/card';
import { ref } from 'vue';
const props = defineProps({
    elements:{
        type:Object,
        required:true,
    }
});
const cards = ref(props.elements);
</script>

<template>
      <div class="flex flex-row flex-wrap gap-3 justify-content-center align-content-center p-5">
        <template v-for="card in cards">
          <Card class="flex-1 card">
            <template #title>
              <div v-if="card.title" v-html="card.title.value"></div>
            </template>
            <template #content>
              <div v-if="card.description" v-html="card.description.value">
              </div>
            </template>
          </Card>
        </template>
      </div>
</template>

<style>
.card {
  min-width:200px;
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
