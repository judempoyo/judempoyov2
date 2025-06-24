<template>
  <div class="visual-container">
    <header class="visual-header">
      <h1>Mon Portfolio - Mode Visuel</h1>
      <button @click="changeStyle">Changer de style</button>
    </header>
    
    <main class="visual-content">
      <!-- Votre contenu visuel riche ici -->
      <section class="hero">
        <h2>Bienvenue dans mon univers créatif</h2>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    changeStyle() {
      localStorage.removeItem('portfolioStyle')
      this.$emit('change-style')
    }
  }
}
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