const request = require("supertest");
const app = require("../init");

describe("Deck API Resource", () => {
  describe("POST /deck/add ", () => {
    test("it should have a status code 200", (done) => {
      const data = {
        author: "brian",
        name: "test",
        format: "commander",
        cards: [
          {
            cardUUID: "e9d5aee0-5963-41db-a22b-cfea40a967a3",
            count: 1,
          },
          {
            cardUUID: "d64026d0-c126-4407-869e-a48c09d017c0",
            count: 1,
          },
          {
            cardUUID: "3bd81ae6-e628-447a-a36b-597e63ede295",
            count: 1,
          },
        ],
      };

      request(app)
        .post("/deck/add")
        .send(data)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          done();
        });
    });

    test("it should do something", () => {});
  });
});
