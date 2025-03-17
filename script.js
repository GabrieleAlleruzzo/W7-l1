class User {
  constructor(_name, _surname, _age, _location) {
    this.name = _name;
    this.surname = _surname;
    this.age = _age;
    this._location = _location;
  }
  usersAge(x, y) {
    if (x.age > y.age) {
      return x + " è più grnade di" + y;
    } else if (x.age < y.age) {
      return y + " è più grnade di" + x;
    } else {
      return y + " ha la stessa età di " + x;
    }
  }
}

const amico1 = new user("Alfredo", "Panebianco", 30, "Catania");
console.log(amico1);

const amico2 = new user("Marko", "Casone", 28, "Ragusa");
console.log(amico2);

console.log(usersAge(amico1, amico2));
