import { Code2, Rocket, Target, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  { icon: Code2, label: "Código Limpo", desc: "SOLID, DRY, Clean Architecture" },
  { icon: Rocket, label: "Performance", desc: "Aplicações rápidas e otimizadas" },
  { icon: Target, label: "Foco em Resultados", desc: "Entrega de valor para o negócio" },
  { icon: Zap, label: "Metodologias Ágeis", desc: "Scrum, Kanban, CI/CD" },
];

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="sobre" className="section-padding">
      <div ref={ref} className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Sobre <span className="gradient-text">Mim</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              Sou Bacharel em Sistemas de Informação e Desenvolvedor Full-Stack com foco na construção de aplicações web modernas e escaláveis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Possuo experiência no desenvolvimento de interfaces com <strong className="text-foreground">React.js</strong> e <strong className="text-foreground">Next.js</strong>, utilizando <strong className="text-foreground">Tailwind CSS</strong> e <strong className="text-foreground">Styled Components</strong> para criação de aplicações performáticas, responsivas e com design consistente. No back-end, atuo com <strong className="text-foreground">Node.js</strong> (com <strong className="text-foreground">Fastify</strong> e <strong className="text-foreground">Express</strong>) no desenvolvimento de APIs REST bem estruturadas, além de aprofundar meus conhecimentos em <strong className="text-foreground">Spring Boot</strong>, sempre aplicando boas práticas de arquitetura e design de software.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trabalho com <strong className="text-foreground">TypeScript</strong> e bancos de dados relacionais como <strong className="text-foreground">PostgreSQL</strong> e <strong className="text-foreground">MySQL</strong>, aplicando boas práticas como organização em camadas, <strong className="text-foreground">Clean Code</strong> e arquitetura orientada a APIs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Meu objetivo é atuar em projetos desafiadores que impactem positivamente a
              vida das pessoas, contribuindo com soluções de alta qualidade e inovação
              tecnológica.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="glass-card p-5 hover:border-primary/30 transition-all duration-300 group"
              >
                <Icon
                  size={28}
                  className="text-primary mb-3 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-semibold text-sm mb-1">{label}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
