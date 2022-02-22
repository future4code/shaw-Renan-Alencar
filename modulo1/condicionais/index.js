/*

Exercícios de interpretação de código

1.
a. O código analisa o número informado, se retornar true ele faz a primeira condição, se retornar false ele faz a segunda condição. Ele testa o número que o usuário informou dividido por 2 se o resto da divisão é 0.

b. Serve para verificar se um número é par ou impar.
c. Para número impar

2.
a. Para verificar o preço da fruta escolhida.
b. O preço da fruta Maçã é R$ 2.25
c. O preço da fruta Pêra é R$ 5

3.
a. Está recebendo o número informado pelo usuário e armazenando na variável numero
b. (10)
   Esse número passou no teste
   erro no console

   (-10)
   erro no console

c. Sim. pois o console de mensagem não pode acessar a variavel let mensagem que está dentro do escopo de if

*/


//Exercícios de escrita de código
//1.
//a. b.
const idade = Number(prompt("Digite sua idade"));

// c.
if (idade >= 18){
  console.log("Você pode dirigir.")
}else{
  console.log("Você não pode dirigir ainda.")
}


// 2.
const turno = prompt("Digite que turno você estuda:  M (matutino) ou V (Vespertino) ou N (Noturno)");

if(turno === "M"){
  console.log("Bom dia!")
}else if(turno === "V"){
  console.log("Boa tarde!")
}else{
  console.log("Boa noite!")
}


//3.
const turno2 = prompt("Digite que turno você estuda:  M (matutino) ou V (Vespertino) ou N (Noturno)");

switch(turno2){
  case "M":
    console.log("Bom dia!")
    break
  case "V":
    console.log("Boa tarde!")
    break
  case "N":
    console.log("Boa noite!")
    break
}


//4.
const genero = prompt("Qual o gênero do filme?");
const ingresso = Number(prompt("Qual o valor do ingresso?"));

if(genero.toLowerCase() === "fantasia" && ingresso < 15){
  console.log("Bom filme!")
}else{
  console.log("Escolha outro filme :(")
}


//Desafios
//1.
const generoDesafio = prompt("Qual o gênero do filme?");
const ingressoDesafio = Number(prompt("Qual o valor do ingresso?"));

if(generoDesafio.toLowerCase() === "fantasia" && ingressoDesafio < 15){
  const lanche = prompt("Qual lanche você vai comprar?");
  console.log("Bom filme!", `Aproveite o seu ${lanche}`)
}else{
  console.log("Escolha outro filme :(")
}



//2.
const nomeCompleto = prompt("Digite seu nome completo");
const tipoJogo = prompt("Tipo de jogo: (IN) indica internacional e (DO) indica doméstico;");
const etapaJogo = prompt("Etapa do jogo: (SF) indica semi-final (DT) indica decisão de terceiro lugar e (FI) indica final");
const categoria = Number(prompt("Escolha uma categoria:  1, 2, 3 ou 4;"));
const quantidadeIngresso = prompt("Quantidade de ingressos");
let valorIngresso;

console.log(`Nome do cliente: ${nomeCompleto}`);

//tipo de jogo
if(tipoJogo === "DO"){
  console.log("Tipo do jogo:  Nacional ");
}else{
  console.log("Tipo do jogo:  Internacional ");
}

//etapa do jogo
if(etapaJogo === "SF"){
  semi();
  console.log("Etapa do jogo: Semifinais");
}else if (etapaJogo === "DT"){
  terceiroLugar();
  console.log("Etapa do jogo: Decisão do 3º lugar");
}else {
  final();
  console.log("Etapa do jogo: Final");
}

console.log(`Categoria: ${categoria}`);
console.log(`Quantidade de Ingressos: ${quantidadeIngresso}`);

function semi(){
  if(categoria === 1){
    valorIngresso = 1320;
  }else if(categoria === 2){
    valorIngresso = 880;
  }else if(categoria === 3){
    valorIngresso = 550;
  } else {
    valorIngresso = 220;
  }
}

function terceiroLugar(){
  if(categoria === 1){
    valorIngresso = 660;
  }else if(categoria === 2){
    valorIngresso = 440;
  }else if(categoria === 3){
    valorIngresso = 330;
  } else {
    valorIngresso = 170;
  }
}

function final(){
  if(categoria === 1){
    valorIngresso = 1980;
  }else if(categoria === 2){
    valorIngresso = 1320;
  }else if(categoria === 3){
    valorIngresso = 880;
  } else {
    valorIngresso = 330;
  }
}

if(tipoJogo === "DO"){
  console.log(`Valor do ingresso: R$ ${valorIngresso}`);
  console.log(`Valor total: R$ ${valorIngresso * quantidadeIngresso}`);
}else{
  console.log(`Valor do ingresso: U$ ${valorIngresso / 4.10}`);
  console.log(`Valor total: R$ ${(valorIngresso * quantidadeIngresso) / 4.10}`);
}
