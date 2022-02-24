/*
Exercícios de interpretação de código

1.
a. 
 { nome: "Amanda Rangel", apelido: "Mandi" }  0  [array usuarios completo]
 { nome: "Laís Petra", apelido: "Laura" }     1  [array usuarios completo]
 { nome: "Letícia Chijo", apelido: "Chijo" }  2  [array usuarios completo]

2.
b.
["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

3.
a.[
  { nome: "Amanda Rangel", apelido: "Mandi" }
  { nome: "Laís Petra", apelido: "Laura" }
]

*/



//Exercícios de escrita de código

// 1.
const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
]
// a.

const novoArrayPets = pets.map((pet) => {
  return pet.nome
})
console.log(novoArrayPets);

// b.
const arraySalsicha = pets.filter((pet) =>{
  return pet.raca.toLocaleLowerCase() === "salsicha"
})
console.log(arraySalsicha);


// c.
const msgDesconto = pets.filter((pet) =>{
  return pet.raca.toLocaleLowerCase() === "poodle";
}).map((pet) =>{
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`
})
console.log(msgDesconto);


// 2.
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a.
const nomeItem = produtos.map((produto) => {
  return produto.nome;
})
console.log(nomeItem)

// b.
const itemDesconto = produtos.map((produto) => {
  let desconto = (produto.preco - (produto.preco * 0.05)).toFixed(2);
  return {nome: produto.nome, preço: desconto};
})
console.log( itemDesconto);

// c.
const arrayBebidas = produtos.filter((produto) => {
  return produto.categoria.toLocaleLowerCase() === "bebidas"
})
console.log(arrayBebidas);

// d.
const arrayYpe = produtos.filter((produto) => {
  let ype = produto.nome.toLocaleLowerCase().includes("ypê")
  return ype;
})
console.log(arrayYpe)

// e.
const compreYpe =  produtos.filter((produto) => {
  let ype = produto.nome.toLocaleLowerCase().includes("ypê")
  return ype;
}).map((produto) => {
  return `Compre ${produto.nome} por ${produto.preco}`
})
console.log(compreYpe);


// Desafios
// 1.
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

// a.

const ordemAlfabetica = pokemons.map((pokemon) => {
  return pokemon.nome;
}).sort((a, b) => {
  if (a < b) {
  return -1;
  }
  return 0;
});
console.log(ordemAlfabetica);

// b.
const tipoPokemon = pokemons.map((pokemon) => { 
  return pokemon.tipo  ;
}).filter((tipo, indice, array) => {
  return array.indexOf(tipo) === indice;
})
console.log(tipoPokemon)

