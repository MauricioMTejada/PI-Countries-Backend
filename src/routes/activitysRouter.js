const { Router } = require("express");
const {
  getActivityHandler,
  createActivityHandler,
  assignActivityHandler,
} = require("../handlers/activityHandler");

const activityRouter = Router();

activityRouter.get("/", getActivityHandler);

activityRouter.post("/", createActivityHandler);

activityRouter.post("/assignActivity", assignActivityHandler);

module.exports = activityRouter;
