<template>
  <div class="container">
    <div>
      <h1>Bonjour</h1>
    </div>
    <div>
      <p>Parcourez tous les ouvrages par catégorie</p>
    </div>
    <hr />
    <div>
      <button>Tout</button>
      <button>Roman</button>
      <button>Manga</button>
      <button>Science-fiction</button>
      <button>Bande dessinée</button>
      <button>Essai</button>
    </div>
    <div class="livres-list">
      <div class="livre-card" v-for="livre in livres" :key="livre.id">
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
import { ref, onMounted } from 'vue'

const books = ref([])
const categorieSelectionnee = ref('')
onMounted(async () => {
  const response = await fetch('/data/books.json')
  books.value = await response.json()
})
</script>

<style scoped>
.container {
  padding: 40px;
  background-color: #0d0b14; /* Fond plus sombre pour coller à l'image */
  color: white;
  font-family: 'Inter', sans-serif;

  /* Centre tout le bloc au milieu de l'écran */
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
  transition: 0.3s;
}

button:first-child {
  /* Pour le bouton "Tout" */
  background-color: #6d28d9;
  color: white;
  border-color: #8b5cf6;
}

/* LISTE DE LIVRES */
.livres-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px; /* Ajuste selon la largeur voulue pour tes cartes */
}

/* CARTE DE LIVRE */
.livre-card {
  display: flex;
  align-items: center;
  background-color: #161223;
  padding: 20px;
  border-radius: 16px;
  /* Indispensable pour que le tag se place par rapport à la carte */
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

/* Icône utilisateur simulée avant l'email */
.livre-info .email::before {
  content: '👤';
  font-size: 10px;
  margin-right: 5px;
}

/* TAG DE CATEGORIE : COIN HAUT DROITE */
.categorie-tag {
  position: absolute;
  top: 20px; /* Ajuste la distance du bord haut */
  right: 20px; /* Ajuste la distance du bord droit */

  padding: 4px 15px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;

  /* Style visuel du tag */
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: transparent;
  color: white;
}
</style>
