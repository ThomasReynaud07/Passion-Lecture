<script setup>
///Import des Icones
import { ArrowRight, Star, User, Sparkles, BookOpen, Users } from 'lucide-vue-next'

import booksData from '../assets/books.json'
const recentBooks = [...booksData].reverse()
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
      <div v-for="(book, index) in recentBooks" :key="book.id">
        <RouterLink to="/Details">
          <div class="book-card" v-if="index < 5">
            <div class="book-cover">
              <img :src="book.imageCouverture" alt="Cover" />
              <span class="genre-badge roman">{{ book.categorie }}</span>
              <div class="rating-badge">
                <Star :size="12" fill="#fbbf24" color="#fbbf24" />
                <span>{{ book.noteMoyenne }}</span>
              </div>
            </div>
            <div class="book-info">
              <h3>{{ book.titre }}</h3>
              <p class="author">{{ book.auteur.nom }} {{ book.auteur.prenom }}</p>
              <div class="user-info">
                <User :size="14" />
                <span>{{ book.userEmail }}</span>
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

.books-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
}

.book-card {
  background: #120d26;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
}

.book-card:hover {
  transform: translateY(-12px) scale(1.02);
  border-color: rgba(139, 92, 246, 0.5);
  box-shadow: 0 20px 40px -15px rgba(124, 58, 237, 0.3);
}

.book-cover {
  position: relative;
  aspect-ratio: 3 / 4.5;
  background: #1e1b2e;
  overflow: hidden;
}

.book-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.book-card:hover .book-cover img {
  transform: scale(1.1);
}

.genre-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 6px 14px;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: rgba(124, 58, 237, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 2;
}

.rating-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 6px 10px;
  background: rgba(15, 12, 33, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 800;
  color: #fbbf24;
  z-index: 2;
}

.book-info {
  padding: 24px;
}

.book-info h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.author {
  color: #8b5cf6;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.03);
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
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
