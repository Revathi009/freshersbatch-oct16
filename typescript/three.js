var Order = {
    id: 1,
    title: "Adms",
    price: 700,
    getOrder: function () {
        return this.id + " " + this.title;
    },
    getPrice: function () {
        return this.price;
    }
};
var copiedObj = Object.assign({}, Order);
console.log(copiedObj);
// function id(id: any, title: any, price: any) {
//     throw new Error("Function not implemented.");
// }
// function title(id: any, title: any, price: any) {
//     throw new Error("Function not implemented.");
// }
// function price(id: any, title: any, price: any) {
//     throw new Error("Function not implemented.");
// }
