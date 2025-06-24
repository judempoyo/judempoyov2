<template>
  <div class="visual-container">
  
    <AppHeader />
    <main class="visual-content">
      <!-- Votre contenu visuel riche ici -->
      <section class="hero">
        <h2>Bienvenue dans mon univers créatif</h2>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
	import AppHeader from './AppHeader.vue';

</script>

<style scoped>
.visual-container {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

.visual-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(255,255,255,0.9);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.hero {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>