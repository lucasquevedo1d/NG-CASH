import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { signupInputDTO } from "../types/TypeUser";

export class Usercontroller {
     signup = async (req:Request, res:Response) =>{
        try {
            const {username, password} = req.body 
    
            const input:signupInputDTO ={
                username,
                password
            }
    
            const token = await new UserBusiness().signupBusiness(input)
            res.status(201).send({message: "Usuário criado com sucesso!",token:token})
        } catch (error:any) {
            res.status(500).send({message: error.message})
        }
    }

    login = async (req:Request, res:Response) =>{
        try {
            const {username, password} = req.body 

            const input:signupInputDTO ={
                username,
                password
            }
            const token = await new UserBusiness().loginBusiness(input)
            res.status(201).send({message: "Usuário logado com sucesso!",token:token})
        } catch (error:any) {
            res.status(500).send({message: error.message})

        }
    }
}

