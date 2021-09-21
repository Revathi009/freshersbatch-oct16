let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../product");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Products API', () => {

    /**
     * Test the GET route
     */
    describe("GET /api/products", () => {
        it("It should GET all the products", (done) => {
            chai.request(server)
                .get("/api/products")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
<<<<<<< HEAD
                    response.body.length.should.be.eq(10);
=======
                    response.body.length.should.be.eq(0);
>>>>>>> e02f48ed4bff02ff57de2c2b93db507f8455c566
                done();
                });
        });

        it("It should NOT GET all the products", (done) => {
            chai.request(server)
                .get("/api/product")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });

    });


    /**
     * Test the GET (by id) route
     */
    // describe("GET /api/products/:id", () => {
    //     it("It should GET a products by ID", (done) => {
    //         const productId = "614381a035ae555341d5cd59";
    //         chai.request(server)                
    //             .get("/api/products/:id" +  productId)
    //             .end((err, response) => {
    //                 response.should.have.status(200);
    //                 response.body.should.be.a('object');
    //                 // response.body.should.have.property('id');
    //                 // response.body.should.have.property('name');
    //                 // response.body.should.have.property('image');
    //                 // response.body.should.have.property('price');
    //                 // response.body.should.have.property('category');
    //                 // response.body.should.have.property('description');

    //                 // response.body.should.have.property('completed');
    //                 // response.body.should.have.property('id').eq(1);
    //             done();
    //             });
    //     });

    //     it("It should NOT GET a task by ID", (done) => {
    //         const productId = 123;
    //         chai.request(server)                
    //             .get("/api/products/:id" + productId)
    //             .end((err, response) => {
    //                 response.should.have.status(404);
    //                 // response.text.should.be.eq("The task with the provided ID does not exist.");
    //             done();
    //             });
    //     });

    // });
    

//     /**
//      * Test the POST route
//      */
    describe("POST /api/products", () => {
        it("It should POST a new product", (done) => {
            const product = {
                name: "name",
                image: "image",
                price: 200,
                category: "category",
                description: "description"
            };
            chai.request(server)                
                .post("/api/products")
                .send(product)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
<<<<<<< HEAD
                    response.body.should.have.property('id').eq(10);
                    response.body.should.have.property('name').eq("name");
                    response.body.should.have.property('image').eq("image");
                    response.body.should.have.property('price').eq("200");
                    response.body.should.have.property('category').eq("category");
                    response.body.should.have.property('description').eq("description");
=======
                    // response.body.should.have.property('id').eq(0);
                    // response.body.should.have.property('name').eq("name");
                    // response.body.should.have.property('image').eq("image");
                    // response.body.should.have.property('price').eq("200");
                    // response.body.should.have.property('category').eq("category");
                    // response.body.should.have.property('description').eq("description");
>>>>>>> e02f48ed4bff02ff57de2c2b93db507f8455c566

                done();
                });
        });

        it("It should NOT POST a new product without the name property", (done) => {
            const product = {
                name: "01"
            };
            chai.request(server)                
                .post("/api/product")
                .send(product)
                .end((err, response) => {
                    response.should.have.status(404);
                    // response.text.should.be.eq("The name should be at least 3 chars long!");
                done();
                });
        });

    });
    

//     /**
//      * Test the DELETE route
//      */
    describe("DELETE /api/products/:id", () => {
        it("It should DELETE an existing product", (done) => {
            const productId = "614381a035ae555341d5cd59";
            chai.request(server)                
                .delete("/api/products/:id" + productId)
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                });
        });

        it("It should NOT DELETE a product that is not in the database", (done) => {
            const productId = "6143";
            chai.request(server)                
                .delete("/api/product/:id" + productId)
                .end((err, response) => {
                    response.should.have.status(404);
                    // response.text.should.be.eq("The task with the provided ID does not exist.");
                done();
                });
        });

    });


});

