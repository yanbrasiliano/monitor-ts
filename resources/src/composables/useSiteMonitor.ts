import { onMounted, onUnmounted, computed } from 'vue'
import { useSiteMonitorStore } from '@/stores/siteMonitorStore'

export function useSiteMonitor() {
  const store = useSiteMonitorStore()

  onMounted(() => {
    store.loadSitesStatus()
    store.startAutoRefresh(10000)
  })

  onUnmounted(() => {
    store.stopAutoRefresh()
  })

  const siteStatuses = computed(() => store.siteStatuses)
  return { siteStatuses }
}
