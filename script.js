class User {
  constructor(_name, _surname, _age, _location) {
    this.name = _name;
    this.surname = _surname;
    this.age = _age;
    this._location = _location;
  }

  usersAge = function (x) {
    if (this.age > x.age) {
      return this.name + " è più grande di " + x.name;
    } else if (this.age < x.age) {
      return x.name + " è più grande di " + this.name;
    } else {
      return x.name + " ha la stessa età di " + this.name;
    }
  };

  /*usersAge = function (x, y) {
    if (x.age > y.age) {
      return x + " è più grnade di" + y;
    } else if (x.age < y.age) {
      return y + " è più grnade di" + x;
    } else {
      return y + " ha la stessa età di " + x;
    }
  };*/
}

const amico1 = new User("Alfredo", "Panebianco", 30, "Catania");
console.log(amico1);

const amico2 = new User("Marko", "Casone", 28, "Ragusa");
console.log(amico2);

// console.log(usersAge(amico1, amico2));

console.log(amico1.usersAge(amico2));
