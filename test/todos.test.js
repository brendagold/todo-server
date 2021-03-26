const request = require("supertest");
const app = require("../server");

//Testing the get all todos endpoint
describe("GET /todos", () => {
  it("Should get all todos", async () => {
    request(app)
      .get("/todos")
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(200);
  });
});

//Testing the post a todo endpoint
describe("POST /addTodo", () => {
  it("Should respond with 201 created", async () => {
    const data = {
      title: "do the dishes",
    };
    request(app)
      .post("/addtodo")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(201);
  });

  it("Should respond with 400 bad request", async () => {
    const data = {
      title: "",
    };
    request(app)
      .post("/addtodo")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(400);
  });
});

//Testing the delete a todo endpoint
describe("DELETE /todo", () => {
  it("Should delete todo", async () => {
    const Id = "605dde93acfdb157d864abe3";

    request(app)
      .delete("/deletetodo/" + Id)
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(204);
  });
});

//Testing the update todo endpoint
describe("UPDATE /todo", () => {
  it("Should update todo", async () => {
    const Id = "605e19d5a08a904fac700a09";
    const data = {
      completed: true,
    };

    request(app)
      .post("/updatetodo/" + Id)
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(201);
  });
});
