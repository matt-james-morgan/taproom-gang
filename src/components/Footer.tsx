const Footer = () => (
  <footer className="pt-20 pb-10 bg-background border-t border-border/30">
    <div className="container mx-auto px-8 md:px-16">

      {/* Large centred logo */}
      <div className="flex justify-center mb-12">
        <img
          src="/images/taproom/logo-primary-white.png"
          alt="The Tap Room Gang"
          className="h-48 w-auto opacity-90"
        />
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border/20 pt-8">
        <span className="label-caps text-muted-foreground">
          © {new Date().getFullYear()} The Tap Room Gang
        </span>
        <a
          href="mailto:thetaproomgang@gmail.com"
          className="label-caps text-muted-foreground hover:text-primary transition-colors"
        >
          {/* TODO: Replace with real email */}
          thetaproomgang@gmail.com
        </a>
      </div>

    </div>
  </footer>
);

export default Footer;
