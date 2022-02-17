// Exercícios de interpretação de código

// 1.
// a. 10
//    50

// b. Nada, o console ficaria em branco

// 2.
// a. Essa função primeiro transformaria todo o texto em minúsculo e depois seria para verificar se no texto tem a palavra cenoura, caso afirmativo retorna true, caso negativo retorna false. Sua utilidade seria para achar uma palavra especifica em um texto.
// b. i true
//    ii true
//    iii false

// Exercícios de escrita de código


// 1.

//a. 
function informacoes () {
  console.log("Eu sou Renan, tenho 32 anos, moro em São Paulo e sou estudante.")
}

informacoes();

// b.

function pessoa  (nome, idade, cidade, profissao) {
  const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`;
  console.log (frase)
}

pessoa("Renan",32,"São Paulo","estudante de programação");


// 2.
// a. 
function soma (num1, num2){
  return num1 + num2;
}


console.log(soma(3, 5));

//b.
function compara(num1, num2){
  return num1 > num2;
}

console.log(compara(5, 7));

//c.
function verifica (num) {
  let par = (num % 2) === 0;
  return par;
}

console.log(verifica(5))


//d.
function recebeFrase (frase){
  let tamanho = frase.length;
  let maiusculo = frase.toUpperCase();
  console.log (`${tamanho}, ${maiusculo}`);
} 

recebeFrase("Hoje está muito calor");


//3.

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

console.log(`Números inseridos: ${num1} e ${num2}`);

function soma2 (n1, n2) {
  console.log("Soma:", n1 + n2);
}

function diferenca (n1, n2) {
  console.log("Diferença:", n1 - n2);
}

function multiplicacao (n1, n2) {
  console.log("Multiplicação:", n1 * n2);
}

function divisao (n1, n2) {
  console.log("Divisão:", n1 / n2);
}

soma2(num1, num2);
diferenca(num1, num2); 
multiplicacao(num1, num2); 
divisao(num1, num2);




//Desafios

//1.
//a.
let desafioA = (frase) => {
   return frase
}

console.log(desafioA("Vamos estudar arrow functions"));

//b.
let desafioB = (num1, num2) =>{
  let soma = num1 + num2;
  console.log(desafioA(soma));
}

desafioB(5, 10);


//2.
let cateto1 = Number(prompt("Digite o primeiro cateto:"));
let cateto2 = Number(prompt("Digite o segundo cateto:"));

function calculoHipotenusa (n1, n2) {
  let hip = (n1*n1) + (n2*n2)
  return Math.sqrt(hip);
}

console.log(calculoHipotenusa(cateto1, cateto2));

