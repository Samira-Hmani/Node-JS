//exp 2:
// const person = {
//     name: 'Samira',
//     surname:'Hmani',
// }
// module.exports = person;
//exp3:
// (function (exports, require, module__filename,__dirname ){
// })
// console.log(__dirname,__filename);
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
  greeting() {
    console.log (`My name is ${this.name} and ${this.surname}`);
  }
}
module.exports = Person;

