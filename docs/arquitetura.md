# Arquitetura — Portal ESG TEGRAM

## 1. Visão geral

O projeto será desenvolvido utilizando React e Vite, seguindo uma
arquitetura modular baseada em componentes reutilizáveis.

A aplicação deverá separar:

- páginas;
- componentes;
- layouts;
- dados;
- serviços;
- estilos;
- assets.

O objetivo é manter o projeto organizado e preparado para expansão
futura.

---

## 2. Estrutura

```text
src/
├── assets/
├── components/
├── layouts/
├── pages/
├── services/
├── data/
├── styles/
├── App.jsx
└── main.jsx
```

---

## 3. Pages

A pasta `pages/` deverá conter as páginas principais da aplicação.

Estrutura inicial:

```text
pages/
├── Home/
│   └── Home.jsx
└── ESG/
    └── ESG.jsx
```

As páginas deverão representar apenas as rotas funcionais definidas
no projeto.

---

## 4. Components

A pasta `components/` deverá conter componentes reutilizáveis.

Exemplos:

```text
components/
├── Header/
├── Footer/
├── Hero/
├── Button/
├── Section/
├── Card/
└── ...
```

A estrutura definitiva deverá ser definida após a análise da página
de referência.

Não criar componentes artificialmente apenas para aumentar a
quantidade de arquivos.

---

## 5. Layouts

A pasta `layouts/` deverá conter estruturas compartilhadas entre
páginas.

Por exemplo:

```text
layouts/
└── MainLayout/
```

Caso Header e Footer sejam utilizados em ambas as páginas, deverão
ser componentes reutilizáveis dentro do layout principal.

---

## 6. Data

A pasta `data/` deverá armazenar informações estáticas utilizadas pela
interface.

Exemplo:

```text
data/
├── esg.js
├── iniciativas.js
└── indicadores.js
```

Dados de apresentação não deverão ser espalhados diretamente por
diversos componentes quando puderem ser organizados como estruturas
de dados.

---

## 7. Services

A pasta `services/` deverá ser utilizada para futuras integrações com
APIs ou fontes externas.

Na primeira versão, não haverá necessidade de integração com sistemas
corporativos ou APIs reais.

Portanto, a pasta poderá permanecer vazia ou conter apenas estruturas
necessárias à arquitetura inicial.

---

## 8. Styles

A aplicação deverá utilizar **CSS Modules** para os estilos específicos
de componentes e páginas.

Cada componente ou página que possuir estilos próprios deverá,
preferencialmente, manter seu arquivo CSS junto ao componente.

Exemplo:

```text
components/
├── Header/
│   ├── Header.jsx
│   └── Header.module.css
│
└── Hero/
    ├── Hero.jsx
    └── Hero.module.css
```

Estilos verdadeiramente globais deverão permanecer em `styles/`.

Exemplo:

```text
styles/
├── global.css
└── variables.css
```

### Regras

- Utilizar arquivos `.module.css` para estilos específicos.
- Evitar estilos globais desnecessários.
- Evitar conflitos de nomes entre componentes.
- Não utilizar bibliotecas adicionais de estilização sem necessidade.
- Manter os estilos próximos aos componentes aos quais pertencem.
- Variáveis visuais compartilhadas poderão ser definidas em `variables.css`.

## 9. Assets

A pasta `assets/` deverá armazenar imagens e outros recursos utilizados
pela aplicação.

Os assets da aplicação deverão ser separados das imagens utilizadas
exclusivamente como referência documental.

Referências visuais:

```text
docs/referencias/
```

Assets utilizados pela aplicação:

```text
src/assets/
```

---

## 10. Rotas

A aplicação deverá possuir inicialmente apenas:

```text
/       → Home
/esg    → Portal ESG
```

A implementação das rotas deverá ser simples e compatível com a
estrutura do projeto.

Nenhuma rota adicional deverá ser criada sem alteração explícita dos
requisitos.

---

## 11. Princípios de arquitetura

O desenvolvimento deverá seguir os seguintes princípios:

### Reutilização

Componentes que possuam comportamento ou estrutura compartilhada
deverão ser reutilizados.

### Separação de responsabilidades

A interface, os dados e futuras integrações deverão permanecer
separados.

### Simplicidade

A arquitetura deverá ser proporcional ao tamanho e ao estágio do
projeto.

Não adicionar bibliotecas ou abstrações sem necessidade.

### Expansibilidade

A estrutura deverá permitir a expansão futura do Portal ESG sem exigir
uma reorganização completa da aplicação.

### Desenvolvimento incremental

Novas estruturas deverão ser adicionadas conforme a necessidade real
do projeto.

---

## 12. Uso de IA

O GitHub Copilot poderá auxiliar na criação e alteração da estrutura.

Entretanto, antes de criar uma estrutura significativa, o agente
deverá:

1. consultar a documentação do projeto;
2. verificar a arquitetura existente;
3. identificar componentes reutilizáveis;
4. evitar duplicação;
5. explicar alterações arquiteturais relevantes.

A IA não deverá criar páginas, funcionalidades ou dependências fora
do escopo definido nos documentos do projeto.
