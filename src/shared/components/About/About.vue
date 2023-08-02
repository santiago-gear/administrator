<script setup lang="ts">

</script>

<template>
    <div id="about" class="fullscreen">
        <div class="about-item about-title">
            <h2>
                Acerca de nosotros
            </h2>
        </div>
        <div class="about-item about-desc">
            <h2>
                OFRECEMOS CALIDAD DE IDEAS.
                NUESTRO TRABAJO INICIA CON EL CONOCIMIENTO DEL MERCADO.
                NOS INVOLUCRAMOS PARA ENTENDER EL NEGOCIO DEL CLIENTE Y ESTAMOS CAPACITADOS PARA OFRECERLE 
                ESTRATEGIAS DE CONTENIDO QUE LOGREN CONECTAR CON SU AUDIENCIA CLAVE.

            </h2>
        </div>

    </div>
</template>

<style>
#about {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
}


.about-title {
    width: 60%;
    font-size: 1.5vw;

}

.about-desc {
    font-size: 2.5vw;
  
    width: 60%;
}

@media (min-width: 320px) {

    #about {
        text-align: center;
    }

    .about-title {
        height: 10%;
        width: 100%;
        font-size: 1em;
    }

    .about-desc {
        height: 60%;
        width: 100%;
        font-size: 1em;
    }
}

@media (min-width: 1024px) {

    #about {
        text-align: left;
        gap: 3rem;
    }

    .about-title {
        height: 20%;
        width: 90%;
        font-size: 1.5vw;
        display: flex;
        align-items: end;
        margin-left: 10rem;
    }

    .about-desc {
        height: 60%;
        width: 80%;
        font-size: 1.5vw;
        margin-left: 10rem;
    }
}
</style>