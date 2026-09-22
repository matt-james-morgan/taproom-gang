import FadeIn from "./animations/FadeIn";
import SectionLabel from "./ui-custom/SectionLabel";
import VerveRule from "./ui-custom/VerveRule";

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
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
            <p className="font-serif italic text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6">
              Born in 2024, The Tap Room Gang has quickly become a staple in the
              Toronto music landscape.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-4 font-sans font-light text-base md:text-lg">
              The collaborative quartet develops fresh, "life affirming" (Stuart
              Laughton, Canadian Brass) takes on classics and hidden gems from
              the 1920s & 30s hot jazz repertoire. Led by bass saxophonist Sean
              McCarthy, the Tap Room Gang is rounded out by Matt Smith, Taylor
              Maslin, and Jared Higgins. Already prominent on the scene as
              individuals, these four young musicians come together with a
              marriage of styles that breathes life into every room.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-4 font-sans font-light text-base md:text-lg">
              Since their inception, the group has performed over 100 Mondays at
              their weekly residency at Steadfast Brewing Co., as well as
              numerous shows at notable venues across Ontario such as The Rex
              Hotel, The Jazz Room, Blou Room, and at the Markham Jazz Fest. Of
              their live performances, Mark Miller (former Globe and Mail music
              critic) says: "the interpretations are fresh - idiomatically
              secure[...], stylish without being studied, conscientious but not
              studious." This approachable sound and infectious energy has
              helped to foster a large following of musicians, dancers, and jazz
              fans. Their debut record, <em>Every Day Is Monday</em>, received a
              silver medal from the International Trumpet Guild for their 2025
              recorded music awards in the Jazz category, who called the
              recording "INCREDIBLY fun to listen to".
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8 font-sans font-light text-base md:text-lg">
              Whether you hear them live, or on record, the Tap Room Gang are
              undeniable, bringing new energy and excitement to the Canadian
              landscape of traditional jazz. It's clear from the number of
              regular listeners who make their way to Steadfast Brewing Co. on
              Monday nights that the group is one to watch.
            </p>
            <div className="border-l-2 border-primary/40 pl-5 space-y-2">
              <p className="label-caps text-muted-foreground mb-3">The Gang</p>
              {[
                ["Sean McCarthy", "Bass Saxophone & Leader"],
                ["Matt Smith", "Cornet"],
                ["Taylor Maslin", "Clarinet & Tenor Saxophone"],
                ["Jared Higgins", "Tenor Banjo"],
              ].map(([name, role]) => (
                <div key={name} className="flex gap-3 items-baseline">
                  <span className="font-serif text-foreground/90 text-sm">
                    {name}
                  </span>
                  <span className="text-muted-foreground text-xs font-light tracking-wide">
                    — {role}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Secondary photo */}
        <div className="md:col-span-5 md:sticky md:top-24">
          <FadeIn delay={150}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/images/taproom/band-portrait.jpg"
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
