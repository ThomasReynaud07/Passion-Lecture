<template>
  <div class="login-page">
    <div class="login-card">
      <div class="logo-wrapper">
        <div class="logo-circle">
          <BookOpen :size="32" class="icon-primary" />
        </div>
      </div>

      <h1 class="login-title">Bienvenue sur <span>BiblioVerse</span></h1>
      <p class="login-subtitle">Connectez-vous pour continuer</p>

      <div class="auth-methods">
        <button class="google-btn">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/layout/google.svg"
            alt="Google"
          />
          Continuer avec Google
        </button>

        <div class="divider">
          <span>OU</span>
        </div>

        <form @submit.prevent class="login-form">
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

          <button type="submit" class="submit-btn">Se connecter</button>
        </form>

        <div class="form-footer">
          <a href="#" class="forgot-link">Mot de passe oublié ?</a>
          <p>
            Pas encore de compte ?
            <RouterLink to="/signup" class="signup-link">S'inscrire</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BookOpen, Mail, Lock } from 'lucide-vue-next'
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f0c21;
  padding: 20px;
  background: transparent !important;
}

.login-card {
  background: #120d26;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 40px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
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

.login-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 8px;
  color: #fff;
}

.login-title span {
  background: linear-gradient(to bottom, #fff, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.login-subtitle {
  color: #94a3b8;
  margin-bottom: 32px;
}

/* Bouton Google */
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
  margin-bottom: 24px;
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
  margin-bottom: 24px;
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
  font-size: 0.8rem;
  font-weight: 600;
}

/* Formulaire */
.login-form {
  text-align: left;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 8px;
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
  padding: 12px 12px 12px 40px;
  border-radius: 10px;
  color: white;
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
  margin-top: 24px;
  font-size: 0.9rem;
}

.forgot-link {
  color: #94a3b8;
  text-decoration: none;
  display: block;
  margin-bottom: 12px;
  transition: color 0.3s;
}

.forgot-link:hover {
  color: #a78bfa;
}

.signup-link {
  color: #a78bfa;
  text-decoration: none;
  font-weight: 600;
}

.signup-link:hover {
  text-decoration: underline;
}
</style>
