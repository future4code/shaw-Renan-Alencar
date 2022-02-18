// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura"));
  const largura = Number(prompt("Digite a largura"));

  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite em que ano estamos"));
  const anoNascimento = Number(prompt("Digite seu ano de nascimento"));

  console.log(anoAtual - anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return  (peso / (altura * altura));;
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome");
  const idade = Number(prompt("Digite sua idade"));
  const email = prompt("Digite seu e-mail");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua primeira cor favorita");
  const cor2 = prompt("Digite sua segunda cor favorita");
  const cor3 = prompt("Digite sua terceira cor favorita");

  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const maiuscula = string.toUpperCase();
  return maiuscula;

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const semPrejuizo = custo / valorIngresso;
  return semPrejuizo;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const verificaTamanho = string1.length === string2.length;
  return verificaTamanho;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array.length - 1
  return array[ultimoElemento];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let tamanhoArray = array.length-1;
  let ultimo = array[tamanhoArray];
  // array.splice(tamanho, 1, array[0])
  // array.splice(array[0-1], 1, ultimo)
  array[tamanhoArray] = array[0];
  array[0] = ultimo  
  return array;
}



// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual"));
  let anoNascimento = Number(prompt("Digite o ano de nasicmento"));
  let anoEmissao = Number(prompt("Digite o ano de emissão"));
  let idade = anoAtual - anoNascimento;
  let renovacao = anoAtual - anoEmissao;

  const vinteAnos = idade <= 20 && renovacao >= 5
  const maisVinte = idade <= 50 && renovacao >= 10
  const maisCinquenta = renovacao >= 15

  console.log(vinteAnos || maisVinte || maisCinquenta);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let condicao = (ano % 4 === 0) && (ano % 100 != 0 || ano % 400 === 0)
  
  return (condicao);
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 anos?");
  const estudo = prompt("Você possui ensino médio completo?");
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");
  const maiorIdade = idade === "sim";
  console.log(maiorIdade &&  estudo == disponibilidade);
}