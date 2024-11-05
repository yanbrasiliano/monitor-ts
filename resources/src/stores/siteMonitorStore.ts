import { defineStore } from 'pinia'
import type { SiteStatus } from '@/interfaces/SiteStatus'
import { fetchSitesStatus } from '@/services/SiteMonitorService'

export const useSiteMonitorStore = defineStore('siteMonitor', {
  state: () => ({
    siteStatuses: [] as SiteStatus[],
    intervalId: null as number | null,
  }),
  actions: {
    async loadSitesStatus() {
      this.siteStatuses = await fetchSitesStatus()
    },
    startAutoRefresh(interval = 10000) {
      this.loadSitesStatus()
      if (this.intervalId) clearInterval(this.intervalId)
      this.intervalId = window.setInterval(() => {
        this.loadSitesStatus()
      }, interval)
    },
    stopAutoRefresh() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
      }
    },
  },
})
