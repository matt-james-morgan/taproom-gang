import FadeIn from "./animations/FadeIn";
import SectionLabel from "./ui-custom/SectionLabel";
import VerveRule from "./ui-custom/VerveRule";

const videos: { id: string; title: string; featured?: boolean }[] = [
  { id: "MJ3vip2AXAc", title: "The Tap Room Gang", featured: true },
];

const VideoPlayer = ({ id, title }: { id: string; title: string }) => (
  <div className="aspect-video w-full">
    <iframe
      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-full h-full"
    />
  </div>
);

const Media = () => (
  <section id="media" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-8 md:px-16">
      <VerveRule variant="ornament" className="mb-16">
        <SectionLabel>Media</SectionLabel>
      </VerveRule>

      <FadeIn>
        <h2 className="font-serif text-4xl md:text-5xl mb-12 leading-tight">
          Watch &amp; Listen
        </h2>
      </FadeIn>

      <div>
        {videos.filter((v) => v.featured).map((v) => (
          <FadeIn key={v.id}>
            <div className="w-full mb-16">
              <VideoPlayer id={v.id} title={v.title} />
            </div>
          </FadeIn>
        ))}

        {videos.filter((v) => !v.featured).length > 0 && (
          <div className="grid md:grid-cols-2 gap-8">
            {videos.filter((v) => !v.featured).map((v, i) => (
              <FadeIn key={v.id} delay={i * 100}>
                <VideoPlayer id={v.id} title={v.title} />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
);

export default Media;
