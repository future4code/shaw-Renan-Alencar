import express, { Express } from "express";
import cors from "cors";
import {users} from './data/data'


const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/allusers", (req, res) => {
  res.status(200).send(users)
})

app.get("/allusers/saldo", (req, res) => {
  try {
    const name = req.query.name
    const cpf = req.query.cpf

    const [saldo] = users.filter((user) => {
      if(user.name === name){
        return user.saldo
      }
    })

    res.send([saldo.saldo])
  } catch (error:any) {
     res.send(error.message)
  }
})


app.post("/createConta", (req, res) => {
  try {
    const id = new Date().getTime()
    const { name, cpf, dataNascimento, saldo } = req.body;

    if (!name || !cpf || !dataNascimento) {
      res.status(404)
      throw new Error("Algum campo faltando, favor verificar");
    }

    const buscaCPF = users.find((user) => {
      return user.cpf === cpf
    })
    if(buscaCPF) {
      res.status(404)
      throw new Error("CPF já cadastrado");
    }
    console.log(buscaCPF);
    
    const [diaNasc, mesNasc, anoNasc] = dataNascimento.split("/");
    const dataAtual = new Date();
    let idade = dataAtual.getFullYear() - Number(anoNasc)

    //verificar se o Mês e o dia já passou
    if (dataAtual.getMonth() + 1 < Number(mesNasc) ||
      (dataAtual.getMonth() + 1 === Number(mesNasc) &&
        dataAtual.getDate() < Number(diaNasc))
    ) {
      idade--;
    }
    
    if(idade < 18){
      res.status(404)
      throw new Error("Você não é maior de 18");
    }
     

    const newUser = {
      id,
      name,
      cpf,
      dataNascimento,
      saldo,
    };
    users.push(newUser);

    res.status(201).send("Conta criada com sucesso")
  } catch (error:any) {
    res.send(error.message)
  }
})


const server = app.listen(3003, () => {
       console.log(`Server is running in http://localhost:3003`);
});