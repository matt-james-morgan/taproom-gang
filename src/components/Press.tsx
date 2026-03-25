import FadeIn from "./animations/FadeIn";
import SectionLabel from "./ui-custom/SectionLabel";
import VerveRule from "./ui-custom/VerveRule";
import { pressQuotes } from "@/data/pressData";

const Press = () => (
  <section id="press" className="py-24 md:py-36 bg-card">
    <div className="container mx-auto px-8 md:px-16">
      <VerveRule variant="ornament" className="mb-16">
        <SectionLabel>Press</SectionLabel>
      </VerveRule>

      <FadeIn>
        <h2 className="font-serif text-4xl md:text-5xl mb-12 leading-tight">
          What They're Saying
        </h2>
      </FadeIn>

      {pressQuotes.length === 1 ? (
        /* Single large featured quote */
        <FadeIn delay={100}>
          <div className="max-w-3xl">
            <VerveRule variant="flush" className="mb-8" />
            <blockquote className="font-serif italic text-2xl md:text-4xl text-foreground/90 leading-relaxed mb-8">
              "{pressQuotes[0].quote}"
            </blockquote>
            <div className="flex items-center gap-3">
              <span className="text-primary text-xs">◆</span>
              <p className="label-caps text-muted-foreground">
                {pressQuotes[0].author ? `${pressQuotes[0].author}, ` : ""}
                {pressQuotes[0].source}
                {pressQuotes[0].year ? ` · ${pressQuotes[0].year}` : ""}
              </p>
            </div>
          </div>
        </FadeIn>
      ) : (
        /* Grid of quotes */
        <div className="grid md:grid-cols-2 gap-12">
          {pressQuotes.map((q, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div>
                <VerveRule variant="flush" className="mb-6" />
                <blockquote className="font-serif italic text-lg md:text-xl text-foreground/90 leading-relaxed mb-5">
                  "{q.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-xs">◆</span>
                  <p className="label-caps text-muted-foreground">
                    {q.author ? `${q.author}, ` : ""}
                    {q.source}
                    {q.year ? ` · ${q.year}` : ""}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  </section>
);

export default Press;
