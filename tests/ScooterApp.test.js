const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp();
// ScooterApp tests here

describe('Register, login, logout user methods tests', () => {

  // register user
  test("register new user - instance of User class", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });

  // log in
  test("locate and login user", () => {
    scooterApp.registerUser('senai', 'swe123', 23);
    scooterApp.loginUser('senai', 'swe123')
    expect(scooterApp.registeredUsers['senai'].loggedIn).toBe(true)
  });

  // log out
  test("locate and logout user", () => {
    scooterApp.registerUser('sani', 'swe123', 21);
    scooterApp.loginUser('sani', 'swe123')
    scooterApp.logoutUser('sani')
    expect(scooterApp.registeredUsers['sani'].loggedIn).toBe(false)
  });
});

describe('Create, dock, rent scooter methods tests', () => {
  
  let scooter;

  beforeEach(() => {
    scooter = scooterApp.createScooter('station1')
  })

  // create scooter
  test("create new scooter - instance of Scooter class", () => {
    expect(scooter).toBeInstanceOf(Scooter)
  });

  // dock scooter
  test("dock scooter", () => {
    let user = scooterApp.registerUser('abel', 'swe123', 19)
    scooterApp.rentScooter(scooter, user)
    expect(scooterApp.dockScooter(scooter, 'station1')).toBe('scooter is docked')
  });

  // rent scooter
  test("rent scooter to user", () => {
    let user = scooterApp.registerUser('mati', 'swe123', 22)
    scooterApp.rentScooter(scooter, user)
    expect(scooter.user).toBe(user)
    expect(scooter.station).toBe(null)
  });
});
