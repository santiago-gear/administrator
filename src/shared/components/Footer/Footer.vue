<script setup lang="ts">


</script>

<template>
    <div class="container">
        <footer id="footer">
            <div class="a1">LOGO</div>
            <div class="a2">
                <a href="#">Acerca de nosotros</a>
            </div>
            <div class="a3">
                <a href="#">Lo que hacemos</a>
            </div>
            <div class="a4">
               <a href="#">¿Tienes un proyecto?</a>
            </div>
            <div class="a5">
                <a href="">Agenda una reunión por Calendly</a>
            </div>
            <div class="a6">6</div>
            <div class="a7">7</div>
            <div class="a8">8</div>
            <div class="a9">9</div>
            <div class="footer-sn">footer</div>
        </footer>
    </div>
</template>

<style scoped>

.a1 {
    background-color: red;
    height: 10%;
    width: 50%;
}

.a2 {
    background-color: rgb(23, 129, 57);
    height: 10%;
    width: 25%;
}
.a3 {
    background-color: rgb(118, 154, 186);
    width: 25%;
    height: 10%;
}
.a3 {
    background-color: rgb(118, 154, 186);
    width: 25%;
    height: 10%;
}

.container {
    width: 480px;
    height: 100vh;
    margin: 0 auto;
}
#footer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    color: white;
    background-color: black;

}



@media screen and (min-width: 480px) {
    #footer {
        flex-direction: row;
        flex-wrap: wrap;
        background-color: rgb(74, 93, 87);
    }
}

@media screen and (min-width: 768px) {
    
}

@media screen and (min-width: 1024px) {
    
}

</style>
