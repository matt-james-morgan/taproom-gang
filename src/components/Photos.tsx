import FadeIn from "./animations/FadeIn";
import SectionLabel from "./ui-custom/SectionLabel";
import VerveRule from "./ui-custom/VerveRule";

const photos = [
  { src: "/images/matt/BIGSMOKEBRASS_EDITORIAL_BIGSMOKEBRASSGROUPSHOOT6871.jpg", alt: "Big Smoke Brass" },
  { src: "/images/matt/BIGSMOKE_SOCIAL_BIGSMOKEBRASSGROUPSHOOT5516.jpg", alt: "Matt Smith & Big Smoke Brass" },
  { src: "/images/matt/Headshot (2).JPEG", alt: "Matt Smith" },
  { src: "/images/matt/BIGSMOKE_SOCIAL_BIGSMOKEBRASSGROUPSHOOT6998.jpg", alt: "Big Smoke Brass" },
  { src: "/images/matt/BIGSMOKEBRASS_EDITORIAL_BIGSMOKEBRASSGROUPSHOOT55791.jpg", alt: "Big Smoke Brass" },
  { src: "/images/matt/IMG_1798.jpg", alt: "Matt Smith live on stage" },
  { src: "/images/matt/BIGSMOKE_SOCIAL_BIGSMOKEBRASSGROUPSHOOT7011.jpg", alt: "Big Smoke Brass" },
  { src: "/images/matt/MattKStrio.JPEG", alt: "Matt Smith Trio" },
  { src: "/images/matt/Photoshoot Hang (Oct 15th)03.jpg", alt: "Matt Smith" },
  { src: "/images/matt/BIGSMOKEBRASS_EDITORIAL_BIGSMOKEBRASSGROUPSHOOT6032copy1.jpg", alt: "Big Smoke Brass editorial" },
  { src: "/images/matt/TRG_Rex.jpeg", alt: "Matt Smith with trumpet" },
  { src: "/images/matt/BIGSMOKE_SOCIAL_BIGSMOKEBRASSGROUPSHOOT5539.jpg", alt: "Big Smoke Brass" },
  { src: "/images/matt/Photoshoot Hang (Oct 15th)05.jpg", alt: "Matt Smith" },
  { src: "/images/matt/BIGSMOKEBRASS_EDITORIAL_BIGSMOKEBRASSGROUPSHOOT7088.jpg", alt: "Big Smoke Brass editorial" },
  { src: "/images/matt/TRG_Rex_1.jpeg", alt: "Matt Smith" },
  { src: "/images/matt/IMG_1929.jpg", alt: "Matt Smith live" },
  { src: "/images/matt/Photoshoot Hang (Oct 15th)14.jpg", alt: "Matt Smith" },
  { src: "/images/matt/bsb_objx_0504231807 1.jpg", alt: "Big Smoke Brass" },
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
          <FadeIn key={i} delay={Math.min(i * 40, 300)}>
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
