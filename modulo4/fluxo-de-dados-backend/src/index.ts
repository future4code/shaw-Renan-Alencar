import express from "express";
import cors from "cors";
import { Produtos } from './data'

const app = express();

app.use(express.json());
app.use(cors());


app.get("/test", (req, res) => {          
  res.send("API Rodando")
})

//Exercicios 3
app.post("/createProdutos", (req, res) => {
  try{
    const id = Math.floor(Date.now() * Math.random()).toString(5);
    const {name, price} = req.body
  
    if(!name || !price){
      res.status(422)
      throw new Error ("Algum campo está vazio")
    }

    if(typeof name !== "string"){
      res.status(422)
      throw new Error ("Name não é uma string")
    }

    if(typeof price !== "number"){
      res.status(422)
      throw new Error ("Price não é Number")
    }

    if( price <= 0 ){
      res.status(422)
      throw new Error ("Price tem que ser maior que 0")
    }

    const [findProduct] = Produtos.filter((produto) => {
      return produto.name === name
    })
    if(findProduct) {
      res.status(409)
      throw new Error ("Produto já cadastrado")
    }


    Produtos.push({id, name, price})
    res.status(201).send(Produtos)

  } catch (error:any) {
    res.send(error.message)
  }
})

//Exercicio 4
app.get("/Allprodutos", (req, res) => {
  res.status(201).send(Produtos)
})


//Exercicio 5
app.put("/produtos/:id", (req, res) => {
  try {
    const { price } = req.body;
    const id:string = (req.params.id);

    if (!price) {
      res.status(422);
      throw new Error("Campo preço vazio");
    }

    if(typeof price !== "number"){
      res.status(422)
      throw new Error ("Price não é Number")
    }

    if( price <= 0 ){
      res.status(422)
      throw new Error ("Price tem que ser maior que 0")
    }

    const [idInexistente] = Produtos.filter((produto) => {
      return produto.id === id
    })
    if(!idInexistente){
      res.status(409)
      throw new Error("ID não encontrado");
    }

   const valorAtualizado = Produtos.map((produto) => {
      if(produto.id === id) {
        return {...produto, price: price}
      }else{
        return produto
      }
    })
    res.status(201).send(valorAtualizado)

  } catch (error:any) {
    res.send(error.message)
  }
});

//Exercicio 6
app.delete("/delete/:id", (req, res) => {
  try {
    
    const id:string = (req.params.id);

    const [idInexistente] = Produtos.filter((produto) => {
      return produto.id === id
    })
    if(!idInexistente){
      res.status(409)
      throw new Error("ID não encontrado");
    }

    const deleteProduto = Produtos.filter((produto) => {
      return produto.id !== id
    })
    res.status(201).send(deleteProduto)
    
  } catch (error:any) {
    res.send(error.message)
  }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});