import bcrypt from 'bcrypt';
import { signUpRepository } from '../repository/signUpRepository.js';
import userSchema from '../schemas/userSchema.js';

export default async function register(req, res) {
    const user = req.body;
  
    const validation = userSchema.validate(user);
    if (validation.error) {
      return res.sendStatus(422);
    }
    delete user.confirmPassword
    const passwordHash = bcrypt.hashSync(user.password, 10);

    const {rows: userAlreadyExists} = await signUpRepository.searchUsers(user.email);

    if(userAlreadyExists.length!==0){
      return res.status(409).send("usuário já cadastrado")
    }
  
    await signUpRepository.insertUser(user, passwordHash);
  
    res.sendStatus(201);
  }