class User {
  constructor(nume, prenume, varsta, hobby) {
    this.nume = nume;
    this.prenume = prenume;
    this.varsta = varsta;
    this.hobby = hobby;
  }
}

let utilizatori = [];
let utilizator1 = new User("Popescu", "Giani", 29, [
  "Jogging",
  "Front-end Developer",
]);
utilizatori.push(utilizator1);

let utilizator2 = new User("Gica", "Mihai", 17, ["Fotbal", "Agent de vanzari"]);
utilizatori.push(utilizator2);

let utilizator3 = new User("Cristian", "Andrei", 23, ["Pariuri", "Aparate"]);
utilizatori.push(utilizator3);

let utilizator4 = new User("Daniel", "Mihai", 27, ["Coding", "Handbal"]);
utilizatori.push(utilizator4);

let utilizator5 = new User("Dimirache", "Marian", 34, ["Dansul", "Curatenia"]);
utilizatori.push(utilizator5);

console.log("a)");

for (let i = 0; i < utilizatori.length; i++) {
  if (utilizatori[i].prenume === "Mihai") {
    console.log(utilizatori[i]);
  }
}

console.log("b)");

for (let i = 0; i < utilizatori.length; i++) {
  if (utilizatori[i].varsta >= 18) {
    console.log(utilizatori[i]);
  }
}

console.log("c)");

for (let i = 0; i < utilizatori.length; i++) {
  for (let j = 0; j < utilizatori[i].hobby.length; j++) {
    if (utilizatori[i].hobby[j] === "Front-end Developer") {
      console.log(utilizatori[i]);
    }
  }
}

console.log("d)");

for (let i = 0; i < utilizatori.length; i++) {
  console.log(utilizatori[i].prenume);
}
