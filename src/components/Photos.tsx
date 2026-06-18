import FadeIn from "./animations/FadeIn";
import SectionLabel from "./ui-custom/SectionLabel";
import VerveRule from "./ui-custom/VerveRule";

const photos = [
  { src: "/images/taproom/vertical-4pc.jpg", alt: "The Tap Room Gang — portrait" },
  { src: "/images/taproom/funny.jpg", alt: "The Tap Room Gang — live" },
  { src: "/images/taproom/horizontal-4pc.jpg", alt: "The Tap Room Gang — group" },
  { src: "/images/taproom/funny-2.jpg", alt: "The Tap Room Gang — live" },
];

const Photos = () => (
  <section id="photos" className="py-24 md:py-36 bg-card">
    <div className="container mx-auto px-8 md:px-16">
      <VerveRule variant="ornament" className="mb-16">
        <SectionLabel>Photos</SectionLabel>
      </VerveRule>

      <FadeIn>
        <h2 className="font-serif text-4xl md:text-5xl mb-12 leading-tight">
          Gallery
        </h2>
      </FadeIn>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
        {photos.map((photo, i) => (
          <FadeIn key={i} delay={Math.min(i * 80, 300)}>
            <div className="break-inside-avoid mb-3 overflow-hidden group relative">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Photos;
