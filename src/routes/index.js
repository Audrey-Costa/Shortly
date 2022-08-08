import { Router } from "express";
import signIn from './signIn.js';
import signUp from "./signUp.js";
import urls from "./urls.js";
import users from './users.js'
import ranking from './ranking.js'

const router = Router();
router.use(signIn, signUp, urls, users, ranking);

export default router;