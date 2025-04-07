import assert from "node:assert";
import { parseUser } from "../src/service.js";
import { describe, it } from "node:test";

describe("Service", () => {
  it("Should parse user", () => {
    const user = {
      email: "e@e.com",
      name: "Joe doe",
      password: 123123,
    };
    const parsedUser = parseUser(user);
    assert.deepStrictEqual(parsedUser, {
      email: user.email,
      name: user.name,
    });
  });
});
