# Referência visual — TEGRAM

## Site de referência

URL:
https://tegram.com.br/

A página inicial atual do site TEGRAM será utilizada como referência
visual para a implementação da Home deste projeto.

O objetivo não é reproduzir o site institucional completo, mas criar
uma implementação demonstrativa da página inicial, mantendo sua
identidade visual e estrutura principal.

## Objetivo da reprodução

A Home deverá servir como base visual para a apresentação do novo
Portal ESG.

A implementação deve preservar, sempre que possível:

- identidade visual;
- estrutura geral;
- header;
- navegação;
- tipografia;
- cores;
- espaçamentos;
- elementos gráficos;
- imagens;
- estilo dos botões;
- footer;
- comportamento responsivo.

## Escopo da reprodução

Somente a página inicial será implementada.

As demais páginas existentes no site TEGRAM não fazem parte do escopo
deste protótipo.

### Navegação do Header

O header deverá reproduzir visualmente o menu existente no site de
referência.

Entretanto, as rotas do menu NÃO deverão ser implementadas.

Os itens do menu que representam outras páginas deverão permanecer
visualmente presentes, mas não possuirão páginas funcionais neste
protótipo.

### Exceção: ESG

O único item de navegação funcional será a nova seção:

ESG

Ao clicar em ESG, o usuário deverá ser direcionado para a nova área
ESG desenvolvida neste projeto.

A rota ESG será a única rota adicional implementada.

## Rotas

A aplicação deverá possuir inicialmente apenas:

/
/esg

A rota `/` representa a Home.

A rota `/esg` representa o novo Portal ESG.

Não implementar rotas para as demais opções existentes no menu da
TEGRAM.

## Portal ESG

A nova página ESG deverá utilizar a identidade visual estabelecida
pela Home, mas poderá possuir uma estrutura própria adequada à
apresentação de informações ESG.

Referências conceituais para o Portal ESG:

- Portal ESG da Vale:
  https://vale.com/pt/esg/home

A referência da Vale deverá ser utilizada apenas para estudar a
organização e apresentação de informações ESG.

Não reproduzir sua identidade visual ou estrutura de forma literal.

## Hero — vídeo convertido em imagem estática

A página inicial atual do site TEGRAM utiliza um vídeo como elemento
visual de fundo da seção Hero.

Neste projeto, o vídeo **não deverá ser reproduzido**.

A implementação deverá utilizar somente um **frame estático extraído
do vídeo original**, escolhido de forma a representar visualmente a
Hero da página de referência.

### Regras

- Não implementar reprodução de vídeo.
- Não utilizar `<video>` como background da Hero.
- Não implementar autoplay, controles ou loop de vídeo.
- Utilizar uma imagem estática como background.
- O frame deverá preservar, sempre que possível, o enquadramento e a
  composição visual observados na página original.
- A imagem deverá receber os mesmos tratamentos visuais necessários
  para manter a legibilidade dos textos e botões da Hero.
- A imagem deverá ser otimizada para utilização como background web.

### Objetivo

A finalidade é reproduzir a **aparência estática** da Hero do site
TEGRAM, e não reproduzir o comportamento do vídeo original.

Portanto, para fins deste projeto:

**Vídeo original → captura de frame → imagem estática → background da Hero**

O agente de IA não deverá substituir a imagem por outro vídeo, animação
ou elemento equivalente.
