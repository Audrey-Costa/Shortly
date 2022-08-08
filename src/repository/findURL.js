import connection from "../db/pg.js";

async function findURL(id){
    return connection.query(`SELECT * FROM "URLs" WHERE "URLs".id = ($1)`, [id]);
}

export const findURLRepository = {
    findURL
}