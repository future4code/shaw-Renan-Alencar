//importando express com Request e Response e cors
import { count } from "console";
import express, { Request, Response } from "express";

import app from "./app";
import connection from "./connection";
//extra: importando configuração de rede do node

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0]
}



// Ou então podemos chamá-la dentro de um endpoint
// app.get("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id

//     console.log(await getActorById(id))

//     res.end()
//   } catch (error:any) {
// 		console.log(error.message)
//     res.status(500).send("Unexpected error")
//   }
// })


// Exercicio 1
//A.
// A reposta vem dentro de [] e vem varias informações que não vamos usar, para filtar devemos usar qual posição no array a informação está

//B.
const buscaAtor =async(name:string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)
  return result[0]
}


//C.
const quantidadeAtor =async(gender:string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE GENDER = '${gender}'
  `)
  return result[0]
}

// Exercicio 2
//A.
const atualizaSalario = async(req: Request, res: Response): Promise<any> => {
  await connection('Actor')
  .update({
    name: req.body.name,
    salary: req.body.salary,
    birth_dat: req.body.birth_dat,
    gender: req.body.gender,
  }).where("id", req.params.id);
}

//B.
const deletaAtor = async(req: Request, res: Response): Promise<any> => {
  await connection('Actor')
  .delete()
  .where('id', req.params.id);
}

//C.
const mediaSalario = async(gender: string): Promise<any> => {
   const result = await connection('Actor')
  .avg("media é")
  .where({gender});

  return result[0]
}


//Exercicio 3
//A
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await connection("Actor")
    .select()
    .where("id", id)
    res.status(200).send(actor)
  } catch (err:any) {
    res.status(400).send({
      message: err.message
    });
  }
});

app.get("/actor", async (req: Request, res: Response) => {
  try {
    // const gender = req.query.gender
    // const result = await connection("Actor")
    // .count(`${gender}`)
    // .where({"gender": gender})

    // res.status(200).send(result)
    
  } catch (err:any) {
    res.status(400).send({
      message: err.message
    });
  }
});

