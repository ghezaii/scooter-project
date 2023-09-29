const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp();
// ScooterApp tests here

describe("registerUser method tests", () => {
  // register user
  test("Should return instance of User", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
  // log in
  test("Should locate and log in user", () => {
    scooterApp.registerUser("Random Man", "test123", 21);
    scooterApp.loginUser("Random Man", "test123")
    expect(scooterApp.registeredUsers["Random Man"].loggedIn).toBe(true)
  })
  test("Should locate and log out user", () => {
    scooterApp.registerUser("Random Person", "test123", 21);
    scooterApp.loginUser("Random Person", "test123")
    scooterApp.logoutUser("Random Person")
    expect(scooterApp.registeredUsers["Random Person"].loggedIn).toBe(false)
  })
});

// log out

// rent scooter

// dock scooter
