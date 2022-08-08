import { findURLRepository } from "../repository/findURL.js";

export default async function findURL(req, res){
    const id = req.params.id;
    try {
        const {rows: URL} = await findURLRepository.findURL(id);
        if(URL.length === 0){
            return res.sendStatus(404);
        }
        res.send(URL[0]).status(200)
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
}