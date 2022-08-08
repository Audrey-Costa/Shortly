import { Router } from "express";
import login from "../controllers/signInController.js";
const signIn = Router();

signIn.post("/signin", login);

export default signIn;