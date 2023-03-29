export class User {
    constructor(
        private id:string,
        private username: string,
        private password: string
        ) {}

        // public getId = () =>{
        //     this.id
        // }

        // public getUsername = () =>{
        //     this.username
        // }
        // public getPassword = () =>{
        //     this.password
        // }
        static toUserModel(index:any): User{
            return new User(index.id, index.username, index.password)
        }

}

