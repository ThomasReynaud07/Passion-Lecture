<template>
  <div class="container">
    <div>
      <h1>Bonjour</h1>
    </div>
    <div>
      <p>Parcourez tous les ouvrages par catégorie</p>
    </div>
    <hr />
    <div class="boutons-filtres">
      <button
        @click="categorieSelectionnee = 'Tout'"
        :class="{ active: categorieSelectionnee === 'Tout' }"
      >
        Tout
      </button>
      <button
        @click="categorieSelectionnee = 'Roman'"
        :class="{ active: categorieSelectionnee === 'Roman' }"
      >
        Roman
      </button>
      <button
        @click="categorieSelectionnee = 'Science-Fiction'"
        :class="{ active: categorieSelectionnee === 'Science-Fiction' }"
      >
        Science-Fiction
      </button>
      <button
        @click="categorieSelectionnee = 'Manga'"
        :class="{ active: categorieSelectionnee === 'Manga' }"
      >
        Manga
      </button>
      <button
        @click="categorieSelectionnee = 'BD'"
        :class="{ active: categorieSelectionnee === 'BD' }"
      >
        Bande dessinée
      </button>
      <button
        @click="categorieSelectionnee = 'Essai'"
        :class="{ active: categorieSelectionnee === 'Essai' }"
      >
        Essai
      </button>
      <button
        @click="categorieSelectionnee = 'Polar'"
        :class="{ active: categorieSelectionnee === 'Polar' }"
      >
        Polar
      </button>
      <button
        @click="categorieSelectionnee = 'Psychologie'"
        :class="{ active: categorieSelectionnee === 'Psychologie' }"
      >
        Psychologie
      </button>
      <button
        @click="categorieSelectionnee = 'Espace'"
        :class="{ active: categorieSelectionnee === 'Espace' }"
      >
        Espace
      </button>
      <button
        @click="categorieSelectionnee = 'Cuisine'"
        :class="{ active: categorieSelectionnee === 'Cuisine' }"
      >
        Cuisine
      </button>
      <button
        @click="categorieSelectionnee = 'Thriller'"
        :class="{ active: categorieSelectionnee === 'Thriller' }"
      >
        Thriller
      </button>
    </div>
    <div class="livres-list">
      <div class="livre-card" v-for="livre in booksFiltre" :key="livre.id">
        <img :src="livre.imageCouverture" alt="image" class="livre-image" />
        <div class="livre-info">
          <h3>{{ livre.titre }}</h3>
          <p class="auteur">{{ livre.auteur.prenom }} {{ livre.auteur.nom }}</p>
          <p class="email">{{ livre.userEmail }}</p>
        </div>
        <span class="categorie-tag">{{ livre.categorie }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getBooks } from '@/services/bookServices'
import { ref, onMounted, computed } from 'vue'

const books = ref([])
const categorieSelectionnee = ref('Tout')

onMounted(async () => {
  const booksData = await getBooks()
  books.value = booksData.data
})

const booksFiltre = computed(() => {
  if ((categorieSelectionnee.value == 'Tout') | (categorieSelectionnee.value == null)) {
    return books.value
  }
  return books.value.filter((livre) => livre.categorie === categorieSelectionnee.value)
})
</script>

<style scoped>
.active {
  background-color: #6d28d9;
  color: white;
  border-color: #8b5cf6;
}

.container {
  padding: 40px;
  color: white;
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 5px;
}

p {
  color: #8b85a1;
  margin: 0;
}

hr {
  border: none;
  height: 1px;
  background-color: #2d283e;
  margin: 30px 0;
}

/* BOUTONS DE FILTRE */
.boutons-filtres {
  display: flex;
  flex-wrap: wrap; /* Permet aux boutons de passer à la ligne s'il y en a trop */
  gap: 12px;
  margin-bottom: 30px;
}

button {
  padding: 8px 20px;
  border: 1px solid #332a4d;
  border-radius: 20px;
  background-color: #1a1625;
  color: #8b85a1;
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;
}

/* LISTE DE LIVRES */
.livres-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto; /* <-- C'est cette ligne qui centre le bloc ! */
}

/* CARTE DE LIVRE */
.livre-card {
  display: flex;
  align-items: center;
  background-color: #161223;
  padding: 20px;
  border-radius: 16px;
  position: relative;
}

.livre-image {
  width: 60px;
  height: 85px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
}

.livre-info h3 {
  margin: 0 0 5px 0;
  font-size: 18px;
}

.livre-info .auteur {
  color: #8b85a1;
  font-size: 14px;
  margin-bottom: 5px;
}

.livre-info .email {
  font-size: 12px;
  color: #5d5870;
  display: flex;
  align-items: center;
}

.livre-info .email::before {
  content: '👤';
  font-size: 10px;
  margin-right: 5px;
}

/* TAG DE CATEGORIE */
.categorie-tag {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 4px 15px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: transparent;
  color: white;
}
</style>
