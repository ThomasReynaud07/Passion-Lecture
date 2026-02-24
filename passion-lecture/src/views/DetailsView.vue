<script setup>
import { computed } from 'vue'
import booksData from '../assets/books.json'
import BooksDetails from '../components/BooksDetails.vue'

const props = defineProps({
  id: [Number, String],
})

const book = computed(() => {
  for (const book of booksData) {
    if (book.id === Number(props.id)) {
      return book
    }
  }
  // return booksData.find((item) => item.id === Number(props.id))
})
</script>

<template>
  <BooksDetails v-if="book" :book="book" />
  <p v-else>Livre introuvable</p>
</template>
