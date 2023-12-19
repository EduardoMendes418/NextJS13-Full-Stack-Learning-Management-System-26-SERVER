import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import {
  getCoursesAnalytics,
  getUsersAnalytics,
} from "../controllers/analytics.controller";
const analyticsRouter = express.Router();

analyticsRouter.get(
  "/get-user-analytics",
  isAuthenticated,
  authorizeRoles("admin"),
  getUsersAnalytics
);

analyticsRouter.get(
  "/get-courses-analytics",
  isAuthenticated,
  authorizeRoles("admin"),
  getCoursesAnalytics
);

analyticsRouter.get(
  "/get-orders-analytics",
  isAuthenticated,
  authorizeRoles("admin"),
  getUsersAnalytics
);

export default analyticsRouter;
