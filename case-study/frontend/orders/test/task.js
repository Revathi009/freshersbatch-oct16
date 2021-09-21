let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../order");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Orders API', () => {

    /**
     * Test the GET route
     */
    describe("GET /api/order", () => {
        it("It should GET all the orders", (done) => {
            chai.request(server)
                .get("/api/order")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eq(1);
                done();
                });
        });

        it("It should NOT GET all the orders", (done) => {
            chai.request(server)
                .get("/api/orderrr")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });

    });
    

//     /**
//      * Test the POST route
//      */
    describe("POST /api/order", () => {
        it("It should POST a new order", (done) => {
            const order = {
                UserID: "61438a24cf6d8bd28e5219f7",
                ProductID: "614381a035ae555341d5cd59"
            };
            chai.request(server)                
                .post("/api/order")
                .send(order)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    // response.body.should.have.property('id').eq(0);
                    // response.body.should.have.property('name').eq("name");
                    // response.body.should.have.property('image').eq("image");
                    // response.body.should.have.property('price').eq("200");
                    // response.body.should.have.property('category').eq("category");
                    // response.body.should.have.property('description').eq("description");

                done();
                });
        });

        it("It should NOT POST a new order without the productid property", (done) => {
            const product = {
                ProductID: "01"
            };
            chai.request(server)                
                .post("/api/orderrrr")
                .send(product)
                .end((err, response) => {
                    response.should.have.status(404);
                    // response.text.should.be.eq("The name should be at least 3 chars long!");
                done();
                });
        });

    });
});