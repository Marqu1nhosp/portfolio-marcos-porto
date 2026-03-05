import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import marcos from "@/assets/marcos.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4 md:pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Texto - esquerda em desktop */}
          <div className="md:order-1 text-center md:text-left pt-12 md:pt-0">
            <div className="inline-block md:inline-block mb-6 animate-slide-up">
              <span className="tech-badge font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Disponível para projetos
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 mt-1 md:mt-0 animate-slide-up animate-slide-up-delay-1">
              Marcos Antonio Porto Matos
            </h1>

            {/* Foto em mobile - aparece após H1 */}
            <div className="md:hidden flex justify-center animate-slide-up animate-slide-up-delay-2 my-8">
              <div className="relative w-[450px] h-[590px] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl hover:shadow-[0_0_40px_-10px_hsl(213_94%_58%_/_0.4)] transition-shadow duration-500 group">
                <img
                  src={marcos}
                  alt="Marcos Antonio Porto Matos"
                  className="w-full h-full object-cover object-[center_100%] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-base text-muted-foreground mb-2 animate-slide-up animate-slide-up-delay-2">
              Bacharel em Sistemas de Informação
            </p>

            <p className="text-xl sm:text-2xl md:text-2xl font-semibold gradient-text mb-6 animate-slide-up animate-slide-up-delay-2">
              Desenvolvedor Full Stack
            </p>

            <p className="max-w-lg text-muted-foreground text-base md:text-lg leading-relaxed mb-10 animate-slide-up animate-slide-up-delay-3">
              Desenvolvedor Full Stack formado em Sistemas de Informação pela Unex, com foco em construção de aplicações web escaláveis utilizando React, Next.js, Node.js e Spring Boot. Experiência no desenvolvimento de APIs RESTful, integração front-end/back-end e aplicação de boas práticas de arquitetura e código limpo
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 animate-slide-up animate-slide-up-delay-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Ver Projetos
                <ArrowDown size={18} />
              </a>
              <a
                href="/public/curriculo.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                <Download size={18} />
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/marqu1nhosp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Foto em desktop - direita */}
          <div className="hidden md:flex md:order-2 justify-center animate-slide-up">
            <div className="relative w-[450px] h-[620px] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl hover:shadow-[0_0_40px_-10px_hsl(213_94%_58%_/_0.4)] transition-shadow duration-500 group">
              <img
                src={marcos}
                alt="Marcos Antonio Porto Matos"
                className="w-full h-full object-cover object-[center_100%] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
