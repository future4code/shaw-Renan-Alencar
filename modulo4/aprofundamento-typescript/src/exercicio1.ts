// A. 
// const minhaString: string = "Labenu"
// console.log( minhaString);

// >>Vai aparecer o seguinte erro: Type 'number' is not assignable to type 'string'.

// B. 
// const meuNumero: number = 10

// Criando um tipo chamado UNION TYPE, inserindo uma | entre os tipos:
// let meuNumero: string | number

// C.
// D.
type Pessoa = {
  nome: string,
  idade: number,
  corFavorita: string   
}

enum corFavorita {
  PRETO = "preto",
  AZUL =  "azul",
  AMARELO = "amarelo",
  VERMELHO = "vermelho",
  VERDE = "verde",
  LARANJA = "laranja",
}

const Pessoa1: Pessoa = {
  nome: "Renan",
  idade: 32,
  corFavorita: corFavorita.PRETO    
}
const Pessoa2: Pessoa = {
  nome: "Amanda",
  idade: 27,
  corFavorita: corFavorita.VERDE    
}
const Pessoa3: Pessoa = {
  nome: "Roberto",
  idade: 63,
  corFavorita: corFavorita.AZUL    
}

console.table({Pessoa1, Pessoa2, Pessoa3});