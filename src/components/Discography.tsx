import { ExternalLink } from "lucide-react";
import FadeIn from "./animations/FadeIn";
import SectionLabel from "./ui-custom/SectionLabel";
import VerveRule from "./ui-custom/VerveRule";
import { discography } from "@/data/discographyData";

const Discography = () => (
  <section id="discography" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-8 md:px-16">
      <VerveRule variant="ornament" className="mb-16">
        <SectionLabel>Discography</SectionLabel>
      </VerveRule>

      <FadeIn>
        <h2 className="font-serif text-4xl md:text-5xl mb-12 leading-tight">
          Recordings
        </h2>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {discography.map((album, i) => (
          <FadeIn key={album.title} delay={i * 80}>
            <div className="group border border-foreground/15 hover:border-foreground/35 transition-colors duration-300 p-0 bg-card">
              {/* Cover art */}
              <div className="aspect-square bg-muted overflow-hidden">
                {album.coverArtWebp || album.coverArt ? (
                  <picture>
                    {album.coverArtWebp && (
                      <source srcSet={album.coverArtWebp} type="image/webp" />
                    )}
                    <img
                      src={album.coverArt}
                      alt={album.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </picture>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="label-caps text-muted-foreground/40 text-center px-3">
                      Cover art coming soon
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-serif font-medium text-base leading-snug mb-1">
                  {album.title}
                </h3>
                <VerveRule className="my-2" />
                <p className="label-caps text-foreground/60">
                  {album.year}{album.label ? ` · ${album.label}` : ""}
                </p>
                {album.description && (
                  <p className="text-foreground/60 text-sm mt-2 leading-relaxed font-light">
                    {album.description}
                  </p>
                )}

                {/* Streaming links */}
                {album.streamingLinks && (
                  <div className="flex flex-wrap gap-x-3 gap-y-2 mt-3">
                    {album.streamingLinks.spotify && (
                      <a
                        href={album.streamingLinks.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label-caps text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                      >
                        Spotify <ExternalLink size={9} />
                      </a>
                    )}
                    {album.streamingLinks.appleMusic && (
                      <a
                        href={album.streamingLinks.appleMusic}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label-caps text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                      >
                        Apple <ExternalLink size={9} />
                      </a>
                    )}
                    {album.streamingLinks.bandcamp && (
                      <a
                        href={album.streamingLinks.bandcamp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label-caps text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                      >
                        Bandcamp <ExternalLink size={9} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Discography;
