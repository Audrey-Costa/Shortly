import { Router } from "express";
import findURL from "../controllers/findURLController.js";
import shortenURL from "../controllers/shortenController.js";
import tokenValidation from "../middlewares/tokenValidationMiddleware.js";

const urls = Router();
urls.post("/urls/shorten", tokenValidation, shortenURL);
urls.get("/urls/:id", findURL)

export default urls;