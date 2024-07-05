<template>
  <div class="language-input">
    <div class="tags">
      <span v-for="(language, index) in languages" :key="index" class="tag">
        {{ language }}
        <button class="delete-btn" @click="removeLanguage(index)">X</button>
      </span>
      <input
        v-model="currentLanguage"
        @keydown.space.prevent="addLanguage"
        @keydown.enter.prevent
        @blur="addLanguage"
        class="input"
        placeholder="Type a programming language and press space"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const languages = ref([])
const currentLanguage = ref('')

const addLanguage = () => {
  if (currentLanguage.value.trim()) {
    languages.value.push(currentLanguage.value.trim())
    currentLanguage.value = ''
  }
}

const removeLanguage = (index) => {
  languages.value.splice(index, 1)
}
</script>

<style scoped>
.language-input {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 4px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.tag {
  background-color: #e0e0e0;
  border-radius: 2px;
  padding: 2px 8px;
  margin: 2px;
  display: flex;
  align-items: center;
}

.delete-btn {
  margin-left: 5px;
  cursor: pointer;
  background: none;
  border: none;
  color: #777;
}

.input {
  border: none;
  outline: none;
  padding: 2px;
  margin: 2px;
  min-width: 150px;
}
</style>
