<script setup>
import Background from './components/Background.vue';
import { ref } from 'vue';
import formMaker from './components/FormBuilder.vue';

const descricao = ref("Descrição");

function Descricao(desc) {
    descricao.value = String(desc);
}

</script>
<template>
    <Background />
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
                    <p>{{ descricao }}</p>
                </div>
            </div>
        </div>
        <div class="form">
            <formMaker @descricao="Descricao" />
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

html,
body {
    font-family: 'Inter', sans-serif;
    height: 100%;
    width: 100%;
    margin: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
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

.deco {
    width: 90%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
}

.deco-info {
    color: #dddddd;
    display: flex;
    flex-direction: column;
    padding: 4rem 2.5rem;
}

.desc {
    font-size: 1rem;
    font-weight: 400;

}

.title h1 {
    margin: 0;
    font-weight: 400;
    font-size: 2.25rem;

}
</style>