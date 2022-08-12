# 💻Projeto Dog Breed

### :dart: Objetivo do projeto
Projeto feito como desafio de um case proposto pela empresa Q9 Técnologia, com o objetivo de criar um site onde é possivel ver fotos de cachorros, mas para isso é preciso realizar um registro/login antes de acessar a pagina de fotos.
Ao chegar na pagina de fotos é possível escolher entre 4 raças de cachorros, sendo Chihuahua a padrão apresentada logo de inicio, ao clicar em alguma foto especifica a mesma irá ser ampliada na tela.

Link do [desafio](https://gitlab.com/q9-tecnologia/desafios/mobile/desafio-dogbreed)

## :small_blue_diamond: Os requisitos do projeto são:
### Página de Cadastro
- Crie uma página Register com um campo de email, e autentique o usuário postando o email no endpoint de cadastro/login.
- A chamada na API retornará um token JWT, que deverá ser armazenado para ser utilizada nas chamadas seguintes.
- Após receber e armazenar o token, redirecione para a página de List.
- A página de Register é a única página de acesso público. As demais rotas são todas privadas e requerem o envio do token conforme a documentação da API abaixo

### Página de Lista de Cachorros
- No carregamento inicial da página de List, deverá ser feita uma chamada no endpoint de list.
- A página de List deverá ter um menu com quatro rotas - chihuahua, husky, labrador e pug.
- Cada rota, ao ser clicada, deve realizar uma chamada no endpoint de list, passando a respectiva breed. Quando não especificada, a breed default é chihuahua.

### Página de Foto
- Ao clicar em uma foto, a foto deverá ser ampliada e destacada dos demais itens da página, com um overlay.

## 🔗 Link Projeto
Acesse a página  [clicando aqui](http://dog-breed-renan.surge.sh/).

## ⚙️ Funcionalidades
- Registro para logar
- Verificação de token dentro de paginas com privacidade, sem ele o usuário será direcionado para a página de registro.
- Botões de seleção de raças de cachorros.
- Expansão de fotos ao serem selecionadas.
- Página de erro será apresentada caso seja inserido algum endereço errado após a url base.
- Responsividade para Mobile.
- Paginação

## :books: Bibliotecas utilizadas
- styled-components
- axios
- react-router-dom
- material ui

### Desktop
![image](https://user-images.githubusercontent.com/69327864/184425826-3f9b5e69-1cd4-4f7a-aa45-061b42407af9.png)
![image](https://user-images.githubusercontent.com/69327864/184425874-b2f65ac9-8d33-4011-a5ef-360246970b3e.png)
![image](https://user-images.githubusercontent.com/69327864/184425903-ba37488b-21f1-449d-bae3-721ce2e3a253.png)
![image](https://user-images.githubusercontent.com/69327864/184426007-f70b8be2-d399-4842-9303-c9709faa828a.png)

### Mobile
![image](https://user-images.githubusercontent.com/69327864/184426397-16f3681b-23a8-4aed-bc45-40238bd9fd13.png)
![image](https://user-images.githubusercontent.com/69327864/184426288-d5b01826-ca97-4929-8811-1fb97edd4a2c.png)
![image](https://user-images.githubusercontent.com/69327864/184426327-a5a1eb69-70a7-48e8-b47c-5886f2adb435.png)
![image](https://user-images.githubusercontent.com/69327864/184426351-deae8e0b-0731-4e33-bb00-991b5a4f2b18.png)

## :file_folder: Caso queira executar a aplicação localmente
#### Clone do repositório

```shell
$ git clone Link Repositório
```

#### Instale as dependêmcias

```shell
$ npm install
```

#### Execute a aplicação 

```shell
$ npm start
```

##  :man_technologist: Desenvolvedor
| [<img src="https://avatars.githubusercontent.com/u/69327864?s=96&v=4" width=115><br><sub>Renan Alencar</sub>](https://github.com/Renan-Ma)
| :---: | 
