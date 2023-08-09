<script setup lang="ts">
  import Carousel from 'primevue/carousel';
  import {onBeforeUpdate, onUpdated, reactive, ref} from "vue";
  const props = defineProps({
    properties: {},
    elements:{
      type:Object,
      required:true
    }
  });

  const items = ref(props.elements);
  const sectionOptions = ref(props.properties.options)
  const showCarousel = ref(0)




  const responsiveOptions = ref([
    {
      breakpoint: '1199px',
      numVisible: ref(props.properties.options.numVisible),
      numScroll: ref(props.properties.options.numVisible)
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ]);


</script>

<template>
  <Carousel :key="sectionOptions.numVisible"
      :value="items"
      :numVisible="sectionOptions.numVisible"
      :numScroll="sectionOptions.numVisible"
      :responsiveOptions="responsiveOptions"
      :circular="sectionOptions.circular"
      :autoplayInterval="(sectionOptions.autoplay)?3000:0"
      :showIndicators="sectionOptions.indicators"
      :pt="{
                indicatorButton: { class: 'border-circle', style: { width: '20px', height: '20px' } }
            }"
  >
    <template #item="slotProps">
      <div class="carousel-container">
        <div class="carousel-image"
             :style="{
                      width:props.properties.options.width,
                      height:props.properties.options.height,
                      backgroundImage:`url(${slotProps.data.image.source})`,
                      backgroundSize:'cover',
                      backgroundRepeat:'no-repeat'}">
        </div>
      </div>  
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
