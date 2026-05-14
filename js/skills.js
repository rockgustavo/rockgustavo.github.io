// ── Portfolio Data ────────────────────────────────────────────

const portfolioSkills = {
  "Linguagens de Programação": [
    { name: "Java",       label: "Java 8–17",       docKey: "java" },
    { name: "JavaScript", label: "JavaScript ES6+", docKey: "javascript" },
    { name: "TypeScript", label: "TypeScript",       docKey: "typescript" },
    { name: "SQL",        label: "SQL / PL-SQL",     docKey: "sql" }
  ],

  "Frameworks & Back-end": [
    { name: "Spring Framework", icon: "spring.svg", children: [
      "Spring Boot", "Spring Cloud", "Spring Data JPA", "Spring MVC", "Spring Security"
    ]},
    { name: "Hibernate / JPA", icon: "hibernate.svg", docKey: "hibernate" },
    { name: "Jakarta EE", icon: "jakartaee.svg", children: [
      "EJB", "JDBC", "JSF"
    ]},
    { name: "Testes", ionIcon: "flask-outline", children: [
      "JUnit", "Mockito"
    ]}
  ],

  "Frameworks & Front-end": [
    { name: "React",    icon: "react.svg",   label: "React — Hooks, Context, Router", docKey: "react" },
    { name: "Angular",  icon: "angular.svg", label: "Angular 19",                    docKey: "angular" },
    { name: "Bibliotecas de UI", ionIcon: "color-palette-outline", children: [
      "Bootstrap", "PrimeFaces", "Tailwind CSS"
    ]},
    { name: "Fundamentos Web", ionIcon: "code-slash-outline", children: [
      "CSS3", "HTML5", "SPA"
    ]}
  ],

  "Bancos de Dados": [
    { name: "SGBDs Relacionais", ionIcon: "server-outline", children: [
      "MySQL", "Oracle", "PostgreSQL"
    ]},
    { name: "Práticas", ionIcon: "analytics-outline", children: [
      "Índices e Performance", "Modelagem Relacional", "Normalização", "Otimização de Queries"
    ]}
  ],

  "Cloud & DevOps": [
    { name: "Cloud Providers", ionIcon: "cloud-outline", children: [
      "AWS", "Azure", "Firebase", "Google Cloud Platform (GCP)"
    ]},
    { name: "Containers", icon: "docker.svg", children: [
      "Docker", "Kubernetes"
    ]},
    { name: "Versionamento", icon: "git.svg", children: [
      "Bitbucket", "Git", "GitHub"
    ]},
    { name: "CI/CD", ionIcon: "git-branch-outline", children: [
      "Azure DevOps", "GitHub Actions", "Pipelines"
    ]}
  ],

  "Mensageria & Servidores": [
    { name: "Mensageria", icon: "rabbitmq.svg", children: [
      "RabbitMQ (AMQP)", "REST APIs"
    ]},
    { name: "Servidores de Aplicação", ionIcon: "server-outline", children: [
      "Apache HTTP Server", "JBoss EAP", "WildFly"
    ]}
  ],

  "Autenticação & Segurança": [
    { name: "Keycloak", icon: "keycloak.svg", children: [
      "OAuth2", "OpenID Connect", "SSO"
    ]},
    { name: "Spring Security", icon: "springsecurity.svg", children: [
      "JWT", "Role-based Access Control"
    ]}
  ],

  "Arquiteturas & Padrões": [
    { name: "Arquiteturas", ionIcon: "layers-outline", children: [
      "Arquitetura Hexagonal", "Clean Architecture", "Microsserviços", "MVC", "SPA"
    ]},
    { name: "Boas Práticas", ionIcon: "ribbon-outline", children: [
      "BDD", "Clean Code", "SOLID", "TDD"
    ]}
  ],

  "Ferramentas & Metodologias": [
    { name: "Gestão Ágil", icon: "kanban.svg", children: [
      "Jira", "Kanban", "Scrum", "Trello"
    ]},
    { name: "Qualidade de Código", icon: "sonarqube.svg", children: [
      "Code Review", "Pair Programming", "SonarQube"
    ]},
    { name: "Documentação & Design", icon: "swagger.svg", children: [
      "Figma", "Swagger/OpenAPI", "UML"
    ]},
    { name: "Colaboração", icon: "slack.svg", children: [
      "Google Workspace", "Microsoft Teams", "Slack"
    ]},
    { name: "Relatórios", icon: "jasperreports.svg", children: [
      "JasperReports"
    ]}
  ]
};

// ── Docs: standalone items (icon-grid) ───────────────────────

const skillDocs = {
  java: {
    name: "Java 8–17", img: "./img_logos/java.svg",
    desc: "Linguagem orientada a objetos, fortemente tipada e multiplataforma, base do ecossistema enterprise. Versões 8–17 introduziram lambdas, Streams API, records, sealed classes e pattern matching.",
    url:  "https://docs.oracle.com/en/java/javase/17/"
  },
  javascript: {
    name: "JavaScript ES6+", img: "./img_logos/javascript.svg",
    desc: "Linguagem leve e interpretada essencial para o desenvolvimento web. Suporta programação orientada a objetos, funcional e assíncrona (Promises/async-await). Roda no navegador e no servidor (Node.js).",
    url:  "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
  },
  typescript: {
    name: "TypeScript", img: "./img_logos/typescript.svg",
    desc: "Superset tipado do JavaScript desenvolvido pela Microsoft. Adiciona tipagem estática, interfaces, enums e genéricos, tornando projetos de grande escala mais seguros e manuteníveis.",
    url:  "https://www.typescriptlang.org/docs/"
  },
  sql: {
    name: "SQL / PL-SQL", img: "./img_logos/sql.svg",
    desc: "SQL é a linguagem padrão para bancos relacionais. PL/SQL é a extensão procedural da Oracle, usada em stored procedures, functions, triggers e pacotes corporativos.",
    url:  "https://docs.oracle.com/en/database/oracle/oracle-database/21/lnpls/"
  },
  react: {
    name: "React", img: "./img_logos/react.svg",
    desc: "Biblioteca JavaScript para construção de interfaces baseadas em componentes reutilizáveis. Criada pelo Meta, usa Virtual DOM e o ecossistema inclui React Router, Context API, hooks e Server Components.",
    url:  "https://react.dev/"
  },
  angular: {
    name: "Angular 19", img: "./img_logos/angular.svg",
    desc: "Framework completo para SPAs desenvolvido pelo Google. Inclui injeção de dependência, roteamento, formulários reativos e suporte nativo a TypeScript. A versão 19 traz Signals e control flow nativo.",
    url:  "https://angular.dev/"
  },
  hibernate: {
    name: "Hibernate / JPA", img: "./img_logos/hibernate.svg",
    desc: "Principal implementação da especificação JPA para mapeamento objeto-relacional (ORM) em Java. Abstrai o acesso ao banco, suporta lazy/eager loading, cache de segundo nível e gerenciamento de transações.",
    url:  "https://hibernate.org/orm/documentation/"
  },
  jakartaee: {
    name: "Jakarta EE", img: "./img_logos/jakartaee.svg",
    desc: "Plataforma enterprise Java mantida pela Eclipse Foundation (sucessora do Java EE). Agrupa especificações como JSF, EJB, JPA, JAX-RS, CDI e JDBC para desenvolvimento de aplicações corporativas robustas.",
    url:  "https://jakarta.ee/learn/docs/"
  }
};

// ── Docs: accordion children ──────────────────────────────────

const childMeta = {
  "Spring Boot": {
    icon: "springboot.svg",
    desc: "Framework que simplifica a criação de aplicações Java standalone com configuração mínima (convention over configuration). Ideal para microsserviços e APIs REST com servidor embutido Tomcat/Netty.",
    url:  "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/"
  },
  "Spring Security": {
    icon: "springsecurity.svg",
    desc: "Framework de autenticação e autorização para aplicações Spring. Suporta OAuth2, JWT, LDAP e integração com provedores de identidade como Keycloak para controle de acesso granular.",
    url:  "https://docs.spring.io/spring-security/reference/"
  },
  "Spring Data JPA": {
    icon: "spring.svg",
    desc: "Módulo do Spring que simplifica o acesso a dados com JPA. Gera implementações de repositórios automaticamente a partir de interfaces, eliminando o boilerplate de persistência.",
    url:  "https://docs.spring.io/spring-data/jpa/reference/"
  },
  "Spring MVC": {
    icon: "spring.svg",
    desc: "Framework web MVC do Spring para APIs REST e aplicações web. Baseado no padrão Model-View-Controller com anotações como @RestController, @RequestMapping e @PathVariable.",
    url:  "https://docs.spring.io/spring-framework/reference/web/webmvc.html"
  },
  "Spring Cloud": {
    icon: "spring.svg",
    desc: "Conjunto de ferramentas para padrões de sistemas distribuídos: service discovery (Eureka), API Gateway, circuit breaker (Resilience4j), config server e load balancing.",
    url:  "https://spring.io/projects/spring-cloud"
  },
  "JSF": {
    icon: "jakartaee.svg",
    desc: "JavaServer Faces — framework MVC orientado a componentes para UIs web em Java EE/Jakarta EE. Base do ecossistema PrimeFaces, com ciclo de vida gerenciado pelo container.",
    url:  "https://jakarta.ee/specifications/faces/"
  },
  "EJB": {
    icon: "jakartaee.svg",
    desc: "Enterprise JavaBeans — componentes do lado servidor para lógica de negócios transacional. Suporta beans stateless, stateful e message-driven, gerenciados pelo container Jakarta EE.",
    url:  "https://jakarta.ee/specifications/enterprise-beans/"
  },
  "JDBC": {
    icon: "jakartaee.svg",
    desc: "Java Database Connectivity — API padrão do Java para conexão com bancos relacionais via drivers. Base para frameworks ORM como Hibernate e Spring Data JDBC.",
    url:  "https://docs.oracle.com/en/java/javase/17/docs/api/java.sql/module-summary.html"
  },
  "JUnit": {
    icon: "junit5.svg",
    desc: "Framework de testes unitários mais utilizado no Java. A versão 5 (Jupiter) traz anotações expressivas, extensões, testes parametrizados e suporte nativo ao Java 8+.",
    url:  "https://junit.org/junit5/docs/current/user-guide/"
  },
  "Mockito": {
    icon: "mockito.svg",
    desc: "Framework de mock para testes em Java. Cria objetos simulados (mocks/stubs/spies) e verifica interações, isolando dependências externas e permitindo testes de unidade precisos.",
    url:  "https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html"
  },
  "PrimeFaces": {
    icon: "primefaces.svg",
    desc: "Biblioteca de componentes ricos para JSF com mais de 100 componentes prontos: tabelas dinâmicas, gráficos, calendários, dialogs e upload de arquivos, com temas personalizáveis.",
    url:  "https://primefaces.org/documentation/"
  },
  "Tailwind CSS": {
    icon: "tailwindcss.svg",
    desc: "Framework CSS utility-first para estilização diretamente no HTML com classes utilitárias. Elimina CSS customizado excessivo, é altamente configurável e tem suporte nativo a dark mode.",
    url:  "https://tailwindcss.com/docs/"
  },
  "Bootstrap": {
    icon: "bootstrap.svg",
    desc: "Framework CSS responsivo com sistema de grid, componentes prontos (navbars, modais, cards, alertas) e utilitários de layout para criação rápida de interfaces consistentes.",
    url:  "https://getbootstrap.com/docs/"
  },
  "HTML5": {
    icon: "html5.svg",
    desc: "Quinta versão da linguagem de marcação da web. Introduziu semântica (article, section, header), APIs nativas como Canvas, WebStorage e Geolocation, e melhor suporte a acessibilidade.",
    url:  "https://developer.mozilla.org/pt-BR/docs/Web/HTML"
  },
  "CSS3": {
    icon: "css3.svg",
    desc: "Terceira versão das Folhas de Estilo em Cascata. Trouxe flexbox, grid, animações, transições, variáveis CSS e media queries para estilização de interfaces modernas e responsivas.",
    url:  "https://developer.mozilla.org/pt-BR/docs/Web/CSS"
  },
  "SPA": {
    icon: "spa.svg",
    desc: "Single Page Application — padrão arquitetural onde uma única página HTML carrega a aplicação inteira, atualizando dinamicamente o conteúdo via JavaScript sem recarregar a página.",
    url:  "https://developer.mozilla.org/pt-BR/docs/Glossary/SPA"
  },
  "Oracle": {
    icon: "oracle.svg",
    desc: "SGBD relacional líder corporativo com alta escalabilidade, suporte a PL/SQL e recursos avançados como RAC (alta disponibilidade), Data Guard (disaster recovery) e In-Memory.",
    url:  "https://docs.oracle.com/en/database/oracle/oracle-database/21/"
  },
  "PostgreSQL": {
    icon: "postgresql.svg",
    desc: "SGBD relacional open-source mais avançado, com suporte a tipos de dados avançados (JSON, arrays, hstore), extensões como PostGIS e excelente conformidade com SQL padrão.",
    url:  "https://www.postgresql.org/docs/"
  },
  "MySQL": {
    icon: "mysql.svg",
    desc: "Banco de dados relacional open-source mais utilizado no mundo, amplamente adotado em aplicações web com boa performance, suporte a transactions (InnoDB) e replicação.",
    url:  "https://dev.mysql.com/doc/"
  },
  "Modelagem Relacional": {
    icon: "modelagem.svg",
    desc: "Estruturação de dados em tabelas com relacionamentos definidos por chaves primárias e estrangeiras. A base de qualquer banco relacional, garantindo integridade referencial dos dados.",
    url:  "https://learn.microsoft.com/pt-br/office/troubleshoot/access/database-normalization-description"
  },
  "Normalização": {
    icon: "normalizacao.svg",
    desc: "Processo de organização de tabelas para reduzir redundância e dependências. Envolve as formas normais (1FN, 2FN, 3FN, BCNF) para garantir consistência e eficiência do banco.",
    url:  "https://learn.microsoft.com/pt-br/office/troubleshoot/access/database-normalization-description"
  },
  "Otimização de Queries": {
    icon: "otimizacao.svg",
    desc: "Técnicas para melhorar a performance de consultas SQL: uso estratégico de índices, EXPLAIN PLAN, reescrita de queries complexas, evitar N+1 e ajuste de parâmetros do banco.",
    url:  "https://www.postgresql.org/docs/current/performance-tips.html"
  },
  "Índices e Performance": {
    icon: "indices.svg",
    desc: "Estruturas que aceleram buscas em bancos de dados. Tipos: B-tree, Hash, GIN, BRIN. Uso estratégico evita full table scans e reduz drasticamente o tempo de resposta de queries.",
    url:  "https://use-the-index-luke.com/"
  },
  "AWS": {
    icon: "aws.svg",
    desc: "Maior plataforma de cloud do mundo com +200 serviços: EC2 (computação), S3 (armazenamento), RDS (banco gerenciado), Lambda (serverless), EKS (Kubernetes gerenciado) e muito mais.",
    url:  "https://docs.aws.amazon.com/"
  },
  "Azure": {
    icon: "azure.svg",
    desc: "Plataforma de cloud da Microsoft com forte integração ao ecossistema .NET e Microsoft 365. Oferece AKS, Azure Functions, Azure DevOps, Active Directory e pipelines de CI/CD.",
    url:  "https://learn.microsoft.com/pt-br/azure/"
  },
  "Google Cloud Platform (GCP)": {
    icon: "gcp.svg",
    desc: "Plataforma de cloud do Google focada em dados e IA. Destaques: BigQuery, Cloud Run, GKE (Kubernetes), Cloud Functions, Vertex AI e integração nativa com Firebase.",
    url:  "https://cloud.google.com/docs"
  },
  "Firebase": {
    icon: "firebase.svg",
    desc: "Plataforma do Google para desenvolvimento de apps com banco em tempo real (Firestore), autenticação integrada, hosting, cloud functions, storage e analytics.",
    url:  "https://firebase.google.com/docs"
  },
  "Docker": {
    icon: "docker.svg",
    desc: "Plataforma de containerização que empacota aplicações e dependências em containers portáveis. Garante consistência entre ambientes dev, staging e produção, facilitando deploys.",
    url:  "https://docs.docker.com/"
  },
  "Kubernetes": {
    icon: "kubernetes.svg",
    desc: "Plataforma open-source de orquestração de containers desenvolvida pelo Google. Automatiza deploy, escalonamento horizontal e gerenciamento de aplicações em clusters.",
    url:  "https://kubernetes.io/docs/home/"
  },
  "Git": {
    icon: "git.svg",
    desc: "Sistema de controle de versão distribuído mais utilizado no mundo. Permite rastrear mudanças no código, criar branches, mesclar alterações e colaborar eficientemente em equipe.",
    url:  "https://git-scm.com/doc"
  },
  "GitHub": {
    icon: "github.svg",
    desc: "Maior plataforma de hospedagem de código baseada em Git. Oferece repositórios, pull requests, code review colaborativo, GitHub Actions para CI/CD e GitHub Packages.",
    url:  "https://docs.github.com/pt"
  },
  "Bitbucket": {
    icon: "bitbucket.svg",
    desc: "Plataforma de hospedagem de código da Atlassian com integração nativa ao Jira e Confluence. Suporta Git, pipelines de CI/CD integrados e controle de acesso granular por times.",
    url:  "https://support.atlassian.com/bitbucket-cloud/"
  },
  "GitHub Actions": {
    icon: "githubactions.svg",
    desc: "Plataforma de CI/CD integrada ao GitHub. Automatiza workflows de build, testes e deploy com arquivos YAML no repositório, e oferece marketplace de actions reutilizáveis.",
    url:  "https://docs.github.com/pt/actions"
  },
  "Azure DevOps": {
    icon: "azuredevops.svg",
    desc: "Suite de DevOps da Microsoft com Boards (gestão ágil), Repos (Git), Pipelines (CI/CD), Test Plans e Artifacts. Forte integração com Azure e ecossistema Microsoft.",
    url:  "https://learn.microsoft.com/pt-br/azure/devops/"
  },
  "Pipelines": {
    icon: "pipelines.svg",
    desc: "Pipelines de CI/CD automatizam o fluxo completo de build, testes e deploy de software. Garantem entrega contínua de qualidade, integrando ferramentas como GitHub Actions e Azure DevOps.",
    url:  "https://docs.github.com/pt/actions/writing-workflows"
  },
  "RabbitMQ (AMQP)": {
    icon: "rabbitmq.svg",
    desc: "Broker de mensagens open-source que implementa o protocolo AMQP. Permite comunicação assíncrona entre microsserviços com filas, exchanges, roteamento e garantia de entrega de mensagens.",
    url:  "https://www.rabbitmq.com/documentation.html"
  },
  "REST APIs": {
    icon: "rest.svg",
    desc: "Arquitetura de APIs baseada nos princípios REST: recursos identificados por URLs, verbos HTTP (GET/POST/PUT/DELETE), stateless e respostas em JSON/XML. Padrão dominante para integração de sistemas.",
    url:  "https://restfulapi.net/"
  },
  "Apache HTTP Server": {
    icon: "apache.svg",
    desc: "Servidor web open-source mais utilizado do mundo. Suporta módulos como mod_proxy (proxy reverso), mod_ssl (HTTPS), mod_rewrite (URLs amigáveis) e virtual hosts para múltiplos domínios.",
    url:  "https://httpd.apache.org/docs/"
  },
  "WildFly": {
    icon: "wildfly.svg",
    desc: "Servidor de aplicações Jakarta EE open-source da Red Hat. Suporta EJB, JPA, JAX-RS e CDI. JBoss EAP é a versão enterprise certificada com suporte comercial para produção.",
    url:  "https://docs.wildfly.org/"
  },
  "JBoss EAP": {
    icon: "jboss.svg",
    desc: "Red Hat JBoss Enterprise Application Platform — versão enterprise do WildFly com suporte Red Hat, patches de segurança, certificações e recursos adicionais para ambientes de produção críticos.",
    url:  "https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/"
  },
  "OAuth2": {
    icon: "oauth2.svg",
    desc: "Protocolo de autorização aberto (RFC 6749) que permite acesso delegado a recursos sem compartilhar credenciais. Padrão para autenticação moderna em APIs REST e Single Page Applications.",
    url:  "https://oauth.net/2/"
  },
  "OpenID Connect": {
    icon: "openid.svg",
    desc: "Camada de identidade construída sobre OAuth2 que adiciona autenticação federada. Retorna informações do usuário via ID Token no formato JWT, habilitando SSO entre sistemas.",
    url:  "https://openid.net/connect/"
  },
  "SSO": {
    icon: "sso.svg",
    desc: "Single Sign-On — o usuário autentica uma única vez e acessa múltiplos sistemas sem novos logins. Implementado via Keycloak com OpenID Connect para centralizar identidade corporativa.",
    url:  "https://www.keycloak.org/docs/latest/server_admin/#sso-protocols"
  },
  "JWT": {
    icon: "jwt.svg",
    desc: "JSON Web Token (RFC 7519) — padrão para transmissão segura de informações entre partes como JSON assinado digitalmente. Amplamente usado para autenticação stateless em APIs RESTful.",
    url:  "https://jwt.io/introduction/"
  },
  "Role-based Access Control": {
    icon: "rbac.svg",
    desc: "Controle de acesso baseado em papéis (RBAC): usuários têm permissões atribuídas via roles (ex: ADMIN, USER). Implementado com @PreAuthorize e @Secured no Spring Security.",
    url:  "https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html"
  },
  "Microsserviços": {
    icon: "microsservicos.svg",
    desc: "Estilo arquitetural onde a aplicação é decomposta em serviços pequenos, independentes e deployáveis separadamente. Cada serviço tem sua responsabilidade, banco de dados e ciclo de deploy próprio.",
    url:  "https://microservices.io/"
  },
  "Clean Architecture": {
    icon: "cleanarchitecture.svg",
    desc: "Arquitetura proposta por Robert C. Martin que organiza o código em camadas concêntricas (Entities, Use Cases, Adapters, Frameworks), garantindo independência de frameworks, UI e banco de dados.",
    url:  "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
  },
  "Arquitetura Hexagonal": {
    icon: "hexagonal.svg",
    desc: "Também chamada Ports & Adapters, isola o domínio de suas dependências externas (UI, BD, APIs) por interfaces bem definidas. Facilita troca de implementações e testes de unidade.",
    url:  "https://alistair.cockburn.us/hexagonal-architecture/"
  },
  "MVC": {
    icon: "mvc.svg",
    desc: "Model-View-Controller — padrão que separa a aplicação em três camadas: Model (dados e regras), View (interface) e Controller (fluxo de controle). Base de frameworks como Spring MVC e Angular.",
    url:  "https://developer.mozilla.org/en-US/docs/Glossary/MVC"
  },
  "SOLID": {
    icon: "solid.svg",
    desc: "Cinco princípios de design OO: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation e Dependency Inversion. Guia para código coeso, extensível e testável.",
    url:  "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design"
  },
  "Clean Code": {
    icon: "cleancode.svg",
    desc: "Conjunto de práticas para código legível e manutenível, popularizado por Robert C. Martin. Foca em nomes significativos, funções pequenas com responsabilidade única e ausência de duplicação.",
    url:  "https://www.oreilly.com/library/view/clean-code-a/9780136083238/"
  },
  "TDD": {
    icon: "tdd.svg",
    desc: "Test-Driven Development — metodologia onde o teste é escrito antes do código de produção. Ciclo Red (teste falha) → Green (código mínimo passa) → Refactor (melhoria sem quebrar testes).",
    url:  "https://martinfowler.com/bliki/TestDrivenDevelopment.html"
  },
  "BDD": {
    icon: "bdd.svg",
    desc: "Behavior-Driven Development — extensão do TDD que descreve comportamentos do sistema em linguagem natural (Gherkin: Given/When/Then). Aproxima desenvolvedores, QA e stakeholders por meio de especificações executáveis.",
    url:  "https://cucumber.io/docs/bdd/"
  },
  "Scrum": {
    icon: "scrum.svg",
    desc: "Framework ágil iterativo e incremental com papéis (Product Owner, Scrum Master, Dev Team), cerimônias (Planning, Daily, Review, Retrospectiva) e artefatos (Product Backlog, Sprint Backlog).",
    url:  "https://www.scrum.org/resources/what-is-scrum"
  },
  "Kanban": {
    icon: "kanban.svg",
    desc: "Método ágil de gestão visual do fluxo de trabalho originado na Toyota. Usa quadros com colunas (To Do, In Progress, Done) e limita o WIP (Work in Progress) para maximizar throughput.",
    url:  "https://www.atlassian.com/br/agile/kanban"
  },
  "Jira": {
    icon: "jira.svg",
    desc: "Plataforma de gestão de projetos ágeis da Atlassian. Suporta Scrum e Kanban, sprints, backlogs, épicos, relatórios de velocity e integração com CI/CD e repositórios de código.",
    url:  "https://support.atlassian.com/jira-software-cloud/"
  },
  "Trello": {
    icon: "trello.svg",
    desc: "Ferramenta visual de gestão de tarefas da Atlassian, baseada em Kanban. Organiza projetos em boards, listas e cards com automações Butler, power-ups e colaboração em tempo real.",
    url:  "https://support.atlassian.com/trello/"
  },
  "SonarQube": {
    icon: "sonarqube.svg",
    desc: "Plataforma de inspeção contínua de qualidade de código. Detecta bugs, vulnerabilidades, code smells e calcula dívida técnica. Integra ao CI/CD com Quality Gates automáticos.",
    url:  "https://docs.sonarqube.org/latest/"
  },
  "Code Review": {
    icon: "codereview.svg",
    desc: "Revisão de código por pares antes do merge. Melhora qualidade, dissemina conhecimento na equipe, identifica bugs precocemente e garante aderência a padrões de codificação.",
    url:  "https://google.github.io/eng-practices/review/"
  },
  "Pair Programming": {
    icon: "pairprogramming.svg",
    desc: "Prática XP onde dois desenvolvedores trabalham juntos: o 'driver' escreve o código e o 'navigator' revisa em tempo real. Reduz erros, acelera aprendizado e melhora a qualidade do código.",
    url:  "https://martinfowler.com/articles/on-pair-programming.html"
  },
  "Swagger/OpenAPI": {
    icon: "swagger.svg",
    desc: "Ferramentas para design, documentação e teste de APIs REST. A especificação OpenAPI descreve APIs de forma padronizada, gerando documentação interativa e clients automaticamente.",
    url:  "https://swagger.io/docs/"
  },
  "Figma": {
    icon: "figma.svg",
    desc: "Ferramenta de design colaborativo em nuvem para criação de interfaces, protótipos e sistemas de design. Permite colaboração em tempo real entre designers e desenvolvedores.",
    url:  "https://help.figma.com/"
  },
  "UML": {
    icon: "uml.svg",
    desc: "Unified Modeling Language — linguagem de modelagem padrão para visualizar e documentar sistemas de software com diagramas de classe, sequência, casos de uso, componentes e deploy.",
    url:  "https://www.uml.org/"
  },
  "Slack": {
    icon: "slack.svg",
    desc: "Plataforma de comunicação para equipes com canais organizados, mensagens diretas, videochamadas e integração com GitHub, Jira, CI/CD e centenas de ferramentas de desenvolvimento.",
    url:  "https://slack.com/intl/pt-br/help"
  },
  "Microsoft Teams": {
    icon: "microsoftteams.svg",
    desc: "Plataforma de colaboração da Microsoft integrada ao Office 365. Oferece chat, videochamadas, canais por projeto e integração nativa com SharePoint, OneDrive e Azure DevOps.",
    url:  "https://learn.microsoft.com/pt-br/microsoftteams/"
  },
  "Google Workspace": {
    icon: "google.svg",
    desc: "Suite de produtividade e colaboração do Google com Gmail, Drive, Docs, Sheets, Meet e Calendar. Amplamente utilizada por equipes de desenvolvimento para comunicação e documentação.",
    url:  "https://workspace.google.com/"
  },
  "JasperReports": {
    icon: "jasperreports.svg",
    desc: "Biblioteca Java open-source da TIBCO para geração de relatórios em PDF, Excel, HTML e outros formatos a partir de templates JRXML. Integra com Spring e qualquer fonte de dados.",
    url:  "https://community.jaspersoft.com/documentation/"
  }
};

// ── Icon maps ─────────────────────────────────────────────────

const childIcons = {
  "Spring Boot": "springboot.svg", "Spring Security": "springsecurity.svg",
  "Spring Data JPA": "spring.svg", "Spring MVC": "spring.svg", "Spring Cloud": "spring.svg",
  "JSF": "jakartaee.svg", "EJB": "jakartaee.svg", "JDBC": "jakartaee.svg",
  "JUnit": "junit5.svg", "Mockito": "mockito.svg",
  "PrimeFaces": "primefaces.svg", "Tailwind CSS": "tailwindcss.svg", "Bootstrap": "bootstrap.svg",
  "HTML5": "html5.svg", "CSS3": "css3.svg", "SPA": "spa.svg",
  "Oracle": "oracle.svg", "PostgreSQL": "postgresql.svg", "MySQL": "mysql.svg",
  "Modelagem Relacional": "modelagem.svg", "Normalização": "normalizacao.svg",
  "Otimização de Queries": "otimizacao.svg", "Índices e Performance": "indices.svg",
  "AWS": "aws.svg", "Azure": "azure.svg", "Google Cloud Platform (GCP)": "gcp.svg",
  "Firebase": "firebase.svg", "Docker": "docker.svg", "Kubernetes": "kubernetes.svg",
  "Git": "git.svg", "GitHub": "github.svg", "Bitbucket": "bitbucket.svg",
  "GitHub Actions": "githubactions.svg", "Azure DevOps": "azuredevops.svg",
  "Pipelines": "pipelines.svg",
  "RabbitMQ (AMQP)": "rabbitmq.svg", "REST APIs": "rest.svg",
  "Apache HTTP Server": "apache.svg", "WildFly": "wildfly.svg", "JBoss EAP": "jboss.svg",
  "OAuth2": "oauth2.svg", "OpenID Connect": "openid.svg", "SSO": "sso.svg",
  "JWT": "jwt.svg", "Role-based Access Control": "rbac.svg",
  "Microsserviços": "microsservicos.svg", "Clean Architecture": "cleanarchitecture.svg",
  "Arquitetura Hexagonal": "hexagonal.svg", "MVC": "mvc.svg",
  "SOLID": "solid.svg", "Clean Code": "cleancode.svg", "TDD": "tdd.svg", "BDD": "bdd.svg",
  "Scrum": "scrum.svg", "Kanban": "kanban.svg", "Jira": "jira.svg", "Trello": "trello.svg",
  "SonarQube": "sonarqube.svg", "Code Review": "codereview.svg", "Pair Programming": "pairprogramming.svg",
  "Swagger/OpenAPI": "swagger.svg", "Figma": "figma.svg", "UML": "uml.svg",
  "Slack": "slack.svg", "Microsoft Teams": "microsoftteams.svg",
  "Google Workspace": "google.svg", "JasperReports": "jasperreports.svg"
};

// ── Full-width categories ─────────────────────────────────────

const fullWidthCats = new Set(["Cloud & DevOps", "Arquiteturas & Padrões", "Ferramentas & Metodologias"]);

// ── HTML Builders ─────────────────────────────────────────────

function groupIconHtml(item) {
  if (item.icon)    return `<span class="group-icon-wrap"><img class="group-icon" src="./img_logos/${item.icon}" alt=""></span>`;
  if (item.ionIcon) return `<span class="group-icon-wrap"><ion-icon class="group-icon-ion" name="${item.ionIcon}"></ion-icon></span>`;
  return `<span class="group-icon-wrap"><ion-icon class="group-icon-ion" name="ellipse-outline"></ion-icon></span>`;
}

function childHtml(childName) {
  const icon = childIcons[childName]
    ? `<img class="child-icon" src="./img_logos/${childIcons[childName]}" alt="">`
    : '';
  return `<button class="skill-child-item" data-childname="${childName}">${icon}<span>${childName}</span></button>`;
}

function buildSkillsGrid() {
  const grid = document.getElementById('skills-grid');
  let groupIdx = 0;

  for (const [catName, items] of Object.entries(portfolioSkills)) {
    const card = document.createElement('div');
    card.className = fullWidthCats.has(catName) ? 'skill-category full' : 'skill-category';

    let inner = `<p class="category-title">${catName}</p>`;

    if (!items.some(i => i.children || i.ionIcon)) {
      // Linguagens: icon-card grid
      inner += '<div class="skill-row">';
      for (const item of items) {
        inner += `<div class="skill-item" data-key="${item.docKey}">
          <img src="./img_logos/${item.name.toLowerCase()}.svg" alt="${item.name}">
          <span class="skill-name">${item.label || item.name}</span>
        </div>`;
      }
      inner += '</div>';
    } else {
      inner += '<div class="skill-list">';
      for (const item of items) {
        const gid = `sg-${groupIdx++}`;
        const iconHtml = groupIconHtml(item);

        if (item.children) {
          inner += `<div class="skill-group">
            <div class="skill-group-header expandable" aria-expanded="false" data-target="${gid}">
              ${iconHtml}
              <span class="group-label">${item.name}</span>
              <ion-icon name="chevron-forward-outline" class="chevron"></ion-icon>
            </div>
            <div class="skill-group-children" id="${gid}">
              ${item.children.map(childHtml).join('')}
            </div>
          </div>`;
        } else {
          inner += `<div class="skill-group">
            <div class="skill-group-header clickable" data-key="${item.docKey || ''}">
              ${iconHtml}
              <span class="group-label">${item.label || item.name}</span>
              <ion-icon name="open-outline" class="link-icon"></ion-icon>
            </div>
          </div>`;
        }
      }
      inner += '</div>';
    }

    card.innerHTML = inner;
    grid.appendChild(card);
  }
}

// ── Init grid ─────────────────────────────────────────────────

buildSkillsGrid();

// ── Accordion ─────────────────────────────────────────────────

document.getElementById('skills-grid').addEventListener('click', e => {
  const header = e.target.closest('.skill-group-header');
  if (!header) return;

  if (header.classList.contains('expandable')) {
    const children = document.getElementById(header.dataset.target);
    const open = header.getAttribute('aria-expanded') === 'true';
    header.setAttribute('aria-expanded', String(!open));
    children.classList.toggle('open', !open);
  } else if (header.classList.contains('clickable') && header.dataset.key) {
    openModal(header.dataset.key, null);
  }
});

// Child items → modal
document.getElementById('skills-grid').addEventListener('click', e => {
  const btn = e.target.closest('.skill-child-item[data-childname]');
  if (!btn) return;
  openChildModal(btn.dataset.childname);
});

// Icon-grid items → modal
document.addEventListener('click', e => {
  const item = e.target.closest('.skill-item[data-key]');
  if (item) openModal(item.dataset.key, null);
});

// ── Modal ─────────────────────────────────────────────────────

const overlay   = document.getElementById('skill-modal');
const closeBtn  = document.getElementById('modal-close-btn');
const modalIcon = document.getElementById('modal-icon');
const modalName = document.getElementById('modal-name');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');

function openModal(key) {
  const data = skillDocs[key];
  if (!data) return;
  modalIcon.src          = data.img;
  modalIcon.alt          = data.name;
  modalName.textContent  = data.name;
  modalDesc.textContent  = data.desc;
  modalLink.href         = data.url;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openChildModal(childName) {
  const data = childMeta[childName];
  if (!data) return;
  const iconSrc = data.icon ? `./img_logos/${data.icon}` : '';
  modalIcon.src          = iconSrc;
  modalIcon.alt          = childName;
  modalIcon.style.display = iconSrc ? '' : 'none';
  modalName.textContent  = childName;
  modalDesc.textContent  = data.desc;
  modalLink.href         = data.url;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  modalIcon.style.display = '';
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Dark mode ─────────────────────────────────────────────────

const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = document.getElementById('theme-icon');

function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeIcon.setAttribute('name', dark ? 'sunny-outline' : 'moon-outline');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
  applyTheme(document.documentElement.getAttribute('data-theme') !== 'dark');
});

// Default: always start light; only restore dark if user previously chose it
(function initTheme() {
  if (localStorage.getItem('theme') === 'dark') applyTheme(true);
})();
