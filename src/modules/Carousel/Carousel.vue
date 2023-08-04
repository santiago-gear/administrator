<script setup lang="ts">
  import Carousel from 'primevue/carousel';
  import {ref} from "vue";
  const props = defineProps({
    properties: {},
    elements:{
      type:Object,
      required:true
    }
  });

  const items = ref(props.elements);
  const numVisible = ref(props.properties.options.numVisible);
  const containerHeight = ref(props.properties.options.containerHeight);
  const containerWidth = ref(props.properties.options.containerWidth);
  const autoplay = ref(props.properties.options.autoplay);
  const circular = ref(props.properties.options.circular);
  const indicators = ref(props.properties.options.indicators);


  const responsiveOptions = ref([
    {
      breakpoint: '1199px',
      numVisible,
      numScroll: numVisible
    },
    {
      breakpoint: '991px',
      numVisible: numVisible < 1 ? 1: 2,
      numScroll: numVisible < 1 ? 1: 2
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ]);


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
                      width:containerWidth,
                      height:containerHeight,
                      backgroundImage:`url(${slotProps.data.image.source})`,
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
    margin: 5px;
    width: 100%;
    display:flex;
    justify-content: center;
  }
  .carousel-image{
    width: 100%;
  }
</style>
