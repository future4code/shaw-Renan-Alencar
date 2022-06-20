# Exercício - 1
## A.
    Deletaria a coluna salary

## B.
    Altera o nome da coluna de gender para sex
    
## C.
    Altera o tipo da coluna gender para varchar(255)
    
## D.
    ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
    
# Exercício - 2
## A.
```SQL
  UPDATE Actor
  SET name = "Moacyr Franco"
  WHERE id = "003";
```

## B.
```SQL
  UPDATE Actor
  SET name = "JULIANA PAES"
  WHERE name = "Juliana Paes";
```
```SQL
  UPDATE Actor
  SET name = "Juliana Paes"
  WHERE name = "JULIANA PAES";
```
## C.
```SQL
  UPDATE Actor
  SET name = "Fulano", salary = 50000, birth_date ="2050-10-25", gender = "male"
  WHERE id = "005";
```
## D. 
```SQL
  UPDATE Actor
  SET nome = "Fulano", salary = 50000, birth_date ="2050-10-25", gender = "male"
  WHERE id = "005";
```
  Error Code: 1054. Unknown column 'nome' in 'field list'

  O campo nome não existe na tabela, o correto seria name

# Exercício - 3
## A.
```SQL
  DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
## B. 
```SQL
  DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

# Exercício - 4
## A.
```SQL
    SELECT MAX(salary) FROM Actor;
```
## B.
```SQL
    SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

## C.
```SQL
    SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

## D.
```SQL
    SELECT SUM(salary) FROM Actor
```

# Exercício - 5

## A.
    Retorna a quantidade de atores e atrizes na tabela (ou seja, em relação ao gender)
## B.
```SQL
    SELECT id, name FROM Actor
    WHERE gender = 'male'
    ORDER BY name DESC;
```

## C.
```SQL
    SELECT * FROM Actor
    ORDER BY salary DESC;
```
## D.
```SQL
    SELECT * FROM Actor
    WHERE gender = 'male'
    ORDER BY salary DESC
    LIMIT 3;
```

## E.
```SQL
    SELECT AVG(salary), gender
    FROM Actor
    GROUP BY gender;
```

# Exercício - 6
## A.
```SQL
    ALTER TABLE Filmes ADD playing_limit_date DATE;
```

## B.
```SQL
    ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;
```
## C.
```SQL
    UPDATE Filmes
    SET playing_limit_date = "2020-12-31"
    WHERE id = "001";

    UPDATE Filmes
    SET playing_limit_date = "2022-06-30"
    WHERE id = "002";
```