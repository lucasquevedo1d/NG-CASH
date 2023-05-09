# NG-backend


Somos o app financeiro da Nova Geração! Uma plataforma tecnológica com tudo o que é necessário para dar início à uma vida financeira responsável e controlada. Nosso propósito é fazer com que a GenZ se torne a geração mais independente com relação ao seu dinheiro, estando preparada para enfrentar todo e qualquer desafio que venha a aparecer!
## Aplicação Fullstack utilizando as seguintes tecnologias:
### .Typescript
### .Javascript
### .Node.js
### .Express
### .MySQL
### .Jest
### .Jwt
### .React.js
### .Material-UI
### .Styled-Compnents
### .SweetAlert

## O Projeto contém as seguintes páginas:

### CADASTRO 
O usuário precisa preencher os campos: nome, password
 para realizar o cadastro. É necessário o preenchimento de todos os campos para a finalização da função. Aqui, o id é gerado automático e a senha é criptografada.
<br>






![Captura de Tela (34)](https://user-images.githubusercontent.com/98975326/236948022-63c6ebea-5089-4473-a1f3-1ccdc79dbf1e.png)
<br>


### LOGIN
O usuário precisa preencher os campos nome e senha para realizar o login. a senha informado no momento do login precisa ser o mesmo que foi informado ao realizar o cadastro, caso contrário, não conseguirá logar e deve ter no mínimo 8 caracteres.
<br>




![Captura de Tela (33)](https://user-images.githubusercontent.com/98975326/236948553-b807798c-0c5c-4642-a665-721b8692d08f.png)






### HOME
Pagina mostra o saldo da conta e duas opções uma de ver o extrato das movimentações e outro de realizar transações.

<br>



![Captura de Tela (35)](https://user-images.githubusercontent.com/98975326/236961254-e8ddff91-b1c1-4934-a654-22f07aeda647.png)


### EXTRATO
Pagina mostra todas as transações tanto de entrada quando de saída.



![Captura de Tela (38)](https://user-images.githubusercontent.com/98975326/236961749-772ef469-733f-4c20-b212-3d3ac0a7f5b2.png)

### FAZER TRANSFERÊNCIA
Nessa pagina o usuário precisa passar o nome do usuário onde deseja passar o dinheiro, e o valor em números inteiros, se tiver saldo sufuciente a transação será realizada com suceeso e um alert irá informar isso

![Captura de Tela (39)](https://user-images.githubusercontent.com/98975326/236963358-65df37f2-789f-4a30-ae43-86807b6b83d0.png)

![Captura de Tela (36)](https://user-images.githubusercontent.com/98975326/236963351-1c728bf3-e6f7-41aa-a96c-1c965e3e4ffe.png)


# Como rodar a aplicação:
- Clone o projeto no terminal utilizando o git clone;
- Na pasta do projeto, instale as dependências com o comando npm install;
- Crie um arquivo .env com as configurações do seu banco de dados(preferencialmente MySQL, que foi o banco de dados utilizado no projeto);
- No arquivo .env, deverá ficar dessa forma:

```
DB_HOST = seu_endereço_host
DB_USER = seu_usuário
DB_PASSWORD = sua_senha
DB_SCHEMA = seu_banco_de_dados
JWT_KEY = chave_jwt
```

# Tabelas MySQL
- Tabela **Users10:**
    - id —> *PK* VACHAR
    - username (o @ do usuário) VACHAR
    - password (*hasheada*) VACHAR
    - accountId —> *FK* Accounts[id] VACHAR
- Tabela **Accounts:**
    - id —> *PK* VARCHAR
    - balance INT
- Tabela **Transactions:**
    - id —> *PK* VARCHAR
    - debitedAccountId —> *FK* Accounts[id] VARCHAR
    - creditedAccountId —> *FK* Accounts[id] VARCHAR
    - value INT
    - createdAt VARCHAR


# Back-End
Para rodar o back-end o no terminal o usuário deve entrar no projeto e entrar na página NG-backend1 e executar o comando npm run dev que irá aparecer a seguinte mensagem no terminal: Server is running in http://localhost:3003.

# Front-End
Para rodar o front-end o no terminal o usuário deve entrar no projeto e entrar na página NG-frontend/ng-cash e executar o comando npm run start e irá abrir no navegador o projeto rodando


