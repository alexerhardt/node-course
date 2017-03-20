const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });

  });


  it('should square a number', () => {
    var res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
  });
});

it('should have a first name and a last name', () => {
  var res = utils.setName({
    city: 'London',
    weather: 'shitty'
  }, 'Alejandro Erhardt');

  expect(res).toBeA('object').toInclude({
    firstName: 'Alejandro',
    lastName: 'Erhardt'
  })
});

it('should expect some values', () => {
  // expect(12).toNotBe(12);
  // expect({name: 'Alex'}).toEqual({name: 'Alex'});
  // expect([2, 3, 4]).toExclude(5);
  expect({
    name: 'Alex',
    age: 30,
    location: 'London'
  }).toInclude({
    age: 30
  })
});
