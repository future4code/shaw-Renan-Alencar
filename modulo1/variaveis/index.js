/*
1.
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

Na primeira linha será impresso 10 e na segunda será impresso 10, 5

2.
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

Será impresso 10,10,10 pois foi atribuido a C o valor de A(10), depois a B o valor de C(10) e depois A o valor de B(10)

3.
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

O código calcula quanto uma pessoa recebe por hora de trabalho.
Acredito que ficaria melhor renomear a variável P por horasTrabalhoDia e T por valorDia 

*/


//Exercício 1
let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);
//nas duas variáveis acima foram impressos undefined, pois ambas estão vazias.

nome = prompt("Qual seu nome?");
idade = prompt("Qual sua idade?");

console.log(typeof nome);
console.log(typeof idade);
//agora ambas são string, pois sempre o comando prompt transforma o valor recebido em uma string.

console.log("Olá " + nome + ", você tem " + idade + " anos" )



//Exercício 2

const pergunta1 = "Você está usando roupa azul hoje?";
const pergunta2 = "Está chovendo hoje?";
const pergunta3 = "Está calor hoje?";

let resposta1 = prompt(pergunta1);
let resposta2 = prompt(pergunta2);
let resposta3 = prompt(pergunta3);

console.log(pergunta1, resposta1);
console.log(pergunta2, resposta2);
console.log(pergunta3, resposta3);



//Exercício 3
let a = 10;
let b = 25;
let c = b;
b = a;
a = c;

console.log("O valor de a é" , a);
console.log("O valor de b é" , b);


//Desafio
let num1 = prompt("Digite o primeiro número");
let num2 = prompt("Digite o segundo número");


let x = Number(num1) + Number(num2);
let y = Number(num1) * Number(num2);

console.log("O primeiro número somado ao segundo número resulta em: ", x);
console.log("O primeiro número multiplicado pelo segundo número resulta em: ", y);