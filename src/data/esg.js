/*
 * Todo o texto da página fica aqui. Para alterar conteúdo, edite este arquivo:
 * os componentes só cuidam da apresentação.
 */

export const hero = {
  eyebrow: 'Nosso compromisso ESG',
  title: 'ESG TEGRAM',
  headline: ['Logística eficiente,', 'desenvolvimento responsável.'],
  text: 'No TEGRAM, conectamos a produção agrícola aos mercados nacionais e internacionais com foco em segurança, eficiência operacional, proteção ambiental e desenvolvimento das comunidades do entorno.',
  ctaLabel: 'Conheça nossos compromissos',
  scrollLabel: 'Role para explorar',
  scrollTarget: '#pilares',
};

export const pillars = {
  eyebrow: 'Nossa agenda ESG',
  title: 'Três pilares, um mesmo compromisso',
  intro: 'Nossa agenda ESG está organizada em meio ambiente, pessoas e comunidades, e governança: frentes que orientam como operamos no Porto do Itaqui.',
  items: [
    {
      id: 'ambiente',
      label: 'Meio ambiente',
      headline: 'Operar com responsabilidade e reduzir impactos',
      description: 'Trabalhamos para reduzir os impactos das operações portuárias, prevenir a poluição e promover o uso responsável dos recursos.',
      highlight: 'Compostagem comunitária',
      cta: 'Ver ações ambientais',
      imageAlt: 'Colheitadeira e trator em lavoura de grãos',
      imagePosition: '38% 50%',
    },
    {
      id: 'pessoas',
      label: 'Pessoas e comunidades',
      headline: 'Desenvolver oportunidades no território',
      description: 'O desenvolvimento da operação deve contribuir para a formação profissional, a geração de oportunidades e a qualidade de vida nas comunidades próximas ao porto.',
      highlight: 'Jovem Tech, em parceria com a FAPEMA',
      cta: 'Conhecer o Jovem Tech',
      imageAlt: 'Equipe reunida em torno de uma mesa, com guindastes do porto ao fundo',
      imagePosition: '50% 30%',
    },
    {
      id: 'governanca',
      label: 'Governança',
      headline: 'Trabalhar com segurança, ética e conformidade',
      description: 'Nossa governança é baseada em conformidade, gestão de riscos, segurança, transparência e melhoria contínua.',
      highlight: 'Licença e Sistema de Gestão Integrado',
      cta: 'Ver certificações e segurança',
      imageAlt: 'Vista aérea dos armazéns do terminal',
      imagePosition: '50% 45%',
    },
  ],
};
export const environment = {
  id: 'ambiente',
  eyebrow: '01 / Meio ambiente',
  title: 'Eficiência operacional com responsabilidade ambiental.',
  intro: 'Trabalhamos para reduzir os impactos das operações portuárias, prevenir a poluição e promover o uso responsável dos recursos.',
  groups: [
    {
      number: '01',
      title: 'Gestão e conformidade ambiental',
      items: [
        'Licenciamento ambiental e atendimento às condicionantes',
        'Estruturação da gestão de carbono',
      ],
    },
    {
      number: '02',
      title: 'Monitoramento e prevenção',
      items: [
        'Monitoramento da qualidade do ar',
        'Controle de poeira, drenagem, efluentes e prevenção de derramamentos',
      ],
    },
    {
      number: '03',
      title: 'Recursos e economia circular',
      items: [
        'Gestão e destinação adequada de resíduos',
        'Compostagem comunitária',
        'Educação ambiental',
      ],
    },
  ],
  editorial: {
    eyebrow: 'Iniciativa em destaque',
    title: 'Resíduos que retornam à terra',
    text: 'Resíduos orgânicos e grãos deixam de ser descarte e voltam ao solo como composto, em uma parceria que une operação portuária e agricultura familiar.',
    photoPlaceholder: 'Espaço reservado para fotografia da compostagem comunitária',
    facts: [
      { term: 'Destino', description: 'Pátio de Compostagem Laranjeiras' },
      { term: 'Parceiros', description: 'Associação dos Pequenos Produtores de Laranjeiras, Vale e JC Ambiental' },
    ],
  },
};
export const people = {
  id: 'pessoas',
  title: 'Pessoas e comunidades',
  intro: 'Acreditamos que o desenvolvimento da operação deve contribuir para a formação profissional, a geração de oportunidades e a melhoria da qualidade de vida nas comunidades próximas ao Porto do Itaqui.',
  topics: [
    'Capacitação profissional',
    'Bolsas de estudo',
    'Inovação e pesquisa',
    'Educação ambiental',
    'Voluntariado',
    'Relacionamento com comunidades',
    'Igualdade salarial entre mulheres e homens',
    'Segurança e saúde ocupacional',
  ],
  highlights: [
    {
      id: 'jovem-tech',
      variant: 'primary',
      big: 'FAPEMA',
      bigSize: 'small',
      title: 'Jovem Tech',
      text: 'Programa realizado em parceria com a FAPEMA e outras instituições, apoiando bolsas de estudo, pesquisa, inovação e soluções para o ambiente portuário.',
    },
    {
      id: 'igualdade-salarial',
      variant: 'plain',
      big: '134,9%',
      title: 'Igualdade salarial',
      text: 'No TEGRAM, o salário contratual mediano das mulheres equivale a 134,9% do recebido pelos homens.',
      source: 'Fonte: Relatório de Transparência e Igualdade Salarial (MTE).',
    },
  ],
};

export const governance = {
  id: 'governanca',
  title: 'Governança',
  intro: 'Nossa governança ESG é baseada em conformidade, gestão de riscos, segurança, transparência e melhoria contínua.',
  topics: [
    { label: 'Cumprimento da legislação', icon: 'scale' },
    { label: 'Sistema de Gestão Integrado', icon: 'layers' },
    { label: 'Gestão de impactos ambientais', icon: 'leaf' },
    { label: 'Prevenção de acidentes', icon: 'shield' },
    { label: 'Preparação para emergências', icon: 'alert' },
    { label: 'Capacitação', icon: 'graduation' },
    { label: 'Melhoria contínua', icon: 'cycle' },
    { label: 'Transparência', icon: 'eye' },
  ],
  safety: {
    title: 'Segurança em primeiro lugar',
    text: 'Participamos de treinamentos da CPATP e de simulados integrados de emergência, preparando equipes e operação para agir com rapidez e proteger pessoas.',
  },
  certifications: {
    title: 'Certificações ISO',
    text: 'Nosso Sistema de Gestão Integrado é certificado pela APCER nas normas ISO 9001, ISO 14001 e ISO 45001, reforçando o compromisso com qualidade, meio ambiente e segurança e saúde ocupacional.',
    items: [
      { id: 'iso-9001', label: 'ISO 9001', description: 'Gestão da qualidade', alt: 'Selo de certificação APCER ISO 9001' },
      { id: 'iso-14001', label: 'ISO 14001', description: 'Gestão ambiental', alt: 'Selo de certificação APCER ISO 14001' },
      { id: 'iso-45001', label: 'ISO 45001', description: 'Saúde e segurança ocupacional', alt: 'Selo de certificação APCER ISO 45001' },
    ],
  },
  recognition: {
    title: 'Reconhecimento e carbono',
    text: 'O TEGRAM foi destaque ESG no Porto do Itaqui, com reconhecimentos em Meio Ambiente, Responsabilidade Social e na categoria Operadora Portuária.',
    awardsAlt: 'Troféus do prêmio ESG do Porto do Itaqui conquistados pelo TEGRAM',
    sealAlt: 'Selo Prata 2025 do Programa Brasileiro GHG Protocol',
    sealTitle: 'Mais um passo rumo a um futuro sustentável',
    sealText: {
      before: 'Conquistamos o Selo Prata do ',
      emphasis: 'Programa Brasileiro GHG Protocol',
      after: ', reconhecimento que atesta nosso compromisso com a transparência, a gestão das emissões de gases de efeito estufa e a construção de um futuro mais sustentável.',
    },
  },
};

export const indicators = {
  title: 'Indicadores',
  intro: 'Mostramos o que já é verificável e deixamos claro o que ainda está em construção.',
  /* Use "value" somente para números fornecidos. Não inventar métricas. */
  items: [
    { value: '134,9%', label: 'salário contratual mediano das mulheres em relação ao dos homens' },
    { label: 'Parceria com a FAPEMA', detail: 'Bolsas, pesquisa e inovação no Jovem Tech' },
    { label: 'Jovens pesquisadores apoiados', detail: 'Programa Jovem Tech' },
    { label: 'Ações de segurança e treinamento', detail: 'CPATP e simulados de emergência' },
    { label: 'Compostagem comunitária', detail: 'Pátio de Compostagem Laranjeiras' },
    { label: 'Indicadores ambientais em estruturação', detail: 'Dados serão publicados quando validados' },
  ],
};

export const transparency = {
  id: 'transparencia',
  title: 'Transparência ESG',
  intro: 'Documentos e informações públicas sobre nossa operação, programas e políticas.',
  linkLabel: 'Visualizar documento →',
  /* Troque os "href" pelos endereços reais dos PDFs. */
  documents: [
    { label: 'Licença de Operação nº 1101853/2024', href: '#' },
    { label: 'Certificado de Aprovação do Corpo de Bombeiros', href: '#' },
    { label: 'Documentos institucionais', href: '#' },
    { label: 'Políticas e procedimentos', href: '#' },
    { label: 'Informações sobre programas sociais e ambientais', href: '#' },
    { label: 'Relatório de Transparência e Igualdade Salarial', note: 'Publicação do MTE', href: '#' },
  ],
};

export const commitments = {
  title: 'Nossos compromissos',
  items: [
    'Redução dos impactos ambientais',
    'Gestão de resíduos e economia circular',
    'Desenvolvimento das comunidades',
    'Formação profissional',
    'Segurança e saúde ocupacional',
    'Mensuração de emissões de carbono',
    'Melhoria contínua da governança',
  ],
};
