import { Router } from "express";
import signIn from './signIn.js';
import signUp from "./signUp.js";


const router = Router();
router.use(signIn, signUp);
/* , urls, users, ranking */
export default router;