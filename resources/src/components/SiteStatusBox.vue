<script setup lang="ts">
import type { SiteStatus } from '@/interfaces/SiteStatus'
import { computed } from 'vue'

const props = defineProps<{ site: SiteStatus }>()

const statusColor = computed(() => {
  return props.site.status === 'online' ? 'bg-green-700' : 'bg-red-700'
})

const hoverColor = computed(() => {
  return props.site.status === 'online'
    ? 'hover:bg-green-900'
    : 'hover:bg-red-900'
})

const formattedDate = computed(() => {
  return new Date(props.site.lastChecked || '').toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
})
</script>

<template>
  <a
    :href="props.site.url"
    target="_blank"
    :class="[
      'p-4 rounded-lg shadow-lg text-white transition-colors duration-300 w-full sm:w-72 mb-4',
      statusColor,
      hoverColor,
    ]"
  >
    <h2 class="text-lg font-semibold mb-2 truncate">{{ props.site.name }}</h2>
    <div class="text-sm">
      <p>
        <strong>Tempo de Resposta:</strong>
        {{ props.site.responseTime || 'N/A' }} ms
      </p>
      <p><strong>Status Code:</strong> {{ props.site.statusCode || 'N/A' }}</p>
      <p><strong>Última Verificação:</strong> {{ formattedDate }}</p>
    </div>
  </a>
</template>
