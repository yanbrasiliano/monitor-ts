import axios from "axios";
import https, { RequestOptions } from "https";
import { TLSSocket } from "tls";
import { SiteStatus } from "../interfaces/SiteStatus";
import { sitesConfig } from "../config/sitesConfig";

export class SiteMonitorService {
  private cache: SiteStatus[] = [];

  constructor() {
    this.startMonitoring();
  }

  private startMonitoring() {
    this.updateCache();
    setInterval(() => this.updateCache(), 10000);
  }

  private async updateCache() {
    this.cache = await this.checkSitesStatus();
  }

  async getCachedSitesStatus(): Promise<SiteStatus[]> {
    return this.cache;
  }

  async checkSitesStatus(): Promise<SiteStatus[]> {
    return await Promise.all(
      sitesConfig.map(async (site) => {
        const startTime = Date.now();
        const baseStatus: SiteStatus = {
          name: site.name,
          url: site.url,
          status: "offline",
        };

        try {
          const response = await axios.get(site.url);

          return {
            ...baseStatus,
            status: response.status === 200 ? "online" : "offline",
            responseTime: Date.now() - startTime,
            statusCode: response.status,
            lastChecked: new Date().toISOString(),
          };
        } catch (error: any) {
          return { ...baseStatus, error: error.message };
        }
      })
    );
  }
}
