<script setup>

import { onMounted } from 'vue';

onMounted(() => {
    const background = document.querySelector('.background');
    for (let i = 0; i < 20; i++) {
        const shape = document.createElement('div');
        shape.classList.add('background-shape');
        const size = Math.random() * 100 + 20;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.borderRadius = `${Math.random() * 50}%`;
        shape.style.top = `${Math.random() * 100}%`;
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.animationDuration = `${Math.random() * 10 + 5}s`;
        shape.style.background = `rgba(255,255,255,${Math.random() * 0.1 + 0.05})`;
        background.appendChild(shape);
    }
}); 

</script>
<template>
    <div class="background"></div>
</template>
<style>

.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(35deg,rgb(108,33,98), rgb(209, 82, 50));
}


.background-shape {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    animation: background-float infinite linear;
    mix-blend-mode: overlay;
    animation-duration: 10s;
    box-shadow: 0 0 15px rgba(40, 40, 40, 0.205);
}

@keyframes background-float {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }

    50% {
        transform: translateY(-20px) rotate(180deg);
        opacity: 0.5;
    }

    100% {
        transform: translateY(0) rotate(360deg);
        opacity: 1;
    }
}
</style>