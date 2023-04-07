export class Account {
    constructor(
        private id:string,
        private balance:number
        ) {}

        public getId = () =>{
           return this.id
        }

        public getBalance = () =>{
           return this.balance
        }
       
       
           static toUserModel(index:any):Account{
            return new Account(index.id, index.balance)
        }

}