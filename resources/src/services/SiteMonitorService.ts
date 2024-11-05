import baseAxios from './baseAxios'
import type { SiteStatus } from '@/interfaces/SiteStatus'

export const fetchSitesStatus = async (): Promise<SiteStatus[]> => {

  const response = await baseAxios.get<SiteStatus[]>('/sites')
  return response.data
}
