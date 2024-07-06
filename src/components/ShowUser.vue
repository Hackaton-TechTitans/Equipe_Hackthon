<script setup>

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});

const nascimento = new Date(props.data.birthdate).toLocaleDateString();
const idade = new Date().getFullYear() - new Date(props.data.birthdate).getFullYear();
console.log(props.data.imagem)
</script>
<template>
    <div class='content-div'>
        <h1>Formulario Completo!</h1>
        <h2>Informações do Usuário</h2>
        <div>
            <img v-if="data.imagem" v-bind:src="data.imagem" alt="Imagem"
                style="width: 200px; height: 200px; border-radius: 50%; margin-left:4.5rem;">
            <h2>Dados Pessoais</h2>
            <p><strong>Nome:</strong> {{ data.name + data.surname }}</p>
            <p><strong>Email:</strong> {{ data.email }}</p>
            <p><strong>Idade:</strong> {{ idade }}</p>
            <p><strong>Data de Nascimento:</strong> {{ nascimento }}</p>
        </div>

        <div>
            <h2>Endereço</h2>
            <p><strong>Endereço:</strong> {{ data.endereco }}</p>
            <p><strong>Cidade:</strong> {{ data.cidade }}</p>
            <p><strong>Estado:</strong> {{ data.estado }}</p>
        </div>

        <div>
            <h2>Hobbies</h2>
            <ul>
                <li v-for="(hobby, index) in data.hobbies" :key="index">{{ hobby }}</li>
            </ul>
        </div>

        <div>
            <h2>Linguagens</h2>
            <ul>
                <li v-for="(linguagem, index) in data.linguagens" :key="index">{{ linguagem }}</li>
            </ul>
        </div>

        <div>
            <h2>Biografia</h2>
            <p>{{ data.biografia }}</p>
        </div>
    </div>
</template>
<style scoped>
.content-div {
    overflow: scroll;
    height: 74%;
    overflow-x: auto;
    font-size: 15px;
    padding: 0 20px;
}

h1,
h2 {
    color: rgb(210, 210, 210);
    margin: 30px 0;
}

p {
    margin: 0.5em 0;
}

ul {
    padding-left: 1.2em;
    list-style-type: disc;
}
</style>