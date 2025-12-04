import { Router } from "express";

const router = Router();

router.get("/hello", (_req, res) => {
  res.send("Backend server is running");
});

export default router;
