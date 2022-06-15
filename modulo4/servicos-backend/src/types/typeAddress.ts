export type Address = {
  logradouro: string,
  bairro: string,
  cidade: string,
  estado: string
}

export type AddressFull = {
  cep: string,
  logradouro: string,
  bairro: string,
  numero: number,
  cidade: string,
  estado: string
}