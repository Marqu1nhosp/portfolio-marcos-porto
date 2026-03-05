import { GraduationCap, Award, Calendar, Briefcase } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
  {
    icon: GraduationCap,
    title: "Bacharelado em Sistemas de Informação",
    org: "Unex",
    period: "2020 – 2025",
    desc: "Formação sólida em Engenharia de Software, Estruturas de Dados, Banco de Dados, Arquitetura de Sistemas e Desenvolvimento Web. Ao longo da graduação, desenvolvi projetos práticos aplicando boas práticas de programação, princípios de orientação a objetos, versionamento com Git e metodologias ágeis. Experiência em modelagem de sistemas, construção de APIs RESTful, integração entre front-end e back-end, além de aplicação de padrões de projeto e conceitos de escalabilidade e performance. A graduação consolidou minha visão analítica, capacidade de resolução de problemas e foco em desenvolvimento Full Stack com qualidade e eficiência."
  },
  {
    icon: Briefcase,
    title: "Full Stack Developer (Freelance)",
    org: "Engagers",
    period: "Julho de 2025 – Setembro de 2025 (3 meses)",
    desc: "Atuação remota no desenvolvimento e manutenção de aplicações web. No front-end, criação de interfaces responsivas utilizando React.js, HTML, CSS e JavaScript. No back-end, desenvolvimento e evolução de APIs com PHP (Symfony), além de gerenciamento e otimização de banco de dados MySQL, garantindo estabilidade e desempenho das soluções."
  },
  {
    icon: Briefcase,
    title: "Programador / Técnico de TI",
    org: "UESB - UINFOR (Unidade Organizacional de Informática)",
    period: "2019 – 2021",
    desc: "Atuação no desenvolvimento, manutenção e suporte de sistemas institucionais essenciais. Utilização de PHP com Laravel para implementação de novas funcionalidades, além do uso do Twig na construção de interfaces dinâmicas e organizadas. Desenvolvimento de interfaces responsivas com Bootstrap. Gestão e otimização de bancos de dados MySQL e PostgreSQL, garantindo integridade e desempenho. Colaboração com equipes multidisciplinares e suporte contínuo aos sistemas, contribuindo para estabilidade, eficiência e evolução das soluções."
  },
  {
    icon: Award,
    title: "Técnico de Informática - Centro Territorial de Educação Profissional, 2018. ",
    org: "CETEP",
    period: "2018",
    desc: "Colégio de ensino médio integrado ao ensino profissional, são 4 anos de curso com matérias e atividades de TI como manutenção, programação, redes e design. Disciplinas de: Redes de Computadores, Inclusão Digital, Linguagem e Técnicas de Programação, Fundamentos e Arquitetura de Computadores, Linguagem de Programação, Banco de Dados e Programação Web.",
  },
];

const ExperienceSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="experiencia" className="section-padding bg-muted/30">
      <div ref={ref} className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Experiência & <span className="gradient-text">Formação</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-6 z-10 animate-pulse-glow" />

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="ml-10 md:ml-0 md:w-1/2 glass-card p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.org}</p>
                      </div>
                    </div>
                    <span className="inline-block text-xs font-mono text-primary mb-3">
                      {item.period}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
