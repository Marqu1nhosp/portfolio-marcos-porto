import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Marcos Antonio Porto Matos. Todos os direitos reservados.
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/Marqu1nhosp" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/marqu1nhosp/" },
          { icon: Mail, href: "" },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
