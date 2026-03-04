<script setup>
import { ref } from 'vue'
import { addBooks } from '@/services/bookServices'

const newBook = ref({
  titre: '',
  categorie: '',
  auteur: {
    prenom: '',
    nom: '',
  },
  editeur: '',
  annee: '',
  extrait: '',
  image: '',
  pages: '',
  resume: '',
})

const categorieList = ref([
  'Roman',
  'Manga',
  'BD',
  'Essai',
  'Poésie',
  'Science-fiction',
  'Polar',
  'Psychologie',
  'Espace',
  'Cuisine',
  'Thriller',
])

const submitForm = async () => {
  try {
    await addBooks(newBook.value)

    newBook.value = {
      titre: '',
      categorie: '',
      auteur: { prenom: '', nom: '' },
      editeur: '',
      annee: '',
      extrait: '',
      image: '',
      pages: '',
      resume: '',
    }
  } catch (error) {
    console.error('Erreur: ', error)
  }
}
</script>

<template>
  <div class="form-wrapper">
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group">
            <label>Titre <span class="required">*</span></label>
            <input type="text" placeholder="Titre de l'ouvrage" v-model="newBook.titre" required />
          </div>
          <div class="form-group">
            <label>Catégorie <span class="required">*</span></label>
            <select v-model="newBook.categorie" required>
              <option value="" disabled selected>Choisir une catégorie</option>
              <option v-for="option in categorieList" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Prénom de l'auteur <span class="required">*</span></label>
            <input type="text" placeholder="Prénom" v-model="newBook.auteur.prenom" required />
          </div>
          <div class="form-group">
            <label>Nom de l'auteur <span class="required">*</span></label>
            <input type="text" placeholder="Nom" v-model="newBook.auteur.nom" required />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Éditeur</label>
            <input type="text" placeholder="Nom de l'éditeur" v-model="newBook.editeur" />
          </div>
          <div class="form-group">
            <label>Année d'édition</label>
            <input type="number" placeholder="2024" v-model="newBook.annee" />
          </div>
        </div>

        <div class="form-group">
          <label>Nombre de pages</label>
          <input type="number" placeholder="Ex: 350" v-model="newBook.pages" />
        </div>

        <div class="form-group">
          <label>Résumé</label>
          <textarea
            placeholder="Résumé de l'ouvrage..."
            rows="4"
            v-model="newBook.resume"
          ></textarea>
        </div>

        <div class="form-group">
          <label>Lien de l'extrait PDF</label>
          <input
            type="url"
            placeholder="https://exemple.com/mon-extrait.pdf"
            v-model="newBook.extrait"
            pattern=".*\.pdf"
          />
        </div>

        <div class="form-group">
          <label>Lien de l'image de couverture</label>
          <input
            type="url"
            placeholder="https://exemple.com/mon-image.png"
            v-model="newBook.image"
          />
        </div>

        <button type="submit" class="submit-btn">Enregistrer l'ouvrage</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-wrapper {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;
  color: #fff;
}

.form-container {
  background-color: #181425;
  padding: 30px;
  border-radius: 16px;
  width: 100%;
  max-width: 650px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #e2e8f0;
}

.required {
  color: #e2e8f0;
}

input,
select,
textarea {
  background-color: #1a1625;
  border: 1px solid #332a4d;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.3s ease;
  outline: none;
}

input::placeholder,
textarea::placeholder {
  color: #64748b;
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 40px;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #8b5cf6;
}

.upload-btn {
  background-color: #1a1625;
  border: 1px dashed #4c3a7e;
  color: #a78bfa;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.upload-btn:hover {
  background-color: rgba(139, 92, 246, 0.1);
  border-color: #8b5cf6;
}

.submit-btn {
  background-color: #8b5cf6;
  color: white;
  border: none;
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.submit-btn:hover {
  background-color: #7c3aed;
}

.submit-btn:active {
  transform: scale(0.98);
}

@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
