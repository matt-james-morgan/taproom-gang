import FadeIn from "./animations/FadeIn";
import SectionLabel from "./ui-custom/SectionLabel";
import VerveRule from "./ui-custom/VerveRule";

const Contact = () => (
  <section id="contact" className="py-24 md:py-36 bg-card">
    <div className="container mx-auto px-8 md:px-16">
      <VerveRule variant="ornament" className="mb-16">
        <SectionLabel>Contact</SectionLabel>
      </VerveRule>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* Left: heading + booking note */}
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            Get in Touch
          </h2>
          <p className="text-foreground/60 font-light leading-relaxed text-base md:text-lg max-w-md">
            For booking, media inquiries, collaborations, and commissions, reach out directly.
          </p>
        </FadeIn>

        {/* Right: contact details */}
        <FadeIn delay={150}>
          <div className="space-y-8">
            {/* Email */}
            <div>
              <p className="label-caps text-muted-foreground mb-2">Email</p>
              <a
                href="mailto:placeholder@example.com"
                className="font-serif italic text-xl md:text-2xl text-foreground hover:text-primary transition-colors"
              >
                {/* TODO: Replace with real email */}
                placeholder@example.com
              </a>
            </div>

            <VerveRule variant="fade" className="opacity-30" />

            {/* Social */}
            <div>
              <p className="label-caps text-muted-foreground mb-4">Follow</p>
              <div className="flex flex-wrap gap-6">
                <a
                  href="https://www.instagram.com/matt.ja.smith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-caps text-foreground/50 hover:text-primary transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@mattsmithtrumpet/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-caps text-foreground/50 hover:text-primary transition-colors"
                >
                  YouTube
                </a>
                <a
                  href="https://open.spotify.com/artist/0fNWRJ89HfzhPgaPuPnOC1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-caps text-foreground/50 hover:text-primary transition-colors"
                >
                  Spotify
                </a>
              </div>
            </div>

            <VerveRule variant="fade" className="opacity-30" />

            {/* Also plays in */}
            <div>
              <p className="label-caps text-muted-foreground mb-4">Also Plays In</p>
              <div className="flex flex-wrap gap-6">
                <a
                  href="https://open.spotify.com/artist/4ccByuNEWwR0wwLyNgxRkX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-caps text-foreground/50 hover:text-primary transition-colors"
                >
                  The Tap Room Gang
                </a>
                <a
                  href="https://open.spotify.com/artist/699HfpoetnBNCFAES0hksJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-caps text-foreground/50 hover:text-primary transition-colors"
                >
                  Big Smoke Brass
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  </section>
);

export default Contact;
