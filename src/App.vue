<script setup>

import { ref } from 'vue';
import estados from './estados';

const hobbies = ref([]);




</script>
<template>
  <form class="form">
    <h3>Formulario Vue</h3>

    <div class="sla">
      <label for="nome">Nome</label>
      <input type="text" id="nome" name="nome" v-model="nome">
    </div>

    <div class="sla">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="email">
    </div>

    <div class="sla">
      <label for="senha">Senha</label>
      <input type="password" id="senha" name="senha" v-model="senha">
    </div>

    <div class="sla">
      <label for="senha_confirmacao">Confirmação de Senha</label>
      <input type="password" id="senha_confirmacao" qname="senha_confirmacao" v-model="senha_confirmacao">
    </div>

    <div class="sla">
      <label for="nascimento">Data de Nascimento</label>
      <input type="date" id="nascimento" name="nascimento" v-model="nascimento">
    </div>

    <div class="sla">
      <label for="endereco">Endereço</label>
      <input type="text" id="endereco" name="endereco" v-model="endereco">
    </div>

    <div class="sla">
      <label for="cidade">Cidade</label>
      <input type="text" id="cidade" name="cidade" v-model="cidade">
    </div>

    <div class="sla">
      <label for="estado">Estado</label>
      <select v-model="estado">
        <option v-for="estado in estados" :value="estado.sigla">{{ estado.nome }}</option>
      </select>
    </div>

    <div class="sla">
      <label for="hobbies">Hobbies</label>
      <input type="text" id="hobbies" name="hobbies" v-model="hobby">
      <button type="button" @click="hobbies.push(hobby)">Adicionar</button>

      <div style="display: flex; flex-wrap: wrap;">
        <span class="hobby" v-for="hobby in hobbies">{{ hobby }}
          <button type="button" @click="hobbies.splice(hobbies.indexOf(hobby), 1)">X</button>
        </span>
      </div>
    </div>

    <div class="sla">
      <label for="biografia">Biografia</label>
      <textarea id="biografia" name="biografia" v-model="biografia"></textarea>
    </div>

    <button type="submit">Enviar</button>

  </form>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

body {
  justify-content: center;
  align-items: center;
  background-color: rgb(35, 33, 44);
  color: white;
  font-family: 'Roboto', sans-serif;
}

.form {
  margin: 20px;
  color: rgb(217, 217, 217);
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  padding: 25px;
  border: 2px solid rgb(135, 202, 222);
  border-radius: 15px;
}

.sla {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

}

input {
  background-color: rgb(217, 217, 217);
  padding: 15px 5px;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  user-select: none;
  outline: none;
  max-width: calc(100% - 10px);
}

textearea {
  resize: both;
  /* impede que o próprio usuário altere o tamanho do textarea */
  width: 300px;
  height: 100px;
  /* overflow-y: auto; */
}


input:hover {
  background-color: rgb(255, 255, 255);
}

input:focus {
  background-color: rgb(255, 255, 255);

}

.hobby {
  display: flex;
  background-color: rgb(135, 202, 222);
  color: white;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
}

.hobby button {
  background-color: rgb(255, 0, 0);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-left: 5px;
}
</style>