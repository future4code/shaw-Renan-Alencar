function ex6(num1: number, num2:number): Array<number>{
  let soma:number = num1 + num2;
  let sub:number = num1 - num2;
  let multi:number = num1 * num2;
  let maior:number = 0

    if(num1>num2){
      maior=num1
    }else{
      maior=num2
    }
 
  return [soma, sub, multi, maior];
}

console.log(ex6(5, 10))