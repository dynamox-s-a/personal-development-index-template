# _[Lecture 01 - NestJS and Prisma Fundamentals](https://www.youtube.com/watch?v=qAbluRQ6uf0&t=4032s)_


### _[1 - NextJS](https://docs.nestjs.com/)_
- Microserviços -> aplicação dividida em pequenas aplicações que funcionam independente uma da outra. Em teoria em uma aplicação que tenha 4 microserviços, se derrubarmos 3, o que restou dentro do teu contexto é para estar funcionando. 

- Microserviços trabalha com duplicidade de dados, pois um serviço manda uma mensagem (kafka e afins) e se for interessante a outro microserviço ele irá "ouvir" e registrar aquela informação em seu db

- Nest é um framework opinado, que ja vem com uma estrutura prévia de arquivos, Nest tem libs já integradas. Diferente do Express por exemplo que somos livres pra criar os arquivos como bem entendermos.

<details>
  <summary>  Nest Trabalha com decorators </summary>

  - Um decorator é uma função que é usada para modificar ou estender a funcionalidade de uma classe, método, propriedade ou parâmetro em tempo de execução. Os decoradores são usados para anotar ou adicionar metadados a esses elementos.
  - Os decoradores são definidos usando a sintaxe `@nomeDoDecorador`, onde `nomeDoDecorador` é o nome da função decoradora. Eles são colocados diretamente acima do elemento que está sendo decorado, como uma classe ou um método, e são executados quando esse elemento é criado ou executado.
  - Exemplo de uso de decorator em um método do NestJS:
  ```typescript
  import { Get, Controller } from '@nestjs/common';

  @Controller('users') // a rota do controller seria /users
  export class UsersController {
    @Get(':id') // a rota do método seria /users/:id
    getUserById(@Param('id') id: string) {
      // implementation here
    }
  }
  ```
  - Nesse exemplo, o decorator `@Get(':id')` é usado para indicar que o método `getUserById()` responde a solicitações HTTP GET para a rota /users/:id. O decorator `@Param('id')` é usado para indicar que o parâmetro id do método é extraído do parâmetro de rota com o mesmo nome.

  - Em resumo, os decoradores são uma parte importante da linguagem TypeScript e do framework NestJS, permitindo que você modifique e estenda a funcionalidade de suas classes, métodos, propriedades e parâmetros de maneira fácil e flexível.
</details>

- Controller no NestJS é uma classe que é responsável por lidar com as requisições HTTP. Ele é responsável por receber a requisição, processar os dados e retornar uma resposta. Ele também fica responsavel por definir as rotas da aplicação.

- Services é uma classe genérica que pode ser usada para abstrair a lógica de negócios da aplicação. Ele pode ser usado para lidar com a lógica de negócios, como a lógica de autenticação, a lógica de validação de dados, a lógica de acesso ao banco de dados, etc. 
  - Ela é uma classe genérica no NestJS que pode ser usada controller e também por outros services.

- NestJS trabalha com inversão de dependência do SOLID
  - Para criar uma classe que que irá ser injetada em outro lugar, é necessário usar o decorator `@Injectable()`. Esse decorator é usado para indicar que a classe pode ser injetada em outros lugares.

- Para validação de dados foi usado as seguintes libs do NestJS:
  - `class-validator` -> para validação de dados
  - `class-transformer` -> para validação de dados

    - Para o nest saber que tem que validar os dados, é necessario usar o método `app.useGlobalPipes(new ValidationPipe())` no arquivo `main.ts` do projeto NestJS. Esse método é responsável por validar os dados de acordo com as regras definidas.
#### 1.1 - Como criar um projeto NestJS:

1 -  Se você não tem o NestJS instalado globalmente, instale-o com o comando:
```bash
npm i -g @nestjs/cli
```
2 - Crie um novo projeto com o comando:
```bash
nest new <nome.do.projeto>
```

### _[2 - Prisma](https://www.prisma.io/docs)_

- Prisma é um ORM (Object Relational Mapper) que permite que você trabalhe com um banco de dados relacional usando um modelo de dados definido em um arquivo `.prisma` e um cliente de banco de dados gerado automaticamente para o seu projeto. O Prisma é um ORM que funciona com qualquer banco de dados relacional, como MySQL, PostgreSQL, SQLite e SQL Server.
- Para definir PK no prisma se usa o `@id` e para definir FK se usa o `@relation`

#### 2.1 - Como criar um projeto Prisma:

1 - Instale o Prisma CLI como dependência de desenvolvimento:
```bash
npm i -D prisma
```

2 - Intale o Prisma Client como dependencia de produção:
```bash
npm i @prisma/client
```

3 - Inicialize o Prisma:
```bash
npx prisma init --datasource-provider SQLite // inicializa o prisma com o banco de dados SQLite. 
// Foi usado o SQLite no Ignite Lab por motivos de simplicidade
```

4 - Para de fato criar as tabelas no banco de dados, é necessário rodar o comando:
```bash
npx prisma migrate dev
```

5 - Para visualizar o banco de dados, podemos usar o seguinte comando:
```bash
npx prisma studio // irá abrir em seu browser
```