<script setup>

import { ref, onMounted } from 'vue';


onMounted(() => {
    const background = document.querySelector('.background');
    for (let i = 0; i < 20; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
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
    <div class="content">
        <div class="deco">
            <div class="deco-info">
                <div class="logo"> 
                    <img src="/logo.png" alt="logo" width="52px">
                </div>
            <div class="title"> 
                <h1>Form Dev-Web</h1>
            </div>
            <div class="desc">
                <p>Descrição</p>
            </div>
        </div>
    </div>
        <div class="form">  
            <div class="form-contents">
            <div class="input-div">
                <input name="nome" id="nome" class="input" type="text" required>
                <label for="nome" class="input-label">Nome</label>
            </div>
            <div class="input-div">
                <input name="nome" id="nome" class="input" type="text" required>
                <label for="nome" class="input-label">Nome</label>
            </div>
            <div class="input-div button-div">
                <button class="button-avancar">Avançar</button>
            </div>
        </div>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

.form{
    display: flex;
    width: 100%;
    height: 100%;
    flex-grow: 1;

}
.form-contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.input-div {
    position: relative;
    margin: 0.5rem 0;
    display: flex;
    width: 85%;
}

.input {
    border: solid 2px #a7a7a7;
    border-radius: 13px;
    background: none;
    padding: 1rem;
    font-size: 1rem;
    color: #f5f5f5;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.6);
}


.input-label {
    position: absolute;
    top: 1rem;
    font-size: 1rem;
    left: 15px;
    color: #e8e8e8;
    pointer-events: none;
    background-color: #210b0e;
    border-radius: 13px;
    transform-origin: top left;
    transform: translateY(0);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), border 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input:focus,
.input:valid {
    outline: none;
    border: 2px solid rgb(209, 90, 50);
}

.input:focus ~ .input-label,
.input:valid ~ .input-label {
    border-top: solid 0.2px rgb(209, 82, 50);
    transform: translateY(-1.5rem) scale(0.8);
    padding: 0 0.5em;
    color: rgb(209, 82, 50);
}

html, body {
    font-family: 'Inter', sans-serif;
    height: 100%;
    width: 100%;
    margin: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(35deg,rgb(108,33,98), rgb(209, 82, 50));
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.shape {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    animation: float infinite linear;
    mix-blend-mode: overlay;
    animation-duration: 10s;
    box-shadow: 0 0 15px rgba(40, 40, 40, 0.205);
}

@keyframes float {
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

.content {
    display: flex;
    height: 500px;
    width: 750px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    z-index: 1;
}
.deco{
    width: 90%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
}
.form {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
.button-div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    top: 2rem;
}
.button-avancar{
    background-color: rgb(209, 70, 50);
    color: #f5f5f5;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 24px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    outline-color: rgb(209, 70, 50);
}
.button-avancar:hover{
    opacity: 0.95;
    box-shadow: 0 0 3px rgb(209, 70, 50);
}
.button-avancar:active{
    opacity: 0.8;
    transform: scale(0.95);
}
.button-avancar:focus{
    outline-color: rgb(209, 70, 50);
    outline-style: solid;
    outline-width: 2px;
    outline-offset: 2px;
}
.deco-info{
    color: #dddddd;
    display: flex;
    flex-direction: column;
    padding: 4rem 2.5rem;
}
.desc{
    font-size: 1rem;
    font-weight: 400;

}
.title h1{ 
    margin: 0;
    font-weight: 400;
    font-size: 2.25rem;

}
</style>