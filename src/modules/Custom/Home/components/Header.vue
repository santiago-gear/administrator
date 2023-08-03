<script setup lang="ts">
import { ref } from 'vue';

const showMenu = ref(false)

function toggleMenu() {
    showMenu.value = !showMenu.value
    console.log(showMenu.value)
}

</script>

<template>
    <header id="header">
        <nav id="navbar">
            <div class="navbar-logo">
                <img src="../../../assets/graphics/logo-black.svg" alt="dialó">
            </div>
            <div class="navbar-menu">
                <img class="navbar-menu-image" @click="toggleMenu" src="../../../assets/graphics/menu.svg" alt="menu">
            </div>
        </nav>
    </header>
    <div id="menu" :class="'montserrat ' + (showMenu ? 'menu-show' : 'menu-hidden')">
        <div class="menu-item">
            <a>Acerca de nosotros</a>
            <span>+</span>
        </div>
        <div class="menu-item">
            <a>Lo que hacemos</a>
            <span>+</span>
        </div>
        <div class="menu-item">
            <a>Lo que dicen nuestros clientes</a>
            <span>+</span>
        </div>
        <div class="menu-item">
            <a>Contáctenos</a>
            <span>+</span>
        </div>
    </div>
</template>

<style>
#header {
    height: 12%;
}

#navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    border-bottom: 1px solid black;

}

.navbar-logo {
    display: flex;
    justify-content: center;
    height: 100%;
}

.navbar-menu {
    display: flex;
    justify-content: center;
    height: 100%;
}

.navbar-menu-image {
    z-index: 10;
    transition: all 500ms;
}


#menu {
    position: absolute;
    z-index: 9;
    height: 100%;
    font-family: 'Montserrat';
    font-weight: 300;
    background-color: #000000E5;
    color: white;
    transition: all 500ms;
}

.menu-item {
    height: 8%;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid white;
}

.menu-show {
    top: 0px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
}

.menu-hidden {
    display: none;
}


@media screen and (min-width: 320px) {
    #header {
        background-color: #eee;
    }

    .navbar-logo {
        width: 96px;
        margin-left: 3rem;

    }

    .navbar-menu {
        width: 48px;
        margin-right: 3rem;
    }

    .menu-show {
        width: 100%;
    }
}

@media screen and (min-width: 1024px) {
    #header {
        width: 86%;
        margin: 0 auto;
    }

    #navbar {
        justify-content: center;
        width: 100%;
    }

    .navbar-logo {
        justify-content: start;
        align-items: center;
        margin-left: 0rem;
        flex-basis: 50%;
    }

    .navbar-menu {
        justify-content: start;
        align-items: center;
        flex-basis: 50%;
    }

    .menu-show {
        width: 40%;
        right: 0px;
    }


    .navbar-menu-image {
        width: 2.5em;
    }
}
</style>