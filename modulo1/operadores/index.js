/*
Exercícios de interpretação de código

1. 
  a. false
  b. false
  c. true
  d. boolean

2.
  Será impresso o primeiro número concatenado com o segundo, pois os dois são strings.

3.
  Teria que transformar as duas strings em números
  const soma = Number(primeiroNumero) + Number(segundoNumero)

*/

//Exercícios de escrita de código


//1.
let idade = Number(prompt("Digite sua idade"));
let idadeAmigo = Number(prompt("Digite a idade do seu melhor amigo ou da sua melhor amiga"));
let comparaIdade = idade > idadeAmigo;
let diferencaIdade = idade - idadeAmigo;

console.log("Sua idade é maior do que a do seu melhor amigo? ", comparaIdade);
console.log("A diferença de idade entre vocês é de ", diferencaIdade , " anos");



//2.
let numeroPar = prompt("Digite um número par")
let resto = Number(numeroPar) % 2;

console.log(resto); 
//Inserindo número par: o resto de um número par dividido por 2 sempre será 0
//Inserindo número impar: o resto de um número impar dividido por 2 sempre será 1




//3.
const suaIdade = Number(prompt("Digite sua idade"));

console.log("Sua idade em meses é de:", suaIdade * 12);
console.log("Sua idade em dias é de:", (suaIdade * 12) * 30);
console.log("Sua idade em horas é de:", ((suaIdade * 12) * 30) * 24);



//4.
let num1 = Number(prompt("Digite o primeiro número"));
let num2 = Number(prompt("Digite o segundo número"));

console.log("O primeiro numero é maior que segundo? " , num1 > num2);
console.log("O primeiro numero é igual ao segundo? " , num1 === num2);
console.log("O primeiro numero é divisível pelo segundo? " , (num1 % num2) === 0);
console.log("O segundo numero é divisível pelo primeiro? " , (num2 % num1) === 0);



//Desafios

// 1.
const desafioA = (77 - 32)*(5/9) + 273.15;
const desafioB = (80)*(9/5) + 32;
const desafioC1 = (30)*(9/5) + 32;
const desafioC2 = 30 + 273;
let celsius = Number(prompt("Digite o valor em graus Celsius que deseja converter"));


console.log("Calcule e mostre o valor de 77°F em  K - "+ desafioA +"K");
console.log("Calcule e mostre o valor de 80°C em °F - "+ desafioB +"°F");
console.log("Calcule e mostre o valor de 30°C em °F e K - "+ desafioC1 +"°F "+ desafioC2 + "K");
console.log(celsius + '°C em convertidos são - '+ ((celsius)*(9/5) + 32) + "°F e "+ (celsius + 273) +"k");



//2.

let quilowattHora = 280 * 0.05;
let desconto = (280 * 0.05) * 0.15

console.log("Valor a ser pago por 280 quilowatt-hora é de:", quilowattHora);
console.log("Valor a ser pago com desconto de 15% é de:", quilowattHora - desconto);



//3.

let desafio3A = 20 / 2.205;
let desafio3B = 10.5 / 35.274;
let desafio3C = 100 * 1609;
let desafio3D = 50 / 3.281;
let desafio3E = 103.56 * 3.785;
let desafio3F = 450 * 0.24;
let milhasMetros = Number(prompt("Digite o número de milhas para transformar em metros"))

console.log("20lb equivalem a", desafio3A, "kg");
console.log("10.5oz equivalem a", desafio3B ,"kg");
console.log("100mi equivalem a", desafio3C ,"m");
console.log("50ft equivalem a", desafio3D ,"m");
console.log("103.56gal equivalem a", desafio3E ,"l");
console.log("450 xic equivalem a", desafio3F ,"l")
console.log(milhasMetros, "mi equivale a", milhasMetros * 1609 ,"m")


