<script setup>
import { ArrowLeft, Star, Edit3, Trash2, BookOpen, Calendar, Layers } from 'lucide-vue-next'

const props = defineProps({
  book: Object,
  back: Boolean,
})
console.log(props.back)
</script>

<template>
  <div class="details-container">
    <RouterLink to="/" v-if="back === true || back === 'true'" class="back-link">
      <ArrowLeft :size="18" /> Retour à l'Accueil
    </RouterLink>
    <RouterLink to="/Catalogue" v-else class="back-link">
      <ArrowLeft :size="18" /> Retour au Catalogue
    </RouterLink>

    <div class="main-content">
      <div class="cover-section">
        <img :src="book.imageCouverture" :alt="book.titre" class="large-cover" />
      </div>

      <div class="info-section">
        <div class="header-actions">
          <span class="category-tag">{{ book.categorie }}</span>
          <div class="admin-buttons">
            <button class="btn-edit"><Edit3 :size="16" /> Modifier</button>
            <button class="btn-delete"><Trash2 :size="16" /> Supprimer</button>
          </div>
        </div>

        <h1 class="book-title">{{ book.titre }}</h1>
        <p class="book-author">par {{ book.auteur?.prenom }} {{ book.auteur?.nom }}</p>

        <div class="rating-box">
          <div class="big-score">
            <span class="score-value">{{ book.noteMoyenne }}</span>
            <span class="score-max">/ 5</span>
          </div>
          <div class="stars-col">
            <div class="stars">
              <Star
                v-for="i in 5"
                :key="i"
                :size="20"
                :fill="i <= Math.floor(book.noteMoyenne) ? '#fbbf24' : 'transparent'"
                color="#fbbf24"
              />
            </div>
            <p>{{ book.appreciations?.length || 0 }} appréciation(s)</p>
          </div>
        </div>

        <div class="specs-grid">
          <div class="spec-item">
            <BookOpen :size="18" /> <strong>Éditeur :</strong> {{ book.editeur }}
          </div>
          <div class="spec-item">
            <Calendar :size="18" /> <strong>Année :</strong> {{ book.annee }}
          </div>
          <div class="spec-item">
            <Layers :size="18" /> <strong>Pages :</strong> {{ book.pages }}
          </div>
        </div>

        <div class="resume-section">
          <h3>RÉSUMÉ</h3>
          <p>{{ book.resume }}</p>
        </div>
      </div>
    </div>

    <section class="comments-section">
      <h2 class="comments-title">
        <BookOpen :size="24" /> Appréciations & Commentaires
        <span>({{ book.appreciations?.length || 0 }})</span>
      </h2>

      <div v-if="book.appreciations && book.appreciations.length > 0" class="comments-list">
        <div v-for="comment in book.appreciations" :key="comment.id" class="comment-card">
          <div class="user-avatar">
            {{ comment.userEmail?.charAt(0).toUpperCase() }}
          </div>
          <div class="comment-content">
            <div class="comment-header">
              <span class="user-email">{{ comment.userEmail }}</span>
              <div class="comment-stars">
                <Star
                  v-for="i in 5"
                  :key="i"
                  :size="14"
                  :fill="i <= comment.note ? '#fbbf24' : 'transparent'"
                  color="#fbbf24"
                />
              </div>
            </div>
            <p class="comment-text">{{ comment.commentaire }}</p>
          </div>
        </div>
      </div>
      <p v-else class="no-comments">Aucun commentaire pour le moment.</p>
    </section>
  </div>
</template>

<style scoped>
/* Conteneur Principal */
.details-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  color: #f8fafc;
  text-align: left;
}

.back-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 30px;
  transition: color 0.3s;
}

.back-link:hover {
  color: #fff;
}

/* Layout Main Content */
.main-content {
  display: flex;
  gap: 60px;
  margin-bottom: 80px;
}

.large-cover {
  width: 380px;
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  object-fit: cover;
}

.info-section {
  flex: 1;
}

/* Header & Badges */
.header-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.category-tag {
  background: rgba(124, 58, 237, 0.15);
  color: #a78bfa;
  padding: 6px 16px;
  border-radius: 99px;
  border: 1px solid rgba(124, 58, 237, 0.3);
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
}

.admin-buttons {
  display: flex;
  gap: 12px;
}

.btn-edit,
.btn-delete {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s;
}

.btn-edit {
  color: #a78bfa;
  border: 1px solid #334155;
}
.btn-delete {
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

/* Titres */
.book-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.1;
}

.book-author {
  font-size: 1.25rem;
  color: #a78bfa;
  margin: 10px 0 30px 0;
}

/* Rating Box (Violette foncée) */
.rating-box {
  background: rgba(124, 58, 237, 0.05);
  border: 1px solid rgba(124, 58, 237, 0.1);
  padding: 24px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;
}

.big-score .score-value {
  font-size: 2.5rem;
  font-weight: 800;
}
.big-score .score-max {
  color: #64748b;
  font-size: 1.1rem;
}

.stars-col p {
  color: #64748b;
  font-size: 0.9rem;
  margin-top: 4px;
}

/* Specs Grid */
.specs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #f8fafc;
}

.spec-item svg {
  color: #a78bfa;
}

/* Résumé */
.resume-section h3 {
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  color: #64748b;
  margin-bottom: 12px;
}

.resume-section p {
  color: #cbd5e1;
  line-height: 1.7;
}

/* Section Commentaires */
.comments-section {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 60px;
}

.comments-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.comments-title span {
  color: #64748b;
  margin-left: 8px;
}

/* Cartes de commentaires */
.comment-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
}

.user-avatar {
  width: 44px;
  height: 44px;
  background: #7c3aed;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.user-email {
  font-weight: 600;
  font-size: 1rem;
}
.comment-text {
  color: #94a3b8;
  line-height: 1.6;
}
</style>
