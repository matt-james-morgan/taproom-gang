import FadeIn from "./animations/FadeIn";
import SectionLabel from "./ui-custom/SectionLabel";
import VerveRule from "./ui-custom/VerveRule";

const About = () => (
  <section id="about" className="py-24 md:py-36 bg-background">
    <div className="container mx-auto px-8 md:px-16">
      <VerveRule variant="ornament" className="mb-16">
        <SectionLabel>Biography</SectionLabel>
      </VerveRule>

      <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">

        {/* Bio text */}
        <div className="md:col-span-7">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              About
            </h2>
            {/* TODO: Replace with real biography */}
            <p className="font-serif italic text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6">
              The Tap Room Gang is a collaborative quartet that brings fresh, interactive takes on classics and hidden gems from the 1920s and '30s hot jazz repertoire.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-4 font-sans font-light text-base md:text-lg">
              They hold a weekly residency on Monday nights at Steadfast Brewing Co. in Toronto, where they have become a local staple for musicians, dancers, and jazz fans alike.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8 font-sans font-light text-base md:text-lg">
              The Tap Room Gang recently released their debut record, <em>Every Day Is Monday</em>, which received a Silver Medal from the International Trumpet Guild for their 2025 Recorded Music Awards in the Jazz category.
            </p>
            <div className="border-l-2 border-primary/40 pl-5 space-y-2">
              <p className="label-caps text-muted-foreground mb-3">The Gang</p>
              {[
                ["Sean McCarthy", "Bass Saxophone & Leader"],
                ["Matt Smith", "Cornet"],
                ["Taylor Maslin", "Clarinet & Tenor Saxophone"],
                ["Jared Higgins", "Banjo"],
              ].map(([name, role]) => (
                <div key={name} className="flex gap-3 items-baseline">
                  <span className="font-serif text-foreground/90 text-sm">{name}</span>
                  <span className="text-muted-foreground text-xs font-light tracking-wide">— {role}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Secondary photo */}
        <div className="md:col-span-5">
          <FadeIn delay={150}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/images/taproom/horizontal-4pc.jpg"
                alt="The Tap Room Gang"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  </section>
);

export default About;
