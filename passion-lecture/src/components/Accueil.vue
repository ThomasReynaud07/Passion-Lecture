<script setup>
///Import des Icones
import { ArrowRight, Star, User, Sparkles, BookOpen, Users } from 'lucide-vue-next'
import { ref, onMounted, computed } from 'vue'
import { getBooks } from '@/services/bookServices'
import { getUsers } from '@/services/userServices'

const recentBooks = ref([])

onMounted(async () => {
  const booksData = await getBooks()

  //prendre booksData et mettre dans array pour ensuite le reverse() pour avoir les 5 derniers
  recentBooks.value = [...booksData.data].reverse()
})

const midRate = function (livre) {
  //Si le livre n'as pas encore de notes
  if (!livre.appreciations || livre.appreciations.length === 0) {
    return 0
  }

  let somme = 0
  const liste = livre.appreciations

  for (let i = 0; i < liste.length; i++) {
    somme += liste[i].note
  }

  const resultat = somme / liste.length
  return Number(resultat.toFixed(1))
}
const allUsers = ref([])

onMounted(async function () {
  const usersData = await getUsers()
  allUsers.value = usersData.data
})
</script>

<template>
  <div class="hero-container">
    <div class="badge">
      <Sparkles :size="14" class="icon-sparkle" />
      Votre bibliothèque collaborative
    </div>

    <h1 class="title">Explorez, Partagez, <br /><span>Appréciez</span></h1>

    <p class="description">
      BiblioVerse est une plateforme communautaire où les passionnés de lecture partagent leurs
      ouvrages favoris, laissent des appréciations et découvrent de nouvelles pépites littéraires.
    </p>
    <RouterLink to="/Catalogue" class="router">
      <button class="cta-button">
        Explorer le catalogue
        <ArrowRight :size="18" />
      </button>
    </RouterLink>
    <div class="stats-container">
      <div class="stat-card">
        <div class="icon-wrapper">
          <BookOpen :size="20" />
        </div>
        <h3>Ouvrages</h3>
        <p>partagés</p>
      </div>

      <div class="stat-card">
        <div class="icon-wrapper">
          <Users :size="20" />
        </div>
        <h3>Membres</h3>
        <p>actifs</p>
      </div>

      <div class="stat-card">
        <div class="icon-wrapper">
          <Star :size="20" />
        </div>
        <h3>Appréciations</h3>
        <p>données</p>
      </div>
    </div>
  </div>
  <section class="recent-adds">
    <div class="section-header">
      <div>
        <h2>Derniers ajouts</h2>
        <p>Les 5 derniers ouvrages partagés par la communauté</p>
      </div>
      <RouterLink to="/Catalogue" class="view-all">Voir tout <ArrowRight :size="16" /></RouterLink>
    </div>

    <div class="books-grid">
      <div v-for="book in recentBooks.slice(0, 5)" :key="book.id">
        <RouterLink
          :to="{ name: 'BookDetails', params: { id: book.id, back: true } }"
          class="book-link"
        >
          <div class="book-card">
            <div class="book-cover">
              <img :src="book.imageCouverture" alt="Cover" />
              <span class="genre-badge roman">{{ book.categorie }}</span>
              <div class="rating-badge">
                <Star :size="12" fill="#fbbf24" color="#fbbf24" />
                <span>{{ midRate(book) }}</span>
              </div>
            </div>
            <div class="book-info" v-for="user in allUsers" :key="user.id">
              <h3>{{ book.titre }}</h3>
              <p class="author">{{ book.auteur.nom }} {{ book.auteur.prenom }}</p>
              <div class="user-info">
                <User :size="14" />
                <span>{{ user.email }}</span>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.router {
  padding: 0%;
  margin: 0%;
}
.hero-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 75px;
}

.badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.3);
  padding: 6px 14px;
  border-radius: 99px;
  font-size: 0.85rem;
  color: #a78bfa;
  margin-bottom: 32px;
}

.icon-sparkle {
  color: #c084fc;
}

.title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
}

.title span {
  background: linear-gradient(to bottom, #fff, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 650px;
  font-size: 1.1rem;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 48px;
}

.cta-button {
  background: #7c3aed;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  margin-bottom: 80px;
}

.cta-button:hover {
  background: #6d28d9;
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 600px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: border 0.3s ease;
}

.stat-card:hover {
  border-color: rgba(124, 58, 237, 0.5);
}

.icon-wrapper {
  color: #94a3b8;
  margin-bottom: 12px;
}

.stat-card h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}

.stat-card p {
  font-size: 0.8rem;
  color: #64748b;
  margin-top: 4px;
}

.recent-adds {
  width: 100%;
  max-width: 1400px;
  margin: 100px auto;
  padding: 0 40px;
  text-align: left;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: -1.5px;
  margin: 0 0 10px 0;
  background: linear-gradient(to right, #fff, #94a3b8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-header p {
  color: #94a3b8;
  font-size: 1.2rem;
  margin: 0;
}

.view-all {
  color: #a78bfa;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 12px;
  background: rgba(167, 139, 250, 0.05);
  transition: all 0.3s ease;
}

.view-all:hover {
  background: rgba(167, 139, 250, 0.1);
  transform: translateX(5px);
}

/* --- LA GRILLE --- */
.books-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px; /* Réduit de 30px pour plus de compacité */
  align-items: stretch;
}

/* --- LA CARTE --- */
.book-card {
  background: #120d26;
  border-radius: 18px; /* Un peu plus subtil que 24px */
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
}

.book-card:hover {
  transform: translateY(-8px); /* Moins violent que -12px */
  border-color: rgba(139, 92, 246, 0.4);
  box-shadow: 0 15px 30px -10px rgba(124, 58, 237, 0.2);
}

/* --- LA COUVERTURE (RÉDUITE) --- */
.book-cover {
  position: relative;
  /* Passage au format 3/4 : plus court, plus moderne */
  aspect-ratio: 3 / 4;
  background: #1e1b2e;
  overflow: hidden;
  flex-shrink: 0;
}

.book-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* --- LES INFOS (OPTIMISÉES) --- */
.book-info {
  padding: 16px; /* Réduit de 24px pour gagner de la place */
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.book-info h3 {
  font-size: 1.1rem; /* Un peu plus petit pour le confort visuel */
  font-weight: 700;
  margin: 0 0 4px 0;
  color: #fff;

  /* Sécurité anti-décalage (2 lignes max) */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.4em;
}

.author {
  color: #8b5cf6;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 12px;
  /* Pousse le bloc suivant vers le bas */
  margin-bottom: auto;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #64748b;
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.02);
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  margin-top: 10px;
}

/* --- BADGES (PLUS FINS) --- */
.genre-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.7rem;
  background: rgba(124, 58, 237, 0.9);
  backdrop-filter: blur(8px);
}

.rating-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 8px;
  background: rgba(15, 12, 33, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  font-size: 0.8rem;
  color: #fbbf24;
}

@media (max-width: 1024px) {
  .books-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 640px) {
  .books-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .stats-container {
    grid-template-columns: 1fr;
  }
}
</style>
