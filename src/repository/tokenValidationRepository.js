import connection from "../db/pg.js";

async function validateToken(token){
    return connection.query(`SELECT token FROM "Sessions" WHERE "Sessions".token = $1`, [token]);
}

export const tokenValidationRepository = {
    validateToken
}