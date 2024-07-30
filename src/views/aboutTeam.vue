<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <div class="team">
            <div class="button-div">
            <RouterLink to="/" class="button"> Voltar</RouterLink>
            </div>
            <p>Nossa equipe está trabalhando no projeto do Hackaton com o tema "Vendas"</p>

            <a class="link" href="https://github.com/Hackaton-TechTitans" target="_blank">Github</a>
    </div>
</template>
<style scoped> 

.team {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.team p {
    color: #dddddd;
    margin: 1rem 0;
    padding: 0 2rem;
    text-align: center;
}

</style>