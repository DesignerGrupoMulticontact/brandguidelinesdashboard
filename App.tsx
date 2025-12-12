import React, { useState, useEffect } from 'react';
import { 
  Facebook, 
  Instagram, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  XCircle,
  FlaskConical,
  Heart,
  Search,
  Zap,
  Microscope,
  HeartHandshake,
  Lightbulb,
  Target,
  Leaf,
  ExternalLink,
  Download,
  Sparkles,
  Sun,
  Crop,
  Smile,
  Armchair,
  Ban,
  Image as ImageIcon,
  FileBadge,
  Maximize,
  Fingerprint,
  MoveHorizontal,
  MoveVertical,
  ScanLine,
  CheckSquare,
  XSquare
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import { ValueCard, ColorCard, LogoCard, ToneCard, GuidelineItem, AnimatedBlock } from './components/SectionComponents';
import { NAV_ITEMS, BRAND_COLORS, SOCIAL_COLORS, VALUES, TONE_GUIDELINES } from './constants';

// Brand Assets
const LOGO_MAIN = "https://res.cloudinary.com/dlmyres0i/image/upload/v1765550612/logomain_kmecvg.svg";
const LOGO_SECONDARY = "https://res.cloudinary.com/dlmyres0i/image/upload/v1765550637/logosecondary_f4umks.svg";
const LOGO_ICON = "https://res.cloudinary.com/dlmyres0i/image/upload/v1765550639/icon_w77ygr.svg";
const LOGO_MAIN_POS = "https://res.cloudinary.com/dlmyres0i/image/upload/v1765550635/logomainpositive_hydel8.svg";
const LOGO_MAIN_NEG = "https://res.cloudinary.com/dlmyres0i/image/upload/v1765550634/logomainnegative_yfmnck.svg";

// PNG Assets for Download
const PNG_LOGO_MAIN = "https://res.cloudinary.com/dlmyres0i/image/upload/v1765550460/logomain_ic3pg3.png";
const PNG_LOGO_SECONDARY = "https://res.cloudinary.com/dlmyres0i/image/upload/v1765550463/logosecondary_smpktk.png";
const PNG_LOGO_ICON = "https://res.cloudinary.com/dlmyres0i/image/upload/v1765550441/icon_tdwuig.png";
const PNG_LOGO_MAIN_POS = "https://res.cloudinary.com/dlmyres0i/image/upload/v1765550462/logomainpositive_qyozsd.png";
const PNG_LOGO_MAIN_NEG = "https://res.cloudinary.com/dlmyres0i/image/upload/v1765550462/logomainnegative_facsbq.png";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('apresentacao');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Smooth Scroll Handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileOpen(false);
    }
  };

  // Scroll Spy to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // 1. Check if we've reached the bottom of the page
      // If we are near the bottom, force the last item to be active
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].id);
        return;
      }

      // 2. Standard ScrollSpy Logic
      // Using a distinct offset (viewport center usually works best for long sections)
      const scrollPosition = window.scrollY + (window.innerHeight / 3); 

      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Icon mapping for values and tones since we can't easily pass components via basic JSON constants
  const getValueIcon = (index: number) => {
    switch(index) {
      case 0: return FlaskConical; // Rigor Científico
      case 1: return Heart;        // Empatia
      case 2: return Search;       // Transparência
      case 3: return Zap;          // Inovação
      default: return undefined;
    }
  };

  const getToneIcon = (index: number) => {
     switch(index) {
      case 0: return HeartHandshake; // Empático
      case 1: return Microscope;     // Científico
      case 2: return Lightbulb;      // Orientado a Soluções
      default: return undefined;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] font-secondary text-brand-dark selection:bg-brand-green/20 selection:text-brand-dark">
      <Sidebar
        items={NAV_ITEMS}
        activeSection={activeSection}
        isMobileOpen={isMobileOpen}
        toggleMobileMenu={() => setIsMobileOpen(!isMobileOpen)}
        onNavigate={scrollToSection}
      />

      <main className="flex-1 md:ml-72 p-6 md:p-12 lg:px-32 xl:px-40 w-full max-w-[1400px] mx-auto space-y-24 md:space-y-36">
        
        {/* SECTION 1: APRESENTAÇÃO */}
        <section id="apresentacao" className="pt-8">
          <AnimatedBlock className="bg-white p-8 md:p-12 lg:p-16 rounded-[2rem] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
            {/* Subtle Green Gradient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-brand-green/5 to-transparent rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            
            <div className="relative z-10">
              <AnimatedBlock delay={0}>
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold tracking-wider mb-8 uppercase border border-brand-green/20">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                  Brand Guidelines 2025
                </span>
              </AnimatedBlock>
              
              <AnimatedBlock delay={100}>
                <h1 className="font-primary font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-8 leading-[1.1]">
                  Fórmulas Personalizadas<br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-[#426E4E]">
                    para o seu Bem-estar.
                  </span>
                </h1>
              </AnimatedBlock>
              
              <AnimatedBlock delay={200}>
                <p className="font-secondary text-lg text-gray-500 max-w-2xl leading-relaxed mb-16 font-light">
                  Orientações para comunicar a MyFormula de forma credível, humana e alinhada com a nossa missão, respeitando cada história e cada necessidade individual.
                </p>
              </AnimatedBlock>

              {/* Mission & Vision - Refined (White/Green/Grey) */}
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                
                {/* Missão */}
                <AnimatedBlock delay={300} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-brand-green/30 transition-colors duration-300">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Target size={120} className="text-brand-green" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-brand-green/10 text-brand-green rounded-xl group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                      <Target size={24} />
                    </div>
                    <h3 className="font-primary text-xl font-semibold text-brand-dark">Missão</h3>
                  </div>
                  <p className="font-secondary text-gray-600 leading-relaxed relative z-10">
                    Democratizar o acesso à saúde personalizada através de ciência, tecnologia e nutrição avançada, criando fórmulas verdadeiramente únicas para pessoas únicas. Cada corpo merece uma resposta feita à sua medida.
                  </p>
                </AnimatedBlock>

                {/* Visão */}
                <AnimatedBlock delay={400} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-brand-green/30 transition-colors duration-300">
                   <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Leaf size={120} className="text-brand-green" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-brand-green/10 text-brand-green rounded-xl group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                      <Leaf size={24} />
                    </div>
                    <h3 className="font-primary text-xl font-semibold text-brand-dark">Visão</h3>
                  </div>
                  <p className="font-secondary text-gray-600 leading-relaxed relative z-10">
                    Ser a referência internacional em suplementação personalizada, garantindo que cada pessoa encontra a sua fórmula ideal de bem-estar, desenvolvida com rigor, propósito e atenção ao que o corpo realmente precisa.
                  </p>
                </AnimatedBlock>

              </div>

              {/* Values Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {VALUES.map((value, idx) => (
                  <ValueCard 
                    key={idx} 
                    {...value} 
                    icon={getValueIcon(idx)}
                    delay={500 + (idx * 100)}
                  />
                ))}
              </div>
            </div>
          </AnimatedBlock>
        </section>

        {/* SECTION 2: LOGÓTIPOS */}
        <section id="logotipos" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-6">
             <div className="w-12 h-1 bg-brand-green rounded-full"></div>
            <h2 className="font-primary text-3xl font-bold text-brand-dark">Logótipos</h2>
          </div>
          
          {/* Main Identity */}
          <div className="mb-16">
             <h3 className="font-primary text-xl font-semibold text-brand-dark mb-6">Identidade Principal</h3>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <LogoCard 
                title="Logótipo Principal" 
                description="Versão a cores. Deve ser usada sempre que possível em fundos brancos ou claros." 
                variant="color"
                imageUrl={LOGO_MAIN}
                pngUrl={PNG_LOGO_MAIN}
                delay={0}
              />
              <LogoCard 
                title="Logótipo Secundário" 
                description="Ideal para cabeçalhos, aplicações horizontais ou quando o ícone já está presente." 
                variant="wordmark"
                imageUrl={LOGO_SECONDARY}
                pngUrl={PNG_LOGO_SECONDARY}
                delay={100}
              />
              <LogoCard 
                title="Ícone / Favicon" 
                description="Símbolo isolado para avatares, app icons e favicons." 
                variant="icon"
                imageUrl={LOGO_ICON}
                pngUrl={PNG_LOGO_ICON}
                delay={200}
              />
            </div>
          </div>

          {/* Monochrome Versions */}
          <div className="mb-16">
            <h3 className="font-primary text-xl font-semibold text-brand-dark mb-6">Aplicações Monocromáticas</h3>
             <div className="grid md:grid-cols-2 gap-8">
               <LogoCard 
                title="Versão Positiva" 
                description="Uso a preto para impressões ou documentos oficiais." 
                variant="mono"
                imageUrl={LOGO_MAIN_POS}
                pngUrl={PNG_LOGO_MAIN_POS}
                delay={300}
                disableFilter={true}
              />
              <LogoCard 
                title="Versão Negativa" 
                description="Uso obrigatório em fundos escuros da marca ou fotografias escuras." 
                variant="negative"
                imageUrl={LOGO_MAIN_NEG}
                pngUrl={PNG_LOGO_MAIN_NEG}
                delay={400}
                disableFilter={true}
              />
             </div>
          </div>

          {/* Safe Zone Diagram */}
          <AnimatedBlock delay={300} className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
             <div className="grid xl:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
                
                {/* Part 1: Safe Zone Visual */}
                <div className="order-2 xl:order-1">
                  <h3 className="font-primary text-xl font-semibold text-brand-dark mb-6">Área de Proteção do Logótipo</h3>
                  
                  {/* Diagram Container */}
                  <div className="relative p-16 md:p-24 bg-[#F8F9F6] border border-gray-100 rounded-2xl flex items-center justify-center w-full shadow-inner">
                      
                      {/* Outer dashed border indicating safety */}
                      <div className="absolute inset-8 md:inset-12 border border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                        {/* Corner markers */}
                        <div className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-brand-green/30 rounded-tl"></div>
                        <div className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-brand-green/30 rounded-tr"></div>
                        <div className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-brand-green/30 rounded-bl"></div>
                        <div className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-brand-green/30 rounded-br"></div>
                      </div>
                      
                      {/* Logo */}
                      <img src={LOGO_MAIN} alt="MyFormula Safe Zone" loading="lazy" decoding="async" className="h-12 md:h-16 w-auto relative z-10" />

                      {/* X-height indicator visual */}
                      <div className="absolute right-12 top-1/2 -translate-y-1/2 translate-x-4 h-8 md:h-10 border-l border-brand-green/40 flex items-center">
                         <span className="ml-2 text-[10px] text-brand-green font-mono font-bold tracking-widest bg-white/50 px-1 rounded">1x</span>
                      </div>
                  </div>

                  <p className="font-secondary text-sm text-gray-500 leading-relaxed mt-6">
                    A área de proteção corresponde à altura total do ícone (1x). Nenhum elemento deve ocupar este espaço, garantindo a clareza e integridade do logótipo.
                  </p>
                </div>

                {/* Part 2: Dimensions Cards */}
                <div className="order-1 xl:order-2 flex flex-col justify-center h-full">
                  <div className="mb-8">
                     <h3 className="font-primary text-xl font-semibold text-brand-dark mb-6">Dimensões Mínimas</h3>
                     <p className="font-secondary text-sm text-gray-500 leading-relaxed">
                       O logótipo não deve ser utilizado abaixo das dimensões mínimas indicadas para assegurar a legibilidade.
                     </p>
                  </div>

                  <div className="space-y-4">
                    {/* Width Card */}
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-brand-green/30 hover:shadow-md transition-all flex items-center gap-5">
                       <div className="p-3 bg-brand-green/5 text-brand-green rounded-xl border border-brand-green/10">
                          <MoveHorizontal size={24} strokeWidth={1.5} />
                       </div>
                       <div>
                         <span className="block text-xs text-gray-400 font-secondary uppercase tracking-wider mb-0.5">Largura mínima</span>
                         <span className="block text-xl font-primary font-bold text-brand-dark">214 px</span>
                       </div>
                    </div>
                    
                    {/* Height Card */}
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-brand-green/30 hover:shadow-md transition-all flex items-center gap-5">
                       <div className="p-3 bg-brand-green/5 text-brand-green rounded-xl border border-brand-green/10">
                          <MoveVertical size={24} strokeWidth={1.5} />
                       </div>
                       <div>
                         <span className="block text-xs text-gray-400 font-secondary uppercase tracking-wider mb-0.5">Altura ícone</span>
                         <span className="block text-xl font-primary font-bold text-brand-dark">30 px</span>
                       </div>
                    </div>
                  </div>
                </div>

             </div>
          </AnimatedBlock>
        </section>

        {/* SECTION 3: BOAS E MÁS PRÁTICAS VISUAIS */}
        <section id="dos-donts" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-6">
             <div className="w-12 h-1 bg-brand-green rounded-full"></div>
            <h2 className="font-primary text-3xl font-bold text-brand-dark">Boas e Más Práticas Visuais</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
             {/* Do's (Correto) - VISUAL GRID */}
             <AnimatedBlock className="bg-white p-8 rounded-2xl border border-brand-green/30 shadow-[0_4px_20px_rgba(107,174,46,0.05)]">
               <h3 className="font-primary font-bold text-brand-green text-xl mb-8 flex items-center gap-2">
                  <CheckCircle className="text-brand-green" /> Correto
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Correct: Light Background */}
                  <div className="space-y-3 group">
                    <div className="w-full bg-gray-50 aspect-[4/3] rounded-xl border border-gray-100 flex items-center justify-center p-6 overflow-hidden">
                       <img src={LOGO_MAIN} alt="Correct Light Bg" loading="lazy" decoding="async" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <p className="font-secondary text-sm text-gray-500 leading-relaxed mt-2">Usar o logótipo completo em fundos claros.</p>
                  </div>

                  {/* Correct: Dark Background */}
                  <div className="space-y-3 group">
                    <div className="w-full bg-brand-dark aspect-[4/3] rounded-xl border border-gray-100 flex items-center justify-center p-6 overflow-hidden">
                       <img src={LOGO_MAIN_NEG} alt="Correct Dark Bg" loading="lazy" decoding="async" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <p className="font-secondary text-sm text-gray-500 leading-relaxed mt-2">Usar a versão negativa em fundos escuros.</p>
                  </div>

                  {/* Correct: Contrast */}
                  <div className="space-y-3 group">
                    <div className="w-full relative aspect-[4/3] rounded-xl border border-gray-200 flex items-center justify-center p-6 overflow-hidden">
                       {/* Background Image */}
                       <img src="https://i.postimg.cc/k6FP5K73/ambientes.png" alt="Background" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                       {/* Gradient Overlay - INCREASED CONTRAST WITH BRAND DARK */}
                       <div className="absolute inset-0 bg-gradient-to-t from-[#3F4D58]/90 to-transparent"></div>
                       {/* Logo (White Version for High Contrast) */}
                       <img src={LOGO_MAIN_NEG} alt="High Contrast" loading="lazy" decoding="async" className="w-full h-auto relative z-10" />
                    </div>
                    <p className="font-secondary text-sm text-gray-500 leading-relaxed mt-2">Utilizar degradês para aumentar o contraste entre a imagem de fundo e o logótipo.</p>
                  </div>

                   {/* Correct: Proportions */}
                   <div className="space-y-3 group">
                    <div className="w-full bg-gray-50 aspect-[4/3] rounded-xl border border-gray-100 flex items-center justify-center p-6 relative overflow-hidden">
                       {/* Subtle alignment lines to imply proportion */}
                       <div className="absolute inset-x-4 top-1/2 h-px bg-brand-green/10"></div>
                       <div className="absolute inset-y-4 left-1/2 w-px bg-brand-green/10"></div>
                       <img src={LOGO_MAIN} alt="Correct Proportions" loading="lazy" decoding="async" className="w-full h-auto relative z-10 transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <p className="font-secondary text-sm text-gray-500 leading-relaxed mt-2">Preservar a proporção original.</p>
                  </div>
                </div>
            </AnimatedBlock>

            {/* Don'ts (Incorreto) - VISUAL GRID */}
            <AnimatedBlock delay={100} className="bg-white p-8 rounded-2xl border border-red-100 shadow-[0_4px_20px_rgba(239,68,68,0.05)]">
              <h3 className="font-primary font-bold text-red-500 text-xl mb-8 flex items-center gap-2">
                <XCircle className="text-red-500" /> Incorreto
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                 {/* Shadow */}
                 <div className="space-y-3 group">
                   <div className="w-full bg-gray-50 aspect-[4/3] rounded-xl border border-gray-100 flex items-center justify-center p-6 overflow-hidden">
                      <img src={LOGO_MAIN} alt="Incorrect Shadow" loading="lazy" decoding="async" className="w-full h-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-105" />
                   </div>
                   <p className="font-secondary text-sm text-gray-500 leading-relaxed mt-2">Não adicionar sombras ou efeitos.</p>
                 </div>

                 {/* Color Change */}
                 <div className="space-y-3 group">
                   <div className="w-full bg-gray-50 aspect-[4/3] rounded-xl border border-gray-100 flex items-center justify-center p-6 overflow-hidden">
                      <img src={LOGO_MAIN} alt="Incorrect Color" loading="lazy" decoding="async" className="w-full h-auto hue-rotate-90 saturate-200 transition-transform duration-700 group-hover:scale-105" />
                   </div>
                   <p className="font-secondary text-sm text-gray-500 leading-relaxed mt-2">Não alterar as cores oficiais.</p>
                 </div>

                 {/* Outline (Simulated) */}
                 <div className="space-y-3 group">
                   <div className="w-full bg-gray-50 aspect-[4/3] rounded-xl border border-gray-100 flex items-center justify-center p-6 overflow-hidden">
                      {/* Using filter to simulate outline/messy look */}
                      <img src={LOGO_MAIN} alt="Incorrect Outline" loading="lazy" decoding="async" className="w-full h-auto drop-shadow-[1px_1px_0_black] drop-shadow-[-1px_-1px_0_black] transition-transform duration-700 group-hover:scale-105" />
                   </div>
                   <p className="font-secondary text-sm text-gray-500 leading-relaxed mt-2">Não adicionar contornos/outlines.</p>
                 </div>

                 {/* Distortion */}
                 <div className="space-y-3 group">
                   <div className="w-full bg-gray-50 aspect-[4/3] rounded-xl border border-gray-100 flex items-center justify-center p-6 overflow-hidden">
                      <img src={LOGO_MAIN} alt="Incorrect Distortion" loading="lazy" decoding="async" className="w-full h-auto transform rotate-6 scale-x-125 scale-y-75 origin-center transition-transform duration-700 group-hover:scale-105" />
                   </div>
                   <p className="font-secondary text-sm text-gray-500 leading-relaxed mt-2">Não inclinar, rodar ou distorcer.</p>
                 </div>
              </div>
            </AnimatedBlock>

          </div>
        </section>

        {/* SECTION 4: PALETA DE CORES */}
        <section id="cores" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-6">
             <div className="w-12 h-1 bg-brand-green rounded-full"></div>
            <h2 className="font-primary text-3xl font-bold text-brand-dark">Paleta de Cores</h2>
          </div>
          
          <div className="flex flex-col gap-3 items-start mb-6">
             <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full border border-gray-200 uppercase tracking-wide">
               Geral
             </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {BRAND_COLORS.map((color, idx) => (
              <ColorCard key={color.hex} color={color} delay={idx * 100} />
            ))}
          </div>

          {/* Social Media Palette Subsection */}
          <div className="mt-16 mb-10">
            <div className="flex flex-col items-start gap-3">
               <div className="flex items-center gap-4 border-b border-gray-100 pb-6 w-full">
                  <div className="w-12 h-1 bg-brand-green rounded-full"></div>
                  <h2 className="font-primary text-3xl font-bold text-brand-dark">Paleta de Cores Secundária</h2>
               </div>
               <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full border border-gray-200 uppercase tracking-wide">
                  Redes Sociais
               </span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {SOCIAL_COLORS.map((color, idx) => (
              <ColorCard key={color.hex} color={color} delay={idx * 100} />
            ))}
          </div>
        </section>

        {/* SECTION 5: GUIA VISUAL */}
        <section id="guia-visual" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-6">
             <div className="w-12 h-1 bg-brand-green rounded-full"></div>
            <h2 className="font-primary text-3xl font-bold text-brand-dark">Guia Visual</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Essência do Estilo",
                desc: "Imagens que transmitem naturalidade, serenidade e qualidade premium. Cenários discretos, tecidos suaves e atmosfera limpa, reforçando a elegância minimalista da marca.",
                icon: Sparkles,
                image: "https://res.cloudinary.com/dlmyres0i/image/upload/v1765551276/essenciadeestilo_vwoftx.png"
              },
              {
                title: "Paleta e Iluminação",
                desc: "Luz difusa e suave, tons quentes e neutros. Ambientes equilibrados com destaques visuais discretos. Fundos creme ou bege que reforçam conforto e bem-estar.",
                icon: Sun,
                image: "https://res.cloudinary.com/dlmyres0i/image/upload/v1765551276/paleta_p0eeqg.png"
              },
              {
                title: "Composição de Produto",
                desc: "Produtos inseridos em cenários premium, com materiais nobres como madeira clara ou pedra. Estética minimalista e foco total no packaging, sem elementos distrativos.",
                icon: FlaskConical,
                image: "https://res.cloudinary.com/dlmyres0i/image/upload/v1765551274/composi%C3%A7%C3%A3odeproduto_r5ecdh.png"
              },
              {
                title: "Representação Humana",
                desc: "Mulheres reais entre 35 e 65 anos, com expressões naturais e postura descontraída. Representações autênticas que transmitem confiança e bem-estar.",
                icon: Smile,
                image: "https://res.cloudinary.com/dlmyres0i/image/upload/v1765551277/representa%C3%A7aohumana_oyz420.png"
              },
              {
                title: "Ambientes e Lifestyle",
                desc: "Espaços interiores equilibrados, minimalistas e acolhedores. Materiais naturais, luz suave e harmonia visual que reforçam um estilo de vida calmo e consciente.",
                icon: Armchair,
                image: "https://res.cloudinary.com/dlmyres0i/image/upload/v1765551274/ambientes_getukt.png"
              },
              {
                title: "Texturas Naturais",
                desc: "Close-ups de pele, cabelo ou detalhes corporais com textura realista. Iluminação suave e aspeto natural, destacando vitalidade, cuidado e autenticidade.",
                icon: Fingerprint,
                image: "https://res.cloudinary.com/dlmyres0i/image/upload/v1765551278/texturasnaturais_xil7er.png"
              }
            ].map((item, idx) => (
              <AnimatedBlock key={idx} delay={idx * 100} className={`bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-green/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 group flex flex-col h-full`}>
                
                <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                     {/* Minimalist neutral black gradient overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-brand-green/10 text-brand-green">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-primary font-semibold text-lg mb-2 text-brand-dark">{item.title}</h3>
                  <p className="font-secondary text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>

              </AnimatedBlock>
            ))}
          </div>
        </section>

        {/* SECTION 7: TIPOGRAFIA */}
        <section id="tipografia" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-4 border-b border-gray-100 pb-6">
             <div className="w-12 h-1 bg-brand-green rounded-full"></div>
            <h2 className="font-primary text-3xl font-bold text-brand-dark">Tipografia</h2>
          </div>

          <div className="flex gap-3 mb-10">
              <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full border border-gray-200 uppercase tracking-wide">
                Print
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full border border-gray-200 uppercase tracking-wide">
                Redes Sociais
              </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Poppins Column */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-primary text-4xl font-bold text-brand-dark">Poppins</h3>
                  <div>
                    <span className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs rounded-full font-semibold">Principal</span>
                  </div>
                </div>
                <a 
                  href="https://fonts.google.com/specimen/Poppins" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-brand-blue hover:text-brand-blue hover:shadow-sm transition-all duration-300 group"
                >
                  <Download size={16} className="text-gray-400 group-hover:text-brand-blue" />
                  Google Fonts
                </a>
              </div>

              <AnimatedBlock className="space-y-8 bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                
                {/* Poppins: Títulos (Semibold) */}
                <div className="group">
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-primary font-semibold text-3xl text-brand-dark group-hover:text-brand-blue transition-colors">Aa</span>
                    <span className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">Semibold 600</span>
                  </div>
                  <p className="font-primary font-semibold text-brand-dark text-lg mb-3">
                    Títulos e destaques
                  </p>
                  <p className="font-primary font-semibold text-gray-400 text-sm tracking-wide break-words">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                    abcdefghijklmnopqrstuvwxyz<br/>
                    0123456789
                  </p>
                </div>

                <div className="h-px bg-gray-100"></div>

                {/* Poppins: Subtítulos (ExtraLight) */}
                <div className="group">
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-primary font-light text-3xl text-brand-dark group-hover:text-brand-blue transition-colors">Aa</span>
                    <span className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">ExtraLight 200</span>
                  </div>
                  <p className="font-primary font-light text-brand-dark text-lg mb-3">
                    Subtítulos elegantes
                  </p>
                  <p className="font-primary font-light text-gray-400 text-sm tracking-wide break-words">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                    abcdefghijklmnopqrstuvwxyz<br/>
                    0123456789
                  </p>
                </div>

                <div className="h-px bg-gray-100"></div>

                 {/* Poppins: Corpo (Regular) */}
                <div className="group">
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-primary font-normal text-3xl text-brand-dark group-hover:text-brand-blue transition-colors">Aa</span>
                    <span className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">Regular 400</span>
                  </div>
                  <p className="font-primary font-normal text-brand-dark text-lg mb-3">
                    Corpo de texto
                  </p>
                   <p className="font-primary font-normal text-gray-400 text-sm tracking-wide break-words">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                    abcdefghijklmnopqrstuvwxyz<br/>
                    0123456789
                  </p>
                </div>

              </AnimatedBlock>
            </div>

            {/* Montserrat Column */}
            <div className="space-y-6">
               <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-secondary text-4xl font-bold text-brand-dark">Montserrat</h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-brand-green/10 text-brand-green text-xs rounded-full font-semibold">Secundária</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full font-medium">Website</span>
                  </div>
                </div>
                 <a 
                  href="https://fonts.google.com/specimen/Montserrat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-brand-green hover:text-brand-green hover:shadow-sm transition-all duration-300 group"
                >
                  <Download size={16} className="text-gray-400 group-hover:text-brand-green" />
                  Google Fonts
                </a>
              </div>

              <AnimatedBlock delay={100} className="space-y-8 bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
                
                {/* Montserrat: Títulos (Semibold) */}
                <div className="group">
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-secondary font-semibold text-3xl text-brand-dark group-hover:text-brand-green transition-colors">Aa</span>
                    <span className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">Semibold 600</span>
                  </div>
                  <p className="font-secondary font-semibold text-brand-dark text-lg mb-3">
                    Títulos e destaques
                  </p>
                  <p className="font-secondary font-semibold text-gray-400 text-sm tracking-wide break-words">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                    abcdefghijklmnopqrstuvwxyz<br/>
                    0123456789
                  </p>
                </div>

                <div className="h-px bg-gray-100"></div>

                {/* Montserrat: Subtítulos (ExtraLight) */}
                <div className="group">
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-secondary font-light text-3xl text-brand-dark group-hover:text-brand-green transition-colors">Aa</span>
                    <span className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">ExtraLight 200</span>
                  </div>
                  <p className="font-secondary font-light text-brand-dark text-lg mb-3">
                    Subtítulos elegantes
                  </p>
                  <p className="font-secondary font-light text-gray-400 text-sm tracking-wide break-words">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                    abcdefghijklmnopqrstuvwxyz<br/>
                    0123456789
                  </p>
                </div>

                <div className="h-px bg-gray-100"></div>

                {/* Montserrat: Corpo (Regular) */}
                <div className="group">
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-secondary font-normal text-3xl text-brand-dark group-hover:text-brand-green transition-colors">Aa</span>
                    <span className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">Regular 400</span>
                  </div>
                  <p className="font-secondary font-normal text-brand-dark text-lg mb-3">
                    Corpo de texto
                  </p>
                  <p className="font-secondary font-normal text-gray-400 text-sm tracking-wide break-words">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                    abcdefghijklmnopqrstuvwxyz<br/>
                    0123456789
                  </p>
                </div>

              </AnimatedBlock>
            </div>
          </div>
        </section>

        {/* SECTION 8: TOM DE VOZ */}
        <section id="tom-de-voz" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-6">
             <div className="w-12 h-1 bg-brand-green rounded-full"></div>
            <h2 className="font-primary text-3xl font-bold text-brand-dark">Tom de Voz</h2>
          </div>

          <AnimatedBlock className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm mb-12 relative">
             <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue rounded-l-2xl"></div>
             <p className="font-secondary text-xl leading-relaxed text-gray-600 italic text-center max-w-4xl mx-auto">
              "A voz da MyFormula resulta do equilíbrio entre <span className="text-brand-dark font-semibold not-italic">rigor científico</span> e <span className="text-brand-green font-semibold not-italic">empatia humana</span>. Comunicamos de forma clara, credível e orientada a soluções, reconhecendo o que tantas mulheres vivem no dia a dia e oferecendo orientação com respeito e sensibilidade."
            </p>
          </AnimatedBlock>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {['Empático', 'Científico', 'Orientado a Soluções'].map((title, i) => (
              <ToneCard 
                key={i}
                title={title} 
                description={i === 0 
                  ? "Compreendemos sintomas, desafios e objetivos com atenção genuína. Comunicamos com proximidade e clareza, criando um espaço seguro onde cada pessoa se sente ouvida." 
                  : i === 1 
                  ? "Baseamos todas as recomendações em evidência, biomarcadores e dados clínicos atualizados. A ciência é o ponto de partida para decisões responsáveis e seguras."
                  : "Ajudamos a compreender o que o corpo precisa e identificamos o caminho para o bem-estar através de orientações práticas e personalizadas."
                } 
                icon={getToneIcon(i)}
                delay={i * 150}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Boas Práticas (Do's) Column */}
            <AnimatedBlock className="bg-white p-8 rounded-2xl border border-brand-green/30 shadow-[0_4px_20px_rgba(107,174,46,0.05)] h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-brand-green/10 rounded-xl text-brand-green">
                  <CheckSquare size={20} /> 
                </div>
                <h3 className="font-primary font-semibold text-xl text-brand-dark">Boas Práticas</h3>
              </div>

              {/* General Indications Block */}
              <div className="mb-8">
                <h4 className="font-primary font-medium text-sm text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Indicações Gerais</h4>
                <ul className="space-y-3">
                  {TONE_GUIDELINES.dos.general.map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0"></div>
                      <span className="font-secondary text-sm text-gray-600 leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

               {/* Examples Block */}
              <div className="bg-brand-green/5 rounded-xl border border-brand-green/10 p-6">
                <h4 className="font-primary font-medium text-sm text-brand-green uppercase tracking-wider mb-4">Exemplos</h4>
                <ul className="space-y-3">
                  {TONE_GUIDELINES.dos.examples.map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                       <CheckSquare size={16} className="text-brand-green shrink-0 mt-0.5" />
                      <span className="font-secondary text-sm text-gray-600 leading-relaxed italic">"{text}"</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedBlock>

            {/* Más Práticas (Don'ts) Column */}
            <AnimatedBlock delay={100} className="bg-white p-8 rounded-2xl border border-red-100 shadow-[0_4px_20px_rgba(239,68,68,0.05)] h-full">
               <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-red-50 rounded-xl text-red-500">
                  <XSquare size={20} /> 
                </div>
                <h3 className="font-primary font-semibold text-xl text-brand-dark">Más Práticas</h3>
              </div>
              
               {/* General Indications Block */}
              <div className="mb-8">
                <h4 className="font-primary font-medium text-sm text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Indicações Gerais</h4>
                <ul className="space-y-3">
                  {TONE_GUIDELINES.donts.general.map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></div>
                      <span className="font-secondary text-sm text-gray-600 leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

               {/* Examples Block */}
              <div className="bg-red-50/50 rounded-xl border border-red-100 p-6">
                <h4 className="font-primary font-medium text-sm text-red-500 uppercase tracking-wider mb-4">Exemplos</h4>
                <ul className="space-y-3">
                  {TONE_GUIDELINES.donts.examples.map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                       <XSquare size={16} className="text-red-500 shrink-0 mt-0.5" />
                      <span className="font-secondary text-sm text-gray-600 leading-relaxed italic">"{text}"</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedBlock>

          </div>
        </section>

        {/* SECTION 9: REDES SOCIAIS */}
        <section id="social" className="scroll-mt-32 pb-24">
          <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-6">
             <div className="w-12 h-1 bg-brand-green rounded-full"></div>
            <h2 className="font-primary text-3xl font-bold text-brand-dark">Redes Sociais</h2>
          </div>

          <AnimatedBlock className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            
            <div className="flex-1 relative z-10">
              <p className="font-secondary text-lg text-gray-500 leading-relaxed mb-8">
                Acompanhe a MyFormula nas redes sociais e mantenha-se atualizada sobre novidades, conteúdos educativos e oportunidades exclusivas.
              </p>
              
              <div className="flex flex-col gap-4">
                {[
                  { name: 'Website Oficial', icon: Globe, url: 'https://www.myformula.pt/' },
                  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/myformula_suplementos/' },
                  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61567710386565' }
                ].map((item) => (
                  <a 
                    key={item.name}
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-green/50 hover:bg-white hover:shadow-md group transition-all duration-300"
                  >
                    <div className="flex items-center gap-5">
                      <div className="p-2.5 bg-white rounded-xl text-brand-dark shadow-sm group-hover:text-brand-green transition-colors">
                        <item.icon size={22} />
                      </div>
                      <span className="font-semibold font-primary text-brand-dark">{item.name}</span>
                    </div>
                    <ArrowRight size={20} className="text-gray-300 group-hover:text-brand-green group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center relative z-10">
              {/* Premium Floating Icon Container */}
              <div className="relative">
                 {/* Decorative background glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-green/20 rounded-full blur-3xl"></div>
                 
                 {/* Floating Container */}
                 <button 
                   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                   className="w-32 h-32 bg-white rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] border border-gray-50 flex items-center justify-center p-6 animate-float relative z-10 cursor-pointer hover:scale-105 transition-transform duration-300"
                   aria-label="Voltar ao topo"
                 >
                   {/* Original Icon (No Filters) */}
                   <img src={LOGO_ICON} alt="MF Icon" className="w-full h-full object-contain drop-shadow-sm" />
                 </button>
              </div>
            </div>
          </AnimatedBlock>
        </section>

      </main>
    </div>
  );
}

export default App;