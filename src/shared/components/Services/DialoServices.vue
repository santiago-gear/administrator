<script setup lang="ts">
    
    import Button from 'primevue/button'
    
    const services = ["Maketing digital", "desarrollo web", "eventos virtuales", "eventos btl", "contact center", "gobierno en linea"]

    // Santi. Tu codigo debajo de esta linea

</script>

<template>
     <div id="service">
        <div>Lo que hacemos</div>
        <div v-for="service in services">
            <h2>{{ service }}</h2>
            <Button label="Agenda una consulta" :pt="{root:{style: {width:'256px', height: '16px', borderRadius:'34px', border: '1px solid black', backgroundColor: '#eee', color: 'black', fontWeight: 'ligth', marginTop: '16px'}}}"/>
        </div>
     </div>
</template>

<style scoped>

    #service {
        background-color: #EEEEEE;
        height: 100vh;
    }

</style>