import { TrasictionsDataBase } from "../data/TransictionsDataBase";
import UserdataBase from "../data/UserdataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { transictionByUsername } from "../types/TypeTransiction";

export default class TransictionsBusiness{
    constructor(
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private tokenGenerator: Authenticator,
        private userDataBase: UserdataBase
    ){}
    getTransictionsByName = async (params:transictionByUsername) =>{

        const {auth, username} = params


        if(!auth){
            throw new Error("Você precisa estar logado para realizar essa ação");
        }

        if(!username){
            throw new Error("Você precisa passar o nome do usuário para essa operação");
        }

        const verifyAuth = await this.tokenGenerator.getTokenData(auth)

        if (!verifyAuth) {
            throw new Error("Usuário precisa estar logado!")
        }

        const getfindUserName = await this.userDataBase.findbyName(username)

        if(!getfindUserName){
            throw new Error("Usuário não encontrado");
        }

        const accountId = getfindUserName.getAccountId() as any


       const result = await new TrasictionsDataBase().getTransicntionsById(accountId)

        return result
    }

    getTransictionByDebit = async (params:transictionByUsername) =>{
        const {auth, username} = params


        if(!auth){
            throw new Error("Você precisa estar logado para realizar essa ação");
        }

        if(!username){
            throw new Error("Você precisa passar o nome do usuário para essa operação");
        }

        const verifyAuth = await this.tokenGenerator.getTokenData(auth)

        if (!verifyAuth) {
            throw new Error("Usuário precisa estar logado!")
        }

        const getfindUserName = await this.userDataBase.findbyName(username)

        if(!getfindUserName){
            throw new Error("Usuário não encontrado");
        }

        const accountId = getfindUserName.getAccountId() as any


       const result = await new TrasictionsDataBase().getTransicntionsDebit(accountId)

        return result

    }

    getTransictionByCredit = async (params:transictionByUsername) =>{
        const {auth, username} = params


        if(!auth){
            throw new Error("Você precisa estar logado para realizar essa ação");
        }

        if(!username){
            throw new Error("Você precisa passar o nome do usuário para essa operação");
        }

        const verifyAuth = await this.tokenGenerator.getTokenData(auth)

        if (!verifyAuth) {
            throw new Error("Usuário precisa estar logado!")
        }

        const getfindUserName = await this.userDataBase.findbyName(username)

        if(!getfindUserName){
            throw new Error("Usuário não encontrado");
        }

        const accountId = getfindUserName.getAccountId() as any


       const result = await new TrasictionsDataBase().getTransicntionsCredit(accountId)

        return result

    }
}