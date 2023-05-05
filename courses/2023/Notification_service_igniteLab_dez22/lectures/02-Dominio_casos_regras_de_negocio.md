# _[Lecture 02 - Domains, use cases and business logic](https://www.youtube.com/watch?v=xbky26BIJT0&t=2s)_


##### - Tentar ao máximo usar de desacoplamento de código, para que possa ser reutilizado em outros projetos, e em outras partes mesmo projeto.

##### - Deixar na pasta de `infra` tudo o que é externo a aplicação (banco de dados, serviços externos, etc)

##### - Deixar na pasta de `app` todos os arquivos que sejam independentes de banco de dados, serviços externos, que não tocam a camada externa, etc.

##### - Replace helper que é um Type que recebe uma tipagem original, e uma tipagem de replace, dizendo quais props dessa tipagem original eu gostaria de substituir.

```ts
type ReplaceHelper<T, U> = Omit<T, keyof U> & U;
```

##### - Casos de uso seria a mesma coisa que 'service', é uma questão apenas de nomenclatura. 

##### - Casos de uso são o ponto principal da aplicação, conexão por exempo: camada de persistencia de dados, apis externas, http, etc.

##### Repository Pattern é uma forma de abstrair a conexão com o banco de dados, e assim, caso eu queira trocar o banco de dados, eu não preciso alterar o código, apenas o repository.

  - É uma intermédio entre a camada de aplicação e camada de persistencia de dados.

  - É o repositório que recebe as chamadas do caso de uso, e faz a conexão com o banco de dados.

  - Repositório que define quais metodos que vai ter no nosso caso de uso mas não os implementa, é como se fosse uma interface.

##### In memory database 
  - É um banco de dados que fica na memória, e não é persistente, ou seja, quando eu paro a aplicação, os dados são perdidos.
  - É usado para testes, pois não é necessário ter um banco de dados rodando para testar a aplicação.

##### DTO - Data Transfer Object
  - É um objeto que é usado para transferir dados entre sistemas, ou entre camadas de um sistema.
  - É usado para transferir dados entre a camada de aplicação e a camada de infraestrutura.
  - Referencia objetos que carregam dados e não comportamentos.

##### NestJS trabalha melhor com classes abstratas do que com interfaces, pois as classes abstratas podem ter implementações, e as interfaces não.
