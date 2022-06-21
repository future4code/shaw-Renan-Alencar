import Customer from "./Customer";
import Place from "./Place";
import User from "./User";


const usuario1 = new User("1", "renan@gmail.com", "Renan", "123456") 

// console.log(usuario1)
// console.log(usuario1.getEmail())
const customer1 = new Customer("2", "marcos@gmail.com", "Marcos", "123456", "999.9999")

console.log(customer1.interoduceYourself())

// const place1 = new Place("22222")