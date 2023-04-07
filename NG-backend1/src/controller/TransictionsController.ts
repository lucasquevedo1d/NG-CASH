import { Request, Response } from "express";
import TransictionsBusiness from "../business/TransictionsBusiness";
import { transictionByUsername } from "../types/TypeTransiction";

export default class TransictionController{
    getTransitctions = async (req:Request, res:Response) =>{
        const auth = req.headers.authorization as string

        const { username } = req.body

        const input:transictionByUsername={
            auth,
            username
        }

        console.log(username)

        const result = await new TransictionsBusiness().getTransictionsByName(input)

        res.status(200).send({message:result})
    }

    getTransictionsDebit = async (req:Request, res:Response) =>{
        const auth = req.headers.authorization as string

        const { username } = req.body

        const input:transictionByUsername={
            auth,
            username
        }

        console.log(username)

        const result = await new TransictionsBusiness().getTransictionByDebit(input)

        res.status(200).send({message:result})
    }

    getTransictionsCredit = async (req:Request, res:Response) =>{
        const auth = req.headers.authorization as string

        const { username } = req.body

        const input:transictionByUsername={
            auth,
            username
        }

        console.log(username)

        const result = await new TransictionsBusiness().getTransictionByCredit(input)

        res.status(200).send({message:result})
    }
}