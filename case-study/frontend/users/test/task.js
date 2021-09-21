let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../user");

//Assertion Style
chai.should();

chai.use(chaiHttp);

//     /**
//      * Test the POST route
//      */
    describe("POST /api/register", () => {
        it("It should POST a new user", (done) => {
            const user = {
                email: "email",
                username: "username",
                password: "password",
            };
            chai.request(server)                
                .post("/api/register")
                .send(user)
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a('object');

                done();
                });
        });

        it("It should NOT POST a new user without the name property", (done) => {
            const user = {
                username: "01"
            };
            chai.request(server)                
                .post("/api/registerrr")
                .send(user)
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });


    });


