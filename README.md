# Título e Imagem de capa

<h1 align="center"> Faxina Facil </h1>

<div style="text-align:center;">
    <img src="https://github.com/Guizo-X/FaxinaFacil/blob/master/assets/Faxina-logo.png" alt="Faxina Facil">
</div>



<p align="center">
<img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>




# Índice 

* [Título e Imagem de capa](#título-e-imagem-de-capa)
* [Instalação](#instalação)
* [Configuração do Banco de Dados](#configuração-do-Banco-de-Dados)
* [Funcionalidades](#funcionalidades)
* [Como Usar](#como-usar)
* [Contribuição](#contribuição)

## Instalação

### Passo 1

Clone este repositório:  https://github.com/Guizo-X/FaxinaFacil.git


### Passo 2

Instale as dependências com npm install:

## bcrypt@5.1.1

bcrypt: É uma biblioteca para hashing de senhas, usado para armazenar senhas de forma segura em bancos de dados

## dotenv@16.4.5

dotenv: Facilita o carregamento de variáveis de ambiente de arquivos .env em projetos Node.js, útil para configurar diferentes ambientes de desenvolvimento.

## express@4.19.2

express: Um popular framework web para Node.js que simplifica o desenvolvimento de aplicativos da web, fornecendo uma camada de abstração sobre o servidor HTTP do Node.js.

## mysql2@3.10.0

mysql2: Um cliente MySQL para Node.js que oferece uma interface assíncrona para interagir com bancos de dados MySQL, suportando consultas parametrizadas, transações e streaming de resultados.

## sequelize@6.37.3

sequelize: Um ORM (Object-Relational Mapping) para Node.js que simplifica a interação com bancos de dados relacionais, fornecendo uma maneira de definir modelos de dados, consultas de banco de dados e relacionamentos usando JavaScript.


## Configuração do Banco de Dados

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```plaintext
DB_NAME=fashine           # Nome do banco de dados
DB_USER=guizo             # Nome de usuário do banco de dados
DB_PWS=Fashine!123        # Senha do banco de dados
DB_HOST=localhost         # Host do banco de dados
DB_PORT=3306              # Porta do banco de dados
DB_DIALECT=mysql          # Dialeto do banco de dados
NODE_ENV=development      # Ambiente de desenvolvimento
```

# Funcionalidades

- **Autenticação de Usuários:** Utiliza o pacote `bcrypt` para armazenar senhas de forma segura.
- **Ambiente de Desenvolvimento:** Configuração de variáveis de ambiente usando `dotenv`.
- **Framework Web:** Utiliza o `express` para facilitar o desenvolvimento de aplicativos da web.
- **Interação com Banco de Dados:** Usa o `mysql2` como cliente MySQL e o `sequelize` como ORM para interagir com o banco de dados.

# Como Usar

Execute `node app.js` para iniciar o servidor. A aplicação estará disponível em [http://localhost:3000](http://localhost:3000). no futuro né

# Contribuição
Guizo-X
Mrpopy
ReiKiller


