<template>
  <div class="container">
    <div>
      <h1>Catalogue</h1>
    </div>
    <div>
      <p>Parcourez tous les ouvrages par catégorie</p>
    </div>
    <hr />
    <div>
      <div>
        <button @click="tout" :class="{ active: categorieSelectionnee === 'tout' }">Tout</button>
        <button @click="roman" :class="{ active: categorieSelectionnee === 'Roman' }">Roman</button>
        <button @click="manga" :class="{ active: categorieSelectionnee === 'Manga' }">Manga</button>
        <button @click="sci_fi" :class="{ active: categorieSelectionnee === 'Science-Fiction' }">
          Science-fiction
        </button>
        <button @click="bd" :class="{ active: categorieSelectionnee === 'BD' }">
          Bande dessinée
        </button>
        <button @click="essai" :class="{ active: categorieSelectionnee === 'Essai' }">Essai</button>
        <button @click="polar" :class="{ active: categorieSelectionnee === 'Polar' }">Polar</button>
        <button @click="psycho" :class="{ active: categorieSelectionnee === 'Psychologie' }">
          Psychologie
        </button>
        <button @click="espace" :class="{ active: categorieSelectionnee === 'Espace' }">
          Espace
        </button>
        <button @click="cuisine" :class="{ active: categorieSelectionnee === 'Cuisine' }">
          Cuisine
        </button>
        <button @click="thriller" :class="{ active: categorieSelectionnee === 'Thriller' }">
          Thriller
        </button>
      </div>
    </div>
    <div class="livres-list">
      <div class="livre-card" v-for="livre in livresFiltres" :key="livre.id">
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
import { ref, onMounted, computed } from 'vue'

const livres = ref([])
const categorieSelectionnee = ref('tout')
const livresFiltres = computed(() => {})
onMounted(async () => {
  const response = await fetch('/data/books.json')
  livres.value = await response.json()
})
</script>

<style scoped>
.container {
  padding: 40px;
  background-color: transparent;
  color: white;
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

.active {
  color: #6d28d9;
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
div:has(> button) {
  display: flex;
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
}

button:first-child {
  background-color: #6d28d9;
  color: white;
  border-color: #8b5cf6;
}

/* LISTE DE LIVRES */
.livres-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
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
  margin: 0;
  padding: 0;
}
.livre-info .email::before {
  content: '👤';
  font-size: 10px;
  margin-right: 5px;
  display: inline-block;
}

/* TAG DE CATEGORIE : COIN HAUT DROITE */
.categorie-tag {
  position: absolute;
  top: 15px;
  right: 15px;

  padding: 4px 12px;
  border-radius: 15px;
  font-size: 11px;
  font-weight: 500;

  border: 1px solid rgba(255, 255, 255, 0.4);
  background: transparent;
  color: white;
}
</style>
