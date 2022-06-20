import express, {Express} from 'express'
import cors from 'cors'
import { users } from './data/data'


const app: Express = express();

app.use(express.json());
app.use(cors());

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req, res) => {
  res.status(200).send("pong!")
})

// Exercicio 1
app.get("/allUsers", (req, res) => {
  try {
    if(!users){
      res.status(404)
      throw new Error ("Nenhum usuário encontrado")
    }
    res.status(201).send(users)

  } catch (error:any) {
    res.send(error.message)
  }
})

// Exercicio 2
//A. passei por query, achei mais facil desse jeito
//B. Sim, fiz essa verificação
app.get("/type/:type" , (req, res) => {
  try {
    const type:string = req.params.type;
    if(!type) {
      res.status(404)
      throw new Error("Type não informado")
    }
    if(type !== "ADMIN" && type !== "NORMAL"){
      res.status(406)
      throw new Error("Type inválido")
    }
    res.status(201).send(users.filter((user) => user.type === type))

  } catch (error:any) {
    res.send(error.message)
  }
})

//Exercicio 3
app.get("/allUsers/:user", (req, res) => {
  try {
    const name:string = req.params.user;
    const user = users.find((user) => user.name === name);
    if (!user) {
      res.status(404)
      throw new Error ("Nenhum usuário encontrado")
    }
    res.status(200).send(user)
  } catch (error:any) {
    res.send(error.message)
  }
})

//Exercicio 4
//A. Não mudou nada
//B. Não, acredito que o post seja mais adequado 
app.put("/createUser", (req,res) => {
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      throw new Error("Algum campo faltando, favor verificar");
    }

    const newUser = {
      id,
      name,
      email,
      type,
      age,
    };
    users.push(newUser);

    res.status(201).send(users.map(user => user));
  } catch (error) {
    
  }
})

const server = app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`);
});