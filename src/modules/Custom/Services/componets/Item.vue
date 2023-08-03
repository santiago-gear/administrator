<script setup lang="ts">

</script>

<template>
    <div class="information">
        <div class="title josefin">
            <h2 class="text">
                GOBIERNO EN LINEA
            </h2>
        </div>
        <div class="image">
            <img src="https://colnodo.apc.org/apc-aa-files/b9343925f44ed952a644d240a8295b8c/gobierno-en-linea.png" alt="">
        </div>
        <div class="content">
            <p>
                Creamos, analizamos y medimos estrategias de marketing que conecten con sus clientes,  trazando metas que permitan alcanzar sus objetivos a través de distintos canales digitales, con resultado de posicionamiento de marca.
            </p>
            <br>
            <p>
                Aumente y potencialice la exposición de su marca.​
            </p>
            <br>
            <ul>
                <li>Diseño de marca digital.</li>
                <li>Páginas Web Transaccionales.</li>
                <li>Landing Page.</li>
                <li>Formularios </li>
                <li>Desarrollo de Apps.</li>
                <li>Email Marketing.</li>
                <li>Inbound marketing / Google Ads</li>
                <li>Redes sociales.</li>
                <li>Hosting y Dominios.</li>
                <li>Posicionamiento web.</li>
                <li>APP para la identidad de los  ciudadanos</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.information {
    display: flex;
    flex-flow: column wrap;
    align-items: end;
    width: 100%;
    height: 100%;
}

img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.title {
    position: relative;
    text-align: center;
    font-size: 2em;
    width: 98%;
    height: 10%;
    border-bottom: 1px solid black;
}
.text {
    position: absolute;
    bottom: 0px;
    width: 100%;
}
.image {
    width: 98%;
    height: 40%;
    padding: 0.5rem;
    border-radius:4px;
}

.content {
    width: 98%;
    height: 50%;
}

@media screen and (min-width: 1024px) {
    .information {
        flex-flow: row wrap;
        align-items: start;
        justify-content: end;
        align-content: start;
    }
    .title {
        height: 20%;
        width: 98%;
        position: relative;
    }
    
    .text {
        /* width: auto; */
        position: absolute;
        bottom: 2px;
        font-size: 2.5em;
    }

    .image {
        width: 35%;
        height: 60%;
        flex-grow: 1;
        margin-top: 4rem;
    }

    .content {
        width: 60%;
        height: 60%;
        margin-top: 4rem;
    }
}
</style>