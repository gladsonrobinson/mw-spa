"use strict";

import express from "express";
import mapApi from "../api/map";

const router = express.Router();

router.use("/map", mapApi);

export default router;
