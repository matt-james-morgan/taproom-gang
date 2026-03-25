export interface PressQuote {
  quote: string;
  source: string;
  author?: string;
  url?: string;
  year?: string;
}

// TODO: Replace with real press quotes
export const pressQuotes: PressQuote[] = [
  {
    quote: "Press quote to be supplied.",
    source: "Publication Name",
    year: "2024",
  },
];
