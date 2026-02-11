<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Book, Home, Library, LogIn, User } from 'lucide-vue-next'
</script>

<template>
  <header class="navbar">
    <div class="nav-inner">
      <div class="nav-left">
        <div class="logo-box">
          <Book :size="20" color="white" />
        </div>
        <span class="logo-text">BiblioVerse</span>
      </div>

      <nav class="nav-center">
        <RouterLink to="/" class="nav-item">
          <Home :size="18" />
          <span>Accueil</span>
        </RouterLink>
        <RouterLink to="/Catalogue" class="nav-item">
          <Library :size="18" />
          <span>Catalogue</span>
        </RouterLink>
      </nav>

      <div class="nav-right">
        <button class="btn-login">
          <LogIn :size="18" />
          Connexion
        </button>
      </div>
    </div>
  </header>

  <main class="page">
    <RouterView />
  </main>
</template>

<style scoped>
.navbar {
  position: fixed;
  inset: 0 0 auto 0;
  height: 70px;
  background: #0d0a1a;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 1000;
  display: flex;
  align-items: center;
}

.nav-inner {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-box {
  background: #8b5cf6;
  padding: 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
}

.logo-text {
  font-weight: 700;
  font-size: 1.2rem;
  color: white;
  letter-spacing: -0.5px;
}

.nav-center {
  display: flex;
  gap: 8px;
  background: rgba(255, 255, 255, 0.03);
  padding: 5px;
  border-radius: 16px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  color: #94a3b8;
  transition: all 0.3s ease;
}

.nav-item:hover {
  color: white;
}

.router-link-exact-active {
  background: #1e1b2e;
  color: white;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

.btn-login {
  background: #8b5cf6;
  border: none;
  padding: 10px 24px;
  border-radius: 14px;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition:
    transform 0.2s,
    background 0.2s;
}

.btn-login:hover {
  background: #7c3aed;
  transform: translateY(-1px);
}

.page {
  padding-top: 90px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;
}
</style>

<style>
body,
html {
  margin: 0;
  padding: 0;
  background: #0d0a1a;
  color: white;
}

#app {
  max-width: none !important;
  width: 100vw !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  display: block !important;
  text-align: left !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  text-align: center !important;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;

  background-color: transparent !important;
  transition: all 0.3s ease;
}

a:hover {
  background-color: transparent !important;
}

.nav-item,
.nav-item:hover {
  background-color: transparent !important;
}

a > button {
  pointer-events: auto;
}
</style>
