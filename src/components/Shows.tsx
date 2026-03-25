import { ExternalLink } from "lucide-react";
import FadeIn from "./animations/FadeIn";
import SectionLabel from "./ui-custom/SectionLabel";
import VerveRule from "./ui-custom/VerveRule";
import { useShows } from "@/hooks/useShows";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const Shows = () => {
  const { data, isLoading } = useShows();

  return (
    <section id="shows" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-8 md:px-16">
        <VerveRule variant="ornament" className="mb-16">
          <SectionLabel>Performances</SectionLabel>
        </VerveRule>

        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl mb-12 leading-tight">
            Upcoming Shows
          </h2>
        </FadeIn>

        {isLoading ? (
          <p className="label-caps text-muted-foreground">Loading...</p>
        ) : !data || data.length === 0 ? (
          <FadeIn>
            <p className="text-foreground/50 font-light">
              No upcoming shows at this time. Check back soon.
            </p>
          </FadeIn>
        ) : (
          <div>
            {data.map((show: Record<string, string>, i: number) => {
              const date = show.date ? new Date(show.date) : null;
              const month = date ? MONTHS[date.getMonth()] : "";
              const day = date ? date.getDate() : "";

              return (
                <FadeIn key={i} delay={i * 60}>
                  <div className="py-6 group">
                    <div className="flex items-center gap-6 md:gap-10">
                      {/* Date */}
                      <div className="w-16 flex-shrink-0 text-center">
                        <p className="label-caps text-primary">{month}</p>
                        <p className="font-serif text-3xl leading-none text-foreground">
                          {day}
                        </p>
                      </div>

                      {/* Venue info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-lg md:text-xl text-foreground leading-snug">
                          {show.venue || show["Name of Production"] || "TBA"}
                        </p>
                        <p className="label-caps text-muted-foreground mt-1">
                          {[show.city, show.time].filter(Boolean).join(" · ")}
                        </p>
                      </div>

                      {/* Ticket link */}
                      {show.ticketUrl && show.ticketUrl !== "PLACEHOLDER_GOOGLE_SHEETS_CSV_URL" && (
                        <a
                          href={show.ticketUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 flex items-center gap-2 label-caps text-foreground/50 border border-foreground/20 px-4 py-2 hover:border-primary hover:text-primary transition-colors"
                        >
                          Tickets <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                    <VerveRule variant="fade" className="mt-6 opacity-20" />
                  </div>
                </FadeIn>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Shows;
