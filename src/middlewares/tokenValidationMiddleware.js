import { tokenValidationRepository } from "../repository/tokenValidationRepository.js";


export default async function tokenValidation(req, res, next){
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '')

    if (!token) {
        return res.sendStatus(401)
    }
    const {rows: session} = await tokenValidationRepository.validateToken(token);

    if (!session[0]) {
        return res.sendStatus(401)
    }

    next()
}