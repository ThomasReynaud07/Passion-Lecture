<script>
import { User } from 'lucide-vue-next'
</script>

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
        <RouterLink
          :to="{ name: 'BookDetails', params: { id: livre.id, back: false } }"
          class="card-link"
        >
          <img :src="livre.imageCouverture" alt="image" class="livre-image" />
          <div class="livre-info">
            <h3>{{ livre.titre }}</h3>
            <p class="auteur">{{ livre.auteur.prenom }} {{ livre.auteur.nom }}</p>
            <div class="meta-info">
              <span class="email">
                <User :size="14" style="margin-right: 4px; vertical-align: middle" />
                {{ livre.userEmail }}
              </span>
            </div>
          </div>
          <span :class="['categorie-tag', livre.categorie.toLowerCase().replace(' ', '-')]">
            {{ livre.categorie }}
          </span>
        </RouterLink>
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
.container {
  padding: 40px 20px;
  max-width: 1100px;
  margin: 0 auto;
  background: transparent !important;
  display: flex;
  flex-direction: column;
}

.header-section {
  margin-bottom: 30px;
}

h1 {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 8px;
  color: white;
}

.header-section p {
  color: #94a3b8;
  font-size: 1.1rem;
}

.boutons-filtres {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
}

button {
  padding: 8px 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 99px;
  background-color: rgba(255, 255, 255, 0.05);
  color: #94a3b8;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

button.active {
  background-color: #7c3aed;
  color: white;
  border-color: #a78bfa;
}

.livres-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.livre-card {
  background-color: rgba(18, 13, 38, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  transition: transform 0.2s;
}

.livre-card:hover {
  background-color: rgba(26, 20, 51, 0.8);
  border-color: rgba(124, 58, 237, 0.3);
}

.card-link {
  display: flex;
  align-items: center;
  padding: 20px 30px;
  position: relative;
}

.livre-image {
  width: 60px;
  height: 85px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 25px;
}

.livre-info {
  flex-grow: 1;
  text-align: left;
}

.livre-info h3 {
  margin: 0 0 4px 0;
  font-size: 1.2rem;
  color: white;
}

.livre-info .auteur {
  color: #a78bfa;
  margin: 0 0 8px 0;
  font-size: 0.95rem;
}

.email {
  font-size: 13px;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 6px;
}

.categorie-tag {
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  background: rgba(148, 163, 184, 0.1);
  color: #cbd5e1;
}

.categorie-tag.roman {
  color: #a78bfa;
  background: rgba(167, 139, 250, 0.15);
}
.categorie-tag.manga {
  color: #fca5a5;
  background: rgba(252, 165, 165, 0.15);
}
.categorie-tag.science-fiction {
  color: #6ee7b7;
  background: rgba(110, 231, 183, 0.15);
}
hr {
  margin: 30px 0;

  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  width: 100%;
}

.boutons-filtres {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 40px;
}
</style>
