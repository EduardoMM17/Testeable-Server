const checkMiddlewares = require("../../middlewares/check");
const createServer = require("../../../server");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const chai = require("chai");

chai.use(chaiHttp);
const expect = chai.expect;

describe("User", () => {
  describe("User routes", () => {
    beforeEach(() => {
      sinon.restore();
    });
  });

  it("When the create user API is hit, all the middlewares are called", async () => {
    const jsonBodyCheckSpy = sinon.spy(checkMiddlewares, "jsonBodyCheck");

    const server = createServer();

    await chai
      .request(server)
      .post("/user")
      .set("Content-Type", "application/json")
      .send({
        firstName: "Eduardo",
        email: "a@gmail.com",
      });

    console.log("Json Body Check Spy CallCount: ", jsonBodyCheckSpy.callCount);
    expect(jsonBodyCheckSpy.calledOnce).to.be.true;
  });
});
