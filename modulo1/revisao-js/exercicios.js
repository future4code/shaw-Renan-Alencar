// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function comparar(a, b) {
    return a - b;
  }
  return array.sort(comparar);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const pares = array.filter((num) => {
    return num % 2 === 0;
  });
  return pares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const pares = array.filter((num) => {
    return num % 2 === 0;
  });
  return pares.map((num) => {
    return num * num;
  });
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0;
  for (let num of array) {
    if (num > maior) {
      maior = num;
    }
  }
  return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = 0;
  let menorNumero = 0;
  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }
  let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;
  let diferenca = maiorNumero - menorNumero;

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca,
  };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if(ladoA === ladoB && ladoB === ladoC && ladoC === ladoA){
    return "Equilátero";
  }else if(ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
    return "Escaleno";
  }else{
    return "Isósceles";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  function comparar(a, b) {
    return a - b;
  }
  const arrayOrdenado = array.sort(comparar);
  return [arrayOrdenado[arrayOrdenado.length-2], arrayOrdenado[1]];
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let novaPessoa = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return novaPessoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
