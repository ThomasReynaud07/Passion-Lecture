<script setup>
import { ref, onMounted, watch } from 'vue'
import BooksDetails from '../components/BooksDetails.vue'

const props = defineProps({
  id: [Number, String],
})

const book = ref(null)
const isLoading = ref(true)

const fetchBookDetails = async () => {
  isLoading.value = true
  const response = await fetch(
    `https://my-json-server.typicode.com/ThomasReynaud07/Passion-lecture/books/${props.id}`,
  )
  book.value = await response.json()
}

onMounted(() => {
  fetchBookDetails()
})

// Utile si l'utilisateur navigue d'un livre à un autre sans changer de composant
watch(
  () => props.id,
  () => {
    fetchBookDetails()
  },
)
</script>

<template>
  <BooksDetails v-if="book" :book="book" />
  <p v-else>Livre introuvable</p>
</template>
