export interface SiteStatus {
  name: string;
  url: string;
  status: string;
  responseTime?: number;
  statusCode?: number;
  lastChecked?: string;
}
