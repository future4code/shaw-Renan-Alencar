
if (confirm("Boas vindas ao jogo de Blackjack!" + "\n" + "Vamos começar a jogar?")) {

  let usuarioCarta = [];
  let somaCartaUsuario = 0;
  let maquinaCarta = [];
  let somaCartaMaquina = 0;
  

  const sortearCartas =(() => {

    for (let i = 1; i <= 2; i++) {
      const carta = comprarCarta();
      usuarioCarta.push(carta.texto);
      somaCartaUsuario += carta.valor;
    }
    
    for (let i = 1; i <= 2; i++) {
      const carta = comprarCarta();
      maquinaCarta.push(carta.texto);
      somaCartaMaquina += carta.valor;
    }
  })

  sortearCartas();
  
  if((usuarioCarta[0].substring(0,1) === "A" && usuarioCarta[1].substring(0,1) === "A") || (maquinaCarta[0].substring(0,1) === "A" && maquinaCarta[1].substring(0,1) === "A")){
    sortearCartas();
  }else{
     const novaCarta = confirm("Suas cartas são "+ usuarioCarta[0] + usuarioCarta[1] +" . A carta revelada do computador é "+ maquinaCarta[0] + "\n"+  "Deseja comprar mais uma carta?")
    

    // console.log(`Usuário - cartas: ${usuarioCarta} - pontuação ${somaCartaUsuario}`);
    // console.log(`Computador - cartas: ${maquinaCarta} - pontuação ${somaCartaMaquina}`);
  
    // if (somaCartaUsuario > somaCartaMaquina) {
    //   console.log("O usuário ganhou!");
    // } else if (somaCartaUsuario < somaCartaMaquina) {
    //   console.log("O computador ganhou!");
    // } else {
    //   console.log("Empate!");
    // }
  }

} else {
  console.log("O jogo acabou!");
}