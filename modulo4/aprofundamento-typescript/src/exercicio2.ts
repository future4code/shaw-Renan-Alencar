function obterEstatisticas(numeros: number[]): object {
  const numerosOrdenados = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: object = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}
const arrayNum: Array<number> = [3, 6, 1, 9, 6];

console.log(obterEstatisticas(arrayNum));

// A entrada é um array, saida é um objeto

// B.
//const numerosOrdenados: number
//let soma:number
//const estatisticas: object

// C.
type amostra = {
  numeros: number[];
  obterEstatisticas: () => {
    estatisticas(numeros: number[]): object;
  };
};

