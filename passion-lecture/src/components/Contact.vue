<script setup>
import photoThomasP from '../assets/img/ThomasP-photo.png'
import photoThomasR from '../assets/img/ThomasR-photo.png'
import photoRyanL from '../assets/img/RyanL-photo.png'
const createurs = [
  {
    nom: 'Thomas Reynaud',
    email: 'pk84vtk@eduvaud.ch',
    image: photoThomasR,
  },
  {
    nom: 'Ryan Läuppi',
    email: 'pa33xxl@eduvaud.ch',
    image: photoRyanL,
  },
  {
    nom: 'Thomas Peltier',
    email: 'pv03xgo@eduvaud.ch',
    image: photoThomasP,
  },
]
</script>

<template>
  <div class="container">
    <h1>Créateurs</h1>

    <div class="equipe-grid">
      <div v-for="createur in createurs" :key="createur.email" class="card-createur">
        <img :src="createur.image" :alt="createur.nom" class="photo-createur" />
        <h3>{{ createur.nom }}</h3>
        <a :href="'mailto:' + createur.email" class="email-link">
          {{ createur.email }}
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 10000px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

h1 {
  margin-bottom: 40px;
  color: #8b5cf6;
}

.equipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
}

.card-createur {
  background: rgba(255, 255, 255, 0.03);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;
}

.card-createur:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.05);
}

.photo-createur {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 3px solid #8b5cf6;
}

.email-link {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
}

.email-link:hover {
  color: white;
}
</style>
