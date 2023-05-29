## [LIVRO] Testes Funcionais de Software

Autor: Leonardo Molinari

Ano: 2008

Aqui será listado trechos interessantes/importantes do livro, separado por partes igual está no livro, para manter um padrão e com isso caso necessário consultar o livro com mais assertiviade.

##

# Parte 1 - Visão Geral

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



# Visão de Qualidade de Software

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

# Planejamento de Testes

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

- Definição de escopo: define o que se deve testar em nível macro
- Identificação de requisitos e casos de teste: identificação dos requisitos de teste de forma hierárquica e descritiva, de maneira que possamos entendê-lo. Identificação dos casos de teste que abranjam os requerimentos de teste em detalhes, incluindo aí os passos de execução dos testes
- Identificação das prioridades: o que se deve testar e qual a ordem
- Definição da estratégia: identificação das técnicas de teste que serão utilizadas em quais requisitos
- Identificação de recursos: quem fará o que e o que será utilizado (software, etc.)
- Criação de Schedule: elaboração de um cronograma de testes
- Geração de documento de plano de teste: geração a documentação formal e revisada, com as devidas análises do planejamento de teste;
- Atualização constante do plano de testes: aqui o plano de teste será atualizado com os resultados finais de cada teste e com os defeito encontrados

#### 5 - Modelos e Padrões Internacionais Específicos de Planos de Teste: Visão Global

Existem diversos padrões específicos de elaboração e uso do plano de testes. Os principais são:

- PMI / PMBOK: não possui um padrão formal, mas os testes são vistos como uma etapa do projeto.
- Normas IEEE (Institute of Electrical and Eletronics Engineers): em termos oficiais, pode-se dizer que são padrões estabelecidos pelo Software Engineering Standards Comittee(SESC). O objetivo básico é ser ponto de apoio para o desenvolvimento de diversas atividades industriais, no caso, a industria de desenvolvimento de software. O SESC sugere que essas normas sejam um guia para as definições dos processos envolvidos em detalhe. Para testes, o padrão mais importante é o IEEE 829.
- Padrão QAI (Quality Assurance Institute): é um instituto internacional de certificações e padrões em qualidade de software. Tem uma proposta de padronização própria no que se refere a plano de testes.
- ABNT NBR 12207: é o único padrão nacional existente de testes de software no que se refera à estrutura do processo. Porém, em termos práticos, não é muito seguida. Ela é uma nacionalização das normas IEEE/ISO 12207.

##### 5.1 - Modelos e Padrões Internacionais de Planos de Teste: Normais e Padrões IEEE.

##### 5.1.2 - IEEE Std 1012 - 1998

Foi criada em 1986, definindo o conteúdo para Software Verification and Validation Plan (SVVP), o plano de verificação e validação de software.

Esse documento/padrão foi revisao em 1998, tornando-se a IEEE Std 1012-1998, passando a definir agora a verificação e validação (V&V) do pocesso em termos de atividades específicas e tarefas relacionadas.

O propósito desse padrão é:

- Estabelecer um framework comum para o processo de validação e verificação, incluindo atividades e tarefas dentro de todo o ciclo de desenvolvimento de software. Incluindo: aquisição, fornecimento, desenvolvimento, operação e manutenção do processo.
- Definir as tarefas para o processo de V&V
- Definir requisitos de entrada e saída para o processo de V&V
- Definir o conteúdo do Plano de V&V de um software

É importante lembrar que a IEEE Std 1012-1998 define de fato o que é necessário para um processo de verificação e validação de um software.

##### 5.1.3 - IEEE Std 829 - 1998

Descreve os documentos básicos dque podem ser associados a um processo de testes de software. Em outras palavas, define propósito, linhas gerais e conteúdo de cada documento base de testes.

Os documentos definidos como base nesta norma são: Test Planning, Test Especification e Test Reporting, podendo ser subdivididos em outros documentos. Podem ser aplicados totalmente ou parcialamente, não sendo, portanto, obrigatório o uso de todos os documentos.

É importante lembrar que essa normal não aborda metodologias, técnicas, facilidades ou ferramentas e nem tampouco especifica toda a documentação necessária a ser usada no desenvolvimento ou outros artefatos que possam vir a ser necessários
Este é de fato o padrão mais importante de testes usado hoje. É simples e pratico.

Podemos ver a norma IEEE 829 sob um aspecto mais prático e mais simples:

- 1 - Preparação para o teste
  - 1.1 - Plano de teste: mostra o que precisa ser feito e padronizado, fontes de testes, o tempo alocado para teste, riscos e seus envolvimentos. Em termos formais, o plano é composto pela estrutura:
    - Test Plan Identifier
    - References
    - Introduction
    - Test Items
    - Software Risk Issues
    - Features to be testes
    - Features not to be testes
    - Approach
    - Item Pass/Fail Criteria
    - Suspension Criteria and Resumption Requirements
    - Test Deliverables
    - Remaining Test Tasks
    - Environmental Needs
    - Staffing and Training Needs
    - Responsabilities
    - Schedule
    - Planning RIsks and COntingencies
    - Approvals
    - Glossary

  - Especificação de projeto de teste: detalha o que precisa ser testado em função dos documentos e informações passados para teste como requisitos, especificações e recomendações de teste.

  - Especificação de casos de teste: criação e detalhamento dos casos de testes, indicando valores, dados utilizados, qais saódas esperadas para cada caso de teste e quais passos de execução de cada caso de teste.

  - Especificação de procedimentos de teste: deeriva dos Casos de Testes e do Projeto de Teste indicando como vou testar o que planejei em detalhe, e o que precisa testar em termos de ambientes e recursos. 
  
  - Relatório de encaminhamento de item de teste: indica itens que foram entregues para teste ( osalvos de teste) e o que cada um é de fato, indicando recomendações e orientações para se iniciar de fato os testes.

- 2 - Resultados de teste
  - Diário de testes (registro ou log): é o log de teste em detalhe, resultados esperados e os resultados encontrados, evidencias do registro de execução de testes e resultados de fato encontrados.
  - Relatório de incidentes de teste: indica as incidências e evidências de falhas e problemas encontrados nos testes. Surge quando o teste "falha" e defeitos são registrados. Evidências da existência do erro, tais como logs, imagens da tela, etc., são elementos complementares e importantes.
  - Relátorio resumo (sumário) de teste: aqui será informado tudo o que for pertinente ao teste em termos sumários para que se tenha uma visão do que de importante e vital foi detectado nos testes, independente se os testes foram aprovados ou não, e se terão de ser refeitos devido a problemas ou defeitos encontrados.

# Gerenciamento de Defeitos
#### 1 - Pontos Vitais no Gerenciamento de Defeitos.
São três pontos vitais que devemos sempre considerar ao lidar com o gerenciamento de defeitos:

  - A existência de defeitos depende das pessoas informarem os defeitos encontrados. se ninguém informa o defeito, ele nunca será corrigido. Se ele não é informado, como podemos saber se o mesmo defeito não aparecerá novamente?
  - O processo de gerenciamento de defeitos deve ser claro e simplas para entendimento de todos. Se você não entende como o processo funciona, o defeito, ao ser informado, se perderá no esquecimento entre tantos outros. 
  - Teste que na essência não descobre bugs (falhas) ou defeitos deve sempre ser reavaliado com atenção. "De um momento para outro os bugs da aplicação somem?"

# Parte 2 - Trabalhando com Testes Funcionais

Ignorar testes funcionais é ignorar o negócio da sua empresa.

Ignorar o negócio da sua empresa é ignorar a sua sobrevivência no mundo corporativo.

Testar funcionalmente não é apenas testar o negõcio suportado por algum sistema, mas ter a adequação e o nivel da qualidade associado a aplicação em si.

#### 1 - Importância da lógica em qualidade e testes
Num processo você define: fases/etapas, responsabilidades, papeis, ações permitidas e não permitidas, produtos de entrada e saída, etc. Definir um processo é um trabalho puro e simples de LÓGICA.

Em qualidade de software usamos lógica de forma indireta (ou subjetiva) em:
 - Levantamento e mapeamento de requisitos
 - Definição de cenários de testes e de casos de testes
 - Definição de processos que suportam as gerências de requisitos, testes e gerencia de configuração
 - Definição das ações dos itens de configuração suportados por um objeto.

# Como Escrever Requisitos e Casos de Teste

#### 1 - Visão Inicial 
Conceitos básicos em testes funcionais:
  - Planejamento de teste: É o processo de planejamento de teste em si, definido no modelo de teste.
  - Plano de teste: É o fruto do planejamento em si de um teste.
  - Requisito de teste: É o que se deseja testar, sendo o objetivo em si do teste, podendo ser desdobrado em mais de um objetivo e subobjetivos.
  - Caso de teste: São as situações de um teste em si, em nível detalhado, podendo abranger um ou mais requisitos de teste
  - Procedimento de teste: É o conjunto de ações (ou passos) para se realizar um teste.
  - Script de teste: É um procedimentode teste implementado através de uma ferramenta de automaçã de testes. É ma linguagem que foi gravada em um arquivo com as ações para repetição do teste pela ferramenta de automação. Pode ser um script tradicional, onde o resultado é uma linguagem proprietária do fabricante ou uma mais usada pelo mercado, que contém estruturas tradicionais de programção (ex: if/esle, while, do, etc.) ou pode ser um script visual que é construido sobre rotinas predefinidas de ações no qual o usuário interage de forma visual, tal como objetos gravados em forma de árvore
  - Ponto de verificação: É um teste ou uma verificação definida em um procedimento de teste ou em um script de teste.
  - Execução de teste: É a execução manual ou atomatizada de um teste
  - Resultado de teste: É o resultado de um teste, manual ou automatizado. O Teste pode "passar" ou "falhar". Como um script ou procedimento pode conter mais de um ponto de verificação, podemos concluir que, se um "ponto" falhar, o script falhou, porém isto pode nao ser uma regra verdadeira, pois o analista de testé é quem vai indicar se realmente o teste falhou ou não. O contrário também pode acontecer, onde, se um ponto de verificação não falhou, nao significa que este tenha passado.

É importante lembrar que os conceitos citados possuem, na pratica, "relacionamentos" entre si, de modo que o entendimento de um conceito complementa o de outro. Como por exemplo:
  - Um requisito pode conter ( ou se relacionar) a um ou mais casos de teste
  - Um caso de teste pode pertencer (ouse relacionar) a um ou maisrequisitos
  - Um procedimento ou um script podem conter (ou se relacionar) a um ou mais casos de teste
  - Um caso de teste pode estar contido (ou se relacionar) em um ou mais procedimentos ou script
  - Um passo de teste pertence exclusivamente a um ( e somente um) procedimento de teste ou a um caso de teste
  - Um ponto de verificação pode pertencer exclusivamente a um procedimento de teeste ou a um script (não faz sentido um ponto de verificação existir sozinho e sem dependencias)

#### 2 - Como levantar e escrever casos de testes
Existem três grandes caminhos quando lidamos com a criação de casos de testes (na prática, fazemos os dois primeiros caminhos durante a elaboração dos casos de testes, pois ambos se complementam):

  - Primeiro Caminho (partindo de requisitos): Levantar os casos de teste a partir dos requisitos, sejam eles fortes ou fracos. Temos três grupos de caos de testes que precisam ser levantados. 
    - Cenários de teste no caminho principal: representa o grupo de casos de testes envolvidos nas situações mais normais ou comuns de uso do sistema-alvo de teste. Faz-se aqui referencia aos principais requisitos de teste ou caminho bṕasico de um caso de uso (UML). Numa visão mais simples poderia ser os testes "do que o usuário normalmente usa".
    - Cenários de teste no caminho alternativo: Representam os testes das variações dos caminhos básicos ou principais sem fugir dos possiveis fluxos de execução da aplicação. Seriam também os fluxos alternativos outestes de requisitos de menor importância.
    - Cenários de teste de exceção: Representam testes de situações de possiveis problemas ou exceções, que impedem ou atrapalham o funcionamento da aplicação. Testes de cenários de exceção representam também testes de situações que impedem ou atrapalham o fluxo normal de uso da aplicação

  - Segundo Caminho (utilizando técnicas de caixa-preta): Como o foco aqui é teste funcional, entra-se então nas técnicas específicas de testes funcionais, em técnicas de caixa preta, para que se elaborem mais casos de testes. Fazemos o uso então de testes de valor limite e de outras técnicas. As técnicas de de testes de caixa-branca não serão abordadas aqui, pois o seu foco é a estrutura

  - Terceiro Caminho (técnicas gerais): Levantar os casos de teste com foco na execução de objetivos específicos, tais como a forma de manipulação de situações criadas no primeiro e segundo caminho. Sendo as mais usadas; 
    -  Testes de regressão:  tratam de executar testes da versão anterior, na nova versão de um aplicativo de modo a se certificar que  que está na aplicação continue certo.
    - Error Handling: Erros introduzidos de forma intencional no teste, de modo a testar o comportamento da aplicaçãoo. Parece com os testes em cenários de exceção, mas este aqui é muito detalhado e menos ligado às funcionalidades da aplicação.
    - Paralelismo: Ocorre quando a aplicação antiga e a nova estão presentes ao mesmo tempo, de modo que, os resultados de testes em ambos sao comparados.
    - Recuperação: teste feito para se verificar se o que está no backup do banco de dados pode ser recuperado e utilizado corretamente. A recuperação pode ser parcial ou total.

Em termos formais, a estrutura de Casos de Testes é composta pelas seguintes informações:
  - Identificação do caso de teste: É um número ou identificador unico do caso de teste
  - Descrição: Sumária e detalhada
  - Passos de execução do teste: Pode estar contido ou não na descrição detalhada. Mas é preferivel ter essa informação de forma ordenada e simples, para que quem for executar saiba passo a passo como executar
  - Resultado esperado e critério de aceitação: Pode ser geral e para cada passo
  - Dados: Informações utilizadas no teste
  - Pré-condições: Para execução do caso de teste (caso existam)
  - Pós-condições: Para execução do caso de teste (caso existam)
  - Resltado de execução: Indicaria se o teste passou ou não e porque. Pode estar em nivel de passo
  - Ambiente: Informações e configurações de ambiente necessário para teste
  - Tipo de implementação do caso de teste: se ele é automatizado ou manual
  - Informações de prazo de execução esperado: cronograma, datas, etc.
  - Informações de execução realizada: Quem realizou a execução, em que data, etc.
  - Status: É a posição no ciclo de vida de um caso de teste
  - Relacionamentos e dependencias: Relacionamentos e dependencias para com requisitos e casos de testes.