/*
// Exercícios de interpretação de código
1.
a. 
Matheus Nachtergaele
Virginia Cavendish
Globo 14h

2.
a.
nome: "Juca", 
idade: 3, 
raca: "SRD"

nome: "Juba", 
idade: 3, 
raca: "SRD"

nome: "Jubo", 
idade: 3, 
raca: "SRD"

b. spread - permite acessar o conteudo de um objeto

3.
a. 
false
undefined

b. No primeiro console.log ele imprimiu o valor que tem na propriedade backender que é false, no segundo ele pede pra imprimir o valor que tem na propriedade altura, porém ela não é encontrada e retorna undefined.

*/



// Exercícios de escrita de código
// 1.
// a.

const pessoa = {
  nome: "Amanda",
  apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

function frase (parametro){
  console.log(`Eu sou ${parametro.nome}, mas pode me chamar de: ${parametro.apelidos[0]}, ${parametro.apelidos[1]} ou ${parametro.apelidos[2]}`);
} 

frase(pessoa);

// b.
const novaPessoa = {
  ...pessoa,
  apelidos: ["Manda", "Mandoca", "Amandona"]
}
frase(novaPessoa);



// 2
// a.
const pessoa1 = {
  nome: "Renan",
  idade: 32,
  profissao: "Desenvolvedor"
}

const pessoa2 = {
  nome: "Amanda",
  idade: 28,
  profissao: "Comissária"
}

// b.
function retornaArray(objeto) {
  const array = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length];
  return array;
}

console.log(retornaArray(pessoa1));


// 3.
// a.
const carrinho = [];

// b.
const fruta1 = {
  nome: "maça",
  disponibilidade: true
}

const fruta2 = {
  nome: "laranja",
  disponibilidade: true
}

const fruta3 = {
  nome: "abacaxi",
  disponibilidade: true
}

// c.
function adicionaCarinho(parametro) {
  carrinho.push(parametro)
}
adicionaCarinho(fruta1);
adicionaCarinho(fruta2);
adicionaCarinho(fruta3);

// d.
console.log(carrinho)


// Desafios

// 1.
function usuario() {
  const nome = prompt("Digite seu nome");
  const idade = prompt("Digite sua idade");
  const profissao = prompt("Digite sua profissão");
  const infoUsuario = {
    nome: nome,
    idade: idade,
    profissao: profissao
  }
  console.log(infoUsuario, typeof infoUsuario);
}

usuario();


// 2.
function filmes (primeiro, segundo) {
  return `O primeiro filme foi lançado antes do segundo? ${primeiro.anolancamento < segundo.anolancamento}. O primeiro filme foi lançado no mesmo ano que o segundo? ${primeiro.anolancamento <= segundo.anolancamento}`
}

const filme1 = {
  anolancamento: 2001,
  nome: "Senhor dos anéis"
}
const filme2 = {
  anolancamento: 1999,
  nome: "O colecionador de ossos"
}

console.log(filmes(filme1, filme2));



// 3.

function estoque(fruta){
  return fruta.disponibilidade = false;
}

estoque(fruta1);
