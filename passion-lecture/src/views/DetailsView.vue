<script setup>
import { ref, onMounted, watch } from 'vue'
import BooksDetails from '../components/BooksDetails.vue'
import { getBookById } from '@/services/bookServices'

const props = defineProps({
  id: [Number, String],
  back: [Boolean, String],
})

const book = ref(null)
const isLoading = ref(true)

const fetchBookDetails = async () => {
  isLoading.value = true
  const response = await getBookById(props.id)
  book.value = response.data
}

onMounted(() => {
  fetchBookDetails()
})

// Utile si l'utilisateur navigue d'un livre à un autre sans changer de composant
// watch(
//   () => props.id,
//   () => {
//     fetchBookDetails()
//   },
// )
</script>

<template>
  <BooksDetails v-if="book" :book="book" :back="back" />
  <p v-else>Livre introuvable</p>
</template>
