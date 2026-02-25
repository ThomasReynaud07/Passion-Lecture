<template>
  <div class="form-wrapper">
    <div class="form-container">
      <form>
        <div class="form-row">
          <div class="form-group">
            <label>Titre <span class="required">*</span></label>
            <input type="text" placeholder="Titre de l'ouvrage" v-model="newBook.title" />
          </div>
          <div class="form-group">
            <label>Catégorie <span class="required">*</span></label>
            <select v-model="newBook.category">
              <option value="" disabled selected>Choisir une catégorie</option>
              <option value="roman">Roman</option>
              <option value="manga">Manga</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label>Auteur <span class="required">*</span></label>
          <select v-model="newBook.category">
            <option value="" disabled selected>Choisir un auteur existant ou Autre</option>
          </select>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Éditeur</label>
            <input type="text" placeholder="Nom de l'éditeur" v-model="newBook.editor" />
          </div>
          <div class="form-group">
            <label>Année d'édition</label>
            <input type="number" placeholder="2024" v-model="newBook.releaseYear" />
          </div>
        </div>

        <div class="form-group">
          <label>Image de couverture</label>

          <input
            type="file"
            id="upload-img"
            accept="image/*"
            style="display: none"
            @change="imageUpload"
          />

          <label for="upload-img" class="upload-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            {{ nomImage || 'Uploader une image' }}
          </label>
        </div>

        <div class="form-group">
          <label>Extrait PDF</label>

          <input
            type="file"
            id="upload-pdf"
            accept="application/pdf"
            style="display: none"
            @change="pdfUpload"
          />

          <label for="upload-pdf" class="upload-btn full-width">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            {{ nomPdf || 'Uploader un extrait PDF' }}
          </label>
        </div>

        <div class="form-group">
          <label>Résumé</label>
          <textarea
            placeholder="Résumé de l'ouvrage..."
            rows="4"
            v-model="newBook.resume"
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">Enregistrer l'ouvrage</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newBook = ref({
  title: '',
  category: '',
  author: '',
  editor: '',
  releaseYear: '',
  pages: '',
  image: '',
  pdf: '',
  resume: '',
})

const imageUpload = (event) => {}
</script>

<style scoped>
/* Conteneur global pour centrer si besoin */
.form-wrapper {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;
  color: #fff;
}

/* Boîte du formulaire */
.form-container {
  background-color: #181425; /* Couleur de fond sombre (basée sur tes précédentes cards) */
  padding: 30px;
  border-radius: 16px;
  width: 100%;
  max-width: 650px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Grille pour les champs côte à côte */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* Groupement Label + Input */
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

/* Labels */
label {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #e2e8f0;
}

.required {
  color: #e2e8f0; /* Couleur de l'astérisque */
}

/* Champs de texte, select et textarea */
input,
select,
textarea {
  background-color: #1a1625; /* Fond des inputs un peu plus clair que le fond principal */
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

/* Customisation du select */
select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 40px;
}

/* Focus sur les champs */
input:focus,
select:focus,
textarea:focus {
  border-color: #8b5cf6;
}

/* Boutons d'upload (pointillés) */
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

/* Bouton d'enregistrement principal */
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

/* Responsive pour mobile */
@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
