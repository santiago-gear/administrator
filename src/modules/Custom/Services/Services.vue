<script setup lang="ts">

</script>
<template>
    <div id="services">
        <div class="services-text">
            <h3>Lo que hacemos</h3>
        </div>
        
        <div class="services-items">
            <div class="service-item">
                <h2>MARKETING DIGITAL</h2>
                <a href="">+</a>
            </div>
            <div class="service-item">
                <h2>EVENTOS VIRTUALES</h2>
                <a href="">+</a>
            </div>
            <div class="service-item">
                <h2>SOLUCIONES EN CONTACT CENTER</h2>
                <a href="">+</a>
            </div>
            <div class="service-item">
                <h2>GOBIERNO EN LÍNEA</h2>
                <a href="">+</a>
            </div>
        </div>
    </div>
</template>
<style  scoped>

/* #services {
    display: flex;
    flex-flow: column wrap;
    justify-content: start;
    align-items: start;
}

.services-text {
    display: flex;
    align-items: center;
    height: 20%;
}

.services-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%;
    width: 100%;
}

.service-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    height: 80%;
    width: 100%;
} */

@media screen and (min-width: 576px) {
    #services {
        background-color: #eee;
        width: 100%;
        height: 100%;
        justify-content: center;
        text-align: center;
    }
    .services-text {
        height: 10%;
    }

    .services-items {
        height: 80%;
    }
}

@media screen and (min-width: 768px){

}

@media screen and (min-width: 992px){

}

@media screen and (min-width: 1200px){

}
</style>