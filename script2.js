let animal1 = {
  name: "Aki",
  type: "Dog",
  age: 5,
  race: "Shiba Inu",
  speak: function () {
    return "Bark! Bark! Bark!";
  },
  details: function () {
    return (
      "Type:{" +
      this.type +
      "} Name:{" +
      this.name +
      "} Age:{" +
      this.age +
      "} Race:{" +
      this.race +
      "}"
    );
  },
  howOldAmI: function () {
    return this.age;
  },
};
let animal2 = {
  name: "Biiiird",
  type: "Parrot",
  age: 1,
  race: "Lovebird",
  friend: animal1,
  myFriendIs: function () {
    return this.friend.name;
  },
  amIYoungerThanFriend: function () {
    if (this.age < this.friend.age) {
      return true;
    } else {
      return false;
    }
  },
};

console.log(animal1.speak());
console.log(animal1.details());
console.log(animal1.howOldAmI());
console.log(animal2.myFriendIs());
console.log(animal2.amIYoungerThanFriend());
