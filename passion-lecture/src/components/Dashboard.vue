<script setup>
import { Star, User, BookOpen, MessageSquare, Calendar, Edit3 } from 'lucide-vue-next'
import { ref, onMounted, computed } from 'vue'
import { getBooks } from '@/services/bookServices'
import { getUsers } from '@/services/userServices'

const allBooks = ref([])
const allUsers = ref([])

onMounted(async function () {
  const booksData = await getBooks()
  allBooks.value = booksData.data
})

onMounted(async function () {
  const usersData = await getUsers()
  allUsers.value = usersData.data
})

const currentUser = computed(function () {
  return allUsers.value[0] || null
})

const userBooks = computed(function () {
  var resultats = []

  if (!allBooks.value || !currentUser.value) {
    return resultats
  }

  var listeComplete = allBooks.value
  var idCherche = currentUser.value.id

  for (var i = 0; i < listeComplete.length; i++) {
    var livreActuel = listeComplete[i]
    if (livreActuel.userID === idCherche) {
      resultats.push(livreActuel)
    }
  }

  return resultats
})

const midRate = function (livre) {
  if (!livre.appreciations || livre.appreciations.length === 0) return 0
  let somme = 0
  livre.appreciations.forEach((note) => (somme += note.note))
  return Number((somme / livre.appreciations.length).toFixed(1))
}
</script>
<template>
  <div class="profile-container" v-if="currentUser">
    <header class="profile-header">
      <div class="avatar-container">
        <div class="avatar">
          {{ currentUser.username?.charAt(0).toUpperCase() }}
        </div>
      </div>

      <div class="profile-main-info">
        <div class="name-section">
          <h1>
            {{ currentUser.username }}
            <Edit3 :size="18" class="edit-icon" />
          </h1>
          <p class="email">{{ currentUser.email }}</p>
        </div>

        <div class="stats-bar">
          <div class="stat-item">
            <BookOpen :size="16" />
            <span>
              <strong>{{ userBooks.length }}</strong> ouvrage(s) proposé(s)
            </span>
          </div>
          <div class="stat-item">
            <MessageSquare :size="16" />
            <span><strong>4</strong> appréciation(s)</span>
          </div>
          <div class="stat-item">
            <Calendar :size="16" />
            <span>Membre depuis février 2026</span>
          </div>
        </div>
      </div>
    </header>

    <section class="user-content">
      <h2 class="section-title">Ouvrages proposés</h2>

      <div v-if="userBooks.length === 0" class="no-books">
        <p>Cet utilisateur n'a pas encore partagé d'ouvrages.</p>
      </div>

      <div class="books-grid" v-else>
        <div v-for="book in userBooks" :key="book.id">
          <RouterLink
            :to="{ name: 'BookDetails', params: { id: book.id, back: true } }"
            class="book-link"
          >
            <div class="book-card">
              <div class="book-cover">
                <img :src="book.imageCouverture" alt="Cover" />
                <span class="genre-badge">{{ book.categorie }}</span>
                <div class="rating-badge">
                  <Star :size="12" fill="#fbbf24" color="#fbbf24" />
                  <span>{{ midRate(book) }}</span>
                </div>
              </div>
              <div class="book-info">
                <h3>{{ book.titre }}</h3>
                <p class="author">{{ book.auteur?.prenom }} {{ book.auteur?.nom }}</p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="loading-state">
    <p>Chargement du profil...</p>
  </div>
</template>
<style scoped>
.profile-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  text-align: left;
}

/* Header Profil Style */
.profile-header {
  background: rgba(30, 27, 46, 0.4);
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: 24px;
  padding: 40px;
  display: flex;
  gap: 30px;
  align-items: center;
  margin-bottom: 60px;
  backdrop-filter: blur(10px);
}

.avatar {
  width: 100px;
  height: 100px;
  background: #7c3aed;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 800;
  color: white;
  box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
}

.name-section h1 {
  font-size: 2.2rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
}

.edit-icon {
  color: #64748b;
  cursor: pointer;
  transition: color 0.3s;
}

.edit-icon:hover {
  color: #a78bfa;
}

.email {
  color: #64748b;
  margin: 5px 0 20px 0;
}

.stats-bar {
  display: flex;
  gap: 25px;
  color: #94a3b8;
  font-size: 0.9rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-item strong {
  color: #fff;
}

/* Grille Ouvrages */
.section-title {
  font-size: 1.5rem;
  margin-bottom: 30px;
  font-weight: 700;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 25px;
}

.book-card {
  background: #120d26;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.book-card:hover {
  transform: translateY(-8px);
  border-color: rgba(124, 58, 237, 0.4);
}

.book-cover {
  position: relative;
  aspect-ratio: 3/4;
}

.book-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.genre-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(124, 58, 237, 0.6);
  backdrop-filter: blur(8px);
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
}

.rating-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  padding: 4px 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fbbf24;
  font-weight: 700;
}

.book-info {
  padding: 15px;
}

.book-info h3 {
  font-size: 1.1rem;
  margin: 0 0 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.author {
  color: #64748b;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
  }
  .stats-bar {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
