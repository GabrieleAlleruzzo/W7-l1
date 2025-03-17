class user {
  constructor(_name, _surname, _age, _location) {
    this.name = _name;
    this.surname = _surname;
    this.age = _age;
    this._location = _location;
  }
}

const amico1 = new user("Alfredo", "Panebianco", 30, "Catania");
console.log(amico1);

const amico2 = new user("Marko", "Casone", 28, "Ragusa");
console.log(amico2);
