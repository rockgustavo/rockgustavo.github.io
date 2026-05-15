const portfolioSkills = {
  "Linguagens de Programação": [
    { name: "Java", label: "Java", docKey: "java" },
    { name: "JavaScript", label: "JavaScript", docKey: "javascript" },
    { name: "TypeScript", label: "TypeScript", docKey: "typescript" },
    { name: "SQL", label: "SQL / PL-SQL", docKey: "sql" }
  ],

  "Bancos de Dados": [
    {
      name: "SGBDs Relacionais", ionIcon: "server-outline", children: [
        "MySQL", "Oracle", "PostgreSQL"
      ]
    },
    {
      name: "Práticas", ionIcon: "analytics-outline", children: [
        "Índices e Performance", "Modelagem Relacional", "Normalização", "Otimização de Queries"
      ]
    }
  ],

  "Frameworks & Back-end": [
    {
      name: "Spring Framework", icon: "spring.svg", children: [
        "Spring Boot", "Spring Cloud", "Spring Data JPA", "Spring MVC", "Spring Security"
      ]
    },
    { name: "Hibernate / JPA", icon: "hibernate.svg", docKey: "hibernate" },
    {
      name: "Jakarta EE", icon: "jakartaee.svg", children: [
        "EJB", "JDBC", "JSF"
      ]
    },
    {
      name: "Testes", ionIcon: "flask-outline", children: [
        "JUnit", "Mockito"
      ]
    }
  ],

  "Frameworks & Front-end": [
    { name: "React", icon: "react.svg", label: "React — Hooks, Context, Router", docKey: "react" },
    { name: "Angular", icon: "angular.svg", label: "Angular 19", docKey: "angular" },
    {
      name: "Bibliotecas de UI", ionIcon: "color-palette-outline", children: [
        "Bootstrap", "PrimeFaces", "Tailwind CSS"
      ]
    },
    {
      name: "Fundamentos Web", ionIcon: "code-slash-outline", children: [
        "CSS3", "HTML5", "SPA"
      ]
    }
  ],

  "Arquiteturas & Padrões": [
    {
      name: "Arquiteturas", ionIcon: "layers-outline", children: [
        "Arquitetura Hexagonal", "Clean Architecture", "Microsserviços", "MVC", "SPA"
      ]
    },
    {
      name: "Boas Práticas", ionIcon: "ribbon-outline", children: [
        "BDD", "Clean Code", "SOLID", "TDD"
      ]
    }
  ],

  "Mensageria & Servidores": [
    {
      name: "Mensageria", icon: "rabbitmq.svg", children: [
        "RabbitMQ (AMQP)", "REST APIs"
      ]
    },
    {
      name: "Servidores de Aplicação", ionIcon: "server-outline", children: [
        "Apache HTTP Server", "JBoss EAP", "WildFly"
      ]
    }
  ],

  "Autenticação & Segurança": [
    {
      name: "Keycloak", icon: "keycloak.svg", children: [
        "OAuth2", "OpenID Connect", "SSO"
      ]
    },
    {
      name: "Spring Security", icon: "springsecurity.svg", children: [
        "JWT", "Role-based Access Control"
      ]
    }
  ],

  "Cloud & DevOps": [
    {
      name: "Cloud Providers", ionIcon: "cloud-outline", children: [
        "AWS", "Azure", "Firebase", "Google Cloud Platform (GCP)"
      ]
    },
    {
      name: "Containers", icon: "docker.svg", children: [
        "Docker", "Kubernetes"
      ]
    },
    {
      name: "Versionamento", icon: "git.svg", children: [
        "Bitbucket", "Git", "GitHub"
      ]
    },
    {
      name: "CI/CD", ionIcon: "git-branch-outline", children: [
        "Azure DevOps", "GitHub Actions", "Pipelines"
      ]
    }
  ],

  "Ferramentas & Metodologias": [
    {
      name: "Gestão Ágil", icon: "kanban.svg", children: [
        "Scrum", "Kanban", "Jira", "Trello"
      ]
    },
    {
      name: "Qualidade de Código", icon: "sonarqube.svg", children: [
        "Code Review", "Pair Programming", "SonarQube"
      ]
    },
    {
      name: "Documentação & Design", icon: "swagger.svg", children: [
        "Figma", "Swagger/OpenAPI", "UML"
      ]
    },
    {
      name: "Colaboração", icon: "slack.svg", children: [
        "Google Workspace", "Microsoft Teams", "Slack"
      ]
    },
    {
      name: "Relatórios", icon: "jasperreports.svg", children: [
        "JasperReports"
      ]
    }
  ]
};

const skillDocImages = {
  java: './img_logos/java.svg',
  javascript: './img_logos/javascript.svg',
  typescript: './img_logos/typescript.svg',
  sql: './img_logos/sql.svg',
  react: './img_logos/react.svg',
  angular: './img_logos/angular.svg',
  hibernate: './img_logos/hibernate.svg',
  jakartaee: './img_logos/jakartaee.svg'
};

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

const fullWidthCats = new Set(["Cloud & DevOps", "Arquiteturas & Padrões", "Ferramentas & Metodologias"]);

function t(key) {
  const lang = window.currentLang || 'pt';
  const dict = window.translations && window.translations[lang];
  return (dict && dict[key] !== undefined) ? dict[key] : key;
}

function groupIconHtml(item) {
  if (item.icon) return `<span class="group-icon-wrap"><img class="group-icon" src="./img_logos/${item.icon}" alt=""></span>`;
  if (item.ionIcon) return `<span class="group-icon-wrap"><ion-icon class="group-icon-ion" name="${item.ionIcon}"></ion-icon></span>`;
  return `<span class="group-icon-wrap"><ion-icon class="group-icon-ion" name="ellipse-outline"></ion-icon></span>`;
}

function childHtml(childName) {
  const icon = childIcons[childName]
    ? `<img class="child-icon" src="./img_logos/${childIcons[childName]}" alt="">`
    : '';
  return `<button class="skill-child-item" data-childname="${childName}">${icon}<span>${t(childName)}</span></button>`;
}

function buildSkillsGrid() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = '';
  let groupIdx = 0;

  for (const [catName, items] of Object.entries(portfolioSkills)) {
    const card = document.createElement('div');
    card.className = fullWidthCats.has(catName) ? 'skill-category full' : 'skill-category';

    let inner = `<p class="category-title">${t(catName)}</p>`;

    if (!items.some(i => i.children || i.ionIcon)) {
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
              <span class="group-label">${t(item.name)}</span>
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
              <span class="group-label">${t(item.label || item.name)}</span>
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

buildSkillsGrid();

document.getElementById('skills-grid').addEventListener('click', e => {
  const header = e.target.closest('.skill-group-header');
  if (!header) return;

  if (header.classList.contains('expandable')) {
    const children = document.getElementById(header.dataset.target);
    const open = header.getAttribute('aria-expanded') === 'true';
    header.setAttribute('aria-expanded', String(!open));
    children.classList.toggle('open', !open);
  } else if (header.classList.contains('clickable') && header.dataset.key) {
    openModal(header.dataset.key);
  }
});

document.getElementById('skills-grid').addEventListener('click', e => {
  const btn = e.target.closest('.skill-child-item[data-childname]');
  if (!btn) return;
  openChildModal(btn.dataset.childname);
});

document.addEventListener('click', e => {
  const item = e.target.closest('.skill-item[data-key]');
  if (item) openModal(item.dataset.key);
});

const overlay = document.getElementById('skill-modal');
const closeBtn = document.getElementById('modal-close-btn');
const modalIcon = document.getElementById('modal-icon');
const modalName = document.getElementById('modal-name');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');

function openModal(key) {
  const lang = window.currentLang || 'pt';
  const docs = window.translations && window.translations[lang] && window.translations[lang].skillDocs;
  const data = docs && docs[key];
  if (!data) return;
  modalIcon.src = skillDocImages[key] || '';
  modalIcon.alt = data.name;
  modalName.textContent = data.name;
  modalDesc.textContent = data.desc;
  modalLink.href = data.url;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openChildModal(childName) {
  const lang = window.currentLang || 'pt';
  const meta = window.translations && window.translations[lang] && window.translations[lang].childMeta;
  const data = meta && meta[childName];
  if (!data) return;
  const iconFile = childIcons[childName];
  const iconSrc = iconFile ? `./img_logos/${iconFile}` : '';
  modalIcon.src = iconSrc;
  modalIcon.alt = t(childName);
  modalIcon.style.display = iconSrc ? '' : 'none';
  modalName.textContent = t(childName);
  modalDesc.textContent = data.desc;
  modalLink.href = data.url;
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

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeIcon.setAttribute('name', dark ? 'sunny-outline' : 'moon-outline');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
  applyTheme(document.documentElement.getAttribute('data-theme') !== 'dark');
});

(function initTheme() {
  if (localStorage.getItem('theme') === 'dark') applyTheme(true);
})();
