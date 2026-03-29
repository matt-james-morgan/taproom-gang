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
              Matt Smith is a jazz trumpet player and composer based in Toronto.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-4 font-sans font-light text-base md:text-lg">
              Over the past decade, he has performed at venues and festivals across Canada and beyond, bringing a distinctive voice to the classic jazz tradition. His music draws from the hard bop lineage while maintaining an original, contemporary sensibility.
            </p>
            <p className="text-foreground/70 leading-relaxed font-sans font-light text-base md:text-lg">
              {/* TODO: Additional biography paragraphs to be supplied */}
              Biography to be updated.
            </p>
          </FadeIn>
        </div>

        {/* Secondary photo */}
        <div className="md:col-span-5">
          <FadeIn delay={150}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/images/matt/1 Use me (1).jpg"
                alt="Matt Smith"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  </section>
);

export default About;
