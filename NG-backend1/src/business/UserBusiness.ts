import UserdataBase from "../data/UserdataBase";
import { User } from "../model/User";
import { Authenticator, AuthenticatorData } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { signupInputDTO } from "../types/signupInputDTO";

export class UserBusiness {
     signupBusiness = async (input:signupInputDTO)  => {
        const{username, password} = input
        

        if(!username || !password){
            throw new Error("Preencha todos os campos");
        }

        if(username.length < 3){
            throw new Error("O campo nome deve ter mais de três caracteres");
        }
        
        
        const findUser = await new UserdataBase().findbyName(username)
        if(findUser){
            throw new Error("Usuário já cadstrado!");
        }

        const id = await new IdGenerator().generator()
        const hash = await new HashManager().createHash(password) 

        const insertUser = new User(id, username, hash)
         await new UserdataBase().insertUser(insertUser) 

        const token = await new Authenticator().generate(id) 

        return token
    }

}