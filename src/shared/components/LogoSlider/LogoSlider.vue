<script setup lang="ts">
import { ref } from "vue";
import { getLogos } from "./services/getLogos";

// const logos = ref(getLogos())

const props = defineProps({
	element:{
		type:Object,
		required:true
	}
})

</script>

<template>
	<div class="logo-slider">
		<div class="logo-slide-track">
			<div class="slide" v-for="image in element.images">
				<img class="img-slider" :src="image.url" :alt=image.alt />
			</div>
		</div>
	</div>                                                                                                                                                                                         
</template>

<style scoped>
@keyframes scroll {
	0% {
		transform: translateX(0);
	}

	100% {
		transform: translateX(calc(-250px * 7));
	}
}

.img-slider {
	width: 250px;
	height: 100px;
}

.logo-slider {
	background: white;
	box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
	height: 100px;
	margin: auto;
	overflow: hidden;
	position: relative;
	width: 100%;
}

.logo-slider::before,
.logo-slider::after {
	background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
	content: "";
	height: 100px;
	position: absolute;
	width: 200px;
	z-index: 2;
}

.logo-slider::after {
	right: 0;
	top: 0;
	transform: rotateZ(180deg);
}

.logo-slider::before {
	left: 0;
	top: 0;
}

.logo-slider .logo-slide-track {
	animation: scroll 40s linear infinite;
	display: flex;
	width: calc(250px * 14);
}

.logo-slider .slide {
	height: 100px;
	width: 250px;
}</style>