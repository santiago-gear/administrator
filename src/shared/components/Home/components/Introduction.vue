<script setup lang="ts">
    import Button from 'primevue/button';
</script>

<template>
    <main id="intro">
        <div class="intro-title josefin">
           <h1>DIALO B&M</h1>
        </div>
        <div class="intro-desc">
            <p>Damos valor con soluciones simples, ágiles, flexibles y escalables, integrando calidad humana y tecnología de avanzada.</p>
        </div>
        <div class="intro-button">
            <Button label="Agenda una consulta" :pt="{root:{class: 'pv-button'}}"/>
        </div>
    </main>
</template>

<style>

#intro {
    display: flex;
    height: 100%;
}

.pv-button {
        border-radius: 32px;
        background-color: #eee;
        color: black;
        border: 1px solid black;
        font-size: 1em;
    }

@media screen and (min-width: 320px) {

    #intro {
        text-align: center;
        flex-flow: column nowrap;
        justify-content: start;
        align-items: center;
        /* gap: 1em; */
        background-color: #eee;
    }

    .intro-title {
        font-size: 3.2em;
        flex: 0 1 auto;
        height: 40%;
    }

    .intro-desc {
        font-size: 1.8em;
        flex: 3 0 auto;
    }

    .intro-button {
        flex: 5 0 auto;
    }

    
}    

@media screen and (min-width: 1024px) {
    .intro-title {
        font-size: 7.1vw;
        height: 50%;
    }

    .intro-desc {
        font-size: 1.9vw;
        width: 40%;
        height: 20%;
    }

    .intro-button {
       width: 40%;
    }

    .pv-button {
        border-radius: 32px;
        background-color: #eee;
        color: black;
        border: 1px solid black;
        font-size: 1em;
        height: 2.5rem;
        width: 70%;
    }
}
</style>