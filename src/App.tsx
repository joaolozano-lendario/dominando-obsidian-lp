import { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Check,
  ArrowRight,
  Play,
  Zap,
  Link2,
  Search,
  Shield,
  BookOpen,
  Video,
  FileText,
  MessageCircle,
  Quote,
  X,
  Menu,
  Gift,
  Download,
  Library,
  Sparkles,
  PenTool,
  Briefcase,
  GraduationCap,
  Mic,
  Building,
  Camera,
  Wrench,
  Rocket,
  Target
} from 'lucide-react';

// ════════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ════════════════════════════════════════════════════════════════════════════

const CHECKOUT_URL = 'https://checkout.pagtrust.com.br/ckd68e3e83?funnel=fn2d6de421&ra=false';

// Track purchase intent with Meta Pixel
const trackInitiateCheckout = () => {
  if (typeof window !== 'undefined' && (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq) {
    (window as typeof window & { fbq: (...args: unknown[]) => void }).fbq('track', 'InitiateCheckout', {
      content_name: 'Dominando o Obsidian',
      content_category: 'Curso',
      value: 288.00,
      currency: 'BRL'
    });
  }
};

const handleCheckout = () => {
  trackInitiateCheckout();
  window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
};

// ════════════════════════════════════════════════════════════════════════════
// HOOKS
// ════════════════════════════════════════════════════════════════════════════

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// ════════════════════════════════════════════════════════════════════════════
// BRAND COMPONENTS - Academia Lendár[IA]
// ════════════════════════════════════════════════════════════════════════════

// Diamond Logo - Logo oficial principal
function DiamondLogo({ className = "w-12 h-12", fill = "#000000" }: { className?: string; fill?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={fill} d="M247.258 18.749A63.908 63.908 0 0 0 202.029 0h-84.091a63.906 63.906 0 0 0-45.229 18.749L18.748 72.596C6.749 84.596 0 100.961 0 117.944v84.095c0 16.866 6.75 33.232 18.748 45.231l53.978 53.981A63.907 63.907 0 0 0 117.954 320h84.092a63.908 63.908 0 0 0 45.228-18.749l53.978-53.981A63.91 63.91 0 0 0 320 202.039v-84.095a63.913 63.913 0 0 0-18.748-45.231l-53.978-53.98-.016.016Zm3.749 45.964c2 0 3.117.25 3.866.367.867 3.366 1 16-10.865 39.865-5.5 11.116-12.749 22.732-21.248 34.481a410.027 410.027 0 0 0-20.364-21.865c-7.25-7.25-14.499-14-21.865-20.366 7.616-5.5 15.249-10.5 22.731-14.866 27.231-15.866 42.479-17.499 47.729-17.499v-.117h.016Zm-44.362 95.212c-6.999 8.25-14.498 16.366-22.364 24.365-7.999 8-16.115 15.5-24.364 22.366-8.249-7-16.365-14.366-24.364-22.366-8-7.999-15.499-16.115-22.365-24.365 6.999-8.25 14.499-16.366 22.365-24.365 7.865-8 16.115-15.5 24.364-22.366 8.249 7 16.365 14.366 24.364 22.366 7.999 7.999 15.498 16.115 22.364 24.365ZM90.707 36.865c7.25-7.25 16.865-11.25 27.114-11.25h84.091c10.249 0 19.865 4 27.114 11.25l4.616 4.616c-20.997 5.117-46.978 18.866-73.842 39.115-26.864-20.25-52.844-33.865-73.842-39.115l4.616-4.616h.133ZM65.093 65.097c.617-.117 1.867-.367 3.867-.367 15.865 0 38.612 12.25 47.728 17.5 7.499 4.365 15.115 9.365 22.731 14.865-7.366 6.366-14.615 13.116-21.865 20.366a410.071 410.071 0 0 0-20.364 21.865c-8.5-11.749-15.748-23.365-21.248-34.481C64.077 80.979 64.193 68.363 65.077 64.98v.117h.016Zm-28.23 164.058c-7.25-7.25-11.249-16.866-11.249-27.116v-84.095c0-10.25 4-19.866 11.249-27.115l4.616-4.617c5.116 20.999 18.865 46.981 38.98 73.846-20.249 26.866-33.864 52.848-38.98 73.847l-4.616-4.617v-.133Zm31.98 25.982c-2 0-3.117-.25-3.866-.367-.867-3.366-1-15.999 10.865-39.865 5.5-11.116 12.749-22.732 21.248-34.481a410.071 410.071 0 0 0 20.364 21.865c7.25 7.25 14.499 14 21.865 20.366-7.616 5.5-15.249 10.5-22.731 14.866-27.23 15.866-42.48 17.499-47.728 17.499v.117h-.017Zm160.3 27.865c-7.249 7.25-16.865 11.249-27.114 11.249h-84.091c-10.249 0-19.865-3.999-27.114-11.249l-4.616-4.617c20.997-5.116 46.978-18.865 73.842-39.114 26.864 20.249 52.845 33.865 73.842 39.114l-4.616 4.617h-.133Zm25.614-28.232c-.617.117-1.867.367-3.866.367-15.865 0-38.613-12.25-47.729-17.499-7.499-4.367-15.115-9.367-22.731-14.866a410.464 410.464 0 0 0 21.865-20.366 410.027 410.027 0 0 0 20.364-21.865c8.499 11.749 15.748 23.365 21.248 34.481 11.865 23.866 11.749 36.482 10.865 39.865v-.117h-.016Zm39.479-52.864c0 10.25-4 19.866-11.249 27.115l-4.616 4.617c-5.116-20.999-18.865-46.981-38.979-73.846 20.248-26.866 33.863-52.848 38.979-73.847l4.616 4.617c7.249 7.25 11.249 16.866 11.249 27.115v84.229Z"/>
    </svg>
  );
}

// Infinity Logo - Assinatura visual
function InfinityLogo({ className = "w-24 h-12", fill = "#000000" }: { className?: string; fill?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 184" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M393.3 57.2C388.7 45.8 381.9 35.6 373.2 26.9C364.4 18.2 354.2 11.4 342.9 6.8C331.8 2.3 320.2 0 308.3 0C296.4 0 284.8 2.3 273.8 6.7C262.4 11.3 252.2 18.1 243.5 26.8L200 70.3L156.5 26.8C147.7 18.1 137.5 11.3 126.2 6.7C115.2 2.3 103.6 0 91.7 0C79.8 0 68.2 2.3 57.2 6.7C45.8 11.3 35.6 18.1 26.9 26.8C18.2 35.6 11.4 45.8 6.8 57.1C2.3 68.2 0 79.8 0 91.7C0 103.6 2.3 115.2 6.7 126.2C11.3 137.6 18.1 147.8 26.8 156.5C35.5 165.2 45.8 172 57.1 176.6C68.1 181.1 79.7 183.3 91.6 183.3C103.5 183.3 115.1 181 126.1 176.6C137.5 172 147.7 165.2 156.4 156.5L199.9 113L210.4 123.5L243.4 156.5C252.2 165.2 262.4 172 273.7 176.6C284.7 181.1 296.3 183.3 308.2 183.3C320.1 183.3 331.7 181 342.7 176.6C354.1 172 364.3 165.2 373 156.5C381.7 147.7 388.5 137.5 393.1 126.2C397.6 115.2 399.8 103.6 399.8 91.7C399.8 79.8 397.5 68.2 393.1 57.2H393.3ZM369.7 91.7C369.7 108.1 363.3 123.6 351.7 135.2C340.1 146.8 324.7 153.2 308.2 153.2C291.7 153.2 276.3 146.8 264.7 135.2L221.2 91.7L264.7 48.2C276.3 36.6 291.7 30.2 308.2 30.2C324.7 30.2 340.1 36.6 351.7 48.2C363.3 59.8 369.7 75.2 369.7 91.7ZM178.6 91.7L135.1 135.2C123.5 146.8 108.1 153.2 91.6 153.2C75.2 153.2 59.7 146.8 48.1 135.2C36.5 123.6 30.1 108.2 30.1 91.7C30.1 75.2 36.5 59.8 48.1 48.2C59.7 36.6 75.1 30.2 91.6 30.2C108 30.2 123.5 36.6 135.1 48.2L178.5 91.6V91.7H178.6Z" fill={fill}/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="400" height="183.4" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// UI COMPONENTS
// ════════════════════════════════════════════════════════════════════════════

// Section wrapper with animation
function Section({
  children,
  id,
  className = '',
  dark = false
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}) {
  const { ref, isInView } = useInView(0.15);

  return (
    <section
      ref={ref}
      id={id}
      className={`py-24 px-6 ${dark ? 'bg-black text-white' : 'bg-white text-black'} ${className}`}
    >
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {children}
      </div>
    </section>
  );
}


// Feature card
function FeatureCard({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#F8F8F8] p-6 rounded-lg border border-[#E8E8E8] hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 border border-[#E8E8E8]">
        <Icon className="w-6 h-6 text-black" />
      </div>
      <h3 className="font-semibold text-lg text-black mb-2">{title}</h3>
      <p className="text-[#484848] leading-relaxed">{description}</p>
    </div>
  );
}

// Module card
function ModuleCard({
  number,
  title,
  description,
  lessons
}: {
  number: string;
  title: string;
  description: string;
  lessons: number;
}) {
  return (
    <div className="bg-white border border-[#E8E8E8] rounded-lg p-6 hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-4">
        <span className="text-[#888888] font-bold text-3xl font-mono">{number}</span>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-black mb-2">{title}</h3>
          <p className="text-[#484848] text-sm leading-relaxed mb-3">{description}</p>
          <span className="text-[#646464] text-sm font-medium">{lessons} aulas</span>
        </div>
      </div>
    </div>
  );
}


// FAQ Item
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#E8E8E8] last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="font-semibold text-black pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#646464] transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-[#484848] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// MAIN APP
// ════════════════════════════════════════════════════════════════════════════

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroStage, setHeroStage] = useState(0);

  // Hero reveal sequence - 4 perguntas que aparecem e somem + headline
  useEffect(() => {
    const timings = [2000, 2500, 2500, 2500, 2500];
    let timeout: ReturnType<typeof setTimeout>;

    const advance = (stage: number) => {
      if (stage < 5) {
        timeout = setTimeout(() => {
          setHeroStage(stage + 1);
          advance(stage + 1);
        }, timings[stage]);
      }
    };

    advance(0);
    return () => clearTimeout(timeout);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans">
      {/* ════════════════════════════════════════════════════════════
          HEADER
          ════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8E8E8]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <DiamondLogo className="w-8 h-8" fill="#000000" />
            <span className="font-semibold text-black hidden sm:block">Academia Lendár[IA]</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('problema')} className="text-[#484848] hover:text-black transition-colors text-sm">O Problema</button>
            <button onClick={() => scrollToSection('solucao')} className="text-[#484848] hover:text-black transition-colors text-sm">A Solução</button>
            <button onClick={() => scrollToSection('modulos')} className="text-[#484848] hover:text-black transition-colors text-sm">Conteúdo</button>
            <button
                  onClick={handleCheckout}
                  className="bg-[#7C3AED] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#6D28D9] transition-colors"
                  aria-label="Ir para checkout"
                >
                  Quero Clareza
                </button>
          </nav>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 p-6">
            <div className="flex justify-between items-center mb-8">
              <DiamondLogo className="w-8 h-8" fill="#000000" />
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              <button onClick={() => scrollToSection('problema')} className="text-xl font-medium text-left">O Problema</button>
              <button onClick={() => scrollToSection('solucao')} className="text-xl font-medium text-left">A Solução</button>
              <button onClick={() => scrollToSection('modulos')} className="text-xl font-medium text-left">Conteúdo</button>
              <button
                  onClick={handleCheckout}
                  className="bg-[#7C3AED] text-white py-4 rounded-lg text-lg font-semibold mt-4"
                  aria-label="Ir para checkout"
                >
                  Quero Clareza
                </button>
            </nav>
          </div>
        )}
      </header>

      {/* ════════════════════════════════════════════════════════════
          HERO - DEDO NA FERIDA - Perguntas que somem (Variante C Style)
          ════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 pt-32 relative bg-white">
        {/* Subtle grid - Lendária style */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Perguntas - aparecem uma de cada vez e somem */}
          <div className={`transition-all duration-1000 ${heroStage >= 1 && heroStage < 2 ? 'opacity-100' : 'opacity-0'}`}>
            {heroStage >= 1 && heroStage < 2 && (
              <p className="text-2xl md:text-4xl text-gray-700 leading-relaxed">
                Quantos projetos você começou esse ano?
              </p>
            )}
          </div>

          <div className={`transition-all duration-1000 ${heroStage >= 2 && heroStage < 3 ? 'opacity-100' : 'opacity-0'}`}>
            {heroStage >= 2 && heroStage < 3 && (
              <p className="text-2xl md:text-4xl text-gray-600 leading-relaxed">
                Quantos você terminou?
              </p>
            )}
          </div>

          <div className={`transition-all duration-1000 ${heroStage >= 3 && heroStage < 4 ? 'opacity-100' : 'opacity-0'}`}>
            {heroStage >= 3 && heroStage < 4 && (
              <p className="text-2xl md:text-4xl text-gray-500 leading-relaxed">
                Qual foi a última coisa que você aprendeu?
              </p>
            )}
          </div>

          <div className={`transition-all duration-1000 ${heroStage >= 4 && heroStage < 5 ? 'opacity-100' : 'opacity-0'}`}>
            {heroStage >= 4 && heroStage < 5 && (
              <p className="text-2xl md:text-4xl text-black leading-relaxed">
                Consegue lembrar <span className="font-bold">agora</span>?
              </p>
            )}
          </div>

          {/* Headline - aparece no final */}
          <div className={`transition-all duration-1000 ${heroStage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {heroStage >= 5 && (
              <>
                <DiamondLogo className="w-16 h-16 mx-auto mb-10" fill="#000" />

                {/* Product naming */}
                <p className="text-xs text-[#7C3AED] uppercase tracking-[0.2em] mb-4">
                  Segundo Cérebro com IA
                </p>

                {/* Main headline - NOVA NARRATIVA */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight mb-6">
                  Hackeie seu cérebro
                  <br />
                  <span className="text-[#7C3AED]">com Inteligência Artificial.</span>
                </h1>

                <p className="text-xl md:text-2xl text-[#484848] mb-12 max-w-2xl mx-auto">
                  Você não precisa aprender mais.<br />
                  <strong className="text-black">Precisa acessar o que já sabe.</strong>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <button
                    onClick={handleCheckout}
                    className="group bg-black hover:bg-gray-900 text-white font-semibold text-lg px-10 py-5 rounded-xl transition-all duration-200 inline-flex items-center gap-3"
                    aria-label="Ir para checkout - Quero Hackear Meu Cérebro"
                  >
                    Quero Hackear Meu Cérebro
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>
                  <button
                    onClick={() => scrollToSection('problema')}
                    className="border border-gray-300 text-black px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:border-gray-400 transition-colors"
                  >
                    <Play className="w-5 h-5" />
                    Ver o sistema em ação
                  </button>
                </div>

                {/* Mini social proof */}
                <p className="text-sm text-[#646464] mb-8">
                  Método usado por Alan Nicolas para gerenciar 10.000+ notas
                </p>

                <ChevronDown className="w-8 h-8 mx-auto text-gray-400 animate-bounce" />
              </>
            )}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          POR QUE ISSO ACONTECE - Direto ao ponto
          ════════════════════════════════════════════════════════════ */}
      <Section id="problema">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-[#7C3AED] font-medium mb-4">
            Isso não é falha de memória.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            É falha de arquitetura.
          </h2>

          <div className="text-left space-y-6 mb-12">
            <p className="text-lg text-[#484848]">
              Seu cérebro não funciona em pastas. Funciona em <strong className="text-black">conexões</strong>.
            </p>
            <p className="text-lg text-[#484848]">
              Quando você salva algo em "Trabalho &gt; Projetos &gt; 2024", a única forma de achar é lembrar esse caminho exato.
            </p>
            <p className="text-lg text-black font-medium">
              É por isso que você lembra piadas de 20 anos atrás mas esquece o framework que estudou semana passada.
            </p>
          </div>

          {/* Dado Ebbinghaus - direto */}
          <div className="bg-black text-white rounded-lg p-8">
            <p className="text-5xl md:text-6xl font-bold mb-2">70%</p>
            <p className="text-[#888888] text-lg">
              do que você aprende é esquecido em 24 horas.
            </p>
            <p className="text-white font-medium mt-4">
              A não ser que você tenha um sistema de recuperação.
            </p>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════
          SEU INVENTÁRIO INVISÍVEL
          ════════════════════════════════════════════════════════════ */}
      <Section className="bg-[#F8F8F8]">
        <div className="text-center mb-16">
          <span className="text-[#646464] text-sm font-medium tracking-widest uppercase mb-4 block">O inventário invisível</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Você não precisa aprender mais.
          </h2>
          <p className="text-xl text-[#484848] max-w-2xl mx-auto">
            Precisa <strong className="text-black">acessar</strong> o que já sabe.
          </p>
        </div>

        {/* O inventário */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 border border-[#E8E8E8]">
            <h3 className="font-semibold text-xl mb-6 text-black">O que você acumulou:</h3>
            <div className="space-y-4">
              {[
                { item: 'Artigos salvos', example: '500+' },
                { item: 'Cursos comprados', example: '30+' },
                { item: 'Highlights no Kindle', example: '1.000+' },
                { item: 'Anos de experiência', example: '10+' }
              ].map(({ item, example }, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-[#F8F8F8] rounded-lg">
                  <span className="text-[#242424]">{item}</span>
                  <span className="text-[#7C3AED] font-semibold">{example}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black text-white rounded-lg p-8">
            <h3 className="font-semibold text-xl mb-6">Mas quando você precisa...</h3>
            <div className="space-y-4 text-[#888888]">
              <p className="italic">"Eu sei que salvei um artigo sobre isso..."</p>
              <p className="italic">"Tinha um framework perfeito, onde foi parar?"</p>
              <p className="italic">"Já li sobre isso em algum livro..."</p>
              <p className="text-white font-medium pt-4 text-lg">47 abas abertas. Nada encontrado.</p>
            </div>
          </div>
        </div>

        {/* Visual 92% simplificado */}
        <div className="bg-white rounded-lg p-8 border border-[#E8E8E8] max-w-xl mx-auto">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm text-[#646464] mb-2">
                <span>O que você SABE</span>
                <span className="font-semibold text-black">100%</span>
              </div>
              <div className="h-3 bg-[#E8E8E8] rounded-full overflow-hidden">
                <div className="h-full w-full bg-black rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-[#646464] mb-2">
                <span>O que você ACESSA</span>
                <span className="font-semibold text-[#7C3AED]">~8%</span>
              </div>
              <div className="h-3 bg-[#E8E8E8] rounded-full overflow-hidden">
                <div className="h-full w-[8%] bg-[#7C3AED] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════
          REFRAME - O Espelho da Dor (estilo variante-c)
          ════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-[#7C3AED] uppercase tracking-[0.3em] mb-8">
            Isso soa familiar?
          </p>

          <div className="space-y-6">
            {[
              { q: 'Você já leu 50 livros este ano.', a: 'Quantos você consegue resumir agora?' },
              { q: 'Você salvou 200 links "pra ver depois".', a: 'Quantos você viu?' },
              { q: 'Você tem 47 abas abertas agora mesmo.', a: 'Cada uma é uma decisão que você não tomou.' },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
                <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl text-white font-medium">{item.q}</p>
                  <p className="text-gray-400 mt-1">{item.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-3xl md:text-4xl text-white font-bold leading-tight">
              Conhecimento que você não consegue acessar
              <br />
              <span className="text-[#7C3AED]">é conhecimento que você não tem.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          O REFRAME - Sistema > Disciplina (estilo variante-c)
          ════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: The false belief */}
            <div>
              <p className="text-xs text-red-500 uppercase tracking-[0.2em] mb-4">
                O que você acha que é o problema
              </p>
              <ul className="space-y-3 text-gray-600">
                {['"Falta de disciplina"', '"Não tenho tempo"', '"Preciso de mais força de vontade"', '"Sou desorganizado por natureza"'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-red-400">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: The truth */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#7C3AED]/20">
              <p className="text-xs text-[#7C3AED] uppercase tracking-[0.2em] mb-4">
                O problema real
              </p>
              <p className="text-2xl text-black font-bold leading-tight">
                Você não precisa aprender mais.
              </p>
              <p className="text-2xl text-[#7C3AED] font-bold mt-2">
                Precisa acessar o que já sabe.
              </p>
              <p className="text-gray-600 mt-4">
                Você está usando seu cérebro como HD externo, quando deveria usar como processador.
              </p>
            </div>
          </div>

          {/* The statement */}
          <div className="mt-20 text-center">
            <p className="text-4xl md:text-6xl font-bold text-black">
              Sistema <span className="text-[#7C3AED]">&gt;</span> Disciplina
            </p>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Disciplina falha nos dias ruins. Sistema funciona sempre.
              <br />
              É como tirar 50kg das costas e colocar numa mochila com rodinhas.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          MECANISMO - Pensamento em Rede
          ════════════════════════════════════════════════════════════ */}
      <Section id="solucao" className="bg-white">
        <div className="text-center mb-16">
          <span className="text-[#646464] text-sm font-medium tracking-widest uppercase mb-4 block">O Mecanismo</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Pensamento em rede.
          </h2>
          <p className="text-xl text-[#484848] max-w-2xl mx-auto">
            Seu cérebro não pensa em pastas. Pensa em <strong className="text-black">conexões</strong>.
          </p>
        </div>

        {/* Video do Obsidian */}
        <div className="mb-16 rounded-lg overflow-hidden border border-[#E8E8E8] bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full"
            aria-label="Demonstração do Obsidian Graph View"
          >
            <source src="/Graficos-Obsidian-1-1-1.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Por que pastas não funcionam:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#E8E8E8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-[#646464]" />
                </div>
                <p className="text-[#484848]">Hierarquia de pastas funciona para 10 arquivos. Quebra com 1.000.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#E8E8E8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-[#646464]" />
                </div>
                <p className="text-[#484848]">"Onde eu salvo isso?" é a pergunta que mata a captura.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#E8E8E8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-[#646464]" />
                </div>
                <p className="text-[#484848]">Ideias conectadas ficam isoladas em categorias artificiais.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 border border-[#E8E8E8]">
            <h3 className="text-2xl font-bold mb-6">Por que Obsidian funciona:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-[#242424]"><strong>Links bidirecionais</strong> — cada nota pode conectar a qualquer outra</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-[#242424]"><strong>Graph View</strong> — visualize seu conhecimento conectado</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-[#242424]"><strong>Busca instantânea</strong> — encontre qualquer coisa em segundos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={Search}
            title="Acesse em segundos"
            description="Qualquer ideia, insight ou referência. Não importa quando você salvou."
          />
          <FeatureCard
            icon={Link2}
            title="Conexões emergentes"
            description="Descubra relações entre ideias que você nunca teria visto em pastas isoladas."
          />
          <FeatureCard
            icon={Zap}
            title="Amplificado por IA"
            description="Converse com seu próprio conhecimento. Pergunte e receba respostas do seu vault."
          />
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════
          PROVA - Alan Nicolas (estilo variante-c)
          ════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs text-[#7C3AED] uppercase tracking-[0.2em] mb-4">
                Quem criou o método
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Alan Nicolas
              </h2>
              <p className="text-gray-400 text-lg mb-4">
                Empresário, mentor e criador da Comunidade Lendária. Em 2021, largou tudo mesmo tendo conquistado o que muitos sonham — porque sua mente era um caos.
              </p>
              <p className="text-gray-400 text-lg mb-4">
                "Eu tinha lido mais de 100 livros. Feito dezenas de cursos. Salvado milhares de links. Mas quando eu precisava de algo específico... eu não conseguia achar."
              </p>
              <p className="text-white text-lg font-medium">
                Foi quando ele construiu seu Segundo Cérebro no Obsidian.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="space-y-8">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Notas no vault</p>
                  <p className="text-5xl font-bold text-white">10.000+</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Anos de conhecimento</p>
                  <p className="text-5xl font-bold text-white">10+</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Tempo para encontrar qualquer coisa</p>
                  <p className="text-5xl font-bold text-[#7C3AED]">&lt;5s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PARA QUEM É - IDENTIFICATION PLAY (Schwartz)
          ════════════════════════════════════════════════════════════ */}
      <Section className="bg-[#F8F8F8]">
        <div className="text-center mb-12">
          <span className="text-[#646464] text-sm font-medium tracking-widest uppercase mb-4 block">Isso é para você?</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Você é um colecionador de conhecimento
          </h2>
        </div>

        {/* Identification Play - Schwartz style */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-lg p-8 border border-[#E8E8E8]">
            <p className="text-lg text-[#484848] mb-6">Se você já:</p>
            <div className="space-y-4">
              {[
                'Comprou curso que nunca terminou porque "não tinha tempo"',
                'Salvou 200+ bookmarks que nunca mais abriu',
                'Perdeu oportunidade porque não lembrou da referência perfeita',
                'Sentiu que sua cabeça é mais bagunçada que sua mesa',
                'Tentou Notion, Evernote ou outro app... e desistiu'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                  <span className="text-[#242424]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-[#E8E8E8]">
              <p className="text-lg text-black font-medium text-center">
                ...você não precisa de mais disciplina.<br />
                <span className="text-[#7C3AED]">Precisa de arquitetura certa.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Profissões - grid compacto */}
        <div className="text-center mb-6">
          <p className="text-sm text-[#646464]">Ideal para profissionais que vivem de conhecimento:</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { icon: PenTool, label: 'Copywriters' },
            { icon: Briefcase, label: 'Gestores' },
            { icon: GraduationCap, label: 'Estudantes' },
            { icon: Mic, label: 'Mentores' },
            { icon: Building, label: 'Empresários' },
            { icon: Camera, label: 'Criadores' },
            { icon: BookOpen, label: 'Professores' },
            { icon: Wrench, label: 'Consultores' },
            { icon: Rocket, label: 'Produtores' },
            { icon: Target, label: 'Estrategistas' }
          ].map(({ icon: Icon, label }, i) => (
            <div key={i} className="bg-white rounded-lg p-3 border border-[#E8E8E8] text-center">
              <div className="flex items-center justify-center gap-2">
                <Icon className="w-4 h-4 text-[#646464]" />
                <p className="text-sm text-[#242424]">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════
          COMO FUNCIONA - 4 Passos
          ════════════════════════════════════════════════════════════ */}
      <Section>
        <div className="text-center mb-16">
          <span className="text-[#646464] text-sm font-medium tracking-widest uppercase mb-4 block">Como Funciona</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            4 passos para clareza total
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Anote', description: 'Organize ideias, compromissos e informações em um só lugar' },
            { step: '02', title: 'Conecte', description: 'Faça conexões naturais entre notas com links bidirecionais' },
            { step: '03', title: 'Crie', description: 'Crie projetos incríveis a partir da sua rede de conhecimento' },
            { step: '04', title: 'E pronto!', description: 'Use o Obsidian, aposente o resto. Sem mais 47 abas abertas' }
          ].map(({ step, title, description }, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step}
              </div>
              <h3 className="font-bold text-xl mb-2">{title}</h3>
              <p className="text-[#484848] text-sm">{description}</p>
            </div>
          ))}
        </div>

        {/* Kit Starter highlight */}
        <div className="mt-16 bg-[#F8F8F8] rounded-lg p-8 md:p-12 border border-[#E8E8E8] text-center">
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Comece em 30 segundos
          </div>
          <h3 className="text-2xl font-bold mb-4">Kit Starter Obsidian</h3>
          <p className="text-[#484848] max-w-xl mx-auto">
            Seu Segundo Cérebro já vem configurado. Baixar, dezipar e começar.
            Sem precisar construir do zero — o sistema está pronto.
          </p>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════
          BENEFÍCIOS + PROVA SOCIAL (estilo variante-c)
          ════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs text-gray-500 uppercase tracking-[0.3em] mb-4">
              Tudo isso em 30 segundos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Você começa com TUDO configurado
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Basta baixar o Kit Starter, abrir no sistema e pronto.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Dobre sua produtividade', desc: 'Consulte desde sua agenda até seus projetos mais ambiciosos.' },
              { icon: Search, title: 'Clone seu cérebro', desc: 'Com IA integrada, seu Segundo Cérebro se torna uma versão sua melhorada.' },
              { icon: Download, title: 'Cérebros Lendários', desc: 'Faça download de como mentes brilhantes pensam e organizam.' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <item.icon className="w-8 h-8 text-[#7C3AED] mb-4" />
                <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 p-8 bg-black rounded-2xl text-center">
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed italic">
              "Eu tinha 10 anos de anotações espalhadas. Em um fim de semana, estava tudo conectado.
              <br />
              <span className="text-[#7C3AED] font-semibold not-italic">Pela primeira vez, eu conseguia pensar com clareza."</span>
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center">
                <span className="text-sm font-bold text-white">AN</span>
              </div>
              <div className="text-left">
                <p className="text-white font-medium">Alan Nicolas</p>
                <p className="text-sm text-gray-500">10 anos de notas. Agora conectadas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SOLUÇÃO - O Curso
          ════════════════════════════════════════════════════════════ */}
      <Section id="modulos">
        <div className="text-center mb-16">
          <span className="text-[#646464] text-sm font-medium tracking-widest uppercase mb-4 block">O Curso</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Dominando o Obsidian
          </h2>
          <p className="text-xl text-[#484848] max-w-2xl mx-auto">
            24 aulas divididas em 6 módulos — do zero ao domínio.
          </p>
        </div>

        {/* Course modules */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <ModuleCard
            number="01"
            title="Fundamentos do Segundo Cérebro"
            description="Entenda os conceitos por trás do sistema. Por que funciona e como aplicar na sua realidade."
            lessons={4}
          />
          <ModuleCard
            number="02"
            title="Setup Completo"
            description="Instalação e configuração do Obsidian em todas as plataformas. Desktop, mobile, sincronização."
            lessons={4}
          />
          <ModuleCard
            number="03"
            title="Estrutura de Notas"
            description="Tipos de notas, quando usar cada uma, markdown essencial, templates prontos."
            lessons={4}
          />
          <ModuleCard
            number="04"
            title="Links e Conexões"
            description="O poder dos links bidirecionais. Graph View. Como criar uma rede de conhecimento."
            lessons={4}
          />
          <ModuleCard
            number="05"
            title="Plugins Essenciais"
            description="Os plugins que transformam o Obsidian em uma máquina de produtividade."
            lessons={4}
          />
          <ModuleCard
            number="06"
            title="Obsidian + IA"
            description="Como usar IA para conversar com seu conhecimento e amplificar seu Segundo Cérebro."
            lessons={4}
          />
        </div>

        {/* What's included */}
        <div className="bg-[#F8F8F8] rounded-lg p-8 md:p-12 border border-[#E8E8E8]">
          <h3 className="text-2xl font-bold text-center mb-10">O que você vai receber</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 border border-[#E8E8E8]">
                <Video className="w-8 h-8 text-black" />
              </div>
              <p className="font-semibold text-black">24 Aulas</p>
              <p className="text-[#646464] text-sm">6 módulos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 border border-[#E8E8E8]">
                <FileText className="w-8 h-8 text-black" />
              </div>
              <p className="font-semibold text-black">2 Anos</p>
              <p className="text-[#646464] text-sm">de acesso</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 border border-[#E8E8E8]">
                <MessageCircle className="w-8 h-8 text-black" />
              </div>
              <p className="font-semibold text-black">Suporte</p>
              <p className="text-[#646464] text-sm">Especializado</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 border border-[#E8E8E8]">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <p className="font-semibold text-black">Qualidade</p>
              <p className="text-[#646464] text-sm">de cinema</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 border border-[#E8E8E8]">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <p className="font-semibold text-black">Garantia</p>
              <p className="text-[#646464] text-sm">7 dias</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════
          PROVA SOCIAL - ESPECÍFICA (Hormozi + Schwartz)
          ════════════════════════════════════════════════════════════ */}
      <Section className="bg-[#F8F8F8]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Resultados reais de alunos
          </h2>
          <p className="text-[#646464]">Não "gostei do curso". Números concretos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
            <Quote className="w-8 h-8 text-[#D8D8D8] mb-4" />
            <p className="text-[#242424] leading-relaxed mb-4">
              "Gastei <strong>R$ 18K em cursos</strong> nos últimos 2 anos. 80% eu esqueci que existia.
            </p>
            <p className="text-[#242424] leading-relaxed mb-4">
              Terceiro dia no Obsidian: busquei 'funil de vendas'. <strong>37 notas apareceram</strong> — frameworks de 5 cursos diferentes CONECTADOS.
            </p>
            <p className="text-[#7C3AED] font-medium">
              Criei pitch deck em 40min usando conteúdo que EU MESMO tinha comprado.
            </p>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#E8E8E8]">
              <div className="w-10 h-10 rounded-full bg-[#E8E8E8] flex items-center justify-center text-[#484848] font-semibold text-sm">CM</div>
              <div>
                <p className="font-semibold text-black text-sm">Carlos M.</p>
                <p className="text-[#646464] text-xs">Empreendedor</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
            <Quote className="w-8 h-8 text-[#D8D8D8] mb-4" />
            <p className="text-[#242424] leading-relaxed mb-4">
              Cliente pediu logo com 'sensação de movimento'. <strong>Antes: 2h navegando Behance</strong>, Pinterest, mil abas.
            </p>
            <p className="text-[#242424] leading-relaxed mb-4">
              Depois: busquei 'movimento + design' no vault. <strong>7 exemplos que eu MESMA tinha salvado</strong> apareceram.
            </p>
            <p className="text-[#7C3AED] font-medium">
              Cliente aprovou em 15min. Pareci gênio. Era só sistema.
            </p>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#E8E8E8]">
              <div className="w-10 h-10 rounded-full bg-[#E8E8E8] flex items-center justify-center text-[#484848] font-semibold text-sm">AP</div>
              <div>
                <p className="font-semibold text-black text-sm">Ana P.</p>
                <p className="text-[#646464] text-xs">Designer</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
            <Quote className="w-8 h-8 text-[#D8D8D8] mb-4" />
            <p className="text-[#242424] leading-relaxed mb-4">
              Primeira semana: achei que era só <strong>mais uma ferramenta</strong>.
            </p>
            <p className="text-[#242424] leading-relaxed mb-4">
              Terceira semana: parei de procurar coisas por 40min. <strong>Segundo mês: meu chefe perguntou se eu tinha contratado assistente.</strong>
            </p>
            <p className="text-[#7C3AED] font-medium">
              Não tinha. Tinha sistema. Setup em 15 minutos, ROI em 2 semanas.
            </p>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#E8E8E8]">
              <div className="w-10 h-10 rounded-full bg-[#E8E8E8] flex items-center justify-center text-[#484848] font-semibold text-sm">RS</div>
              <div>
                <p className="font-semibold text-black text-sm">Rafael S.</p>
                <p className="text-[#646464] text-xs">Desenvolvedor</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════
          QUEM É O INSTRUTOR - Alan Nicolas
          ════════════════════════════════════════════════════════════ */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#646464] text-sm font-medium tracking-widest uppercase mb-4 block">Criador do Segundo Cérebro com Obsidian</span>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Alan Nicolas
            </h2>
            <p className="text-[#484848] text-lg mb-4">
              Empresário, líder da Comunidade Lendária e criador do podcast Vida Lendária. Desde 2015, experimenta ferramentas de produtividade — iPhone, Notion, Evernote...
            </p>
            <p className="text-[#484848] text-lg mb-4">
              Até que em 2023 ele encontrou o Obsidian e teve sua produtividade multiplicada. O sistema que ele criou para organizar 10+ anos de conhecimento agora está disponível para você.
            </p>
            <p className="text-[#242424] text-lg font-medium mb-8">
              "Clareza é poder, confusão é prisão."
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <p className="text-3xl font-bold text-black">500+</p>
                <p className="text-[#646464] text-sm">Livros lidos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">20k+</p>
                <p className="text-[#646464] text-sm">Alunos transformados</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">10+</p>
                <p className="text-[#646464] text-sm">Anos de jornada</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/alan-nicolas.jpg"
              alt="Alan Nicolas - Criador do Segundo Cérebro com Obsidian"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════
          PAIN OF INACTION (Schwartz) - Antes da Oferta
          ════════════════════════════════════════════════════════════ */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Vamos fazer uma conta rápida?
          </h2>

          <div className="bg-[#F8F8F8] rounded-lg p-8 border border-[#E8E8E8] text-left mb-8">
            <p className="text-[#484848] mb-6">Quantas vezes por semana você:</p>
            <div className="space-y-3 mb-6">
              {[
                'Procura algo que sabe que salvou?',
                'Gasta 20min navegando sem achar?',
                'Desiste e faz "do zero"?'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[#7C3AED] font-bold">→</span>
                  <span className="text-[#242424]">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
              <p className="text-sm text-[#646464] mb-4">Vamos ser conservadores: 3x por semana, 20min cada</p>
              <div className="space-y-2 text-[#242424]">
                <p>= <strong>1h por semana</strong> procurando coisas que você JÁ TEM</p>
                <p>= <strong>4h por mês</strong></p>
                <p>= <strong className="text-[#7C3AED]">52h por ano</strong></p>
              </div>
            </div>
          </div>

          <p className="text-xl text-black font-medium mb-4">
            52 horas = mais de <strong>1 semana inteira</strong> de trabalho.
          </p>
          <p className="text-[#484848]">
            Procurando informação que você <em>já pagou para ter</em>.
          </p>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════
          OFERTA - Estilo variante-c (fundo branco)
          ════════════════════════════════════════════════════════════ */}
      <section id="oferta" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-[#7C3AED] uppercase tracking-[0.2em] mb-4">
              Seu Segundo Cérebro
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              15 minutos de setup.
              <br />
              <span className="text-[#7C3AED]">Anos de clareza.</span>
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Não é curso de ferramenta. É sistema de pensamento.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: What's included */}
              <div>
                <p className="text-lg font-semibold text-black mb-6">
                  O que está incluído:
                </p>
                <ul className="space-y-4">
                  {[
                    'Clareza mental em 7 dias',
                    'Setup completo em 15 minutos',
                    'Sistema que dura 10+ anos',
                    'Vault pronto — copie e comece',
                    'Cérebros Lendários — veja como experts pensam',
                    'Garantia incondicional de 7 dias',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Price */}
              <div className="flex flex-col justify-center items-center text-center">
                <p className="text-sm text-gray-500 line-through mb-2">R$ 497</p>
                <p className="text-6xl md:text-7xl font-bold text-black">R$ 288</p>
                <p className="text-gray-500 mt-2">ou 12x de R$ 28,06</p>

                <button
                  onClick={handleCheckout}
                  className="mt-8 w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-lg px-8 py-5 rounded-xl transition-all duration-200 flex items-center justify-center gap-3"
                  aria-label="Ir para checkout - Quero Meu Segundo Cérebro"
                >
                  Quero Meu Segundo Cérebro
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>

                <div className="mt-6 flex items-center gap-2 text-gray-500">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">7 dias de garantia incondicional</span>
                </div>
              </div>
            </div>

            {/* ROI Calculator */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-4 text-center">
                Conta rápida
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-black">30 min/dia</p>
                  <p className="text-sm text-gray-500">procurando informação</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-black">= R$ 18.000/ano</p>
                  <p className="text-sm text-gray-500">de tempo perdido</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#7C3AED]">R$ 288</p>
                  <p className="text-sm text-gray-500">para resolver para sempre</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FAQ
          ════════════════════════════════════════════════════════════ */}
      <Section id="faq">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-[#F8F8F8] rounded-lg p-8 border border-[#E8E8E8]">
          <FAQItem
            question="Como instalo o Obsidian?"
            answer="Obsidian é gratuito e disponível para Windows, Mac, Linux, iOS e Android. No curso, mostramos passo a passo a instalação em todas as plataformas."
          />
          <FAQItem
            question="Preciso ter experiência com Obsidian?"
            answer="Não. O curso começa do zero. Se você nunca abriu o Obsidian, perfeito — vamos construir seu sistema juntos do início."
          />
          <FAQItem
            question="Como acesso o curso?"
            answer="Após a compra, você recebe acesso imediato à área de membros. Pode assistir no computador, tablet ou celular."
          />
          <FAQItem
            question="Quais são os bônus incluídos?"
            answer="Kit Starter Obsidian (seu Segundo Cérebro já configurado), Biblioteca Obsidian (conteúdo da comunidade) e Cérebros Lendários (download de vaults de referência)."
          />
          <FAQItem
            question="Por quanto tempo tenho acesso?"
            answer="Você tem 2 anos de acesso ao curso e todos os materiais. Tempo mais que suficiente para dominar o Obsidian e construir seu Segundo Cérebro."
          />
          <FAQItem
            question="O que é a garantia de 7 dias?"
            answer="Se em até 7 dias você sentir que o curso não é para você, basta pedir reembolso. Devolvemos 100% do valor, sem perguntas."
          />
          <FAQItem
            question="Quais as formas de pagamento?"
            answer="Cartão de crédito (até 12x), boleto bancário e PIX. Todas as opções são processadas de forma segura."
          />
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════
          FINAL CTA (estilo variante-c)
          ════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl md:text-4xl font-bold leading-tight">
            Clareza não é dom.
            <br />
            <span className="text-[#7C3AED]">É sistema.</span>
          </p>

          <button
            onClick={handleCheckout}
            className="mt-10 bg-white hover:bg-gray-100 text-black font-semibold text-lg px-12 py-5 rounded-xl transition-all duration-200 inline-flex items-center gap-3"
            aria-label="Ir para checkout - Começar Agora"
          >
            Começar Agora
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>

          <p className="text-sm text-gray-500 mt-6">
            Acesso imediato • 7 dias de garantia • Suporte especializado
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FOOTER COMPLETO
          ════════════════════════════════════════════════════════════ */}
      <footer className="py-16 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <InfinityLogo className="w-28 h-auto" fill="#000" aria-label="Academia Lendária" />
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Transparência */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Transparência
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://academialendaria.ai/termos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    Termos de uso
                  </a>
                </li>
                <li>
                  <a
                    href="https://academialendaria.ai/privacidade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    Política de privacidade
                  </a>
                </li>
              </ul>
            </div>

            {/* Fale Conosco */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Fale Conosco
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:suporte@vidalendaria.com"
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    E-mail
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5551998444171"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes Sociais */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Redes Sociais
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.instagram.com/oalanicolas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/oalanicolas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@oalanicolas?sub_confirmation=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/show/0dq33rWuzeCvw8Ht5CQfoV?si=d1ff45b76c76489d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    Podcast Vida Lendária
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/vidalendaria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Academia Lendár[IA] • Todos os direitos reservados
            </p>
            <p className="text-xs text-gray-400 mt-2">
              CNPJ: 00.000.000/0001-00 • Rua Exemplo, 123 - Porto Alegre/RS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
