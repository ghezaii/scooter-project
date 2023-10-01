const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('Scooter object', () => {
  test('create scooter - instance of Scooter class', () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
})

//Method tests
describe('Scooter methods', () => {
  // tests here!
  
  let user;
  let scooter;
 
  beforeEach(() => {
    user = new User('senai', 'swe123', 23)
    scooter = new Scooter('station1')
  })

  //rent method
  test('rent scooter to user - set station to null', () => {
    scooter.rent(user)
    expect(scooter.user).toBe(user)
    expect(scooter.station).toBe(null)
  })
  
  //dock method
  test('dock scooter - set user to null', () => {
    scooter.rent(user)
    scooter.dock('station1')
    expect(scooter.user).toBe(null)
    expect(scooter.station).toBe('station1')
  })

  //requestRepair method

  //charge method

});
