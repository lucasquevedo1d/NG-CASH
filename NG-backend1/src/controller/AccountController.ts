import { Request, Response } from "express"
import AccountBusiness from "../business/AccountBusiness"
import { postBalanceDTO } from "../types/TypeAccountDTO"

export default class AccountController {
    getBalance = async (req: Request, res: Response) => {
        const auth = req.headers.authorization as string
        const { id } = req.params

        const input = {
            auth,
            id
        }

        const result = await new AccountBusiness().getAccountById(input)

        res.status(200).send({ message: result })
    }


    putAccount = async (req: Request, res: Response) => {
        const auth = req.headers.authorization as string
        const { accountId, username, balance } = req.body

        const post: postBalanceDTO = {
            accountId,
            auth,
            username,
            balance
        }

        await new AccountBusiness().putAccountBusiness(post)

        res.status(201).send({ message: `Transação realizada com sucesso` })
    }
}