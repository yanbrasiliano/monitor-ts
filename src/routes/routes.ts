import express from "express";
import { getSitesStatus } from "../controllers/SiteMonitorController";

const router = express.Router();

router.get("/api/sites", getSitesStatus);
router.get("/", (req, res) => {
  res.json({
    message:
      "Bem-vindo à API em Express e TypeScript de Monitoramento de Sites",
  });
});

export default router;
