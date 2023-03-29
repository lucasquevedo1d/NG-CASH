import { User } from "../model/User";
import { BaseDataBase } from "./BaseDatabase";

export default class UserdataBase extends BaseDataBase{

    insertUser = async (params:User) => {
        const user = await UserdataBase.connection("UsersTrybe")
        .insert(params)
        return user

    }


    findbyName = async (username:string):Promise<User> =>{
        try {
            const user = await UserdataBase.connection("UsersTrybe")
            .select("*")
            .where({username})
            return user[0] && User.toUserModel(user[0])
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
            
        }
    }

    
}