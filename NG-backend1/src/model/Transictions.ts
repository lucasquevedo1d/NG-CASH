export default class Transictions{
    constructor(    
        private id:string,
        private debitedAccountId:string,
        private creditAccountId:string,
        private value:number
        
){}

getId = () =>{
    return this.id
}

getdebitAccountId = () =>{
    return this.debitedAccountId
}

getCreditAccountId = () =>{
    return this.creditAccountId
}

getValue = () =>{
    return this.value
}

static toUserModel(index:any): Transictions{
    return new Transictions(index.id, index.debitedAccountId, index.creditAccountId, index.value)
}
}