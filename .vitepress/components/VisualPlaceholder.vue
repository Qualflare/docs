<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  description: string
  size?: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium'
})

const dimensions = computed(() => {
  switch (props.size) {
    case 'small':
      return { height: '200px' }
    case 'large':
      return { height: '500px' }
    default:
      return { height: '350px' }
  }
})
</script>

<template>
  <div
    class="visual-placeholder"
    :style="dimensions"
  >
    <div class="placeholder-content">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <p class="placeholder-text">Screenshot placeholder: {{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.visual-placeholder {
  width: 100%;
  background-color: #f3f4f6;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
}

.placeholder-content {
  text-align: center;
  color: #9ca3af;
}

.placeholder-content svg {
  margin: 0 auto 0.75rem;
  opacity: 0.5;
}

.placeholder-text {
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
}
</style>
