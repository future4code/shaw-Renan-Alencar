type Conta = {
  id: number;
  name: string;
  cpf: string;
  dataNascimento: string;
  saldo?: number;
  extrato?: {
    valor: number,
    data: string,
    descricao: string
 }

};

type Transacoes = {
  transacoes: Array<number>
};

export let users: Conta[] = [
  {
    id: 1,
    name: "Renan",
    cpf: "111.111.444-58",
    dataNascimento: "15/04/1989",
    saldo: 2000,
  },
  {
    id: 2,
    name: "João",
    cpf: "222.222.222-58",
    dataNascimento: "20/07/2000",
    saldo: 7000,
  },
  {
    id: 3,
    name: "Bruno",
    cpf: "555.555.555-58",
    dataNascimento: "10/01/1970",
    saldo: 15000,
  },
];
