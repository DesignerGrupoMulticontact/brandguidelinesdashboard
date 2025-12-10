import { NavItem, ColorDefinition, SearchableContent } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'apresentacao', label: 'Apresentação' },
  { id: 'logotipos', label: 'Logótipos' },
  { id: 'dos-donts', label: 'Boas e Más Práticas' },
  { id: 'cores', label: 'Paleta de Cores' },
  { id: 'guia-visual', label: 'Guia Visual' },
  { id: 'tipografia', label: 'Tipografia' },
  { id: 'tom-de-voz', label: 'Tom de Voz' },
  { id: 'social', label: 'Redes Sociais' },
];

export const SEARCHABLE_CONTENT: SearchableContent[] = [
  // Apresentação
  { id: 'apresentacao', title: 'Missão', category: 'Apresentação', keywords: 'propósito democratizar acesso saúde personalizada ciência' },
  { id: 'apresentacao', title: 'Visão', category: 'Apresentação', keywords: 'futuro referência internacional bem-estar' },
  { id: 'apresentacao', title: 'Valores da Marca', category: 'Apresentação', keywords: 'rigor científico empatia transparência inovação' },
  
  // Logótipos
  { id: 'logotipos', title: 'Logótipo Principal', category: 'Logótipos', keywords: 'identidade visual logo cor' },
  { id: 'logotipos', title: 'Logótipo Secundário', category: 'Logótipos', keywords: 'wordmark horizontal' },
  { id: 'logotipos', title: 'Ícone / Favicon', category: 'Logótipos', keywords: 'símbolo app avatar' },
  { id: 'logotipos', title: 'Aplicações Monocromáticas', category: 'Logótipos', keywords: 'preto branco negativo positivo' },
  { id: 'logotipos', title: 'Área de Proteção', category: 'Logótipos', keywords: 'safe zone margem espaço clearspace' },
  { id: 'logotipos', title: 'Dimensões Mínimas', category: 'Logótipos', keywords: 'tamanho largura altura pixeis' },

  // Boas e Más Práticas Visuais
  { id: 'dos-donts', title: 'Boas Práticas Visuais', category: 'Visual', keywords: 'correto fundo claro contraste proporção' },
  { id: 'dos-donts', title: 'Más Práticas Visuais', category: 'Visual', keywords: 'incorreto sombras cores distorção contorno' },

  // Cores
  { id: 'cores', title: 'Primary Blue', category: 'Paleta de Cores', keywords: '#0872B1 azul principal' },
  { id: 'cores', title: 'Growth Green', category: 'Paleta de Cores', keywords: '#6BAE2E verde sucesso' },
  { id: 'cores', title: 'Scientific Dark', category: 'Paleta de Cores', keywords: '#3F4D58 escuro cinzento fundo' },
  { id: 'cores', title: 'Deep Nature', category: 'Paleta de Cores', keywords: '#426E4E verde escuro' },
  { id: 'cores', title: 'Premium Gold', category: 'Paleta de Cores', keywords: '#D6B66A dourado' },
  { id: 'cores', title: 'Paleta Secundária', category: 'Paleta de Cores', keywords: 'social media nude cream taupe teal grey' },

  // Guia Visual
  { id: 'guia-visual', title: 'Essência do Estilo', category: 'Guia Visual', keywords: 'fotografia naturalidade serenidade' },
  { id: 'guia-visual', title: 'Paleta e Iluminação', category: 'Guia Visual', keywords: 'luz difusa tons quentes' },
  { id: 'guia-visual', title: 'Composição de Produto', category: 'Guia Visual', keywords: 'packaging minimalista madeira' },
  { id: 'guia-visual', title: 'Representação Humana', category: 'Guia Visual', keywords: 'mulheres reais 35-65 anos autêntica' },

  // Tipografia
  { id: 'tipografia', title: 'Poppins', category: 'Tipografia', keywords: 'fonte principal títulos semibold' },
  { id: 'tipografia', title: 'Montserrat', category: 'Tipografia', keywords: 'fonte secundária corpo texto website' },

  // Tom de Voz
  { id: 'tom-de-voz', title: 'Tom Empático', category: 'Tom de Voz', keywords: 'proximidade compreensão ouvir' },
  { id: 'tom-de-voz', title: 'Tom Científico', category: 'Tom de Voz', keywords: 'evidência dados rigor' },
  { id: 'tom-de-voz', title: 'Orientado a Soluções', category: 'Tom de Voz', keywords: 'prático bem-estar' },
  { id: 'tom-de-voz', title: 'Boas Práticas (Texto)', category: 'Tom de Voz', keywords: 'linguagem clara profissional' },
  { id: 'tom-de-voz', title: 'Más Práticas (Texto)', category: 'Tom de Voz', keywords: 'gírias agressivo informal' },

  // Social
  { id: 'social', title: 'Redes Sociais', category: 'Links', keywords: 'instagram facebook website' },
];

export const BRAND_COLORS: ColorDefinition[] = [
  {
    name: 'Primary Blue',
    hex: '#0872B1',
    description: 'Cor principal para botões, links e títulos de destaque.',
    textColor: 'text-white',
  },
  {
    name: 'Growth Green',
    hex: '#6BAE2E',
    description: 'Elementos de sucesso, ícones naturais e áreas de confirmação.',
    textColor: 'text-white',
  },
  {
    name: 'Scientific Dark',
    hex: '#3F4D58',
    description: 'Fundos de secção, textos principais e áreas de neutralidade.',
    textColor: 'text-white',
  },
  {
    name: 'Deep Nature',
    hex: '#426E4E',
    description: 'Detalhes profundos, realces secundários e estados de hover.',
    textColor: 'text-white',
  },
  {
    name: 'Premium Gold',
    hex: '#D6B66A',
    description: 'Acentos premium e selos de qualidade.',
    textColor: 'text-white',
  },
];

export const SOCIAL_COLORS: ColorDefinition[] = [
  {
    name: 'Editorial Cream',
    hex: '#E9DED4',
    description: 'Fundo principal para posts, stories e layouts limpos.',
    textColor: 'text-brand-dark',
  },
  {
    name: 'Natural Nude',
    hex: '#D3B8A4',
    description: 'Reforço do aspeto natural, humano e overlays suaves.',
    textColor: 'text-white',
  },
  {
    name: 'Balance Taupe',
    hex: '#A4978D',
    description: 'Neutro equilibrador para textos secundários e linhas.',
    textColor: 'text-white',
  },
  {
    name: 'Deep Teal',
    hex: '#0F3A4A',
    description: 'Reforço institucional, títulos e elementos de contraste.',
    textColor: 'text-white',
  },
  {
    name: 'Soft Grey',
    hex: '#E5E7EB',
    description: 'Detalhes minimalistas, separadores e equilíbrio visual.',
    textColor: 'text-brand-dark',
  },
];

export const VALUES = [
  {
    title: 'Rigor Científico',
    description: 'Tomamos decisões com base em evidência e controlo de qualidade rigoroso. A ciência assegura a segurança e eficácia de cada fórmula.',
  },
  {
    title: 'Empatia',
    description: 'A saúde é pessoal. Ouvimos cada objetivo e acompanhamos cada progresso com proximidade, para que cada pessoa se sinta compreendida.',
  },
  {
    title: 'Transparência',
    description: 'Comunicamos com clareza. Explicamos cada ingrediente e função para que saiba exatamente o que está a colocar no corpo.',
  },
  {
    title: 'Inovação',
    description: 'A personalização nasce da inovação. Avaliação clínica online, seleção rigorosa de ingredientes e produção certificada garantem soluções seguras e ajustadas a cada corpo.',
  },
];

export const TONE_GUIDELINES = {
  dos: {
    general: [
      'Utilizar uma linguagem clara, profissional e acolhedora.',
      'Explicar temas clínicos de forma acessível e estruturada.',
      'Dar ênfase à personalização e ao acompanhamento contínuo.',
      'Comunicar com transparência e foco no bem-estar da pessoa.',
    ],
    examples: [
      'A fórmula foi ajustada a partir da sua avaliação clínica para refletir exatamente o que o seu corpo necessita.',
      'A toma diária é essencial para garantir estabilidade e resultados progressivos.',
      'A evolução será acompanhada para adaptar a fórmula sempre que necessário.',
    ]
  },
  donts: {
    general: [
      'Evitar informalidades, gírias ou linguagem desadequada.',
      'Evitar explicações técnicas complexas ou termos químicos.',
      'Evitar mensagens agressivas, urgência ou pressão comercial.',
      'Evitar comunicações frias, distantes ou impessoais.',
    ],
    examples: [
      'A fórmula foi feita com base no que respondeu e pronto, é o que é.',
      'A estabilização metabólica depende da titulação bioquímica das substâncias ativas administradas.',
      'Tem de tomar todos os dias para ver resultados rápidos, não deixe passar.',
    ]
  },
};