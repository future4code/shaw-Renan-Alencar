console.log("Boas vindas ao jogo de Blackjack!");

if (confirm("Vamos começar a jogar?")) {

  let usuarioCarta = [];
  let somaCartaUsuario = 0;

  for (let i = 1; i <= 2; i++) {
    const carta = comprarCarta();
    usuarioCarta.push(carta.texto);
    somaCartaUsuario += carta.valor;
  }
  console.log(`Usuário - cartas: ${usuarioCarta} - pontuação ${somaCartaUsuario}`);

  let maquinaCarta = [];
  let somaCartaMaquina = 0;
  for (let i = 1; i <= 2; i++) {
    const carta = comprarCarta();
    maquinaCarta.push(carta.texto);
    somaCartaMaquina += carta.valor;
  }
  console.log(`Computador - cartas: ${maquinaCarta} - pontuação ${somaCartaMaquina}`);

  if (somaCartaUsuario > somaCartaMaquina) {
    console.log("O usuário ganhou!");
  } else if (somaCartaUsuario < somaCartaMaquina) {
    console.log("O computador ganhou!");
  } else {
    console.log("Empate!");
  }

} else {
  console.log("O jogo acabou!");
}