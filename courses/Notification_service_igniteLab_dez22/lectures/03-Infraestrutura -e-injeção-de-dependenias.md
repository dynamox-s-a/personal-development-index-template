# _[Lecture 03 - Infrastructure and dependency injection](https://www.youtube.com/watch?v=XK_auW3iuXg&t=2s)_

### Typescript path configuration.
  - Um jeito de configurar o path do typescript para que não seja necessário ficar fazendo caminhos relativos.

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@app/*": [ "./src/app/*"],
      "@helpers/*": [ "./src/helpers/*"],
      "@infra/*": [ "./src/infra/*"],
      "@test/*": [ "./test/*"],
    }
  }
}
```

### Mappers
  - A mesma entidade pode ter diferentes representações, por exemplo, uma entidade User pode ter uma representação para o banco de dados, outra para o front-end e outra para o back-end.
  - O mapper é uma classe que recebe uma entidade e retorna uma representação dela.
  - Pode ser usado em várias camadas da aplicação

### Para que o jest entenda os imports do typescript
  - Instalar o ts-jest
  - Adicionar no tsconfig.json `resolveJsonModule: true`
  - Importar o compilerOptions do tsconfig.json no jest.config.ts
  - Importar Config do Jest no jest.config.ts
  - Adicionar moduleNameMapper nas configs do jest.config.ts

```typescript
  const config: Config = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    testRegex: '.*\\.spec\\.ts$',
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    collectCoverageFrom: ['**/*.(t|j)s'],
    coverageDirectory: '../coverage',
    testEnvironment: 'node',
  };
```

### Factory Pattern
  - É uma função que cria objetos.
  - É uma função usada para a gente abstrair a criaçao de objetos que são "repetidos" que a gente faz a criação desse objeto muitas vezes enviando parametros parecidos em vários lugares da aplicação.
  - Padronizar a nomenclatura das funções de crianção de objetos começando com `make` e o nome do objeto que está sendo criado.