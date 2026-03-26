import FadeIn from "./animations/FadeIn";
import SectionLabel from "./ui-custom/SectionLabel";
import VerveRule from "./ui-custom/VerveRule";

const videos: { id: string; title: string; featured?: boolean }[] = [
  { id: "UuYHmOnnEC4", title: "Matt Smith — Trumpet · Max Simpson — Bass · Evan Miles — Piano · Robert Chapman — Guitar", featured: true },
];

const Media = () => (
  <section id="media" className="py-24 md:py-36 bg-background">
    <div className="container mx-auto px-8 md:px-16">
      <VerveRule variant="ornament" className="mb-16">
        <SectionLabel>Media</SectionLabel>
      </VerveRule>

      <FadeIn>
        <h2 className="font-serif text-4xl md:text-5xl mb-12 leading-tight">
          Watch &amp; Listen
        </h2>
      </FadeIn>

      {videos.length === 0 ? (
        <FadeIn>
          <p className="text-foreground/50 font-light">
            Video content coming soon.
          </p>
        </FadeIn>
      ) : (
        <div>
          {/* Featured video */}
          {videos.filter((v) => v.featured).map((v) => (
            <FadeIn key={v.id}>
              <div className="w-full mb-16">
                {/* Art Deco frame */}
                <div className="relative p-4">
                  {/* Outer border */}
                  <div className="absolute inset-0 border border-primary/40" />
                  {/* Inner border */}
                  <div className="absolute inset-2 border border-primary/20" />

                  {/* Corner ornaments — top-left */}
                  <svg className="absolute top-0 left-0 w-12 h-12 text-primary" viewBox="0 0 48 48" fill="none">
                    <path d="M2 2 L22 2 L22 6 L6 6 L6 22 L2 22 Z" fill="currentColor" fillOpacity="0.6"/>
                    <path d="M2 2 L14 2 L14 4 L4 4 L4 14 L2 14 Z" fill="currentColor" fillOpacity="0.9"/>
                    <line x1="2" y1="26" x2="2" y2="30" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1"/>
                    <line x1="26" y1="2" x2="30" y2="2" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1"/>
                  </svg>

                  {/* Corner ornaments — top-right */}
                  <svg className="absolute top-0 right-0 w-12 h-12 text-primary" viewBox="0 0 48 48" fill="none">
                    <path d="M46 2 L26 2 L26 6 L42 6 L42 22 L46 22 Z" fill="currentColor" fillOpacity="0.6"/>
                    <path d="M46 2 L34 2 L34 4 L44 4 L44 14 L46 14 Z" fill="currentColor" fillOpacity="0.9"/>
                    <line x1="46" y1="26" x2="46" y2="30" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1"/>
                    <line x1="22" y1="2" x2="18" y2="2" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1"/>
                  </svg>

                  {/* Corner ornaments — bottom-left */}
                  <svg className="absolute bottom-0 left-0 w-12 h-12 text-primary" viewBox="0 0 48 48" fill="none">
                    <path d="M2 46 L22 46 L22 42 L6 42 L6 26 L2 26 Z" fill="currentColor" fillOpacity="0.6"/>
                    <path d="M2 46 L14 46 L14 44 L4 44 L4 34 L2 34 Z" fill="currentColor" fillOpacity="0.9"/>
                    <line x1="2" y1="22" x2="2" y2="18" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1"/>
                    <line x1="26" y1="46" x2="30" y2="46" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1"/>
                  </svg>

                  {/* Corner ornaments — bottom-right */}
                  <svg className="absolute bottom-0 right-0 w-12 h-12 text-primary" viewBox="0 0 48 48" fill="none">
                    <path d="M46 46 L26 46 L26 42 L42 42 L42 26 L46 26 Z" fill="currentColor" fillOpacity="0.6"/>
                    <path d="M46 46 L34 46 L34 44 L44 44 L44 34 L46 34 Z" fill="currentColor" fillOpacity="0.9"/>
                    <line x1="46" y1="22" x2="46" y2="18" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1"/>
                    <line x1="22" y1="46" x2="18" y2="46" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1"/>
                  </svg>

                  {/* Mid-edge accent diamonds */}
                  <svg className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px w-6 h-3 text-primary" viewBox="0 0 24 12" fill="none">
                    <polygon points="12,0 24,12 0,12" fill="currentColor" fillOpacity="0.5"/>
                  </svg>
                  <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-px w-6 h-3 text-primary" viewBox="0 0 24 12" fill="none">
                    <polygon points="12,12 24,0 0,0" fill="currentColor" fillOpacity="0.5"/>
                  </svg>

                  {/* Video */}
                  <div className="aspect-video w-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}?autoplay=1&mute=1`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <p className="font-serif italic text-foreground/70 mt-4 text-lg">
                  {v.title}
                </p>
              </div>
            </FadeIn>
          ))}

          {/* Additional videos grid */}
          {videos.filter((v) => !v.featured).length > 0 && (
            <div className="grid md:grid-cols-2 gap-8">
              {videos.filter((v) => !v.featured).map((v, i) => (
                <FadeIn key={v.id} delay={i * 100}>
                  <div>
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${v.id}`}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <p className="font-serif italic text-foreground/60 mt-3">
                      {v.title}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  </section>
);

export default Media;
