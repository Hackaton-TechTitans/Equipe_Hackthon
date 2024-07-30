<script setup>
import { RouterLink } from 'vue-router';
import Membros from '../info'

</script>
<template>
    <div class="team">
            <div class="button-div">
            <RouterLink to="/" class="button">&lt;-- Voltar</RouterLink>
            </div>
            <div class="person">
            <img :src="Membros[$route.params.id - 1].foto" alt="logo">
            <h2>{{ Membros[$route.params.id - 1].nome }}</h2>
            <h3>{{ Membros[$route.params.id - 1].papel }}</h3>
                
            <p v-if="Membros[$route.params.id - 1].descricao">{{ Membros[$route.params.id - 1].descricao }}</p>

            <p>{{ Membros[$route.params.id - 1].turma }}</p>

            <a class="link" :href="Membros[$route.params.id - 1].github" target="_blank">Github</a>
            </div>
    </div>
</template>
<style scoped> 

.person{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
}
.person img {
    border-radius: 12px;
    width: 350px;
    height: 350px;
}

.person h2 {
    color: #dddddd;
    margin: 0.5rem 0;
}
.person h3 {
    color: #dddddd;
    margin: 0.5rem 0;
}
.person p {
    color: #dddddd;
    margin: 1rem 0;
    padding: 0 2rem;
    text-align: center;
}

</style>