import { Router } from "express";

import { carRoutes } from "./car.routes";

const router = Router();

router.get("/", (req, res) => res.send("test"));
router.use("/cars", carRoutes);

export { router };
