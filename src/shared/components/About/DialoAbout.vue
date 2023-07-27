<script setup lang="ts">

    // Santi. Tu codigo debajo de esta linea

</script>

<template>
    <div id="about">
        <div class="item aboutme">
            Acerca de nosotros
        </div>
        <div class="item description">
            OFRECEMOS <span class="s1">CALIDAD DE IDEAS.</span>
            NUESTRO TRABAJO INICIA CON EL CONOCIMIENTO DEL MERCADO. 
            NOS INVOLUCRAMOS PARA ENTENDER EL NEGOCIO DEL CLIENTE Y ESTAMOS CAPACITADOS PARA OFRECERLE <span class="s2">ESTRATEGIAS</span> DE CONTENIDO QUE LOGREN CONECTAR CON SU AUDIENCIA CLAVE.
        </div>
    </div>
</template>

<style>
    #about {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        height: 100vh;
        background-color: black;
        color: white;
    }

    .item {
        width: 57%;
        margin-left: 156px;
    }

    .aboutme {
        margin-top: 170px;
        font-size: 1.6rem;
        margin-bottom: 32px;
    }

    .description {
        font-size: 2rem;
    }

    .s1 {
        color: rgb(114, 182, 13);
    }

    .s2 {
        color: rgb(22, 137, 214);
    }

</style>