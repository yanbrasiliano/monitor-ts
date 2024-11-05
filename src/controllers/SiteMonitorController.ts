import { Request, Response } from "express";
import { SiteMonitorService } from "../services/SiteMonitorService";

const siteMonitorService = new SiteMonitorService();

export async function getSitesStatus(req: Request, res: Response) {
  const sitesStatus = await siteMonitorService.checkSitesStatus();
  res.json(sitesStatus);
}
