<script setup>
import { RouterView } from 'vue-router';
import Background from './components/Background.vue';


</script>
<template>
    <Background />
    <main>
    <div class="content">
        <div class="deco">
            <div class="deco-info">
                <div class="logo">
                    <img src="https://avatars.githubusercontent.com/u/176500475?v=4" alt="logo" width="250px">
                </div>
                <div class="title">
                    <h1>TechTitans</h1>
                    <p>Grupo Hackaton</p>
                </div>
            </div>
        </div>
        <RouterView></RouterView>
    </div>
</main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');


.button-div{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    top: 2rem;
    margin-bottom: 2rem;
}
.button{
    background-color: #d14632;
    color: #f5f5f5;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 24px;
    font-size: 1rem;
    margin: auto 10px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color .15s cubic-bezier(.4,0,.2,1);
    outline-color: #d14632;
    text-decoration: none;
}
.button:active {
    opacity: .8;
    transform: scale(.95);
}
.button:hover {
    opacity: .95;
    box-shadow: 0 0 3px #d14632;
    outline-color: #d14632;
    outline-style: solid;
    outline-width: 2px;
    outline-offset: 2px;
}
html,
body {
    font-family: 'Inter', sans-serif;
    margin: 0;
}

main {
    display: flex;
    justify-content: center;
    margin: 5rem 0;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    z-index: 1;
}

.deco {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
}

.deco-info {
    color: #dddddd;
    display: flex;
    flex-direction: column;
    padding: 5rem 10rem 2rem;
    text-align: center
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

.logo {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 1.5rem;
}

.team {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #00000080;
    color:#dddddd;
    border-bottom: 2rem;
    padding-bottom: 20px;
}

.team h2 {
    color: #dddddd;
    margin: 2rem 0;
}

.link {
    color: #dddddd;
    margin: 1rem 0;
    padding: 0 2rem;
    text-align: center;
    text-decoration: none;
    border: solid 2px #a7a7a7;
    padding: 12px;
    border-radius: 16px;
    background-color: #0009;
}
.link:hover {
    background-color: #000a;
    cursor: pointer;
    box-shadow: 0 0 10px #232323;
}
.link:active {
    opacity: .8;
    transform: scale(.95);
}

</style>