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
    this.registeredUsers = {

    };
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
    if (this.registeredUsers[username]) {
      this.registeredUsers[username].login(password);
      console.log('user has been logged in');
    } else {
      throw new Error('Username or password is incorrect');
    }
  }

  logoutUser(username) {
    if (this.registeredUsers[username]) {
      this.registeredUsers[username].logout();
      console.log('user is logged out');
  } else {
    throw new Error('no such user is logged in');
    }
  }

  createScooter(station) {
    if (!this.stations[station]) {
      throw new Error('no such station error');
    } else {
      let scooter = new Scooter(station);
      this.stations[station].push(scooter);
      console.log('created new scooter');
      return scooter;
    }
  }

  dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw new Error('no such station error');
    } else if (this.stations[station].includes(scooter)) {
      throw new Error('scooter already at station');
    } else {
      scooter.dock(scooter);
      this.stations[station].push(scooter);
      return 'scooter is docked';
    }
  }

  rentScooter(scooter, user) {
    if (scooter.station == null) {
      throw new Error('scooter already rented');
    } else {
      let availableScooters = this.stations[scooter.station];
      let scooterIndex = 0;
      for (let i = 0; i < availableScooters.length; i++) {
        if (availableScooters[i] === scooter) {
          scooterIndex = i;
          break;
        }
      }
      availableScooters.splice(scooterIndex, 1);
      scooter.rent(user);
    }
  }

  print() {
    console.log(this.registeredUsers)
    console.log(this.stations)
  }
  
}

module.exports = ScooterApp
