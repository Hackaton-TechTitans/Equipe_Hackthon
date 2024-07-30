<script setup>
import { RouterLink } from 'vue-router';
import Membros from '../info'
</script>
<template>
    <div class="team">
            <div class="button-div">
            <RouterLink to="/about" class="button">Mais sobre a equipe</RouterLink>
            </div>

            <h2>Membros</h2>
            <RouterLink class="membro" v-for="membro in Membros" :key="membro.id" :to="'/membro/' + membro.id">
                <span style="display: contents;">
                    <img :src="membro.foto" alt="logo">
                </span>
                <span>
                    <h3>{{ membro.nome }}</h3>
                    <p>{{ membro.papel }}</p>
                </span>
            </RouterLink>
        </div>
</template>
<style scoped> 

.membro {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem 0;
    background-color: #0009;
    border: solid 1px #a7a7a7;
    padding: 24px;
    border-radius: 16px;
    flex-grow: 1;
    width: 75%;
    text-decoration: none;
    color: #dddddd;
    transition: transform 0.1s;
}
.membro:hover{
    transform: scale(1.1);
    cursor: pointer;
    box-shadow: 0 0 10px #3a3a3a;
}
.membro span {
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
}
.membro span img {
    border-radius: 12px;
    width: 150px;
    height: 150px;
}

</style>