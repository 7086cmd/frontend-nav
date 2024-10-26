<template>
  <div class="page-container">
    <div class="container">
      <h1>Frontend Technologies</h1>
      <p class="subtitle">Explore the modern frontend development ecosystem</p>
      
      <div v-for="category in categories" :key="category.name" class="category-section">
        <h2>{{ category.name }}</h2>
        <div class="tech-grid">
          <TechCard
            v-for="tech in category.technologies"
            :key="tech.name"
            :tech="tech"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TechCategory } from '~/types/tech'
import data from '../public/data/tech.json' with { type: 'json' }

const categories = data.categories as TechCategory[]
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  padding: 2rem 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #00dc82 0%, #00b4d8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeIn 0.8s ease-out;
}

h2 {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 600;
  font-size: 1.8rem;
  margin: 2rem 0 1.5rem;
  color: #2c3e50;
  border-bottom: 2px solid rgba(0, 220, 130, 0.2);
  padding-bottom: 0.5rem;
  animation: fadeIn 0.8s ease-out;
}

.subtitle {
  text-align: center;
  color: #64748b;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  animation: fadeIn 0.8s ease-out 0.2s backwards;
}

.category-section {
  margin-bottom: 4rem;
  animation: fadeIn 0.8s ease-out 0.4s backwards;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
}
</style>