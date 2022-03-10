ˋˋˋjavascript

function calculaNota(ex, p1, p2) {
  let mediaFinal = (ex + p1 + p2) / 3 ;
  if(mediaFinal >= 9){
    return "A";
  }else if(mediaFinal >= 7.5){
    return "B";
  }else if(mediaFinal >= 6){
    return "C";
  }else{
    return "D";
  }
}

ˋˋˋ