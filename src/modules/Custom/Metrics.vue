<script setup lang="ts">

import { ref, onMounted } from "vue";
import { ProductService } from './service/ProductService';
import Carousel from "primevue/carousel";
import Button from "primevue/button";
import Tag from "primevue/tag";

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
    // Santi. Tu codigo debajo de esta linea

</script>

<template>
    <div id="metrics">
        <div id="statistics">
            <div style="height: 256px;">
                <h2 class="numbers n1">108</h2>
                <span style="display:block;width: 100%; text-align: center;">Meses de experiencia</span>
            </div>
            <div style="height: 256px;">
                <h2 class="numbers n2">100%</h2>
                <span style="display:block;width: 100%; text-align: center;">Proyectos entregados a tiempo</span>
            </div>
            <div style="height: 256px;">
                <h2 class="numbers n3">+27</h2>
                <span style="display:block;width: 100%; text-align: center;">Clientes satisfechos</span>
            </div>
        </div>
        <div id="testimonials">
             <div style="width: 70%;">

                <span style="font-size: 1.6rem;;">Lo que dicen nuestros clientes</span>
            </div>
            <div style="width: 70%; justify-self: center; align-self: center;">

                <p class="parra" >
                    <span >"</span>Son unas churras divinas, las mejores!
                </p>
            </div>

            <div style="width: 70%; text-align: center;">

                <p class="nameis"><span style="font-weight: bold;">Andrés Cardenas,</span> Santo Evento</p>
            </div>
            
        
        </div>
        <div id="companies">
            <div style="width: 64px; height: 64px; background-color: aquamarine;" >LOGO #1</div>
            <div style="width: 64px; height: 64px; background-color: aquamarine;">LOGO #1</div>
            <div style="width: 64px; height: 64px; background-color: aquamarine;">LOGO #1</div>
            <div style="width: 64px; height: 64px; background-color: aquamarine;">LOGO #1</div>
            <div style="width: 64px; height: 64px; background-color: aquamarine;">LOGO #1</div>
            <div style="width: 64px; height: 64px; background-color: aquamarine;">LOGO #1</div>
            <div style="width: 64px; height: 64px; background-color: aquamarine;">LOGO #1</div>
        </div>
    </div>
</template>

<style scoped>
#metrics {
    height: 100vh;
}

.numbers {
    font-size: 128px;
}

.n1 {
    color: rgb(22, 137, 214);
}

.n2 {
    color: rgb(114, 182, 13);
}

.n3 {
    color: rgb(22, 137, 214);
}

.parra {
    font-size: 54px;
    width: 85%;
    margin-left: 128px;
}

.nameis {
    font-size: 32px;
}

#statistics {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30%;
    background-color: black;
    color: white;
}

#testimonials {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#companies {
    display: flex;
    justify-content: space-evenly
    ;
    height: 10%;
    background-color: #EEEEEE;
}</style>
