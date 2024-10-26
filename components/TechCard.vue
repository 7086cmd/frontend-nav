<template>
  <div class="tech-card">
    <div class="tech-icon-wrapper">
      <img :src="tech.icon" :alt="tech.name" class="tech-icon">
    </div>
    <h3>{{ tech.name }}</h3>
    <p class="description">{{ tech.description }}</p>
    <div class="tech-links">
      <a :href="tech.docs" target="_blank" rel="noopener" class="link-button">
        <span>Docs</span>
      </a>
      <a :href="tech.repo" target="_blank" rel="noopener" class="link-button">
        <span>Repository</span>
      </a>
      <a v-if="tech.repl" :href="tech.repl" target="_blank" rel="noopener" class="link-button">
        <span>Try Online</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Technology } from '~/types/tech'

defineProps<{
  tech: Technology
}>()
</script>

<style scoped>
.tech-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(238, 238, 238, 0.5);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tech-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 220, 130, 0.3);
}

.tech-icon-wrapper {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  padding: 1rem;
  transition: transform 0.3s ease;
}

.tech-card:hover .tech-icon-wrapper {
  transform: scale(1.1);
}

.tech-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

h3 {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  margin: 0.5rem 0;
  color: #2c3e50;
}

.description {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0.5rem 0 1.5rem;
  flex-grow: 1;
}

.tech-links {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: auto;
}

.link-button {
  background: transparent;
  color: #00dc82;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  border: 1px solid rgba(0, 220, 130, 0.2);
}

.link-button:hover {
  background: #00dc82;
  color: white;
  transform: translateY(-2px);
}

.link-button span {
  display: inline-block;
  transition: transform 0.2s ease;
}

.link-button:hover span {
  transform: scale(1.05);
}
</style>