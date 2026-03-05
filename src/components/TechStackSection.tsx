import { useScrollReveal } from "@/hooks/useScrollReveal";

type TechCategory = {
  title: string;
  color: string;
  items: string[];
};

const categories: TechCategory[] = [
  {
    title: "Frontend",
    color: "from-blue-500/20 to-cyan-500/20",
    items: ["React", "TypeScript", "Next.js", "TailwindCSS"],
  },
  {
    title: "Backend",
    color: "from-emerald-500/20 to-green-500/20",
    items: ["Node.js", "Express", "Fastify", "Spring Boot"],
  },
  {
    title: "Banco de Dados",
    color: "from-orange-500/20 to-amber-500/20",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    title: "Ferramentas",
    color: "from-purple-500/20 to-pink-500/20",
    items: ["Git", "Docker", "Prisma", "VS CODE"],
  },
];

const TechStackSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="stack" className="section-padding bg-muted/30">
      <div ref={ref} className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Stack <span className="gradient-text">Tecnológica</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div
                className={`w-full h-1 rounded-full bg-gradient-to-r ${cat.color} mb-5`}
              />
              <h3 className="font-semibold text-lg mb-4">{cat.title}</h3>
              <div className="space-y-2">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-secondary-foreground transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
