import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { testRoutes } from "../controllers/test.js";

const router = express.Router()

router.get("/", testRoutes)

export default router