class User {
  // User code here
  constructor(username, password, age, loggedIn = false) {
    this.username = username;
    this.password = password; 
    this.age = age;
    this.loggedIn = loggedIn;
  }

  login(password) {
    if (password === this.password) {
      return this.loggedIn = true;
    } else {
      throw new Error("incorrect password");
    }
  }

  logout() {
    return this.loggedIn = false;
  }
}

module.exports = User
