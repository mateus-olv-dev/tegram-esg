# Requisitos do Projeto — Portal ESG TEGRAM

## 1. Objetivo

Definir os requisitos funcionais, visuais e técnicos do protótipo do
Portal ESG TEGRAM.

Este documento também estabelece as limitações de escopo que deverão
ser respeitadas durante o desenvolvimento.

---

## 2. Escopo

O projeto deverá possuir inicialmente apenas duas páginas:

- Home (`/`)
- Portal ESG (`/esg`)

A Home deverá reproduzir visualmente a página inicial atual da TEGRAM.

A página `/esg` será uma nova área pública destinada à apresentação
das iniciativas, compromissos, indicadores e informações ESG da empresa.

---

## 3. Requisitos funcionais

### RF01 — Home

A aplicação deverá disponibilizar uma página inicial na rota `/`.

A página deverá reproduzir, de forma própria, a estrutura visual
principal da Home da TEGRAM utilizada como referência.

### RF02 — Portal ESG

A aplicação deverá disponibilizar uma página ESG na rota `/esg`.

A página deverá apresentar informações relacionadas aos três pilares:

- Meio ambiente;
- Pessoas e comunidades;
- Governança.

### RF03 — Navegação para ESG

O item ESG presente no Header deverá ser funcional e direcionar o
usuário para `/esg`.

### RF04 — Navegação para Home

O logotipo ou elemento equivalente de identificação da TEGRAM deverá
permitir o retorno à Home.

### RF05 — Demais itens do Header

Os demais itens do menu deverão ser apresentados apenas para fins
visuais, reproduzindo a estrutura do site de referência.

Eles não deverão possuir páginas ou rotas funcionais neste protótipo.

---

## 4. Requisitos da Home

A Home deverá contemplar, de acordo com a página de referência:

- Header;
- Navegação;
- Hero;
- Seções de conteúdo;
- Elementos gráficos;
- Botões e chamadas para ação;
- Footer.

A implementação deverá priorizar a fidelidade visual à referência.

---

## 5. Requisitos da Hero

A Hero do site TEGRAM utiliza atualmente um vídeo.

O protótipo **não deverá reproduzir esse vídeo**.

Deverá ser utilizado como imagem de fundo o **frame inicial do vídeo**,
correspondente ao estado visual apresentado imediatamente ao carregar
a página original.

Não deverá ser implementado:

- reprodução de vídeo;
- autoplay;
- loop;
- controles de vídeo;
- animações que simulem o vídeo original.

A composição visual deverá preservar, tanto quanto possível:

- enquadramento;
- composição;
- contraste;
- legibilidade;
- proporção;
- posicionamento dos elementos.

O frame inicial deverá ser armazenado como referência em:

docs/referencias/tegram-hero.png

## 6. Requisitos do Portal ESG

A página ESG deverá apresentar uma estrutura de comunicação pública.

A estrutura inicial deverá contemplar:

### Visão geral

Apresentação do posicionamento ESG da TEGRAM.

### Meio ambiente

Apresentação de ações, iniciativas e informações ambientais.

### Pessoas e comunidades

Apresentação de iniciativas sociais, capacitação, relacionamento com
comunidades e desenvolvimento local.

### Governança

Apresentação de informações relacionadas a conformidade, segurança,
gestão, transparência e melhoria contínua.

### Indicadores ESG

Área destinada à apresentação de indicadores e dados públicos.

### Projetos e iniciativas

Área destinada à apresentação de projetos e ações de destaque.

### Transparência ESG

Área destinada à disponibilização de documentos, políticas,
relatórios, indicadores e outras informações relevantes.

---

## 7. Conteúdo

O conteúdo inicial deverá utilizar como referência o arquivo:

`docs/conteudo-esg.md`

As informações deverão ser tratadas como conteúdo de referência até
que sejam oficialmente validadas.

O agente de IA **não deverá inventar**:

- indicadores;
- números;
- metas;
- compromissos;
- resultados;
- datas;
- projetos;
- informações institucionais.

Quando uma informação necessária não estiver disponível, deverá ser
utilizado um placeholder ou a informação deverá ser identificada como
pendente de validação.

---

## 8. Responsividade

A aplicação deverá funcionar adequadamente em:

- desktop;
- tablet;
- dispositivos móveis.

A estrutura visual deverá ser adaptada para diferentes tamanhos de
tela sem comprometer a hierarquia das informações.

---

## 9. Requisitos de implementação

O projeto deverá:

- utilizar React;
- utilizar Vite;
- utilizar JavaScript;
- utilizar componentes reutilizáveis;
- manter separação adequada entre componentes, páginas, dados e estilos;
- evitar duplicação desnecessária de código;
- utilizar Git para controle de versão.

---

## 10. Restrições de escopo

Não deverão ser implementados inicialmente:

- autenticação;
- cadastro de usuários;
- área administrativa;
- painel interno;
- banco de dados;
- sistema de inspeções;
- sistema de auditoria;
- gerenciamento de indicadores por usuários;
- permissões;
- APIs corporativas;
- integrações com sistemas internos;
- outras páginas institucionais da TEGRAM.

O protótipo deverá permanecer focado na experiência pública do Portal
ESG.

---

## 11. Rotas

As únicas rotas funcionais inicialmente serão:

```text
/
/esg
```

Nenhuma outra página deverá ser criada sem alteração explícita do
escopo do projeto.
