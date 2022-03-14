ˋˋˋjavascript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let total = 0;
  for (const num of arrayDeNumeros){
    if(num === numeroEscolhido){
      total += 1;
    }
  }
  if(total > 0){
  return `O número ${numeroEscolhido} aparece ${total}x`;
  }else{
    return "Número não encontrado";
  }
}

ˋˋˋ