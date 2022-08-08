import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { signInRepository } from '../repository/signInRepository.js';


export default async function login(req, res) {
    const { email, password } = req.body;
  
    const {rows: user} = await signInRepository.findUser(email);
  
    if (user && bcrypt.compareSync(password, user[0].password)) {
      const token = uuid();
  
      await signInRepository.insertSession(token, user[0].id);
  
      res.send(200);
    } else {
      res.sendStatus(401);
    }
  }