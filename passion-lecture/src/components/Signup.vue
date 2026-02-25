<template>
  <div class="signup-page">
    <div class="signup-card">
      <div class="logo-wrapper">
        <div class="logo-circle">
          <UserPlus :size="32" class="icon-primary" />
        </div>
      </div>

      <h1 class="signup-title">Rejoindre <span>BiblioVerse</span></h1>
      <p class="signup-subtitle">Créez votre compte pour partager vos lectures</p>

      <div class="auth-methods">
        <button class="google-btn">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/layout/google.svg"
            alt="Google"
          />
          S'inscrire avec Google
        </button>

        <div class="divider">
          <span>OU</span>
        </div>

        <form @submit.prevent class="signup-form">
          <div class="input-group">
            <label>Nom d'utilisateur</label>
            <div class="input-wrapper">
              <User :size="18" class="input-icon" />
              <input type="text" placeholder="LecteurPassionné" />
            </div>
          </div>

          <div class="input-group">
            <label>Email</label>
            <div class="input-wrapper">
              <Mail :size="18" class="input-icon" />
              <input type="email" placeholder="votre@exemple.com" />
            </div>
          </div>

          <div class="input-group">
            <label>Mot de passe</label>
            <div class="input-wrapper">
              <Lock :size="18" class="input-icon" />
              <input type="password" placeholder="••••••••" />
            </div>
          </div>

          <button type="submit" class="submit-btn">Créer mon compte</button>
        </form>

        <div class="form-footer">
          <p>
            Vous avez déjà un compte ?
            <RouterLink to="/login" class="login-link">Se connecter</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserPlus, User, Mail, Lock } from 'lucide-vue-next'
</script>

<style scoped>
.signup-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f0c21;
  padding: 20px;
  background: transparent !important;
}

.signup-card {
  background: #120d26;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 40px;
  width: 100%;
  max-width: 450px;
  min-height: 650px;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.logo-circle {
  width: 64px;
  height: 64px;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-primary {
  color: #a78bfa;
}

.signup-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 4px;
  color: #fff;
}

.signup-title span {
  background: linear-gradient(to bottom, #fff, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.signup-subtitle {
  color: #94a3b8;
  font-size: 0.95rem;
  margin-bottom: 24px;
}

.google-btn {
  width: 100%;
  background: white;
  color: #1e293b;
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.google-btn img {
  width: 18px;
}

.google-btn:hover {
  background: #f1f5f9;
  transform: translateY(-1px);
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  color: #475569;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.divider span {
  padding: 0 10px;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Formulaire ajusté pour 3 champs */
.signup-form {
  text-align: left;
}

.input-group {
  margin-bottom: 14px; /* Réduit de 20px à 14px pour compenser le 3ème champ */
}

.input-group label {
  display: block;
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 6px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 12px;
  color: #64748b;
}

.input-wrapper input {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 10px 12px 10px 40px; /* Padding légèrement réduit */
  border-radius: 10px;
  color: white;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.input-wrapper input:focus {
  outline: none;
  border-color: #7c3aed;
  background: rgba(124, 58, 237, 0.05);
}

.submit-btn {
  width: 100%;
  background: #7c3aed;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.submit-btn:hover {
  background: #6d28d9;
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
}

.form-footer {
  margin-top: 20px;
  font-size: 0.9rem;
  color: #94a3b8;
}

.login-link {
  color: #a78bfa;
  text-decoration: none;
  font-weight: 600;
}

.login-link:hover {
  text-decoration: underline;
}
</style>
