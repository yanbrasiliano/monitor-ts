<script setup lang="ts">
import { useSiteMonitor } from '@/composables/useSiteMonitor'
import SiteStatusBox from '@/components/SiteStatusBox.vue'

const { siteStatuses } = useSiteMonitor()
</script>

<template>
  <div class="container mx-auto text-center my-8">
    <h1 class="text-5xl font-extrabold mb-12 text-white tracking-wider">🤖</h1>
    <div class="grid sm:grid-cols-2 md:grid-cols-2 gap-6 text-white">
      <SiteStatusBox
        v-for="site in siteStatuses"
        :key="site.url"
        :site="site"
      />
    </div>
  </div>
</template>
