lista de npms usadas no projeto

bcrypt@5.1.1
dotenv@16.4.5
express@4.19.2
mysql2@3.10.0
sequelize@6.37.3

bcrypt: É uma biblioteca para hashing de senhas, usado para armazenar senhas de forma segura em bancos de dados.

dotenv: Facilita o carregamento de variáveis de ambiente de arquivos .env em projetos Node.js, útil para configurar diferentes ambientes de desenvolvimento.

express: Um popular framework web para Node.js que simplifica o desenvolvimento de aplicativos da web, fornecendo uma camada de abstração sobre o servidor HTTP do Node.js.

mysql2: Um cliente MySQL para Node.js que oferece uma interface assíncrona para interagir com bancos de dados MySQL, suportando consultas parametrizadas, transações e streaming de resultados.

sequelize: Um ORM (Object-Relational Mapping) para Node.js que simplifica a interação com bancos de dados relacionais, fornecendo uma maneira de definir modelos de dados, consultas de banco de dados e relacionamentos usando JavaScript.



observações: o banco de dados não ira fucionar se não tiver o arquivo .env com as configurações do banco de dados e o mysql(ou outro banco de dados) instalado.

exemplo de arquivo .env:

DB_NAME=fashine   (nome do banco de dados)
DB_USER=guizo  (nome do usuário)
DB_PWS=Fashine!123  (senha do banco de dados)
DB_HOST=localhost   (host do banco de dados)
DB_PORT=3306   (Porta do banco de dados)
DB_DIALECT=mysql   ( Dialeto do banco de dados)
NODE_ENV=development   (Ambiente de desenvolvimento)

