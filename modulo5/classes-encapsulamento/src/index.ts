import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)


//Exercicio 1
// A. O contrutor serve para iniciar as variaveis de uma classe
// this.parametro = valor atribudo a ele

//B. Uma vez

//C. 
// public getInfo = function() {
//   return this.atributo
// }



