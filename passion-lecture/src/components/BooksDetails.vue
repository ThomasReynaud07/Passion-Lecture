<script setup>
import { ArrowLeft, Star, Edit3, Trash2, BookOpen, Calendar, Layers, Send } from 'lucide-vue-next'
import { deleteBook, addComment } from '@/services/bookServices' // importer le bookservice
import { useRouter } from 'vue-router' //  rediriger après la suppression
import { ref, computed } from 'vue'

const props = defineProps({
  book: Object,
  back: Boolean,
})
const router = useRouter()

const handleDelete = async () => {
  // confirmation par l'utilisateur de bien vouloir supprimer
  if (confirm(`Êtes-vous sûr de vouloir supprimer "${props.book.titre}" ?`)) {
    try {
      // appel de deletBook qui se trouve dans bookService
      await deleteBook(props.book.id)

      // message alert qui confirme la suppression
      alert('Le livre a été supprimé avec succès.')
      router.push('/Catalogue') // redirige vers le catalogue
    } catch (error) {
      // message d'erreur si il y'a un proble lors de la suppression
      console.error('Erreur lors de la suppression:', error)
      alert('Impossible de supprimer le livre.')
    }
  }
}
const newComment = ref({
  commentaire: '',
  note: 0,
  userEmail: 'user@gmail.com',
})

const handleaddComment = async () => {
  if (newComment.value.note === 0) return

  const commentToAdd = {
    ...newComment.value,
  }

  //prends tous les comment et ajoute le dernier a la fin
  const updatedAppreciations = [...props.book.appreciations, commentToAdd]

  await addComment(props.book.id, updatedAppreciations)

  props.book.appreciations.push(commentToAdd)

  //reset forms
  newComment.value.commentaire = ''
  newComment.value.note = 0

  alert('Merci pour votre avis !')
}

const noteMoyenneCalculee = computed(function () {
  var appreciations = props.book.appreciations
  var total = 0

  for (var i = 0; i < appreciations.length; i++) {
    total = total + appreciations[i].note
  }

  var resultat = total / appreciations.length

  return Math.round(resultat * 10) / 10
})
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
            <router-link :to="`/Modification/${book.id}`">
              <button class="btn-edit"><Edit3 :size="16" /> Modifier</button>
            </router-link>
            <button class="btn-delete" @click="handleDelete">
              <Trash2 :size="16" /> Supprimer
            </button>
          </div>
        </div>

        <h1 class="book-title">{{ book.titre }}</h1>
        <p class="book-author">par {{ book.auteur?.prenom }} {{ book.auteur?.nom }}</p>

        <div class="rating-box">
          <div class="big-score">
            <span class="score-value">{{ noteMoyenneCalculee }}</span>
            <span class="score-max">/ 5</span>
          </div>
          <div class="stars-col">
            <div class="stars">
              <Star
                v-for="i in 5"
                :key="i"
                :size="20"
                :fill="i <= Math.floor(noteMoyenneCalculee) ? '#fbbf24' : 'transparent'"
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

      <div class="add-comment-container">
        <div class="rating-selector">
          <span class="label">Votre note</span>
          <div class="stars-input">
            <span class="score-num">{{ newComment.note }}</span>
            <Star
              v-for="i in 5"
              :key="i"
              :size="24"
              class="star-clickable"
              :fill="i <= newComment.note ? '#fbbf24' : 'transparent'"
              :color="i <= newComment.note ? '#fbbf24' : '#475569'"
              @click="newComment.note = i"
            />
          </div>
        </div>

        <div class="textarea-wrapper">
          <textarea
            v-model="newComment.commentaire"
            placeholder="Votre commentaire (optionnel)..."
            rows="3"
          ></textarea>
        </div>

        <button class="submit-btn" @click="handleaddComment" :disabled="newComment.note === 0">
          <Send :size="18" /> Publier
        </button>
      </div>

      <hr class="section-divider" />

      <hr class="separator" />

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
/* Container de saisie */
.add-comment-container {
  background: rgba(30, 27, 46, 0.7); /* Violet très sombre */
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin-top: 20px;
  margin-bottom: 40px;
}

.rating-selector .label {
  display: block;
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 8px;
}

.stars-input {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
}

.score-num {
  color: #fbbf24;
  font-weight: 800;
  font-size: 1.2rem;
  margin-right: 8px;
}

.star-clickable {
  cursor: pointer;
  transition: all 0.2s;
}

.star-clickable:hover {
  transform: scale(1.1);
}

/* Le Textarea avec l'effet néon violet de ta photo */
.textarea-wrapper textarea {
  width: 100%;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 16px;
  color: #f8fafc;
  font-family: inherit;
  resize: none;
  transition: all 0.3s ease;
  outline: none;
}

.textarea-wrapper textarea:focus {
  border-color: #7c3aed; /* Bordure violette */
  box-shadow: 0 0 0 1px #7c3aed; /* Effet de lueur */
}

/* Le bouton Publier */
.submit-btn {
  display: inline-flex;
  align-items: center; /* Centre verticalement l'icône et le texte */
  justify-content: center; /* Centre horizontalement le contenu */
  gap: 10px;
  margin-top: 20px;
  background: #7c3aed;
  color: white;
  border: none;
  padding: 12px 24px; /* Un peu plus de padding pour donner du souffle */
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 140px; /* Donne une largeur minimale pour stabiliser le texte */
}

.submit-btn:hover:not(:disabled) {
  background: #6d28d9;
}

.submit-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.section-divider {
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 40px;
}
</style>
