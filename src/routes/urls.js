import { Router } from "express";
import shortenURL from "../controllers/shortenController.js";
import tokenValidation from "../middlewares/tokenValidationMiddleware.js";

const urls = Router();
urls.post("/urls/shorten", tokenValidation, shortenURL)

export default urls;