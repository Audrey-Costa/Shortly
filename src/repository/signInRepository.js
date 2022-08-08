import connection from "../db/pg.js";

async function findUser(email){
    return connection.query(`SELECT * FROM "Users" WHERE "Users".email = $1`, [email]);
}

async function insertSession(token, userId){
    return connection.query(`INSERT INTO "Sessions" (token, "userId") VALUES ($1, $2)`, [token, userId]);
}

export const signInRepository = {
    findUser,
    insertSession
}