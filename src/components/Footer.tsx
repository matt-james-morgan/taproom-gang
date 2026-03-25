const Footer = () => (
  <footer className="py-10 bg-background border-t border-border/30">
    <div className="container mx-auto px-8 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-serif italic text-foreground/40 text-sm">
          Matt Smith
        </span>
        <span className="label-caps text-muted-foreground">
          © {new Date().getFullYear()}
        </span>
        <a
          href="mailto:placeholder@example.com"
          className="label-caps text-muted-foreground hover:text-primary transition-colors"
        >
          {/* TODO: Replace with real email */}
          placeholder@example.com
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
