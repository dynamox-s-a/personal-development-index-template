## [LIVRO] Testes Funcionais de Software

Autor: Leonardo Molinari

Ano: 2008

##

## Parte 1 - Visão Geral

### 1 - Estado da Arte em Qualidade de Software

A Garantia de Qualidade (Quality Assurance, ou QA) no ambiente de desenvolvimento de software é um conjunto de processos e práticas destinados a garantir que um produto de software atenda aos requisitos e padrões de qualidade definidos.

A QA abrange tanto a verificação (confirmação de que o produto atende às especificações) quanto a validação (confirmação de que o produto atende às necessidades do usuário).

QA está no “antes”, “durante, e “depois”, abrangendo assim todo o ciclo de desenvolvimento.

Elementos que compõem e sustentam SQA:

- Gerência de Configuração: trata da gerência e controle e registro dos artefatos que compõem o software, incluindo todo o histórico da mudança do software em si.

- Gerência de Requisitos: trata da gerência, controle e registro das necessidades do sistema (requisitos) e dos usuários em todos os níveis, incluindo a rastreabilidade das necessidades de mudança.

- Testes: trata da gerência, planejamento, controle e execução dos Testes em todos os níveis, de modo a garantir a implementação (projeto, desenvolvimento e entrega) das necessidades especificadas

Maiores problemas em desenvolvimento de software:

- Complexidade do mundo real

- QA não conhecem as reais necessidades dos usuários

- Tempo inadequado de teste

- Falta de comprometimento corporativo

##

### 2 - Automação de Testes de Software

Automação de testes não substitui uma equipe de testes

- Sempre será necessário alguém para pensar nos testes e analisar seus resultados. Muitas vezes os testes testam um ou dois comportamentos do usuário, ou apenas os fluxos mais críticos, fazendo assim com que possíveis bugs ou irregularidades passam batidos nos testes. Por isso é necessária uma pessoa para testar a aplicação como se fosse o usuário.

Nem tudo pode ser testado mesmo usando automação

- Em alguns casos se faz necessário trabalhar e aceitar os riscos. Um exemplo típico é que as vezes é impossível reproduzir o ambiente de produção no ambiente de testes.

Nem tudo que pode ser testado, precisará automatizar

- Automatizar por automatizar não faz sentido. Se um determinado teste é um muito simples de se realizar e o mesmo não será reutilizado no futuro, então não faz sentido investir tempo na automação. Automatize o que realmente precisa ser automatizado.

Os testes automatizados precisam ser constantemente atualizados

- A atualização se dá por duas razões chaves. A primeira é por conta dos sistemas testados que são atualizados e modificados. A segunda razão, seria a necessidade de atualização tecnológica da ferramenta de automação.

Inicialmente a automação custa tempo e dinheiro

- Automação é um investimento que será pago na “economia” de problemas. Insto é, ao serem encontrados mais defeitos e falhas antes do aplicativo estar em produção, mais barato será o custo pago pela aplicação.

##

## Parte 2 - Visão de Qualidade de Software

### 1 - Testes

#### 1.1 - Principais tipos de testes

Testes de performance

- Tem por objetivo demonstrar se numa carga qualquer de informações o desempenho (tempo) do aplicativo atende as metas desejadas

Testes de usabilidade

- O foco deste tipo de teste é testar a usabilidade de um aplicativo, que é a facilidade de uso que as pessoas podem empregar em uma ferramenta ou um objeto a fim de realizar uma tarefa especifica

Testes de Unidade

- Conhecido também como “teste unitário”. Ele tem como objetivo testar um “pedaço do código” ou uma unidade “lógica” ou “física” do sistema

Testes de Integração

- Visa garantir que um ou mais componentes combinados (ou unidades) funcionam corretamente. Não necessariamente batendo nas apis, geralmente é usado mocks neste tipo de teste.

Testes End to End (E2E)

- Este tipo de teste visa testar a aplicação como um todo, tanto o front quanto o back. Sem o uso de mocks, pois o real objetivo é ver se a aplicação está funcionando corretamente quando integrada seu front e back.

#### 2.2 - Importância Estratégica de Testes Funcionais

Testes funcionais se caracteriza por mostrar se a aplicação funciona ou não em tudo aquilo que ela se propõe a atender em termos de funcionalidades.

O teste funcional é realizado, principalmente, olhando o software apenas através de suas interfaces, testando, portanto, suas funcionalidades. Em linhas gerais, testa as funcionalidades presentes na documentação, verificando se funcionam ou não como especificado.

#### 2.2.1 - Erros Clássicos na Construção de Testes Funcionais

- O que deve ser testado num teste funcional? O erro neste caso é o fato de não se testar aquilo que realmente é necessário. Para efetivamente testarmos, poderíamos ter, por exemplo, um roteiro orientado para os itens ou tipos de objetos de tela que deveríamos testar e o que deveria ser testado para cada objeto.

- A ausência de uma revisão dos testes é algo que não deveria acontecer.

- Ausência de documentação do teste é outro problema. Documentar o teste, seja em nível de requerimento ou de execução de testes, é uma prática que muito contribui para a qualidade dos testes.

#### 3 - Essência de um profissional da área de testes

A essência de um verdadeiro profissional da área de testes reside em, sobretudo, entender e saber de forma clara e respeito dos conceitos básicos em testes. Como planejar um teste funcional se você não souber o que é um teste funcional?

## Parte 3 - Planejamento de Testes

#### 1 - Importância Estratégica do Planejamento de Testes

A essência do planejamento de testes reside em perceber a real importância do desenvolvimento de planos de teste. Vejamos algumas razões que justificam essa importância:

- Preparação: garantir de forma coerente que todos os itens e aspectos necessários para executar um plano de testes estejam considerados
- Comunicação e treinamento: treinar quem precisa realmente apoia (ou realizar) os testes. Se a comunicação for falha, as pessoas que nada têm a ver com os testes acabam envolvidas
- Eficiência: prover um mecanismo que permita perceber de forma clara as ecessidades dos testes e as limitações, com as devidas justificativas. Testar de maneira mais eficiente para que o modo de fazer o teste seja cada vez melhor.
- Prudência legal e bom senso: em muitas empresas existem normal e regras ("quase leis") que precisam ser respeitadas. E mais ainda: em muitos testes que lidam com egras e leis oficiais é necessário que tudo esteja claro e respeitado conforme essas leis. Planejar os testes de forma clara e objetiva permitirá real abrangência e complexidade dos testes.

#### 2 - Principais elementos do planejamento de Testes

- Papéis das pessoas envolvidas nos testes (pode haver uma mesma pessoa executando mais de um papel)
  - Gerente de testes: o gerente do projeto de testes
  - Projetista de testes: é aquele que faz o projeto de teste, elaborando os requerimentos, casos de teste. Também conhecido como analista de testes
  - Desenvolvedor de testes: é a aquela que implementa, programa ou desenvolve os testes.
  - Executor de testes: é aquele que executa os testes
  - Supore de testes: é a pessoa de suporte de testes, que dá, em geral, suporte à ferramenta de automação de testes utilizada

- Materiais ou ferramentas de teste:
  - Aplicação a ser testada
  - Os dados disponibilizados
  - A(s) ferramenta(s) de automação de teste

- Resultados de testes: É odo o histórico, planejamento e execução dos testes
- Plano de teste: documento oficial que contém tudo: quem faz o que, quais requerimentos, quais casos de testes, regras especificas, etc.

#### 3 - Principais Funções de um Plano de Testes
As principais funções são:

- Suportar o desenvolvimento da qualidade dos produtos, de forma sábia, sincronizada com as decisões.
- Descrever e justificar a estratégia de teste para com os requisitos do produto a ser testado
- Suportar o início e a organização do projeto de teste, incluindo aí preparações, pessoal, delegação de responsabilidades, planejamento das tarefas, etc.
- Suportar o gerenciamento diário e a evolução do projeto de teste e da estratégia.
- Suportar a efetiva coordenação, colaboração e outros relacionamentos entre os membros da equipe de teste e o resto do projeot
- Identificar e gerenciar quaisquer riscos ou questões que possam impactar no projeto
- Especificar as entregas do projeto
- Ter as informações históricas do projeto, de forma a suportar a auditria e melhorias para futuros projetos.

#### 4 - Principais etapas de Elaboração de um plano de teste 