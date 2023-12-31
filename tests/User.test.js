const User = require('../src/User');

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  })
  // test password
  test("password should be a string", () => {
    expect(typeof user.password).toBe("string");
  })

  // test age
  test("age should be a number", () => {
    expect(typeof user.age).toBe("number");
  })
})

describe("User method tests", () => {
  // test login
  test("login(password) should login user", () => {
    expect(user.login("test123")).toBe(true);
  })
  test("incorrect password throws error", () => {
    expect(() => {
      user.login("test12")}).toThrow("incorrect password");
    })
  // test logout
  test("logout() should logout user", () => {
    expect(user.logout()).toBe(false);
  })
})
