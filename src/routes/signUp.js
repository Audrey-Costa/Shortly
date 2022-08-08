import { Router } from "express";
import userSchemaValidationMiddleware from '../middlewares/userSchemaValidationMiddleware.js';
import register from '../controllers/signUpController.js'

const signUp = Router();
signUp.post("/signup", userSchemaValidationMiddleware, register)

export default signUp;