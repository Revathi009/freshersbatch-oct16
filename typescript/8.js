var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account() {
        this.id = 1;
        this.name = "Nisha";
        this.balance = 20000;
    }
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount() {
        var _this = _super.call(this) || this;
        _this.interest = 20;
        _this.balance = _this.balance + (_this.balance * _this.interest) / 100;
        return _this;
    }
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount() {
        var _this = _super.call(this) || this;
        _this.cash_credit = 50;
        _this.balance = _this.balance + _this.cash_credit;
        return _this;
    }
    return CurrentAccount;
}(SavingAccount));
var s = new CurrentAccount();
var c = new SavingAccount();
console.log(s.id);
console.log(s.name);
console.log(s.cash_credit);
console.log(c.interest);
console.log(c.balance);
