// 1. 
// A.
// process.argv[2]

// B.
// const valor1 = process.argv[2]
// const valor2 = process.argv[3];
// console.log("Olá,", valor1, "! Você tem ", valor2, "anos.")

// C.
// const valor1 = process.argv[2];
// const valor2 = Number(process.argv[3]);
// console.log("Olá,", valor1, "! Você tem ", valor2, "anos. Em sete anos você terá", valor2 + 7 )

// 2. 
// const operacao = process.argv[2];
// const valor1 = Number(process.argv[3]);
// const valor2 = Number(process.argv[4]);

// switch (operacao) {
//   case "add":
//     console.log(valor1 + valor2);
//     break;
//   case "sub":
//     console.log(valor1 - valor2);
//     break;
//   case "mult":
//     console.log(valor1 * valor2);
//     break;
//   case "div":
//     console.log(valor1 / valor2);
//     break;
// }

// 3. 
// const tarefas = ["Ir no mercado", "Lavar roupa", "Limpar a casa"]
// const addTarefa = tarefas.push(process.argv[2]);

// const listaTarefas = tarefas.map((tarefa) => {
//   return console.log(tarefa)
// })