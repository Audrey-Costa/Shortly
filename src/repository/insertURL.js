import connection from "../db/pg.js";

async function insertURL(url, shortUrl){
    return connection.query(`INSERT INTO "URLs" (url, "shortURL") VALUES ($1, $2)`, [url, shortUrl]);
}

export const tokenValidationRepository = {
    insertURL
}