import { nanoid } from "nanoid";
import { tokenValidationRepository } from "../repository/insertURL.js";

export default async function shortenURL(req, res){
    const { url } = req.body;
    const shortUrl = nanoid(10);
    console.log(url, shortUrl);
    try {
        await tokenValidationRepository.insertURL(url, shortUrl)
        res.send({shortUrl}).status(201);
    } catch (error) {
        console.error(error);
        res.sendStatus(422);
    }
}