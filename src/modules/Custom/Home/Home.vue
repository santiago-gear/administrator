<script setup lang="ts">
    import Header from "./components/Header.vue"
    import Introduction from "./components/Introduction.vue"
    import Social from "./components/Social.vue"
</script>

<template>
    <div class="viewport">
        <Header/>
        <div id="content">
            <Social/>
            <Introduction/>
            <div id="left"></div>
        </div>
    </div>
</template>

<style>
#content {
    height: 88%;
    display: flex;
}



@media screen and (min-width: 320px) {
    #social {
        display: none;
    }

    #left {
        display: none;

    }
}  

@media screen and (min-width: 1024px) {
    #intro {
        justify-content: start;
        align-items: start;
        text-align: left;
    }

    #social {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 8%;
    }

    .social-facebook{
        margin-top: 10em;
    }

    #left {
        display: block;
        width: 8%;
    }
}  

   
</style>