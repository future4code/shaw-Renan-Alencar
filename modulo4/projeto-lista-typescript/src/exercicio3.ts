enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
  nome: string,
  anoLancamento: number,
  genero: string,
  pontuacao?: number
}


function filmes(nome: string, ano:number, genero: GENERO, pontuacao? :number ){
  const filme: Filme = {
    nome: nome,
    anoLancamento: ano,
    genero: genero,
    pontuacao: pontuacao,
  }
  return filme
}

console.log(filmes("Duna", 2021, GENERO.ACAO))