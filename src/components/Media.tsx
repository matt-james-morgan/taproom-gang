import FadeIn from "./animations/FadeIn";
import SectionLabel from "./ui-custom/SectionLabel";
import VerveRule from "./ui-custom/VerveRule";

// TODO: Add YouTube video IDs here
const videos: { id: string; title: string; featured?: boolean }[] = [
  // { id: "YOUR_VIDEO_ID", title: "Matt Smith — Live at [Venue]", featured: true },
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
              <div className="max-w-4xl mb-16">
                <div className="border-l-4 border-primary pl-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
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
