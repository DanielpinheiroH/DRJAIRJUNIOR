import type { Treatment } from '../types';
import { locationSuffix } from '../config/clinic';

type TreatmentSeed = Pick<
  Treatment,
  'slug' | 'title' | 'shortDescription' | 'category' | 'introduction' | 'howItWorks'
> & { imageFile: string };

const makeTreatment = (seed: TreatmentSeed): Treatment => ({
  ...seed,
  seoTitle: `${seed.title}${locationSuffix} | Avaliação personalizada`,
  seoDescription: `Conheça as possibilidades de ${seed.title.toLowerCase()}${locationSuffix}. A indicação depende de avaliação profissional e o planejamento é individualizado.`,
  indications: [
    `Pessoas que desejam entender se ${seed.title.toLowerCase()} pode ser indicado para sua necessidade`,
    'Pacientes que buscam recuperar ou preservar saúde, função e estética bucal',
    'Casos avaliados clinicamente e, quando necessário, com exames complementares',
  ],
  benefits: [
    'Planejamento adaptado às condições clínicas e aos objetivos do paciente',
    'Possível melhora de função, conforto ou estética, conforme o caso',
    'Acompanhamento profissional durante as diferentes etapas',
    'Orientações individualizadas de higiene e manutenção',
  ],
  steps: [
    'Avaliação clínica e conversa sobre necessidades e expectativas',
    'Solicitação de exames, fotografias ou escaneamento quando necessários',
    'Definição e apresentação do planejamento individualizado',
    'Realização do tratamento conforme as condições de cada caso',
    'Acompanhamento e consultas periódicas de manutenção',
  ],
  care: [
    'Seguir as orientações específicas fornecidas pelo cirurgião-dentista',
    'Manter higiene bucal cuidadosa e rotina de prevenção',
    'Comparecer às consultas de acompanhamento e manutenção',
    'Comunicar desconfortos ou alterações durante o tratamento',
  ],
  faq: [
    {
      question: `${seed.title} é indicado para todas as pessoas?`,
      answer: 'Não. A indicação depende das condições clínicas, do histórico de saúde e dos objetivos de cada paciente. Consulte o cirurgião-dentista para uma avaliação individual.',
    },
    {
      question: 'É necessário realizar exames antes?',
      answer: 'Alguns casos exigem exames de imagem, fotografias ou outros registros. A necessidade é definida após avaliação profissional.',
    },
    {
      question: 'Quanto tempo dura o tratamento?',
      answer: 'O prazo varia conforme a complexidade, a resposta do organismo e as etapas necessárias. O planejamento é individualizado.',
    },
    {
      question: 'Quais cuidados são necessários?',
      answer: 'Higiene adequada, acompanhamento periódico e o cumprimento das orientações profissionais são importantes. Cuidados específicos são explicados para cada caso.',
    },
    {
      question: 'Os resultados são iguais para todos?',
      answer: 'Não. Cada paciente possui características próprias e os resultados podem variar conforme as condições clínicas, o planejamento e os cuidados adotados.',
    },
  ],
});

export const treatments: Treatment[] = [
  makeTreatment({
    slug: 'protocolo-dentario', title: 'Protocolo dentário', category: 'Reabilitação oral', imageFile: 'tratamento-protocolo.webp',
    shortDescription: 'Possibilidade de reabilitação fixa apoiada sobre implantes para casos selecionados.',
    introduction: 'O protocolo dentário é uma opção de reabilitação oral fixa que pode ser indicada para pessoas que perderam vários dentes ou utilizam próteses removíveis. A indicação depende de avaliação clínica, exames e planejamento cuidadoso.',
    howItWorks: 'Após o estudo do caso, implantes podem ser instalados para apoiar uma prótese fixa. O número de implantes, os prazos e o tipo de prótese variam conforme a anatomia, a saúde geral e as condições bucais.',
  }),
  makeTreatment({
    slug: 'implante-dentario', title: 'Implante dentário', category: 'Implantodontia', imageFile: 'tratamento-implante.webp',
    shortDescription: 'Alternativa para substituir dentes perdidos e apoiar futuras próteses.',
    introduction: 'Implantes dentários podem substituir raízes de dentes perdidos e servir de apoio para coroas ou próteses. Em casos indicados, podem contribuir para recuperar mastigação, função e estética.',
    howItWorks: 'O processo pode envolver avaliação clínica, exames de imagem, planejamento, instalação do implante, período de cicatrização, confecção da prótese e manutenção periódica.',
  }),
  makeTreatment({
    slug: 'lentes-de-contato-dental', title: 'Lentes de contato dental', category: 'Odontologia estética', imageFile: 'tratamento-lentes.webp',
    shortDescription: 'Lâminas cerâmicas planejadas para modificar aspectos do sorriso em casos indicados.',
    introduction: 'Lentes de contato dental podem contribuir para modificar formato, proporção, cor, tamanho e harmonia dos dentes. Nem todos os pacientes precisam ou podem realizar o procedimento.',
    howItWorks: 'O sorriso é avaliado e planejado individualmente. Quando indicadas, lâminas cerâmicas são confeccionadas e aderidas aos dentes após etapas de prova e validação.',
  }),
  makeTreatment({
    slug: 'proteses-dentarias', title: 'Próteses dentárias', category: 'Reabilitação oral', imageFile: 'tratamento-protese.webp',
    shortDescription: 'Soluções removíveis, fixas ou sobre implantes conforme o caso clínico.',
    introduction: 'Próteses dentárias podem repor dentes ausentes e auxiliar na recuperação de função e estética. Entre as possibilidades estão próteses parciais, fixas e apoiadas sobre implantes.',
    howItWorks: 'A escolha depende da quantidade de dentes, estruturas de suporte, saúde bucal e objetivos do paciente. O processo inclui avaliação, registros, provas, instalação e adaptação.',
  }),
  makeTreatment({ slug: 'facetas-dentarias', title: 'Facetas dentárias', category: 'Odontologia estética', imageFile: 'tratamento-facetas.webp', shortDescription: 'Revestimentos planejados para a face frontal dos dentes.', introduction: 'Facetas dentárias podem ser consideradas para alterações de forma, proporção, textura ou cor em casos selecionados.', howItWorks: 'O tratamento envolve diagnóstico estético e funcional, planejamento, preparo quando necessário, provas e instalação do material indicado.' }),
  makeTreatment({ slug: 'coroas-dentarias', title: 'Coroas dentárias', category: 'Reabilitação oral', imageFile: 'tratamento-coroas.webp', shortDescription: 'Restauração que recobre o dente ou é instalada sobre implante.', introduction: 'Coroas podem ser indicadas para proteger e reabilitar dentes com perda estrutural importante ou para compor próteses sobre implantes.', howItWorks: 'Após preparo ou definição do componente protético, registros são feitos para confeccionar uma coroa adaptada à função e à estética do caso.' }),
  makeTreatment({ slug: 'clareamento-dental', title: 'Clareamento dental', category: 'Odontologia estética', imageFile: 'tratamento-clareamento.webp', shortDescription: 'Procedimento supervisionado para clarear dentes naturais.', introduction: 'O clareamento dental pode ser indicado para reduzir pigmentações e deixar dentes naturais mais claros, respeitando limites biológicos.', howItWorks: 'Após avaliação, o profissional define técnica, concentração e frequência adequadas. Restaurações e próteses não clareiam da mesma forma que dentes naturais.' }),
  makeTreatment({ slug: 'restauracoes-esteticas', title: 'Restaurações estéticas', category: 'Odontologia estética', imageFile: 'tratamento-restauracoes.webp', shortDescription: 'Reconstrução de partes do dente com foco em forma e função.', introduction: 'Restaurações estéticas podem reparar lesões, fraturas ou desgastes e recompor o dente de forma conservadora quando indicado.', howItWorks: 'O tecido comprometido é tratado e o dente é reconstruído com material escolhido conforme extensão, posição e exigências funcionais.' }),
  makeTreatment({ slug: 'reabilitacao-oral', title: 'Reabilitação oral', category: 'Reabilitação oral', imageFile: 'tratamento-reabilitacao.webp', shortDescription: 'Planejamento integrado para recuperar saúde, função e estética.', introduction: 'A reabilitação oral integra diferentes tratamentos quando há necessidades múltiplas envolvendo dentes, gengivas, mordida e estruturas de suporte.', howItWorks: 'O diagnóstico reúne informações clínicas e exames para organizar etapas de prevenção, restauração, cirurgia, prótese ou estética conforme necessário.' }),
  makeTreatment({ slug: 'planejamento-digital-do-sorriso', title: 'Planejamento digital do sorriso', category: 'Odontologia estética', imageFile: 'tratamento-planejamento.webp', shortDescription: 'Recursos digitais para estudar proporções e possibilidades terapêuticas.', introduction: 'O planejamento digital pode auxiliar na análise do sorriso e na comunicação das possibilidades de tratamento, sem representar garantia de resultado.', howItWorks: 'Fotografias, escaneamentos e medidas podem ser combinados para simular alternativas e orientar decisões clínicas individualizadas.' }),
  makeTreatment({ slug: 'limpeza-e-prevencao', title: 'Limpeza e prevenção', category: 'Prevenção', imageFile: 'tratamento-prevencao.webp', shortDescription: 'Cuidados periódicos para preservar a saúde bucal.', introduction: 'Consultas preventivas permitem acompanhar dentes e gengivas, orientar hábitos e remover depósitos que a higiene doméstica não elimina.', howItWorks: 'A consulta pode incluir exame, remoção de biofilme e cálculo, polimento, orientação de higiene e definição da frequência de retorno.' }),
  makeTreatment({ slug: 'tratamento-de-canal', title: 'Tratamento de canal', category: 'Endodontia', imageFile: 'tratamento-canal.webp', shortDescription: 'Tratamento do interior do dente em situações indicadas.', introduction: 'O tratamento de canal pode ser necessário quando a polpa dental está inflamada, infectada ou sofreu dano irreversível.', howItWorks: 'Os canais internos são acessados, limpos, desinfetados e preenchidos. Depois, o dente precisa receber restauração adequada.' }),
  makeTreatment({ slug: 'periodontia', title: 'Periodontia', category: 'Periodontia', imageFile: 'tratamento-periodontia.webp', shortDescription: 'Cuidado das gengivas e estruturas que sustentam os dentes.', introduction: 'A periodontia previne, diagnostica e trata condições que afetam gengivas, osso e demais tecidos de suporte dos dentes.', howItWorks: 'O tratamento varia de orientação e limpeza profissional a procedimentos específicos, conforme extensão e atividade da condição periodontal.' }),
  makeTreatment({ slug: 'bruxismo', title: 'Bruxismo', category: 'Dor e bruxismo', imageFile: 'tratamento-bruxismo.webp', shortDescription: 'Avaliação de apertamento, ranger dos dentes e efeitos associados.', introduction: 'O bruxismo envolve apertar ou ranger os dentes e pode estar associado a desgastes, sensibilidade ou desconforto muscular.', howItWorks: 'A avaliação investiga sinais, sintomas e fatores relacionados para definir medidas de proteção, controle e acompanhamento.' }),
  makeTreatment({ slug: 'placas-de-protecao', title: 'Placas de proteção', category: 'Dor e bruxismo', imageFile: 'tratamento-placas.webp', shortDescription: 'Dispositivos individualizados para situações específicas.', introduction: 'Placas podem ser indicadas para proteção dentária ou apoio no controle de determinadas condições, após diagnóstico profissional.', howItWorks: 'Registros da boca orientam a confecção de um dispositivo ajustado. Uso, tempo e manutenção dependem da finalidade clínica.' }),
  makeTreatment({ slug: 'cirurgias-odontologicas', title: 'Cirurgias odontológicas', category: 'Cirurgia', imageFile: 'tratamento-cirurgias.webp', shortDescription: 'Procedimentos cirúrgicos planejados conforme diagnóstico e exames.', introduction: 'Cirurgias odontológicas abrangem diferentes procedimentos e são indicadas somente após avaliação de benefícios, riscos e condições de saúde.', howItWorks: 'O planejamento considera exame clínico, imagens, histórico médico, técnica, orientações pré e pós-operatórias e acompanhamento.' }),
  makeTreatment({ slug: 'avaliacao-odontologica', title: 'Avaliação odontológica', category: 'Prevenção', imageFile: 'tratamento-avaliacao.webp', shortDescription: 'Primeiro passo para compreender necessidades e possibilidades de cuidado.', introduction: 'A avaliação reúne conversa, exame clínico e, quando necessário, exames complementares para compreender a saúde bucal e definir prioridades.', howItWorks: 'O profissional escuta as queixas, avalia dentes e tecidos bucais, registra informações e apresenta possibilidades de cuidado de forma transparente.' }),
];

export const featuredTreatments = treatments.slice(0, 4);

export const treatmentCategories = ['Todos', ...new Set(treatments.map((item) => item.category))];

export const getTreatment = (slug: string) => treatments.find((item) => item.slug === slug);

export const getRelatedTreatments = (treatment: Treatment) =>
  treatments
    .filter((item) => item.slug !== treatment.slug)
    .sort((a, b) => Number(b.category === treatment.category) - Number(a.category === treatment.category))
    .slice(0, 3);
