const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = {
      station1 : [], 
      station2 : [], 
      station3 : []
    };
    this.registeredUsers = {};
  }


  registerUser(username, password, age) {
    if (!this.registeredUsers[username] && age >= 18) {
      const user = new User(username, password, age);
      this.registeredUsers[username] = user;
      console.log(`User ${username} has been registed`);
      return user;
    } else if (this.registeredUsers[username]) {
      throw new Error('already registered');
    } else if (age < 18) {
      throw new Error('too young to register');
    }
  }

  loginUser(username, password) {
    console.log(JSON.stringify(this.registeredUsers))
    if (this.registeredUsers[username]) {
      this.registeredUsers[username].login(password);
      console.log('user has been logged in');
    } else {
      throw new Error('Username or password is incorrect');
    }
  }

  logoutUser(username) {
    console.log(JSON.stringify(this.registeredUsers))
    if (this.registeredUsers[username]) {
      this.registeredUsers[username].logout();
      console.log('user is logged out');
  } else {
    throw new Error('no such user is logged in');
  }
}

}

module.exports = ScooterApp
