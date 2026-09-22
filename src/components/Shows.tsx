import { ExternalLink } from "lucide-react";
import FadeIn from "./animations/FadeIn";
import SectionLabel from "./ui-custom/SectionLabel";
import VerveRule from "./ui-custom/VerveRule";
import { useShows, type ShowData } from "@/hooks/useShows";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const parseShowDate = (value: string): Date | null => {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const Shows = () => {
  const { data, isLoading } = useShows();

  return (
    <section id="shows" className="py-20 md:py-28 bg-background">
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
            {data.map((show: ShowData, i: number) => {
              const parsedDate = parseShowDate(show.date);
              const month = parsedDate ? MONTHS[parsedDate.getMonth()] : null;
              const day = parsedDate ? parsedDate.getDate() : null;

              return (
                <FadeIn key={i} delay={i * 60}>
                  <div className="py-6 group">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-10">
                      <div className="flex items-center gap-6 md:gap-10 flex-1 min-w-0">
                        {/* Date */}
                        <div className="w-16 flex-shrink-0 text-center">
                          {parsedDate ? (
                            <>
                              <p className="label-caps text-muted-foreground">{month}</p>
                              <p className="font-serif text-3xl leading-none text-foreground">
                                {day}
                              </p>
                            </>
                          ) : (
                            <p className="label-caps text-muted-foreground leading-tight">
                              {show.date}
                            </p>
                          )}
                        </div>

                        {/* Venue info */}
                        <div className="flex-1 min-w-0">
                          <p className="font-serif text-lg md:text-xl text-foreground leading-snug">
                            {show.venue}
                          </p>
                          <p className="label-caps text-muted-foreground mt-1">
                            {[show.time, show.address].filter(Boolean).join(" · ")}
                          </p>
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap items-center gap-3 sm:flex-shrink-0">
                        {show.linkToEvent && (
                          <a
                            href={show.linkToEvent}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 label-caps text-foreground/50 border border-foreground/20 px-4 py-2 hover:border-primary hover:text-primary transition-colors"
                          >
                            Details <ExternalLink size={10} />
                          </a>
                        )}
                        {show.ticketUrl && (
                          <a
                            href={show.ticketUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 label-caps text-foreground/50 border border-foreground/20 px-4 py-2 hover:border-primary hover:text-primary transition-colors"
                          >
                            Tickets <ExternalLink size={10} />
                          </a>
                        )}
                      </div>
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
