# Exercício - 1
## A.
    Chave estrangeira é para referenciar a ligação de uma tabela com a outra

## B.
```SQL
INSERT INTO Rating VALUES
("002", "Filme com uma historia interessante", 7, "002"),
("003", "Filme de suspense bom", 8.9, "003"),
("004", "Efeitos especias muito bom", 7.8, "003"),
("001", "Muito legal o filme, gostei bastante", 8.5, "001");
```
    
## C.
    Não é possivel criar pois o ID não é encontrado na tabela pai
    
## D.
```SQL
    ALTER TABLE Filmes DROP COLUMN avaliacao;
```
## E.
    Não é possivel deletar pois essa informação é pai de uma outra informação que consta em outra tabela

# Exercício - 2
## A.
Ela faz referencia a duas chaves estrangerias que ligam as informações a outras duas tabelas

## B.
```SQL
  INSERT INTO MovieCast VALUES
    ("001", "004"),
    ("001", "005"),
    ("001", "003"),
    ("002", "001"),
    ("002", "002"),
    ("003", "007");
```
## C.
Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha 
## D. 
Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha

# Exercício - 3
## A.
Está selecionando a tabela Movie com a tabela Rating e o operador ON está indicando qual condição é para ser comparado nas duas tabelas para impimir o resultado.

## B. 
```SQL
 SELECT Filmes.name, Filmes.id as Id_filme, Rating.id as Id_comentario, Rating.rate as Nota,  Rating.comment
FROM Filmes
INNER JOIN Rating ON Filmes.id = Rating.movie_id;
```
# Desafios
# Exercício - 4
## A.
```SQL
SELECT Filmes.name, Filmes.id as Id_filme, MovieCast.actor_id
FROM Filmes
RIGHT JOIN MovieCast ON MovieCast.movie_id = Filmes.id;
```

## B.
```SQL
SELECT AVG(Rating.rate), Filmes.name, Filmes.id as Id_filme
FROM Filmes
LEFT JOIN Rating ON Filmes.id = Rating.movie_id
GROUP BY (Filmes.id);
```


