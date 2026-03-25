import FadeIn from "./animations/FadeIn";
import SectionLabel from "./ui-custom/SectionLabel";
import VerveRule from "./ui-custom/VerveRule";

const Hero = () => (
  <section id="home" className="min-h-screen bg-background flex items-center">
    <div className="container mx-auto px-8 md:px-16">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center min-h-screen py-28">

        {/* Left: typographic treatment */}
        <div className="order-2 md:order-1">
          <FadeIn>
            <SectionLabel className="mb-6">Jazz Trumpet</SectionLabel>
            <div className="mb-2">
              <h1 className="font-serif italic font-normal leading-none text-[18vw] md:text-[8vw] text-foreground">
                Matt
              </h1>
              <h1 className="font-serif font-bold leading-none text-[13vw] md:text-[6vw] text-primary">
                Smith
              </h1>
            </div>
            <VerveRule className="mt-6 mb-8" />
            <p className="label-caps text-muted-foreground">
              Toronto · Jazz Trumpet
            </p>
          </FadeIn>
        </div>

        {/* Right: portrait photo */}
        <div className="order-1 md:order-2">
          <FadeIn delay={200}>
            <div className="relative aspect-[3/4] overflow-hidden">
              {/* TODO: Replace with real hero portrait photo */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <p className="label-caps text-muted-foreground">
                  Hero portrait coming soon
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  </section>
);

export default Hero;
