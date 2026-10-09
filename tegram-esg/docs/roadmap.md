# Roadmap — Portal ESG TEGRAM

## Visão geral

O projeto será desenvolvido de forma incremental.

O desenvolvimento deverá seguir a sequência:

```text
Documentação
      ↓
Referência visual
      ↓
Análise
      ↓
Arquitetura
      ↓
Implementação da Home
      ↓
Validação visual
      ↓
Definição do Portal ESG
      ↓
Implementação do Portal ESG
      ↓
Refinamento
```

---

# Fase 1 — Preparação

### Objetivo

Preparar o projeto e estabelecer suas regras.

### Tarefas

- Criar projeto React + Vite.
- Configurar Git.
- Configurar repositório GitHub.
- Criar estrutura inicial de diretórios.
- Criar documentação em `docs/`.
- Configurar instruções para o GitHub Copilot.
- Definir dependências iniciais.

### Resultado esperado

Projeto executável e documentação inicial estabelecida.

---

### Fase 2 — Análise da referência TEGRAM

### Objetivo

Compreender visualmente a Home atual da TEGRAM antes da implementação.

### Tarefas

- Analisar Header.
- Analisar navegação.
- Analisar Hero.
- Identificar seções.
- Identificar imagens.
- Identificar cores.
- Identificar tipografia.
- Identificar espaçamentos.
- Analisar Footer.
- Avaliar comportamento responsivo.
- Registrar screenshots em `docs/referencias/`.
- Capturar o **frame inicial do vídeo da Hero**.
- Armazenar o frame inicial como `docs/referencias/tegram-hero.png`.

### Resultado esperado

Mapa visual da Home e conjunto de referências disponíveis para o
desenvolvimento.

O frame utilizado na Hero já está definido pelo projeto: será sempre o
frame inicial do vídeo original.

# Fase 3 — Arquitetura da aplicação

### Objetivo

Definir a estrutura técnica antes de desenvolver as interfaces.

### Tarefas

- Definir componentes.
- Definir páginas.
- Definir layouts.
- Definir organização dos dados.
- Definir estratégia de estilos.
- Definir roteamento.
- Revisar arquitetura com base na documentação.

### Resultado esperado

Estrutura técnica clara e adequada ao tamanho do projeto.

---

# Fase 4 — Implementação da Home

### Objetivo

Reproduzir a experiência visual principal da Home TEGRAM.

### Ordem sugerida

1. Estrutura base.
2. Header.
3. Navegação.
4. Hero.
5. Seções intermediárias.
6. Elementos gráficos.
7. Botões.
8. Footer.
9. Responsividade.

### Observação

A Hero deverá utilizar o frame estático definido durante a Fase 2.

O vídeo original não deverá ser implementado.

### Resultado esperado

Home visualmente próxima à referência TEGRAM.

---

# Fase 5 — Validação visual da Home

### Objetivo

Comparar a implementação com a referência.

### Tarefas

- Comparar desktop.
- Comparar mobile.
- Verificar espaçamentos.
- Verificar tipografia.
- Verificar imagens.
- Verificar cores.
- Verificar proporções.
- Verificar navegação.
- Corrigir diferenças relevantes.
- Refatorar componentes quando necessário.

### Resultado esperado

Home refinada e consistente com a referência visual.

---

# Fase 6 — Definição do Portal ESG

### Objetivo

Transformar o conceito ESG em uma estrutura de produto clara.

### Tarefas

- Revisar `docs/conteudo-esg.md`.
- Definir arquitetura de informação.
- Definir hierarquia das informações.
- Definir estrutura da página ESG.
- Definir apresentação dos três pilares.
- Definir indicadores.
- Definir iniciativas.
- Definir área de Transparência ESG.
- Identificar informações que precisam de validação.

### Resultado esperado

Estrutura definitiva da primeira versão do Portal ESG.

---

# Fase 7 — Implementação do Portal ESG

### Objetivo

Implementar a página `/esg`.

### Estrutura inicial

- Hero ESG.
- Visão geral.
- Meio ambiente.
- Pessoas e comunidades.
- Governança.
- Iniciativas em destaque.
- Indicadores ESG.
- Transparência ESG.

### Resultado esperado

Primeira versão funcional do Portal ESG.

---

# Fase 8 — Refinamento

### Objetivo

Preparar o protótipo para apresentação.

### Tarefas

- Revisar responsividade.
- Revisar acessibilidade.
- Otimizar imagens.
- Verificar desempenho.
- Revisar componentes.
- Remover código desnecessário.
- Verificar navegação.
- Revisar conteúdo.
- Verificar informações não validadas.
- Realizar testes finais.

### Resultado esperado

Protótipo consistente, apresentável e preparado para futuras
evoluções.

---

# Fase 9 — Evoluções futuras

Recursos abaixo não fazem parte da primeira versão, mas poderão ser
considerados posteriormente:

- APIs;
- banco de dados;
- indicadores dinâmicos;
- área administrativa;
- gerenciamento de documentos;
- atualização de indicadores;
- integração com sistemas corporativos;
- autenticação;
- dashboards;
- relatórios ESG;
- outras páginas institucionais.

Essas funcionalidades somente deverão ser implementadas após uma
revisão formal do escopo.
