# 💻 Projeto Rappi4

<center>
   <img src="https://user-images.githubusercontent.com/69327864/181111998-83eaec7c-d2b6-444a-bff6-0eb883983e7d.png" width="40%"/>
</center
  
<br>
  
## :dart: Objetivo do projeto:
O projeto é baseado em aplicativos de comida (iFood, UberEats e Rappi) e é do tipo mobile first. O projeto foi desenvolvido com base no layout elaborado pela designer Camila Mizutani (no qual o aplicativo IFood foi usado como referência). 

## ⚙️ Funcionalidades:
   - Login: realiza o login do usuário e armazena as informações de autenticação do usuário no local storage
   - Cadastro: efetua o cadastro de um novo usuário e redireciona para tela de cadastro de endereço
   - Cadastro de endereço: realiza o cadastro do usuário e redireciona para a tela de Home
   - Home: renderiza todos os restaurantes, possui um filtro por categoria e redireciona para página de busca ao clicar no input de busca
   - Busca: realiza a busca de restaurantes pelo nome
   - Home e Busca: ao clicar nos cards dessas tela o usuário é redirecionado para a página do restaurante selecionado
   - Restaurantes: renderiza as informações do restaurante e seus produto, ao clicar em adicionar ele abre um pop-up para informar a quantidade e ao confirmar o item é adicionado ao carrinho, também é possível remover esse item, não é possível adicionar itens de restaurantes distintos
   - Carrinho: o usuário pode remover itens, efetuar a compra, se existir uma compra em andamento só é possível realizar outra quando está for concluída
   - As únicas páginas públicas são Login e Cadastro, as outra só podem ser acessadas por usuários logados
 
## ⚙️ O que ainda não funciona:
- Não foi implementado responsividade para desktop

## :books: Bibliotecas utilizadas:
- styled-components
- axios
- react-router-dom
- material ui
- moment

## 🔗 Link Projeto: 
Acesse [clicando aqui!](http://rappi4-renan.surge.sh/)

## 📸 Imagens:
   
#### MOBILE
![image](https://user-images.githubusercontent.com/69327864/181114053-51319a84-0b22-46ba-9b2f-730ccab8a960.png)
![image](https://user-images.githubusercontent.com/69327864/181119451-d9685bb2-2108-4f63-a92e-75acd76e9abd.png)

![image](https://user-images.githubusercontent.com/69327864/181114387-b7b0b60a-c2c6-499d-80ec-9193a66e84fd.png)
![image](https://user-images.githubusercontent.com/69327864/181118556-991524ff-fe51-4b5e-8cc4-b759a02cce32.png)
![image](https://user-images.githubusercontent.com/69327864/181118756-80122230-3333-450d-8cec-6f0b73e84048.png)
![image](https://user-images.githubusercontent.com/69327864/181118798-39acca2d-9f63-4e8d-ae2d-cfc425c635dd.png)
![image](https://user-images.githubusercontent.com/69327864/181118859-3e2ffcf8-01eb-488c-bb0e-011f03c1e657.png)
![image](https://user-images.githubusercontent.com/69327864/181119035-5e0dfd3e-639c-433f-9d69-27c9ef672020.png)
![image](https://user-images.githubusercontent.com/69327864/181119614-04edf7bb-4139-42ea-9b26-73c737a5ebfa.png)



### :rocket: Caso queira executar a aplicação localmente

#### Clone do repositório

```shell
$ git clone <https://github.com/Renan-Ma/LabUniverse.git>
```

#### Instale as dependêmcias

```shell
$ npm install
```

#### Execute a aplicação 

```shell
$ npm start
```
   
## 👨‍💻 Desenvolvedor:
   
| [Renan Martinez](https://github.com/Renan-Ma) | 