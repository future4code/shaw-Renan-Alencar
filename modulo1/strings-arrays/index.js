/*
Exercícios de interpretação de código

1.
a. undefined
b. null
c. 11
d. 3
e. [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

2.
SUBI NUM ÔNIBUS EM MIRROCOS 27

*/

//Exercícios de escrita de código


//1.
const nome = prompt("Digite seu nome");
const email = prompt("Digite seu e-mail");

console.log(`O email ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`);



//2.
let comidas = ["Pizza", "Hambúrguer", "Hot dog", "japonesa", "feijoada"];

console.log(comidas);

console.log("Essas são as minhas comidas preferidas: ");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

let comidaUsuario = prompt("Digite sua comida preferida");

comidas[1] = comidaUsuario;
console.log(comidas);



//3.
let listaDeTarefas = [];
const tarefa1 = prompt("Digite a primeira tarefa");
const tarefa2 = prompt("Digite a segunda tarefa");
const tarefa3 = prompt("Digite a terceira tarefa");

listaDeTarefas.push(tarefa1);
listaDeTarefas.push(tarefa2);
listaDeTarefas.push(tarefa3);

console.log(listaDeTarefas);

const tarefaFeita = prompt("Digite o número da tarefa que já realizou: 0, 1 ou 2?");

listaDeTarefas.splice(tarefaFeita, 1);

console.log(listaDeTarefas);


//Desafios


//1.
let frase = prompt("Digite uma frase");
let arrayFrases = frase.split(" ");

console.log(arrayFrases);


//2.
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
let abacaxi = frutas.indexOf("Abacaxi", [i = 0]);

console.log(abacaxi, frutas.length);
