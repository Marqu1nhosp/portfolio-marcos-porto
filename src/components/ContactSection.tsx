import { useState } from "react";
import { Mail, Linkedin, Github, MessageCircle, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/marqu1nhosp/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Marqu1nhosp" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/5577988695668" },
];

const ContactSection = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder for form handling
    alert("Mensagem enviada com sucesso! (placeholder)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="section-padding">
      <div ref={ref} className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Entre em <span className="gradient-text">Contato</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Links */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Estou sempre aberto a novas oportunidades e conversas sobre tecnologia.
              Sinta-se à vontade para entrar em contato!
            </p>
            <div className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Sua mensagem..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity w-full justify-center"
            >
              <Send size={18} />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
