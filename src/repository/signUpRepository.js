import connection from "../db/pg.js";

async function searchUsers(email){
    return connection.query(`SELECT * FROM "Users" WHERE "Users".email = $1`, [email]);
}

async function insertUser(user, passwordHash){
    return connection.query(`INSERT INTO "Users" (name, email, password) VALUES ($1, $2, $3)`, [user.name, user.email, passwordHash]);
}

export const signUpRepository = {
    searchUsers,
    insertUser
}