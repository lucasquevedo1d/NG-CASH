import { User } from "../model/User";
import { BaseDataBase } from "./BaseDatabase";

export default class UserdataBase extends BaseDataBase {

    insertUser = async (params: User):Promise<User | undefined> => {
        const user = await UserdataBase.connection("UsersTrybe")
            .insert({
                id: params.getId(),
                username: params.getUsername(),
                password: params.getPassword(),
                accountId: params.getAccountId()
            })
        return user && User.toUserModel(user)

    }


    findbyName = async (username: string): Promise<User> => {
        try {
            // console.log(username)
            const user = await UserdataBase.connection("UsersTrybe")
                .select("*")
                .where({ username })
                console.log("user",user)
            return user[0] && User.toUserModel(user[0])
        } catch (error: any) {
            console.log("Erro do findName",error)
            throw new Error(error.message || error.sqlMessage);

        }
    }

    findUserbyId = async (id: string): Promise<User| undefined> => {
        try {
            const user = await UserdataBase.connection("UsersTrybe")
                .select("*")
                .where({ id })
            return user[0] && User.toUserModel(user[0])
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);

        }
    }

    findAllUsers = async () => {
        try {

            const result = await BaseDataBase.connection("UsersTrybe")
                .select("*")
            return result

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
            


        }


    }


}