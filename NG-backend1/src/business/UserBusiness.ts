import AccountDataBase from "../data/AccountDataBase";
import { TrasictionsDataBase } from "../data/TransictionsDataBase";
import UserdataBase from "../data/UserdataBase";
import { Account } from "../model/Account";
import Transictions from "../model/Transictions";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { signupInputDTO } from "../types/TypeUser";

export class UserBusiness {
     signupBusiness = async (input:signupInputDTO)  => {
        const{username, password} = input
        
        //const maiusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Z","W","y"]
       

       
        // const senhaTotal = `${password}${maiusculas[0]}`
        // console.log(senhaTotal)
        // if(!senhaTotal){
        //     throw new Error("A senha deve conter pelo o menos uma letra maiuscula");
        // }


        if(!username || !password){
            throw new Error("Preencha todos os campos");
        }

        if(username.length < 3){
            throw new Error("O campo nome deve ter mais de três caracteres");
        }
        
        if(password.length < 8){
            throw new Error("a senha deve ter no minímo de 8 caracteres");

        }

        const findUser = await new UserdataBase().findbyName(username)
        if(findUser){
            throw new Error("Usuário já cadstrado!");
        }

        const balance = 100

        const accountId = await new IdGenerator().generator()

        const transitionId = await new IdGenerator().generator()



        const id = await new IdGenerator().generator()
        const hash = await new HashManager().createHash(password) 

        const insertTransition = new Transictions(transitionId, accountId, accountId, balance)
        const insertAccount = new Account(accountId, balance)
        
        const insertUser = new User(id, username, hash, accountId)

        await new AccountDataBase().insertAccount(insertAccount)

        await new TrasictionsDataBase().createTransiction(insertTransition)

        const createUser = await new UserdataBase().insertUser(insertUser) 
        
        if(!createUser){
            const id2 = await new AccountDataBase().findbyId(accountId)
            await new AccountDataBase().deleteAccountById(id2.getId()) 
            throw new Error("Erro ao criar a conta!");
            
        }


        const token = await new Authenticator().generate(id) 

        return token
    }

    loginBusiness = async (input:signupInputDTO) =>{
        const{username, password} = input

        if(!username || !password){
            throw new Error("Preencha todos os campos");
        }

        const findName =  await new UserdataBase().findbyName(username) 

        if(!findName){
            throw new Error("Usuário não encontrado");
        }
        
        const correctPass = await new HashManager().compareHash(password, findName.getPassword() as string) 

        if(!correctPass){
            throw new Error("Senha incorreta");
        }

        const token = await new Authenticator().generate(findName.getId())
        return token

    }


}