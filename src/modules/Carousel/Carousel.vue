<script setup lang="ts">
  import Carousel from 'primevue/carousel';
  import {ref} from "vue";
  const props = defineProps({
    elements:{
      type:Object,
      required:true
    }
  });

  const items = ref(props.elements.items);
  const numVisible = ref(props.elements.numVisible);
  const containerHeight = ref(props.elements.containerHeight);
  const responsiveOptions = ref([
    {
      breakpoint: '1199px',
      numVisible,
      numScroll: numVisible
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ]);
  const circular = ref(props.elements.circular);
  const autoplay = ref(props.elements.autoplay);
  const indicators = ref(props.elements.indicators);
</script>

<template>
  <Carousel
      :value="items"
      :numVisible="numVisible"
      :numScroll="numVisible"
      :responsiveOptions="responsiveOptions"
      :circular="circular"
      :autoplayInterval="(autoplay)?3000:0"
      :showIndicators="indicators"
      :pt="{
                indicatorButton: { class: 'border-circle', style: { width: '20px', height: '20px' } }
            }"
  >
    <template #item="slotProps">
      <div class="carousel-container">
        <div class="carousel-image"
             :style="{
                      height:`${containerHeight}px`,
                      backgroundImage:`url(${slotProps.data.source})`,
                      backgroundSize:'cover',
                      backgroundRepeat:'no-repeat'}">
        </div>
      </div>
<!--      <img class="carousel-image" :src="slotProps.data.source" :alt="slotProps.data.alt">-->
    </template>
  </Carousel>
</template>

<style>
  .carousel-container{
    margin: 5px
  }
  .carousel-image{
    width: 100%;
  }
</style>
