# Teste_Node_MongoDB
> Teste de API com Node.js e MongoDB

O projeto é um teste que consiste em implementar um banco de dados que armazene os dados de acesso dos usuários de um suposto sistema e uma API para interação com esses dados.
A API foi desenvolvida utilizando Node.js, enquanto o banco de dados foi criado utilizando MongoDB, mais especificamente o ODM (Object Document Mapper) Mongoose.

## Instalação

Após ter clonado o projeto, basta executar o seguinte código no terminal para a instalação de suas dependências:

```sh
npm install 
```

<h2>Iniciando a aplicação</h2>

Primeiro, é necessário iniciar o back-end do projeto. Para isso, é necessário estar inserido na pasta do projeto, e então executar o seguinte código no terminal:

```sh
npm start 
```
Após a ativação do back-end o terminal exibirá a mensagem _Connected to db_ alertando que a conexão com o banco de dados foi realizado com sucesso.

<h2>Utilização</h2>

Para a aplicação pode ser utilizada com o programa Insomnia.
A base_url que deverá ser usada para a execução das rotas é a _http://localhost:3333/users/_.

<h3>Rota CREATE</h3>

Criar uma nova requisição, do tipo __POST__ e com texto do tipo JSON, listando as informações "name", "userName" e "password" do usuário, conforme imagem abaixo.
Ao clicar em __Send__ o usuário será cadastrado no banco de cados, e terá como retorno as informações cadastradas além do status da operação (ex: __200 OK__).

![image](https://user-images.githubusercontent.com/79873506/129933736-1095c8dc-da02-44db-90fb-046b0e25b342.png)

<h3>READ</h3>

## Obter informações de todos os usuários

Criar uma nova requisição, do tipo __GET__, conforme imagem abaixo.
Ao clicar em __Send__, retornará as informações de todos os usuários cadastrados no banco de dados, além do status da operação (ex: __200 OK__).

![image](https://user-images.githubusercontent.com/79873506/129936154-a4b68aea-69ac-4f3d-83ab-2be616d1027c.png)


## Obter informações de um usuário específico

Criar uma nova requisição, do tipo __GET__, conforme imagem abaixo.
No campo da rota (_http://localhost:3333/users/_) é necessário acrescentar o **_id** do usuário após a última barra da rota. O _id de usuário é um número único que é gerado automaticamente no momento do seu cadastro (ex: 611d35327855c178f014d71a).
Ao clicar em __Send__, retornará as informações do usuário cadastrado no banco de dados que possui tal **_id**, além do status da operação (ex: __200 OK__).
![image](https://user-images.githubusercontent.com/79873506/129936311-a1b80d94-ef4c-48ec-9e5a-78aa80d29a50.png)

<h3>UPDATE</h3>

Criar uma nova requisição, do tipo __PUT__, e com texto do tipo JSON, listando as informações de "name", "userName" e "password" do usuário que você deseja atualizar, conforme imagem abaixo.
No campo da rota (_http://localhost:3333/users/_) é necessário acrescentar o **_id** do usuário que você deseja atualizar, após a última barra da rota. O _id de usuário é um número único que é gerado automaticamente no momento do seu cadastro (ex: 611d35327855c178f014d71a).
Ao clicar em __Send__, retornará as informações atualizadas do usuário cadastrado no banco de dados que possui tal **_id**, além do status da operação (ex: __200 OK__).


![image](https://user-images.githubusercontent.com/79873506/129937070-0829b7ed-6cad-4608-b337-4dc359317b2f.png)

<h3>DELETE</h3>

Criar uma nova requisição, do tipo __DELETE__, conforme imagem abaixo.
No campo da rota (_http://localhost:3333/users/_) é necessário acrescentar o **_id** do usuário que você deseja deletar, após a última barra da rota. O _id de usuário é um número único que é gerado automaticamente no momento do seu cadastro (ex: 611d35327855c178f014d71a).
Ao clicar em __Send__, retornará a mensagem __Usuário deletado com sucesso__ referente à exclusão do usuário que possui tal **_id**, além do status da operação (ex: __200 OK__).

![image](https://user-images.githubusercontent.com/79873506/129937434-54617a9c-5843-447e-9a01-d058959720e7.png)

## Meta

Breno Estrella - [@breno_e](https://twitter.com/breno_e) - brenogbestrella@gmail.com
[https://github.com/brenogbestrella/](https://github.com/brenogbestrella/)
