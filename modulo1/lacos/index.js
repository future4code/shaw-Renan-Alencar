/*
//Exercícios de interpretação de código
1. Está verificando se i é menor que 5 e incrementando +1 e somando na variável valor. Será impresso 10

2.
a. 
  19
  21 
  23 
  25 
  27 
  30

b. Sim
  for (let numero of lista){
    console.log(lista);
  }

3.
*
**
***
****

*/

//Exercícios de escrita de código

//1.

const bicho = Number(prompt("Quantos bichinhos de estimação você tem?"));
let arraybicho = [];
let nomeBicho = "";

if (bicho === 0) {
  console.log("Que pena você pode adotar um pet!");
} else {
  for (let i = 0; i < bicho; i++) {
    nomeBicho = prompt("Digite o nome do seu animal");
    arraybicho.push(nomeBicho);
  }
  console.log(arraybicho);
}

// 2.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// a.
function imprimiArray() {
  for (let numero of arrayOriginal) {
    console.log(numero);
  }
}

imprimiArray();

// b.
function imprimiDivisao() {
  for (let numero of arrayOriginal) {
    console.log(numero / 10);
  }
}

imprimiDivisao();

// c.
let arrayPar = [];
function imprimiPar() {
  for (let numero of arrayOriginal) {
    if (numero % 2 === 0) {
      arrayPar.push(numero);
    }
  }
  console.log(arrayPar);
}
imprimiPar();

// d.
let arrayString = [];
function imprimiArrayString() {
  for (let i = 0; i < arrayOriginal.length; i++) {
    arrayString.push(`O elemento do index ${i} é ${arrayOriginal[i]}`);
  }
  console.log(arrayString);
}

imprimiArrayString();

// e.
let valorMaximo = 0;
let valorMinimo = 150;

function achaValorMaximo() {
  for (let numero of arrayOriginal) {
    if (valorMaximo < numero) {
      valorMaximo = numero;
    }
  }
}

function achaValorMinimo() {
  for (let numero of arrayOriginal) {
    if (valorMinimo > numero) {
      valorMinimo = numero;
    }
  }
}

achaValorMaximo();
achaValorMinimo();

console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`);

//Desafios
//1.
// a.
const escolherNumero = Number(prompt("Escolha um número:"));
console.log("Vamos jogar");

// b.
let chute = Number(prompt("Chute um número"));
let tentativas = 0;

while (chute !== escolherNumero) {
  console.log(`O número chutado foi: ${chute}`);
  tentativas = tentativas + 1;
  if (chute < escolherNumero) {
    console.log(`Errou. O número escolhido é maior`);
  } else {
    console.log(`Errou. O número escolhido é menor`);
  }
  chute = Number(prompt("Chute outro número"));
}

// c.
console.log("Acertou");
console.log(`O número de tentativas foi ${tentativas}`);

// 2.
const numeroAleatorio = Math.floor(Math.random() * (100 - 1) + 1);
console.log("Vamos jogar");

let chute2 = Number(prompt("Chute um número"));
let tentativas2 = 0;

while (chute2 !== numeroAleatorio) {
  console.log(`O número chutado foi: ${chute2}`);
  tentativas2 = tentativas2 + 1;
  if (chute2 < numeroAleatorio) {
    console.log(`Errou. O número escolhido é maior`);
  } else {
    console.log(`Errou. O número escolhido é menor`);
  }
  chute2 = Number(prompt("Chute outro número"));
}

console.log("Acertou");
console.log(`O número de tentativas foi ${tentativas2}`);
//Não tive dificuldades em realizar o desafio 2, dei uma rápida lida no material de dica e pesquisei rapidamente no google e consegui resolver o problema
