class Account{
    id: number;
    name: any;
    balance: number;
    constructor(){
        this.id = 1;
        this.name = "Nisha";
        this.balance = 20000;
    }
    
}
class SavingAccount extends Account{
    interest: number;
    constructor(){
        super();
        this.interest = 20;
        this.balance = this.balance + (this.balance* this.interest)/100;
}
}
class CurrentAccount extends SavingAccount{
    cash_credit: number;
    constructor(){
        super();
        this.cash_credit = 50;
        this.balance = this.balance + this.cash_credit;
}
}

let s = new CurrentAccount();
let c = new SavingAccount();




console.log(s.id);
console.log(s.name);
console.log(s.cash_credit);
console.log(c.interest);
console.log(c.balance);








