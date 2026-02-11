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

    <button class="cta-button">
      Explorer le catalogue
      <ArrowRight :size="18" />
    </button>

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
</template>

<script setup>
// Import des icônes Lucide
import { BookOpen, Users, Star, ArrowRight, Sparkles } from 'lucide-vue-next'
</script>

<style scoped>
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

/* Mobile responsive */
@media (max-width: 600px) {
  .stats-container {
    grid-template-columns: 1fr;
  }
}
</style>
